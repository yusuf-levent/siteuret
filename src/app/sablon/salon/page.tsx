import { BlushRoomPreview } from "@/templates/blush-room-beauty/preview";
import { getTemplateBySlug } from "@/config/templates";

export default function SalonPage() {
  const template = getTemplateBySlug("blush-room-beauty");

  if (!template) {
    return null;
  }

  return <BlushRoomPreview template={template} />;
}
