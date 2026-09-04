import { BraType } from '../domain/models/taxonomy';

export const BRA_TYPES: BraType[] = [
  {
    id: 'tshirt_bra',
    name: 'T-Shirt Bra',
    shortDescription: 'Smooth, seamless molded cups designed for invisible coverage under fitted tops.',
    characteristics: [
      'Seamless molded cups',
      'Smooth outer fabric prevents lines',
      'Available in wired and wireless options'
    ],
    coverageLevel: 'three_quarter',
    supportLevel: 'medium',
    wireType: 'both_available',
    paddingType: 'padded',
    suitableOutfits: ['tshirt', 'kurti', 'shirt', 'bodycon'],
    commonProblemsSolved: ['visible_lines']
  },
  {
    id: 'multiway_strapless',
    name: 'Multiway / Strapless Bra',
    shortDescription: 'Versatile bra with convertible or removable straps and silicone grips for necklines.',
    characteristics: [
      'Detachable straps for cross-back, halter, or strapless modes',
      'Silicone lining along band to prevent slipping',
      'Firmer side boning for strapless support'
    ],
    coverageLevel: 'half',
    supportLevel: 'high',
    wireType: 'underwire',
    paddingType: 'padded',
    suitableOutfits: ['saree', 'bodycon', 'dress'],
    commonProblemsSolved: ['visible_straps']
  },
  {
    id: 'sports_bra',
    name: 'Sports Bra',
    shortDescription: 'High-impact compression or encapsulation bra engineered to minimize movement during activities.',
    characteristics: [
      'Bounce control structure',
      'Moisture-wicking athletic fabric',
      'Wide cushioned shoulder straps'
    ],
    coverageLevel: 'full',
    supportLevel: 'high',
    wireType: 'wireless',
    paddingType: 'removable',
    suitableOutfits: ['gym_wear'],
    commonProblemsSolved: ['chafing_sweat', 'band_riding_up']
  },
  {
    id: 'bralette',
    name: 'Bralette',
    shortDescription: 'Unstructured, lightweight bra prioritizing natural shape and lounge comfort.',
    characteristics: [
      'Unwired and unpadded or lightly lined',
      'Lace or soft stretch cotton',
      'Breathable and pressure-free fit'
    ],
    coverageLevel: 'three_quarter',
    supportLevel: 'light',
    wireType: 'wireless',
    paddingType: 'unpadded',
    suitableOutfits: ['kurti', 'chudidar', 'tshirt'],
    commonProblemsSolved: ['chafing_sweat']
  },
  {
    id: 'full_coverage_everyday',
    name: 'Full-Coverage Cotton Bra',
    shortDescription: 'Maximum support and modest coverage for daily wear and traditional attire.',
    characteristics: [
      'High center gore prevents spillage',
      'Soft breathable cotton blend',
      'Wide back band for smooth weight distribution'
    ],
    coverageLevel: 'full',
    supportLevel: 'high',
    wireType: 'wireless',
    paddingType: 'unpadded',
    suitableOutfits: ['saree', 'chudidar', 'kurti'],
    commonProblemsSolved: ['spillage', 'band_riding_up']
  }
];
