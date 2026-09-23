import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Panel, SectionKicker } from "@/components/empty-state";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_app/panduan")({ component: Panduan });

const TOC = [
  { id: "apa", label: "App ini buat apa" },
  { id: "bukan", label: "Yang bukan tugasnya" },
  { id: "mulai", label: "5 menit pertama" },
  { id: "14hari", label: "14 hari pertama" },
  { id: "ruang", label: "Cara pakai tiap ruang" },
  { id: "skor", label: "Arti skor 1–5" },
  { id: "kalender", label: "Kalender pemakaian" },
  { id: "data", label: "Data, contoh, reset" },
  { id: "salah", label: "Cara salah pakai" },
];

function Panduan() {
  return (
    <div className="space-y-10">
      <header>
        <SectionKicker>Manual operasi</SectionKicker>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">Cara memakai Produktif</h1>
        <p className="mt-3 max-w-prose text-muted">
          Ini bukan chatbot dan bukan AI. Ini buku kerja CEO yang bisa diklik. Isi, ulangi,
          tinjau. Perusahaan berubah dari ritme — bukan dari satu sesi semangat.
        </p>
      </header>

      <nav className="rounded-xl border border-border bg-surface p-5 shadow-soft">
        <p className="text-xs uppercase tracking-[0.16em] text-subtle">Isi</p>
        <ol className="mt-3 grid gap-2 sm:grid-cols-2">
          {TOC.map((item, i) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="flex items-baseline gap-3 text-sm text-ink hover:text-forest"
              >
                <span className="tabular-nums text-subtle">{String(i + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <section id="apa" className="scroll-mt-24 space-y-4">
        <SectionKicker>01</SectionKicker>
        <h2 className="font-display text-3xl">App ini buat apa, aslinya</h2>
        <p className="max-w-prose text-muted">
          Produktif menahan pekerjaan CEO yang biasanya hanya ada di kepala: arah, orang, eksekusi,
          keputusan, uang, produk, budaya, dan diri. Setiap ruang adalah mekanisme — daftar
          prioritas yang dibatasi, log keputusan, peta tim, scorecard, jurnal minggu.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <Panel>
            <p className="text-xs uppercase tracking-[0.14em] text-subtle">Diagnosa</p>
            <p className="mt-2 text-sm">32 pertanyaan, delapan pilar. Tahu di mana Anda lemah sebelum menambah ambisi.</p>
          </Panel>
          <Panel>
            <p className="text-xs uppercase tracking-[0.14em] text-subtle">Operasi</p>
            <p className="mt-2 text-sm">Ritme, prioritas, keputusan, tim, angka. Kerja mingguan yang terlihat.</p>
          </Panel>
          <Panel>
            <p className="text-xs uppercase tracking-[0.14em] text-subtle">Refleksi</p>
            <p className="mt-2 text-sm">Jurnal CEO dan playbook. Menulis memaksa jernih. Doktrin menahan ego.</p>
          </Panel>
        </div>
      </section>

      <section id="bukan" className="scroll-mt-24 space-y-4">
        <SectionKicker>02</SectionKicker>
        <h2 className="font-display text-3xl">Yang bukan tugasnya</h2>
        <ul className="max-w-prose space-y-2 text-sm text-muted">
          <li>Tidak ada AI yang menulis strategi atau menilai jawaban Anda.</li>
          <li>Tidak menggantikan CFO, board, atau percakapan 1:1 yang sungguhan.</li>
          <li>Tidak menyimpan data di cloud. Semua ada di perangkat ini. Ganti browser atau hapus data situs = hilang.</li>
          <li>Tidak menaikkan perusahaan sendirian. Yang menaikkan adalah keputusan yang Anda jalankan di luar layar.</li>
        </ul>
      </section>

      <section id="mulai" className="scroll-mt-24 space-y-4">
        <SectionKicker>03</SectionKicker>
        <h2 className="font-display text-3xl">5 menit pertama</h2>
        <ol className="space-y-4">
          <Step n="1" title="Pilih pintu">
            <strong className="text-ink">Masuk ke sistem</strong> kalau ini kerja sungguhan: isi nama, perusahaan, peran, tahap.
            <strong className="text-ink"> Jelajahi dengan data contoh</strong> kalau ingin lihat kokpit yang sudah hidup dulu.
          </Step>
          <Step n="2" title="Buka Kokpit">
            Itu briefing. Angka kesiapan, ritual minggu ini, prioritas berisiko, keputusan terbuka. Jangan isi semua ruangan hari ini.
          </Step>
          <Step n="3" title="Lanjut ke Diagnostik">
            Lima belas menit. Jujur. Inflasi skor hanya menipu Anda.
          </Step>
        </ol>
        <div className="flex flex-wrap gap-2">
          <Button asChild>
            <Link to="/diagnostik">Buka diagnostik</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/">Ke kokpit</Link>
          </Button>
        </div>
      </section>

      <section id="14hari" className="scroll-mt-24 space-y-4">
        <SectionKicker>04</SectionKicker>
        <h2 className="font-display text-3xl">14 hari pertama — urutan yang benar</h2>
        <p className="max-w-prose text-sm text-muted">
          Kalau dikerjakan acak, Produktif jadi daftar to-do. Ikuti urutan ini sekali. Setelah itu, jadwal rutin yang memegang.
        </p>
        <ol className="space-y-3">
          {[
            ["Hari 1", "Diagnostik tuntas. Jangan berhenti di tengah."],
            ["Hari 1", "Di hasil: Masukkan ke rencana 90 hari."],
            ["Hari 2", "Buka 2 pilar terlemah. Baca anti-pola. Tulis catatan."],
            ["Hari 2–3", "Sunting rencana 90 hari sampai tema-nya satu kalimat yang memaksa pilihan."],
            ["Hari 3", "Tulis maksimal 5 prioritas perusahaan. Satu hasil, satu pemilik."],
            ["Hari 4", "Isi 5–9 angka di Scorecard. Kalau tidak hafal, itu data pertama yang harus ada."],
            ["Hari 4–5", "Masukkan laporan langsung di Tim. Plot kinerja × potensi. Jadwalkan 1:1."],
            ["Hari 5", "Catat 1–3 keputusan yang tertahan di meja Anda."],
            ["Tiap hari", "Centang ritme. Jumat: isi Jurnal."],
          ].map((row, i) => (
            <li key={i} className="grid gap-1 rounded-lg border border-border bg-surface px-4 py-3 sm:grid-cols-[7rem_1fr]">
              <span className="text-xs font-medium uppercase tracking-[0.12em] text-subtle">{row[0]}</span>
              <span className="text-sm">{row[1]}</span>
            </li>
          ))}
        </ol>
      </section>

      <section id="ruang" className="scroll-mt-24 space-y-4">
        <SectionKicker>05</SectionKicker>
        <h2 className="font-display text-3xl">Cara pakai tiap ruang</h2>
        <div className="grid gap-3">
          {ROOMS.map((r) => (
            <article key={r.to} className="rounded-xl border border-border bg-surface p-5 shadow-soft">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-2xl">{r.name}</h3>
                <Badge>{r.cadence}</Badge>
              </div>
              <p className="mt-2 text-sm text-muted">{r.job}</p>
              <p className="mt-3 text-sm">
                <span className="text-subtle">Cara · </span>
                {r.how}
              </p>
              <p className="mt-2 text-sm">
                <span className="text-subtle">Selesai kalau · </span>
                {r.done}
              </p>
              <Link to={r.to} className="mt-3 inline-block text-sm text-forest hover:underline">
                Buka {r.name}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section id="skor" className="scroll-mt-24 space-y-4">
        <SectionKicker>06</SectionKicker>
        <h2 className="font-display text-3xl">Arti skor 1–5</h2>
        <p className="max-w-prose text-sm text-muted">
          Diagnostik memakai skala ini. Nilai apa yang terjadi, bukan apa yang Anda harapkan terjadi.
        </p>
        <div className="overflow-x-auto rounded-xl border border-border bg-surface">
          <table className="w-full min-w-[28rem] text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs uppercase tracking-[0.12em] text-subtle">
                <th className="px-4 py-3 font-medium">Nilai</th>
                <th className="px-4 py-3 font-medium">Label</th>
                <th className="px-4 py-3 font-medium">Artinya</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1", "Lemah", "Tidak ada sistem. Bergantung pada heroics Anda."],
                ["2", "Berkembang", "Kadang jalan, sering lupa. Belum andal."],
                ["3", "Cukup", "Jalan jika Anda ada di ruangan. Belum menskala."],
                ["4", "Kuat", "Tim bisa menjalankan tanpa Anda di setiap rapat."],
                ["5", "Unggul", "Mekanisme hidup. Anda mengawasi, bukan memadamkan."],
              ].map((row) => (
                <tr key={row[0]} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-display text-lg tabular-nums text-forest">{row[0]}</td>
                  <td className="px-4 py-3 font-medium">{row[1]}</td>
                  <td className="px-4 py-3 text-muted">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="max-w-prose text-sm text-muted">
          Kesiapan di kokpit adalah rata-rata delapan pilar. Di bawah 3: bangun ritme sebelum menambah target.
          3–4: perkuat yang paling lemah. 4+: jaga ketajaman, jangan lengah.
        </p>
      </section>

      <section id="kalender" className="scroll-mt-24 space-y-4">
        <SectionKicker>07</SectionKicker>
        <h2 className="font-display text-3xl">Kalender pemakaian</h2>
        <div className="grid gap-3 md:grid-cols-2">
          <Panel>
            <h3 className="font-medium">Setiap hari</h3>
            <p className="mt-2 text-sm text-muted">Satu pekerjaan CEO sebelum inbox. Tutup hari 3 baris. Tidak perlu buka semua menu.</p>
          </Panel>
          <Panel>
            <h3 className="font-medium">Setiap minggu</h3>
            <p className="mt-2 text-sm text-muted">
              Senin: buka Kokpit + Ritme. Tengah minggu: 1:1 dan pelanggan. Jumat: Jurnal + centang ritual yang tersisa.
            </p>
          </Panel>
          <Panel>
            <h3 className="font-medium">Setiap bulan</h3>
            <p className="mt-2 text-sm text-muted">Audit kalender, peta bakat, P&L vs prioritas. Buka pilar yang kuning.</p>
          </Panel>
          <Panel>
            <h3 className="font-medium">Setiap kuartal</h3>
            <p className="mt-2 text-sm text-muted">Ulangi diagnostik. Segarkan 90 hari dan 5 prioritas. Talent review. Offsite.</p>
          </Panel>
        </div>
      </section>

      <section id="data" className="scroll-mt-24 space-y-4">
        <SectionKicker>08</SectionKicker>
        <h2 className="font-display text-3xl">Data, contoh, reset</h2>
        <ul className="max-w-prose space-y-2 text-sm text-muted">
          <li>
            Semua isian tersimpan otomatis di perangkat ini. Tidak ada akun, tidak ada sinkron antar HP dan laptop.
          </li>
          <li>
            <strong className="text-ink">Muat skenario contoh</strong> ada di Profil & data. Memakai perusahaan fiktif supaya Anda melihat radar, prioritas, dan tim yang sudah hidup.
          </li>
          <li>
            <strong className="text-ink">Reset sistem</strong> menghapus semuanya dan mengembalikan layar pembuka. Tidak bisa dibatalkan.
          </li>
          <li>Profil (nama, perusahaan) disunting di ikon gerigi di HP, atau tombol Profil & data di bawah menu kiri.</li>
        </ul>
      </section>

      <section id="salah" className="scroll-mt-24 space-y-4">
        <SectionKicker>09</SectionKicker>
        <h2 className="font-display text-3xl">Cara salah pakai</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {[
            ["Isi 12 prioritas", "Lima adalah batas. Enam berarti Anda belum memilih."],
            ["Nilai semua 5", "Diagnostik yang sopan tidak mengubah perusahaan."],
            ["Buka semua menu tiap hari", "Kokpit + ritme cukup. Sisanya punya cadence-nya sendiri."],
            ["Biarkan keputusan di chat", "Yang tidak masuk log akan dibuka ulang minggu depan."],
            ["Tunda 1:1", "Sinyal orang membusuk lebih cepat daripada spreadsheet."],
            ["Pakai sekali lalu lupa", "Tanpa ritme mingguan, ini hanya tes kepribadian yang mahal."],
          ].map((a) => (
            <Panel key={a[0]}>
              <h3 className="font-medium">{a[0]}</h3>
              <p className="mt-2 text-sm text-muted">{a[1]}</p>
            </Panel>
          ))}
        </div>
      </section>

      <Panel className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-display text-2xl">Mulai dari satu gerakan</h2>
          <p className="mt-1 text-sm text-muted">Diagnostik dulu. Ritme menyusul. Playbook kalau butuh doktrin.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button asChild>
            <Link to="/diagnostik">Diagnostik</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/ritme">Ritme</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link to="/playbook">Playbook</Link>
          </Button>
        </div>
      </Panel>
    </div>
  );
}

function Step({ n, title, children }: { n: string; title: string; children: ReactNode }) {
  return (
    <li className="flex gap-4">
      <span className="font-display text-2xl text-subtle tabular-nums">{n}</span>
      <div>
        <p className="font-medium">{title}</p>
        <p className="mt-1 text-sm text-muted">{children}</p>
      </div>
    </li>
  );
}

const ROOMS = [
  {
    name: "Kokpit",
    to: "/",
    cadence: "Harian / Senin",
    job: "Briefing. Bukan tempat kerja dalam.",
    how: "Baca sinyal. Klik yang merah atau kuning. Jangan tinggal di sini 40 menit.",
    done: "Anda tahu 1 pekerjaan CEO hari ini dan 1 yang macet.",
  },
  {
    name: "Diagnostik",
    to: "/diagnostik",
    cadence: "Kuartalan",
    job: "Peta kejujuran delapan pilar.",
    how: "Satu pilar, empat pertanyaan, 1–5. Lanjut hanya jika keempatnya terisi. Di hasil, masukkan ke 90 hari.",
    done: "Ada skor tiap pilar dan rencana yang lahir dari yang terlemah.",
  },
  {
    name: "8 Pilar",
    to: "/pilar",
    cadence: "Saat pilar kuning",
    job: "Playbook per pekerjaan CEO: ritme, anti-pola, pertanyaan untuk tim.",
    how: "Buka yang lemah. Kerjakan gerakan minggu ini. Tulis catatan pribadi di bawah.",
    done: "Anda punya satu gerakan konkret, bukan hanya wawasan.",
  },
  {
    name: "Ritme",
    to: "/ritme",
    cadence: "Mingguan",
    job: "Delapan ritual yang membuat perusahaan mewarisi kalender Anda.",
    how: "Centang yang sudah terjadi. Yang tidak tercentang di Jumat adalah utang, bukan kesibukan.",
    done: "Minimal blok berpikir, rapat staf, dan 1:1 jalan minggu ini.",
  },
  {
    name: "Prioritas",
    to: "/prioritas",
    cadence: "Kuartalan, tinjau mingguan",
    job: "Paling banyak lima hasil perusahaan.",
    how: "Tulis hasil, bukan aktivitas. Satu pemilik. Geser status dan kemajuan tiap rapat staf.",
    done: "Tim senior bisa menghafal kelimanya tanpa slide.",
  },
  {
    name: "90 Hari",
    to: "/rencana",
    cadence: "Kuartalan",
    job: "Tema + hasil yang harus benar + yang harus berhenti.",
    how: "Isi dari diagnostik, lalu sunting. Centang hasil yang sudah terbukti, bukan yang sudah sibuk.",
    done: "Satu kalimat tema yang memaksa Anda menolak pekerjaan lain.",
  },
  {
    name: "Scorecard",
    to: "/scorecard",
    cadence: "Mingguan",
    job: "Satu sumber kebenaran. 5–9 angka.",
    how: "Pilih leading indicator: kas, pelanggan, orang, unit economics. Hijau/kuning/merah vs target.",
    done: "Rapat staf membuka papan ini, bukan slide masing-masing fungsi.",
  },
  {
    name: "Keputusan",
    to: "/keputusan",
    cadence: "Saat memutuskan",
    job: "Log putusan material. RAPID. Pintu satu arah vs dua arah.",
    how: "Satu arah: tulis konteks dan opsi, jangan buru-buru. Dua arah: cepat, delegasikan, beri tanggal tinjau.",
    done: "Keputusan mahal punya pemilik, status, dan tidak dibuka ulang tanpa data baru.",
  },
  {
    name: "Tim",
    to: "/tim",
    cadence: "Mingguan 1:1, bulanan peta",
    job: "Kursi kunci. Kinerja × potensi.",
    how: "Tambah laporan langsung. Geser skor. Tandai 1:1. Kiri-bawah yang dibiarkan adalah pajak pada A-player.",
    done: "Setiap nama punya aksi keep / coach / move, bukan hanya kesan.",
  },
  {
    name: "Jurnal",
    to: "/jurnal",
    cadence: "Jumat, 60 menit",
    job: "Tinjauan CEO. Menulis memaksa jernih.",
    how: "Empat prompt + energi 1–5. Tersimpan per minggu. Jangan mengisi novel.",
    done: "Ada taruhan minggu depan yang spesifik, bukan daftar belanja.",
  },
  {
    name: "Playbook",
    to: "/playbook",
    cadence: "Saat ragu",
    job: "12 prinsip, anti-pola, bacaan. Doktrin, bukan manual klik.",
    how: "Baca satu prinsip yang bertentangan dengan kalender Anda minggu ini.",
    done: "Anda mengubah satu perilaku, bukan menambah kutipan di slide.",
  },
] as const;
