// Taxonomy Models - Knowledge v1 Evidence Classification & Fit Variables

export type EvidenceLevel =
  | 'fact'               // Physical/construction property
  | 'common_guidance'    // Widely observed guidance
  | 'context_dependent'  // Heavily dependent on outer fabric/lighting
  | 'brand_dependent'    // Manufacturer/sizing variation
  | 'cannot_determine';  // Boundary condition

export type CoverageLevel = 'full' | 'three_quarter' | 'half' | 'demi' | 'minimal' | 'varies';
export type SupportLevel = 'high' | 'medium' | 'light' | 'varies';
export type WireType = 'underwire' | 'wireless' | 'both_available';
export type RiseType = 'high_waist' | 'mid_rise' | 'low_rise';

// Body as a Fit-Variable System
export interface BreastVariables {
  fullness?: 'top' | 'bottom' | 'even';
  spacing?: 'close_set' | 'wide_set' | 'average';
  rootWidth?: 'narrow' | 'wide' | 'average';
}

export interface RibcageVariables {
  underbustAnchor?: 'firm' | 'sensitive';
  torsoHeight?: 'short' | 'average' | 'long';
}

export interface BodyFitVariables {
  breast?: BreastVariables;
  ribcage?: RibcageVariables;
}

export interface BraType {
  id: string;
  name: string;
  shortDescription: string;
  typicalConstruction: string[];
  coverageRange: CoverageLevel;
  supportRange: SupportLevel;
  wireOptions: WireType;
  fabricOptions: string[];
  usefulFor: string[];
  limitations: string[];
  evidenceLevel?: EvidenceLevel;
}

export interface PantyType {
  id: string;
  name: string;
  shortDescription: string;
  coverage: CoverageLevel;
  typicalRise: RiseType;
  typicalConstruction: string[];
  fabricOptions: string[];
  usefulFor: string[];
  limitations: string[];
  evidenceLevel?: EvidenceLevel;
}

export interface OuterwearItem {
  id: string;
  name: string;
  category: 'traditional_indian' | 'casual' | 'formal' | 'active' | 'fitted';
  description: string;
  keyConsiderations: string[];
}

export interface OccasionItem {
  id: string;
  name: string;
  activityLevel: 'restful' | 'moderate' | 'active' | 'high_intensity';
  typicalDurationHours: number;
  keyNeeds: string[];
}

export interface FitProblem {
  id: string;
  title: string;
  symptom: string;
  possibleCauses: string[];
  checkpoints: string[];
}
