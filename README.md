# Final Assessment: Belajar Dasar Pemrograman JavaScript

Repositori ini berisi pengerjaan final assessment untuk kelas dasar pemrograman JavaScript (Dicoding). Setiap folder adalah latihan mandiri dengan berkas instruksi (`instruksi.md`), kode jawaban (`index.js`), dan pada beberapa folder berkas tes otomatis (`index.test.js`).

## Isi Repositori

| Folder | Materi |
| ------ | ------ |
| `01-writing-comments` | Menulis komentar pada kode |
| `02-code-style` | Gaya penulisan kode (code style) |
| `03-writing-test` | Menulis pengujian unit sederhana |
| `optional-04-oop` | Opsional: Object-Oriented Programming (OOP) |
| `optional-05-recursive` | Opsional: fungsi rekursif |
| `optional-06-full-coverage-testing` | Opsional: pengujian dengan cakupan penuh (full coverage testing) |
| `optional-07-real-world-scenario` | Opsional: skenario dunia nyata |

## Teknologi

- JavaScript (Node.js untuk menjalankan kode dan tes)
- Berkas tes berjalan dengan runner bawaan sesuai konfigurasi `package.json` pada folder latihan masing-masing

## Struktur Proyek

```
final-assessment-basic-javascript-hafiz/
├── 01-writing-comments/
│   ├── index.js
│   └── instruksi.md
├── 02-code-style/
├── 03-writing-test/
│   ├── index.js
│   ├── index.test.js
│   ├── package.json
│   └── instruksi.md
├── optional-04-oop/
├── optional-05-recursive/
├── optional-06-full-coverage-testing/
├── optional-07-real-world-scenario/
└── README.md
```

## Cara Menjalankan

1. Clone repositori ini dan pastikan Node.js sudah terpasang.
2. Untuk melihat jawaban setiap latihan, buka `index.js` pada folder terkait dan baca `instruksi.md` sebagai soal.
3. Jalankan kode secara langsung bila diperlukan:

   ```bash
   node 01-writing-comments/index.js
   ```

4. Untuk latihan yang memiliki tes (misalnya `03-writing-test`), masuk ke foldernya lalu jalankan tes sesuai `package.json` pada folder tersebut:

   ```bash
   cd 03-writing-test
   npm test
   ```
