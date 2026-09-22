import { t as cn } from "./_ssr/utils-CCMvQdln.mjs";
import { v as Link, z as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as PILLARS } from "./_ssr/pillars-My4NIVId.mjs";
import { d as useCeoStore, r as allScores, s as pillarScore } from "./_ssr/store-B0AaVZTc.mjs";
import { t as Radar } from "./_ssr/radar-COwmmwz_.mjs";
import { n as Panel, r as SectionKicker } from "./_ssr/empty-state-VUEg7Anj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.pilar.index-BuxG3oNh.js
var import_jsx_runtime = require_jsx_runtime();
function PilarIndex() {
	const answers = useCeoStore((s) => s.answers);
	const scores = allScores(answers);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "Kerangka kerja" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl md:text-5xl",
				children: "Delapan pilar Nakhoda"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-prose text-muted",
				children: "CEO yang hebat tidak menguasai seribu teknik. Ia menjaga delapan pekerjaan yang tidak boleh dibiarkan yatim. Setiap pilar punya pertanyaan, ritme, dan anti-pola."
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				className: "lg:sticky lg:top-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radar, { scores })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: PILLARS.map((p) => {
					const score = pillarScore(answers, p.id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/pilar/$id",
						params: { id: p.id },
						className: "group rounded-xl border border-border bg-surface p-5 shadow-soft transition-colors duration-150 hover:border-forest",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs uppercase tracking-[0.16em] text-subtle",
									children: p.roman
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("tabular-nums text-sm", score ? "text-forest" : "text-subtle"),
									children: score ? score.toFixed(1) : "—"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-2xl group-hover:text-forest",
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: p.job
							})
						]
					}, p.id);
				})
			})]
		})]
	});
}
//#endregion
export { PilarIndex as component };
