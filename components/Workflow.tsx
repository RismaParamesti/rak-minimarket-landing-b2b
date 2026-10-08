'use client';

import React from 'react';
import {
  FileText,
  Boxes,
  Hammer,
  Truck,
  ArrowRight,
  MessageCircle,
  Clock,
  Sparkles
} from 'lucide-react';
import { generateWhatsAppUrl, trackGoogleAdsConversion } from '@/lib/whatsapp';

export default function Workflow() {
  const steps = [
    {
      step: '01',
      icon: FileText,
      badge: 'Langkah Awal',
      title: 'Konsultasi & Kirim Ukuran Denah',
      desc: 'Cukup kirimkan sketsa coretan tangan atau ukuran panjang x lebar toko Anda via WhatsApp. Tim kami siap merespons dalam hitungan menit.',
    },
    {
      step: '02',
      icon: Boxes,
      badge: '100% Gratis',
      title: 'Kami Buatkan Layout 3D Presisi',
      desc: 'Arsitek tata letak kami akan membuatkan simulasi 3D toko lengkap dengan penataan lorong rak optimal, alur sirkulasi, dan rincian estimasi biaya (RAB).',
    },
    {
      step: '03',
      icon: Hammer,
      badge: 'Standar Industri',
      title: 'Produksi Langsung dari Pabrik',
      desc: 'Setelah layout disetujui, pesanan langsung diproses di lini pabrik kami menggunakan plat baja SPCC berkualitas dan finishing oven powder coating tahan karat.',
    },
    {
      step: '04',
      icon: Truck,
      badge: 'Free Kirim & Pasang',
      title: 'Pengiriman & Perakitan di Lokasi',
      desc: 'Armada pabrik mengirimkan rak ke alamat Anda (Free Ongkir Jawa-Bali). Untuk wilayah Jatim, Jateng & DIY, tim teknisi kami rakit langsung sampai selesai.',
    },
  ];

  const handleWorkflowCta = () => {
    trackGoogleAdsConversion('Workflow CTA Click', () => {
      window.open(
        generateWhatsAppUrl({
          source: 'Workflow_Section',
          message:
            'Halo Admin, saya mau mulai langkah 1 untuk kirim denah ukuran toko saya dan dibuatkan layout 3D gratis.',
        }),
        '_blank'
      );
    });
  };

  return (
    <section id="alur-kerja" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Clock className="w-3.5 h-3.5 text-emerald-600" />
            Alur Pemesanan Simpel
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            4 Langkah Mudah Membuka & Merapikan Toko Anda
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Tidak ada proses berbelit-belit. Anda cukup mengirimkan ukuran toko, kami yang tangani sisanya sampai toko siap jualan.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 hover:bg-slate-100/80 rounded-3xl p-6 sm:p-7 border border-slate-200/90 relative flex flex-col justify-between transition-all group shadow-sm hover:shadow-md"
              >
                {/* Step Number Floater */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl font-black text-brand-700/80 tracking-tighter">
                    {item.step}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700">
                    {item.badge}
                  </span>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-brand-600 mb-5 group-hover:scale-110 group-hover:bg-brand-900 group-hover:text-white transition-all">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Connecting arrow indicator for large screens */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                    <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 shadow-sm">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Call to Action strip */}
        <div className="mt-12 text-center p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-brand-900 via-brand-800 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-brand-800">
          <div className="text-left space-y-1">
            <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4" /> Mulai Langkah Pertama Hari Ini
            </div>
            <h3 className="text-lg sm:text-xl font-black text-white">
              Punya Ukuran Toko? Dapatkan Visual 3D Gratis Sekarang
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Tim desainer kami siap membuatkan simulasi denah dalam waktu 1x24 jam kerja.
            </p>
          </div>

          <button
            onClick={handleWorkflowCta}
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm px-6 py-3.5 rounded-xl shadow-md transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Kirim Denah Toko via WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
}
