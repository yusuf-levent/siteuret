import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TemplatePreview } from "@/components/template-preview";
import { getTemplateBySlug, templates } from "@/config/templates";

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

  return <TemplatePreview template={template} />;
}
