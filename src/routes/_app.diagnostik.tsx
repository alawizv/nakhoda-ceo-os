import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Radar } from "@/components/radar";
import { ScorePicker } from "@/components/score-picker";
import { Panel, SectionKicker } from "@/components/empty-state";
import { Button } from "@/components/ui/button";
import { PILLARS, SCORE_LABELS } from "@/lib/ceo/pillars";
import {
  allScores,
  diagnosticProgress,
  overallScore,
  pillarScore,
  suggestPlanFromGaps,
  useCeoStore,
} from "@/lib/ceo/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/diagnostik")({ component: Diagnostik });

function Diagnostik() {
  const answers = useCeoStore((s) => s.answers);
  const setAnswer = useCeoStore((s) => s.setAnswer);
  const setPlan = useCeoStore((s) => s.setPlan);
  const progress = diagnosticProgress(answers);
  const [step, setStep] = useState(() => {
    const firstIncomplete = PILLARS.findIndex((p) => p.questions.some((q) => !answers[q.id]));
    return firstIncomplete === -1 ? PILLARS.length : firstIncomplete;
  });

  const done = step >= PILLARS.length;
  const pillar = PILLARS[step];
  const scores = allScores(answers);
  const overall = overallScore(answers);

  const canAdvance = useMemo(() => {
    if (!pillar) return true;
    return pillar.questions.every((q) => (answers[q.id] ?? 0) > 0);
  }, [answers, pillar]);

  return (
    <div className="space-y-8">
      <header>
        <SectionKicker>Diagnostik 32 pertanyaan</SectionKicker>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">Seberapa utuh kemudi Anda?</h1>
        <p className="mt-3 max-w-prose text-sm text-muted">
          Nilai 1–5 dengan jujur. Inflasi skor hanya menipu Anda. Yang lemah itulah tempat kerja CEO.
        </p>
      </header>

      <div className="flex gap-1.5" aria-hidden>
        {PILLARS.map((p, i) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setStep(i)}
            className={cn(
              "h-1.5 flex-1 rounded-full transition-colors duration-150",
              i === step ? "bg-forest" : pillarScore(answers, p.id) > 0 ? "bg-forest/40" : "bg-border",
            )}
            aria-label={p.name}
          />
        ))}
      </div>

      {!done && pillar && (
        <Panel>
          <div className="flex items-baseline justify-between gap-3">
            <p className="text-xs uppercase tracking-[0.16em] text-subtle">
              Pilar {pillar.roman} · {step + 1} / 8
            </p>
            <p className="text-xs text-muted">{progress.filled} / {progress.total} terjawab</p>
          </div>
          <h2 className="mt-2 font-display text-3xl">{pillar.name}</h2>
          <p className="mt-2 max-w-prose text-sm text-muted">{pillar.job}</p>
          <ol className="mt-8 space-y-8">
            {pillar.questions.map((q, idx) => (
              <li key={q.id}>
                <p className="mb-3 text-sm font-medium text-ink">
                  <span className="mr-2 text-subtle tabular-nums">{idx + 1}.</span>
                  {q.text}
                </p>
                <ScorePicker value={answers[q.id] ?? 0} onChange={(n) => setAnswer(q.id, n)} />
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:justify-between">
            <Button variant="ghost" disabled={step === 0} onClick={() => setStep((s) => s - 1)}>
              Pilar sebelumnya
            </Button>
            <Button disabled={!canAdvance} onClick={() => setStep((s) => s + 1)}>
              {step === 7 ? "Lihat hasil" : "Pilar berikutnya"}
            </Button>
          </div>
        </Panel>
      )}

      {done && (
        <div className="grid gap-4 lg:grid-cols-[1fr_0.9fr]">
          <Panel>
            <SectionKicker>Hasil</SectionKicker>
            <h2 className="mt-1 font-display text-3xl">
              Kesiapan {overall.toFixed(1)}
              <span className="text-xl text-muted"> / 5</span>
            </h2>
            <p className="mt-2 text-sm text-muted">
              {overall >= 4
                ? "Fondasi kuat. Kerja Anda sekarang adalah menjaga ketajaman dan tidak lengah."
                : overall >= 3
                  ? "Cukup untuk berjalan, belum cukup untuk menskala tanpa gesekan. Perkuat yang paling lemah."
                  : "Sistem belum memegang perusahaan. 90 hari ke depan: bangun ritme sebelum menambah ambisi."}
            </p>
            <Radar scores={scores} />
            <ul className="mt-6 divide-y divide-border">
              {scores
                .slice()
                .sort((a, b) => a.score - b.score)
                .map((s) => (
                  <li key={s.id} className="flex items-center justify-between py-2.5 text-sm">
                    <Link to="/pilar/$id" params={{ id: s.id }} className="hover:text-forest">
                      {s.name}
                    </Link>
                    <span className="tabular-nums text-muted">
                      {s.score ? `${s.score.toFixed(1)} · ${SCORE_LABELS[Math.round(s.score)]}` : "—"}
                    </span>
                  </li>
                ))}
            </ul>
          </Panel>
          <Panel>
            <SectionKicker>Langkah berikutnya</SectionKicker>
            <h2 className="mt-1 font-display text-2xl">Susun 90 hari dari celah ini</h2>
            <p className="mt-2 text-sm text-muted">
              Rencana diisi otomatis dari tiga pilar terlemah. Anda bisa menyuntingnya nanti.
            </p>
            <Button
              className="mt-6"
              onClick={() => {
                const suggested = suggestPlanFromGaps(answers);
                setPlan(suggested);
              }}
            >
              Masukkan ke rencana 90 hari
            </Button>
            <Button asChild variant="outline" className="mt-2">
              <Link to="/rencana">Buka rencana</Link>
            </Button>
            <Button variant="ghost" className="mt-2" onClick={() => setStep(0)}>
              Ulangi dari pilar I
            </Button>
          </Panel>
        </div>
      )}
    </div>
  );
}
