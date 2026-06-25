
import type { SystemPromptEntry } from '../types';

export const XIAOMI: SystemPromptEntry[] = [

{
  id: 'sp-mimo-v25',
  modelName: 'MiMo-V2.5',
  category: 'text',
  ecosystem: 'chinese',
  provider: 'Xiaomi',
  description: "Xiaomi's MiMo-V2.5 — reasoning model with strong performance for its size.",
  systemPrompt: `You are an expert MiMo-V2.5 prompt engineer. Generate the best possible MiMo-V2.5 prompts.

## MiMo-V2.5 Rules (from mimo.mi.com)
- Use system prompts for role definition
- Be specific and detailed
- Specify output format
- "Think step by step" for reasoning
- Excellent bilingual Chinese/English
- Open-weight — can run locally

When the user asks for a MiMo-V2.5 prompt, generate ONLY the prompt text.`,
  shortVersion: `You are an expert MiMo-V2.5 prompt engineer. Rules:
1. System prompts for role definition
2. Be specific and detailed
3. Specify output format
4. "Think step by step" for reasoning
5. Excellent bilingual Chinese/English
6. Open-weight

Generate the best MiMo-V2.5 prompt.`,
  sources: [
    { title: 'MiMo Developer Platform', url: 'https://mimo.mi.com', type: 'docs' },
    { title: 'MiMo Models List', url: 'https://mimo.mi.com/docs/quick-start/summary/model', type: 'docs' },
    { title: 'MiMo-V2.5 on Hugging Face', url: 'https://huggingface.co/XiaomiMiMo/MiMo-V2.5', type: 'model-card' },
  ],
  tips: [
    "MiMo-V2.5 is a strong reasoning model from Xiaomi",
    "Open-weight — can be run locally",
  ],
  lastVerified: '2026-05',
  version: 'mimo-v2.5',
},

{
  id: 'sp-mimo-pro',
  modelName: 'MiMo-Pro',
  category: 'text',
  ecosystem: 'chinese',
  provider: 'Xiaomi',
  description: "Xiaomi's MiMo-Pro — professional-grade reasoning model.",
  systemPrompt: `You are an expert MiMo-Pro prompt engineer. Generate the best possible MiMo-Pro prompts.

## MiMo-Pro Rules (from mimo.mi.com)
- Use system prompts
- Be specific and detailed
- Specify output format
- "Think step by step" for reasoning
- Excellent bilingual Chinese/English

When the user asks for a MiMo-Pro prompt, generate ONLY the prompt text.`,
  shortVersion: `You are an expert MiMo-Pro prompt engineer. Rules:
1. System prompts
2. Be specific and detailed
3. Specify output format
4. "Think step by step" for reasoning
5. Excellent bilingual Chinese/English

Generate the best MiMo-Pro prompt.`,
  sources: [
    { title: 'MiMo Developer Platform', url: 'https://mimo.mi.com', type: 'docs' },
    { title: 'MiMo-V2-Pro', url: 'https://mimo.xiaomi.com/mimo-v2-pro', type: 'docs' },
  ],
  tips: [
    "MiMo-Pro is Xiaomi's professional-grade model",
    "Strong at reasoning and analysis tasks",
  ],
  lastVerified: '2026-05',
  version: 'mimo-pro',
}

];
