import { createFileRoute } from "@tanstack/react-router";
import { Panel, SectionKicker } from "@/components/empty-state";
import { Badge } from "@/components/ui/badge";
import {
  DAILY_RITUALS,
  MEETING_TYPES,
  MONTHLY_RITUALS,
  QUARTERLY_RITUALS,
  WEEKLY_RITUALS,
  type CadenceItem,
} from "@/lib/ceo/cadence";
import { weekLabel, weekOf } from "@/lib/ceo/dates";
import { useCeoStore } from "@/lib/ceo/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/ritme")({ component: Ritme });

function Ritme() {
  const cadence = useCeoStore((s) => s.cadence);
  const toggle = useCeoStore((s) => s.toggleCadence);
  const checks = cadence.find((w) => w.weekOf === weekOf())?.checks ?? {};
  const done = WEEKLY_RITUALS.filter((r) => checks[r.id]).length;

  return (
    <div className="space-y-8">
      <header>
        <SectionKicker>{weekLabel()}</SectionKicker>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">Ritme nakhoda</h1>
        <p className="mt-3 max-w-prose text-muted">
          Perusahaan mewarisi kalender CEO-nya. Ritme ini adalah infrastruktur, bukan produktivitas
          pribadi. Tandai yang sudah terjadi minggu ini.
        </p>
      </header>

      <Panel>
        <div className="flex items-baseline justify-between">
          <h2 className="font-display text-2xl">Mingguan</h2>
          <p className="tabular-nums text-sm text-muted">
            {done} / {WEEKLY_RITUALS.length}
          </p>
        </div>
        <div className="mt-5 grid gap-2">
          {WEEKLY_RITUALS.map((item) => (
            <RitualRow key={item.id} item={item} checked={!!checks[item.id]} onToggle={() => toggle(item.id)} />
          ))}
        </div>
      </Panel>

      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h2 className="font-display text-2xl">Harian</h2>
          <ul className="mt-4 space-y-4">
            {DAILY_RITUALS.map((r) => (
              <li key={r.id}>
                <p className="text-sm font-medium">{r.title}</p>
                <p className="mt-1 text-sm text-muted">{r.detail}</p>
                <p className="mt-1 text-xs text-subtle">{r.duration}</p>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel>
          <h2 className="font-display text-2xl">Bulanan</h2>
          <ul className="mt-4 space-y-4">
            {MONTHLY_RITUALS.map((r) => (
              <li key={r.id}>
                <p className="text-sm font-medium">{r.title}</p>
                <p className="mt-1 text-sm text-muted">{r.detail}</p>
                <p className="mt-1 text-xs text-subtle">{r.duration}</p>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <Panel>
        <h2 className="font-display text-2xl">Kuartalan</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {QUARTERLY_RITUALS.map((r) => (
            <div key={r.id} className="rounded-lg bg-surface-2 p-4">
              <p className="font-medium">{r.title}</p>
              <p className="mt-1 text-sm text-muted">{r.detail}</p>
              <p className="mt-2 text-xs text-subtle">{r.duration}</p>
            </div>
          ))}
        </div>
      </Panel>

      <Panel>
        <SectionKicker>Sistem rapat</SectionKicker>
        <h2 className="mt-1 font-display text-2xl">Setiap rapat wajib punya pekerjaan</h2>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[36rem] text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs uppercase tracking-[0.12em] text-subtle">
                <th className="py-2 pr-4 font-medium">Jenis</th>
                <th className="py-2 pr-4 font-medium">Cadence</th>
                <th className="py-2 pr-4 font-medium">Tujuan</th>
                <th className="py-2 font-medium">Aturan</th>
              </tr>
            </thead>
            <tbody>
              {MEETING_TYPES.map((m) => (
                <tr key={m.name} className="border-b border-border align-top">
                  <td className="py-3 pr-4 font-medium">{m.name}</td>
                  <td className="py-3 pr-4 text-muted">{m.cadence}</td>
                  <td className="py-3 pr-4 text-muted">{m.purpose}</td>
                  <td className="py-3 text-muted">{m.rule}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    </div>
  );
}

function RitualRow({
  item,
  checked,
  onToggle,
}: {
  item: CadenceItem;
  checked: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={cn(
        "flex w-full items-start gap-3 rounded-lg border px-3 py-3 text-left transition-colors duration-150",
        checked ? "border-forest/30 bg-forest/8" : "border-border bg-bg hover:border-border-strong",
      )}
    >
      <span
        className={cn(
          "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-xs border",
          checked ? "border-forest bg-forest text-forest-fg" : "border-border-strong bg-surface",
        )}
      >
        {checked ? (
          <svg viewBox="0 0 12 12" className="size-3" aria-hidden>
            <path d="M2 6.2 L4.6 9 L10 3.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
          </svg>
        ) : null}
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-baseline justify-between gap-3">
          <span className="text-sm font-medium">{item.title}</span>
          <Badge>{item.duration}</Badge>
        </span>
        <span className="mt-1 block text-sm text-muted">{item.detail}</span>
      </span>
    </button>
  );
}
