import { i as __toESM } from "./_runtime.mjs";
import { t as cn } from "./_ssr/utils-CCMvQdln.mjs";
import { n as require_react } from "./_libs/@radix-ui/react-compose-refs+[...].mjs";
import { z as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as Button } from "./_ssr/button-Dz_MmIGV.mjs";
import { d as useCeoStore } from "./_ssr/store-B0AaVZTc.mjs";
import { t as Input } from "./_ssr/input-BZUqt6uk.mjs";
import { n as Panel, r as SectionKicker, t as EmptyState } from "./_ssr/empty-state-VUEg7Anj.mjs";
import { t as Badge } from "./_ssr/badge-BJd_y5BG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.scorecard-BJpIx_qc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function health(k) {
	if (k.target === 0) return 0;
	return k.direction === "up" ? k.current / k.target : k.target / Math.max(k.current, 1e-4);
}
function Scorecard() {
	const kpis = useCeoStore((s) => s.kpis);
	const add = useCeoStore((s) => s.addKpi);
	const update = useCeoStore((s) => s.updateKpi);
	const remove = useCeoStore((s) => s.removeKpi);
	const [name, setName] = (0, import_react.useState)("");
	const [unit, setUnit] = (0, import_react.useState)("");
	const [target, setTarget] = (0, import_react.useState)("");
	const [current, setCurrent] = (0, import_react.useState)("");
	const [direction, setDirection] = (0, import_react.useState)("up");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "Satu sumber kebenaran" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-4xl md:text-5xl",
					children: "Scorecard"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-prose text-muted",
					children: "5–9 angka yang jika hijau, perusahaan sehat. Jika setiap fungsi membawa dashboard-nya sendiri, rapat menjadi pengadilan. Pilih leading indicator, bukan vanity."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "Tambah metrik"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-6 lg:items-end",
				onSubmit: (e) => {
					e.preventDefault();
					if (!name.trim()) return;
					add({
						name,
						unit,
						current: Number(current) || 0,
						target: Number(target) || 0,
						direction
					});
					setName("");
					setUnit("");
					setTarget("");
					setCurrent("");
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "lg:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1.5 block text-xs uppercase tracking-[0.14em] text-subtle",
							children: "Nama"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: name,
							onChange: (e) => setName(e.target.value),
							placeholder: "NPS, runway, win rate"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mb-1.5 block text-xs uppercase tracking-[0.14em] text-subtle",
						children: "Saat ini"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						inputMode: "decimal",
						value: current,
						onChange: (e) => setCurrent(e.target.value)
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mb-1.5 block text-xs uppercase tracking-[0.14em] text-subtle",
						children: "Target"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						inputMode: "decimal",
						value: target,
						onChange: (e) => setTarget(e.target.value)
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mb-1.5 block text-xs uppercase tracking-[0.14em] text-subtle",
						children: "Satuan"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: unit,
						onChange: (e) => setUnit(e.target.value),
						placeholder: "% / bln"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setDirection("up"),
							className: cn("h-11 flex-1 rounded-md border text-xs", direction === "up" ? "border-forest bg-forest text-forest-fg" : "border-border"),
							children: "Naik = baik"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setDirection("down"),
							className: cn("h-11 flex-1 rounded-md border text-xs", direction === "down" ? "border-forest bg-forest text-forest-fg" : "border-border"),
							children: "Turun = baik"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						className: "lg:col-span-6 sm:col-span-2",
						children: "Tambah ke papan"
					})
				]
			})] }),
			kpis.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				title: "Papan masih kosong",
				body: "Mulai dari kas/runway, satu metrik pelanggan, satu metrik orang, satu metrik unit economics."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: kpis.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
					k,
					onUpdate: update,
					onRemove: remove
				}, k.id))
			})
		]
	});
}
function KpiCard({ k, onUpdate, onRemove }) {
	const ratio = health(k);
	const tone = ratio >= 1 ? "success" : ratio >= .8 ? "warn" : "danger";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-xl border border-border bg-surface p-5 shadow-soft",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-medium",
					children: k.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone,
					children: ratio >= 1 ? "Hijau" : ratio >= .8 ? "Kuning" : "Merah"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 font-display text-4xl tabular-nums",
				children: [k.current, k.unit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-1 text-lg text-muted",
					children: k.unit
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-xs text-subtle",
				children: [
					"Target ",
					k.target,
					k.unit,
					" · ",
					k.direction === "up" ? "semakin tinggi" : "semakin rendah"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-4 block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mb-1 block text-xs text-subtle",
					children: "Perbarui angka"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					inputMode: "decimal",
					defaultValue: String(k.current),
					onBlur: (e) => onUpdate(k.id, { current: Number(e.target.value) || 0 })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-3 text-xs text-subtle hover:text-danger",
				onClick: () => onRemove(k.id),
				children: "Hapus"
			})
		]
	});
}
//#endregion
export { Scorecard as component };
