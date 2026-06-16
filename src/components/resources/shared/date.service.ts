import { format, parseISO, type Locale } from "date-fns";
import { enUS, ptBR } from "date-fns/locale";

function getCalendarDate(date: string | Date) {
  return (date instanceof Date ? date.toISOString() : date).slice(0, 10);
}

export function formatDate(
  date: string | Date,
  currentLocale: string,
  formatting: string,
) {
  const locales: { [key: string]: Locale } = {
    "pt-br": ptBR,
    "en-us": enUS,
    en: enUS,
  };
  const lowercaseCurrentLocale = currentLocale.toLowerCase();
  if (!lowercaseCurrentLocale || !locales[lowercaseCurrentLocale]) {
    throw new Error("Invalid locale" + lowercaseCurrentLocale);
  }

  const locale = locales[currentLocale.toLowerCase()] || enUS;
  return format(parseISO(getCalendarDate(date)), formatting, { locale });
}
