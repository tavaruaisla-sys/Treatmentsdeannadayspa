# Rencana Redesain Card Treatment Option

Rencana ini bertujuan untuk memperbarui tampilan card opsi treatment di halaman Home sesuai dengan permintaan user.

## Analisis Kondisi Saat Ini
- File yang akan dimodifikasi: [ServiceSection.tsx](file:///Users/febriromadon/Downloads/Hercules-App/src/pages/home/_components/ServiceSection.tsx).
- Komponen `TreatmentCardItem` memiliki daftar opsi treatment yang saat ini menggunakan background putih solid (`bg-white`), memiliki thumbnail gambar, dan menggunakan warna teks default (`text-foreground`).
- Card ini berada di atas background gambar dengan lapisan gelap (`bg-black/25`).

## Perubahan yang Diusulkan

### 1. Modifikasi Background Card Opsi
- **File**: [ServiceSection.tsx](file:///Users/febriromadon/Downloads/Hercules-App/src/pages/home/_components/ServiceSection.tsx)
- **Perubahan**: Mengganti class `bg-white` menjadi kombinasi background transparan dan blur.
- **Detail**: Menggunakan `bg-white/10` (atau `bg-black/20` tergantung kontras terbaik) dengan `backdrop-blur-md` dan border tipis untuk memberikan efek glassmorphism yang elegan.

### 2. Penyesuaian Warna Teks
- **File**: [ServiceSection.tsx](file:///Users/febriromadon/Downloads/Hercules-App/src/pages/home/_components/ServiceSection.tsx)
- **Perubahan**: Mengubah warna teks durasi dan harga agar tetap terbaca jelas di atas background baru.
- **Detail**: Mengganti `text-foreground` menjadi `text-white` dan `text-muted-foreground` menjadi `text-white/70`.

### 3. Penghapusan Thumbnail
- **File**: [ServiceSection.tsx](file:///Users/febriromadon/Downloads/Hercules-App/src/pages/home/_components/ServiceSection.tsx)
- **Perubahan**: Menghapus elemen thumbnail gambar (lingkaran di sebelah kiri).
- **Detail**: Menghapus blok kode dari baris 97 hingga 104.

## Langkah-langkah Implementasi
1. Buka file [ServiceSection.tsx](file:///Users/febriromadon/Downloads/Hercules-App/src/pages/home/_components/ServiceSection.tsx).
2. Temukan bagian iterasi `card.options.map`.
3. Hapus elemen `div` yang membungkus thumbnail gambar.
4. Perbarui class pada `div` pembungkus opsi treatment untuk menambahkan efek blur dan transparansi.
5. Perbarui class pada elemen teks durasi dan harga.
6. Sesuaikan padding jika diperlukan setelah thumbnail dihapus.

## Verifikasi
1. Jalankan server development (`npm run dev`).
2. Buka preview di browser.
3. Pastikan card opsi treatment memiliki tampilan transparan blur (glassmorphism).
4. Pastikan teks berwarna putih/terang dan terbaca dengan jelas.
5. Pastikan thumbnail gambar sudah tidak muncul.
