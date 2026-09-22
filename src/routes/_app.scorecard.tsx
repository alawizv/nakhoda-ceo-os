import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { EmptyState, Panel, SectionKicker } from "@/components/empty-state";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCeoStore } from "@/lib/ceo/store";
import type { Kpi, KpiDirection } from "@/lib/ceo/types";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/scorecard")({ component: Scorecard });

function health(k: Kpi) {
  if (k.target === 0) return 0;
  const ratio = k.direction === "up" ? k.current / k.target : k.target / Math.max(k.current, 0.0001);
  return ratio;
}

function Scorecard() {
  const kpis = useCeoStore((s) => s.kpis);
  const add = useCeoStore((s) => s.addKpi);
  const update = useCeoStore((s) => s.updateKpi);
  const remove = useCeoStore((s) => s.removeKpi);
  const [name, setName] = useState("");
  const [unit, setUnit] = useState("");
  const [target, setTarget] = useState("");
  const [current, setCurrent] = useState("");
  const [direction, setDirection] = useState<KpiDirection>("up");

  return (
    <div className="space-y-8">
      <header>
        <SectionKicker>Satu sumber kebenaran</SectionKicker>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">Scorecard</h1>
        <p className="mt-3 max-w-prose text-muted">
          5–9 angka yang jika hijau, perusahaan sehat. Jika setiap fungsi membawa dashboard-nya
          sendiri, rapat menjadi pengadilan. Pilih leading indicator, bukan vanity.
        </p>
      </header>

      <Panel>
        <h2 className="font-display text-2xl">Tambah metrik</h2>
        <form
          className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-6 lg:items-end"
          onSubmit={(e) => {
            e.preventDefault();
            if (!name.trim()) return;
            add({
              name,
              unit,
              current: Number(current) || 0,
              target: Number(target) || 0,
              direction,
            });
            setName("");
            setUnit("");
            setTarget("");
            setCurrent("");
          }}
        >
          <label className="lg:col-span-2">
            <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-subtle">Nama</span>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="NPS, runway, win rate" />
          </label>
          <label>
            <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-subtle">Saat ini</span>
            <Input inputMode="decimal" value={current} onChange={(e) => setCurrent(e.target.value)} />
          </label>
          <label>
            <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-subtle">Target</span>
            <Input inputMode="decimal" value={target} onChange={(e) => setTarget(e.target.value)} />
          </label>
          <label>
            <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-subtle">Satuan</span>
            <Input value={unit} onChange={(e) => setUnit(e.target.value)} placeholder="% / bln" />
          </label>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setDirection("up")}
              className={cn(
                "h-11 flex-1 rounded-md border text-xs",
                direction === "up" ? "border-forest bg-forest text-forest-fg" : "border-border",
              )}
            >
              Naik = baik
            </button>
            <button
              type="button"
              onClick={() => setDirection("down")}
              className={cn(
                "h-11 flex-1 rounded-md border text-xs",
                direction === "down" ? "border-forest bg-forest text-forest-fg" : "border-border",
              )}
            >
              Turun = baik
            </button>
          </div>
          <Button type="submit" className="lg:col-span-6 sm:col-span-2">
            Tambah ke papan
          </Button>
        </form>
      </Panel>

      {kpis.length === 0 ? (
        <EmptyState
          title="Papan masih kosong"
          body="Mulai dari kas/runway, satu metrik pelanggan, satu metrik orang, satu metrik unit economics."
        />
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {kpis.map((k) => (
            <KpiCard key={k.id} k={k} onUpdate={update} onRemove={remove} />
          ))}
        </div>
      )}
    </div>
  );
}

function KpiCard({
  k,
  onUpdate,
  onRemove,
}: {
  k: Kpi;
  onUpdate: (id: string, patch: Partial<Kpi>) => void;
  onRemove: (id: string) => void;
}) {
  const ratio = health(k);
  const tone = ratio >= 1 ? "success" : ratio >= 0.8 ? "warn" : "danger";
  return (
    <article className="rounded-xl border border-border bg-surface p-5 shadow-soft">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-sm font-medium">{k.name}</h3>
        <Badge tone={tone}>{ratio >= 1 ? "Hijau" : ratio >= 0.8 ? "Kuning" : "Merah"}</Badge>
      </div>
      <p className="mt-3 font-display text-4xl tabular-nums">
        {k.current}
        {k.unit ? <span className="ml-1 text-lg text-muted">{k.unit}</span> : null}
      </p>
      <p className="mt-1 text-xs text-subtle">
        Target {k.target}
        {k.unit} · {k.direction === "up" ? "semakin tinggi" : "semakin rendah"}
      </p>
      <label className="mt-4 block">
        <span className="mb-1 block text-xs text-subtle">Perbarui angka</span>
        <Input
          inputMode="decimal"
          defaultValue={String(k.current)}
          onBlur={(e) => onUpdate(k.id, { current: Number(e.target.value) || 0 })}
        />
      </label>
      <button type="button" className="mt-3 text-xs text-subtle hover:text-danger" onClick={() => onRemove(k.id)}>
        Hapus
      </button>
    </article>
  );
}
