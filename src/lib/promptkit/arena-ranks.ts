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

/**
 * Text-to-Video Arena rankings from arena.ai (LM Arena).
 * Source: https://arena.ai/leaderboard/text-to-video
 * Data snapshot: 2026-06-10
 *
 * 41 models ranked by Elo score based on 479,075 blind user votes.
 */

const VIDEO_RAW_RANKINGS: Array<Omit<ArenaRanking, 'organization' | 'license'>> = [
  { rank: 1,  rankSpread: '1 1',   modelName: 'gemini-omni-flash',                               score: 1527, ci: 14, votes: 2649,   preliminary: true  },
  { rank: 2,  rankSpread: '2 2',   modelName: 'dreamina-seedance-2.0-720p',                      score: 1466, ci: 8,  votes: 34319,  preliminary: false },
  { rank: 3,  rankSpread: '3 3',   modelName: 'happyhorse-1.0',                                  score: 1437, ci: 7,  votes: 15722,  preliminary: false },
  { rank: 4,  rankSpread: '4 11',  modelName: 'veo-3.1-audio-1080p',                             score: 1369, ci: 11, votes: 18829,  preliminary: false },
  { rank: 5,  rankSpread: '4 11',  modelName: 'wan2.7-t2v',                                      score: 1368, ci: 13, votes: 3220,   preliminary: false },
  { rank: 6,  rankSpread: '4 12',  modelName: 'veo-3.1-audio',                                   score: 1365, ci: 14, votes: 13690,  preliminary: false },
  { rank: 7,  rankSpread: '4 11',  modelName: 'sora-2-pro',                                      score: 1365, ci: 8,  votes: 36554,  preliminary: false },
  { rank: 8,  rankSpread: '4 11',  modelName: 'veo-3.1-fast-audio',                              score: 1364, ci: 11, votes: 39333,  preliminary: false },
  { rank: 9,  rankSpread: '4 12',  modelName: 'veo-3.1-fast-audio-1080p',                        score: 1362, ci: 11, votes: 18979,  preliminary: false },
  { rank: 10, rankSpread: '4 12',  modelName: 'grok-imagine-video-720p',                         score: 1358, ci: 6,  votes: 131624, preliminary: false },
  { rank: 11, rankSpread: '4 14',  modelName: 'veo-3-fast-audio',                                score: 1348, ci: 11, votes: 25154,  preliminary: false },
  { rank: 12, rankSpread: '8 14',  modelName: 'veo-3-audio',                                     score: 1340, ci: 12, votes: 18966,  preliminary: false },
  { rank: 13, rankSpread: '11 14', modelName: 'wan2.6-t2v',                                      score: 1340, ci: 11, votes: 29742,  preliminary: false },
  { rank: 14, rankSpread: '11 14', modelName: 'sora-2',                                          score: 1338, ci: 7,  votes: 49128,  preliminary: false },
  { rank: 15, rankSpread: '15 18', modelName: 'wan2.5-t2v-preview',                              score: 1260, ci: 12, votes: 17829,  preliminary: false },
  { rank: 16, rankSpread: '15 18', modelName: 'seedance-v1.5-pro',                               score: 1259, ci: 7,  votes: 66450,  preliminary: false },
  { rank: 17, rankSpread: '15 20', modelName: 'veo-3',                                           score: 1254, ci: 11, votes: 14948,  preliminary: false },
  { rank: 18, rankSpread: '15 20', modelName: 'veo-3-fast',                                      score: 1249, ci: 12, votes: 15230,  preliminary: false },
  { rank: 19, rankSpread: '17 22', modelName: 'pixverse-v5.6',                                   score: 1238, ci: 8,  votes: 25582,  preliminary: false },
  { rank: 20, rankSpread: '17 25', modelName: 'runway-gen-4.5',                                  score: 1234, ci: 12, votes: 25583,  preliminary: false },
  { rank: 21, rankSpread: '19 27', modelName: 'kling-2.5-turbo-1080p',                           score: 1220, ci: 17, votes: 2104,   preliminary: false },
  { rank: 22, rankSpread: '20 25', modelName: 'kling-2.6-pro',                                   score: 1218, ci: 7,  votes: 65389,  preliminary: false },
  { rank: 23, rankSpread: '20 29', modelName: 'p-video',                                         score: 1209, ci: 16, votes: 7039,   preliminary: false },
  { rank: 24, rankSpread: '19 32', modelName: 'kling-o1-pro',                                    score: 1206, ci: 27, votes: 1193,   preliminary: false },
  { rank: 25, rankSpread: '20 31', modelName: 'ray-3',                                           score: 1206, ci: 22, votes: 1121,   preliminary: false },
  { rank: 26, rankSpread: '22 29', modelName: 'hailuo-2.3',                                      score: 1200, ci: 7,  votes: 55930,  preliminary: false },
  { rank: 27, rankSpread: '22 31', modelName: 'hailuo-02-pro',                                   score: 1198, ci: 12, votes: 9369,   preliminary: false },
  { rank: 28, rankSpread: '23 31', modelName: 'seedance-v1-pro',                                 score: 1192, ci: 11, votes: 12120,  preliminary: false },
  { rank: 29, rankSpread: '25 33', modelName: 'hailuo-02-standard',                              score: 1181, ci: 12, votes: 9333,   preliminary: false },
  { rank: 30, rankSpread: '23 33', modelName: 'kandinsky-5.0-t2v-pro',                           score: 1176, ci: 21, votes: 2020,   preliminary: false },
  { rank: 31, rankSpread: '25 33', modelName: 'hunyuan-video-1.5',                               score: 1170, ci: 16, votes: 4272,   preliminary: false },
  { rank: 32, rankSpread: '28 33', modelName: 'veo-2',                                           score: 1164, ci: 16, votes: 6509,   preliminary: false },
  { rank: 33, rankSpread: '29 33', modelName: 'kling-v2.1-master',                               score: 1163, ci: 9,  votes: 14049,  preliminary: false },
  { rank: 34, rankSpread: '34 36', modelName: 'ltx-2-19b',                                       score: 1138, ci: 8,  votes: 48375,  preliminary: false },
  { rank: 35, rankSpread: '34 37', modelName: 'wan-v2.2-a14b',                                   score: 1132, ci: 15, votes: 10418,  preliminary: false },
  { rank: 36, rankSpread: '34 37', modelName: 'kandinsky-5.0-t2v-lite',                          score: 1115, ci: 18, votes: 1475,   preliminary: false },
  { rank: 37, rankSpread: '35 37', modelName: 'seedance-v1-lite',                                score: 1113, ci: 9,  votes: 16214,  preliminary: false },
  { rank: 38, rankSpread: '38 39', modelName: 'sora',                                            score: 1070, ci: 16, votes: 4080,   preliminary: false },
  { rank: 39, rankSpread: '38 39', modelName: 'ray2',                                            score: 1065, ci: 17, votes: 5217,   preliminary: false },
  { rank: 40, rankSpread: '40 41', modelName: 'pika-v2.2',                                       score: 1009, ci: 15, votes: 5728,   preliminary: false },
  { rank: 41, rankSpread: '40 41', modelName: 'mochi-v1',                                        score: 1006, ci: 16, votes: 5862,   preliminary: false },
];

const VIDEO_ORG_LICENSE: Record<string, { organization: string; license: string }> = {
  'gemini-omni-flash':               { organization: 'Google',     license: 'Proprietary' },
  'dreamina-seedance-2.0-720p':      { organization: 'Bytedance',  license: 'Proprietary' },
  'happyhorse-1.0':                  { organization: 'Alibaba-ATH', license: 'Proprietary' },
  'veo-3.1-audio-1080p':             { organization: 'Google',     license: 'Proprietary' },
  'wan2.7-t2v':                      { organization: 'Alibaba',    license: 'Proprietary' },
  'veo-3.1-audio':                   { organization: 'Google',     license: 'Proprietary' },
  'sora-2-pro':                      { organization: 'OpenAI',     license: 'Proprietary' },
  'veo-3.1-fast-audio':              { organization: 'Google',     license: 'Proprietary' },
  'veo-3.1-fast-audio-1080p':        { organization: 'Google',     license: 'Proprietary' },
  'grok-imagine-video-720p':         { organization: 'xAI',        license: 'Proprietary' },
  'veo-3-fast-audio':                { organization: 'Google',     license: 'Proprietary' },
  'veo-3-audio':                     { organization: 'Google',     license: 'Proprietary' },
  'wan2.6-t2v':                      { organization: 'Alibaba',    license: 'Proprietary' },
  'sora-2':                          { organization: 'OpenAI',     license: 'Proprietary' },
  'wan2.5-t2v-preview':              { organization: 'Alibaba',    license: 'Proprietary' },
  'seedance-v1.5-pro':               { organization: 'Bytedance',  license: 'Proprietary' },
  'veo-3':                           { organization: 'Google',     license: 'Proprietary' },
  'veo-3-fast':                      { organization: 'Google',     license: 'Proprietary' },
  'pixverse-v5.6':                   { organization: 'Pixverse',   license: 'Proprietary' },
  'runway-gen-4.5':                  { organization: 'Runway',     license: 'Proprietary' },
  'kling-2.5-turbo-1080p':           { organization: 'KlingAI',    license: 'Proprietary' },
  'kling-2.6-pro':                   { organization: 'KlingAI',    license: 'Proprietary' },
  'p-video':                         { organization: 'Pruna',      license: 'Proprietary' },
  'kling-o1-pro':                    { organization: 'KlingAI',    license: 'Proprietary' },
  'ray-3':                           { organization: 'Luma AI',    license: 'Proprietary' },
  'hailuo-2.3':                      { organization: 'MiniMax',    license: 'Proprietary' },
  'hailuo-02-pro':                   { organization: 'MiniMax',    license: 'Proprietary' },
  'seedance-v1-pro':                 { organization: 'Bytedance',  license: 'Proprietary' },
  'hailuo-02-standard':              { organization: 'MiniMax',    license: 'Proprietary' },
  'kandinsky-5.0-t2v-pro':           { organization: 'Kandinsky',  license: 'MIT' },
  'hunyuan-video-1.5':               { organization: 'Tencent',    license: 'tencent-hunyuan-community' },
  'veo-2':                           { organization: 'Google',     license: 'Proprietary' },
  'kling-v2.1-master':               { organization: 'KlingAI',    license: 'Proprietary' },
  'ltx-2-19b':                       { organization: 'lightricks', license: 'ltx-2-community-license-agreement' },
  'wan-v2.2-a14b':                   { organization: 'Alibaba',    license: 'Apache 2.0' },
  'kandinsky-5.0-t2v-lite':          { organization: 'Kandinsky',  license: 'MIT' },
  'seedance-v1-lite':                { organization: 'Bytedance',  license: 'Proprietary' },
  'sora':                            { organization: 'OpenAI',     license: 'Proprietary' },
  'ray2':                            { organization: 'Luma AI',    license: 'Proprietary' },
  'pika-v2.2':                       { organization: 'Pika',       license: 'Proprietary' },
  'mochi-v1':                        { organization: 'Genmo AI',   license: 'Apache 2.0' },
};

const VIDEO_ARENA_RANKINGS: ArenaRanking[] = VIDEO_RAW_RANKINGS.map(r => {
  const meta = VIDEO_ORG_LICENSE[r.modelName];
  return { ...r, organization: meta?.organization ?? 'Unknown', license: meta?.license ?? 'Unknown' };
});

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

// ── Text-to-Video Arena ──────────────────────────────────────────

const VIDEO_NAME_OVERRIDES: Record<string, string> = {
  // PromptKit model names → arena leaderboard names
  'Wan 2.7': 'wan2.7-t2v',
  'Wan 2.6': 'wan2.6-t2v',
  'Seedance 1.5 Pro': 'seedance-v1.5-pro',
  'Seedance 2.0': 'dreamina-seedance-2.0-720p',
  'Mochi 1': 'mochi-v1',
  'Gemini Omni': 'gemini-omni-flash',
  'Kling Video 2.6 Pro': 'kling-2.6-pro',
  'MiniMax Hailuo 2.3': 'hailuo-2.3',
  'MiniMax Hailuo 02': 'hailuo-02-pro',
  'Pika 2.2': 'pika-v2.2',
  'Grok Imagine Video': 'grok-imagine-video-720p',
  'Veo 3.1': 'veo-3.1-audio',
  'Veo 3.1 Fast': 'veo-3.1-fast-audio',
  'Gemini OmniFlash': 'gemini-omni-flash',
  'Dreamina Seedance 2.0 (720p)': 'dreamina-seedance-2.0-720p',
  'HappyHorse 1.0': 'happyhorse-1.0',
  'Veo 3.1 Audio (1080p)': 'veo-3.1-audio-1080p',
  'Wan 2.7 T2V': 'wan2.7-t2v',
  'Veo 3.1 Audio': 'veo-3.1-audio',
  'Sora 2 Pro': 'sora-2-pro',
  'Veo 3.1 Fast Audio': 'veo-3.1-fast-audio',
  'Veo 3.1 Fast Audio (1080p)': 'veo-3.1-fast-audio-1080p',
  'Grok Imagine Video (720p)': 'grok-imagine-video-720p',
  'Veo 3 Fast Audio': 'veo-3-fast-audio',
  'Veo 3 Audio': 'veo-3-audio',
  'Wan 2.6 T2V': 'wan2.6-t2v',
  'Sora 2': 'sora-2',
  'Wan 2.5 T2V Preview': 'wan2.5-t2v-preview',
  'Seedance V1.5 Pro': 'seedance-v1.5-pro',
  'Veo 3': 'veo-3',
  'Veo 3 Fast': 'veo-3-fast',
  'PixVerse V5.6': 'pixverse-v5.6',
  'Runway Gen-4.5': 'runway-gen-4.5',
  'Kling 2.5 Turbo (1080p)': 'kling-2.5-turbo-1080p',
  'Kling 2.6 Pro': 'kling-2.6-pro',
  'P-Video': 'p-video',
  'Kling O1 Pro': 'kling-o1-pro',
  'Ray 3': 'ray-3',
  'Hailuo 2.3': 'hailuo-2.3',
  'Hailuo O2 Pro': 'hailuo-02-pro',
  'Seedance V1 Pro': 'seedance-v1-pro',
  'Hailuo O2 Standard': 'hailuo-02-standard',
  'Kandinsky 5.0 T2V Pro': 'kandinsky-5.0-t2v-pro',
  'Hunyuan Video 1.5': 'hunyuan-video-1.5',
  'Veo 2': 'veo-2',
  'Kling V2.1 Master': 'kling-v2.1-master',
  'LTX 2 (19B)': 'ltx-2-19b',
  'Wan V2.2 A14B': 'wan-v2.2-a14b',
  'Kandinsky 5.0 T2V Lite': 'kandinsky-5.0-t2v-lite',
  'Seedance V1 Lite': 'seedance-v1-lite',
  'Sora': 'sora',
  'Ray 2': 'ray2',
  'Pika V2.2': 'pika-v2.2',
  'Mochi V1': 'mochi-v1',
};

const VIDEO_RANKING_BY_NORMALIZED = new Map<string, ArenaRanking>();

for (const r of VIDEO_ARENA_RANKINGS) {
  const key = normalize(r.modelName);
  if (!VIDEO_RANKING_BY_NORMALIZED.has(key)) {
    VIDEO_RANKING_BY_NORMALIZED.set(key, r);
  }
}

export function getVideoArenaRanking(modelName: string): ArenaRanking | null {
  const mapped = VIDEO_NAME_OVERRIDES[modelName];
  if (mapped) {
    const found = VIDEO_ARENA_RANKINGS.find(r => r.modelName === mapped);
    if (found) return found;
  }

  const key = normalize(modelName);
  return VIDEO_RANKING_BY_NORMALIZED.get(key) ?? null;
}

// ── Image-to-Video Arena ─────────────────────────────────────────
// Source: https://chatbotarena.com/leaderboard (LMSYS Chatbot Arena)
// Data snapshot: 2026-06-23
//
// 42 models ranked by Elo score based on 1,350,288 blind user votes.

const IMAGE2VIDEO_RAW_RANKINGS: Array<Omit<ArenaRanking, 'organization' | 'license'>> = [
  { rank: 1,  rankSpread: '1 3',   modelName: 'dreamina-seedance-2.0-720p',                      score: 1474, ci: 10, votes: 81746,   preliminary: false },
  { rank: 2,  rankSpread: '1 3',   modelName: 'gemini-omni-flash',                               score: 1469, ci: 11, votes: 5373,    preliminary: false },
  { rank: 3,  rankSpread: '1 3',   modelName: 'grok-imagine-video-1.5-preview-720p',             score: 1466, ci: 5,  votes: 44400,   preliminary: false },
  { rank: 4,  rankSpread: '4 5',   modelName: 'happyhorse-1.0',                                  score: 1444, ci: 10, votes: 61051,   preliminary: false },
  { rank: 5,  rankSpread: '4 6',   modelName: 'wan2.7-i2v',                                      score: 1434, ci: 8,  votes: 14113,   preliminary: false },
  { rank: 6,  rankSpread: '5 6',   modelName: 'grok-imagine-video-720p',                         score: 1422, ci: 5,  votes: 462748,  preliminary: false },
  { rank: 7,  rankSpread: '7 10',  modelName: 'veo-3.1-audio',                                   score: 1398, ci: 11, votes: 25112,   preliminary: false },
  { rank: 8,  rankSpread: '7 11',  modelName: 'veo-3.1-audio-1080p',                             score: 1391, ci: 9,  votes: 38881,   preliminary: false },
  { rank: 9,  rankSpread: '7 11',  modelName: 'veo-3.1-fast-audio',                              score: 1385, ci: 9,  votes: 99804,   preliminary: false },
  { rank: 10, rankSpread: '7 11',  modelName: 'grok-imagine-video-480p',                         score: 1384, ci: 9,  votes: 19417,   preliminary: false },
  { rank: 11, rankSpread: '8 13',  modelName: 'veo-3.1-fast-audio-1080p',                        score: 1374, ci: 10, votes: 39253,   preliminary: false },
  { rank: 12, rankSpread: '11 13', modelName: 'vidu-q3-pro',                                     score: 1361, ci: 8,  votes: 36677,   preliminary: false },
  { rank: 13, rankSpread: '11 13', modelName: 'kling-v3-pro',                                    score: 1360, ci: 8,  votes: 115181,  preliminary: false },
  { rank: 14, rankSpread: '14 17', modelName: 'veo-3-audio',                                     score: 1330, ci: 11, votes: 32383,   preliminary: false },
  { rank: 15, rankSpread: '14 17', modelName: 'veo-3-fast-audio',                                score: 1325, ci: 9,  votes: 41215,   preliminary: false },
  { rank: 16, rankSpread: '14 18', modelName: 'wan2.5-i2v-preview',                              score: 1323, ci: 10, votes: 16932,   preliminary: false },
  { rank: 17, rankSpread: '14 19', modelName: 'wan2.6-i2v',                                      score: 1316, ci: 10, votes: 76951,   preliminary: false },
  { rank: 18, rankSpread: '16 20', modelName: 'seedance-v1.5-pro',                               score: 1308, ci: 7,  votes: 218351,  preliminary: false },
  { rank: 19, rankSpread: '17 20', modelName: 'pixverse-v5.6',                                   score: 1300, ci: 8,  votes: 108232,  preliminary: false },
  { rank: 20, rankSpread: '18 21', modelName: 'kling-2.6-pro',                                   score: 1294, ci: 8,  votes: 182012,  preliminary: false },
  { rank: 21, rankSpread: '20 25', modelName: 'kling-2.5-turbo-1080p',                           score: 1275, ci: 12, votes: 3791,    preliminary: false },
  { rank: 22, rankSpread: '21 25', modelName: 'seedance-v1-pro',                                 score: 1272, ci: 8,  votes: 34027,   preliminary: false },
  { rank: 23, rankSpread: '21 27', modelName: 'hailuo-2.3',                                      score: 1260, ci: 6,  votes: 229374,  preliminary: false },
  { rank: 24, rankSpread: '21 27', modelName: 'veo-3-fast',                                      score: 1257, ci: 10, votes: 26297,   preliminary: false },
  { rank: 25, rankSpread: '21 27', modelName: 'veo-3',                                           score: 1256, ci: 10, votes: 26105,   preliminary: false },
  { rank: 26, rankSpread: '23 33', modelName: 'p-video',                                         score: 1244, ci: 16, votes: 23366,   preliminary: false },
  { rank: 27, rankSpread: '23 33', modelName: 'vidu-q2-turbo',                                   score: 1243, ci: 17, votes: 2506,    preliminary: false },
  { rank: 28, rankSpread: '26 33', modelName: 'kling-v2.1-master',                               score: 1234, ci: 8,  votes: 29849,   preliminary: false },
  { rank: 29, rankSpread: '26 33', modelName: 'hailuo-02-pro',                                   score: 1228, ci: 10, votes: 21751,   preliminary: false },
  { rank: 30, rankSpread: '26 33', modelName: 'kling-v2.1-standard',                             score: 1228, ci: 8,  votes: 29952,   preliminary: false },
  { rank: 31, rankSpread: '26 34', modelName: 'ray-3',                                           score: 1225, ci: 19, votes: 1588,    preliminary: false },
  { rank: 32, rankSpread: '26 33', modelName: 'hailuo-02-standard',                              score: 1223, ci: 9,  votes: 21782,   preliminary: false },
  { rank: 33, rankSpread: '26 34', modelName: 'vidu-q2-pro',                                     score: 1222, ci: 17, votes: 2608,    preliminary: false },
  { rank: 34, rankSpread: '32 37', modelName: 'hunyuan-video-1.5',                               score: 1196, ci: 15, votes: 5476,    preliminary: false },
  { rank: 35, rankSpread: '34 36', modelName: 'hailuo-02-fast',                                  score: 1193, ci: 10, votes: 22549,   preliminary: false },
  { rank: 36, rankSpread: '34 38', modelName: 'seedance-v1-lite',                                score: 1184, ci: 8,  votes: 33754,   preliminary: false },
  { rank: 37, rankSpread: '36 38', modelName: 'wan-v2.2-a14b',                                   score: 1169, ci: 10, votes: 27067,   preliminary: false },
  { rank: 38, rankSpread: '35 39', modelName: 'veo-2',                                           score: 1165, ci: 16, votes: 10319,   preliminary: false },
  { rank: 39, rankSpread: '38 39', modelName: 'ltx-2-19b',                                       score: 1147, ci: 6,  votes: 166117,  preliminary: false },
  { rank: 40, rankSpread: '40 40', modelName: 'ray2',                                            score: 1107, ci: 16, votes: 9527,    preliminary: false },
  { rank: 41, rankSpread: '41 41', modelName: 'runway-gen4-turbo',                               score: 1051, ci: 13, votes: 6811,    preliminary: false },
  { rank: 42, rankSpread: '42 42', modelName: 'pika-v2.2',                                       score: 996,  ci: 13, votes: 8655,    preliminary: false },
];

const IMAGE2VIDEO_ORG_LICENSE: Record<string, { organization: string; license: string }> = {
  'dreamina-seedance-2.0-720p':      { organization: 'Bytedance',  license: 'Proprietary' },
  'gemini-omni-flash':               { organization: 'Google',     license: 'Proprietary' },
  'grok-imagine-video-1.5-preview-720p': { organization: 'xAI',    license: 'Proprietary' },
  'happyhorse-1.0':                  { organization: 'Alibaba-ATH', license: 'Proprietary' },
  'wan2.7-i2v':                      { organization: 'Alibaba',    license: 'Proprietary' },
  'grok-imagine-video-720p':         { organization: 'xAI',        license: 'Proprietary' },
  'veo-3.1-audio':                   { organization: 'Google',     license: 'Proprietary' },
  'veo-3.1-audio-1080p':             { organization: 'Google',     license: 'Proprietary' },
  'veo-3.1-fast-audio':              { organization: 'Google',     license: 'Proprietary' },
  'grok-imagine-video-480p':         { organization: 'xAI',        license: 'Proprietary' },
  'veo-3.1-fast-audio-1080p':        { organization: 'Google',     license: 'Proprietary' },
  'vidu-q3-pro':                     { organization: 'Shengshu',   license: 'Proprietary' },
  'kling-v3-pro':                    { organization: 'KlingAI',    license: 'Proprietary' },
  'veo-3-audio':                     { organization: 'Google',     license: 'Proprietary' },
  'veo-3-fast-audio':                { organization: 'Google',     license: 'Proprietary' },
  'wan2.5-i2v-preview':              { organization: 'Alibaba',    license: 'Proprietary' },
  'wan2.6-i2v':                      { organization: 'Alibaba',    license: 'Proprietary' },
  'seedance-v1.5-pro':               { organization: 'Bytedance',  license: 'Proprietary' },
  'pixverse-v5.6':                   { organization: 'Pixverse',   license: 'Proprietary' },
  'kling-2.6-pro':                   { organization: 'KlingAI',    license: 'Proprietary' },
  'kling-2.5-turbo-1080p':           { organization: 'KlingAI',    license: 'Proprietary' },
  'seedance-v1-pro':                 { organization: 'Bytedance',  license: 'Proprietary' },
  'hailuo-2.3':                      { organization: 'MiniMax',    license: 'Proprietary' },
  'veo-3-fast':                      { organization: 'Google',     license: 'Proprietary' },
  'veo-3':                           { organization: 'Google',     license: 'Proprietary' },
  'p-video':                         { organization: 'Pruna',      license: 'Proprietary' },
  'vidu-q2-turbo':                   { organization: 'Shengshu',   license: 'Proprietary' },
  'kling-v2.1-master':               { organization: 'KlingAI',    license: 'Proprietary' },
  'hailuo-02-pro':                   { organization: 'MiniMax',    license: 'Proprietary' },
  'kling-v2.1-standard':             { organization: 'KlingAI',    license: 'Proprietary' },
  'ray-3':                           { organization: 'Luma AI',    license: 'Proprietary' },
  'hailuo-02-standard':              { organization: 'MiniMax',    license: 'Proprietary' },
  'vidu-q2-pro':                     { organization: 'Shengshu',   license: 'Proprietary' },
  'hunyuan-video-1.5':               { organization: 'Tencent',    license: 'tencent-hunyuan-community' },
  'hailuo-02-fast':                  { organization: 'MiniMax',    license: 'Proprietary' },
  'seedance-v1-lite':                { organization: 'Bytedance',  license: 'Proprietary' },
  'wan-v2.2-a14b':                   { organization: 'Alibaba',    license: 'Apache 2.0' },
  'veo-2':                           { organization: 'Google',     license: 'Proprietary' },
  'ltx-2-19b':                       { organization: 'lightricks', license: 'ltx-2-community-license-agreement' },
  'ray2':                            { organization: 'Luma AI',    license: 'Proprietary' },
  'runway-gen4-turbo':               { organization: 'Runway',     license: 'Proprietary' },
  'pika-v2.2':                       { organization: 'Pika',       license: 'Proprietary' },
};

const IMAGE2VIDEO_ARENA_RANKINGS: ArenaRanking[] = IMAGE2VIDEO_RAW_RANKINGS.map(r => {
  const meta = IMAGE2VIDEO_ORG_LICENSE[r.modelName];
  return { ...r, organization: meta?.organization ?? 'Unknown', license: meta?.license ?? 'Unknown' };
});

const IMAGE2VIDEO_NAME_OVERRIDES: Record<string, string> = {
  // PromptKit model names → Image-to-Video arena leaderboard names
  'Wan 2.7': 'wan2.7-i2v',
  'Wan 2.6': 'wan2.6-i2v',
  'Seedance 1.5 Pro': 'seedance-v1.5-pro',
  'Seedance 2.0': 'dreamina-seedance-2.0-720p',
  'Gemini Omni': 'gemini-omni-flash',
  'Kling Video 2.6 Pro': 'kling-2.6-pro',
  'MiniMax Hailuo 2.3': 'hailuo-2.3',
  'MiniMax Hailuo 02': 'hailuo-02-pro',
  'Pika 2.2': 'pika-v2.2',
  'Grok Imagine Video': 'grok-imagine-video-720p',
  'Veo 3.1': 'veo-3.1-audio',
  'Veo 3.1 Fast': 'veo-3.1-fast-audio',
  'Gemini OmniFlash': 'gemini-omni-flash',
  'Dreamina Seedance 2.0 (720p)': 'dreamina-seedance-2.0-720p',
  'HappyHorse 1.0': 'happyhorse-1.0',
  'Veo 3.1 Audio (1080p)': 'veo-3.1-audio-1080p',
  'Wan 2.7 T2V': 'wan2.7-i2v',
  'Wan 2.7 I2V': 'wan2.7-i2v',
  'Veo 3.1 Audio': 'veo-3.1-audio',
  'Veo 3.1 Fast Audio': 'veo-3.1-fast-audio',
  'Veo 3.1 Fast Audio (1080p)': 'veo-3.1-fast-audio-1080p',
  'Grok Imagine Video (720p)': 'grok-imagine-video-720p',
  'Grok Imagine Video 1.5': 'grok-imagine-video-1.5-preview-720p',
  'Veo 3 Fast Audio': 'veo-3-fast-audio',
  'Veo 3 Audio': 'veo-3-audio',
  'Wan 2.6 I2V': 'wan2.6-i2v',
  'Wan 2.5 I2V Preview': 'wan2.5-i2v-preview',
  'Seedance V1.5 Pro': 'seedance-v1.5-pro',
  'Veo 3': 'veo-3',
  'Veo 3 Fast': 'veo-3-fast',
  'PixVerse V5.6': 'pixverse-v5.6',
  'Runway Gen4 Turbo': 'runway-gen4-turbo',
  'Grok Imagine Video (480p)': 'grok-imagine-video-480p',
  'Kling 2.5 Turbo (1080p)': 'kling-2.5-turbo-1080p',
  'Kling 2.6 Pro': 'kling-2.6-pro',
  'Kling V3 Pro': 'kling-v3-pro',
  'P-Video': 'p-video',
  'Ray 3': 'ray-3',
  'Hailuo 2.3': 'hailuo-2.3',
  'Hailuo O2 Pro': 'hailuo-02-pro',
  'Seedance V1 Pro': 'seedance-v1-pro',
  'Hailuo O2 Standard': 'hailuo-02-standard',
  'Vidu Q3 Pro': 'vidu-q3-pro',
  'Vidu Q2 Turbo': 'vidu-q2-turbo',
  'Vidu Q2 Pro': 'vidu-q2-pro',
  'Hailuo O2 Fast': 'hailuo-02-fast',
  'Hunyuan Video 1.5': 'hunyuan-video-1.5',
  'Veo 2': 'veo-2',
  'Kling V2.1 Master': 'kling-v2.1-master',
  'Kling V2.1 Standard': 'kling-v2.1-standard',
  'LTX 2 (19B)': 'ltx-2-19b',
  'Wan V2.2 A14B': 'wan-v2.2-a14b',
  'Seedance V1 Lite': 'seedance-v1-lite',
  'Ray 2': 'ray2',
  'Pika V2.2': 'pika-v2.2',
};

const IMAGE2VIDEO_RANKING_BY_NORMALIZED = new Map<string, ArenaRanking>();

for (const r of IMAGE2VIDEO_ARENA_RANKINGS) {
  const key = normalize(r.modelName);
  if (!IMAGE2VIDEO_RANKING_BY_NORMALIZED.has(key)) {
    IMAGE2VIDEO_RANKING_BY_NORMALIZED.set(key, r);
  }
}

export function getImageToVideoArenaRanking(modelName: string): ArenaRanking | null {
  const mapped = IMAGE2VIDEO_NAME_OVERRIDES[modelName];
  if (mapped) {
    const found = IMAGE2VIDEO_ARENA_RANKINGS.find(r => r.modelName === mapped);
    if (found) return found;
  }

  const key = normalize(modelName);
  return IMAGE2VIDEO_RANKING_BY_NORMALIZED.get(key) ?? null;
}

// ── Chatbot Arena (Text Models) ───────────────────────────────────

const TEXT_RAW_RANKINGS: Array<Omit<ArenaRanking, 'organization' | 'license'>> = [
  { rank: 1,  rankSpread: '1 4',  modelName: 'claude-fable-5',                                          score: 1508, ci: 9,  votes: 4297,   preliminary: false },
  { rank: 2,  rankSpread: '1 4',  modelName: 'claude-opus-4-6-thinking',                                score: 1504, ci: 4,  votes: 46410,  preliminary: false },
  { rank: 3,  rankSpread: '1 4',  modelName: 'claude-opus-4-7-thinking',                                score: 1502, ci: 5,  votes: 32629,  preliminary: false },
  { rank: 4,  rankSpread: '1 5',  modelName: 'claude-opus-4-6',                                         score: 1499, ci: 4,  votes: 49596,  preliminary: false },
  { rank: 5,  rankSpread: '4 9',  modelName: 'muse-spark',                                              score: 1487, ci: 6,  votes: 13607,  preliminary: false },
  { rank: 6,  rankSpread: '5 15', modelName: 'gemini-3.1-pro-preview',                                  score: 1486, ci: 4,  votes: 60640,  preliminary: false },
  { rank: 7,  rankSpread: '5 14', modelName: 'gemini-3-pro',                                            score: 1486, ci: 4,  votes: 41314,  preliminary: false },
  { rank: 8,  rankSpread: '5 22', modelName: 'claude-opus-4-8-thinking',                                score: 1483, ci: 6,  votes: 12963,  preliminary: false },
  { rank: 9,  rankSpread: '6 23', modelName: 'gpt-5.5-high',                                            score: 1481, ci: 5,  votes: 28268,  preliminary: false },
  { rank: 10, rankSpread: '7 25', modelName: 'gpt-5.4-high',                                            score: 1478, ci: 4,  votes: 40959,  preliminary: false },
  { rank: 11, rankSpread: '6 28', modelName: 'claude-opus-4-8',                                         score: 1478, ci: 6,  votes: 13316,  preliminary: false },
  { rank: 12, rankSpread: '6 30', modelName: 'gemini-3.5-flash',                                        score: 1476, ci: 7,  votes: 10171,  preliminary: false },
  { rank: 13, rankSpread: '9 28', modelName: 'gpt-5.2-chat-latest-20260210',                            score: 1475, ci: 4,  votes: 34555,  preliminary: false },
  { rank: 14, rankSpread: '9 30', modelName: 'glm-5.1',                                                 score: 1475, ci: 6,  votes: 16101,  preliminary: false },
  { rank: 15, rankSpread: '9 29', modelName: 'gpt-5.5',                                                 score: 1475, ci: 5,  votes: 29071,  preliminary: false },
  { rank: 16, rankSpread: '6 33', modelName: 'qwen3.7-max-preview',                                     score: 1475, ci: 10, votes: 3740,   preliminary: false },
  { rank: 17, rankSpread: '9 29', modelName: 'grok-4.20-beta-0309-reasoning',                           score: 1474, ci: 4,  votes: 42370,  preliminary: false },
  { rank: 18, rankSpread: '9 30', modelName: 'grok-4.20-beta1',                                        score: 1474, ci: 5,  votes: 26964,  preliminary: false },
  { rank: 19, rankSpread: '9 32', modelName: 'gemini-3-flash',                                          score: 1473, ci: 4,  votes: 30711,  preliminary: false },
  { rank: 20, rankSpread: '10 32', modelName: 'claude-opus-4-5-20251101-thinking-32k',                  score: 1473, ci: 4,  votes: 37087,  preliminary: false },
  { rank: 21, rankSpread: '9 32', modelName: 'gpt-5.5-instant',                                        score: 1473, ci: 5,  votes: 26254,  preliminary: false },
  { rank: 22, rankSpread: '11 32', modelName: 'grok-4.20-multi-agent-beta-0309',                        score: 1472, ci: 4,  votes: 41384,  preliminary: false },
  { rank: 23, rankSpread: '11 32', modelName: 'claude-sonnet-4-6',                                     score: 1472, ci: 4,  votes: 39561,  preliminary: false },
  { rank: 24, rankSpread: '8 37', modelName: 'glm-5.2 (max)',                                          score: 1471, ci: 10, votes: 3357,   preliminary: false },
  { rank: 25, rankSpread: '12 32', modelName: 'claude-opus-4-5-20251101',                              score: 1469, ci: 3,  votes: 71167,  preliminary: false },
  { rank: 26, rankSpread: '12 33', modelName: 'gpt-5.4',                                               score: 1468, ci: 4,  votes: 43382,  preliminary: false },
  { rank: 27, rankSpread: '12 36', modelName: 'ernie-5.1',                                             score: 1468, ci: 5,  votes: 25064,  preliminary: false },
  { rank: 28, rankSpread: '14 37', modelName: 'mimo-v2.5-pro',                                         score: 1466, ci: 5,  votes: 26563,  preliminary: false },
  { rank: 29, rankSpread: '19 35', modelName: 'grok-4.1-thinking',                                     score: 1466, ci: 3,  votes: 65623,  preliminary: false },
  { rank: 30, rankSpread: '16 38', modelName: 'qwen3.5-max-preview',                                   score: 1465, ci: 5,  votes: 21564,  preliminary: false },
  { rank: 31, rankSpread: '16 38', modelName: 'qwen3.6-max-preview',                                   score: 1461, ci: 8,  votes: 5216,   preliminary: false },
  { rank: 32, rankSpread: '26 43', modelName: 'gemini-3-flash (thinking-minimal)',                     score: 1460, ci: 3,  votes: 66402,  preliminary: false },
  { rank: 33, rankSpread: '25 44', modelName: 'kimi-k2.6',                                             score: 1460, ci: 5,  votes: 25456,  preliminary: false },
  { rank: 34, rankSpread: '27 43', modelName: 'grok-4.1',                                              score: 1460, ci: 3,  votes: 67759,  preliminary: false },
  { rank: 35, rankSpread: '28 48', modelName: 'deepseek-v4-pro-thinking',                              score: 1458, ci: 5,  votes: 26928,  preliminary: false },
  { rank: 36, rankSpread: '29 48', modelName: 'glm-5',                                                 score: 1457, ci: 5,  votes: 23246,  preliminary: false },
  { rank: 37, rankSpread: '30 50', modelName: 'deepseek-v4-pro',                                       score: 1456, ci: 5,  votes: 28720,  preliminary: false },
  { rank: 38, rankSpread: '32 48', modelName: 'claude-sonnet-4-5-20250929-thinking-32k',                score: 1455, ci: 3,  votes: 82494,  preliminary: false },
  { rank: 39, rankSpread: '32 50', modelName: 'claude-sonnet-4-5-20250929',                            score: 1455, ci: 3,  votes: 80950,  preliminary: false },
  { rank: 40, rankSpread: '32 50', modelName: 'dola-seed-2.0-pro',                                     score: 1455, ci: 4,  votes: 50401,  preliminary: false },
  { rank: 41, rankSpread: '32 51', modelName: 'gpt-5.1-high',                                          score: 1455, ci: 4,  votes: 40820,  preliminary: false },
  { rank: 42, rankSpread: '32 60', modelName: 'gemma-4-31b',                                           score: 1451, ci: 8,  votes: 5884,   preliminary: false },
  { rank: 43, rankSpread: '35 59', modelName: 'kimi-k2.5-thinking',                                    score: 1450, ci: 4,  votes: 47780,  preliminary: false },
  { rank: 44, rankSpread: '34 60', modelName: 'ernie-5.0-preview-1203',                                score: 1449, ci: 7,  votes: 9748,   preliminary: false },
  { rank: 45, rankSpread: '38 60', modelName: 'claude-opus-4-1-20250805-thinking-16k',                  score: 1449, ci: 3,  votes: 49802,  preliminary: false },
  { rank: 46, rankSpread: '35 60', modelName: 'gpt-5.3-chat-latest',                                   score: 1449, ci: 4,  votes: 33125,  preliminary: false },
  { rank: 47, rankSpread: '35 60', modelName: 'mimo-v2-pro',                                           score: 1448, ci: 5,  votes: 24606,  preliminary: false },
  { rank: 48, rankSpread: '35 61', modelName: 'minimax-m3',                                            score: 1448, ci: 7,  votes: 11264,  preliminary: false },
  { rank: 49, rankSpread: '39 60', modelName: 'gpt-5.4-mini-high',                                     score: 1448, ci: 4,  votes: 39525,  preliminary: false },
  { rank: 50, rankSpread: '43 60', modelName: 'claude-opus-4-1-20250805',                              score: 1447, ci: 3,  votes: 77333,  preliminary: false },
  { rank: 51, rankSpread: '42 60', modelName: 'ernie-5.0-0110',                                        score: 1447, ci: 4,  votes: 35299,  preliminary: false },
  { rank: 52, rankSpread: '43 60', modelName: 'llama-2-70b-chat',                                      score: 1446, ci: 3,  votes: 82419,  preliminary: false },
  { rank: 53, rankSpread: '43 65', modelName: 'glm-4.5',                                               score: 1445, ci: 6,  votes: 14547,  preliminary: false },
  { rank: 54, rankSpread: '43 64', modelName: 'gemini-3.1-flash-lite-preview',                         score: 1444, ci: 5,  votes: 28997,  preliminary: false },
  { rank: 55, rankSpread: '43 65', modelName: 'grok-4.3',                                              score: 1444, ci: 5,  votes: 28229,  preliminary: false },
  { rank: 56, rankSpread: '43 63', modelName: 'qwen3.5-397b-a17b',                                     score: 1444, ci: 4,  votes: 43048,  preliminary: false },
  { rank: 57, rankSpread: '43 63', modelName: 'chatgpt-4o-latest-20250326',                            score: 1443, ci: 3,  votes: 82447,  preliminary: false },
  { rank: 58, rankSpread: '43 72', modelName: 'glm-4.7',                                               score: 1443, ci: 6,  votes: 12121,  preliminary: false },
  { rank: 59, rankSpread: '53 73', modelName: 'hunyuan-vision-1.5-thinking',                           score: 1396, ci: 12, votes: 2216,   preliminary: false },
  { rank: 60, rankSpread: '54 75', modelName: 'hunyuan-t1-20250711',                                   score: 1387, ci: 9,  votes: 4704,   preliminary: false },
  { rank: 61, rankSpread: '55 80', modelName: 'gpt-4o-2024-08-06',                                     score: 1335, ci: 4,  votes: 45499,  preliminary: false },
  { rank: 62, rankSpread: '55 80', modelName: 'llama-4-maverick-17b-128e-instruct',                     score: 1327, ci: 4,  votes: 39982,  preliminary: false },
  { rank: 63, rankSpread: '56 81', modelName: 'llama-3.3-70b-instruct',                                score: 1318, ci: 3,  votes: 54734,  preliminary: false },
  { rank: 64, rankSpread: '57 81', modelName: 'qwen2.5-72b-instruct',                                  score: 1303, ci: 4,  votes: 39406,  preliminary: false },
  { rank: 65, rankSpread: '58 81', modelName: 'llama-3.1-70b-instruct',                                score: 1293, ci: 4,  votes: 55240,  preliminary: false },
  { rank: 66, rankSpread: '59 82', modelName: 'llama-3-70b-instruct',                                  score: 1276, ci: 4,  votes: 156876, preliminary: false },
  { rank: 67, rankSpread: '60 82', modelName: 'gemma-2-27b-it',                                        score: 1289, ci: 3,  votes: 75754,  preliminary: false },
  { rank: 68, rankSpread: '61 82', modelName: 'gpt-4o-mini-2024-07-18',                                score: 1318, ci: 4,  votes: 68709,  preliminary: false },
  { rank: 69, rankSpread: '62 83', modelName: 'mistral-large-2407',                                    score: 1314, ci: 4,  votes: 45459,  preliminary: false },
  { rank: 70, rankSpread: '63 84', modelName: 'gemini-1.5-pro-002',                                    score: 1351, ci: 3,  votes: 55606,  preliminary: false },
  { rank: 71, rankSpread: '64 85', modelName: 'claude-3-opus-20240229',                                score: 1321, ci: 3,  votes: 194909, preliminary: false },
  { rank: 72, rankSpread: '65 86', modelName: 'command-r-plus',                                        score: 1261, ci: 4,  votes: 77554,  preliminary: false },
  { rank: 73, rankSpread: '66 87', modelName: 'claude-3-sonnet-20240229',                              score: 1280, ci: 4,  votes: 109284, preliminary: false },
  { rank: 74, rankSpread: '67 88', modelName: 'claude-3-haiku-20240307',                               score: 1261, ci: 4,  votes: 117701, preliminary: false },
  { rank: 75, rankSpread: '68 89', modelName: 'gemini-1.5-flash-002',                                  score: 1309, ci: 4,  votes: 34902,  preliminary: false },
  { rank: 76, rankSpread: '69 90', modelName: 'gemini-1.5-flash-001',                                  score: 1286, ci: 4,  votes: 62833,  preliminary: false },
  { rank: 77, rankSpread: '70 91', modelName: 'gpt-4-0125-preview',                                    score: 1313, ci: 4,  votes: 93439,  preliminary: false },
  { rank: 78, rankSpread: '71 92', modelName: 'gpt-4-1106-preview',                                    score: 1312, ci: 4,  votes: 100105, preliminary: false },
  { rank: 79, rankSpread: '72 93', modelName: 'gpt-4-0613',                                            score: 1275, ci: 4,  votes: 88723,  preliminary: false },
  { rank: 80, rankSpread: '73 94', modelName: 'gpt-4-0314',                                            score: 1287, ci: 5,  votes: 54173,  preliminary: false },
  { rank: 81, rankSpread: '74 95', modelName: 'llama-3-8b-instruct',                                   score: 1223, ci: 4,  votes: 104642, preliminary: false },
  { rank: 82, rankSpread: '75 96', modelName: 'llama-2-13b-chat',                                      score: 1141, ci: 7,  votes: 19174,  preliminary: false },
  { rank: 83, rankSpread: '76 97', modelName: 'llama-2-7b-chat',                                       score: 1107, ci: 7,  votes: 14148,  preliminary: false },
  { rank: 84, rankSpread: '77 98', modelName: 'gemma-7b-it',                                           score: 1137, ci: 9,  votes: 8925,   preliminary: false },
  { rank: 85, rankSpread: '78 99', modelName: 'gemma-2b-it',                                           score: 1092, ci: 11, votes: 4780,   preliminary: false },
  { rank: 86, rankSpread: '79 100', modelName: 'mistral-7b-instruct',                                  score: 1109, ci: 9,  votes: 8977,   preliminary: false },
  { rank: 87, rankSpread: '80 101', modelName: 'zephyr-7b-beta',                                       score: 1130, ci: 9,  votes: 11118,  preliminary: false },
  { rank: 88, rankSpread: '81 102', modelName: 'phi-3-mini-4k-instruct',                               score: 1127, ci: 6,  votes: 20118,  preliminary: false },
  { rank: 89, rankSpread: '82 103', modelName: 'qwen1.5-72b-chat',                                     score: 1233, ci: 5,  votes: 39302,  preliminary: false },
  { rank: 90, rankSpread: '83 104', modelName: 'qwen1.5-32b-chat',                                     score: 1203, ci: 6,  votes: 21741,  preliminary: false },
  { rank: 91, rankSpread: '84 105', modelName: 'qwen1.5-14b-chat',                                     score: 1190, ci: 7,  votes: 17839,  preliminary: false },
  { rank: 92, rankSpread: '85 106', modelName: 'qwen1.5-7b-chat',                                      score: 1143, ci: 10, votes: 4737,   preliminary: false },
  { rank: 93, rankSpread: '86 107', modelName: 'qwen1.5-4b-chat',                                      score: 1090, ci: 9,  votes: 7597,   preliminary: false },
  { rank: 94, rankSpread: '87 108', modelName: 'deepseek-llm-67b-chat',                                score: 1184, ci: 11, votes: 4932,   preliminary: false },
  { rank: 95, rankSpread: '88 109', modelName: 'deepseek-v2.5',                                        score: 1307, ci: 5,  votes: 24572,  preliminary: false },
  { rank: 96, rankSpread: '89 110', modelName: 'deepseek-coder-v2',                                    score: 1264, ci: 6,  votes: 15147,  preliminary: false },
  { rank: 97, rankSpread: '90 111', modelName: 'chatglm3-6b',                                          score: 1055, ci: 12, votes: 4658,   preliminary: false },
  { rank: 98, rankSpread: '91 112', modelName: 'chatglm2-6b',                                          score: 1024, ci: 14, votes: 2658,   preliminary: false },
  { rank: 99, rankSpread: '92 113', modelName: 'chatglm-6b',                                           score: 995,  ci: 13, votes: 4914,   preliminary: false },
  { rank: 100, rankSpread: '93 114', modelName: 'RWKV-4-Raven-14B',                                   score: 1041, ci: 11, votes: 4845,   preliminary: false },
  { rank: 101, rankSpread: '94 115', modelName: 'MPT-30b-chat',                                        score: 1150, ci: 12, votes: 2572,   preliminary: false },
  { rank: 102, rankSpread: '95 116', modelName: 'MPT-7b-chat',                                         score: 1062, ci: 12, votes: 3924,   preliminary: false },
  { rank: 103, rankSpread: '96 117', modelName: 'falcon-180b-chat',                                    score: 1147, ci: 17, votes: 1295,   preliminary: false },
  { rank: 104, rankSpread: '97 118', modelName: 'guanaco-33b',                                         score: 1126, ci: 12, votes: 2921,   preliminary: false },
  { rank: 105, rankSpread: '98 119', modelName: 'alpaca-13b',                                          score: 1068, ci: 11, votes: 5745,   preliminary: false },
  { rank: 106, rankSpread: '99 120', modelName: 'koala-13b',                                           score: 1070, ci: 10, votes: 6965,   preliminary: false },
  { rank: 107, rankSpread: '100 121', modelName: 'dolly-v2-12b',                                       score: 980,  ci: 14, votes: 3412,   preliminary: false },
  { rank: 108, rankSpread: '101 122', modelName: 'oasst-pythia-12b',                                   score: 1022, ci: 11, votes: 6310,   preliminary: false },
  { rank: 109, rankSpread: '102 123', modelName: 'fastchat-t5-3b',                                     score: 991,  ci: 12, votes: 4203,   preliminary: false },
  { rank: 110, rankSpread: '103 124', modelName: 'gpt4all-13b-snoozy',                                 score: 1066, ci: 15, votes: 1743,   preliminary: false },
  { rank: 111, rankSpread: '104 125', modelName: 'stablelm-tuned-alpha-7b',                            score: 952,  ci: 13, votes: 3287,   preliminary: false },
];

const TEXT_ORG_LICENSE: Record<string, { organization: string; license: string }> = {
  'claude-fable-5':                                        { organization: 'Anthropic',   license: 'Proprietary' },
  'claude-opus-4-6-thinking':                              { organization: 'Anthropic',   license: 'Proprietary' },
  'claude-opus-4-7-thinking':                              { organization: 'Anthropic',   license: 'Proprietary' },
  'claude-opus-4-6':                                       { organization: 'Anthropic',   license: 'Proprietary' },
  'muse-spark':                                            { organization: 'Meta',        license: 'Proprietary' },
  'gemini-3.1-pro-preview':                                { organization: 'Google',      license: 'Proprietary' },
  'gemini-3-pro':                                          { organization: 'Google',      license: 'Proprietary' },
  'claude-opus-4-8-thinking':                              { organization: 'Anthropic',   license: 'Proprietary' },
  'gpt-5.5-high':                                          { organization: 'OpenAI',      license: 'Proprietary' },
  'gpt-5.4-high':                                          { organization: 'OpenAI',      license: 'Proprietary' },
  'claude-opus-4-8':                                       { organization: 'Anthropic',   license: 'Proprietary' },
  'gemini-3.5-flash':                                      { organization: 'Google',      license: 'Proprietary' },
  'gpt-5.2-chat-latest-20260210':                          { organization: 'OpenAI',      license: 'Proprietary' },
  'glm-5.1':                                               { organization: 'Zhipu AI',    license: 'MIT' },
  'gpt-5.5':                                               { organization: 'OpenAI',      license: 'Proprietary' },
  'qwen3.7-max-preview':                                   { organization: 'Alibaba',     license: 'Proprietary' },
  'grok-4.20-beta-0309-reasoning':                         { organization: 'xAI',         license: 'Proprietary' },
  'grok-4.20-beta1':                                       { organization: 'xAI',         license: 'Proprietary' },
  'gemini-3-flash':                                        { organization: 'Google',      license: 'Proprietary' },
  'claude-opus-4-5-20251101-thinking-32k':                  { organization: 'Anthropic',   license: 'Proprietary' },
  'gpt-5.5-instant':                                       { organization: 'OpenAI',      license: 'Proprietary' },
  'grok-4.20-multi-agent-beta-0309':                       { organization: 'xAI',         license: 'Proprietary' },
  'claude-sonnet-4-6':                                     { organization: 'Anthropic',   license: 'Proprietary' },
  'glm-5.2 (max)':                                         { organization: 'Zhipu AI',    license: 'MIT' },
  'claude-opus-4-5-20251101':                              { organization: 'Anthropic',   license: 'Proprietary' },
  'gpt-5.4':                                               { organization: 'OpenAI',      license: 'Proprietary' },
  'ernie-5.1':                                             { organization: 'Baidu',       license: 'Proprietary' },
  'mimo-v2.5-pro':                                         { organization: 'Xiaomi',      license: 'MIT' },
  'grok-4.1-thinking':                                     { organization: 'xAI',         license: 'Proprietary' },
  'qwen3.5-max-preview':                                   { organization: 'Alibaba',     license: 'Proprietary' },
  'qwen3.6-max-preview':                                   { organization: 'Alibaba',     license: 'Proprietary' },
  'gemini-3-flash (thinking-minimal)':                     { organization: 'Google',      license: 'Proprietary' },
  'kimi-k2.6':                                             { organization: 'Moonshot',    license: 'Modified MIT' },
  'grok-4.1':                                              { organization: 'xAI',         license: 'Proprietary' },
  'deepseek-v4-pro-thinking':                              { organization: 'DeepSeek',    license: 'MIT' },
  'glm-5':                                                 { organization: 'Zhipu AI',    license: 'MIT' },
  'deepseek-v4-pro':                                       { organization: 'DeepSeek',    license: 'MIT' },
  'claude-sonnet-4-5-20250929-thinking-32k':                { organization: 'Anthropic',   license: 'Proprietary' },
  'claude-sonnet-4-5-20250929':                            { organization: 'Anthropic',   license: 'Proprietary' },
  'dola-seed-2.0-pro':                                     { organization: 'ByteDance',   license: 'Proprietary' },
  'gpt-5.1-high':                                          { organization: 'OpenAI',      license: 'Proprietary' },
  'gemma-4-31b':                                           { organization: 'Google',      license: 'Apache 2.0' },
  'kimi-k2.5-thinking':                                    { organization: 'Moonshot',    license: 'Modified MIT' },
  'ernie-5.0-preview-1203':                                { organization: 'Baidu',       license: 'Proprietary' },
  'claude-opus-4-1-20250805-thinking-16k':                  { organization: 'Anthropic',   license: 'Proprietary' },
  'gpt-5.3-chat-latest':                                   { organization: 'OpenAI',      license: 'Proprietary' },
  'mimo-v2-pro':                                           { organization: 'Xiaomi',      license: 'Proprietary' },
  'minimax-m3':                                            { organization: 'MiniMax',     license: 'Proprietary' },
  'gpt-5.4-mini-high':                                     { organization: 'OpenAI',      license: 'Proprietary' },
  'claude-opus-4-1-20250805':                              { organization: 'Anthropic',   license: 'Proprietary' },
  'ernie-5.0-0110':                                        { organization: 'Baidu',       license: 'Proprietary' },
  'llama-2-70b-chat':                                      { organization: 'Meta',        license: 'Llama 2 Community' },
  'glm-4.5':                                               { organization: 'Zhipu AI',    license: 'MIT' },
  'gemini-3.1-flash-lite-preview':                         { organization: 'Google',      license: 'Proprietary' },
  'grok-4.3':                                              { organization: 'xAI',         license: 'Proprietary' },
  'qwen3.5-397b-a17b':                                     { organization: 'Alibaba',     license: 'Apache 2.0' },
  'chatgpt-4o-latest-20250326':                            { organization: 'OpenAI',      license: 'Proprietary' },
  'glm-4.7':                                               { organization: 'Zhipu AI',    license: 'MIT' },
  'hunyuan-vision-1.5-thinking':                           { organization: 'Tencent',     license: 'Proprietary' },
  'hunyuan-t1-20250711':                                   { organization: 'Tencent',     license: 'Proprietary' },
  'gpt-4o-2024-08-06':                                     { organization: 'OpenAI',      license: 'Proprietary' },
  'llama-4-maverick-17b-128e-instruct':                    { organization: 'Meta',        license: 'Llama 4' },
  'llama-3.3-70b-instruct':                               { organization: 'Meta',        license: 'Llama 3.3' },
  'qwen2.5-72b-instruct':                                  { organization: 'Alibaba',     license: 'Qwen' },
  'llama-3.1-70b-instruct':                                { organization: 'Meta',        license: 'Llama 3.1 Community' },
  'llama-3-70b-instruct':                                  { organization: 'Meta',        license: 'Llama 3 Community' },
  'gemma-2-27b-it':                                        { organization: 'Google',      license: 'Gemma' },
  'gpt-4o-mini-2024-07-18':                                { organization: 'OpenAI',      license: 'Proprietary' },
  'mistral-large-2407':                                    { organization: 'Mistral',     license: 'Mistral Research' },
  'gemini-1.5-pro-002':                                    { organization: 'Google',      license: 'Proprietary' },
  'claude-3-opus-20240229':                                { organization: 'Anthropic',   license: 'Proprietary' },
  'command-r-plus':                                        { organization: 'Cohere',      license: 'CC-BY-NC-4.0' },
  'claude-3-sonnet-20240229':                              { organization: 'Anthropic',   license: 'Proprietary' },
  'claude-3-haiku-20240307':                               { organization: 'Anthropic',   license: 'Proprietary' },
  'gemini-1.5-flash-002':                                  { organization: 'Google',      license: 'Proprietary' },
  'gemini-1.5-flash-001':                                  { organization: 'Google',      license: 'Proprietary' },
  'gpt-4-0125-preview':                                    { organization: 'OpenAI',      license: 'Proprietary' },
  'gpt-4-1106-preview':                                    { organization: 'OpenAI',      license: 'Proprietary' },
  'gpt-4-0613':                                            { organization: 'OpenAI',      license: 'Proprietary' },
  'gpt-4-0314':                                            { organization: 'OpenAI',      license: 'Proprietary' },
  'llama-3-8b-instruct':                                   { organization: 'Meta',        license: 'Llama 3 Community' },
  'llama-2-13b-chat':                                      { organization: 'Meta',        license: 'Llama 2 Community' },
  'llama-2-7b-chat':                                       { organization: 'Meta',        license: 'Llama 2 Community' },
  'gemma-7b-it':                                           { organization: 'Google',      license: 'Gemma' },
  'gemma-2b-it':                                           { organization: 'Google',      license: 'Gemma' },
  'mistral-7b-instruct':                                   { organization: 'Mistral',     license: 'Apache 2.0' },
  'zephyr-7b-beta':                                        { organization: 'HuggingFace', license: 'MIT' },
  'phi-3-mini-4k-instruct':                                { organization: 'Microsoft',   license: 'MIT' },
  'qwen1.5-72b-chat':                                      { organization: 'Alibaba',     license: 'Qwen' },
  'qwen1.5-32b-chat':                                      { organization: 'Alibaba',     license: 'Qwen' },
  'qwen1.5-14b-chat':                                      { organization: 'Alibaba',     license: 'Qwen' },
  'qwen1.5-7b-chat':                                       { organization: 'Alibaba',     license: 'Qwen' },
  'qwen1.5-4b-chat':                                       { organization: 'Alibaba',     license: 'Qwen' },
  'deepseek-llm-67b-chat':                                 { organization: 'DeepSeek',    license: 'DeepSeek License' },
  'deepseek-v2.5':                                         { organization: 'DeepSeek',    license: 'DeepSeek' },
  'deepseek-coder-v2':                                     { organization: 'DeepSeek',    license: 'DeepSeek License' },
  'chatglm3-6b':                                           { organization: 'Tsinghua',    license: 'Apache 2.0' },
  'chatglm2-6b':                                           { organization: 'Tsinghua',    license: 'Apache 2.0' },
  'chatglm-6b':                                            { organization: 'Tsinghua',    license: 'Non-commercial' },
  'RWKV-4-Raven-14B':                                      { organization: 'RWKV',        license: 'Apache 2.0' },
  'MPT-30b-chat':                                          { organization: 'MosaicML',    license: 'CC-BY-NC-SA-4.0' },
  'MPT-7b-chat':                                           { organization: 'MosaicML',    license: 'CC-BY-NC-SA-4.0' },
  'falcon-180b-chat':                                      { organization: 'TII',         license: 'Falcon-180B TII License' },
  'guanaco-33b':                                           { organization: 'UW',          license: 'Non-commercial' },
  'alpaca-13b':                                            { organization: 'Stanford',    license: 'Non-commercial' },
  'koala-13b':                                             { organization: 'UC Berkeley', license: 'Non-commercial' },
  'dolly-v2-12b':                                          { organization: 'Databricks',  license: 'MIT' },
  'oasst-pythia-12b':                                      { organization: 'OpenAssistant', license: 'Apache 2.0' },
  'fastchat-t5-3b':                                        { organization: 'LMSYS',       license: 'Apache 2.0' },
  'gpt4all-13b-snoozy':                                    { organization: 'Nomic AI',    license: 'Non-commercial' },
  'stablelm-tuned-alpha-7b':                               { organization: 'Stability AI', license: 'CC-BY-NC-SA-4.0' },
};

const TEXT_ARENA_RANKINGS: ArenaRanking[] = TEXT_RAW_RANKINGS.map(r => {
  const meta = TEXT_ORG_LICENSE[r.modelName];
  return { ...r, organization: meta?.organization ?? 'Unknown', license: meta?.license ?? 'Unknown' };
});

const TEXT_NAME_OVERRIDES: Record<string, string> = {
  // Anthropic
  'Claude Fable 5': 'claude-fable-5',
  'Claude Opus 4.6': 'claude-opus-4-6',
  'Claude Opus 4.7': 'claude-opus-4-7',
  'Claude Opus 4.8': 'claude-opus-4-8',
  'Claude Sonnet 4.6': 'claude-sonnet-4-6',
  // OpenAI
  'GPT-5.5': 'gpt-5.5',
  'GPT-5.5 Pro': 'gpt-5.5-high',
  'GPT-5.4': 'gpt-5.4',
  'GPT-5.4 Pro': 'gpt-5.4-high',
  'GPT-5.4 mini': 'gpt-5.4-mini-high',
  'GPT-5.2': 'gpt-5.2-chat-latest-20260210',
  'GPT-4o': 'gpt-4o-2024-08-06',
  'GPT-4o mini': 'gpt-4o-mini-2024-07-18',
  // Google
  'Gemini 3.1 Pro': 'gemini-3.1-pro-preview',
  'Gemini 3 Pro': 'gemini-3-pro',
  'Gemini 3 Flash': 'gemini-3-flash',
  'Gemini 3.5 Flash': 'gemini-3.5-flash',
  // Meta
  'Muse Spark': 'muse-spark',
  'Llama 4 Maverick': 'llama-4-maverick-17b-128e-instruct',
  'Llama 3.3 70B': 'llama-3.3-70b-instruct',
  'Llama 3.1 70B': 'llama-3.1-70b-instruct',
  'Llama 3.1 8B': 'llama-3-8b-instruct',
  // xAI
  'Grok 4.3': 'grok-4.3',
  // DeepSeek
  'DeepSeek V4 Pro': 'deepseek-v4-pro',
  // Zhipu
  'GLM-5.1': 'glm-5.1',
  'GLM-5': 'glm-5',
  'GLM-4.7': 'glm-4.7',
  'GLM-4.5': 'glm-4.5',
  'GLM-5.2': 'glm-5.2 (max)',
  // Baidu
  'ERNIE 5.1': 'ernie-5.1',
  // Moonshot
  'Kimi K2.6': 'kimi-k2.6',
  'Kimi K2.5': 'kimi-k2.5-thinking',
  // Xiaomi
  'MiMo-V2.5-Pro': 'mimo-v2.5-pro',
  'MiMo-V2-Pro': 'mimo-v2-pro',
  // Alibaba
  'Qwen3.7 Max': 'qwen3.7-max-preview',
  'Qwen 3.5': 'qwen3.5-397b-a17b',
  'Qwen3.5 Flash': 'qwen3.5-max-preview',
  // MiniMax
  'MiniMax-M3': 'minimax-m3',
  // Cohere
  'Command R+': 'command-r-plus',
  // Google DeepMind / Gemma
  'Gemma 4 31B': 'gemma-4-31b',
  // Tencent
  'Hunyuan-T1': 'hunyuan-t1-20250711',
  // NVIDIA
  'Llama 3.3 Nemotron Super 49B': 'llama-3.3-70b-instruct',
  // Mistral
  'Mistral Large 2': 'mistral-large-2407',
  'Mistral Large 3': 'mistral-large-2407',
  // OpenAI chatgpt
  'ChatGPT-4o': 'chatgpt-4o-latest-20250326',
};

const TEXT_RANKING_BY_NORMALIZED = new Map<string, ArenaRanking>();

for (const r of TEXT_ARENA_RANKINGS) {
  const key = normalize(r.modelName);
  if (!TEXT_RANKING_BY_NORMALIZED.has(key)) {
    TEXT_RANKING_BY_NORMALIZED.set(key, r);
  }
}

export function getTextArenaRanking(modelName: string): ArenaRanking | null {
  const mapped = TEXT_NAME_OVERRIDES[modelName];
  if (mapped) {
    const found = TEXT_ARENA_RANKINGS.find(r => r.modelName === mapped);
    if (found) return found;
  }

  const key = normalize(modelName);
  return TEXT_RANKING_BY_NORMALIZED.get(key) ?? null;
}
