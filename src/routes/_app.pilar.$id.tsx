import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Panel, SectionKicker } from "@/components/empty-state";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/input";
import { PILLARS, pillarById, SCORE_LABELS } from "@/lib/ceo/pillars";
import { pillarScore, useCeoStore } from "@/lib/ceo/store";
import type { PillarId } from "@/lib/ceo/types";
import { PILLAR_IDS } from "@/lib/ceo/types";

export const Route = createFileRoute("/_app/pilar/$id")({
  component: PilarDetail,
  loader: ({ params }) => {
    if (!PILLAR_IDS.includes(params.id as PillarId)) throw notFound();
    return pillarById(params.id as PillarId);
  },
});

function PilarDetail() {
  const pillar = Route.useLoaderData();
  const answers = useCeoStore((s) => s.answers);
  const note = useCeoStore((s) => s.pillarNotes[pillar.id] ?? "");
  const setNote = useCeoStore((s) => s.setPillarNote);
  const score = pillarScore(answers, pillar.id);
  const idx = PILLARS.findIndex((p) => p.id === pillar.id);
  const prev = PILLARS[idx - 1];
  const next = PILLARS[idx + 1];

  return (
    <div className="space-y-8">
      <div>
        <Link to="/pilar" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink">
          <ArrowLeft className="size-4" /> Semua pilar
        </Link>
        <p className="mt-4 text-xs uppercase tracking-[0.16em] text-subtle">Pilar {pillar.roman}</p>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
          <h1 className="font-display text-4xl md:text-5xl">{pillar.name}</h1>
          <p className="text-sm text-muted">
            {score ? (
              <>
                <span className="font-display text-3xl tabular-nums text-forest">{score.toFixed(1)}</span>
                <span className="ml-2">{SCORE_LABELS[Math.round(score)]}</span>
              </>
            ) : (
              <Link to="/diagnostik" className="text-forest">
                Belum dinilai — buka diagnostik
              </Link>
            )}
          </p>
        </div>
        <p className="mt-4 max-w-prose text-muted">{pillar.why}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <SectionKicker>Pekerjaan CEO</SectionKicker>
          <p className="mt-3 text-base text-ink">{pillar.job}</p>
          <p className="mt-4 text-sm text-muted">{pillar.promise}</p>
        </Panel>
        <Panel className="bg-forest text-forest-fg">
          <SectionKicker>
            <span className="text-forest-fg/70">Gerakan minggu ini</span>
          </SectionKicker>
          <p className="mt-3 text-base">{pillar.weeklyMove}</p>
          <p className="mt-4 text-sm text-forest-fg/75">Langkah pertama: {pillar.firstMove}</p>
        </Panel>
      </div>

      <Panel>
        <SectionKicker>Ritme</SectionKicker>
        <ul className="mt-5 space-y-5">
          {pillar.practices.map((pr) => (
            <li key={pr.title} className="grid gap-1 md:grid-cols-[7rem_1fr] md:gap-6">
              <Badge className="h-fit w-fit capitalize">{pr.cadence}</Badge>
              <div>
                <p className="font-medium">{pr.title}</p>
                <p className="mt-1 text-sm text-muted">{pr.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </Panel>

      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <SectionKicker>Anti-pola</SectionKicker>
          <ul className="mt-4 space-y-3">
            {pillar.antipatterns.map((a) => (
              <li key={a} className="flex gap-3 text-sm">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-danger" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel>
          <SectionKicker>Tanyakan ke tim</SectionKicker>
          <ul className="mt-4 space-y-3">
            {pillar.teamQuestions.map((q) => (
              <li key={q} className="text-sm text-ink">
                {q}
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <Panel>
        <SectionKicker>Catatan pribadi</SectionKicker>
        <Textarea
          className="mt-3"
          value={note}
          onChange={(e) => setNote(pillar.id, e.target.value)}
          placeholder="Apa yang benar, apa yang Anda hindari, apa yang akan berubah 30 hari ke depan."
        />
      </Panel>

      <div className="flex justify-between text-sm">
        {prev ? (
          <Link to="/pilar/$id" params={{ id: prev.id }} className="text-muted hover:text-ink">
            <ArrowLeft className="mr-1 inline size-4" />
            {prev.roman}. {prev.name}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to="/pilar/$id" params={{ id: next.id }} className="text-muted hover:text-ink">
            {next.roman}. {next.name}
            <ArrowRight className="ml-1 inline size-4" />
          </Link>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}
