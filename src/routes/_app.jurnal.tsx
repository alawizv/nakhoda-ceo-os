import { createFileRoute } from "@tanstack/react-router";
import { Panel, SectionKicker } from "@/components/empty-state";
import { Textarea } from "@/components/ui/input";
import { weekLabel, weekOf } from "@/lib/ceo/dates";
import { useCeoStore } from "@/lib/ceo/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/jurnal")({ component: Jurnal });

function Jurnal() {
  const journals = useCeoStore((s) => s.journals);
  const upsert = useCeoStore((s) => s.upsertJournal);
  const key = weekOf();
  const current = journals.find((j) => j.weekOf === key) ?? {
    weekOf: key,
    uniqueCeoWork: "",
    avoided: "",
    energy: 3,
    learn: "",
    nextWeek: "",
  };

  function patch<K extends keyof typeof current>(field: K, value: (typeof current)[K]) {
    upsert({ ...current, [field]: value });
  }

  const history = journals.filter((j) => j.weekOf !== key);

  return (
    <div className="space-y-8">
      <header>
        <SectionKicker>{weekLabel()}</SectionKicker>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">Tinjauan CEO</h1>
        <p className="mt-3 max-w-prose text-muted">
          Enam puluh menit, sekali seminggu. Menulis memaksa jernih. Tanpa ini, minggu berikutnya
          hanya pengulangan kebisingan minggu ini.
        </p>
      </header>

      <Panel>
        <Prompt
          label="Pekerjaan yang hanya CEO yang bisa"
          hint="Jika orang lain bisa mengerjakannya, mengapa Anda?"
          value={current.uniqueCeoWork}
          onChange={(v) => patch("uniqueCeoWork", v)}
        />
        <Prompt
          label="Percakapan atau keputusan yang saya hindari"
          hint="Yang ditunda biasanya yang paling mahal."
          value={current.avoided}
          onChange={(v) => patch("avoided", v)}
        />
        <div className="py-4">
          <p className="text-sm font-medium">Energi minggu ini</p>
          <p className="mt-1 text-xs text-subtle">1 kosong · 5 jernih dan cukup tidur</p>
          <div className="mt-3 grid grid-cols-5 gap-1.5">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => patch("energy", n)}
                className={cn(
                  "h-11 rounded-sm text-sm tabular-nums",
                  current.energy === n ? "bg-forest text-forest-fg" : "bg-surface-2 text-muted",
                )}
              >
                {n}
              </button>
            ))}
          </div>
        </div>
        <Prompt
          label="Yang saya pelajari tentang perusahaan atau diri"
          value={current.learn}
          onChange={(v) => patch("learn", v)}
        />
        <Prompt
          label="Taruhan minggu depan"
          hint="Satu atau dua. Bukan daftar belanja."
          value={current.nextWeek}
          onChange={(v) => patch("nextWeek", v)}
        />
        <p className="mt-4 text-xs text-subtle">Tersimpan otomatis di perangkat ini.</p>
      </Panel>

      {history.length > 0 && (
        <div>
          <h2 className="font-display text-2xl">Arsip</h2>
          <ul className="mt-4 space-y-3">
            {history.map((j) => (
              <li key={j.id} className="rounded-xl border border-border bg-surface p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-subtle">{j.weekOf}</p>
                {j.uniqueCeoWork && <p className="mt-2 text-sm">{j.uniqueCeoWork}</p>}
                {j.nextWeek && <p className="mt-1 text-sm text-muted">Lanjut: {j.nextWeek}</p>}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function Prompt({
  label,
  hint,
  value,
  onChange,
}: {
  label: string;
  hint?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="block border-b border-border py-4 last:border-0">
      <span className="text-sm font-medium">{label}</span>
      {hint && <span className="mt-1 block text-xs text-subtle">{hint}</span>}
      <Textarea className="mt-3" value={value} onChange={(e) => onChange(e.target.value)} />
    </label>
  );
}
