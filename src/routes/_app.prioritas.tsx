import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { EmptyState, Panel, SectionKicker } from "@/components/empty-state";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { useCeoStore } from "@/lib/ceo/store";
import type { Priority, PriorityStatus } from "@/lib/ceo/types";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/prioritas")({ component: Prioritas });

const STATUS: { id: PriorityStatus; label: string; tone: "success" | "warn" | "danger" | "neutral" }[] = [
  { id: "on-track", label: "On track", tone: "success" },
  { id: "at-risk", label: "Berisiko", tone: "warn" },
  { id: "off-track", label: "Off track", tone: "danger" },
  { id: "done", label: "Selesai", tone: "neutral" },
];

function Prioritas() {
  const priorities = useCeoStore((s) => s.priorities);
  const add = useCeoStore((s) => s.addPriority);
  const update = useCeoStore((s) => s.updatePriority);
  const remove = useCeoStore((s) => s.removePriority);
  const [title, setTitle] = useState("");
  const [why, setWhy] = useState("");
  const [owner, setOwner] = useState("");

  return (
    <div className="space-y-8">
      <header>
        <SectionKicker>Paling banyak lima</SectionKicker>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">Prioritas perusahaan</h1>
        <p className="mt-3 max-w-prose text-muted">
          Jika semuanya penting, tidak ada yang penting. Lima adalah batas. Enam berarti Anda belum
          memilih. Setiap prioritas: satu pemilik, satu alasan, satu status.
        </p>
      </header>

      {priorities.length >= 5 && (
        <Panel className="border-warn/30">
          <p className="text-sm">
            Batas lima tercapai. Untuk menambah, selesaikan atau parkir salah satu. Parkir adalah
            keputusan, bukan kegagalan.
          </p>
        </Panel>
      )}

      <Panel>
        <h2 className="font-display text-2xl">Tambah prioritas</h2>
        <form
          className="mt-4 grid gap-3 md:grid-cols-[1fr_1fr_auto] md:items-end"
          onSubmit={(e) => {
            e.preventDefault();
            if (!title.trim() || priorities.length >= 5) return;
            add({ title, why, owner, status: "on-track", progress: 0 });
            setTitle("");
            setWhy("");
            setOwner("");
          }}
        >
          <label className="md:col-span-2">
            <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-subtle">Hasil yang diinginkan</span>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Bukan aktivitas — hasil" />
          </label>
          <Button type="submit" disabled={priorities.length >= 5 || !title.trim()}>
            Tambah
          </Button>
          <label>
            <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-subtle">Pemilik</span>
            <Input value={owner} onChange={(e) => setOwner(e.target.value)} placeholder="Satu nama" />
          </label>
          <label className="md:col-span-2">
            <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-subtle">Mengapa ini, bukan yang lain</span>
            <Textarea className="min-h-20" value={why} onChange={(e) => setWhy(e.target.value)} />
          </label>
        </form>
      </Panel>

      {priorities.length === 0 ? (
        <EmptyState
          title="Belum ada pilihan"
          body="Tulis tiga hasil yang jika benar dalam 90 hari, kuartal ini dianggap menang."
        />
      ) : (
        <ol className="space-y-3">
          {priorities.map((p, i) => (
            <PriorityCard key={p.id} p={p} index={i + 1} onUpdate={update} onRemove={remove} />
          ))}
        </ol>
      )}
    </div>
  );
}

function PriorityCard({
  p,
  index,
  onUpdate,
  onRemove,
}: {
  p: Priority;
  index: number;
  onUpdate: (id: string, patch: Partial<Priority>) => void;
  onRemove: (id: string) => void;
}) {
  const tone = STATUS.find((s) => s.id === p.status)?.tone ?? "neutral";
  return (
    <li className="rounded-xl border border-border bg-surface p-5 shadow-soft">
      <div className="flex items-start justify-between gap-3">
        <div className="flex gap-3">
          <span className="font-display text-2xl text-subtle tabular-nums">{index}</span>
          <div>
            <h3 className="font-medium">{p.title}</h3>
            {p.why && <p className="mt-1 text-sm text-muted">{p.why}</p>}
            <p className="mt-2 text-xs text-subtle">{p.owner || "Pemilik belum diisi"}</p>
          </div>
        </div>
        <Badge tone={tone}>{STATUS.find((s) => s.id === p.status)?.label}</Badge>
      </div>
      <div className="mt-4">
        <div className="mb-1 flex justify-between text-xs text-subtle">
          <span>Kemajuan</span>
          <span className="tabular-nums">{p.progress}%</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-surface-2">
          <div
            className={cn("h-full rounded-full bg-forest transition-[width] duration-300")}
            style={{ width: `${p.progress}%` }}
          />
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={p.progress}
          onChange={(e) => onUpdate(p.id, { progress: Number(e.target.value) })}
          className="mt-2 w-full accent-forest"
        />
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {STATUS.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => onUpdate(p.id, { status: s.id })}
            className={cn(
              "h-8 rounded-full px-3 text-xs",
              p.status === s.id ? "bg-forest text-forest-fg" : "bg-surface-2 text-muted",
            )}
          >
            {s.label}
          </button>
        ))}
        <button type="button" className="ml-auto text-xs text-subtle hover:text-danger" onClick={() => onRemove(p.id)}>
          Hapus
        </button>
      </div>
    </li>
  );
}
