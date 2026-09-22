import { t as cn } from "./_ssr/utils-CCMvQdln.mjs";
import { v as Link, z as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as Button } from "./_ssr/button-Dz_MmIGV.mjs";
import { t as PILLARS } from "./_ssr/pillars-My4NIVId.mjs";
import { a as longDate, d as useCeoStore, f as weakestPillars, i as diagnosticProgress, m as weekOf, n as STAGE_LABEL, o as overallScore, p as weekLabel, r as allScores, t as ROLE_LABEL } from "./_ssr/store-B0AaVZTc.mjs";
import { g as ArrowRight } from "./_libs/lucide-react.mjs";
import { t as Radar } from "./_ssr/radar-COwmmwz_.mjs";
import { n as Panel, r as SectionKicker } from "./_ssr/empty-state-VUEg7Anj.mjs";
import { t as Badge } from "./_ssr/badge-BJd_y5BG.mjs";
import { a as WEEKLY_RITUALS } from "./_ssr/cadence-Bpf6GlmA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.index-CWL0Co4d.js
var import_jsx_runtime = require_jsx_runtime();
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
	const firstName = profile.name.split(" ")[0] || "Nakhoda";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex flex-col gap-4 md:flex-row md:items-end md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionKicker, { children: [
						longDate(),
						" · ",
						weekLabel()
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-2 font-display text-4xl text-ink md:text-5xl",
						children: [
							"Briefing, ",
							firstName,
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted",
						children: [
							profile.company,
							" · ",
							ROLE_LABEL[profile.role],
							" · ",
							STAGE_LABEL[profile.stage],
							" · ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/panduan",
								className: "text-forest hover:underline",
								children: "Panduan"
							})
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-5xl tabular-nums text-forest",
						children: overall ? overall.toFixed(1) : "—"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-subtle",
						children: "/ 5 kesiapan"
					})]
				})]
			}),
			progress.filled === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "flex flex-col gap-4 md:flex-row md:items-center md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Mulai dari diagnosa, bukan dari kesibukan."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 max-w-prose text-sm text-muted",
					children: "32 pertanyaan, delapan pilar. Lima belas menit. Hasilnya menjadi peta 90 hari Anda."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/diagnostik",
							children: ["Buka diagnostik ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/panduan",
							children: "Baca panduan"
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Ritme minggu ini",
						value: `${ritualDone}/${WEEKLY_RITUALS.length}`,
						hint: "ritual",
						to: "/ritme"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Prioritas berisiko",
						value: String(atRisk.length),
						hint: `dari ${priorities.length || 0}`,
						to: "/prioritas",
						warn: atRisk.length > 0
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Keputusan terbuka",
						value: String(openDecisions.length),
						hint: "menunggu putusan",
						to: "/keputusan"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Rencana 90 hari",
						value: plan.outcomes.length ? `${planDone}/${plan.outcomes.length}` : "—",
						hint: plan.theme || "belum disusun",
						to: "/rencana"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-[1.1fr_0.9fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "Kompas delapan pilar" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 font-display text-2xl",
							children: "Posisi kemudi"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "ghost",
							size: "sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/pilar",
								children: "Semua pilar"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radar, { scores }),
					weak.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.14em] text-subtle",
							children: "Fokus pengembangan"
						}), weak.map((w) => {
							const p = PILLARS.find((x) => x.id === w.id);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/pilar/$id",
								params: { id: w.id },
								className: "flex items-center justify-between rounded-md bg-surface-2 px-3 py-2.5 text-sm hover:bg-border",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									p.roman,
									". ",
									p.name
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums text-muted",
									children: w.score.toFixed(1)
								})]
							}, w.id);
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "Gerakan minggu ini" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 font-display text-2xl",
							children: "Yang tidak boleh terlewat"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-2",
							children: WEEKLY_RITUALS.slice(0, 5).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("mt-1 size-2 shrink-0 rounded-full", checks[r.id] ? "bg-success" : "bg-border-strong") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: checks[r.id] ? "text-muted line-through" : "text-ink",
									children: r.title
								})]
							}, r.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							size: "sm",
							className: "mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/ritme",
								children: "Buka ritme"
							})
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "Sinyal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-3 space-y-3 text-sm",
						children: [
							overduePeople.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-ink",
									children: [overduePeople.length, " laporan belum 1:1"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/tim",
									className: "text-forest",
									children: "Tim"
								})]
							}),
							atRisk.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-ink",
									children: p.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: p.status === "off-track" ? "danger" : "warn",
									children: p.status === "off-track" ? "Off" : "Risiko"
								})]
							}, p.id)),
							openDecisions.slice(0, 3).map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-ink",
									children: d.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: d.kind === "one-way" ? "1 arah" : "2 arah" })]
							}, d.id)),
							!overduePeople.length && !atRisk.length && !openDecisions.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "text-muted",
								children: "Belum ada sinyal. Isi prioritas, tim, atau log keputusan."
							})
						]
					})] })]
				})]
			})
		]
	});
}
function Stat({ label, value, hint, to, warn }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: "rounded-xl border border-border bg-surface p-4 shadow-soft transition-colors duration-150 hover:border-border-strong",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.14em] text-subtle",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-2 font-display text-3xl tabular-nums", warn ? "text-warn" : "text-ink"),
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted",
				children: hint
			})
		]
	});
}
//#endregion
export { Cockpit as component };
