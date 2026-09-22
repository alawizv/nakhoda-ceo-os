import { v as Link, z as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as Button } from "./_ssr/button-Dz_MmIGV.mjs";
import { n as Panel, r as SectionKicker } from "./_ssr/empty-state-VUEg7Anj.mjs";
import { t as Badge } from "./_ssr/badge-BJd_y5BG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.panduan-BnONuJg9.js
var import_jsx_runtime = require_jsx_runtime();
var TOC = [
	{
		id: "apa",
		label: "App ini buat apa"
	},
	{
		id: "bukan",
		label: "Yang bukan tugasnya"
	},
	{
		id: "mulai",
		label: "5 menit pertama"
	},
	{
		id: "14hari",
		label: "14 hari pertama"
	},
	{
		id: "ruang",
		label: "Cara pakai tiap ruang"
	},
	{
		id: "skor",
		label: "Arti skor 1–5"
	},
	{
		id: "kalender",
		label: "Kalender pemakaian"
	},
	{
		id: "data",
		label: "Data, contoh, reset"
	},
	{
		id: "salah",
		label: "Cara salah pakai"
	}
];
function Panduan() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "Manual operasi" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-4xl md:text-5xl",
					children: "Cara memakai Nakhoda"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-prose text-muted",
					children: "Ini bukan chatbot dan bukan AI. Ini buku kerja CEO yang bisa diklik. Isi, ulangi, tinjau. Perusahaan berubah dari ritme — bukan dari satu sesi semangat."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "rounded-xl border border-border bg-surface p-5 shadow-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.16em] text-subtle",
					children: "Isi"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-3 grid gap-2 sm:grid-cols-2",
					children: TOC.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `#${item.id}`,
						className: "flex items-baseline gap-3 text-sm text-ink hover:text-forest",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums text-subtle",
							children: String(i + 1).padStart(2, "0")
						}), item.label]
					}) }, item.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "apa",
				className: "scroll-mt-24 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "01" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "App ini buat apa, aslinya"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-prose text-muted",
						children: "Nakhoda menahan pekerjaan CEO yang biasanya hanya ada di kepala: arah, orang, eksekusi, keputusan, uang, produk, budaya, dan diri. Setiap ruang adalah mekanisme — daftar prioritas yang dibatasi, log keputusan, peta tim, scorecard, jurnal minggu."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 md:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.14em] text-subtle",
								children: "Diagnosa"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm",
								children: "32 pertanyaan, delapan pilar. Tahu di mana Anda lemah sebelum menambah ambisi."
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.14em] text-subtle",
								children: "Operasi"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm",
								children: "Ritme, prioritas, keputusan, tim, angka. Kerja mingguan yang terlihat."
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.14em] text-subtle",
								children: "Refleksi"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm",
								children: "Jurnal CEO dan playbook. Menulis memaksa jernih. Doktrin menahan ego."
							})] })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "bukan",
				className: "scroll-mt-24 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "02" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "Yang bukan tugasnya"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "max-w-prose space-y-2 text-sm text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Tidak ada AI yang menulis strategi atau menilai jawaban Anda." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Tidak menggantikan CFO, board, atau percakapan 1:1 yang sungguhan." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Tidak menyimpan data di cloud. Semua ada di perangkat ini. Ganti browser atau hapus data situs = hilang." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Tidak menaikkan perusahaan sendirian. Yang menaikkan adalah keputusan yang Anda jalankan di luar layar." })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "mulai",
				className: "scroll-mt-24 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "03" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "5 menit pertama"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Step, {
								n: "1",
								title: "Pilih pintu",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-ink",
										children: "Masuk ke sistem"
									}),
									" kalau ini kerja sungguhan: isi nama, perusahaan, peran, tahap.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-ink",
										children: " Jelajahi dengan data contoh"
									}),
									" kalau ingin lihat kokpit yang sudah hidup dulu."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step, {
								n: "2",
								title: "Buka Kokpit",
								children: "Itu briefing. Angka kesiapan, ritual minggu ini, prioritas berisiko, keputusan terbuka. Jangan isi semua ruangan hari ini."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step, {
								n: "3",
								title: "Lanjut ke Diagnostik",
								children: "Lima belas menit. Jujur. Inflasi skor hanya menipu Anda."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/diagnostik",
								children: "Buka diagnostik"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								children: "Ke kokpit"
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "14hari",
				className: "scroll-mt-24 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "04" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "14 hari pertama — urutan yang benar"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-prose text-sm text-muted",
						children: "Kalau dikerjakan acak, Nakhoda jadi daftar to-do. Ikuti urutan ini sekali. Setelah itu, ritme mingguan yang memegang."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "space-y-3",
						children: [
							["Hari 1", "Diagnostik tuntas. Jangan berhenti di tengah."],
							["Hari 1", "Di hasil: Masukkan ke rencana 90 hari."],
							["Hari 2", "Buka 2 pilar terlemah. Baca anti-pola. Tulis catatan."],
							["Hari 2–3", "Sunting rencana 90 hari sampai tema-nya satu kalimat yang memaksa pilihan."],
							["Hari 3", "Tulis maksimal 5 prioritas perusahaan. Satu hasil, satu pemilik."],
							["Hari 4", "Isi 5–9 angka di Scorecard. Kalau tidak hafal, itu data pertama yang harus ada."],
							["Hari 4–5", "Masukkan laporan langsung di Tim. Plot kinerja × potensi. Jadwalkan 1:1."],
							["Hari 5", "Catat 1–3 keputusan yang tertahan di meja Anda."],
							["Tiap hari", "Centang ritme. Jumat: isi Jurnal."]
						].map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "grid gap-1 rounded-lg border border-border bg-surface px-4 py-3 sm:grid-cols-[7rem_1fr]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-medium uppercase tracking-[0.12em] text-subtle",
								children: row[0]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm",
								children: row[1]
							})]
						}, i))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "ruang",
				className: "scroll-mt-24 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "05" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "Cara pakai tiap ruang"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-3",
						children: ROOMS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-xl border border-border bg-surface p-5 shadow-soft",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-baseline justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-2xl",
										children: r.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: r.cadence })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted",
									children: r.job
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-subtle",
										children: "Cara · "
									}), r.how]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-subtle",
										children: "Selesai kalau · "
									}), r.done]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: r.to,
									className: "mt-3 inline-block text-sm text-forest hover:underline",
									children: ["Buka ", r.name]
								})
							]
						}, r.to))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "skor",
				className: "scroll-mt-24 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "06" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "Arti skor 1–5"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-prose text-sm text-muted",
						children: "Diagnostik memakai skala ini. Nilai apa yang terjadi, bukan apa yang Anda harapkan terjadi."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto rounded-xl border border-border bg-surface",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full min-w-[28rem] text-left text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-border text-xs uppercase tracking-[0.12em] text-subtle",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 font-medium",
										children: "Nilai"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 font-medium",
										children: "Label"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 font-medium",
										children: "Artinya"
									})
								]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: [
								[
									"1",
									"Lemah",
									"Tidak ada sistem. Bergantung pada heroics Anda."
								],
								[
									"2",
									"Berkembang",
									"Kadang jalan, sering lupa. Belum andal."
								],
								[
									"3",
									"Cukup",
									"Jalan jika Anda ada di ruangan. Belum menskala."
								],
								[
									"4",
									"Kuat",
									"Tim bisa menjalankan tanpa Anda di setiap rapat."
								],
								[
									"5",
									"Unggul",
									"Mekanisme hidup. Anda mengawasi, bukan memadamkan."
								]
							].map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-border last:border-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 font-display text-lg tabular-nums text-forest",
										children: row[0]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 font-medium",
										children: row[1]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 text-muted",
										children: row[2]
									})
								]
							}, row[0])) })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-prose text-sm text-muted",
						children: "Kesiapan di kokpit adalah rata-rata delapan pilar. Di bawah 3: bangun ritme sebelum menambah target. 3–4: perkuat yang paling lemah. 4+: jaga ketajaman, jangan lengah."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "kalender",
				className: "scroll-mt-24 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "07" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "Kalender pemakaian"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 md:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-medium",
								children: "Setiap hari"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: "Satu pekerjaan CEO sebelum inbox. Tutup hari 3 baris. Tidak perlu buka semua menu."
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-medium",
								children: "Setiap minggu"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: "Senin: buka Kokpit + Ritme. Tengah minggu: 1:1 dan pelanggan. Jumat: Jurnal + centang ritual yang tersisa."
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-medium",
								children: "Setiap bulan"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: "Audit kalender, peta bakat, P&L vs prioritas. Buka pilar yang kuning."
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-medium",
								children: "Setiap kuartal"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: "Ulangi diagnostik. Segarkan 90 hari dan 5 prioritas. Talent review. Offsite."
							})] })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "data",
				className: "scroll-mt-24 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "08" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "Data, contoh, reset"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "max-w-prose space-y-2 text-sm text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Semua isian tersimpan otomatis di perangkat ini. Tidak ada akun, tidak ada sinkron antar HP dan laptop." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-ink",
								children: "Muat skenario contoh"
							}), " ada di Profil & data. Memakai perusahaan fiktif supaya Anda melihat radar, prioritas, dan tim yang sudah hidup."] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-ink",
								children: "Reset sistem"
							}), " menghapus semuanya dan mengembalikan layar pembuka. Tidak bisa dibatalkan."] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Profil (nama, perusahaan) disunting di ikon gerigi di HP, atau tombol Profil & data di bawah menu kiri." })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "salah",
				className: "scroll-mt-24 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "09" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "Cara salah pakai"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-3 md:grid-cols-2",
						children: [
							["Isi 12 prioritas", "Lima adalah batas. Enam berarti Anda belum memilih."],
							["Nilai semua 5", "Diagnostik yang sopan tidak mengubah perusahaan."],
							["Buka semua menu tiap hari", "Kokpit + ritme cukup. Sisanya punya cadence-nya sendiri."],
							["Biarkan keputusan di chat", "Yang tidak masuk log akan dibuka ulang minggu depan."],
							["Tunda 1:1", "Sinyal orang membusuk lebih cepat daripada spreadsheet."],
							["Pakai sekali lalu lupa", "Tanpa ritme mingguan, ini hanya tes kepribadian yang mahal."]
						].map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-medium",
							children: a[0]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: a[1]
						})] }, a[0]))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "flex flex-col gap-3 md:flex-row md:items-center md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Mulai dari satu gerakan"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "Diagnostik dulu. Ritme menyusul. Playbook kalau butuh doktrin."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/diagnostik",
								children: "Diagnostik"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/ritme",
								children: "Ritme"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "ghost",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/playbook",
								children: "Playbook"
							})
						})
					]
				})]
			})
		]
	});
}
function Step({ n, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "flex gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-2xl text-subtle tabular-nums",
			children: n
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-medium",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-muted",
			children
		})] })]
	});
}
var ROOMS = [
	{
		name: "Kokpit",
		to: "/",
		cadence: "Harian / Senin",
		job: "Briefing. Bukan tempat kerja dalam.",
		how: "Baca sinyal. Klik yang merah atau kuning. Jangan tinggal di sini 40 menit.",
		done: "Anda tahu 1 pekerjaan CEO hari ini dan 1 yang macet."
	},
	{
		name: "Diagnostik",
		to: "/diagnostik",
		cadence: "Kuartalan",
		job: "Peta kejujuran delapan pilar.",
		how: "Satu pilar, empat pertanyaan, 1–5. Lanjut hanya jika keempatnya terisi. Di hasil, masukkan ke 90 hari.",
		done: "Ada skor tiap pilar dan rencana yang lahir dari yang terlemah."
	},
	{
		name: "8 Pilar",
		to: "/pilar",
		cadence: "Saat pilar kuning",
		job: "Playbook per pekerjaan CEO: ritme, anti-pola, pertanyaan untuk tim.",
		how: "Buka yang lemah. Kerjakan gerakan minggu ini. Tulis catatan pribadi di bawah.",
		done: "Anda punya satu gerakan konkret, bukan hanya wawasan."
	},
	{
		name: "Ritme",
		to: "/ritme",
		cadence: "Mingguan",
		job: "Delapan ritual yang membuat perusahaan mewarisi kalender Anda.",
		how: "Centang yang sudah terjadi. Yang tidak tercentang di Jumat adalah utang, bukan kesibukan.",
		done: "Minimal blok berpikir, rapat staf, dan 1:1 jalan minggu ini."
	},
	{
		name: "Prioritas",
		to: "/prioritas",
		cadence: "Kuartalan, tinjau mingguan",
		job: "Paling banyak lima hasil perusahaan.",
		how: "Tulis hasil, bukan aktivitas. Satu pemilik. Geser status dan kemajuan tiap rapat staf.",
		done: "Tim senior bisa menghafal kelimanya tanpa slide."
	},
	{
		name: "90 Hari",
		to: "/rencana",
		cadence: "Kuartalan",
		job: "Tema + hasil yang harus benar + yang harus berhenti.",
		how: "Isi dari diagnostik, lalu sunting. Centang hasil yang sudah terbukti, bukan yang sudah sibuk.",
		done: "Satu kalimat tema yang memaksa Anda menolak pekerjaan lain."
	},
	{
		name: "Scorecard",
		to: "/scorecard",
		cadence: "Mingguan",
		job: "Satu sumber kebenaran. 5–9 angka.",
		how: "Pilih leading indicator: kas, pelanggan, orang, unit economics. Hijau/kuning/merah vs target.",
		done: "Rapat staf membuka papan ini, bukan slide masing-masing fungsi."
	},
	{
		name: "Keputusan",
		to: "/keputusan",
		cadence: "Saat memutuskan",
		job: "Log putusan material. RAPID. Pintu satu arah vs dua arah.",
		how: "Satu arah: tulis konteks dan opsi, jangan buru-buru. Dua arah: cepat, delegasikan, beri tanggal tinjau.",
		done: "Keputusan mahal punya pemilik, status, dan tidak dibuka ulang tanpa data baru."
	},
	{
		name: "Tim",
		to: "/tim",
		cadence: "Mingguan 1:1, bulanan peta",
		job: "Kursi kunci. Kinerja × potensi.",
		how: "Tambah laporan langsung. Geser skor. Tandai 1:1. Kiri-bawah yang dibiarkan adalah pajak pada A-player.",
		done: "Setiap nama punya aksi keep / coach / move, bukan hanya kesan."
	},
	{
		name: "Jurnal",
		to: "/jurnal",
		cadence: "Jumat, 60 menit",
		job: "Tinjauan CEO. Menulis memaksa jernih.",
		how: "Empat prompt + energi 1–5. Tersimpan per minggu. Jangan mengisi novel.",
		done: "Ada taruhan minggu depan yang spesifik, bukan daftar belanja."
	},
	{
		name: "Playbook",
		to: "/playbook",
		cadence: "Saat ragu",
		job: "12 prinsip, anti-pola, bacaan. Doktrin, bukan manual klik.",
		how: "Baca satu prinsip yang bertentangan dengan kalender Anda minggu ini.",
		done: "Anda mengubah satu perilaku, bukan menambah kutipan di slide."
	}
];
//#endregion
export { Panduan as component };
