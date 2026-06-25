/**
 * Text-to-Image Arena rankings from arena.ai (LM Arena).
 * Source: https://arena.ai/leaderboard/text-to-image
 * Data snapshot: 2026-06-05
 *
 * 70 models ranked by Elo score based on 5,391,418 blind user votes.
 */

export interface ArenaRanking {
  /** Leaderboard position (1-based) */
  rank: number;
  /** Rank spread string (e.g. "1 1" means locked at rank 1, "2 3" means tied 2-3) */
  rankSpread: string;
  /** Official model name on the leaderboard */
  modelName: string;
  /** Elo rating */
  score: number;
  /** 95% confidence interval half-width */
  ci: number;
  /** Total number of blind battle votes */
  votes: number;
  /** Organization / developer */
  organization: string;
  /** License type */
  license: string;
  /** True if ranking is still preliminary (low vote count) */
  preliminary: boolean;
}

const RAW_RANKINGS: Array<Omit<ArenaRanking, 'organization' | 'license'>> = [
  { rank: 1,  rankSpread: '1 1',  modelName: 'gpt-image-2 (medium)',                                                      score: 1385, ci: 6,  votes: 45100,   preliminary: true  },
  { rank: 2,  rankSpread: '2 3',  modelName: 'reve-2.0',                                                                 score: 1273, ci: 9,  votes: 4759,    preliminary: true  },
  { rank: 3,  rankSpread: '2 3',  modelName: 'gemini-3.1-flash-image-preview (nano-banana-2) [web-search]',              score: 1269, ci: 4,  votes: 75713,   preliminary: false },
  { rank: 4,  rankSpread: '4 5',  modelName: 'mai-image-2.5',                                                           score: 1253, ci: 6,  votes: 12100,   preliminary: true  },
  { rank: 5,  rankSpread: '4 6',  modelName: 'gemini-3-pro-image-preview-2k (nano-banana-pro)',                         score: 1245, ci: 4,  votes: 114130,  preliminary: false },
  { rank: 6,  rankSpread: '5 7',  modelName: 'gpt-image-1.5-high-fidelity',                                              score: 1241, ci: 4,  votes: 118438,  preliminary: false },
  { rank: 7,  rankSpread: '6 8',  modelName: 'grok-imagine-image-quality',                                               score: 1234, ci: 6,  votes: 23800,   preliminary: true  },
  { rank: 8,  rankSpread: '7 8',  modelName: 'gemini-3-pro-image-preview (nano-banana-pro)',                            score: 1232, ci: 5,  votes: 82570,   preliminary: false },
  { rank: 9,  rankSpread: '9 10', modelName: 'ideogram-4.0-quality',                                                    score: 1204, ci: 10, votes: 3479,    preliminary: true  },
  { rank: 10, rankSpread: '9 11', modelName: 'uni-1.1-max',                                                              score: 1191, ci: 7,  votes: 11932,   preliminary: true  },
  { rank: 11, rankSpread: '10 13', modelName: 'mai-image-2',                                                            score: 1183, ci: 5,  votes: 48795,   preliminary: false },
  { rank: 12, rankSpread: '11 15', modelName: 'uni-1.1',                                                                score: 1175, ci: 6,  votes: 13504,   preliminary: true  },
  { rank: 13, rankSpread: '12 15', modelName: 'grok-imagine-image',                                                     score: 1174, ci: 3,  votes: 175360,  preliminary: false },
  { rank: 14, rankSpread: '11 20', modelName: 'recraft-v4.1-utility-pro',                                               score: 1169, ci: 11, votes: 2508,    preliminary: true  },
  { rank: 15, rankSpread: '12 17', modelName: 'qwen-image-2.0-pro-2026-04-22',                                          score: 1169, ci: 8,  votes: 5143,    preliminary: false },
  { rank: 16, rankSpread: '14 19', modelName: 'flux-2-max',                                                             score: 1163, ci: 4,  votes: 115675,  preliminary: false },
  { rank: 17, rankSpread: '14 20', modelName: 'grok-imagine-image-pro',                                                 score: 1161, ci: 4,  votes: 93148,   preliminary: false },
  { rank: 18, rankSpread: '15 23', modelName: 'flux-2-flex',                                                            score: 1156, ci: 3,  votes: 147443,  preliminary: false },
  { rank: 19, rankSpread: '15 23', modelName: 'flux-2-pro',                                                             score: 1156, ci: 3,  votes: 151362,  preliminary: false },
  { rank: 20, rankSpread: '16 25', modelName: 'reve-v1.5',                                                              score: 1153, ci: 6,  votes: 18677,   preliminary: false },
  { rank: 21, rankSpread: '18 24', modelName: 'gemini-2.5-flash-image-preview (nano-banana)',                           score: 1152, ci: 3,  votes: 784087,  preliminary: false },
  { rank: 22, rankSpread: '18 25', modelName: 'hunyuan-image-3.0',                                                      score: 1151, ci: 3,  votes: 172744,  preliminary: false },
  { rank: 23, rankSpread: '18 26', modelName: 'flux-2-dev',                                                             score: 1150, ci: 5,  votes: 58707,   preliminary: false },
  { rank: 24, rankSpread: '20 26', modelName: 'imagen-ultra-4.0-generate-001',                                          score: 1148, ci: 4,  votes: 387964,  preliminary: false },
  { rank: 25, rankSpread: '21 26', modelName: 'seedream-4.5',                                                           score: 1145, ci: 3,  votes: 195445,  preliminary: false },
  { rank: 26, rankSpread: '23 29', modelName: 'seedream-4-2k',                                                          score: 1140, ci: 7,  votes: 12604,   preliminary: false },
  { rank: 27, rankSpread: '26 33', modelName: 'wan2.6-t2i',                                                             score: 1133, ci: 3,  votes: 151088,  preliminary: false },
  { rank: 28, rankSpread: '26 33', modelName: 'seedream-5.0-lite',                                                      score: 1131, ci: 4,  votes: 72240,   preliminary: false },
  { rank: 29, rankSpread: '26 35', modelName: 'recraft-v4.1-pro',                                                       score: 1130, ci: 11, votes: 2673,    preliminary: true  },
  { rank: 30, rankSpread: '27 33', modelName: 'imagen-4.0-generate-001',                                                score: 1129, ci: 3,  votes: 519398,  preliminary: false },
  { rank: 31, rankSpread: '27 33', modelName: 'qwen-image-2512',                                                        score: 1128, ci: 4,  votes: 73542,   preliminary: false },
  { rank: 32, rankSpread: '27 37', modelName: 'hidream-o1-image',                                                       score: 1124, ci: 7,  votes: 9370,    preliminary: false },
  { rank: 33, rankSpread: '27 41', modelName: 'krea-2-medium',                                                          score: 1121, ci: 11, votes: 2587,    preliminary: false },
  { rank: 34, rankSpread: '31 39', modelName: 'wan2.5-t2i-preview',                                                     score: 1117, ci: 3,  votes: 199636,  preliminary: false },
  { rank: 35, rankSpread: '31 41', modelName: 'seedream-4-fal',                                                         score: 1117, ci: 7,  votes: 11850,   preliminary: false },
  { rank: 36, rankSpread: '32 40', modelName: 'gpt-image-1',                                                            score: 1115, ci: 3,  votes: 264719,  preliminary: false },
  { rank: 37, rankSpread: '32 41', modelName: 'qwen-image-2.0-2026-03-03',                                              score: 1115, ci: 4,  votes: 57997,   preliminary: false },
  { rank: 38, rankSpread: '33 41', modelName: 'seedream-4-high-res-fal',                                                score: 1112, ci: 3,  votes: 173529,  preliminary: false },
  { rank: 39, rankSpread: '33 42', modelName: 'recraft-v4',                                                             score: 1111, ci: 4,  votes: 73821,   preliminary: false },
  { rank: 40, rankSpread: '34 42', modelName: 'gpt-image-1-mini',                                                       score: 1109, ci: 3,  votes: 162009,  preliminary: false },
  { rank: 41, rankSpread: '39 43', modelName: 'wan2.7-image-pro',                                                       score: 1102, ci: 5,  votes: 28507,   preliminary: false },
  { rank: 42, rankSpread: '35 44', modelName: 'krea-2-large',                                                           score: 1101, ci: 11, votes: 2600,    preliminary: false },
  { rank: 43, rankSpread: '41 44', modelName: 'wan2.7-image',                                                           score: 1099, ci: 5,  votes: 28863,   preliminary: false },
  { rank: 44, rankSpread: '42 44', modelName: 'mai-image-1',                                                            score: 1093, ci: 4,  votes: 94400,   preliminary: false },
  { rank: 45, rankSpread: '45 46', modelName: 'seedream-3',                                                             score: 1082, ci: 5,  votes: 36843,   preliminary: false },
  { rank: 46, rankSpread: '45 47', modelName: 'z-image-turbo',                                                          score: 1081, ci: 6,  votes: 18648,   preliminary: false },
  { rank: 47, rankSpread: '46 49', modelName: 'flux-1-kontext-max',                                                     score: 1074, ci: 3,  votes: 65616,   preliminary: false },
  { rank: 48, rankSpread: '47 49', modelName: 'flux-2-klein-9b',                                                        score: 1069, ci: 3,  votes: 139916,  preliminary: false },
  { rank: 49, rankSpread: '47 55', modelName: 'cosmos3-super-text2image',                                               score: 1062, ci: 10, votes: 3026,    preliminary: false },
  { rank: 50, rankSpread: '49 54', modelName: 'qwen-image-prompt-extend',                                               score: 1061, ci: 3,  votes: 701992,  preliminary: false },
  { rank: 51, rankSpread: '49 54', modelName: 'flux-1-kontext-pro',                                                     score: 1059, ci: 3,  votes: 330717,  preliminary: false },
  { rank: 52, rankSpread: '49 54', modelName: 'imagen-3.0-generate-002',                                                score: 1058, ci: 3,  votes: 360161,  preliminary: false },
  { rank: 53, rankSpread: '49 54', modelName: 'qwen-image',                                                             score: 1057, ci: 3,  votes: 84660,   preliminary: false },
  { rank: 54, rankSpread: '49 55', modelName: 'cosmos3-super-text2image (agentic)',                                     score: 1052, ci: 10, votes: 2983,    preliminary: false },
  { rank: 55, rankSpread: '53 55', modelName: 'ideogram-v3-quality',                                                    score: 1049, ci: 4,  votes: 115151,  preliminary: false },
  { rank: 56, rankSpread: '56 58', modelName: 'photon',                                                                 score: 1036, ci: 4,  votes: 127412,  preliminary: false },
  { rank: 57, rankSpread: '56 58', modelName: 'p-image',                                                                score: 1033, ci: 4,  votes: 102083,  preliminary: false },
  { rank: 58, rankSpread: '56 59', modelName: 'flux-2-klein-4b',                                                        score: 1029, ci: 3,  votes: 141793,  preliminary: false },
  { rank: 59, rankSpread: '58 60', modelName: 'runway-gen4',                                                            score: 1025, ci: 5,  votes: 50348,   preliminary: false },
  { rank: 60, rankSpread: '59 62', modelName: 'recraft-v3',                                                             score: 1021, ci: 4,  votes: 191863,  preliminary: false },
  { rank: 61, rankSpread: '60 64', modelName: 'flux-1.1-pro',                                                           score: 1016, ci: 3,  votes: 70460,   preliminary: false },
  { rank: 62, rankSpread: '61 64', modelName: 'lucid-origin',                                                           score: 1014, ci: 3,  votes: 285477,  preliminary: false },
  { rank: 63, rankSpread: '61 64', modelName: 'ideogram-v2',                                                            score: 1013, ci: 4,  votes: 72090,   preliminary: false },
  { rank: 64, rankSpread: '60 64', modelName: 'glm-image',                                                              score: 1011, ci: 9,  votes: 4612,    preliminary: false },
  { rank: 65, rankSpread: '65 66', modelName: 'gemini-2.0-flash-preview-image-generation',                              score: 975,  ci: 3,  votes: 257054,  preliminary: false },
  { rank: 66, rankSpread: '65 67', modelName: 'flux-1-dev-fp8',                                                         score: 970,  ci: 4,  votes: 49221,   preliminary: false },
  { rank: 67, rankSpread: '66 67', modelName: 'dall-e-3',                                                               score: 968,  ci: 4,  votes: 239261,  preliminary: false },
  { rank: 68, rankSpread: '68 69', modelName: 'flux-1-kontext-dev',                                                     score: 941,  ci: 4,  votes: 215345,  preliminary: false },
  { rank: 69, rankSpread: '68 69', modelName: 'stable-diffusion-v35-large',                                             score: 938,  ci: 4,  votes: 23396,   preliminary: false },
  { rank: 70, rankSpread: '70 70', modelName: 'bagel',                                                                  score: 898,  ci: 6,  votes: 12406,   preliminary: false },
];

const ORG_LICENSE: Record<string, { organization: string; license: string }> = {
  'gpt-image-2 (medium)':                                          { organization: 'OpenAI', license: 'Proprietary' },
  'reve-2.0':                                                      { organization: 'Reve', license: 'Proprietary' },
  'gemini-3.1-flash-image-preview (nano-banana-2) [web-search]':   { organization: 'Google', license: 'Proprietary' },
  'mai-image-2.5':                                                  { organization: 'Microsoft AI', license: 'Proprietary' },
  'gemini-3-pro-image-preview-2k (nano-banana-pro)':               { organization: 'Google', license: 'Proprietary' },
  'gpt-image-1.5-high-fidelity':                                    { organization: 'OpenAI', license: 'Proprietary' },
  'grok-imagine-image-quality':                                     { organization: 'xAI', license: 'Proprietary' },
  'gemini-3-pro-image-preview (nano-banana-pro)':                  { organization: 'Google', license: 'Proprietary' },
  'ideogram-4.0-quality':                                           { organization: 'Ideogram', license: 'Ideogram Open Model' },
  'uni-1.1-max':                                                    { organization: 'Luma AI', license: 'Proprietary' },
  'mai-image-2':                                                    { organization: 'Microsoft AI', license: 'Proprietary' },
  'uni-1.1':                                                        { organization: 'Luma AI', license: 'Proprietary' },
  'grok-imagine-image':                                             { organization: 'xAI', license: 'Proprietary' },
  'recraft-v4.1-utility-pro':                                       { organization: 'Recraft', license: 'Proprietary' },
  'qwen-image-2.0-pro-2026-04-22':                                  { organization: 'Alibaba', license: 'Proprietary' },
  'flux-2-max':                                                     { organization: 'Black Forest Labs', license: 'Proprietary' },
  'grok-imagine-image-pro':                                         { organization: 'xAI', license: 'Proprietary' },
  'flux-2-flex':                                                    { organization: 'Black Forest Labs', license: 'Proprietary' },
  'flux-2-pro':                                                     { organization: 'Black Forest Labs', license: 'Proprietary' },
  'reve-v1.5':                                                      { organization: 'Reve', license: 'Proprietary' },
  'gemini-2.5-flash-image-preview (nano-banana)':                  { organization: 'Google', license: 'Proprietary' },
  'hunyuan-image-3.0':                                              { organization: 'Tencent', license: 'tencent-hunyuan-community' },
  'flux-2-dev':                                                     { organization: 'Black Forest Labs', license: 'flux-non-commercial-license' },
  'imagen-ultra-4.0-generate-001':                                  { organization: 'Google', license: 'Proprietary' },
  'seedream-4.5':                                                   { organization: 'ByteDance', license: 'Proprietary' },
  'seedream-4-2k':                                                  { organization: 'ByteDance', license: 'Proprietary' },
  'wan2.6-t2i':                                                     { organization: 'Alibaba', license: 'Proprietary' },
  'seedream-5.0-lite':                                              { organization: 'ByteDance', license: 'Proprietary' },
  'recraft-v4.1-pro':                                               { organization: 'Recraft', license: 'Proprietary' },
  'imagen-4.0-generate-001':                                        { organization: 'Google', license: 'Proprietary' },
  'qwen-image-2512':                                                { organization: 'Alibaba', license: 'Apache 2.0' },
  'hidream-o1-image':                                               { organization: 'HiDream', license: 'MIT' },
  'krea-2-medium':                                                  { organization: 'Krea', license: 'Proprietary' },
  'wan2.5-t2i-preview':                                             { organization: 'Alibaba', license: 'Proprietary' },
  'seedream-4-fal':                                                 { organization: 'ByteDance', license: 'Proprietary' },
  'gpt-image-1':                                                    { organization: 'OpenAI', license: 'Proprietary' },
  'qwen-image-2.0-2026-03-03':                                      { organization: 'Alibaba', license: 'Proprietary' },
  'seedream-4-high-res-fal':                                        { organization: 'ByteDance', license: 'Proprietary' },
  'recraft-v4':                                                     { organization: 'Recraft', license: 'Proprietary' },
  'gpt-image-1-mini':                                               { organization: 'OpenAI', license: 'Proprietary' },
  'wan2.7-image-pro':                                               { organization: 'Alibaba', license: 'Proprietary' },
  'krea-2-large':                                                   { organization: 'Krea', license: 'Proprietary' },
  'wan2.7-image':                                                   { organization: 'Alibaba', license: 'Proprietary' },
  'mai-image-1':                                                    { organization: 'Microsoft AI', license: 'Proprietary' },
  'seedream-3':                                                     { organization: 'ByteDance', license: 'Proprietary' },
  'z-image-turbo':                                                  { organization: 'Alibaba', license: 'Apache 2.0' },
  'flux-1-kontext-max':                                             { organization: 'Black Forest Labs', license: 'Proprietary' },
  'flux-2-klein-9b':                                                { organization: 'Black Forest Labs', license: 'flux-non-commercial-license' },
  'cosmos3-super-text2image':                                       { organization: 'NVIDIA', license: 'OpenMDW-1.1' },
  'qwen-image-prompt-extend':                                       { organization: 'Alibaba', license: 'Apache 2.0' },
  'flux-1-kontext-pro':                                             { organization: 'Black Forest Labs', license: 'Proprietary' },
  'imagen-3.0-generate-002':                                        { organization: 'Google', license: 'Proprietary' },
  'qwen-image':                                                     { organization: 'Alibaba', license: 'Apache 2.0' },
  'cosmos3-super-text2image (agentic)':                             { organization: 'NVIDIA', license: 'OpenMDW-1.1' },
  'ideogram-v3-quality':                                            { organization: 'Ideogram', license: 'Proprietary' },
  'photon':                                                         { organization: 'Luma AI', license: 'Proprietary' },
  'p-image':                                                        { organization: 'Pruna', license: 'Proprietary' },
  'flux-2-klein-4b':                                                { organization: 'Black Forest Labs', license: 'Apache 2.0' },
  'runway-gen4':                                                    { organization: 'Runway', license: 'Proprietary' },
  'recraft-v3':                                                     { organization: 'Recraft', license: 'Proprietary' },
  'flux-1.1-pro':                                                   { organization: 'Black Forest Labs', license: 'Proprietary' },
  'lucid-origin':                                                   { organization: 'Leonardo AI', license: 'Proprietary' },
  'ideogram-v2':                                                    { organization: 'Ideogram', license: 'Proprietary' },
  'glm-image':                                                      { organization: 'Zhipu AI', license: 'MIT' },
  'gemini-2.0-flash-preview-image-generation':                      { organization: 'Google', license: 'Proprietary' },
  'flux-1-dev-fp8':                                                 { organization: 'Black Forest Labs', license: 'Open' },
  'dall-e-3':                                                       { organization: 'OpenAI', license: 'Proprietary' },
  'flux-1-kontext-dev':                                             { organization: 'Black Forest Labs', license: 'flux-1-dev-non-commercial-license' },
  'stable-diffusion-v35-large':                                     { organization: 'Stability AI', license: 'Open' },
  'bagel':                                                          { organization: 'ByteDance', license: 'Apache 2.0' },
};

function buildRankings(): ArenaRanking[] {
  return RAW_RANKINGS.map(r => {
    const meta = ORG_LICENSE[r.modelName];
    return { ...r, organization: meta?.organization ?? 'Unknown', license: meta?.license ?? 'Unknown' };
  });
}

export const ARENA_RANKINGS: ArenaRanking[] = buildRankings();

/**
 * Manual overrides for entries whose modelName doesn't match arena leaderboard names
 * via simple normalization. Maps our entry modelName → leaderboard modelName.
 */
const NAME_OVERRIDES: Record<string, string> = {
  'GPT-Image-2 (Medium)': 'gpt-image-2 (medium)',
  'Reve-2.0': 'reve-2.0',
  'MAI-Image-2.5': 'mai-image-2.5',
  'GPT-Image-1.5 (High Fidelity)': 'gpt-image-1.5-high-fidelity',
  'Grok Imagine Image Quality': 'grok-imagine-image-quality',
  'Ideogram 4.0 (Quality)': 'ideogram-4.0-quality',
  'Uni 1.1 Max': 'uni-1.1-max',
  'MAI-Image-2': 'mai-image-2',
  'Uni 1.1': 'uni-1.1',
  'Grok Imagine Image': 'grok-imagine-image',
  'Recraft V4.1 (Utility Pro)': 'recraft-v4.1-utility-pro',
  'FLUX 2 Max': 'flux-2-max',
  'FLUX 2 Flex': 'flux-2-flex',
  'FLUX 2 Pro': 'flux-2-pro',
  'Reve V1.5': 'reve-v1.5',
  'Hunyuan Image 3.0': 'hunyuan-image-3.0',
  'FLUX 2 Dev': 'flux-2-dev',
  'Imagen Ultra 4.0': 'imagen-ultra-4.0-generate-001',
  'Seedream 4.5': 'seedream-4.5',
  'Seedream 4 (2K)': 'seedream-4-2k',
  'Wan 2.6 T2I': 'wan2.6-t2i',
  'Seedream 5.0 Lite': 'seedream-5.0-lite',
  'Recraft V4.1 (Pro)': 'recraft-v4.1-pro',
  'Imagen 4.0': 'imagen-4.0-generate-001',
  'Qwen-Image-2512': 'qwen-image-2512',
  'HiDream O1 Image': 'hidream-o1-image',
  'Krea 2 Medium': 'krea-2-medium',
  'Wan 2.5 T2I Preview': 'wan2.5-t2i-preview',
  'Seedream 4 (FAL)': 'seedream-4-fal',
  'GPT-Image-1': 'gpt-image-1',
  'Qwen Image 2.0 (2026-03-03)': 'qwen-image-2.0-2026-03-03',
  'Seedream 4 (High Res FAL)': 'seedream-4-high-res-fal',
  'Recraft V4': 'recraft-v4',
  'GPT-Image-1 Mini': 'gpt-image-1-mini',
  'Wan 2.7 Image Pro': 'wan2.7-image-pro',
  'Krea 2 Large': 'krea-2-large',
  'Wan 2.7 Image': 'wan2.7-image',
  'MAI-Image-1': 'mai-image-1',
  'Seedream 3': 'seedream-3',
  'Z-Image Turbo': 'z-image-turbo',
  'FLUX.1 Kontext Max': 'flux-1-kontext-max',
  'FLUX 2 Klein 9B': 'flux-2-klein-9b',
  'Cosmos3 Super Text2Image': 'cosmos3-super-text2image',
  'Qwen Image Prompt Extend': 'qwen-image-prompt-extend',
  'FLUX.1 Kontext Pro': 'flux-1-kontext-pro',
  'Imagen 3.0 (002)': 'imagen-3.0-generate-002',
  'Qwen Image': 'qwen-image',
  'Cosmos3 Super Text2Image (Agentic)': 'cosmos3-super-text2image (agentic)',
  'Ideogram V3 Quality': 'ideogram-v3-quality',
  'Photon (Luma)': 'photon',
  'P-Image': 'p-image',
  'FLUX 2 Klein 4B': 'flux-2-klein-4b',
  'Runway Gen-4': 'runway-gen4',
  'Recraft V3': 'recraft-v3',
  'FLUX 1.1 Pro': 'flux-1.1-pro',
  'Lucid Origin': 'lucid-origin',
  'Ideogram V2': 'ideogram-v2',
  'GLM-Image': 'glm-image',
  'FLUX.1 Dev FP8': 'flux-1-dev-fp8',
  'FLUX.1 Kontext Dev': 'flux-1-kontext-dev',
  'Stable Diffusion 3.5 Large': 'stable-diffusion-v35-large',
  'BAGEL': 'bagel',
  'Grok Imagine Image Pro': 'grok-imagine-image-pro',
  'Gemini 3.1 Flash Image Preview': 'gemini-3.1-flash-image-preview (nano-banana-2) [web-search]',
  'Gemini 3 Pro Image Preview 2K': 'gemini-3-pro-image-preview-2k (nano-banana-pro)',
  'Gemini 3 Pro Image Preview': 'gemini-3-pro-image-preview (nano-banana-pro)',
  'Gemini 2.5 Flash Image Preview': 'gemini-2.5-flash-image-preview (nano-banana)',
  'Gemini 2.0 Flash Preview Image Generation': 'gemini-2.0-flash-preview-image-generation',
  'Qwen-Image-2.0-Pro (2026-04-22)': 'qwen-image-2.0-pro-2026-04-22',
  'Mai-Image-2': 'mai-image-2',
  'Mai-Image-2.5': 'mai-image-2.5',
  'Grok Image 1.0 (Quality)': 'grok-imagine-image-quality',
  'Grok Image 1.0': 'grok-imagine-image',
  'Grok Image 1.0 (Pro)': 'grok-imagine-image-pro',
  'grok-imagine-image': 'grok-imagine-image',
  'Grok Imagine': 'grok-imagine-image',
  'Ideogram 4.0': 'ideogram-4.0-quality',
  'Ideogram V3': 'ideogram-v3-quality',
  'Photon': 'photon',
  'Ideogram 2.0': 'ideogram-v2',
  'DALL-E 3': 'dall-e-3',
  // Additional overrides for unmatched image models
  'GPT Image 2': 'gpt-image-2 (medium)',
  'GPT Image 1.5': 'gpt-image-1.5-high-fidelity',
  'Nano Banana 2': 'gemini-3.1-flash-image-preview (nano-banana-2) [web-search]',
  'Nano Banana Pro': 'gemini-3-pro-image-preview-2k (nano-banana-pro)',
  'Imagen 4': 'imagen-4.0-generate-001',
  'FLUX.2 [klein]': 'flux-2-klein-9b',
  'Recraft V4.1': 'recraft-v4.1-utility-pro',
  'Recraft V4.1 Utility': 'recraft-v4.1-utility-pro',
  'Gemini 2.5 Flash Image (Nano Banana)': 'gemini-2.5-flash-image-preview (nano-banana)',
  'Seedream 3.0': 'seedream-3',
  'Wan 2.6': 'wan2.6-t2i',
  'Wan 2.7': 'wan2.7-image',
  'Runway Gen-4 Image': 'runway-gen4',
  'HunyuanImage 3.0-Instruct': 'hunyuan-image-3.0',
  'HunyuanImage 3.0-Instruct-Distil': 'hunyuan-image-3.0',
};

/** Build a lookup map: normalized name → ArenaRanking */
const RANKING_BY_NORMALIZED = new Map<string, ArenaRanking>();

function normalize(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]/g, '');
}

// Populate by normalized arena model name
for (const r of ARENA_RANKINGS) {
  const key = normalize(r.modelName);
  // Don't overwrite if duplicate (shouldn't happen)
  if (!RANKING_BY_NORMALIZED.has(key)) {
    RANKING_BY_NORMALIZED.set(key, r);
  }
}

/**
 * Find arena ranking for a given entry model name.
 * Tries:
 *  1. Manual overrides (exact match on our modelName)
 *  2. Normalized exact match (lowercase, stripped special chars)
 *
 * Returns null for entries not in the leaderboard.
 * Does NOT use fuzzy/substring matching to avoid false positives.
 */
export function getArenaRanking(modelName: string): ArenaRanking | null {
  // 1. Manual override
  const mapped = NAME_OVERRIDES[modelName];
  if (mapped) {
    const found = ARENA_RANKINGS.find(r => r.modelName === mapped);
    if (found) return found;
  }

  // 2. Normalized exact lookup
  const key = normalize(modelName);
  return RANKING_BY_NORMALIZED.get(key) ?? null;
}

/**
 * Check which entries from a list of model names have arena rankings.
 * Returns two arrays: [matched, unmatched]
 */
export function crossReferenceRankings(modelNames: string[]): { matched: string[]; unmatched: string[] } {
  const matched: string[] = [];
  const unmatched: string[] = [];
  for (const name of modelNames) {
    if (getArenaRanking(name)) {
      matched.push(name);
    } else {
      unmatched.push(name);
    }
  }
  return { matched, unmatched };
}
