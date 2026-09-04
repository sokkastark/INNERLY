import { FitProblem } from '../domain/models/taxonomy';

export const FIT_PROBLEMS: FitProblem[] = [
  {
    id: 'visible_lines',
    title: 'Visible Underwear Lines (VPL)',
    symptom: 'Seam ridges or cup outlines show through fitted fabrics.',
    possibleCauses: [
      'Stitched cup seams under thin knit fabric',
      'Thick elastic hem binding on panty leg openings',
      'Textured lace underneath smooth tops'
    ],
    checkpoints: [
      'Switch to molded seamless T-shirt bras for smooth upper coverage.',
      'Opt for laser-cut microfibre hipster or thong panties.',
      'Select skin-tone matching shades rather than white under light tops.'
    ]
  },
  {
    id: 'visible_straps',
    title: 'Visible Bra Straps',
    symptom: 'Straps slip off shoulders or poke out from wider necklines/backless tops.',
    possibleCauses: [
      'Worn out elastic losing tension',
      'Wide neckline outfit exceeding standard strap spacing',
      'Band size too large, causing straps to sit too far out'
    ],
    checkpoints: [
      'Tighten strap adjusters or use a racerback strap converter clip.',
      'Choose multiway bra with detachable/crossable strap positions.',
      'Check band tightness: 80% of support comes from the band, not the straps.'
    ]
  },
  {
    id: 'chafing_sweat',
    title: 'Underbust Chafing & Sweat Accumulation',
    symptom: 'Redness, irritation, or dampness under the bust line or inner thighs.',
    possibleCauses: [
      'Synthetic non-breathable fabrics in warm weather',
      'Underwire pressing directly onto skin without fabric cushion',
      'Skin-on-skin friction during prolonged walking'
    ],
    checkpoints: [
      'Choose natural cotton or bamboo modal blend fabrics.',
      'Ensure bra cup wire sits in the inframammary fold, not on rib tissue.',
      'Consider long-leg boyshorts for inner thigh friction protection.'
    ]
  }
];
