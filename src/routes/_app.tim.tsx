import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { EmptyState, Panel, SectionKicker } from "@/components/empty-state";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { todayIso } from "@/lib/ceo/dates";
import { useCeoStore } from "@/lib/ceo/store";
import type { Person } from "@/lib/ceo/types";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/tim")({ component: Tim });

function Tim() {
  const people = useCeoStore((s) => s.people);
  const add = useCeoStore((s) => s.addPerson);
  const update = useCeoStore((s) => s.updatePerson);
  const remove = useCeoStore((s) => s.removePerson);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  return (
    <div className="space-y-8">
      <header>
        <SectionKicker>First team</SectionKicker>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">Kursi kunci</h1>
        <p className="mt-3 max-w-prose text-muted">
          Tim senior adalah produk pertama CEO. Plot kinerja × potensi. Hijau di kanan-atas adalah
          masa depan. Kiri-bawah yang dibiarkan adalah pajak pada semua orang lain.
        </p>
      </header>

      <Panel>
        <h2 className="font-display text-2xl">Tambah orang</h2>
        <form
          className="mt-4 flex flex-col gap-3 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            if (!name.trim()) return;
            add({
              name,
              role,
              performance: 3,
              potential: 3,
              lastOneOnOne: "",
              notes: "",
              nextAction: "",
            });
            setName("");
            setRole("");
          }}
        >
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama" />
          <Input value={role} onChange={(e) => setRole(e.target.value)} placeholder="Kursi / peran" />
          <Button type="submit">Tambah</Button>
        </form>
      </Panel>

      {people.length > 0 && <TalentGrid people={people} />}

      {people.length === 0 ? (
        <EmptyState
          title="Belum ada peta"
          body="Masukkan laporan langsung dan kursi kunci di bawah mereka. Lima sampai delapan nama sudah cukup untuk mulai."
        />
      ) : (
        <ul className="grid gap-3">
          {people.map((p) => (
            <PersonCard key={p.id} p={p} onUpdate={update} onRemove={remove} />
          ))}
        </ul>
      )}
    </div>
  );
}

function TalentGrid({ people }: { people: Person[] }) {
  return (
    <Panel>
      <SectionKicker>Kinerja × potensi</SectionKicker>
      <div className="relative mx-auto mt-4 aspect-square max-w-sm">
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-px bg-border">
          <div className="bg-surface-2/80 p-2 text-xs uppercase tracking-wider text-subtle">
            Kinerja rendah · potensi tinggi
          </div>
          <div className="bg-forest/10 p-2 text-right text-xs uppercase tracking-wider text-subtle">
            Bintang
          </div>
          <div className="bg-danger/8 p-2 text-xs uppercase tracking-wider text-subtle">
            Salah kursi
          </div>
          <div className="bg-surface p-2 text-right text-xs uppercase tracking-wider text-subtle">
            Andalan saat ini
          </div>
        </div>
        {people.map((p) => {
          const x = ((p.potential - 1) / 4) * 100;
          const y = (1 - (p.performance - 1) / 4) * 100;
          return (
            <span
              key={p.id}
              title={`${p.name} · K${p.performance} P${p.potential}`}
              className="absolute size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-forest"
              style={{ left: `${x}%`, top: `${y}%` }}
            />
          );
        })}
      </div>
      <p className="mt-3 text-center text-xs text-subtle">Kiri: potensi rendah · Bawah: kinerja rendah</p>
    </Panel>
  );
}

function PersonCard({
  p,
  onUpdate,
  onRemove,
}: {
  p: Person;
  onUpdate: (id: string, patch: Partial<Person>) => void;
  onRemove: (id: string) => void;
}) {
  return (
    <li className="rounded-xl border border-border bg-surface p-5 shadow-soft">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-medium">{p.name}</h3>
          <p className="text-sm text-muted">{p.role}</p>
        </div>
        <button
          type="button"
          className="text-xs text-subtle hover:text-forest"
          onClick={() => onUpdate(p.id, { lastOneOnOne: todayIso() })}
        >
          {p.lastOneOnOne ? `1:1 ${p.lastOneOnOne}` : "Tandai 1:1 hari ini"}
        </button>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <Scale label="Kinerja" value={p.performance} onChange={(n) => onUpdate(p.id, { performance: n })} />
        <Scale label="Potensi" value={p.potential} onChange={(n) => onUpdate(p.id, { potential: n })} />
      </div>
      <Textarea
        className="mt-3 min-h-20"
        value={p.notes}
        onChange={(e) => onUpdate(p.id, { notes: e.target.value })}
        placeholder="Catatan: keep / coach / move"
      />
      <Input
        className="mt-2"
        value={p.nextAction}
        onChange={(e) => onUpdate(p.id, { nextAction: e.target.value })}
        placeholder="Aksi berikutnya"
      />
      <button type="button" className="mt-3 text-xs text-subtle hover:text-danger" onClick={() => onRemove(p.id)}>
        Hapus
      </button>
    </li>
  );
}

function Scale({ label, value, onChange }: { label: string; value: number; onChange: (n: number) => void }) {
  return (
    <div>
      <p className="mb-1.5 text-xs uppercase tracking-[0.14em] text-subtle">
        {label} · {value}
      </p>
      <div className="grid grid-cols-5 gap-1">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => onChange(n)}
            className={cn(
              "h-9 rounded-sm text-xs tabular-nums",
              value === n ? "bg-forest text-forest-fg" : "bg-surface-2 text-muted",
            )}
          >
            {n}
          </button>
        ))}
      </div>
    </div>
  );
}
