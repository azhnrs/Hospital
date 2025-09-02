# 🏥 Hospital - Sistem Manajemen Pasien

Sistem manajemen pasien berbasis web modern yang dibangun dengan HTML, CSS, dan JavaScript. Aplikasi ini memungkinkan staf rumah sakit untuk mengelola data pasien secara efisien dengan antarmuka yang ramah pengguna dan penanganan data yang aman.

## 🌟 Fitur Utama

### Fungsionalitas Inti
- **Pendaftaran Pasien**: Menambahkan data pasien baru dengan informasi lengkap
- **Manajemen Data**: Edit, update, dan hapus data pasien
- **Tampilan Aman**: Sembunyikan/tampilkan data pasien dengan mekanisme kunci/buka kunci
- **Desain Responsif**: Bekerja dengan lancar di berbagai ukuran layar
- **Penyimpanan Real-time**: Data tersimpan sementara selama sesi aktif

### Field Informasi Pasien
- Nomor Rekam Medis
- Nama Pasien
- Alamat
- Penyakit/Kondisi
- Nomor Ruang
- Status Asuransi BPJS (4 kategori tersedia)
- Tanggal Masuk
- Tanggal Keluar

### Fitur Visual
- **Animasi Judul Dinamis**: Nama rumah sakit yang berubah warna
- **Background Blur**: Background bertema medis yang profesional
- **Tombol Interaktif**: Tombol dengan emoji untuk pengalaman pengguna yang lebih baik
- **Keamanan Data**: Fungsi tampil/sembunyikan dengan indikator gembok visual

## ⚠️ Penting: Penyimpanan Data

**Aplikasi ini menggunakan penyimpanan real-time berbasis sesi:**
- Data pasien disimpan sementara di memori selama sesi browser aktif
- Semua data akan **hilang sepenuhnya** ketika Anda:
  - Menutup tab browser
  - Keluar dari halaman
  - Menutup browser
- Dirancang untuk **keperluan demonstrasi dan pembelajaran**

## 🚀 Teknologi yang Digunakan

- **HTML5**: Struktur markup semantik
- **CSS3**: Styling modern dengan backdrop filter dan animasi
- **JavaScript**: Fungsionalitas interaktif dan manipulasi DOM
- **Penyimpanan Berbasis Sesi**: Penanganan data real-time tanpa penyimpanan permanen

## 📸 Screenshot

### Interface Utama
<img width="940" height="444" alt="image" src="https://github.com/user-attachments/assets/7896d3ef-c1e2-450a-9774-aa59e0e9802c" />

- Interface form yang bersih dan profesional untuk input data pasien
- Tampilan tabel aman dengan fungsi toggle

### Input Data
<img width="940" height="443" alt="image" src="https://github.com/user-attachments/assets/eed97c7d-5557-4328-98e0-54ae0aaa449d" />

- Form komprehensif dengan validasi
- Date picker untuk tanggal masuk/keluar
- Dropdown untuk kategori asuransi BPJS

### Manajemen Data
<img width="940" height="436" alt="image" src="https://github.com/user-attachments/assets/0fac9f29-0334-4e14-9291-d6908f282a6c" />

- Tampilan tabel untuk semua data pasien
- Aksi edit dan hapus untuk setiap record
- Desain tabel yang responsif

## 🛠️ Instalasi & Setup

1. **Clone repository**
   ```bash
   git clone https://github.com/azhnrs/Hospital.git
   cd Hospital
   ```

2. **Struktur File**
   ```
   Hospital/
   ├── index.html          # File HTML utama
   ├── styles.css          # CSS styling
   ├── script.js           # Fungsionalitas JavaScript
   └── README.md           # Dokumentasi
   ```

3. **Menjalankan Aplikasi**
   - Cukup buka `index.html` di browser modern manapun
   - Tidak perlu setup server - berjalan sepenuhnya di sisi client

## 💻 Panduan Penggunaan

### Menambahkan Pasien Baru
1. Isi semua field informasi pasien yang diperlukan
2. Pilih kategori asuransi BPJS yang sesuai
3. Pilih tanggal masuk dan tanggal keluar
4. Klik tombol "💾 Save" untuk menyimpan data

### Melihat Data Pasien
1. Klik tombol "🔒 Show" untuk menampilkan data pasien
2. Tombol berubah menjadi "🔓 Show" ketika data terlihat
3. Klik lagi untuk menyembunyikan informasi sensitif pasien

### Mengedit Data Pasien
1. Pastikan data pasien terlihat (tidak terkunci)
2. Klik tombol "Edit" di samping record yang diinginkan
3. Field form akan terisi dengan data yang sudah ada
4. Lakukan perubahan dan klik "💾 Save" untuk memperbarui

### Menghapus Data Pasien
1. Klik tombol "Delete" di samping record
2. Data akan dihapus secara permanen dari penyimpanan sesi

## 🔒 Fitur Keamanan

- **Kontrol Visibilitas Data**: Mekanisme tampil/sembunyikan melindungi informasi sensitif
- **Penyimpanan Berbasis Sesi**: Data hanya ada selama sesi browser aktif
- **Penanganan Data Sementara**: Informasi dibersihkan ketika halaman di-refresh atau ditutup
- **Indikator Visual**: Ikon gembok menunjukkan status data dengan jelas

## 🎨 Fitur Desain

- **Animasi Warna**: Nama rumah sakit berputar melalui 5 warna berbeda setiap 2 detik
- **Glassmorphism**: Background form semi-transparan dengan efek blur
- **Tema Profesional**: Skema warna dan gambar yang sesuai untuk medis
- **Layout Responsif**: Menyesuaikan dengan berbagai ukuran layar

## 🏗️ Implementasi Teknis

### Fungsi JavaScript Utama
- `showPatients()`: Menampilkan data pasien dalam format tabel dari memori sesi
- `editPatient(index)`: Mengisi form dengan data pasien yang ada dari sesi aktif
- `deletePatient(index)`: Menghapus data pasien dari penyimpanan sesi
- `toggleShow()`: Mengontrol visibilitas data dengan mekanisme kunci/buka kunci
- `clearForm()`: Mereset field form setelah operasi

**Catatan**: Meskipun kode mereferensikan localStorage, implementasi sebenarnya menyimpan data sementara hanya di sesi aktif.

### Highlight CSS
- Efek backdrop blur untuk tampilan profesional
- Transisi warna yang halus untuk elemen animasi
- Desain tabel responsif dengan spacing yang tepat
- Styling tombol modern dengan efek hover

## 🤝 Kontribusi

Proyek ini merupakan bagian dari latihan pembelajaran Bootcamp Full Stack Web Development. Kontribusi dan saran sangat diterima!

1. Fork repository
2. Buat branch fitur (`git checkout -b fitur/fitur-baru`)
3. Commit perubahan Anda (`git commit -m 'Tambah fitur baru'`)
4. Push ke branch (`git push origin fitur/fitur-baru`)
5. Buka Pull Request

## 📚 Tujuan Pembelajaran

Proyek ini mendemonstrasikan kemahiran dalam:
- Markup semantik HTML5
- Teknik styling CSS3 tingkat lanjut
- Manipulasi DOM JavaScript
- Manajemen penyimpanan lokal
- Prinsip desain web responsif
- Desain pengalaman pengguna (UX)
- Validasi data dan penanganan form

## 📄 Lisensi

Proyek ini dibuat untuk tujuan edukasi sebagai bagian dari kurikulum bootcamp pengembangan web dengan materi HTML, CSS, Javascript.
