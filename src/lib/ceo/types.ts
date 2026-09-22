export const PILLAR_IDS = [
  "arah",
  "orang",
  "eksekusi",
  "keputusan",
  "modal",
  "produk",
  "budaya",
  "diri",
] as const;

export type PillarId = (typeof PILLAR_IDS)[number];

export type CompanyStage =
  | "pre-seed"
  | "seed"
  | "series-a"
  | "growth"
  | "scale"
  | "sme"
  | "enterprise";

export type RoleKind =
  | "founder-ceo"
  | "professional-ceo"
  | "gm"
  | "aspiring"
  | "coo";

export type PriorityStatus = "on-track" | "at-risk" | "off-track" | "done";
export type DecisionKind = "one-way" | "two-way";
export type DecisionStatus = "open" | "decided" | "reviewed";
export type KpiDirection = "up" | "down";

export interface Profile {
  name: string;
  company: string;
  role: RoleKind;
  stage: CompanyStage;
  onboarded: boolean;
}

export interface Question {
  id: string;
  text: string;
}

export interface Practice {
  cadence: "harian" | "mingguan" | "bulanan" | "kuartalan";
  title: string;
  detail: string;
}

export interface Pillar {
  id: PillarId;
  roman: string;
  name: string;
  short: string;
  job: string;
  why: string;
  promise: string;
  questions: Question[];
  practices: Practice[];
  antipatterns: string[];
  teamQuestions: string[];
  weeklyMove: string;
  firstMove: string;
}

export interface Priority {
  id: string;
  title: string;
  why: string;
  owner: string;
  status: PriorityStatus;
  progress: number;
}

export interface DecisionRecord {
  id: string;
  title: string;
  kind: DecisionKind;
  context: string;
  options: string;
  decision: string;
  owner: string;
  date: string;
  reviewDate: string;
  status: DecisionStatus;
}

export interface Person {
  id: string;
  name: string;
  role: string;
  performance: number;
  potential: number;
  lastOneOnOne: string;
  notes: string;
  nextAction: string;
}

export interface Kpi {
  id: string;
  name: string;
  current: number;
  target: number;
  unit: string;
  direction: KpiDirection;
}

export interface Outcome {
  id: string;
  text: string;
  done: boolean;
}

export interface NinetyDay {
  theme: string;
  outcomes: Outcome[];
  stopDoing: Outcome[];
}

export interface JournalEntry {
  id: string;
  weekOf: string;
  uniqueCeoWork: string;
  avoided: string;
  energy: number;
  learn: string;
  nextWeek: string;
}

export interface CadenceWeek {
  weekOf: string;
  checks: Record<string, boolean>;
}

export const STAGES: { id: CompanyStage; label: string; hint: string }[] = [
  { id: "pre-seed", label: "Pra-seed", hint: "Mencari product-market fit" },
  { id: "seed", label: "Seed", hint: "Validasi, tim awal, runway ketat" },
  { id: "series-a", label: "Series A", hint: "Mesin pertumbuhan pertama" },
  { id: "growth", label: "Growth", hint: "Skalakan apa yang sudah jalan" },
  { id: "scale", label: "Scale-up", hint: "Sistem, lapisan kepemimpinan" },
  { id: "sme", label: "Bisnis mapan", hint: "UKM / perusahaan keluarga" },
  { id: "enterprise", label: "Enterprise", hint: "Organisasi kompleks, banyak pemangku kepentingan" },
];

export const ROLES: { id: RoleKind; label: string }[] = [
  { id: "founder-ceo", label: "Founder-CEO" },
  { id: "professional-ceo", label: "CEO profesional" },
  { id: "gm", label: "GM / Kepala unit" },
  { id: "coo", label: "COO yang menyiapkan diri" },
  { id: "aspiring", label: "Calon CEO" },
];
