import { i as __toESM } from "./_runtime.mjs";
import { t as cn } from "./_ssr/utils-CCMvQdln.mjs";
import { n as require_react } from "./_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as Link, z as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as Button } from "./_ssr/button-Dz_MmIGV.mjs";
import { r as FIRST_90 } from "./_ssr/playbook-BqD7Euoo.mjs";
import { d as useCeoStore, i as diagnosticProgress, l as suggestPlanFromGaps } from "./_ssr/store-B0AaVZTc.mjs";
import { t as Input } from "./_ssr/input-BZUqt6uk.mjs";
import { n as Panel, r as SectionKicker } from "./_ssr/empty-state-VUEg7Anj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.rencana-BlzzD8Zy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Rencana() {
	const plan = useCeoStore((s) => s.plan);
	const answers = useCeoStore((s) => s.answers);
	const setPlan = useCeoStore((s) => s.setPlan);
	const addOutcome = useCeoStore((s) => s.addOutcome);
	const addStop = useCeoStore((s) => s.addStop);
	const toggleOutcome = useCeoStore((s) => s.toggleOutcome);
	const toggleStop = useCeoStore((s) => s.toggleStop);
	const [draftOut, setDraftOut] = (0, import_react.useState)("");
	const [draftStop, setDraftStop] = (0, import_react.useState)("");
	const progress = diagnosticProgress(answers);
	const done = plan.outcomes.filter((o) => o.done).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "Satu kuartal, bukan lima tahun" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-4xl md:text-5xl",
					children: "Rencana 90 hari"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-prose text-muted",
					children: "Tema yang tajam. Beberapa hasil yang bisa dibuktikan. Daftar yang harus berhenti. 90 hari cukup panjang untuk bergerak, cukup pendek untuk jujur."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mb-1.5 block text-xs uppercase tracking-[0.14em] text-subtle",
					children: "Tema kuartal"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: plan.theme,
					onChange: (e) => setPlan({ theme: e.target.value }),
					placeholder: "Satu kalimat yang memaksa pilihan"
				})] }),
				progress.filled > 8 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					className: "mt-4",
					onClick: () => setPlan(suggestPlanFromGaps(answers)),
					children: "Isi dari hasil diagnostik"
				}),
				progress.filled <= 8 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm text-muted",
					children: [
						"Selesaikan",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/diagnostik",
							className: "text-forest underline-offset-2 hover:underline",
							children: "diagnostik"
						}),
						" ",
						"agar rencana bisa diisi dari celah terlemah."
					]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl",
							children: "Hasil yang harus benar"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs tabular-nums text-subtle",
							children: [
								done,
								"/",
								plan.outcomes.length
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2",
						children: plan.outcomes.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => toggleOutcome(o.id),
							className: "flex w-full items-start gap-3 rounded-md px-2 py-2 text-left hover:bg-surface-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { checked: o.done }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("text-sm", o.done && "text-muted line-through"),
								children: o.text
							})]
						}) }, o.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-4 flex gap-2",
						onSubmit: (e) => {
							e.preventDefault();
							if (!draftOut.trim()) return;
							addOutcome(draftOut.trim());
							setDraftOut("");
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: draftOut,
							onChange: (e) => setDraftOut(e.target.value),
							placeholder: "Hasil baru"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							variant: "secondary",
							children: "Tambah"
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Berhenti melakukan"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Kapasitas CEO tercipta dari yang ditinggalkan."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2",
						children: plan.stopDoing.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => toggleStop(o.id),
							className: "flex w-full items-start gap-3 rounded-md px-2 py-2 text-left hover:bg-surface-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { checked: o.done }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("text-sm", o.done && "text-muted line-through"),
								children: o.text
							})]
						}) }, o.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-4 flex gap-2",
						onSubmit: (e) => {
							e.preventDefault();
							if (!draftStop.trim()) return;
							addStop(draftStop.trim());
							setDraftStop("");
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: draftStop,
							onChange: (e) => setDraftStop(e.target.value),
							placeholder: "Yang harus berhenti"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							variant: "secondary",
							children: "Tambah"
						})]
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "Jika Anda CEO baru" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl",
					children: "30 · 60 · 90"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 grid gap-3 md:grid-cols-3",
					children: FIRST_90.map((ph) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl",
						children: ph.phase
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-3",
						children: ph.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2 text-sm text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-1.5 shrink-0 rounded-full bg-forest" }), item]
						}, item))
					})] }, ph.phase))
				})
			] })
		]
	});
}
function Box({ checked }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-xs border", checked ? "border-forest bg-forest text-forest-fg" : "border-border-strong"),
		children: checked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 12 12",
			className: "size-3",
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M2 6.2 L4.6 9 L10 3.2",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.8"
			})
		}) : null
	});
}
//#endregion
export { Rencana as component };
