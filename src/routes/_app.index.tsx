import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Radar } from "@/components/radar";
import { Panel, SectionKicker } from "@/components/empty-state";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WEEKLY_RITUALS } from "@/lib/ceo/cadence";
import { longDate, weekLabel, weekOf } from "@/lib/ceo/dates";
import { PILLARS } from "@/lib/ceo/pillars";
import {
  allScores,
  diagnosticProgress,
  overallScore,
  ROLE_LABEL,
  STAGE_LABEL,
  useCeoStore,
  weakestPillars,
} from "@/lib/ceo/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/")({ component: Cockpit });

function Cockpit() {
  const profile = useCeoStore((s) => s.profile);
  const answers = useCeoStore((s) => s.answers);
  const priorities = useCeoStore((s) => s.priorities);
  const decisions = useCeoStore((s) => s.decisions);
  const people = useCeoStore((s) => s.people);
  const cadence = useCeoStore((s) => s.cadence);
  const plan = useCeoStore((s) => s.plan);
  const scores = allScores(answers);
  const overall = overallScore(answers);
  const progress = diagnosticProgress(answers);
  const weak = weakestPillars(answers, 2);
  const weekKey = weekOf();
  const checks = cadence.find((w) => w.weekOf === weekKey)?.checks ?? {};
  const ritualDone = WEEKLY_RITUALS.filter((r) => checks[r.id]).length;
  const openDecisions = decisions.filter((d) => d.status === "open");
  const atRisk = priorities.filter((p) => p.status === "at-risk" || p.status === "off-track");
  const overduePeople = people.filter((p) => !p.lastOneOnOne);
  const planDone = plan.outcomes.filter((o) => o.done).length;

  const firstName = profile.name.split(" ")[0] || "Bos";

  return (
    <div className="space-y-8">
      <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <SectionKicker>
          {longDate()} · {weekLabel()}
          </SectionKicker>
          <h1 className="mt-2 font-display text-4xl text-ink md:text-5xl">
          Halo, {firstName}.
          </h1>
          <p className="mt-2 text-sm text-muted">
          {profile.company} · {ROLE_LABEL[profile.role]} · {STAGE_LABEL[profile.stage]}
          {" · "}
          <Link to="/panduan" className="text-forest hover:underline">
            Lihat panduan
          </Link>
          </p>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="font-display text-5xl tabular-nums text-forest">
            {overall ? overall.toFixed(1) : "—"}
          </span>
          <span className="text-sm text-subtle">/ 5 kesiapan</span>
        </div>
      </header>

      {progress.filled === 0 && (
        <Panel className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-display text-2xl">Mulai dari evaluasi, bukan dari kesibukan.</h2>
          <p className="mt-1 max-w-prose text-sm text-muted">
            32 pertanyaan, delapan aspek. Lima belas menit. Hasilnya menjadi peta 3 bulan Anda.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button asChild>
            <Link to="/diagnostik">
              Mulai evaluasi <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/panduan">Baca panduan</Link>
          </Button>
        </div>
        </Panel>
      )}

      <div className="grid gap-4 md:grid-cols-4">
        <Stat label="Jadwal minggu ini" value={`${ritualDone}/${WEEKLY_RITUALS.length}`} hint="tugas rutin" to="/ritme" />
        <Stat
          label="Target berisiko"
          value={String(atRisk.length)}
          hint={`dari ${priorities.length || 0}`}
          to="/prioritas"
          warn={atRisk.length > 0}
        />
        <Stat
          label="Keputusan tertunda"
          value={String(openDecisions.length)}
          hint="menunggu putusan"
          to="/keputusan"
        />
        <Stat
          label="Rencana 3 bulan"
          value={plan.outcomes.length ? `${planDone}/${plan.outcomes.length}` : "—"}
          hint={plan.theme || "belum disusun"}
          to="/rencana"
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <Panel>
          <div className="flex items-start justify-between gap-3">
            <div>
              <SectionKicker>Penilaian delapan aspek</SectionKicker>
              <h2 className="mt-1 font-display text-2xl">Posisi Bisnis Anda</h2>
            </div>
            <Button asChild variant="ghost" size="sm">
              <Link to="/pilar">Semua pilar</Link>
            </Button>
          </div>
          <Radar scores={scores} />
          {weak.length > 0 && (
            <div className="mt-2 space-y-2">
              <p className="text-xs uppercase tracking-[0.14em] text-subtle">Perlu diperbaiki</p>
              {weak.map((w) => {
                const p = PILLARS.find((x) => x.id === w.id)!;
                return (
                  <Link
                    key={w.id}
                    to="/pilar/$id"
                    params={{ id: w.id }}
                    className="flex items-center justify-between rounded-md bg-surface-2 px-3 py-2.5 text-sm hover:bg-border"
                  >
                    <span>
                      {p.roman}. {p.name}
                    </span>
                    <span className="tabular-nums text-muted">{w.score.toFixed(1)}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </Panel>

        <div className="space-y-4">
          <Panel>
            <SectionKicker>Tugas minggu ini</SectionKicker>
            <h2 className="mt-1 font-display text-2xl">Yang harus dikerjakan</h2>
            <ul className="mt-4 space-y-2">
              {WEEKLY_RITUALS.slice(0, 5).map((r) => (
                <li key={r.id} className="flex items-start gap-3 text-sm">
                  <span
                    className={cn(
                      "mt-1 size-2 shrink-0 rounded-full",
                      checks[r.id] ? "bg-success" : "bg-border-strong",
                    )}
                  />
                  <span className={checks[r.id] ? "text-muted line-through" : "text-ink"}>
                    {r.title}
                  </span>
                </li>
              ))}
            </ul>
            <Button asChild variant="outline" size="sm" className="mt-4">
              <Link to="/ritme">Lihat jadwal</Link>
            </Button>
          </Panel>

          <Panel>
            <SectionKicker>Catatan Penting</SectionKicker>
            <ul className="mt-3 space-y-3 text-sm">
              {overduePeople.length > 0 && (
                <li className="flex justify-between gap-3">
                  <span className="text-ink">{overduePeople.length} anggota tim belum ditinjau</span>
                  <Link to="/tim" className="text-forest">
                    Anggota Tim
                  </Link>
                </li>
              )}
              {atRisk.map((p) => (
                <li key={p.id} className="flex justify-between gap-3">
                  <span className="text-ink">{p.title}</span>
                  <Badge tone={p.status === "off-track" ? "danger" : "warn"}>
                    {p.status === "off-track" ? "Off" : "Risiko"}
                  </Badge>
                </li>
              ))}
              {openDecisions.slice(0, 3).map((d) => (
                <li key={d.id} className="flex justify-between gap-3">
                  <span className="text-ink">{d.title}</span>
                  <Badge>{d.kind === "one-way" ? "1 arah" : "2 arah"}</Badge>
                </li>
              ))}
              {!overduePeople.length && !atRisk.length && !openDecisions.length && (
                <li className="text-muted">
                  Belum ada catatan. Isi target utama, anggota tim, atau catatan keputusan.
                </li>
              )}
            </ul>
          </Panel>
        </div>
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  hint,
  to,
  warn,
}: {
  label: string;
  value: string;
  hint: string;
  to: string;
  warn?: boolean;
}) {
  return (
    <Link
      to={to}
      className="rounded-xl border border-border bg-surface p-4 shadow-soft transition-colors duration-150 hover:border-border-strong"
    >
      <p className="text-xs uppercase tracking-[0.14em] text-subtle">{label}</p>
      <p className={cn("mt-2 font-display text-3xl tabular-nums", warn ? "text-warn" : "text-ink")}>
        {value}
      </p>
      <p className="mt-1 text-xs text-muted">{hint}</p>
    </Link>
  );
}
