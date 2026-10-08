'use client';

import React, { useState } from 'react';
import {
  Check,
  MessageCircle,
  Sparkles,
  ShoppingBag,
  Store,
  Building2,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { generateWhatsAppUrl, trackGoogleAdsConversion } from '@/lib/whatsapp';

export default function ProductPackages() {
  const [activeTab, setActiveTab] = useState<'all' | 'retail' | 'paket' | 'project'>('all');

  const packages = [
    {
      id: 'retail',
      category: 'retail',
      badge: 'Fleksibel & Cepat',
      title: 'Eceran / Tambah Rak',
      sub: 'Cocok untuk upgrade toko yang sudah buka atau penambahan lorong display baru.',
      priceRange: 'Mulai Rp 400 Ribuan / Unit',
      popular: false,
      features: [
        'Rak Single (Wall Gondola) T: 120 - 200cm',
        'Rak Double (Island Gondola) 2 sisi',
        'End Gondola (Tutup Lorong Depan/Belakang)',
        'Bisa beli ambalan tambahan / ram gantung kawat',
        'Finishing Powder Coating oven anti lecet',
        'Kapasitas beban 70 - 100 kg per susun',
        'Ready stock ribuan unit tiang & shelving'
      ],
      ctaText: 'Tanya Paket Eceran via WA',
      waMessage: 'Halo Admin, saya butuh penambahan rak eceran untuk toko saya. Boleh kirimkan pricelist dan spesifikasinya?',
    },
    {
      id: 'paket',
      category: 'paket',
      badge: 'Paling Banyak Dipilih (Best Seller)',
      title: 'Paket Toko Baru Siap Buka',
      sub: 'Solusi lengkap all-in-one untuk toko baru ukuran 30m², 50m², hingga 100m².',
      priceRange: 'Konsultasikan Sesuai Luas Toko',
      popular: true,
      features: [
        'GRATIS Desain 3D Simulasi Tata Letak Toko',
        'FREE Ongkir ke seluruh wilayah Jawa-Bali',
        'FREE Jasa Pemasangan & Perakitan (Jatim/Jateng/DIY)',
        'Paket Rak Gondola Wall, Island, & End Cap lengkap',
        'Bonus Meja Kasir Minimalis / Shelving Promo',
        'Price Tag mika & Stopper pengaman barang',
        'Garansi konstruksi presisi & garansi karat'
      ],
      ctaText: 'Tanya Paket Toko Baru via WA',
      waMessage: 'Halo Admin, saya berencana buka toko retail baru dan tertarik Paket Toko Baru Siap Buka. Mau minta simulasi 3D dan rincian biayanya.',
    },
    {
      id: 'project',
      category: 'project',
      badge: 'B2B Enterprise & Tender',
      title: 'Proyek Retail & Custom Skala Besar',
      sub: 'Khusus jaringan minimarket, supermarket lokal, koperasi B2B, & pengadaan tender.',
      priceRange: 'Harga Pabrik Kontrak Khusus B2B',
      popular: false,
      features: [
        'Kustomisasi spesifikasi plat baja tebal SPCC',
        'Custom warna sesuai corporate brand guideline',
        'Kapasitas beban berat (Heavy Duty s/d 150 kg/shelving)',
        'Sertifikasi QC pabrik & uji beban laboratorium',
        'Faktur Pajak PPN & Surat Dukungan Pabrik Lengkap',
        'Term of Payment (TOP) fleksibel untuk korporasi',
        'Kapasitas supply kontinu hingga puluhan cabang'
      ],
      ctaText: 'Tanya Proyek Retail via WA',
      waMessage: 'Halo Admin, saya dari perusahaan/kontraktor ingin mendiskusikan pengadaan rak custom skala besar/proyek retail.',
    },
  ];

  const handlePackageCta = (pkg: typeof packages[0]) => {
    trackGoogleAdsConversion(`Package CTA: ${pkg.title}`, () => {
      window.open(
        generateWhatsAppUrl({
          source: `Package_${pkg.id}`,
          packageType: pkg.title,
          message: pkg.waMessage,
        }),
        '_blank'
      );
    });
  };

  const filteredPackages =
    activeTab === 'all'
      ? packages
      : packages.filter((p) => p.category === activeTab);

  return (
    <section id="paket" className="py-16 sm:py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ShoppingBag className="w-3.5 h-3.5 text-brand-600" />
            Paket Pilihan & Layanan
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pilih Solusi Pengadaan Rak Sesuai Skala Kebutuhan Toko Anda
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Mulai dari isi toko kecil, renovasi penataan minimarket, hingga ekspansi jaringan ritel modern.
          </p>

          {/* Filter Tabs for Quick Mobile Access */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'all'
                  ? 'bg-brand-900 text-white shadow-md'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              Semua Layanan
            </button>
            <button
              onClick={() => setActiveTab('paket')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'paket'
                  ? 'bg-brand-900 text-white shadow-md'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              Paket Toko Baru (Best Seller)
            </button>
            <button
              onClick={() => setActiveTab('retail')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'retail'
                  ? 'bg-brand-900 text-white shadow-md'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              Eceran / Tambah Rak
            </button>
            <button
              onClick={() => setActiveTab('project')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'project'
                  ? 'bg-brand-900 text-white shadow-md'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              Proyek Retail B2B
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {filteredPackages.map((pkg) => {
            const isPopular = pkg.popular;
            return (
              <div
                key={pkg.id}
                className={`rounded-3xl transition-all duration-300 flex flex-col justify-between relative ${
                  isPopular
                    ? 'bg-white border-2 border-emerald-500 shadow-xl ring-4 ring-emerald-500/10 lg:-translate-y-2'
                    : 'bg-white border border-slate-200/90 shadow-sm hover:shadow-lg'
                } p-6 sm:p-8`}
              >
                {/* Popular Pill */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white text-xs font-black uppercase tracking-wider py-1 px-4 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3.5 h-3.5" />
                    {pkg.badge}
                  </div>
                )}

                <div>
                  {!isPopular && (
                    <span className="inline-block text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full mb-3">
                      {pkg.badge}
                    </span>
                  )}

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2 mt-1">
                    {pkg.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 min-h-[40px]">
                    {pkg.sub}
                  </p>

                  {/* Price Banner */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 mb-6">
                    <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      Estimasi Investasi
                    </div>
                    <div className="text-base sm:text-lg font-black text-slate-900 mt-0.5">
                      {pkg.priceRange}
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Spesifikasi & Layanan:
                    </div>
                    {pkg.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <div className={`rounded-full p-0.5 shrink-0 mt-0.5 ${isPopular ? 'text-emerald-600 bg-emerald-50' : 'text-brand-600 bg-blue-50'}`}>
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct WA Button */}
                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => handlePackageCta(pkg)}
                    id={`package-cta-${pkg.id}`}
                    aria-label={pkg.ctaText}
                    className={`w-full py-3.5 px-4 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 transition-all shadow-sm ${
                      isPopular
                        ? 'bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white shadow-cta hover:scale-[1.01]'
                        : 'bg-brand-900 hover:bg-brand-800 active:bg-slate-950 text-white'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                    <span>{pkg.ctaText}</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </button>
                  <p className="text-[11px] text-center text-slate-500 mt-2">
                    Respon cepat admin spesialis B2B &bull; Tanpa komitmen
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
