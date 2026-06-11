// Unsplash images — free for commercial use, no attribution required.
// https://unsplash.com/license

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export type TemplateImageSet = {
  hero: string;
  about: string;
  gallery: string[];
};

export const templateImages: Record<string, TemplateImageSet> = {
  "aura-classic-barber": {
    hero: u("1503951914875-452162b0f3f1", 1400),
    about: u("1585747860715-2ba37e788b70", 1200),
    gallery: [
      u("1599351431202-1e0f0137899a", 900),
      u("1521590832167-7bcbfaa6381f", 900),
      u("1622286342621-4bd786c2447c", 900),
      u("1593702288056-f173a3a2bb14", 900),
      u("1605497788044-5a32c7078486", 900),
      u("1620331311520-246422fd82f9", 900),
    ],
  },
  "black-tie-grooming": {
    hero: u("1622286342621-4bd786c2447c", 1400),
    about: u("1503951914875-452162b0f3f1", 1200),
    gallery: [
      u("1593702288056-f173a3a2bb14", 900),
      u("1605497788044-5a32c7078486", 900),
      u("1521590832167-7bcbfaa6381f", 900),
      u("1620331311520-246422fd82f9", 900),
      u("1585747860715-2ba37e788b70", 900),
      u("1599351431202-1e0f0137899a", 900),
    ],
  },
  "ink-fade-lab": {
    hero: u("1599351431202-1e0f0137899a", 1400),
    about: u("1620331311520-246422fd82f9", 1200),
    gallery: [
      u("1622286342621-4bd786c2447c", 900),
      u("1521590832167-7bcbfaa6381f", 900),
      u("1605497788044-5a32c7078486", 900),
      u("1593702288056-f173a3a2bb14", 900),
      u("1503951914875-452162b0f3f1", 900),
      u("1585747860715-2ba37e788b70", 900),
    ],
  },
  "green-comb-studio": {
    hero: u("1560066984-138dadb4c035", 1400),
    about: u("1522337360788-8b13dee7a37e", 1200),
    gallery: [
      u("1487412947147-5cebf100ffc2", 900),
      u("1559599101-f09722fb4948", 900),
      u("1522335789203-aaa0fe5db0e1", 900),
      u("1595163871543-c7e9b0b75d77", 900),
      u("1560066984-138dadb4c035", 900),
      u("1522337360788-8b13dee7a37e", 900),
    ],
  },
  "blush-room-beauty": {
    hero: u("1487412947147-5cebf100ffc2", 1400),
    about: u("1595163871543-c7e9b0b75d77", 1200),
    gallery: [
      u("1560066984-138dadb4c035", 900),
      u("1522335789203-aaa0fe5db0e1", 900),
      u("1559599101-f09722fb4948", 900),
      u("1595163871543-c7e9b0b75d77", 900),
      u("1522337360788-8b13dee7a37e", 900),
      u("1487412947147-5cebf100ffc2", 900),
    ],
  },
  "velvet-glow-lounge": {
    hero: u("1595163871543-c7e9b0b75d77", 1400),
    about: u("1487412947147-5cebf100ffc2", 1200),
    gallery: [
      u("1559599101-f09722fb4948", 900),
      u("1560066984-138dadb4c035", 900),
      u("1522337360788-8b13dee7a37e", 900),
      u("1522335789203-aaa0fe5db0e1", 900),
      u("1595163871543-c7e9b0b75d77", 900),
      u("1487412947147-5cebf100ffc2", 900),
    ],
  },
  "pure-skin-minimal": {
    hero: u("1570172619644-dfd03ed5d881", 1400),
    about: u("1581088384917-d5e8dde0a6a4", 1200),
    gallery: [
      u("1570172619644-dfd03ed5d881", 900),
      u("1581088384917-d5e8dde0a6a4", 900),
      u("1487412947147-5cebf100ffc2", 900),
      u("1522335789203-aaa0fe5db0e1", 900),
      u("1559599101-f09722fb4948", 900),
      u("1595163871543-c7e9b0b75d77", 900),
    ],
  },
  "chrome-nail-bar": {
    hero: u("1607779097040-26e80aa78e66", 1400),
    about: u("1604654894610-df63bc536371", 1200),
    gallery: [
      u("1604654894610-df63bc536371", 900),
      u("1607779097040-26e80aa78e66", 900),
      u("1632345031435-8727f6897d53", 900),
      u("1604654894610-df63bc536371", 900),
      u("1607779097040-26e80aa78e66", 900),
      u("1632345031435-8727f6897d53", 900),
    ],
  },
};

export function getTemplateImages(slug: string): TemplateImageSet {
  return templateImages[slug] ?? templateImages["aura-classic-barber"];
}
