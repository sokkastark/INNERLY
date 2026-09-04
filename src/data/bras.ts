import { BraType } from '../domain/models/taxonomy';

export const BRA_TYPES: BraType[] = [
  {
    id: 'tshirt_bra',
    name: 'T-Shirt Bra',
    shortDescription: 'Designed with smooth or low-profile cups to reduce visible lines under fitted tops.',
    typicalConstruction: ['Smooth molded cups', 'Low-profile seam edges', 'Wired or wireless underbands'],
    coverageRange: 'three_quarter',
    supportRange: 'medium',
    wireOptions: 'both_available',
    fabricOptions: ['Microfiber', 'Cotton blend', 'Modal'],
    usefulFor: ['tshirt', 'kurti', 'shirt', 'bodycon'],
    limitations: [
      'Does not guarantee 100% invisibility under every fabric weight or lighting condition.',
      'Thin jersey fabrics may still show cup edge contours if cup size is slightly mismatched.'
    ]
  },
  {
    id: 'convertible_multiway',
    name: 'Convertible / Multiway Bra',
    shortDescription: 'Features detachable and repositionable straps for criss-cross, halter, or asymmetrical necklines.',
    typicalConstruction: ['Detachable shoulder straps', 'Multiple strap anchor slots', 'Reinforced band elastic'],
    coverageRange: 'three_quarter',
    supportRange: 'medium',
    wireOptions: 'both_available',
    fabricOptions: ['Microfiber', 'Nylon blend'],
    usefulFor: ['saree', 'kurti', 'dress'],
    limitations: [
      'Requires shoulder straps for maximum vertical lift unless designed specifically as a strapless model.'
    ]
  },
  {
    id: 'strapless_bra',
    name: 'Strapless Bra',
    shortDescription: 'Engineered with silicone grip linings and firm side boning to provide bust support without shoulder straps.',
    typicalConstruction: ['Silicone tape lining band', 'Firm side boning', 'Wider underbust cradle'],
    coverageRange: 'half',
    supportRange: 'high',
    wireOptions: 'underwire',
    fabricOptions: ['Microfiber', 'Lace overlay'],
    usefulFor: ['saree', 'bodycon', 'dress'],
    limitations: [
      'Band tightness is critical: a loose band will cause slipping regardless of silicone grips.',
      'May feel firmer around the ribcage than everyday shoulder-strap bras.'
    ]
  },
  {
    id: 'sports_bra',
    name: 'Sports Bra',
    shortDescription: 'Designed to manage breast movement during physical activity, with support varying by design.',
    typicalConstruction: ['Encapsulation cups or compression panels', 'Wide padded straps', 'Moisture-wicking mesh'],
    coverageRange: 'full',
    supportRange: 'varies',
    wireOptions: 'wireless',
    fabricOptions: ['Polyester blend', 'Nylon elastane', 'Performance mesh'],
    usefulFor: ['gym_wear'],
    limitations: [
      'Not typically styled for low-cut or open-back traditional necklines.'
    ]
  },
  {
    id: 'full_coverage_bra',
    name: 'Full-Coverage Bra',
    shortDescription: 'Offers deep cup containment and a higher center gore to prevent top spillage.',
    typicalConstruction: ['High center gore', 'Full cup structure', 'Wide side wings and back band'],
    coverageRange: 'full',
    supportRange: 'varies',
    wireOptions: 'both_available',
    fabricOptions: ['Cotton', 'Modal', 'Lace blend'],
    usefulFor: ['saree', 'chudidar', 'kurti'],
    limitations: [
      'Cup fabric and seam construction determine support — cotton alone does not guarantee high support.'
    ]
  },
  {
    id: 'bralette',
    name: 'Bralette',
    shortDescription: 'Unstructured, lightweight option prioritizing soft natural shape and pressure-free comfort.',
    typicalConstruction: ['Unwired soft cups', 'Stretch lace or fine knit', 'Flexible thin band'],
    coverageRange: 'three_quarter',
    supportRange: 'light',
    wireOptions: 'wireless',
    fabricOptions: ['Lace', 'Modal', 'Cotton'],
    usefulFor: ['home_relaxing', 'kurti'],
    limitations: [
      'Provides minimal bounce control for high-impact activities or heavy drapes.'
    ]
  }
];
