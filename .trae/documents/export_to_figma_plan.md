# Rencana Ekspor Halaman ke Figma

Saat ini, tidak ada fitur bawaan dalam kode untuk mengekspor halaman langsung ke Figma. Namun, Anda dapat menggunakan metode berikut untuk memindahkan desain dari kode ke Figma.

## Analisis Kondisi Saat Ini
- Server development sedang berjalan di `http://localhost:5173/`.
- Kode aplikasi menggunakan React + Vite + Tailwind CSS.
- Tidak ada library ekspor Figma (seperti `html-to-figma` API) yang terpasang di `package.json`.

## Metode yang Direkomendasikan

### 1. Menggunakan Plugin Figma "html.to.design" (Paling Mudah)
Ini adalah cara tercepat untuk mengubah halaman web yang sedang berjalan menjadi layer Figma.
- **Langkah**:
  1. Buka Figma.
  2. Cari dan jalankan plugin **"html.to.design"**.
  3. Masukkan URL lokal Anda: `http://localhost:5173/`.
  4. Klik **Import**.
- **Catatan**: Pastikan server lokal Anda tetap menyala selama proses ini.

### 2. Menggunakan Plugin Figma "HTML to Figma"
Mirip dengan plugin di atas, plugin ini memungkinkan Anda mengimpor elemen web.
- **Langkah**:
  1. Jalankan plugin di Figma.
  2. Gunakan extension Chrome/Edge jika plugin meminta untuk menangkap tampilan web.

## Langkah-langkah Bantuan dari Sisi Kode
Jika Anda ingin saya mempermudah proses ini, saya dapat:
1. **Membersihkan Tampilan**: Menghilangkan elemen yang tidak perlu (seperti debug tools) agar hasil ekspor lebih bersih.
2. **Memastikan Asset Siap**: Memastikan semua gambar dan font terload dengan benar agar tidak pecah saat diimpor ke Figma.

## Kesimpulan
Anda tidak bisa mengekspornya langsung dari tombol di IDE, tetapi Anda bisa menggunakan plugin Figma dengan memasukkan URL server lokal yang sedang berjalan.
