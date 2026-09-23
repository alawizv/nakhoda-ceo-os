import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { EmptyState, Panel, SectionKicker } from "@/components/empty-state";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { RAPID } from "@/lib/ceo/playbook";
import { shortDate, todayIso } from "@/lib/ceo/dates";
import { useCeoStore } from "@/lib/ceo/store";
import type { DecisionKind, DecisionRecord, DecisionStatus } from "@/lib/ceo/types";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/keputusan")({ component: Keputusan });

const emptyForm = {
  title: "",
  kind: "two-way" as DecisionKind,
  context: "",
  options: "",
  decision: "",
  owner: "",
  date: todayIso(),
  reviewDate: "",
  status: "open" as DecisionStatus,
};

function Keputusan() {
  const decisions = useCeoStore((s) => s.decisions);
  const add = useCeoStore((s) => s.addDecision);
  const update = useCeoStore((s) => s.updateDecision);
  const remove = useCeoStore((s) => s.removeDecision);
  const [form, setForm] = useState(emptyForm);
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-8">
      <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <SectionKicker>Kualitas keputusan</SectionKicker>
          <h1 className="mt-2 font-display text-4xl md:text-5xl">Keputusan Besar dan Kecil</h1>
          <p className="mt-3 max-w-prose text-muted">
            Keputusan kecil: cepat, bisa dicoba dulu, kalau salah bisa diubah. Keputusan besar:
            lambat, pikirkan matang-matang, tulis alasannya supaya tidak diulang terus.
          </p>
        </div>
        <Button onClick={() => setOpen(true)}>Catat keputusan baru</Button>
      </header>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
        {RAPID.map((r) => (
          <Panel key={r.letter} className="p-4 md:p-4">
            <p className="font-display text-2xl text-forest">{r.letter}</p>
            <p className="mt-1 text-sm font-medium">{r.name}</p>
            <p className="mt-2 text-xs text-muted">{r.mean}</p>
          </Panel>
        ))}
      </div>

      {open && (
        <Panel>
          <h2 className="font-display text-2xl">Keputusan baru</h2>
          <form
            className="mt-4 grid gap-4 md:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              if (!form.title.trim()) return;
              add(form);
              setForm({ ...emptyForm, date: todayIso() });
              setOpen(false);
            }}
          >
            <label className="md:col-span-2">
              <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-subtle">Judul</span>
              <Input
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="Apa yang harus diputuskan?"
                required
              />
            </label>
            <fieldset>
              <legend className="mb-1.5 text-xs uppercase tracking-[0.14em] text-subtle">Jenis</legend>
              <div className="flex gap-2">
                {(["two-way", "one-way"] as const).map((k) => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => setForm({ ...form, kind: k })}
                    className={cn(
                      "h-11 flex-1 rounded-md border text-sm",
                      form.kind === k ? "border-forest bg-forest text-forest-fg" : "border-border",
                    )}
                  >
                    {k === "one-way" ? "Besar (sulit diubah)" : "Kecil (bisa dicoba)"}
                  </button>
                ))}
              </div>
            </fieldset>
            <label>
              <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-subtle">Pemilik</span>
              <Input value={form.owner} onChange={(e) => setForm({ ...form, owner: e.target.value })} />
            </label>
            <label className="md:col-span-2">
              <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-subtle">Konteks</span>
              <Textarea
                value={form.context}
                onChange={(e) => setForm({ ...form, context: e.target.value })}
                placeholder="Fakta, bukan opini. Apa yang terjadi jika kita tidak memutuskan?"
              />
            </label>
            <label>
              <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-subtle">Opsi</span>
              <Textarea
                value={form.options}
                onChange={(e) => setForm({ ...form, options: e.target.value })}
              />
            </label>
            <label>
              <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-subtle">Putusan</span>
              <Textarea
                value={form.decision}
                onChange={(e) => setForm({ ...form, decision: e.target.value })}
              />
            </label>
            <div className="flex gap-2 md:col-span-2">
              <Button type="submit">Simpan</Button>
              <Button type="button" variant="ghost" onClick={() => setOpen(false)}>
                Batal
              </Button>
            </div>
          </form>
        </Panel>
      )}

      {decisions.length === 0 && !open ? (
        <EmptyState
          title="Log masih kosong"
          body="Keputusan yang tidak ditulis akan diulang terus. Mulai dari yang tertahan di meja Anda."
          action={<Button onClick={() => setOpen(true)}>Catat yang pertama</Button>}
        />
      ) : (
        <ul className="space-y-3">
          {decisions.map((d) => (
            <DecisionCard key={d.id} d={d} onUpdate={update} onRemove={remove} />
          ))}
        </ul>
      )}
    </div>
  );
}

function DecisionCard({
  d,
  onUpdate,
  onRemove,
}: {
  d: DecisionRecord;
  onUpdate: (id: string, patch: Partial<DecisionRecord>) => void;
  onRemove: (id: string) => void;
}) {
  return (
    <li className="rounded-xl border border-border bg-surface p-5 shadow-soft">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-medium">{d.title}</h3>
          <p className="mt-1 text-xs text-subtle">
            {shortDate(d.date)} · {d.owner || "Pemilik belum diisi"}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge tone={d.kind === "one-way" ? "warn" : "neutral"}>
            {d.kind === "one-way" ? "Besar" : "Kecil"}
          </Badge>
          <select
            className="h-8 rounded-sm border border-border bg-surface px-2 text-xs"
            value={d.status}
            onChange={(e) => onUpdate(d.id, { status: e.target.value as DecisionStatus })}
          >
            <option value="open">Terbuka</option>
            <option value="decided">Diputuskan</option>
            <option value="reviewed">Ditinjau</option>
          </select>
        </div>
      </div>
      {d.context && <p className="mt-3 text-sm text-muted">{d.context}</p>}
      {d.options && (
        <p className="mt-2 text-sm">
          <span className="text-subtle">Opsi · </span>
          {d.options}
        </p>
      )}
      {d.decision && (
        <p className="mt-2 text-sm">
          <span className="text-subtle">Putusan · </span>
          {d.decision}
        </p>
      )}
      <button
        type="button"
        className="mt-3 text-xs text-subtle hover:text-danger"
        onClick={() => onRemove(d.id)}
      >
        Hapus
      </button>
    </li>
  );
}
