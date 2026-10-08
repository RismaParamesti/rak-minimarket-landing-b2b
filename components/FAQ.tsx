'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { generateWhatsAppUrl, trackGoogleAdsConversion } from '@/lib/whatsapp';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Apakah layanan konsultasi dan layout desain 3D benar-benar 100% gratis?',
      a: 'Ya, 100% GRATIS tanpa dipungut biaya dan tanpa komitmen harus membeli. Cukup kirimkan ukuran denah toko (panjang x lebar) atau foto sketsa lokasi Anda. Tim arsitek kami akan merancang simulasi penataan rak 3D lengkap dengan hitungan kebutuhan unit dan rancangan anggaran biaya (RAB).',
    },
    {
      q: 'Bagaimana syarat untuk mendapatkan Free Ongkir Jawa-Bali?',
      a: 'Free Ongkir berlaku untuk pemesanan Paket Toko Baru atau pembelian dengan nominal kuota tertentu yang dikirim menggunakan armada angkutan logistik pabrik kami. Pengiriman mencakup seluruh kabupaten/kota di Pulau Jawa dan Pulau Bali sampai ke lokasi alamat toko Anda.',
    },
    {
      q: 'Daerah mana saja yang mendapatkan Free Jasa Perakitan / Pemasangan?',
      a: 'Layanan Free Perakitan langsung di lokasi ditangani oleh tim teknisi pabrik kami khusus untuk wilayah Jawa Timur, Jawa Tengah, dan D.I. Yogyakarta (DIY). Untuk wilayah Jawa Barat, Banten, DKI Jakarta, dan Bali, rak didesain dengan sistem knock-down baut praktis yang sangat mudah dirakit sendiri (disertai video tutorial dan panduan teknis) atau dapat memilih opsi add-on teknisi.',
    },
    {
      q: 'Apakah bisa kustomisasi warna rak sesuai identitas brand toko kami?',
      a: 'Sangat bisa! Selain warna standar retail (Putih gading, Merah, Biru, Hijau), kami melayani custom warna tiang, mika price tag, dan ambalan sesuai brand identity toko Anda (misalnya Hitam Doff Industrial, Oranye, dsb) dengan finishing cat oven powder coating tahan karat.',
    },
    {
      q: 'Berapa kapasitas beban maksimal untuk setiap susun (shelving) rak?',
      a: 'Rak minimarket standar pabrik kami dirancang dengan ketebalan plat baja SPCC berspesifikasi B2B yang mampu menahan beban 80 kg hingga 100 kg per ambalan/susun. Untuk kebutuhan supermarket barang berat (beras, minyak, galon), kami juga menyediakan opsi tipe Heavy Duty dengan kapasitas hingga 120 - 150 kg per susun.',
    },
    {
      q: 'Apakah melayani pemesanan untuk luar pulau Jawa & Bali?',
      a: 'Tentu saja! Kami berpengalaman mengirimkan paket rak toko ke Sumatera, Kalimantan, Sulawesi, NTB, NTT, hingga Papua. Tim kami akan membantu pengemasan ekstra aman (bubble wrap/kardus tebal) serta menghubungkan dengan rekanan ekspedisi kargo kontainer laut termurah.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const handleFaqCta = () => {
    trackGoogleAdsConversion('FAQ Ask WA Click', () => {
      window.open(
        generateWhatsAppUrl({
          source: 'FAQ_Section',
          message: 'Halo Admin, saya punya pertanyaan mengenai pengadaan rak toko minimarket.',
        }),
        '_blank'
      );
    });
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-brand-600" />
            Pertanyaan yang Sering Diajukan
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Jawaban Lengkap Seputar Pembelian & Layanan
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Masih ada hal yang ingin dipastikan sebelum memulai setup toko Anda?
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 bg-slate-50/50 hover:bg-slate-50"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-4.5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{faq.q}</span>
                  <div
                    className={`p-1 rounded-full transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 bg-brand-100 text-brand-700' : 'text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200/60 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help box */}
        <div className="mt-10 p-6 rounded-2xl bg-brand-50 border border-brand-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <div className="font-bold text-slate-900 text-sm sm:text-base">
              Punya pertanyaan spesifik atau ukuran denah unik?
            </div>
            <div className="text-xs sm:text-sm text-slate-600">
              Tim konsultan kami siap memberikan perhitungan cepat via chat WhatsApp.
            </div>
          </div>
          <button
            onClick={handleFaqCta}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all shadow-sm shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat Langsung dengan Konsultan</span>
          </button>
        </div>

      </div>
    </section>
  );
}
