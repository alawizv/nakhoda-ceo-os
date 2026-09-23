import { createFileRoute, Link } from "@tanstack/react-router";
import { Panel, SectionKicker } from "@/components/empty-state";
import { ANTI_PATTERNS, BOOKS, PRINCIPLES } from "@/lib/ceo/playbook";

export const Route = createFileRoute("/_app/playbook")({ component: Playbook });

function Playbook() {
  return (
    <div className="space-y-10">
      <header>
        <SectionKicker>Doktrin</SectionKicker>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">Tips & Strategi Bisnis</h1>
        <p className="mt-3 max-w-prose text-muted">
          Bukan afirmasi. Mekanisme. Jika satu prinsip bertentangan dengan kalender Anda, kalender
          yang salah — atau prinsip itu belum Anda yakini. Cara klik tiap ruang ada di{" "}
          <Link to="/panduan" className="text-forest underline-offset-2 hover:underline">
            Panduan
          </Link>
          .
        </p>
      </header>

      <ol className="grid gap-3 md:grid-cols-2">
        {PRINCIPLES.map((p) => (
          <li key={p.num} className="rounded-xl border border-border bg-surface p-5 shadow-soft">
            <p className="text-xs uppercase tracking-[0.16em] text-subtle">{p.num}</p>
            <h2 className="mt-2 font-display text-2xl">{p.title}</h2>
            <p className="mt-3 text-sm text-muted">{p.body}</p>
          </li>
        ))}
      </ol>

      <div>
        <SectionKicker>Yang merusak perusahaan pelan-pelan</SectionKicker>
        <h2 className="mt-2 font-display text-3xl">Anti-pola CEO</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {ANTI_PATTERNS.map((a) => (
            <Panel key={a.title}>
              <h3 className="font-medium">{a.title}</h3>
              <p className="mt-2 text-sm text-muted">{a.cost}</p>
            </Panel>
          ))}
        </div>
      </div>

      <div>
        <SectionKicker>Rak yang cukup</SectionKicker>
        <h2 className="mt-2 font-display text-3xl">Bacaan yang membentuk kerangka ini</h2>
        <p className="mt-2 max-w-prose text-sm text-muted">
          Grove, Rumelt, Horowitz, Mochary, Lencioni, Cagan. Produktif adalah sintesis operasional —
          bukan pengganti membaca sumbernya.
        </p>
        <ul className="mt-5 divide-y divide-border rounded-xl border border-border bg-surface">
          {BOOKS.map((b) => (
            <li key={b.title} className="grid gap-1 px-5 py-4 md:grid-cols-[14rem_10rem_1fr] md:gap-6">
              <p className="font-medium">{b.title}</p>
              <p className="text-sm text-subtle">{b.author}</p>
              <p className="text-sm text-muted">{b.why}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
