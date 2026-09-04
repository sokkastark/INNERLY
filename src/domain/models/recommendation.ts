import { EvidenceLevel, BodyFitVariables } from './taxonomy';

export type RelevanceTier =
  | 'highly_relevant'   // Directly addresses the user's specific situation
  | 'good_option'       // Generally appropriate option
  | 'may_work'          // Could work depending on fit, garment cut, or fabric
  | 'less_relevant';     // Not relevant to the selected situation

export interface UserContext {
  scope?: 'all' | 'bras' | 'panties';
  outfitId?: string;
  occasionId?: string;
  problemId?: string;
  braTypeId?: string;
  pantyTypeId?: string;
  fabricId?: string;
  fitVariables?: BodyFitVariables;
}

export interface MatchResult {
  itemTypeId: string;
  itemTypeCategory: 'bra' | 'panty' | 'fabric';
  itemName: string;
  tier: RelevanceTier;
  why: string[];               // What characteristic of the situation caused this recommendation
  considerations: string[];   // Key fit, fabric, or strap details to check
  cannotDetermine: string[];  // Signature "What Innerly can't tell you from this info"
  evidenceLevel: EvidenceLevel;
}

export interface RecommendationOutput {
  hasResults: boolean;
  insufficientInfo: boolean;
  insufficientInfoPrompt?: string;
  contextSummary: string;
  activeScope: 'all' | 'bras' | 'panties';
  results: MatchResult[];
}
