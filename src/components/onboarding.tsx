import { useState } from "react";
import { Mark } from "@/components/mark";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ROLES, STAGES } from "@/lib/ceo/types";
import { useCeoStore } from "@/lib/ceo/store";
import { cn } from "@/lib/utils";

export function Onboarding() {
  const profile = useCeoStore((s) => s.profile);
  const setProfile = useCeoStore((s) => s.setProfile);
  const complete = useCeoStore((s) => s.completeOnboarding);
  const loadDemo = useCeoStore((s) => s.loadDemo);
  const [step, setStep] = useState(0);

  const canNext =
    step === 0 ||
    (step === 1 && profile.name.trim().length > 1 && profile.company.trim().length > 1) ||
    step === 2;

  return (
    <div className="relative min-h-dvh bg-bg">
      <div className="mx-auto flex min-h-dvh max-w-xl flex-col justify-center px-5 py-12">
        <div className="mb-10 flex items-center gap-3">
          <Mark />
          <div>
            <p className="font-display text-lg leading-none text-ink">Produktif</p>
            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-subtle">Sistem Produktif</p>
          </div>
        </div>

        {step === 0 && (
          <div className="animate-in">
            <h1 className="font-display text-4xl leading-tight text-ink md:text-5xl">
              Jabatan CEO bukan gelar. Itu sistem.
            </h1>
            <p className="mt-5 max-w-prose text-base text-muted">
              Produktif adalah kerangka kerja lengkap untuk mengelola bisnis: delapan aspek,
              jadwal rutin, kualitas keputusan, manajemen tim, dan disiplin diri. Bukan motivasi.
              Ini sistem.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-ink">
              {[
                "Evaluasi 32 pertanyaan di delapan aspek bisnis",
                "Jadwal harian, mingguan, bulanan, kuartalan",
                "Catatan keputusan, target utama, nilai bisnis, rencana 3 bulan",
                "Panduan lengkap ada di menu setelah Anda masuk",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-forest" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {step === 1 && (
          <div>
            <h1 className="font-display text-3xl text-ink md:text-4xl">Siapa yang memegang kemudi?</h1>
            <p className="mt-3 text-sm text-muted">Data tersimpan di perangkat Anda. Tidak ada akun.</p>
            <div className="mt-8 space-y-5">
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.14em] text-subtle">
                  Nama
                </span>
                <Input
                  value={profile.name}
                  onChange={(e) => setProfile({ name: e.target.value })}
                  placeholder="Nama Anda"
                  autoFocus
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.14em] text-subtle">
                  Perusahaan
                </span>
                <Input
                  value={profile.company}
                  onChange={(e) => setProfile({ company: e.target.value })}
                  placeholder="Nama perusahaan"
                />
              </label>
              <fieldset>
                <legend className="mb-2 text-xs font-medium uppercase tracking-[0.14em] text-subtle">
                  Peran
                </legend>
                <div className="flex flex-wrap gap-2">
                  {ROLES.map((r) => (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => setProfile({ role: r.id })}
                      className={cn(
                        "h-10 rounded-full border px-3 text-sm transition-colors duration-150",
                        profile.role === r.id
                          ? "border-forest bg-forest text-forest-fg"
                          : "border-border bg-surface text-muted hover:border-border-strong",
                      )}
                    >
                      {r.label}
                    </button>
                  ))}
                </div>
              </fieldset>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h1 className="font-display text-3xl text-ink md:text-4xl">Di tahap mana perusahaan Anda?</h1>
            <p className="mt-3 text-sm text-muted">
              Pilarnya sama. Tekanannya berbeda. Ini menajamkan briefing di kokpit.
            </p>
            <div className="mt-8 grid gap-2">
              {STAGES.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setProfile({ stage: s.id })}
                  className={cn(
                    "rounded-lg border px-4 py-3 text-left transition-colors duration-150",
                    profile.stage === s.id
                      ? "border-forest bg-forest/8"
                      : "border-border bg-surface hover:border-border-strong",
                  )}
                >
                  <p className="text-sm font-medium text-ink">{s.label}</p>
                  <p className="text-xs text-muted">{s.hint}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          {step > 0 && (
            <Button variant="ghost" onClick={() => setStep((s) => s - 1)}>
              Kembali
            </Button>
          )}
          <Button
            className="sm:ml-auto"
            disabled={!canNext}
            onClick={() => {
              if (step < 2) setStep((s) => s + 1);
              else complete();
            }}
          >
            {step === 0 ? "Masuk ke sistem" : step === 1 ? "Lanjut" : "Buka kokpit"}
          </Button>
        </div>

        {step === 0 && (
          <button
            type="button"
            className="mt-6 self-start text-sm text-muted underline-offset-4 hover:text-ink hover:underline"
            onClick={() => {
              setProfile({
                name: "Anda",
                company: "Perusahaan Contoh",
                role: "founder-ceo",
                stage: "series-a",
                onboarded: true,
              });
              loadDemo();
            }}
          >
            Jelajahi dengan data contoh
          </button>
        )}
      </div>
    </div>
  );
}
