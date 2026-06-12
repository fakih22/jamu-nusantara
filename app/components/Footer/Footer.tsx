'use client';

import { FormEvent } from 'react';
import { Leaf } from 'lucide-react';

interface FooterProps {
  showToast: (message: string) => void;
}

export default function Footer({ showToast }: FooterProps) {
  const handleNewsletterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    showToast('Berhasil subscribe newsletter!');
    e.currentTarget.reset();
  };

  return (
    <footer className="border-t hairline py-14">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-[14px]">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-[11px] bg-jamu-forest dark:bg-jamu-beige flex items-center justify-center">
                <Leaf className="w-[18px] h-[18px] text-jamu-gold" />
              </div>
              <div className="font-display font-600 text-[18px]">Jamu Nusantara</div>
            </div>
            <p className="muted mt-3 leading-relaxed">
              Jamu warisan Indonesia, diracik modern di Jakarta Barat. BPOM • Halal • Tanpa pengawet.
            </p>
            <div className="flex gap-3 mt-4 text-jamu-sage">
              <a href="#" aria-label="Instagram">
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" aria-label="Youtube">
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <div className="font-semibold mb-3">Tautan Cepat</div>
            <ul className="space-y-2 muted">
              <li>
                <a href="#products" className="hover:underline">
                  Produk
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:underline">
                  Manfaat
                </a>
              </li>
              <li>
                <a href="#ingredients" className="hover:underline">
                  Bahan
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:underline">
                  Testimoni
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">Layanan Pelanggan</div>
            <ul className="space-y-2 muted">
              <li>
                <a href="#" className="hover:underline">
                  Pengiriman
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Pengembalian
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Langganan
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Hubungi Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Grosir
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">Newsletter</div>
            <p className="muted text-[13.5px]">Tips jamu & promo bulanan. Tanpa spam.</p>
            <form onSubmit={handleNewsletterSubmit} className="mt-3 flex gap-2">
              <input
                type="email"
                required
                placeholder="Email Anda"
                className="flex-1 rounded-full px-4 py-2.5 text-[13.5px]"
              />
              <button className="px-4 py-2.5 rounded-full bg-jamu-forest text-jamu-cream dark:bg-jamu-beige dark:text-jamu-forest text-[13.5px] font-semibold">
                Gabung
              </button>
            </form>
            <p className="text-[11.5px] muted mt-2">
              Dengan mendaftar, Anda setuju dengan Privacy Policy kami.
            </p>
          </div>
        </div>
        <div className="border-t hairline mt-10 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-[12.5px] muted">
          <div>© 2024 Jamu Nusantara, PT Herba Sehat Indonesia. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:underline">
              Privasi
            </a>
            <a href="#" className="hover:underline">
              Syarat & Ketentuan
            </a>
            <a href="#" className="hover:underline">
              BPOM MD 123456789012
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
