import { buildLocalBusinessSchema } from "@/lib/schema";
import type { Locale } from "@/lib/i18n/config";

type LocalBusinessSchemaProps = {
  locale: Locale;
};

export default function LocalBusinessSchema({ locale }: LocalBusinessSchemaProps) {
  const schema = buildLocalBusinessSchema(locale);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
