import { i as __toESM } from "./_runtime.mjs";
import { t as cn } from "./_ssr/utils-CCMvQdln.mjs";
import { n as require_react } from "./_libs/@radix-ui/react-compose-refs+[...].mjs";
import { z as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as Button } from "./_ssr/button-Dz_MmIGV.mjs";
import { d as useCeoStore } from "./_ssr/store-B0AaVZTc.mjs";
import { n as Textarea, t as Input } from "./_ssr/input-BZUqt6uk.mjs";
import { n as Panel, r as SectionKicker, t as EmptyState } from "./_ssr/empty-state-VUEg7Anj.mjs";
import { t as Badge } from "./_ssr/badge-BJd_y5BG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.prioritas-BKVs21lw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STATUS = [
	{
		id: "on-track",
		label: "On track",
		tone: "success"
	},
	{
		id: "at-risk",
		label: "Berisiko",
		tone: "warn"
	},
	{
		id: "off-track",
		label: "Off track",
		tone: "danger"
	},
	{
		id: "done",
		label: "Selesai",
		tone: "neutral"
	}
];
function Prioritas() {
	const priorities = useCeoStore((s) => s.priorities);
	const add = useCeoStore((s) => s.addPriority);
	const update = useCeoStore((s) => s.updatePriority);
	const remove = useCeoStore((s) => s.removePriority);
	const [title, setTitle] = (0, import_react.useState)("");
	const [why, setWhy] = (0, import_react.useState)("");
	const [owner, setOwner] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "Paling banyak lima" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-4xl md:text-5xl",
					children: "Prioritas perusahaan"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-prose text-muted",
					children: "Jika semuanya penting, tidak ada yang penting. Lima adalah batas. Enam berarti Anda belum memilih. Setiap prioritas: satu pemilik, satu alasan, satu status."
				})
			] }),
			priorities.length >= 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				className: "border-warn/30",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm",
					children: "Batas lima tercapai. Untuk menambah, selesaikan atau parkir salah satu. Parkir adalah keputusan, bukan kegagalan."
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "Tambah prioritas"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-4 grid gap-3 md:grid-cols-[1fr_1fr_auto] md:items-end",
				onSubmit: (e) => {
					e.preventDefault();
					if (!title.trim() || priorities.length >= 5) return;
					add({
						title,
						why,
						owner,
						status: "on-track",
						progress: 0
					});
					setTitle("");
					setWhy("");
					setOwner("");
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "md:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1.5 block text-xs uppercase tracking-[0.14em] text-subtle",
							children: "Hasil yang diinginkan"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: title,
							onChange: (e) => setTitle(e.target.value),
							placeholder: "Bukan aktivitas — hasil"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						disabled: priorities.length >= 5 || !title.trim(),
						children: "Tambah"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mb-1.5 block text-xs uppercase tracking-[0.14em] text-subtle",
						children: "Pemilik"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: owner,
						onChange: (e) => setOwner(e.target.value),
						placeholder: "Satu nama"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "md:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1.5 block text-xs uppercase tracking-[0.14em] text-subtle",
							children: "Mengapa ini, bukan yang lain"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							className: "min-h-20",
							value: why,
							onChange: (e) => setWhy(e.target.value)
						})]
					})
				]
			})] }),
			priorities.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				title: "Belum ada pilihan",
				body: "Tulis tiga hasil yang jika benar dalam 90 hari, kuartal ini dianggap menang."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "space-y-3",
				children: priorities.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriorityCard, {
					p,
					index: i + 1,
					onUpdate: update,
					onRemove: remove
				}, p.id))
			})
		]
	});
}
function PriorityCard({ p, index, onUpdate, onRemove }) {
	const tone = STATUS.find((s) => s.id === p.status)?.tone ?? "neutral";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "rounded-xl border border-border bg-surface p-5 shadow-soft",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-2xl text-subtle tabular-nums",
						children: index
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-medium",
							children: p.title
						}),
						p.why && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: p.why
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-subtle",
							children: p.owner || "Pemilik belum diisi"
						})
					] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone,
					children: STATUS.find((s) => s.id === p.status)?.label
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-1 flex justify-between text-xs text-subtle",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Kemajuan" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "tabular-nums",
							children: [p.progress, "%"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-1.5 overflow-hidden rounded-full bg-surface-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: cn("h-full rounded-full bg-forest transition-[width] duration-300"),
							style: { width: `${p.progress}%` }
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "range",
						min: 0,
						max: 100,
						value: p.progress,
						onChange: (e) => onUpdate(p.id, { progress: Number(e.target.value) }),
						className: "mt-2 w-full accent-forest"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap gap-2",
				children: [STATUS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onUpdate(p.id, { status: s.id }),
					className: cn("h-8 rounded-full px-3 text-xs", p.status === s.id ? "bg-forest text-forest-fg" : "bg-surface-2 text-muted"),
					children: s.label
				}, s.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "ml-auto text-xs text-subtle hover:text-danger",
					onClick: () => onRemove(p.id),
					children: "Hapus"
				})]
			})
		]
	});
}
//#endregion
export { Prioritas as component };
