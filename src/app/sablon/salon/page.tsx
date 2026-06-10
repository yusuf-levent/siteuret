import { TemplatePreview } from "@/components/template-preview";
import { getTemplateBySlug } from "@/config/templates";

export default function SalonPage() {
  const template = getTemplateBySlug("soft-beauty-studio");

  if (!template) {
    return null;
  }

  return <TemplatePreview template={template} />;
}
