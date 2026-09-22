import { i as __toESM } from "./_runtime.mjs";
import { n as ROLES, r as STAGES } from "./_ssr/types-BpC5uH9I.mjs";
import { t as cn } from "./_ssr/utils-CCMvQdln.mjs";
import { n as require_react } from "./_libs/@radix-ui/react-compose-refs+[...].mjs";
import { d as useRouterState, m as Outlet, v as Link, z as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as Button } from "./_ssr/button-Dz_MmIGV.mjs";
import { d as useCeoStore, n as STAGE_LABEL, t as ROLE_LABEL } from "./_ssr/store-B0AaVZTc.mjs";
import { t as Input } from "./_ssr/input-BZUqt6uk.mjs";
import { a as Settings2, c as Menu, d as Flag, f as Compass, h as BookOpen, i as Target, l as Layers, m as CalendarClock, n as Users, o as ScrollText, p as CircleHelp, s as Scale, t as X, u as Gauge, v as Activity } from "./_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app-c0tW2dp8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Mark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className: cn("size-8", className),
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "32",
				height: "32",
				rx: "8",
				className: "fill-forest"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "16,4 18.2,13.8 28,16 18.2,18.2 16,28 13.8,18.2 4,16 13.8,13.8",
				className: "fill-forest-fg"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "16",
				cy: "16",
				r: "2.4",
				className: "fill-forest"
			})
		]
	});
}
function Onboarding() {
	const profile = useCeoStore((s) => s.profile);
	const setProfile = useCeoStore((s) => s.setProfile);
	const complete = useCeoStore((s) => s.completeOnboarding);
	const loadDemo = useCeoStore((s) => s.loadDemo);
	const [step, setStep] = (0, import_react.useState)(0);
	const canNext = step === 0 || step === 1 && profile.name.trim().length > 1 && profile.company.trim().length > 1 || step === 2;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative min-h-dvh bg-bg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex min-h-dvh max-w-xl flex-col justify-center px-5 py-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-10 flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg leading-none text-ink",
						children: "Nakhoda"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs uppercase tracking-[0.16em] text-subtle",
						children: "Sistem operasi CEO"
					})] })]
				}),
				step === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "animate-in",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-4xl leading-tight text-ink md:text-5xl",
							children: "Jabatan CEO bukan gelar. Itu sistem."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-prose text-base text-muted",
							children: "Nakhoda adalah kerangka kerja lengkap untuk mengarahkan perusahaan: delapan pilar, ritme operasi, kualitas keputusan, mesin orang, dan disiplin diri. Bukan motivasi. Mekanisme."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-8 space-y-3 text-sm text-ink",
							children: [
								"Diagnostik 32 pertanyaan di delapan pilar",
								"Ritme harian, mingguan, bulanan, kuartalan",
								"Log keputusan, prioritas, scorecard, rencana 90 hari",
								"Panduan lengkap ada di menu setelah Anda masuk"
							].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-1.5 shrink-0 rounded-full bg-forest" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
							}, item))
						})
					]
				}),
				step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl text-ink md:text-4xl",
						children: "Siapa yang memegang kemudi?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: "Data tersimpan di perangkat Anda. Tidak ada akun."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mb-1.5 block text-xs font-medium uppercase tracking-[0.14em] text-subtle",
									children: "Nama"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: profile.name,
									onChange: (e) => setProfile({ name: e.target.value }),
									placeholder: "Nama Anda",
									autoFocus: true
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mb-1.5 block text-xs font-medium uppercase tracking-[0.14em] text-subtle",
									children: "Perusahaan"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: profile.company,
									onChange: (e) => setProfile({ company: e.target.value }),
									placeholder: "Nama perusahaan"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
								className: "mb-2 text-xs font-medium uppercase tracking-[0.14em] text-subtle",
								children: "Peran"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: ROLES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setProfile({ role: r.id }),
									className: cn("h-10 rounded-full border px-3 text-sm transition-colors duration-150", profile.role === r.id ? "border-forest bg-forest text-forest-fg" : "border-border bg-surface text-muted hover:border-border-strong"),
									children: r.label
								}, r.id))
							})] })
						]
					})
				] }),
				step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl text-ink md:text-4xl",
						children: "Di tahap mana perusahaan Anda?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: "Pilarnya sama. Tekanannya berbeda. Ini menajamkan briefing di kokpit."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-2",
						children: STAGES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setProfile({ stage: s.id }),
							className: cn("rounded-lg border px-4 py-3 text-left transition-colors duration-150", profile.stage === s.id ? "border-forest bg-forest/8" : "border-border bg-surface hover:border-border-strong"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium text-ink",
								children: s.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: s.hint
							})]
						}, s.id))
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-col gap-3 sm:flex-row sm:items-center",
					children: [step > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: () => setStep((s) => s - 1),
						children: "Kembali"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "sm:ml-auto",
						disabled: !canNext,
						onClick: () => {
							if (step < 2) setStep((s) => s + 1);
							else complete();
						},
						children: step === 0 ? "Masuk ke sistem" : step === 1 ? "Lanjut" : "Buka kokpit"
					})]
				}),
				step === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "mt-6 self-start text-sm text-muted underline-offset-4 hover:text-ink hover:underline",
					onClick: () => {
						setProfile({
							name: "Anda",
							company: "Perusahaan Contoh",
							role: "founder-ceo",
							stage: "series-a",
							onboarded: true
						});
						loadDemo();
					},
					children: "Jelajahi dengan data contoh"
				})
			]
		})
	});
}
var NAV = [
	{
		to: "/",
		label: "Kokpit",
		icon: Compass,
		group: "Operasi"
	},
	{
		to: "/ritme",
		label: "Ritme",
		icon: CalendarClock,
		group: "Operasi"
	},
	{
		to: "/prioritas",
		label: "Prioritas",
		icon: Target,
		group: "Operasi"
	},
	{
		to: "/scorecard",
		label: "Scorecard",
		icon: Gauge,
		group: "Operasi"
	},
	{
		to: "/rencana",
		label: "90 Hari",
		icon: Flag,
		group: "Operasi"
	},
	{
		to: "/pilar",
		label: "8 Pilar",
		icon: Layers,
		group: "Kepemimpinan"
	},
	{
		to: "/diagnostik",
		label: "Diagnostik",
		icon: Activity,
		group: "Kepemimpinan"
	},
	{
		to: "/keputusan",
		label: "Keputusan",
		icon: Scale,
		group: "Kepemimpinan"
	},
	{
		to: "/tim",
		label: "Tim",
		icon: Users,
		group: "Kepemimpinan"
	},
	{
		to: "/jurnal",
		label: "Jurnal",
		icon: BookOpen,
		group: "Refleksi"
	},
	{
		to: "/panduan",
		label: "Panduan",
		icon: CircleHelp,
		group: "Refleksi"
	},
	{
		to: "/playbook",
		label: "Playbook",
		icon: ScrollText,
		group: "Refleksi"
	}
];
var MOBILE_PRIMARY = [
	"/",
	"/pilar",
	"/ritme",
	"/diagnostik"
];
function Shell({ children }) {
	const [ready, setReady] = (0, import_react.useState)(false);
	const [moreOpen, setMoreOpen] = (0, import_react.useState)(false);
	const [settingsOpen, setSettingsOpen] = (0, import_react.useState)(false);
	const onboarded = useCeoStore((s) => s.profile.onboarded);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		const finish = () => {
			if (!cancelled) setReady(true);
		};
		const persist = useCeoStore.persist;
		if (!persist) {
			finish();
			return;
		}
		const unsub = persist.onFinishHydration(finish);
		try {
			const result = persist.rehydrate();
			if (result && typeof result.then === "function") Promise.resolve(result).then(finish, finish);
		} catch {
			finish();
		}
		if (persist.hasHydrated()) finish();
		const safety = window.setTimeout(finish, 400);
		return () => {
			cancelled = true;
			unsub();
			window.clearTimeout(safety);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		setMoreOpen(false);
	}, [pathname]);
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-dvh items-center justify-center bg-bg text-muted",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { className: "size-7" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm tracking-wide",
				children: "Nakhoda"
			})]
		})
	});
	if (!onboarded) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Onboarding, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "fixed inset-y-0 left-0 z-30 hidden w-56 flex-col border-r border-border bg-surface md:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5 px-5 py-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { className: "size-8" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-base leading-none",
							children: "Nakhoda"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs uppercase tracking-[0.18em] text-subtle",
							children: "CEO OS"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavList, { pathname }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-auto border-t border-border p-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setSettingsOpen(true),
							className: "flex h-11 w-full items-center gap-2 rounded-md px-3 text-sm text-muted hover:bg-surface-2 hover:text-ink",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings2, { className: "size-4" }), "Profil & data"]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-20 flex items-center justify-between border-b border-border bg-bg/90 px-4 py-3 backdrop-blur-sm md:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { className: "size-7" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-base",
						children: "Nakhoda"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					onClick: () => setSettingsOpen(true),
					"aria-label": "Pengaturan",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings2, { className: "size-5" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "md:pl-56",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-5xl px-4 pb-28 pt-6 md:px-8 md:pb-16 md:pt-10",
					children
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "fixed inset-x-0 bottom-0 z-30 border-t border-border bg-surface/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-sm md:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "grid grid-cols-5",
					children: [MOBILE_PRIMARY.map((to) => {
						const item = NAV.find((n) => n.to === to);
						const Icon = item.icon;
						const active = pathname === to || to !== "/" && pathname.startsWith(to);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to,
							className: cn("flex h-14 flex-col items-center justify-center gap-0.5 text-xs", active ? "text-forest" : "text-muted"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" }), item.label]
						}) }, to);
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setMoreOpen(true),
						className: cn("flex h-14 w-full flex-col items-center justify-center gap-0.5 text-xs", moreOpen ? "text-forest" : "text-muted"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" }), "Lainnya"]
					}) })]
				})
			}),
			moreOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-40 md:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "absolute inset-0 bg-ink/30",
					"aria-label": "Tutup",
					onClick: () => setMoreOpen(false)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-x-0 bottom-0 rounded-t-xl border border-border bg-surface p-4 pb-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: "Semua ruang"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setMoreOpen(false),
							"aria-label": "Tutup",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5 text-muted" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavList, {
						pathname,
						compact: true
					})]
				})]
			}),
			settingsOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsSheet, { onClose: () => setSettingsOpen(false) })
		]
	});
}
function NavList({ pathname, compact }) {
	let lastGroup = "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: cn("flex-1 overflow-y-auto px-3", compact && "max-h-[70vh]"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-0.5",
			children: NAV.map((item) => {
				const Icon = item.icon;
				const active = item.to === "/" ? pathname === "/" : pathname === item.to || pathname.startsWith(`${item.to}/`);
				const showGroup = item.group !== lastGroup;
				lastGroup = item.group;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [showGroup && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "px-3 pb-1 pt-4 text-xs font-medium uppercase tracking-[0.16em] text-subtle",
					children: item.group
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: item.to,
					className: cn("flex h-10 items-center gap-2.5 rounded-md px-3 text-sm transition-colors duration-150", active ? "bg-forest text-forest-fg" : "text-muted hover:bg-surface-2 hover:text-ink"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }), item.label]
				})] }, item.to);
			})
		})
	});
}
function SettingsSheet({ onClose }) {
	const profile = useCeoStore((s) => s.profile);
	const setProfile = useCeoStore((s) => s.setProfile);
	const loadDemo = useCeoStore((s) => s.loadDemo);
	const resetAll = useCeoStore((s) => s.resetAll);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "absolute inset-0 bg-ink/35",
			"aria-label": "Tutup",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-x-0 bottom-0 max-h-[90vh] overflow-y-auto rounded-t-xl border border-border bg-surface p-5 md:inset-auto md:right-6 md:top-6 md:bottom-auto md:w-[28rem] md:rounded-xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-5 flex items-start justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl",
						children: "Profil"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted",
						children: [
							ROLE_LABEL[profile.role],
							" · ",
							STAGE_LABEL[profile.stage]
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						"aria-label": "Tutup",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5 text-muted" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1.5 block text-xs uppercase tracking-[0.14em] text-subtle",
							children: "Nama"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: profile.name,
							onChange: (e) => setProfile({ name: e.target.value })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1.5 block text-xs uppercase tracking-[0.14em] text-subtle",
							children: "Perusahaan"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: profile.company,
							onChange: (e) => setProfile({ company: e.target.value })
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/panduan",
								onClick: onClose,
								children: "Buka panduan"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => {
								loadDemo();
								onClose();
							},
							children: "Muat skenario contoh"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							onClick: () => {
								if (confirm("Hapus semua data di perangkat ini?")) {
									resetAll();
									onClose();
								}
							},
							children: "Reset sistem"
						})
					]
				})
			]
		})]
	});
}
function AppLayout() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) });
}
//#endregion
export { AppLayout as component };
