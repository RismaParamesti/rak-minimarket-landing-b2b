'use client';

import React from 'react';
import { MessageCircle, ShieldCheck, PhoneCall, Sparkles } from 'lucide-react';
import { generateWhatsAppUrl, trackGoogleAdsConversion } from '@/lib/whatsapp';

export default function Navbar() {
  const handleCtaClick = () => {
    trackGoogleAdsConversion('Navbar CTA Click', () => {
      window.open(generateWhatsAppUrl({ source: 'Navbar' }), '_blank');
    });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
      {/* Top Banner Notice for Urgency & Trust */}
      <div className="bg-gradient-to-r from-brand-900 via-brand-800 to-brand-900 text-white text-xs py-1.5 px-4 text-center font-medium flex items-center justify-center gap-2">
        <span className="inline-flex items-center gap-1 bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full border border-amber-500/30 text-[11px] font-semibold">
          <Sparkles className="w-3 h-3 text-amber-400" /> Promo Bulan Ini
        </span>
        <span className="hidden sm:inline">
          Gratis Desain 3D + Free Ongkir Jawa-Bali untuk 50 Toko Pertama
        </span>
        <span className="sm:hidden">
          Free Desain 3D + Free Ongkir Jawa-Bali!
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-brand-700 to-brand-900 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </div>
            <div>
              <div className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 flex items-center gap-1.5">
                <span>RAKTOKO</span>
                <span className="text-brand-600 font-black">B2B</span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 font-medium tracking-wide">
                Pabrik Rak Minimarket Indonesia
              </p>
            </div>
          </a>

          {/* Trust Badge */}
          <div className="hidden lg:flex items-center gap-1.5 ml-3 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Pabrik Langsung Tangan Pertama</span>
          </div>
        </div>

        {/* Navigation Quick Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600">
          <a href="#keunggulan" className="hover:text-brand-600 transition-colors">Keunggulan</a>
          <a href="#paket" className="hover:text-brand-600 transition-colors">Paket Rak Toko</a>
          <a href="#alur-kerja" className="hover:text-brand-600 transition-colors">Alur Pemesanan</a>
          <a href="#portofolio" className="hover:text-brand-600 transition-colors">Galeri Proyek</a>
          <a href="#faq" className="hover:text-brand-600 transition-colors">Tanya Jawab</a>
        </nav>

        {/* Right CTA Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={handleCtaClick}
            id="nav-cta-whatsapp"
            aria-label="Konsultasi WhatsApp Gratis"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs sm:text-sm px-3.5 sm:px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all group"
          >
            <div className="relative flex items-center justify-center">
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-amber-400 rounded-full animate-ping" />
            </div>
            <span>Konsultasi WA Gratis</span>
          </button>
        </div>
      </div>
    </header>
  );
}
