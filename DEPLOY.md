# Nakhoda — pasang di EasyPanel

App ini buku kerja CEO. Data tetap tersimpan di browser pengunjung (belum ada akun / sinkron antar perangkat).

## Cara upload

1. Buat service **App** baru di EasyPanel.
2. **Source** → **Upload** → unggah file zip ini.
3. **Build** → pilih **Dockerfile** (biarkan path `Dockerfile`).
4. **Domains** → tambah domain. **Target port: 3000**.
5. **Deploy**.

Kalau builder-nya Nixpacks, bukan Dockerfile: set start command `node .output/server/index.mjs` dan env `NITRO_PRESET=node-server`. Dockerfile lebih andal.

## Env (opsional)

Tidak wajib. App tidak butuh database.

```
NODE_ENV=production
PORT=3000
HOST=0.0.0.0
```

## Catatan

- Ganti browser atau perangkat = data terpisah (penyimpanan lokal).
- Build butuh Node 22.
- Jangan pilih builder “Dockerfile inline” — pakai file `Dockerfile` yang ada di zip.
