import { createFileRoute, Link } from "@tanstack/react-router";
import { Panel, SectionKicker } from "@/components/empty-state";
import { Radar } from "@/components/radar";
import { PILLARS } from "@/lib/ceo/pillars";
import { allScores, pillarScore, useCeoStore } from "@/lib/ceo/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/pilar/")({ component: PilarIndex });

function PilarIndex() {
  const answers = useCeoStore((s) => s.answers);
  const scores = allScores(answers);

  return (
    <div className="space-y-8">
      <header>
        <SectionKicker>Kerangka kerja</SectionKicker>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">Delapan Aspek Bisnis</h1>
        <p className="mt-3 max-w-prose text-muted">
          CEO yang hebat tidak menguasai seribu teknik. Ia menjaga delapan pekerjaan yang tidak
          boleh dibiarkan yatim. Setiap pilar punya pertanyaan, ritme, dan anti-pola.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Panel className="lg:sticky lg:top-10">
          <Radar scores={scores} />
        </Panel>
        <div className="grid gap-3 sm:grid-cols-2">
          {PILLARS.map((p) => {
            const score = pillarScore(answers, p.id);
            return (
              <Link
                key={p.id}
                to="/pilar/$id"
                params={{ id: p.id }}
                className="group rounded-xl border border-border bg-surface p-5 shadow-soft transition-colors duration-150 hover:border-forest"
              >
                <div className="flex items-baseline justify-between">
                  <span className="text-xs uppercase tracking-[0.16em] text-subtle">{p.roman}</span>
                  <span className={cn("tabular-nums text-sm", score ? "text-forest" : "text-subtle")}>
                    {score ? score.toFixed(1) : "—"}
                  </span>
                </div>
                <h2 className="mt-3 font-display text-2xl group-hover:text-forest">{p.name}</h2>
                <p className="mt-2 text-sm text-muted">{p.job}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
