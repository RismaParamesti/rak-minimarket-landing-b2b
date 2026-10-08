'use client';

import React from 'react';
import {
  Compass,
  Truck,
  Wrench,
  Palette,
  Factory,
  Layers,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Store
} from 'lucide-react';
import { generateWhatsAppUrl, trackGoogleAdsConversion } from '@/lib/whatsapp';

export default function ValueProps() {
  const handleFeatureCta = (featureName: string) => {
    trackGoogleAdsConversion(`ValueProp CTA: ${featureName}`, () => {
      window.open(
        generateWhatsAppUrl({
          source: `Feature_${featureName}`,
          message: `Halo Admin, saya ingin tahu lebih lanjut mengenai layanan ${featureName} untuk toko saya.`,
        }),
        '_blank'
      );
    });
  };

  return (
    <section id="keunggulan" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Keunggulan Pabrik Langsung
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Mengapa Ratusan Pemilik Retail B2B Memilih Rak Langsung Dari Kami?
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Bukan sekadar jual rak besi, kami memberikan solusi terpadu mulai dari konsep tata letak 3D, pengiriman aman, hingga pemasangan tuntas di tempat Anda.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* FEATURE 1: HIGHLIGHT UTAMA (Free Konsultasi & Layout 3D) */}
          <div className="lg:col-span-2 rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-brand-900 via-brand-800 to-slate-900 text-white relative overflow-hidden shadow-xl border border-brand-700/50 flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 bg-emerald-500 text-slate-950 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                  ★ HIGHLIGHT UTAMA
                </span>
                <span className="text-xs text-brand-200 font-semibold">100% Gratis Tanpa Syarat</span>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-emerald-400 mb-4 border border-white/10">
                <Compass className="w-6 h-6" />
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2">
                Free Konsultasi & Layanan Layout Desain 3D Sebelum Transaksi
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Tidak perlu menebak-nebak berapa unit rak yang dibutuhkan. Tim desainer kami akan menggambar denah toko Anda ke dalam visual 3D realistis agar flow pengunjung lancar, penempatan kasir ideal, dan luas toko termaksimalkan.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-200 font-medium">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Simulasi penempatan rak island & wall rack</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-200 font-medium">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Daftar rincian RAB transparan per komponen</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-200 font-medium">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Bisa revisi tata letak sampai Anda puas</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-200 font-medium">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Gratis meskipun belum tentu jadi order</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-300">Cukup kirimkan ukuran panjang x lebar toko Anda.</span>
              <button
                onClick={() => handleFeatureCta('Layout_3D_Gratis')}
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-md transition-all"
              >
                <span>Klaim Desain 3D Gratis</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* FEATURE 2: Free Ongkir Jawa-Bali */}
          <div className="rounded-3xl p-6 sm:p-7 bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-brand-200 hover:shadow-card transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-brand-600 flex items-center justify-center mb-4">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                Free Ongkir Seluruh Jawa - Bali
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Hemat jutaan rupiah biaya ekspedisi. Pesanan Anda dikirim langsung menggunakan armada angkutan logistik pabrik yang aman dan terjadwal.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-200/60 text-xs font-semibold text-brand-700 flex items-center gap-1.5">
              <span>*Berlaku untuk paket toko & minimum order</span>
            </div>
          </div>

          {/* FEATURE 3: Free Jasa Perakitan */}
          <div className="rounded-3xl p-6 sm:p-7 bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-brand-200 hover:shadow-card transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                Free Perakitan (Jatim, Jateng & DIY)
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Anda tidak perlu repot merakit sendiri! Tim teknisi berpengalaman kami akan datang langsung ke lokasi toko Anda untuk merakit rak hingga siap display produk.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-200/60 text-xs font-semibold text-amber-700 flex items-center gap-1.5">
              <span>*Toko terima beres & rapi di hari pemasangan</span>
            </div>
          </div>

          {/* FEATURE 4: Custom Ukuran & Warna */}
          <div className="rounded-3xl p-6 sm:p-7 bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-brand-200 hover:shadow-card transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <Palette className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                Custom Ukuran, Model & Warna
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Sesuaikan tinggi tiang (120 - 240 cm), lebar shelving, serta warna powder coating (Merah minimarket, Biru, Hijau, Hitam modern industrial, atau Putih bersih).
              </p>
            </div>
            <div className="pt-3 border-t border-slate-200/60 text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
              <span>*Finishing cat oven anti karat & tahan gores</span>
            </div>
          </div>

          {/* FEATURE 5: Pabrik Langsung B2B */}
          <div className="rounded-3xl p-6 sm:p-7 bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-brand-200 hover:shadow-card transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4">
                <Factory className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                Pabrik Langsung Tangan Pertama
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Bukan reseller, agen, ataupun dropshipper. Transaksi langsung dengan pabrik manufaktur sehingga harga jauh lebih murah dan jaminan ketersediaan sparepart rak.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-200/60 text-xs font-semibold text-indigo-700 flex items-center gap-1.5">
              <span>*Faktur pajak & dokumen legalitas B2B lengkap</span>
            </div>
          </div>

          {/* FEATURE 6: Fleksibel Eceran s/d Skala Besar */}
          <div className="rounded-3xl p-6 sm:p-7 bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-brand-200 hover:shadow-card transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center mb-4">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                Fleksibel: Eceran s/d Proyek Grosir
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Kami melayani pembelian eceran satuan untuk penambahan ambalan toko lama, paket toko retail baru, hingga tender pengadaan ratusan outlet chain store.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-200/60 text-xs font-semibold text-teal-700 flex items-center gap-1.5">
              <span>*Kapasitas produksi pabrik hingga 5.000 unit/bulan</span>
            </div>
          </div>

          {/* FEATURE 7: Jasa Desain Interior Toko */}
          <div className="lg:col-span-3 rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-slate-900 to-brand-950 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-500/20 text-brand-400 flex items-center justify-center shrink-0 border border-brand-500/30">
                <Store className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                  Plus: Jasa Konsultan Interior & Desain Toko Modern
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
                  Ingin toko kelontong atau minimarket Anda tampil sekelas waralaba modern (Indomaret/Alfamart/Supermarket)? Tim kami membantu penataan zoning kategori barang, meja kasir, signage rak, hingga lighting toko.
                </p>
              </div>
            </div>
            <button
              onClick={() => handleFeatureCta('Jasa_Interior_Toko')}
              className="w-full md:w-auto shrink-0 bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all shadow"
            >
              Konsultasi Konsep Interior
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
