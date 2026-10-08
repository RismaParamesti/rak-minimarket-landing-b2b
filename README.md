# Landing Page B2B: Pabrik Rak Minimarket & Setup Toko Retail

Halaman arahan (Landing Page) berkonversi tinggi (High-Converting) & berkecepatan tinggi yang dirancang khusus untuk kampanye Google Ads B2B.

## Fitur Utama & Value Proposition
1. **Free Desain Layout 3D**: Sebelum komitmen transaksi/DP.
2. **Free Ongkir Jawa - Bali**: Menggunakan armada logistik pabrik.
3. **Free Jasa Pasang**: Khusus area Jawa Timur, Jawa Tengah, dan DIY.
4. **Pabrik Tangan Pertama**: Harga langsung tanpa perantara distributor.
5. **Kustomisasi**: Ukuran tiang, shelving, dan warna powder coating oven.
6. **Fleksibilitas**: Eceran/tambah rak, paket toko baru siap buka, hingga proyek tender B2B.
7. **Jasa Interior Toko**: Penataan alur sirkulasi modern ala minimarket modern.

## Struktur Skema WhatsApp Dinamis
URL diatur melalui `lib/whatsapp.ts`:
```ts
https://wa.me/6281234567890?text=Halo%20Admin,%20saya%20tertarik%20konsultasi%20paket%20rak%20toko%20dan%20layout%203D%20gratis.
```
Dapat disesuaikan secara otomatis berdasarkan paket yang dipilih calon klien.

## Integrasi Google Ads Conversion Tracking
Fungsi `trackGoogleAdsConversion` di `lib/whatsapp.ts` secara otomatis memicu event Google Ads `gtag` & Google Tag Manager dataLayer saat CTA WhatsApp diklik:
```typescript
gtag('event', 'conversion', {
  'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL'
});
```

## Cara Menjalankan Project:
1. Pastikan Node.js terinstall.
2. Buka folder ini di terminal:
3. Install dependencies:
   ```bash
   npm install
   ```
4. Jalankan development server:
   ```bash
   npm run dev
   ```
5. Akses di browser: `http://localhost:3000`
