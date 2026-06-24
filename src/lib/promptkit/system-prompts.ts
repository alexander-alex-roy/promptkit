export type { ModelCategory, ModelEcosystem, SourceRef, SystemPromptEntry } from './types';

import { ALL_PROVIDER_ENTRIES } from './providers';
import type { ModelCategory, SystemPromptEntry } from './types';

const TEXT = ALL_PROVIDER_ENTRIES.filter(e => e.category === 'text');
const CODE = ALL_PROVIDER_ENTRIES.filter(e => e.category === 'code');
const IMAGE = ALL_PROVIDER_ENTRIES.filter(e => e.category === 'image');
const VIDEO = ALL_PROVIDER_ENTRIES.filter(e => e.category === 'video');
const VISION = ALL_PROVIDER_ENTRIES.filter(e => e.category === 'vision');
const CHARACTER = ALL_PROVIDER_ENTRIES.filter(e => e.category === 'character');
const THREE_D = ALL_PROVIDER_ENTRIES.filter(e => e.category === '3d');

export const ALL_ENTRIES: SystemPromptEntry[] = ALL_PROVIDER_ENTRIES;

export const ENTRIES_BY_CATEGORY: Record<ModelCategory, SystemPromptEntry[]> = {
  text: TEXT,
  code: CODE,
  image: IMAGE,
  video: VIDEO,
  vision: VISION,
  character: CHARACTER,
  '3d': THREE_D,
};

export function getEntryById(id: string): SystemPromptEntry | undefined {
  return ALL_ENTRIES.find(e => e.id === id);
}

export function getUniqueProviders(): string[] {
  const set = new Set(ALL_ENTRIES.map(e => e.provider));
  return Array.from(set).sort();
}

export function getSourceQuality(entry: SystemPromptEntry): 'verified' | 'partial' | 'limited' {
  const officialCount = entry.sources.filter(
    s => s.type === 'docs' || s.type === 'whitepaper' || s.type === 'api-reference' || s.type === 'model-card'
  ).length;
  if (officialCount >= 3) return 'verified';
  if (officialCount >= 1) return 'partial';
  return 'limited';
}

export function searchEntries(query: string): SystemPromptEntry[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase().trim();
  const qWords = q.split(/\s+/).filter(Boolean);
  const scored: Array<{ entry: SystemPromptEntry; score: number }> = [];

  for (const entry of ALL_ENTRIES) {
    let score = 0;
    const name = entry.modelName.toLowerCase();
    const provider = entry.provider.toLowerCase();
    const desc = entry.description.toLowerCase();
    const cat = entry.category.toLowerCase();
    const eco = entry.ecosystem.toLowerCase();

    // Name matches (highest priority)
    if (name === q) score += 100;
    else if (name.startsWith(q)) score += 50;
    else if (qWords.every(w => name.includes(w))) score += 30;
    else if (name.includes(q)) score += 20;

    // Provider
    if (provider.includes(q)) score += 8;

    // Category
    if (cat === q) score += 15;
    else if (cat.includes(q)) score += 5;

    // Ecosystem
    if (eco === q) score += 10;
    else if (eco.includes(q)) score += 4;

    // Description
    if (desc.includes(q)) score += 6;
    else if (qWords.some(w => desc.includes(w))) score += 2;

    // Multi-word bonus: match across fields
    if (qWords.length > 1) {
      const allText = `${name} ${provider} ${desc} ${cat} ${eco}`;
      if (qWords.every(w => allText.includes(w))) score += 5;
    }

    // Tips
    if (entry.tips.some(t => t.toLowerCase().includes(q))) score += 3;
    else if (entry.tips.some(t => qWords.some(w => t.toLowerCase().includes(w)))) score += 1;

    // Source titles
    if (entry.sources.some(s => s.title.toLowerCase().includes(q))) score += 3;
    else if (entry.sources.some(s => qWords.some(w => s.title.toLowerCase().includes(w)))) score += 1;

    // Short version / system prompt (lower priority — large text, noisy)
    if (entry.shortVersion.toLowerCase().includes(q)) score += 2;
    if (entry.systemPrompt.toLowerCase().includes(q)) score += 1;

    if (score > 0) scored.push({ entry, score });
  }

  return scored.sort((a, b) => b.score - a.score).map(s => s.entry);
}

export type SortField = 'name' | 'provider' | 'quality' | 'date';
export type SortOrder = 'asc' | 'desc';

export function sortEntries(
  entries: SystemPromptEntry[],
  field: SortField,
  order: SortOrder
): SystemPromptEntry[] {
  const sorted = [...entries].sort((a, b) => {
    let cmp = 0;
    switch (field) {
      case 'name':
        cmp = a.modelName.localeCompare(b.modelName);
        break;
      case 'provider':
        cmp = a.provider.localeCompare(b.provider);
        break;
      case 'quality': {
        const qa = getSourceQuality(a);
        const qb = getSourceQuality(b);
        const rank = { verified: 3, partial: 2, limited: 1 };
        cmp = (rank[qa] ?? 0) - (rank[qb] ?? 0);
        break;
      }
      case 'date':
        cmp = a.lastVerified.localeCompare(b.lastVerified);
        break;
    }
    return order === 'desc' ? -cmp : cmp;
  });
  return sorted;
}

export function highlightMatches(text: string, query: string): string {
  if (!query.trim()) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escaped})`, 'gi');
  return text.replace(regex, '<mark class="bg-amber-500/20 text-amber-500 rounded-sm px-0.5">$1</mark>');
}
