import { i as __toESM } from "./_runtime.mjs";
import { t as cn } from "./_ssr/utils-CCMvQdln.mjs";
import { n as require_react } from "./_libs/@radix-ui/react-compose-refs+[...].mjs";
import { z as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as Button } from "./_ssr/button-Dz_MmIGV.mjs";
import { a as RAPID } from "./_ssr/playbook-BqD7Euoo.mjs";
import { c as shortDate, d as useCeoStore, u as todayIso } from "./_ssr/store-B0AaVZTc.mjs";
import { n as Textarea, t as Input } from "./_ssr/input-BZUqt6uk.mjs";
import { n as Panel, r as SectionKicker, t as EmptyState } from "./_ssr/empty-state-VUEg7Anj.mjs";
import { t as Badge } from "./_ssr/badge-BJd_y5BG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.keputusan-DJ6YPLu9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var emptyForm = {
	title: "",
	kind: "two-way",
	context: "",
	options: "",
	decision: "",
	owner: "",
	date: todayIso(),
	reviewDate: "",
	status: "open"
};
function Keputusan() {
	const decisions = useCeoStore((s) => s.decisions);
	const add = useCeoStore((s) => s.addDecision);
	const update = useCeoStore((s) => s.updateDecision);
	const remove = useCeoStore((s) => s.removeDecision);
	const [form, setForm] = (0, import_react.useState)(emptyForm);
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex flex-col gap-4 md:flex-row md:items-end md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "Kualitas keputusan" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-4xl md:text-5xl",
						children: "Pintu satu arah dan dua arah"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-prose text-muted",
						children: "Bezos membagi dunia menjadi dua. Pintu dua arah: cepat, reversibel, delegasikan. Pintu satu arah: lambat, tulis memo, pre-mortem, satu nama yang memutuskan."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => setOpen(true),
					children: "Catat keputusan"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-3 md:grid-cols-5",
				children: RAPID.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					className: "p-4 md:p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl text-forest",
							children: r.letter
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm font-medium",
							children: r.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-muted",
							children: r.mean
						})
					]
				}, r.letter))
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "Keputusan baru"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-4 grid gap-4 md:grid-cols-2",
				onSubmit: (e) => {
					e.preventDefault();
					if (!form.title.trim()) return;
					add(form);
					setForm({
						...emptyForm,
						date: todayIso()
					});
					setOpen(false);
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "md:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1.5 block text-xs uppercase tracking-[0.14em] text-subtle",
							children: "Judul"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: form.title,
							onChange: (e) => setForm({
								...form,
								title: e.target.value
							}),
							placeholder: "Apa yang harus diputuskan?",
							required: true
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
						className: "mb-1.5 text-xs uppercase tracking-[0.14em] text-subtle",
						children: "Jenis"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2",
						children: ["two-way", "one-way"].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setForm({
								...form,
								kind: k
							}),
							className: cn("h-11 flex-1 rounded-md border text-sm", form.kind === k ? "border-forest bg-forest text-forest-fg" : "border-border"),
							children: k === "one-way" ? "Satu arah" : "Dua arah"
						}, k))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mb-1.5 block text-xs uppercase tracking-[0.14em] text-subtle",
						children: "Pemilik"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: form.owner,
						onChange: (e) => setForm({
							...form,
							owner: e.target.value
						})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "md:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1.5 block text-xs uppercase tracking-[0.14em] text-subtle",
							children: "Konteks"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							value: form.context,
							onChange: (e) => setForm({
								...form,
								context: e.target.value
							}),
							placeholder: "Fakta, bukan opini. Apa yang terjadi jika kita tidak memutuskan?"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mb-1.5 block text-xs uppercase tracking-[0.14em] text-subtle",
						children: "Opsi"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						value: form.options,
						onChange: (e) => setForm({
							...form,
							options: e.target.value
						})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mb-1.5 block text-xs uppercase tracking-[0.14em] text-subtle",
						children: "Putusan"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						value: form.decision,
						onChange: (e) => setForm({
							...form,
							decision: e.target.value
						})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2 md:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							children: "Simpan"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "ghost",
							onClick: () => setOpen(false),
							children: "Batal"
						})]
					})
				]
			})] }),
			decisions.length === 0 && !open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				title: "Log masih kosong",
				body: "Keputusan yang tidak ditulis akan dibuka ulang setiap minggu. Mulai dari yang tertahan di meja Anda.",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => setOpen(true),
					children: "Catat yang pertama"
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-3",
				children: decisions.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DecisionCard, {
					d,
					onUpdate: update,
					onRemove: remove
				}, d.id))
			})
		]
	});
}
function DecisionCard({ d, onUpdate, onRemove }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "rounded-xl border border-border bg-surface p-5 shadow-soft",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-medium",
					children: d.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-xs text-subtle",
					children: [
						shortDate(d.date),
						" · ",
						d.owner || "Pemilik belum diisi"
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: d.kind === "one-way" ? "warn" : "neutral",
						children: d.kind === "one-way" ? "Satu arah" : "Dua arah"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: "h-8 rounded-sm border border-border bg-surface px-2 text-xs",
						value: d.status,
						onChange: (e) => onUpdate(d.id, { status: e.target.value }),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "open",
								children: "Terbuka"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "decided",
								children: "Diputuskan"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "reviewed",
								children: "Ditinjau"
							})
						]
					})]
				})]
			}),
			d.context && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: d.context
			}),
			d.options && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-subtle",
					children: "Opsi · "
				}), d.options]
			}),
			d.decision && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-subtle",
					children: "Putusan · "
				}), d.decision]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-3 text-xs text-subtle hover:text-danger",
				onClick: () => onRemove(d.id),
				children: "Hapus"
			})
		]
	});
}
//#endregion
export { Keputusan as component };
