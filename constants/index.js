import {
  Mirta_1,
  Mirta_2,
  Mirta_3,
  Mirta_4,
  Mirta_fringe_1,
  Mirta_fringe_2,
  Mirta_fringe_3,
  Mirta_fringe_4,
  Mirta_fringe_5,
  not_found,
} from '@/public/assets/shirts';

export const navLinks = [
  { href: '/collared-shirts', label: 'Collared Shirts' },
  { href: '/women', label: 'Women' },
  { href: '/men', label: 'Men' },
  { href: '/collabs', label: 'Collabs' },
  { href: '/about', label: 'About' },
  { href: '/lookbook', label: 'Lookbook' },
  { href: '/contact', label: 'Contact' },
];

export const footerLinks = [
  { href: '/about-the-brand', label: 'About the Brand' },
  { href: '/shipping', label: 'Shipping' },
  { href: '/return-policy', label: 'Return Policy' },
];

// COLLARED SHIRTS WRITE UP
export const collaredShirts = [
  {
    _id: 1,
    images: [Mirta_1, Mirta_2, Mirta_3, Mirta_4],
    title: 'Mirta collared shirt',
    description:
      'Wide-fit with long cuffs collared shirt. Great for work & play. Versatile piece, can be styled with pants, skirts , outer layer and/or with a cozy sweater on top. Due to its roomy fit comes in two sizes .',
    sizeGuide:
      'this fit is more about length then weight . Taller ladies should get the medium.  Model in photo is 174 cm , wears size medium.',
    colors: ['sky blue', 'navy blue', 'black'],
    sizes: ['small', 'medium'],
    material: ['95% cotton, 5% elastane'],
    price: 90,
  },
  {
    _id: 2,
    images: [
      Mirta_fringe_1,
      Mirta_fringe_2,
      Mirta_fringe_3,
      Mirta_fringe_4,
      Mirta_fringe_5,
    ],
    title: 'Mirta fridge',
    description:
      'Wide-fit with long cuffs collared shirt. Glass beaded fringe on the back.',
    sizeGuide: 'Comes in two sizes due to its roomy fit.',
    colors: ['white with blue fringe', 'white with green fringe'],
    sizes: ['small', 'medium'],
    material: ['95% cotton, 5% elastane'],
    price: 90,
  },
  {
    _id: 3,
    images: [not_found],
    title: 'Lotti',
    description:
      'Regular color and fit with slightly boxy shoulders. Glass beaded fringe on the back. Suede fabric',
    sizeGuide: 'Model in photo is 174cm and is wearing medium',
    colors: ['cream', 'black'],
    sizes: ['small', 'medium'],
    material: ['100% cotton'],
    price: 90,
  },
  {
    _id: 4,
    images: [],
    title: 'Dill pleated',
    description:
      'Charismatic and loud due to pleats in the front .  Oversized silhouette with mandarine collar',
    sizeGuide: 'Comes in two sizes due to its roomy fit.',
    colors: ['white with blue fringe', 'white with green fringe'],
    sizes: ['small', 'medium'],
    material: ['95% cotton, 5% elastane'],
    price: 90,
  },
  {
    _id: 5,
    images: [],
    title: 'Charismatic pleated',
    description:
      'Charismatic and loud due to pleats in the front .  Oversized silhouette with mandarine collar',
    sizeGuide: 'Model is 174 cm. Wide but not long fit.',
    colors: ['white', 'sky blue', 'navy blue', 'black'],
    sizes: ['one-size'],
    material: ['95% cotton, 5% elastane'],
    price: 90,
  },
  {
    _id: 6,
    images: [],
    title: 'Andrea',
    description:
      'Regular fit with hidden buttons and classic collar. Comes in two fabrics , cotton and silk',
    sizeGuide: 'Model in silk is 173 cm amd wearing small/medium',
    colors: [
      'Cotton version : White , Sky blue',
      'Silk version: lime green , black',
    ],
    sizes: ['small-medium', 'large-xlarge'],
    material: [
      'Cotton version: 95% cotton, 5% elastane',
      'Silk version: 100% silk',
    ],
    price: 110,
  },

  {
    _id: 7,
    images: [],
    title: 'Tory',
    description:
      'Modernist feel , decluttered design. A version of the camp collar. A bit longer silhouette with regular fit shoulders. Slits with buttons on the sides.',
    sizeGuide:
      'model is 173 and is wearing a medium since this is our sample size but we would suggest a small for her in this cut .',
    colors: ['white', 'sky blue', 'black'],
    sizes: ['small', 'medium', 'large'],
    material: ['95% cotton, 5% elastane'],
    price: 130,
  },
  {
    _id: 8,
    images: [],
    title: 'Ira',
    description:
      'Our most fitted shirt. Ira feels businessy and confident. Slim fit',
    sizeGuide: 'model is 177 cm and is wearing a medium.',
    colors: ['white', 'black', 'powder pink', 'sky blue'],
    sizes: ['small', 'medium', 'large'],
    material: ['95% cotton, 5% elastane'],
    price: 150,
  },
  {
    _id: 9,
    title: 'Sally',
    description: '3/4 sleeve with shorter front body. Comfy oversized fit',
    sizeGuide: 'Model is 175cm and wearing medium size.',
    colors: ['all season white , black and spring summer: white and turquoise'],
    sizes: ['small', 'medium', 'large'],
    material: ['95% cotton, 5% elastane'],
    price: 0,
  },
  {
    _id: 10,
    title: 'Sammi',
    description:
      'regular long fit with classic collar . Pleated in the middle of the front. Modern cowboy vibe .',
    sizeGuide: 'Model is 175cm and wearing medium size',
    colors: ['white', 'dark navy', 'sky blue'],
    sizes: ['small', 'medium', 'large'],
    material: ['95% cotton, 5% elastane'],
    price: 0,
  },
  {
    _id: 11,
    title: 'Marta',
    description: '3/4 sleeve collared shirt dress',
    sizeGuide: 'Model is 177cm and wearing medium size',
    colors: ['navy blue'],
    sizes: ['small', 'medium', 'large'],
    material: ['?'],
    price: 120,
  },
  {
    _id: 12,
    title: 'Sal',
    description: 'Oversized wide and long collared shirt. Comfy fit.',
    sizeGuide: 'Model is 177cm and wearing medium size',
    colors: ['navy blue'],
    sizes: ['small', 'medium', 'large'],
    material: ['95% cotton, 5% elastane'],
    price: 120,
  },
  {
    _id: 13,
    title: 'Zaks',
    description:
      'Slim fit classic collared shirt with black fabric detailing on cuffs and inside the collar.',
    sizeGuide: 'Model is 175cm and wearing medium size',
    colors: ['navy blue'],
    sizes: ['white with black detailing', 'sky blue with black detailing'],
    material: ['?'],
    price: 120,
  },
];
