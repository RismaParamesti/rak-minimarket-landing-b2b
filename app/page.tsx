'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import ValueProps from '@/components/ValueProps';
import ProductPackages from '@/components/ProductPackages';
import Workflow from '@/components/Workflow';
import SocialProof from '@/components/SocialProof';
import FAQ from '@/components/FAQ';
import StickyBottomCTA from '@/components/StickyBottomCTA';
import Footer from '@/components/Footer';

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-brand-500 selection:text-white">
      {/* 1. Header & Navigation */}
      <Navbar />

      {/* 2. Hero Section: Specific single <h1>, Benefits & 3D Mockup Visual */}
      <Hero />

      {/* Trust & Quantitative Proof Bar */}
      <TrustBar />

      {/* 3. Value Proposition / Feature Grid */}
      <ValueProps />

      {/* 4. Paket Pilihan & Layanan (3 Kategori + Direct WA CTA) */}
      <ProductPackages />

      {/* 5. Alur Kerja (Workflow 4 Langkah Mudah) */}
      <Workflow />

      {/* 6. Social Proof / Kepercayaan (Galeri Proyek & Ulasan) */}
      <SocialProof />

      {/* Objection Handling & FAQ Accordion */}
      <FAQ />

      {/* Footer */}
      <Footer />

      {/* 7. Sticky Bottom CTA (Khusus Mobile View) */}
      <StickyBottomCTA />
    </main>
  );
}
