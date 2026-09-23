import { create } from "zustand";
import { persist } from "zustand/middleware";
import { uid } from "@/lib/utils";
import { weekOf } from "./dates";
import { PILLARS } from "./pillars";
import { SUGGESTIONS } from "./playbook";
import type {
  CadenceWeek,
  CompanyStage,
  DecisionRecord,
  JournalEntry,
  Kpi,
  NinetyDay,
  Person,
  PillarId,
  Priority,
  Profile,
  RoleKind,
} from "./types";

export interface CeoState {
  profile: Profile;
  answers: Record<string, number>;
  pillarNotes: Partial<Record<PillarId, string>>;
  priorities: Priority[];
  decisions: DecisionRecord[];
  people: Person[];
  kpis: Kpi[];
  plan: NinetyDay;
  journals: JournalEntry[];
  cadence: CadenceWeek[];
  setProfile: (patch: Partial<Profile>) => void;
  completeOnboarding: () => void;
  setAnswer: (questionId: string, value: number) => void;
  setPillarNote: (id: PillarId, note: string) => void;
  addPriority: (p: Omit<Priority, "id">) => void;
  updatePriority: (id: string, patch: Partial<Priority>) => void;
  removePriority: (id: string) => void;
  addDecision: (d: Omit<DecisionRecord, "id">) => void;
  updateDecision: (id: string, patch: Partial<DecisionRecord>) => void;
  removeDecision: (id: string) => void;
  addPerson: (p: Omit<Person, "id">) => void;
  updatePerson: (id: string, patch: Partial<Person>) => void;
  removePerson: (id: string) => void;
  addKpi: (k: Omit<Kpi, "id">) => void;
  updateKpi: (id: string, patch: Partial<Kpi>) => void;
  removeKpi: (id: string) => void;
  setPlan: (patch: Partial<NinetyDay>) => void;
  toggleOutcome: (id: string) => void;
  toggleStop: (id: string) => void;
  addOutcome: (text: string) => void;
  addStop: (text: string) => void;
  upsertJournal: (entry: Omit<JournalEntry, "id"> & { id?: string }) => void;
  toggleCadence: (itemId: string) => void;
  loadDemo: () => void;
  resetAll: () => void;
}

const emptyProfile: Profile = {
  name: "",
  company: "",
  role: "founder-ceo",
  stage: "seed",
  onboarded: false,
};

const emptyPlan: NinetyDay = { theme: "", outcomes: [], stopDoing: [] };

function thisCadence(weeks: CadenceWeek[]): CadenceWeek[] {
  const key = weekOf();
  if (weeks.some((w) => w.weekOf === key)) return weeks;
  return [...weeks, { weekOf: key, checks: {} }];
}

export const useCeoStore = create<CeoState>()(
  persist(
    (set, get) => ({
      profile: emptyProfile,
      answers: {},
      pillarNotes: {},
      priorities: [],
      decisions: [],
      people: [],
      kpis: [],
      plan: emptyPlan,
      journals: [],
      cadence: [],
      setProfile: (patch) =>
        set({ profile: { ...get().profile, ...patch } }),
      completeOnboarding: () =>
        set({ profile: { ...get().profile, onboarded: true } }),
      setAnswer: (questionId, value) =>
        set({ answers: { ...get().answers, [questionId]: value } }),
      setPillarNote: (id, note) =>
        set({ pillarNotes: { ...get().pillarNotes, [id]: note } }),
      addPriority: (p) =>
        set({ priorities: [...get().priorities, { ...p, id: uid() }] }),
      updatePriority: (id, patch) =>
        set({
          priorities: get().priorities.map((x) => (x.id === id ? { ...x, ...patch } : x)),
        }),
      removePriority: (id) =>
        set({ priorities: get().priorities.filter((x) => x.id !== id) }),
      addDecision: (d) =>
        set({ decisions: [{ ...d, id: uid() }, ...get().decisions] }),
      updateDecision: (id, patch) =>
        set({
          decisions: get().decisions.map((x) => (x.id === id ? { ...x, ...patch } : x)),
        }),
      removeDecision: (id) =>
        set({ decisions: get().decisions.filter((x) => x.id !== id) }),
      addPerson: (p) => set({ people: [...get().people, { ...p, id: uid() }] }),
      updatePerson: (id, patch) =>
        set({
          people: get().people.map((x) => (x.id === id ? { ...x, ...patch } : x)),
        }),
      removePerson: (id) => set({ people: get().people.filter((x) => x.id !== id) }),
      addKpi: (k) => set({ kpis: [...get().kpis, { ...k, id: uid() }] }),
      updateKpi: (id, patch) =>
        set({ kpis: get().kpis.map((x) => (x.id === id ? { ...x, ...patch } : x)) }),
      removeKpi: (id) => set({ kpis: get().kpis.filter((x) => x.id !== id) }),
      setPlan: (patch) => set({ plan: { ...get().plan, ...patch } }),
      toggleOutcome: (id) =>
        set({
          plan: {
            ...get().plan,
            outcomes: get().plan.outcomes.map((o) =>
              o.id === id ? { ...o, done: !o.done } : o,
            ),
          },
        }),
      toggleStop: (id) =>
        set({
          plan: {
            ...get().plan,
            stopDoing: get().plan.stopDoing.map((o) =>
              o.id === id ? { ...o, done: !o.done } : o,
            ),
          },
        }),
      addOutcome: (text) =>
        set({
          plan: {
            ...get().plan,
            outcomes: [...get().plan.outcomes, { id: uid(), text, done: false }],
          },
        }),
      addStop: (text) =>
        set({
          plan: {
            ...get().plan,
            stopDoing: [...get().plan.stopDoing, { id: uid(), text, done: false }],
          },
        }),
      upsertJournal: (entry) => {
        const journals = get().journals;
        const existing = journals.find((j) => j.weekOf === entry.weekOf);
        if (existing) {
          set({
            journals: journals.map((j) =>
              j.weekOf === entry.weekOf ? { ...existing, ...entry, id: existing.id } : j,
            ),
          });
        } else {
          set({ journals: [{ ...entry, id: uid() }, ...journals] });
        }
      },
      toggleCadence: (itemId) => {
        const weeks = thisCadence(get().cadence);
        const key = weekOf();
        set({
          cadence: weeks.map((w) =>
            w.weekOf === key
              ? { ...w, checks: { ...w.checks, [itemId]: !w.checks[itemId] } }
              : w,
          ),
        });
      },
      loadDemo: () => {
        const demoAnswers: Record<string, number> = {};
        const seed: Record<PillarId, number[]> = {
          arah: [4, 3, 2, 3],
          orang: [3, 2, 4, 3],
          eksekusi: [2, 3, 3, 2],
          keputusan: [3, 2, 2, 4],
          modal: [4, 3, 4, 3],
          produk: [3, 4, 3, 3],
          budaya: [3, 2, 3, 4],
          diri: [2, 2, 3, 2],
        };
        for (const p of PILLARS) {
          p.questions.forEach((q, i) => {
            demoAnswers[q.id] = seed[p.id][i] ?? 3;
          });
        }
        set({
          answers: demoAnswers,
          priorities: [
            {
              id: uid(),
              title: "Product-market fit di segmen utama",
              why: "Tanpa retensi, pertumbuhan hanya kebocoran yang lebih cepat.",
              owner: "CEO + Kepala Produk",
              status: "at-risk",
              progress: 40,
            },
            {
              id: uid(),
              title: "Mesin perekrutan A-player",
              why: "Kursi kunci masih diisi orang yang 'cukup'.",
              owner: "CEO",
              status: "on-track",
              progress: 55,
            },
            {
              id: uid(),
              title: "Unit economics positif di kanal organik",
              why: "Paid tidak boleh menyembunyikan model yang belum jalan.",
              owner: "CFO",
              status: "on-track",
              progress: 62,
            },
          ],
          kpis: [
            { id: uid(), name: "Runway", current: 14, target: 18, unit: "bln", direction: "up" },
            { id: uid(), name: "NPS", current: 32, target: 45, unit: "", direction: "up" },
            { id: uid(), name: "Gross margin", current: 58, target: 65, unit: "%", direction: "up" },
            { id: uid(), name: "Burn", current: 1.8, target: 1.5, unit: "M", direction: "down" },
            { id: uid(), name: "Win rate", current: 22, target: 30, unit: "%", direction: "up" },
            { id: uid(), name: "eNPS", current: 18, target: 30, unit: "", direction: "up" },
          ],
          people: [
            {
              id: uid(),
              name: "Sari W.",
              role: "Kepala Produk",
              performance: 4,
              potential: 5,
              lastOneOnOne: weekOf(),
              notes: "Siap naik. Perlu eksposur board.",
              nextAction: "Libatkan di offsite kuartal ini.",
            },
            {
              id: uid(),
              name: "Bima P.",
              role: "Kepala Sales",
              performance: 2,
              potential: 3,
              lastOneOnOne: "",
              notes: "Pipeline vanity. Forecast tidak andal.",
              nextAction: "Scorecard 30 hari. Keputusan keep/move.",
            },
            {
              id: uid(),
              name: "Lina H.",
              role: "CFO",
              performance: 5,
              potential: 4,
              lastOneOnOne: weekOf(),
              notes: "Jangkar. Jangan kehilangan.",
              nextAction: "Diskusi jalur ke COO vs tetap CFO.",
            },
          ],
          plan: {
            theme: "Dari sibuk menjadi tajam",
            outcomes: SUGGESTIONS.eksekusi
              .concat(SUGGESTIONS.diri.slice(0, 2))
              .map((text) => ({ id: uid(), text, done: false })),
            stopDoing: [
              { id: uid(), text: "Hadir di semua rapat produk", done: false },
              { id: uid(), text: "Menjadi jalur eskalasi default", done: false },
            ],
          },
          decisions: [
            {
              id: uid(),
              title: "Tutup kanal paid yang payback-nya > 12 bulan",
              kind: "two-way",
              context: "CAC naik, retensi di kanal paid lebih rendah 18%.",
              options: "Cut 100% / cut 50% / pertahankan dengan creative baru",
              decision: "Cut 50% selama 6 minggu, ukur kohort.",
              owner: "CEO",
              date: weekOf(),
              reviewDate: "",
              status: "decided",
            },
          ],
        });
      },
      resetAll: () =>
        set({
          profile: emptyProfile,
          answers: {},
          pillarNotes: {},
          priorities: [],
          decisions: [],
          people: [],
          kpis: [],
          plan: emptyPlan,
          journals: [],
          cadence: [],
        }),
    }),
    { name: "produktif-app", skipHydration: true, version: 1 },
  ),
);

export function pillarScore(answers: Record<string, number>, id: PillarId) {
  const pillar = PILLARS.find((p) => p.id === id);
  if (!pillar) return 0;
  const vals = pillar.questions.map((q) => answers[q.id] ?? 0);
  if (vals.every((v) => v === 0)) return 0;
  const filled = vals.filter((v) => v > 0);
  return filled.reduce((a, b) => a + b, 0) / filled.length;
}

export function allScores(answers: Record<string, number>) {
  return PILLARS.map((p) => ({
    id: p.id,
    name: p.name,
    short: p.short,
    score: pillarScore(answers, p.id),
  }));
}

export function overallScore(answers: Record<string, number>) {
  const scores = allScores(answers).map((s) => s.score).filter((s) => s > 0);
  if (!scores.length) return 0;
  return scores.reduce((a, b) => a + b, 0) / scores.length;
}

export function weakestPillars(answers: Record<string, number>, n = 2) {
  return allScores(answers)
    .filter((s) => s.score > 0)
    .sort((a, b) => a.score - b.score)
    .slice(0, n);
}

export function diagnosticProgress(answers: Record<string, number>) {
  const total = PILLARS.reduce((n, p) => n + p.questions.length, 0);
  const filled = Object.values(answers).filter((v) => v > 0).length;
  return { filled, total, ratio: filled / total };
}

export function suggestPlanFromGaps(answers: Record<string, number>): NinetyDay {
  const weak = weakestPillars(answers, 3);
  const outcomes = weak.flatMap((w) =>
    (SUGGESTIONS[w.id] ?? []).slice(0, 2).map((text) => ({ id: uid(), text, done: false })),
  );
  const names = weak.map((w) => w.name).join(", ");
  return {
    theme: weak.length ? `Perkuat ${names}` : "Bangun fondasi delapan pilar",
    outcomes,
    stopDoing: [
      { id: uid(), text: "Pekerjaan yang nyaman tapi bukan pekerjaan CEO", done: false },
      { id: uid(), text: "Rapat tanpa keputusan", done: false },
    ],
  };
}

export const STAGE_LABEL: Record<CompanyStage, string> = {
  "pre-seed": "Baru mulai",
  seed: "Tahap awal",
  "series-a": "Berkembang",
  growth: "Tumbuh pesat",
  scale: "Skala besar",
  sme: "Bisnis mapan",
  enterprise: "Perusahaan besar",
};

export const ROLE_LABEL: Record<RoleKind, string> = {
  "founder-ceo": "Founder-CEO",
  "professional-ceo": "Pimpinan Profesional",
  gm: "Manajer Unit",
  aspiring: "Calon Pemimpin",
  coo: "Wakil Pimpinan Operasional",
};
