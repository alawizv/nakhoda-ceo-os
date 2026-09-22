import { v as Link, z as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { n as SCORE_LABELS, t as PILLARS } from "./_ssr/pillars-My4NIVId.mjs";
import { d as useCeoStore, s as pillarScore } from "./_ssr/store-B0AaVZTc.mjs";
import { n as Textarea } from "./_ssr/input-BZUqt6uk.mjs";
import { _ as ArrowLeft, g as ArrowRight } from "./_libs/lucide-react.mjs";
import { n as Panel, r as SectionKicker } from "./_ssr/empty-state-VUEg7Anj.mjs";
import { t as Badge } from "./_ssr/badge-BJd_y5BG.mjs";
import { n as Route } from "./_ssr/router-Q0OewvMT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.pilar._id-6U35yv1c.js
var import_jsx_runtime = require_jsx_runtime();
function PilarDetail() {
	const pillar = Route.useLoaderData();
	const answers = useCeoStore((s) => s.answers);
	const note = useCeoStore((s) => s.pillarNotes[pillar.id] ?? "");
	const setNote = useCeoStore((s) => s.setPillarNote);
	const score = pillarScore(answers, pillar.id);
	const idx = PILLARS.findIndex((p) => p.id === pillar.id);
	const prev = PILLARS[idx - 1];
	const next = PILLARS[idx + 1];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/pilar",
					className: "inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), " Semua pilar"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-xs uppercase tracking-[0.16em] text-subtle",
					children: ["Pilar ", pillar.roman]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex flex-wrap items-end justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-4xl md:text-5xl",
						children: pillar.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: score ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-3xl tabular-nums text-forest",
							children: score.toFixed(1)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-2",
							children: SCORE_LABELS[Math.round(score)]
						})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/diagnostik",
							className: "text-forest",
							children: "Belum dinilai — buka diagnostik"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-prose text-muted",
					children: pillar.why
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "Pekerjaan CEO" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-base text-ink",
						children: pillar.job
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted",
						children: pillar.promise
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					className: "bg-forest text-forest-fg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-forest-fg/70",
							children: "Gerakan minggu ini"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-base",
							children: pillar.weeklyMove
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm text-forest-fg/75",
							children: ["Langkah pertama: ", pillar.firstMove]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "Ritme" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-5 space-y-5",
				children: pillar.practices.map((pr) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "grid gap-1 md:grid-cols-[7rem_1fr] md:gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						className: "h-fit w-fit capitalize",
						children: pr.cadence
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: pr.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: pr.detail
					})] })]
				}, pr.title))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "Anti-pola" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-3",
					children: pillar.antipatterns.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-1.5 shrink-0 rounded-full bg-danger" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: a })]
					}, a))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "Tanyakan ke tim" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-3",
					children: pillar.teamQuestions.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "text-sm text-ink",
						children: q
					}, q))
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "Catatan pribadi" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
				className: "mt-3",
				value: note,
				onChange: (e) => setNote(pillar.id, e.target.value),
				placeholder: "Apa yang benar, apa yang Anda hindari, apa yang akan berubah 30 hari ke depan."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between text-sm",
				children: [prev ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/pilar/$id",
					params: { id: prev.id },
					className: "text-muted hover:text-ink",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "mr-1 inline size-4" }),
						prev.roman,
						". ",
						prev.name
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), next ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/pilar/$id",
					params: { id: next.id },
					className: "text-muted hover:text-ink",
					children: [
						next.roman,
						". ",
						next.name,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 inline size-4" })
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})]
			})
		]
	});
}
//#endregion
export { PilarDetail as component };
