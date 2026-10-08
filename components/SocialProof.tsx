'use client';

import React from 'react';
import {
  Star,
  CheckCircle2,
  Store,
  MapPin,
  Building,
  ShieldCheck,
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { generateWhatsAppUrl, trackGoogleAdsConversion } from '@/lib/whatsapp';

export default function SocialProof() {
  const projects = [
    {
      title: 'Minimarket Mandiri 8x15m',
      location: 'Surabaya, Jawa Timur',
      category: 'Paket Toko Baru',
      img: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=600&q=80',
      specs: '14 Unit Island + 22 Unit Wall + Meja Kasir',
    },
    {
      title: 'Toko Kelontong Modern 6x10m',
      location: 'Semarang, Jawa Tengah',
      category: 'Setup Toko Siap Buka',
      img: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&w=600&q=80',
      specs: 'Custom Warna Merah Kombinasi Putih',
    },
    {
      title: 'Supermarket Lokal & Fresh 12x20m',
      location: 'Denpasar, Bali',
      category: 'Proyek Retail B2B',
      img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80',
      specs: 'Heavy Duty Shelving + Rak Buah Sayur',
    },
    {
      title: 'Apotek & Toko Kosmetik Modern',
      location: 'Sleman, D.I. Yogyakarta',
      category: 'Custom Desain Interior',
      img: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80',
      specs: 'Rak Mika Minimalis + Lighting LED',
    },
  ];

  const testimonials = [
    {
      name: 'H. Sutrisno',
      role: 'Owner "Berkah Mart"',
      city: 'Solo, Jawa Tengah',
      comment:
        'Awalnya bingung mau beli rak berapa banyak untuk ruko 5x12 meter. Untung ada tim pabrik ini yang buatkan gambar 3D-nya dulu, jadi ketahuan persis butuh berapa baris. Pengiriman tepat waktu dan teknisinya langsung pasang seharian selesai!',
      rating: 5,
    },
    {
      name: 'Ibu Ratna Dewi',
      role: 'Pengelola Koperasi Karyawan',
      city: 'Sidoarjo, Jawa Timur',
      comment:
        'Harga pabrik tangan pertama memang beda jauh dibanding toko rak perantara. Kami hemat budget hampir 20 juta. Kualitas cat powder coating rapi dan tebal, shelving sanggup nahan dus minyak dan beras tanpa melengkung.',
      rating: 5,
    },
    {
      name: 'Bpk. Made Wirawan',
      role: 'Owner "Dewata Fresh Mart"',
      city: 'Gianyar, Bali',
      comment:
        'Klaim Free Ongkir ke Bali beneran tidak ada biaya tersembunyi. Pengemasan bubble wrap rapi, tidak ada tiang yang lecet waktu sampai di pelabuhan dan lokasi toko. Sangat recommended untuk mitra B2B.',
      rating: 5,
    },
  ];

  const handleConsultClick = () => {
    trackGoogleAdsConversion('Social Proof CTA Click', () => {
      window.open(
        generateWhatsAppUrl({
          source: 'Social_Proof_Section',
          message:
            'Halo Admin, saya lihat hasil proyek terpasang Anda dan tertarik konsultasi untuk toko saya.',
        }),
        '_blank'
      );
    });
  };

  return (
    <section id="portofolio" className="py-16 sm:py-24 bg-slate-100/70 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Portofolio & Bukti Nyata
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Dipercaya Oleh Lebih dari 1.250+ Pemilik Toko & Pengusaha Retail
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Lihat hasil pengerjaan tim pabrik kami yang telah terpasang rapi di berbagai pelosok Jawa dan Bali.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                  {proj.category}
                </span>
              </div>
              <div className="p-4 space-y-1.5">
                <div className="flex items-center gap-1 text-[11px] font-semibold text-brand-600">
                  <MapPin className="w-3 h-3 shrink-0" />
                  <span>{proj.location}</span>
                </div>
                <h3 className="text-sm font-black text-slate-900 leading-snug">
                  {proj.title}
                </h3>
                <p className="text-[11px] text-slate-500 font-medium">
                  {proj.specs}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testi, tIdx) => (
            <div
              key={tIdx}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic mb-4">
                  "{testi.comment}"
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">
                    {testi.name}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    {testi.role} &bull; {testi.city}
                  </div>
                </div>
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges Bar */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-wrap items-center justify-around gap-6 text-center text-xs font-bold text-slate-700">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span>Garansi Anti Karat & Presisi Knock-Down</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span>Kapasitas Beban Teruji 80-120kg/Shelving</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span>Ready Stock Sparepart & Ambalan Tambahan</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span>Pabrik Terverifikasi B2B</span>
          </div>
        </div>

      </div>
    </section>
  );
}
