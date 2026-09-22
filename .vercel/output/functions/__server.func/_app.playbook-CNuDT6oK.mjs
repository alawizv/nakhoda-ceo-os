import { v as Link, z as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { i as PRINCIPLES, n as BOOKS, t as ANTI_PATTERNS } from "./_ssr/playbook-BqD7Euoo.mjs";
import { n as Panel, r as SectionKicker } from "./_ssr/empty-state-VUEg7Anj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.playbook-CNuDT6oK.js
var import_jsx_runtime = require_jsx_runtime();
function Playbook() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "Doktrin" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-4xl md:text-5xl",
					children: "Dua belas prinsip Nakhoda"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 max-w-prose text-muted",
					children: [
						"Bukan afirmasi. Mekanisme. Jika satu prinsip bertentangan dengan kalender Anda, kalender yang salah — atau prinsip itu belum Anda yakini. Cara klik tiap ruang ada di",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/panduan",
							className: "text-forest underline-offset-2 hover:underline",
							children: "Panduan"
						}),
						"."
					]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "grid gap-3 md:grid-cols-2",
				children: PRINCIPLES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-xl border border-border bg-surface p-5 shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.16em] text-subtle",
							children: p.num
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-2xl",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted",
							children: p.body
						})
					]
				}, p.num))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "Yang merusak perusahaan pelan-pelan" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl",
					children: "Anti-pola CEO"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 grid gap-3 md:grid-cols-2",
					children: ANTI_PATTERNS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-medium",
						children: a.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: a.cost
					})] }, a.title))
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "Rak yang cukup" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl",
					children: "Bacaan yang membentuk kerangka ini"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-prose text-sm text-muted",
					children: "Grove, Rumelt, Horowitz, Mochary, Lencioni, Cagan. Nakhoda adalah sintesis operasional — bukan pengganti membaca sumbernya."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 divide-y divide-border rounded-xl border border-border bg-surface",
					children: BOOKS.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid gap-1 px-5 py-4 md:grid-cols-[14rem_10rem_1fr] md:gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: b.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-subtle",
								children: b.author
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: b.why
							})
						]
					}, b.title))
				})
			] })
		]
	});
}
//#endregion
export { Playbook as component };
