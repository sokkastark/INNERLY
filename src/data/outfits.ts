import { OuterwearItem } from '../domain/models/taxonomy';

export const OUTFIT_ITEMS: OuterwearItem[] = [
  {
    id: 'saree',
    name: 'Saree & Blouse',
    category: 'traditional',
    description: 'Traditional drape requiring consideration for blouse necklines, back depth, and petticoat waistband security.',
    keyConsiderations: [
      'Blouse back depth dictates strap visibility',
      'Shoulder seam width for strap stability',
      'Waistband comfort under petticoat drawstrings'
    ]
  },
  {
    id: 'kurti',
    name: 'Kurti / Straight Suit',
    category: 'casual',
    description: 'Everyday traditional/fusion wear ranging from relaxed cottons to fitted side-slit kurtis.',
    keyConsiderations: [
      'Fabric opacity under daylight',
      'Armhole depth to prevent side peek',
      'Breathability in warm weather'
    ]
  },
  {
    id: 'tshirt',
    name: 'T-Shirt / Fitted Top',
    category: 'casual',
    description: 'Fine jersey cotton or knit fabrics that highlight texture, seams, and cup contours.',
    keyConsiderations: [
      'Seamless smooth cups to eliminate ridge lines',
      'Nude-to-skin tones under white or light garments',
      'Proper cup size to avoid upper bust quad-boobing'
    ]
  },
  {
    id: 'bodycon',
    name: 'Bodycon / Fitted Dress',
    category: 'fitted',
    description: 'Silhouette-hugging garments requiring smooth foundation lines from bust to hip.',
    keyConsiderations: [
      'Laser-cut seamless edges',
      'No lace embossing or bulky seam tape',
      'Firm band anchor to prevent shifting'
    ]
  },
  {
    id: 'gym_wear',
    name: 'Activewear / Gym Gear',
    category: 'active',
    description: 'High-movement leggings and compression tops requiring moisture management and bounce control.',
    keyConsiderations: [
      'Moisture-wicking synthetic blend gusset & cups',
      'Encapsulation vs compression support',
      'Chafing-free flatlock seams'
    ]
  }
];
