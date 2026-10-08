/**
 * Dynamic WhatsApp URL Generator & Google Ads Conversion Tracker
 */

export const DEFAULT_WA_NUMBER = "6281234567890"; // Ganti dengan nomor WhatsApp Admin riil

export interface WhatsAppOptions {
  phone?: string;
  message?: string;
  packageType?: string;
  source?: string;
}

/**
 * Membuat link WhatsApp terenkode rapi dengan UTM / Source tracking
 */
export function generateWhatsAppUrl(options: WhatsAppOptions = {}): string {
  const phone = options.phone || DEFAULT_WA_NUMBER;
  
  let baseText = "Halo Admin, saya tertarik konsultasi paket rak toko dan layout 3D gratis.";
  
  if (options.packageType) {
    baseText = `Halo Admin, saya ingin tanya detail ${options.packageType} untuk toko saya dan ingin konsultasi layout 3D gratis.`;
  } else if (options.message) {
    baseText = options.message;
  }

  // Menambahkan tag sumber jika ada
  if (options.source) {
    baseText += ` (Ref: ${options.source})`;
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(baseText)}`;
}

/**
 * Google Ads Conversion Tracking Trigger
 * Memanggil gtag report conversion jika Google Ads Tag terpasang di window
 */
export function trackGoogleAdsConversion(actionLabel: string, callback?: () => void) {
  if (typeof window !== "undefined") {
    // 1. Google Ads Tag (gtag.js)
    if (typeof (window as unknown as { gtag?: Function }).gtag === "function") {
      (window as unknown as { gtag: Function }).gtag("event", "conversion", {
        send_to: "AW-CONVERSION_ID/CONVERSION_LABEL", // Ganti dengan ID & Label Google Ads Anda
        event_callback: () => {
          if (callback) callback();
        },
      });
      // Fallback jika event_callback tidak dipanggil dalam 500ms
      setTimeout(() => {
        if (callback) callback();
      }, 500);
      return;
    }

    // 2. Google Tag Manager (dataLayer)
    if (Array.isArray((window as unknown as { dataLayer?: unknown[] }).dataLayer)) {
      (window as unknown as { dataLayer: unknown[] }).dataLayer.push({
        event: "whatsapp_cta_click",
        cta_label: actionLabel,
        timestamp: new Date().toISOString(),
      });
    }
  }

  // Eksekusi callback langsung jika tidak ada gtag
  if (callback) {
    callback();
  }
}
