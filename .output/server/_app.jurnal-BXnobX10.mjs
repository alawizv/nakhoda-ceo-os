import { t as cn } from "./_ssr/utils-CCMvQdln.mjs";
import { z as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { d as useCeoStore, m as weekOf, p as weekLabel } from "./_ssr/store-B0AaVZTc.mjs";
import { n as Textarea } from "./_ssr/input-BZUqt6uk.mjs";
import { n as Panel, r as SectionKicker } from "./_ssr/empty-state-VUEg7Anj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.jurnal-BXnobX10.js
var import_jsx_runtime = require_jsx_runtime();
function Jurnal() {
	const journals = useCeoStore((s) => s.journals);
	const upsert = useCeoStore((s) => s.upsertJournal);
	const key = weekOf();
	const current = journals.find((j) => j.weekOf === key) ?? {
		weekOf: key,
		uniqueCeoWork: "",
		avoided: "",
		energy: 3,
		learn: "",
		nextWeek: ""
	};
	function patch(field, value) {
		upsert({
			...current,
			[field]: value
		});
	}
	const history = journals.filter((j) => j.weekOf !== key);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: weekLabel() }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-4xl md:text-5xl",
					children: "Tinjauan CEO"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-prose text-muted",
					children: "Enam puluh menit, sekali seminggu. Menulis memaksa jernih. Tanpa ini, minggu berikutnya hanya pengulangan kebisingan minggu ini."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prompt, {
					label: "Pekerjaan yang hanya CEO yang bisa",
					hint: "Jika orang lain bisa mengerjakannya, mengapa Anda?",
					value: current.uniqueCeoWork,
					onChange: (v) => patch("uniqueCeoWork", v)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prompt, {
					label: "Percakapan atau keputusan yang saya hindari",
					hint: "Yang ditunda biasanya yang paling mahal.",
					value: current.avoided,
					onChange: (v) => patch("avoided", v)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: "Energi minggu ini"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-subtle",
							children: "1 kosong · 5 jernih dan cukup tidur"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 grid grid-cols-5 gap-1.5",
							children: [
								1,
								2,
								3,
								4,
								5
							].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => patch("energy", n),
								className: cn("h-11 rounded-sm text-sm tabular-nums", current.energy === n ? "bg-forest text-forest-fg" : "bg-surface-2 text-muted"),
								children: n
							}, n))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prompt, {
					label: "Yang saya pelajari tentang perusahaan atau diri",
					value: current.learn,
					onChange: (v) => patch("learn", v)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prompt, {
					label: "Taruhan minggu depan",
					hint: "Satu atau dua. Bukan daftar belanja.",
					value: current.nextWeek,
					onChange: (v) => patch("nextWeek", v)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xs text-subtle",
					children: "Tersimpan otomatis di perangkat ini."
				})
			] }),
			history.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "Arsip"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 space-y-3",
				children: history.map((j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-xl border border-border bg-surface p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.14em] text-subtle",
							children: j.weekOf
						}),
						j.uniqueCeoWork && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm",
							children: j.uniqueCeoWork
						}),
						j.nextWeek && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-muted",
							children: ["Lanjut: ", j.nextWeek]
						})
					]
				}, j.id))
			})] })
		]
	});
}
function Prompt({ label, hint, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block border-b border-border py-4 last:border-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm font-medium",
				children: label
			}),
			hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block text-xs text-subtle",
				children: hint
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
				className: "mt-3",
				value,
				onChange: (e) => onChange(e.target.value)
			})
		]
	});
}
//#endregion
export { Jurnal as component };
