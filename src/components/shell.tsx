import { useEffect, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Activity,
  BookOpen,
  CalendarClock,
  CircleHelp,
  Compass,
  Flag,
  Gauge,
  Layers,
  Menu,
  Scale,
  ScrollText,
  Settings2,
  Target,
  Users,
  X,
} from "lucide-react";
import { Mark } from "@/components/mark";
import { Onboarding } from "@/components/onboarding";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ROLE_LABEL, STAGE_LABEL, useCeoStore } from "@/lib/ceo/store";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Kokpit", icon: Compass, group: "Operasi" },
  { to: "/ritme", label: "Ritme", icon: CalendarClock, group: "Operasi" },
  { to: "/prioritas", label: "Prioritas", icon: Target, group: "Operasi" },
  { to: "/scorecard", label: "Scorecard", icon: Gauge, group: "Operasi" },
  { to: "/rencana", label: "90 Hari", icon: Flag, group: "Operasi" },
  { to: "/pilar", label: "8 Pilar", icon: Layers, group: "Kepemimpinan" },
  { to: "/diagnostik", label: "Diagnostik", icon: Activity, group: "Kepemimpinan" },
  { to: "/keputusan", label: "Keputusan", icon: Scale, group: "Kepemimpinan" },
  { to: "/tim", label: "Tim", icon: Users, group: "Kepemimpinan" },
  { to: "/jurnal", label: "Jurnal", icon: BookOpen, group: "Refleksi" },
  { to: "/panduan", label: "Panduan", icon: CircleHelp, group: "Refleksi" },
  { to: "/playbook", label: "Playbook", icon: ScrollText, group: "Refleksi" },
] as const;

const MOBILE_PRIMARY = ["/", "/pilar", "/ritme", "/diagnostik"] as const;

export function Shell({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const onboarded = useCeoStore((s) => s.profile.onboarded);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    let cancelled = false;
    const finish = () => {
      if (!cancelled) setReady(true);
    };

    const persist = useCeoStore.persist;
    if (!persist) {
      finish();
      return;
    }

    const unsub = persist.onFinishHydration(finish);
    try {
      const result = persist.rehydrate();
      if (result && typeof (result as Promise<void>).then === "function") {
        void Promise.resolve(result).then(finish, finish);
      }
    } catch {
      finish();
    }
    if (persist.hasHydrated()) finish();
    const safety = window.setTimeout(finish, 400);

    return () => {
      cancelled = true;
      unsub();
      window.clearTimeout(safety);
    };
  }, []);

  useEffect(() => {
    setMoreOpen(false);
  }, [pathname]);

  if (!ready) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-bg text-muted">
        <div className="flex items-center gap-3">
          <Mark className="size-7" />
          <span className="text-sm tracking-wide">Nakhoda</span>
        </div>
      </div>
    );
  }

  if (!onboarded) return <Onboarding />;

  return (
    <div className="min-h-dvh bg-bg">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-56 flex-col border-r border-border bg-surface md:flex">
        <div className="flex items-center gap-2.5 px-5 py-6">
          <Mark className="size-8" />
          <div>
            <p className="font-display text-base leading-none">Nakhoda</p>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-subtle">CEO OS</p>
          </div>
        </div>
        <NavList pathname={pathname} />
        <div className="mt-auto border-t border-border p-3">
          <button
            type="button"
            onClick={() => setSettingsOpen(true)}
            className="flex h-11 w-full items-center gap-2 rounded-md px-3 text-sm text-muted hover:bg-surface-2 hover:text-ink"
          >
            <Settings2 className="size-4" />
            Profil & data
          </button>
        </div>
      </aside>

      <header className="sticky top-0 z-20 flex items-center justify-between border-b border-border bg-bg/90 px-4 py-3 backdrop-blur-sm md:hidden">
        <div className="flex items-center gap-2">
          <Mark className="size-7" />
          <span className="font-display text-base">Nakhoda</span>
        </div>
        <Button variant="ghost" size="icon" onClick={() => setSettingsOpen(true)} aria-label="Pengaturan">
          <Settings2 className="size-5" />
        </Button>
      </header>

      <main className="md:pl-56">
        <div className="mx-auto max-w-5xl px-4 pb-28 pt-6 md:px-8 md:pb-16 md:pt-10">{children}</div>
      </main>

      <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-surface/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-sm md:hidden">
        <ul className="grid grid-cols-5">
          {MOBILE_PRIMARY.map((to) => {
            const item = NAV.find((n) => n.to === to)!;
            const Icon = item.icon;
            const active = pathname === to || (to !== "/" && pathname.startsWith(to));
            return (
              <li key={to}>
                <Link
                  to={to}
                  className={cn(
                    "flex h-14 flex-col items-center justify-center gap-0.5 text-xs",
                    active ? "text-forest" : "text-muted",
                  )}
                >
                  <Icon className="size-5" />
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li>
            <button
              type="button"
              onClick={() => setMoreOpen(true)}
              className={cn(
                "flex h-14 w-full flex-col items-center justify-center gap-0.5 text-xs",
                moreOpen ? "text-forest" : "text-muted",
              )}
            >
              <Menu className="size-5" />
              Lainnya
            </button>
          </li>
        </ul>
      </nav>

      {moreOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-ink/30"
            aria-label="Tutup"
            onClick={() => setMoreOpen(false)}
          />
          <div className="absolute inset-x-0 bottom-0 rounded-t-xl border border-border bg-surface p-4 pb-8">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-medium">Semua ruang</p>
              <button type="button" onClick={() => setMoreOpen(false)} aria-label="Tutup">
                <X className="size-5 text-muted" />
              </button>
            </div>
            <NavList pathname={pathname} compact />
          </div>
        </div>
      )}

      {settingsOpen && <SettingsSheet onClose={() => setSettingsOpen(false)} />}
    </div>
  );
}

function NavList({ pathname, compact }: { pathname: string; compact?: boolean }) {
  let lastGroup = "";
  return (
    <nav className={cn("flex-1 overflow-y-auto px-3", compact && "max-h-[70vh]")}>
      <ul className="space-y-0.5">
        {NAV.map((item) => {
          const Icon = item.icon;
          const active =
            item.to === "/"
              ? pathname === "/"
              : pathname === item.to || pathname.startsWith(`${item.to}/`);
          const showGroup = item.group !== lastGroup;
          lastGroup = item.group;
          return (
            <li key={item.to}>
              {showGroup && (
                <p className="px-3 pb-1 pt-4 text-xs font-medium uppercase tracking-[0.16em] text-subtle">
                  {item.group}
                </p>
              )}
              <Link
                to={item.to}
                className={cn(
                  "flex h-10 items-center gap-2.5 rounded-md px-3 text-sm transition-colors duration-150",
                  active ? "bg-forest text-forest-fg" : "text-muted hover:bg-surface-2 hover:text-ink",
                )}
              >
                <Icon className="size-4" />
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function SettingsSheet({ onClose }: { onClose: () => void }) {
  const profile = useCeoStore((s) => s.profile);
  const setProfile = useCeoStore((s) => s.setProfile);
  const loadDemo = useCeoStore((s) => s.loadDemo);
  const resetAll = useCeoStore((s) => s.resetAll);

  return (
    <div className="fixed inset-0 z-50">
      <button type="button" className="absolute inset-0 bg-ink/35" aria-label="Tutup" onClick={onClose} />
      <div className="absolute inset-x-0 bottom-0 max-h-[90vh] overflow-y-auto rounded-t-xl border border-border bg-surface p-5 md:inset-auto md:right-6 md:top-6 md:bottom-auto md:w-[28rem] md:rounded-xl">
        <div className="mb-5 flex items-start justify-between">
          <div>
            <p className="font-display text-2xl">Profil</p>
            <p className="mt-1 text-sm text-muted">
              {ROLE_LABEL[profile.role]} · {STAGE_LABEL[profile.stage]}
            </p>
          </div>
          <button type="button" onClick={onClose} aria-label="Tutup">
            <X className="size-5 text-muted" />
          </button>
        </div>
        <div className="space-y-4">
          <label className="block">
            <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-subtle">Nama</span>
            <Input value={profile.name} onChange={(e) => setProfile({ name: e.target.value })} />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-subtle">Perusahaan</span>
            <Input value={profile.company} onChange={(e) => setProfile({ company: e.target.value })} />
          </label>
        </div>
        <div className="mt-8 flex flex-col gap-2">
          <Button asChild variant="outline">
            <Link to="/panduan" onClick={onClose}>
              Buka panduan
            </Link>
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              loadDemo();
              onClose();
            }}
          >
            Muat skenario contoh
          </Button>
          <Button
            variant="ghost"
            onClick={() => {
              if (confirm("Hapus semua data di perangkat ini?")) {
                resetAll();
                onClose();
              }
            }}
          >
            Reset sistem
          </Button>
        </div>
      </div>
    </div>
  );
}
