import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Panel, SectionKicker } from "@/components/empty-state";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FIRST_90 } from "@/lib/ceo/playbook";
import { diagnosticProgress, suggestPlanFromGaps, useCeoStore } from "@/lib/ceo/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/rencana")({ component: Rencana });

function Rencana() {
  const plan = useCeoStore((s) => s.plan);
  const answers = useCeoStore((s) => s.answers);
  const setPlan = useCeoStore((s) => s.setPlan);
  const addOutcome = useCeoStore((s) => s.addOutcome);
  const addStop = useCeoStore((s) => s.addStop);
  const toggleOutcome = useCeoStore((s) => s.toggleOutcome);
  const toggleStop = useCeoStore((s) => s.toggleStop);
  const [draftOut, setDraftOut] = useState("");
  const [draftStop, setDraftStop] = useState("");
  const progress = diagnosticProgress(answers);
  const done = plan.outcomes.filter((o) => o.done).length;

  return (
    <div className="space-y-8">
      <header>
        <SectionKicker>Satu kuartal, bukan lima tahun</SectionKicker>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">Rencana 90 hari</h1>
        <p className="mt-3 max-w-prose text-muted">
          Tema yang tajam. Beberapa hasil yang bisa dibuktikan. Daftar yang harus berhenti. 90 hari
          cukup panjang untuk bergerak, cukup pendek untuk jujur.
        </p>
      </header>

      <Panel>
        <label>
          <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-subtle">Tema kuartal</span>
          <Input
            value={plan.theme}
            onChange={(e) => setPlan({ theme: e.target.value })}
            placeholder="Satu kalimat yang memaksa pilihan"
          />
        </label>
        {progress.filled > 8 && (
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => setPlan(suggestPlanFromGaps(answers))}
          >
            Isi dari hasil diagnostik
          </Button>
        )}
        {progress.filled <= 8 && (
          <p className="mt-3 text-sm text-muted">
            Selesaikan{" "}
            <Link to="/diagnostik" className="text-forest underline-offset-2 hover:underline">
              diagnostik
            </Link>{" "}
            agar rencana bisa diisi dari celah terlemah.
          </p>
        )}
      </Panel>

      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <div className="flex items-baseline justify-between">
            <h2 className="font-display text-2xl">Hasil yang harus benar</h2>
            <span className="text-xs tabular-nums text-subtle">
              {done}/{plan.outcomes.length}
            </span>
          </div>
          <ul className="mt-4 space-y-2">
            {plan.outcomes.map((o) => (
              <li key={o.id}>
                <button
                  type="button"
                  onClick={() => toggleOutcome(o.id)}
                  className="flex w-full items-start gap-3 rounded-md px-2 py-2 text-left hover:bg-surface-2"
                >
                  <Box checked={o.done} />
                  <span className={cn("text-sm", o.done && "text-muted line-through")}>{o.text}</span>
                </button>
              </li>
            ))}
          </ul>
          <form
            className="mt-4 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              if (!draftOut.trim()) return;
              addOutcome(draftOut.trim());
              setDraftOut("");
            }}
          >
            <Input value={draftOut} onChange={(e) => setDraftOut(e.target.value)} placeholder="Hasil baru" />
            <Button type="submit" variant="secondary">
              Tambah
            </Button>
          </form>
        </Panel>
        <Panel>
          <h2 className="font-display text-2xl">Berhenti melakukan</h2>
          <p className="mt-1 text-sm text-muted">Kapasitas CEO tercipta dari yang ditinggalkan.</p>
          <ul className="mt-4 space-y-2">
            {plan.stopDoing.map((o) => (
              <li key={o.id}>
                <button
                  type="button"
                  onClick={() => toggleStop(o.id)}
                  className="flex w-full items-start gap-3 rounded-md px-2 py-2 text-left hover:bg-surface-2"
                >
                  <Box checked={o.done} />
                  <span className={cn("text-sm", o.done && "text-muted line-through")}>{o.text}</span>
                </button>
              </li>
            ))}
          </ul>
          <form
            className="mt-4 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              if (!draftStop.trim()) return;
              addStop(draftStop.trim());
              setDraftStop("");
            }}
          >
            <Input value={draftStop} onChange={(e) => setDraftStop(e.target.value)} placeholder="Yang harus berhenti" />
            <Button type="submit" variant="secondary">
              Tambah
            </Button>
          </form>
        </Panel>
      </div>

      <div>
        <SectionKicker>Jika Anda CEO baru</SectionKicker>
        <h2 className="mt-2 font-display text-3xl">30 · 60 · 90</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {FIRST_90.map((ph) => (
            <Panel key={ph.phase}>
              <h3 className="font-display text-xl">{ph.phase}</h3>
              <ul className="mt-4 space-y-3">
                {ph.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-forest" />
                    {item}
                  </li>
                ))}
              </ul>
            </Panel>
          ))}
        </div>
      </div>
    </div>
  );
}

function Box({ checked }: { checked: boolean }) {
  return (
    <span
      className={cn(
        "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-xs border",
        checked ? "border-forest bg-forest text-forest-fg" : "border-border-strong",
      )}
    >
      {checked ? (
        <svg viewBox="0 0 12 12" className="size-3" aria-hidden>
          <path d="M2 6.2 L4.6 9 L10 3.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      ) : null}
    </span>
  );
}
