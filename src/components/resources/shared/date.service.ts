import { format, type Locale } from "date-fns";
import { enUS, ptBR } from "date-fns/locale";

export function formatDate(date: string, currentLocale: string, formatting: string) {
  const locales: { [key: string]: Locale } = { "pt-br": ptBR, "en-us": enUS };
  const lowercaseCurrentLocale = currentLocale.toLowerCase();
  if (!lowercaseCurrentLocale || !locales[lowercaseCurrentLocale]) {
    throw new Error("Invalid locale");
  }

  const locale = locales[currentLocale.toLowerCase()] || enUS;
  return format(new Date(date), formatting, { locale });
}
