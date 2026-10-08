'use client';

import React from 'react';
import { Store, ShieldCheck, Award, Layers } from 'lucide-react';

export default function TrustBar() {
  const stats = [
    {
      icon: Store,
      value: '1.250+',
      label: 'Toko & Minimarket Sukses Setup',
      sub: 'Di Jawa, Bali, hingga luar pulau',
    },
    {
      icon: Layers,
      value: '100% Gratis',
      label: 'Desain Layout 3D & Konsultasi',
      sub: 'Dihitungkan detail sampai presisi',
    },
    {
      icon: ShieldCheck,
      value: '80 - 120 Kg',
      label: 'Kapasitas Kuat Tiap Shelving',
      sub: 'Baja SPCC cold-rolled powder coating',
    },
    {
      icon: Award,
      value: 'Pabrik Langsung',
      label: 'Tanpa Calo & Distributor',
      sub: 'Garansi harga B2B paling kompetitif',
    },
  ];

  return (
    <section className="bg-brand-900 text-white py-8 border-y border-brand-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-brand-800/80">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col items-center text-center ${
                  idx > 1 ? 'pt-4 sm:pt-0' : ''
                } ${idx > 0 ? 'sm:pl-6' : ''}`}
              >
                <div className="w-10 h-10 rounded-xl bg-brand-800/80 border border-brand-700/60 flex items-center justify-center text-emerald-400 mb-2 shadow-inner">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-0.5">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 font-normal">
                  {stat.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
