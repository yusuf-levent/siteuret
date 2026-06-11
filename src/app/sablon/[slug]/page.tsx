import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AuraClassicPreview } from "@/templates/aura-classic-barber/preview";
import { BlackTiePreview } from "@/templates/black-tie-grooming/preview";
import { BlushRoomPreview } from "@/templates/blush-room-beauty/preview";
import { ChromeNailPreview } from "@/templates/chrome-nail-bar/preview";
import { GreenCombPreview } from "@/templates/green-comb-studio/preview";
import { InkFadePreview } from "@/templates/ink-fade-lab/preview";
import { PureSkinPreview } from "@/templates/pure-skin-minimal/preview";
import { VelvetGlowPreview } from "@/templates/velvet-glow-lounge/preview";
import { getTemplateBySlug, templates } from "@/config/templates";
import type { TemplateDefinition } from "@/config/templates";

const previewBySlug: Record<string, (props: { template: TemplateDefinition }) => React.ReactElement> = {
  "aura-classic-barber": AuraClassicPreview,
  "black-tie-grooming": BlackTiePreview,
  "ink-fade-lab": InkFadePreview,
  "green-comb-studio": GreenCombPreview,
  "blush-room-beauty": BlushRoomPreview,
  "velvet-glow-lounge": VelvetGlowPreview,
  "pure-skin-minimal": PureSkinPreview,
  "chrome-nail-bar": ChromeNailPreview,
};

export function generateStaticParams() {
  return templates.map((template) => ({
    slug: template.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);

  if (!template) {
    return {
      title: "Şablon bulunamadı | siteüret",
    };
  }

  return {
    title: `${template.name} canlı önizleme | siteüret`,
    description: template.description,
  };
}

export default async function TemplatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);

  if (!template) {
    notFound();
  }

  const Preview = previewBySlug[slug];
  if (!Preview) {
    notFound();
  }

  return <Preview template={template} />;
}
