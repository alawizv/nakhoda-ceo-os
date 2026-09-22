import { n as uid } from "./utils-CCMvQdln.mjs";
import { t as PILLARS } from "./pillars-My4NIVId.mjs";
import { o as SUGGESTIONS } from "./playbook-BqD7Euoo.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { a as startOfWeek, i as getISOWeek, n as getYear, r as format, t as id } from "../_libs/date-fns.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/store-B0AaVZTc.js
function weekOf(d = /* @__PURE__ */ new Date()) {
	return format(startOfWeek(d, { weekStartsOn: 1 }), "yyyy-MM-dd");
}
function weekLabel(d = /* @__PURE__ */ new Date()) {
	return `Minggu ${getISOWeek(d)} · ${getYear(d)}`;
}
function longDate(d = /* @__PURE__ */ new Date()) {
	return format(d, "EEEE, d MMMM yyyy", { locale: id });
}
function shortDate(iso) {
	if (!iso) return "—";
	const date = /* @__PURE__ */ new Date(`${iso}T00:00:00`);
	if (Number.isNaN(date.getTime())) return iso;
	return format(date, "d MMM yyyy", { locale: id });
}
function todayIso() {
	return format(/* @__PURE__ */ new Date(), "yyyy-MM-dd");
}
var emptyProfile = {
	name: "",
	company: "",
	role: "founder-ceo",
	stage: "seed",
	onboarded: false
};
var emptyPlan = {
	theme: "",
	outcomes: [],
	stopDoing: []
};
function thisCadence(weeks) {
	const key = weekOf();
	if (weeks.some((w) => w.weekOf === key)) return weeks;
	return [...weeks, {
		weekOf: key,
		checks: {}
	}];
}
var useCeoStore = create()(persist((set, get) => ({
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
	setProfile: (patch) => set({ profile: {
		...get().profile,
		...patch
	} }),
	completeOnboarding: () => set({ profile: {
		...get().profile,
		onboarded: true
	} }),
	setAnswer: (questionId, value) => set({ answers: {
		...get().answers,
		[questionId]: value
	} }),
	setPillarNote: (id, note) => set({ pillarNotes: {
		...get().pillarNotes,
		[id]: note
	} }),
	addPriority: (p) => set({ priorities: [...get().priorities, {
		...p,
		id: uid()
	}] }),
	updatePriority: (id, patch) => set({ priorities: get().priorities.map((x) => x.id === id ? {
		...x,
		...patch
	} : x) }),
	removePriority: (id) => set({ priorities: get().priorities.filter((x) => x.id !== id) }),
	addDecision: (d) => set({ decisions: [{
		...d,
		id: uid()
	}, ...get().decisions] }),
	updateDecision: (id, patch) => set({ decisions: get().decisions.map((x) => x.id === id ? {
		...x,
		...patch
	} : x) }),
	removeDecision: (id) => set({ decisions: get().decisions.filter((x) => x.id !== id) }),
	addPerson: (p) => set({ people: [...get().people, {
		...p,
		id: uid()
	}] }),
	updatePerson: (id, patch) => set({ people: get().people.map((x) => x.id === id ? {
		...x,
		...patch
	} : x) }),
	removePerson: (id) => set({ people: get().people.filter((x) => x.id !== id) }),
	addKpi: (k) => set({ kpis: [...get().kpis, {
		...k,
		id: uid()
	}] }),
	updateKpi: (id, patch) => set({ kpis: get().kpis.map((x) => x.id === id ? {
		...x,
		...patch
	} : x) }),
	removeKpi: (id) => set({ kpis: get().kpis.filter((x) => x.id !== id) }),
	setPlan: (patch) => set({ plan: {
		...get().plan,
		...patch
	} }),
	toggleOutcome: (id) => set({ plan: {
		...get().plan,
		outcomes: get().plan.outcomes.map((o) => o.id === id ? {
			...o,
			done: !o.done
		} : o)
	} }),
	toggleStop: (id) => set({ plan: {
		...get().plan,
		stopDoing: get().plan.stopDoing.map((o) => o.id === id ? {
			...o,
			done: !o.done
		} : o)
	} }),
	addOutcome: (text) => set({ plan: {
		...get().plan,
		outcomes: [...get().plan.outcomes, {
			id: uid(),
			text,
			done: false
		}]
	} }),
	addStop: (text) => set({ plan: {
		...get().plan,
		stopDoing: [...get().plan.stopDoing, {
			id: uid(),
			text,
			done: false
		}]
	} }),
	upsertJournal: (entry) => {
		const journals = get().journals;
		const existing = journals.find((j) => j.weekOf === entry.weekOf);
		if (existing) set({ journals: journals.map((j) => j.weekOf === entry.weekOf ? {
			...existing,
			...entry,
			id: existing.id
		} : j) });
		else set({ journals: [{
			...entry,
			id: uid()
		}, ...journals] });
	},
	toggleCadence: (itemId) => {
		const weeks = thisCadence(get().cadence);
		const key = weekOf();
		set({ cadence: weeks.map((w) => w.weekOf === key ? {
			...w,
			checks: {
				...w.checks,
				[itemId]: !w.checks[itemId]
			}
		} : w) });
	},
	loadDemo: () => {
		const demoAnswers = {};
		const seed = {
			arah: [
				4,
				3,
				2,
				3
			],
			orang: [
				3,
				2,
				4,
				3
			],
			eksekusi: [
				2,
				3,
				3,
				2
			],
			keputusan: [
				3,
				2,
				2,
				4
			],
			modal: [
				4,
				3,
				4,
				3
			],
			produk: [
				3,
				4,
				3,
				3
			],
			budaya: [
				3,
				2,
				3,
				4
			],
			diri: [
				2,
				2,
				3,
				2
			]
		};
		for (const p of PILLARS) p.questions.forEach((q, i) => {
			demoAnswers[q.id] = seed[p.id][i] ?? 3;
		});
		set({
			answers: demoAnswers,
			priorities: [
				{
					id: uid(),
					title: "Product-market fit di segmen utama",
					why: "Tanpa retensi, pertumbuhan hanya kebocoran yang lebih cepat.",
					owner: "CEO + Kepala Produk",
					status: "at-risk",
					progress: 40
				},
				{
					id: uid(),
					title: "Mesin perekrutan A-player",
					why: "Kursi kunci masih diisi orang yang 'cukup'.",
					owner: "CEO",
					status: "on-track",
					progress: 55
				},
				{
					id: uid(),
					title: "Unit economics positif di kanal organik",
					why: "Paid tidak boleh menyembunyikan model yang belum jalan.",
					owner: "CFO",
					status: "on-track",
					progress: 62
				}
			],
			kpis: [
				{
					id: uid(),
					name: "Runway",
					current: 14,
					target: 18,
					unit: "bln",
					direction: "up"
				},
				{
					id: uid(),
					name: "NPS",
					current: 32,
					target: 45,
					unit: "",
					direction: "up"
				},
				{
					id: uid(),
					name: "Gross margin",
					current: 58,
					target: 65,
					unit: "%",
					direction: "up"
				},
				{
					id: uid(),
					name: "Burn",
					current: 1.8,
					target: 1.5,
					unit: "M",
					direction: "down"
				},
				{
					id: uid(),
					name: "Win rate",
					current: 22,
					target: 30,
					unit: "%",
					direction: "up"
				},
				{
					id: uid(),
					name: "eNPS",
					current: 18,
					target: 30,
					unit: "",
					direction: "up"
				}
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
					nextAction: "Libatkan di offsite kuartal ini."
				},
				{
					id: uid(),
					name: "Bima P.",
					role: "Kepala Sales",
					performance: 2,
					potential: 3,
					lastOneOnOne: "",
					notes: "Pipeline vanity. Forecast tidak andal.",
					nextAction: "Scorecard 30 hari. Keputusan keep/move."
				},
				{
					id: uid(),
					name: "Lina H.",
					role: "CFO",
					performance: 5,
					potential: 4,
					lastOneOnOne: weekOf(),
					notes: "Jangkar. Jangan kehilangan.",
					nextAction: "Diskusi jalur ke COO vs tetap CFO."
				}
			],
			plan: {
				theme: "Dari sibuk menjadi tajam",
				outcomes: SUGGESTIONS.eksekusi.concat(SUGGESTIONS.diri.slice(0, 2)).map((text) => ({
					id: uid(),
					text,
					done: false
				})),
				stopDoing: [{
					id: uid(),
					text: "Hadir di semua rapat produk",
					done: false
				}, {
					id: uid(),
					text: "Menjadi jalur eskalasi default",
					done: false
				}]
			},
			decisions: [{
				id: uid(),
				title: "Tutup kanal paid yang payback-nya > 12 bulan",
				kind: "two-way",
				context: "CAC naik, retensi di kanal paid lebih rendah 18%.",
				options: "Cut 100% / cut 50% / pertahankan dengan creative baru",
				decision: "Cut 50% selama 6 minggu, ukur kohort.",
				owner: "CEO",
				date: weekOf(),
				reviewDate: "",
				status: "decided"
			}]
		});
	},
	resetAll: () => set({
		profile: emptyProfile,
		answers: {},
		pillarNotes: {},
		priorities: [],
		decisions: [],
		people: [],
		kpis: [],
		plan: emptyPlan,
		journals: [],
		cadence: []
	})
}), {
	name: "nakhoda-ceo-os",
	skipHydration: true,
	version: 1
}));
function pillarScore(answers, id) {
	const pillar = PILLARS.find((p) => p.id === id);
	if (!pillar) return 0;
	const vals = pillar.questions.map((q) => answers[q.id] ?? 0);
	if (vals.every((v) => v === 0)) return 0;
	const filled = vals.filter((v) => v > 0);
	return filled.reduce((a, b) => a + b, 0) / filled.length;
}
function allScores(answers) {
	return PILLARS.map((p) => ({
		id: p.id,
		name: p.name,
		short: p.short,
		score: pillarScore(answers, p.id)
	}));
}
function overallScore(answers) {
	const scores = allScores(answers).map((s) => s.score).filter((s) => s > 0);
	if (!scores.length) return 0;
	return scores.reduce((a, b) => a + b, 0) / scores.length;
}
function weakestPillars(answers, n = 2) {
	return allScores(answers).filter((s) => s.score > 0).sort((a, b) => a.score - b.score).slice(0, n);
}
function diagnosticProgress(answers) {
	const total = PILLARS.reduce((n, p) => n + p.questions.length, 0);
	const filled = Object.values(answers).filter((v) => v > 0).length;
	return {
		filled,
		total,
		ratio: filled / total
	};
}
function suggestPlanFromGaps(answers) {
	const weak = weakestPillars(answers, 3);
	const outcomes = weak.flatMap((w) => (SUGGESTIONS[w.id] ?? []).slice(0, 2).map((text) => ({
		id: uid(),
		text,
		done: false
	})));
	const names = weak.map((w) => w.name).join(", ");
	return {
		theme: weak.length ? `Perkuat ${names}` : "Bangun fondasi delapan pilar",
		outcomes,
		stopDoing: [{
			id: uid(),
			text: "Pekerjaan yang nyaman tapi bukan pekerjaan CEO",
			done: false
		}, {
			id: uid(),
			text: "Rapat tanpa keputusan",
			done: false
		}]
	};
}
var STAGE_LABEL = {
	"pre-seed": "Pra-seed",
	seed: "Seed",
	"series-a": "Series A",
	growth: "Growth",
	scale: "Scale-up",
	sme: "Bisnis mapan",
	enterprise: "Enterprise"
};
var ROLE_LABEL = {
	"founder-ceo": "Founder-CEO",
	"professional-ceo": "CEO profesional",
	gm: "GM / Kepala unit",
	aspiring: "Calon CEO",
	coo: "COO"
};
//#endregion
export { longDate as a, shortDate as c, useCeoStore as d, weakestPillars as f, diagnosticProgress as i, suggestPlanFromGaps as l, weekOf as m, STAGE_LABEL as n, overallScore as o, weekLabel as p, allScores as r, pillarScore as s, ROLE_LABEL as t, todayIso as u };
