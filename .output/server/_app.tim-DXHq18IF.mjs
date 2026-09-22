import { i as __toESM } from "./_runtime.mjs";
import { t as cn } from "./_ssr/utils-CCMvQdln.mjs";
import { n as require_react } from "./_libs/@radix-ui/react-compose-refs+[...].mjs";
import { z as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as Button } from "./_ssr/button-Dz_MmIGV.mjs";
import { d as useCeoStore, u as todayIso } from "./_ssr/store-B0AaVZTc.mjs";
import { n as Textarea, t as Input } from "./_ssr/input-BZUqt6uk.mjs";
import { n as Panel, r as SectionKicker, t as EmptyState } from "./_ssr/empty-state-VUEg7Anj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.tim-DXHq18IF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Tim() {
	const people = useCeoStore((s) => s.people);
	const add = useCeoStore((s) => s.addPerson);
	const update = useCeoStore((s) => s.updatePerson);
	const remove = useCeoStore((s) => s.removePerson);
	const [name, setName] = (0, import_react.useState)("");
	const [role, setRole] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "First team" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-4xl md:text-5xl",
					children: "Kursi kunci"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-prose text-muted",
					children: "Tim senior adalah produk pertama CEO. Plot kinerja × potensi. Hijau di kanan-atas adalah masa depan. Kiri-bawah yang dibiarkan adalah pajak pada semua orang lain."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "Tambah orang"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-4 flex flex-col gap-3 sm:flex-row",
				onSubmit: (e) => {
					e.preventDefault();
					if (!name.trim()) return;
					add({
						name,
						role,
						performance: 3,
						potential: 3,
						lastOneOnOne: "",
						notes: "",
						nextAction: ""
					});
					setName("");
					setRole("");
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: name,
						onChange: (e) => setName(e.target.value),
						placeholder: "Nama"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: role,
						onChange: (e) => setRole(e.target.value),
						placeholder: "Kursi / peran"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						children: "Tambah"
					})
				]
			})] }),
			people.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TalentGrid, { people }),
			people.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				title: "Belum ada peta",
				body: "Masukkan laporan langsung dan kursi kunci di bawah mereka. Lima sampai delapan nama sudah cukup untuk mulai."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-3",
				children: people.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PersonCard, {
					p,
					onUpdate: update,
					onRemove: remove
				}, p.id))
			})
		]
	});
}
function TalentGrid({ people }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "Kinerja × potensi" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto mt-4 aspect-square max-w-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 grid grid-cols-2 grid-rows-2 gap-px bg-border",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "bg-surface-2/80 p-2 text-xs uppercase tracking-wider text-subtle",
						children: "Kinerja rendah · potensi tinggi"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "bg-forest/10 p-2 text-right text-xs uppercase tracking-wider text-subtle",
						children: "Bintang"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "bg-danger/8 p-2 text-xs uppercase tracking-wider text-subtle",
						children: "Salah kursi"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "bg-surface p-2 text-right text-xs uppercase tracking-wider text-subtle",
						children: "Andalan saat ini"
					})
				]
			}), people.map((p) => {
				const x = (p.potential - 1) / 4 * 100;
				const y = (1 - (p.performance - 1) / 4) * 100;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					title: `${p.name} · K${p.performance} P${p.potential}`,
					className: "absolute size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-forest",
					style: {
						left: `${x}%`,
						top: `${y}%`
					}
				}, p.id);
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-center text-xs text-subtle",
			children: "Kiri: potensi rendah · Bawah: kinerja rendah"
		})
	] });
}
function PersonCard({ p, onUpdate, onRemove }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "rounded-xl border border-border bg-surface p-5 shadow-soft",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-medium",
					children: p.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: p.role
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "text-xs text-subtle hover:text-forest",
					onClick: () => onUpdate(p.id, { lastOneOnOne: todayIso() }),
					children: p.lastOneOnOne ? `1:1 ${p.lastOneOnOne}` : "Tandai 1:1 hari ini"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, {
					label: "Kinerja",
					value: p.performance,
					onChange: (n) => onUpdate(p.id, { performance: n })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, {
					label: "Potensi",
					value: p.potential,
					onChange: (n) => onUpdate(p.id, { potential: n })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
				className: "mt-3 min-h-20",
				value: p.notes,
				onChange: (e) => onUpdate(p.id, { notes: e.target.value }),
				placeholder: "Catatan: keep / coach / move"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				className: "mt-2",
				value: p.nextAction,
				onChange: (e) => onUpdate(p.id, { nextAction: e.target.value }),
				placeholder: "Aksi berikutnya"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-3 text-xs text-subtle hover:text-danger",
				onClick: () => onRemove(p.id),
				children: "Hapus"
			})
		]
	});
}
function Scale({ label, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "mb-1.5 text-xs uppercase tracking-[0.14em] text-subtle",
		children: [
			label,
			" · ",
			value
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-5 gap-1",
		children: [
			1,
			2,
			3,
			4,
			5
		].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => onChange(n),
			className: cn("h-9 rounded-sm text-xs tabular-nums", value === n ? "bg-forest text-forest-fg" : "bg-surface-2 text-muted"),
			children: n
		}, n))
	})] });
}
//#endregion
export { Tim as component };
