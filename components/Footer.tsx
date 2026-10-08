'use client';

import React from 'react';
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { generateWhatsAppUrl, trackGoogleAdsConversion, DEFAULT_WA_NUMBER } from '@/lib/whatsapp';

export default function Footer() {
  const handleFooterWaClick = () => {
    trackGoogleAdsConversion('Footer WA Click', () => {
      window.open(generateWhatsAppUrl({ source: 'Footer' }), '_blank');
    });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-24 md:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-brand-600 flex items-center justify-center text-white font-black text-lg">
                R
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                RAKTOKO<span className="text-brand-400">B2B</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Manufaktur pabrik langsung spesialis rak minimarket, gondola supermarket, rak gudang light duty, dan jasa tata letak interior retail di Indonesia.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 text-emerald-400 text-xs font-semibold border border-slate-700">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Produsen Tangan Pertama B2B</span>
            </div>
          </div>

          {/* Col 2: Jangkauan Layanan */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Jangkauan Layanan
            </h4>
            <ul className="text-xs sm:text-sm space-y-2 text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Free Ongkir Seluruh Jawa & Bali</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Free Rakit Jatim, Jateng & DIY</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>Pengiriman Kontainer Ekspedisi Luar Pulau</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span>Tender & Pengadaan Skala Nasional</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Workshop & Jam Operasional */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Pabrik & Operasional
            </h4>
            <div className="text-xs sm:text-sm text-slate-400 space-y-2">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>Kawasan Industri Manufaktur Baja Retail, Jawa Timur & Jawa Tengah</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-400 shrink-0" />
                <span>Senin - Sabtu: 07.30 - 20.30 WIB</span>
              </p>
              <p className="text-[11px] text-slate-500">
                (Chat WhatsApp tetap dilayani 24/7 oleh tim konsultasi piket)
              </p>
            </div>
          </div>

          {/* Col 4: Quick Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Hubungi Pabrik
            </h4>
            <p className="text-xs text-slate-400">
              Dapatkan quotation resmi, brosur katalog lengkap, dan jadwalkan layout 3D toko Anda hari ini.
            </p>
            <button
              onClick={handleFooterWaClick}
              className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat WhatsApp Resmi</span>
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>
            &copy; {new Date().getFullYear()} Pabrik Rak Minimarket B2B Indonesia. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span>Privasi & Keamanan Data</span>
            <span>&bull;</span>
            <span>Syarat & Ketentuan B2B</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
