import { t as cn } from "./_ssr/utils-CCMvQdln.mjs";
import { z as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { d as useCeoStore, m as weekOf, p as weekLabel } from "./_ssr/store-B0AaVZTc.mjs";
import { n as Panel, r as SectionKicker } from "./_ssr/empty-state-VUEg7Anj.mjs";
import { t as Badge } from "./_ssr/badge-BJd_y5BG.mjs";
import { a as WEEKLY_RITUALS, i as QUARTERLY_RITUALS, n as MEETING_TYPES, r as MONTHLY_RITUALS, t as DAILY_RITUALS } from "./_ssr/cadence-Bpf6GlmA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.ritme-0XdDtAFP.js
var import_jsx_runtime = require_jsx_runtime();
function Ritme() {
	const cadence = useCeoStore((s) => s.cadence);
	const toggle = useCeoStore((s) => s.toggleCadence);
	const checks = cadence.find((w) => w.weekOf === weekOf())?.checks ?? {};
	const done = WEEKLY_RITUALS.filter((r) => checks[r.id]).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: weekLabel() }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-4xl md:text-5xl",
					children: "Ritme nakhoda"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-prose text-muted",
					children: "Perusahaan mewarisi kalender CEO-nya. Ritme ini adalah infrastruktur, bukan produktivitas pribadi. Tandai yang sudah terjadi minggu ini."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-baseline justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Mingguan"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "tabular-nums text-sm text-muted",
					children: [
						done,
						" / ",
						WEEKLY_RITUALS.length
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 grid gap-2",
				children: WEEKLY_RITUALS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RitualRow, {
					item,
					checked: !!checks[item.id],
					onToggle: () => toggle(item.id)
				}, item.id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Harian"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-4",
					children: DAILY_RITUALS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: r.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: r.detail
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-subtle",
							children: r.duration
						})
					] }, r.id))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Bulanan"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-4",
					children: MONTHLY_RITUALS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: r.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: r.detail
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-subtle",
							children: r.duration
						})
					] }, r.id))
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "Kuartalan"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 grid gap-4 md:grid-cols-2",
				children: QUARTERLY_RITUALS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg bg-surface-2 p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: r.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: r.detail
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-subtle",
							children: r.duration
						})
					]
				}, r.id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "Sistem rapat" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1 font-display text-2xl",
					children: "Setiap rapat wajib punya pekerjaan"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full min-w-[36rem] text-left text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-border text-xs uppercase tracking-[0.12em] text-subtle",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 pr-4 font-medium",
									children: "Jenis"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 pr-4 font-medium",
									children: "Cadence"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 pr-4 font-medium",
									children: "Tujuan"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 font-medium",
									children: "Aturan"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: MEETING_TYPES.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-border align-top",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-3 pr-4 font-medium",
									children: m.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-3 pr-4 text-muted",
									children: m.cadence
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-3 pr-4 text-muted",
									children: m.purpose
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-3 text-muted",
									children: m.rule
								})
							]
						}, m.name)) })]
					})
				})
			] })
		]
	});
}
function RitualRow({ item, checked, onToggle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onToggle,
		className: cn("flex w-full items-start gap-3 rounded-lg border px-3 py-3 text-left transition-colors duration-150", checked ? "border-forest/30 bg-forest/8" : "border-border bg-bg hover:border-border-strong"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-xs border", checked ? "border-forest bg-forest text-forest-fg" : "border-border-strong bg-surface"),
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
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "min-w-0 flex-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-baseline justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-medium",
					children: item.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: item.duration })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block text-sm text-muted",
				children: item.detail
			})]
		})]
	});
}
//#endregion
export { Ritme as component };
