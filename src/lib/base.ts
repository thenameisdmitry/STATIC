// Astro не переписывает пути, записанные строкой в разметке: `base` применяется
// только к тому, что генерирует сам Astro. Файлы из public/ и внутренние ссылки
// нужно префиксовать вручную — иначе на /STATIC/ они уедут в корень домена.
const RAW = import.meta.env.BASE_URL; // "/STATIC/"
const BASE = RAW.endsWith('/') ? RAW.slice(0, -1) : RAW;

export function withBase(p: string): string;
export function withBase(p: undefined): undefined;
export function withBase(p?: string): string | undefined;
export function withBase(p?: string): string | undefined {
  if (!p) return p;
  // Внешние ссылки, якоря, mailto:, data: — трогать нельзя
  if (/^([a-z][a-z0-9+.-]*:|\/\/|#)/i.test(p)) return p;
  // Относительные пути оставляем как есть
  if (!p.startsWith('/')) return p;
  // Уже с префиксом — не добавляем второй раз
  if (BASE && (p === BASE || p.startsWith(BASE + '/'))) return p;
  return BASE + p;
}
