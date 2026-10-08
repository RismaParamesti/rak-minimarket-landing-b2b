'use client';

import React from 'react';
import {
  MessageCircle,
  Box,
  Truck,
  Wrench,
  Factory,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Clock
} from 'lucide-react';
import { generateWhatsAppUrl, trackGoogleAdsConversion } from '@/lib/whatsapp';

export default function Hero() {
  const handleHeroCta = () => {
    trackGoogleAdsConversion('Hero Primary CTA Click', () => {
      window.open(
        generateWhatsAppUrl({
          source: 'Hero_Primary_CTA',
          message:
            'Halo Admin, saya ingin konsultasi paket rak minimarket dan klaim Free Layout 3D untuk denah toko saya.',
        }),
        '_blank'
      );
    });
  };

  return (
    <section className="relative overflow-hidden pt-6 pb-14 sm:pt-12 sm:pb-20 bg-gradient-to-b from-slate-100 via-white to-slate-50">
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-brand-500/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-20 right-0 w-80 h-80 bg-emerald-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & CTA (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Micro-Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-brand-700 text-xs sm:text-sm font-bold tracking-tight shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <span>PABRIK LANGSUNG B2B • SPESIALIS SETUP TOKO RETAIL</span>
            </div>

            {/* Semantic Single <h1> */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-black text-slate-900 tracking-tight leading-[1.18]">
              Pabrik Rak Minimarket Tangan Pertama:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 via-brand-600 to-emerald-600">
                Setup Toko Retail Lebih Hemat, Estetik & Siap Buka
              </span>
            </h1>

            {/* Subheadline: Solusi Tanpa Ribet */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Bingung hitung kebutuhan rak toko Anda? Serahkan pada pabrik kami! Dapatkan{' '}
              <strong className="text-slate-900 font-semibold underline decoration-emerald-500 decoration-2 underline-offset-2">
                gratis simulasi layout denah 3D sebelum order
              </strong>
              , bebas ongkir wilayah Jawa-Bali, serta tim teknisi siap merakit langsung di lokasi Anda.
            </p>

            {/* 4 Quick Benefit Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-sm">
                <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600 shrink-0">
                  <Box className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">Free Desain 3D</div>
                  <div className="text-[11px] text-slate-500">Sebelum Bayar DP Apapun</div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-sm">
                <div className="p-1.5 rounded-lg bg-blue-50 text-brand-600 shrink-0">
                  <Truck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">Free Ongkir Jawa-Bali</div>
                  <div className="text-[11px] text-slate-500">Armada Truk Khusus Pabrik</div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-sm">
                <div className="p-1.5 rounded-lg bg-amber-50 text-amber-600 shrink-0">
                  <Wrench className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">Free Jasa Pasang</div>
                  <div className="text-[11px] text-slate-500">Area Jatim, Jateng & DIY</div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-sm">
                <div className="p-1.5 rounded-lg bg-purple-50 text-purple-600 shrink-0">
                  <Factory className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">Pabrik Tangan Pertama</div>
                  <div className="text-[11px] text-slate-500">Hemat Hingga 25-35% B2B</div>
                </div>
              </div>
            </div>

            {/* Primary CTA Area */}
            <div className="pt-2 sm:pt-4 space-y-3">
              <button
                onClick={handleHeroCta}
                id="hero-cta-whatsapp"
                aria-label="Konsultasi WA dan Dapatkan Layout 3D Gratis"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-extrabold text-base sm:text-lg px-8 py-4 sm:py-4.5 rounded-2xl shadow-cta hover:scale-[1.01] active:scale-[0.99] transition-all animate-pulse-cta"
              >
                <MessageCircle className="w-6 h-6 fill-current shrink-0" />
                <span>Konsultasi WA & Dapatkan Layout 3D Gratis</span>
                <ArrowRight className="w-5 h-5 shrink-0 hidden sm:inline" />
              </button>

              {/* Trust Subtext */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Respon Cepat &lt; 5 Menit
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  100% Bebas Biaya Desain
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Tanpa Syarat Minimal Order
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Mockup / 3D Layout Simulation (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Highlight Badge Floater */}
              <div className="absolute -top-3 -right-2 sm:-right-4 z-20 bg-amber-400 text-slate-950 font-black text-xs px-3.5 py-1.5 rounded-xl shadow-lg border border-amber-300 flex items-center gap-1.5 rotate-2">
                <Sparkles className="w-4 h-4 text-slate-900 fill-amber-300" />
                <span>GRATIS SIMULASI 3D</span>
              </div>

              {/* Main Visual Card */}
              <div className="bg-white rounded-3xl p-3 sm:p-4 border border-slate-200/90 shadow-2xl relative overflow-hidden group">
                
                {/* Visual Image / 3D Store Graphic */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800&q=80"
                    alt="Simulasi Desain 3D Rak Gondola Minimarket Retail B2B"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

                  {/* Overlay Tags representing 3D Interactive elements */}
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg border border-white/20 flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Layout 3D Realistis Toko 6x12m</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Hasil Desain Tim Arsitek Interior Kami</p>
                    <p className="text-sm font-semibold text-slate-100">Kombinasi Gondola Island, Wall Rack, & Meja Kasir Presisi</p>
                  </div>
                </div>

                {/* Sub Features Card under image */}
                <div className="mt-3.5 p-3 rounded-xl bg-slate-50 border border-slate-200 grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-1">
                    <span className="block font-black text-slate-900 text-sm">80 - 100 kg</span>
                    <span className="text-[10px] text-slate-500 font-medium">Beban / Ambalan</span>
                  </div>
                  <div className="p-1 border-x border-slate-200">
                    <span className="block font-black text-slate-900 text-sm">SPCC Steel</span>
                    <span className="text-[10px] text-slate-500 font-medium">Baja Oven Coating</span>
                  </div>
                  <div className="p-1">
                    <span className="block font-black text-emerald-600 text-sm">Custom</span>
                    <span className="text-[10px] text-slate-500 font-medium">Warna & Ukuran</span>
                  </div>
                </div>

                {/* Quick Interactive Tooltip */}
                <div className="mt-3 flex items-center justify-between px-2 text-xs text-slate-500">
                  <span className="flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5 text-brand-600" /> Estimasi pengerjaan 3D: 1x24 Jam
                  </span>
                  <span className="font-semibold text-brand-700 cursor-pointer hover:underline" onClick={handleHeroCta}>
                    Kirim Ukuran &rarr;
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
