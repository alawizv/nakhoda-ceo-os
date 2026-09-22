import { format, startOfWeek, getISOWeek, getYear } from "date-fns";
import { id } from "date-fns/locale";

export function weekOf(d = new Date()) {
  return format(startOfWeek(d, { weekStartsOn: 1 }), "yyyy-MM-dd");
}

export function weekLabel(d = new Date()) {
  return `Minggu ${getISOWeek(d)} · ${getYear(d)}`;
}

export function longDate(d = new Date()) {
  return format(d, "EEEE, d MMMM yyyy", { locale: id });
}

export function shortDate(iso: string) {
  if (!iso) return "—";
  const date = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(date.getTime())) return iso;
  return format(date, "d MMM yyyy", { locale: id });
}

export function todayIso() {
  return format(new Date(), "yyyy-MM-dd");
}
