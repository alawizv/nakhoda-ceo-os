import { i as __toESM } from "./_runtime.mjs";
import { t as cn } from "./_ssr/utils-CCMvQdln.mjs";
import { n as require_react } from "./_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as Link, z as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as Button } from "./_ssr/button-Dz_MmIGV.mjs";
import { n as SCORE_LABELS, t as PILLARS } from "./_ssr/pillars-My4NIVId.mjs";
import { d as useCeoStore, i as diagnosticProgress, l as suggestPlanFromGaps, o as overallScore, r as allScores, s as pillarScore } from "./_ssr/store-B0AaVZTc.mjs";
import { t as Radar } from "./_ssr/radar-COwmmwz_.mjs";
import { n as Panel, r as SectionKicker } from "./_ssr/empty-state-VUEg7Anj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.diagnostik-NfVwDenI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ScorePicker({ value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-5 gap-1.5",
			children: [
				1,
				2,
				3,
				4,
				5
			].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => onChange(n),
				className: cn("h-11 rounded-sm text-sm font-medium tabular-nums transition-[background-color,color,transform] duration-150", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40", value === n ? "bg-forest text-forest-fg" : "bg-surface-2 text-muted hover:bg-border hover:text-ink"),
				"aria-pressed": value === n,
				"aria-label": SCORE_LABELS[n],
				children: n
			}, n))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-subtle",
			children: value ? SCORE_LABELS[value] : "Belum dinilai"
		})]
	});
}
function Diagnostik() {
	const answers = useCeoStore((s) => s.answers);
	const setAnswer = useCeoStore((s) => s.setAnswer);
	const setPlan = useCeoStore((s) => s.setPlan);
	const progress = diagnosticProgress(answers);
	const [step, setStep] = (0, import_react.useState)(() => {
		const firstIncomplete = PILLARS.findIndex((p) => p.questions.some((q) => !answers[q.id]));
		return firstIncomplete === -1 ? PILLARS.length : firstIncomplete;
	});
	const done = step >= PILLARS.length;
	const pillar = PILLARS[step];
	const scores = allScores(answers);
	const overall = overallScore(answers);
	const canAdvance = (0, import_react.useMemo)(() => {
		if (!pillar) return true;
		return pillar.questions.every((q) => (answers[q.id] ?? 0) > 0);
	}, [answers, pillar]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "Diagnostik 32 pertanyaan" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-4xl md:text-5xl",
					children: "Seberapa utuh kemudi Anda?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-prose text-sm text-muted",
					children: "Nilai 1–5 dengan jujur. Inflasi skor hanya menipu Anda. Yang lemah itulah tempat kerja CEO."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-1.5",
				"aria-hidden": true,
				children: PILLARS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setStep(i),
					className: cn("h-1.5 flex-1 rounded-full transition-colors duration-150", i === step ? "bg-forest" : pillarScore(answers, p.id) > 0 ? "bg-forest/40" : "bg-border"),
					"aria-label": p.name
				}, p.id))
			}),
			!done && pillar && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs uppercase tracking-[0.16em] text-subtle",
						children: [
							"Pilar ",
							pillar.roman,
							" · ",
							step + 1,
							" / 8"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted",
						children: [
							progress.filled,
							" / ",
							progress.total,
							" terjawab"
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl",
					children: pillar.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-prose text-sm text-muted",
					children: pillar.job
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-8 space-y-8",
					children: pillar.questions.map((q, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-3 text-sm font-medium text-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mr-2 text-subtle tabular-nums",
							children: [idx + 1, "."]
						}), q.text]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScorePicker, {
						value: answers[q.id] ?? 0,
						onChange: (n) => setAnswer(q.id, n)
					})] }, q.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-2 sm:flex-row sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						disabled: step === 0,
						onClick: () => setStep((s) => s - 1),
						children: "Pilar sebelumnya"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						disabled: !canAdvance,
						onClick: () => setStep((s) => s + 1),
						children: step === 7 ? "Lihat hasil" : "Pilar berikutnya"
					})]
				})
			] }),
			done && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-[1fr_0.9fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "Hasil" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-1 font-display text-3xl",
						children: [
							"Kesiapan ",
							overall.toFixed(1),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xl text-muted",
								children: " / 5"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: overall >= 4 ? "Fondasi kuat. Kerja Anda sekarang adalah menjaga ketajaman dan tidak lengah." : overall >= 3 ? "Cukup untuk berjalan, belum cukup untuk menskala tanpa gesekan. Perkuat yang paling lemah." : "Sistem belum memegang perusahaan. 90 hari ke depan: bangun ritme sebelum menambah ambisi."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radar, { scores }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 divide-y divide-border",
						children: scores.slice().sort((a, b) => a.score - b.score).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center justify-between py-2.5 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/pilar/$id",
								params: { id: s.id },
								className: "hover:text-forest",
								children: s.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums text-muted",
								children: s.score ? `${s.score.toFixed(1)} · ${SCORE_LABELS[Math.round(s.score)]}` : "—"
							})]
						}, s.id))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "Langkah berikutnya" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-2xl",
						children: "Susun 90 hari dari celah ini"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Rencana diisi otomatis dari tiga pilar terlemah. Anda bisa menyuntingnya nanti."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-6",
						onClick: () => {
							const suggested = suggestPlanFromGaps(answers);
							setPlan(suggested);
						},
						children: "Masukkan ke rencana 90 hari"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						className: "mt-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/rencana",
							children: "Buka rencana"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						className: "mt-2",
						onClick: () => setStep(0),
						children: "Ulangi dari pilar I"
					})
				] })]
			})
		]
	});
}
//#endregion
export { Diagnostik as component };
