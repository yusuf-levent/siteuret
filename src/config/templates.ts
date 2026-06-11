import auraClassic from "@/templates/aura-classic-barber/business.json";
import blackTie from "@/templates/black-tie-grooming/business.json";
import inkFade from "@/templates/ink-fade-lab/business.json";
import greenComb from "@/templates/green-comb-studio/business.json";
import blushRoom from "@/templates/blush-room-beauty/business.json";
import velvetGlow from "@/templates/velvet-glow-lounge/business.json";
import pureSkin from "@/templates/pure-skin-minimal/business.json";
import chromeNail from "@/templates/chrome-nail-bar/business.json";

export type TemplateCategory = "Berber" | "Güzellik Salonu";

export type TemplateLayout =
  | "heritage-barber"
  | "editorial-grooming"
  | "tattoo-fade"
  | "eco-barber"
  | "pastel-beauty"
  | "velvet-luxury"
  | "clinical-minimal"
  | "y2k-beauty";

export type Service = {
  name: string;
  text: string;
  price: string;
  duration: string;
};

export type GalleryItem = {
  title: string;
  tone: string;
};

export type Review = {
  name: string;
  role: string;
  avatar: string;
  text: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  avatar: string;
};

export type TemplateDefinition = {
  slug: string;
  name: string;
  category: TemplateCategory;
  layout: TemplateLayout;
  brand: string;
  tagline: string;
  style: string;
  audience: string;
  description: string;
  heroTitle: string;
  heroText: string;
  phone: string;
  whatsapp: string;
  address: string;
  mapLabel: string;
  hours: string[];
  highlights: string[];
  aboutTitle: string;
  aboutText: string;
  services: Service[];
  packages: Array<{
    name: string;
    price: string;
    details: string;
  }>;
  gallery: GalleryItem[];
  reviews: Review[];
  team: TeamMember[];
  thumbnail: {
    title: string;
    note: string;
    palette: string[];
  };
  inspiration: string[];
};

export const templates: TemplateDefinition[] = [
  auraClassic,
  blackTie,
  inkFade,
  greenComb,
  blushRoom,
  velvetGlow,
  pureSkin,
  chromeNail,
] as TemplateDefinition[];

export const WHATSAPP_PHONE = "905XXXXXXXXX";

export function whatsappUrl(message: string, phone = WHATSAPP_PHONE) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function templateWhatsAppUrl(template: Pick<TemplateDefinition, "name" | "whatsapp">) {
  return whatsappUrl(
    `Merhaba, ${template.name} şablonunu işletmeme uyarlatmak için ücretsiz demo istiyorum.`,
    template.whatsapp,
  );
}

export function getTemplateBySlug(slug: string) {
  return templates.find((template) => template.slug === slug);
}
