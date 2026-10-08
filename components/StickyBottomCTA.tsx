'use client';

import React from 'react';
import { MessageCircle, PhoneCall, Sparkles } from 'lucide-react';
import { generateWhatsAppUrl, trackGoogleAdsConversion, DEFAULT_WA_NUMBER } from '@/lib/whatsapp';

export default function StickyBottomCTA() {
  const handleStickyWaClick = () => {
    trackGoogleAdsConversion('Sticky Mobile WA CTA Click', () => {
      window.open(
        generateWhatsAppUrl({
          source: 'Sticky_Mobile_Bottom',
          message:
            'Halo Admin, saya tertarik konsultasi paket rak toko dan layout 3D gratis dari mobile.',
        }),
        '_blank'
      );
    });
  };

  const handlePhoneClick = () => {
    trackGoogleAdsConversion('Sticky Mobile Phone Call Click', () => {
      window.location.href = `tel:+${DEFAULT_WA_NUMBER}`;
    });
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/90 p-2.5 px-3.5 shadow-[0_-8px_20px_rgba(0,0,0,0.1)] transition-transform duration-300">
      
      {/* Micro promo header indicator */}
      <div className="flex items-center justify-between pb-1.5 px-1 text-[11px] text-slate-600 font-semibold">
        <div className="flex items-center gap-1 text-emerald-700">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>Admin Aktif Siap Bantu Hitung</span>
        </div>
        <div className="text-brand-700 flex items-center gap-1 font-bold">
          <Sparkles className="w-3 h-3 text-amber-500" /> Free 3D & Ongkir
        </div>
      </div>

      <div className="flex items-center gap-2">
        {/* Quick Phone Call Button */}
        <button
          onClick={handlePhoneClick}
          aria-label="Telepon Langsung Admin Pabrik"
          className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 flex items-center justify-center shrink-0 active:scale-95 transition-transform"
        >
          <PhoneCall className="w-5 h-5" />
        </button>

        {/* Primary Giant WhatsApp Button */}
        <button
          onClick={handleStickyWaClick}
          id="sticky-mobile-cta"
          aria-label="Konsultasi WA & Desain 3D Gratis"
          className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-cta transition-transform active:scale-95"
        >
          <MessageCircle className="w-5 h-5 fill-current shrink-0" />
          <span className="truncate">Konsultasi WA & Layout 3D Gratis</span>
        </button>
      </div>
    </div>
  );
}
