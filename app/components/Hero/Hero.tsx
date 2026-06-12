import { ArrowRight, Leaf } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-[120px] sm:pt-[140px] pb-20 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute -top-32 -right-20 w-[520px] h-[520px] rounded-full opacity-[0.15] blur-[120px]"
          style={{ background: 'radial-gradient(circle, #a8bcae, transparent 70%)' }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-[11.5px] font-semibold tracking-wide text-jamu-sage bg-jamu-sand/70 dark:bg-white/[0.045] border border-[#e2d5c2] dark:border-white/10 rounded-full px-3 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-jamu-gold" />
              BERSERTIFIKAT BPOM • 100% ALAMI • SEGAR SETIAP HARI
            </div>
            <h1 className="display-font text-[44px] sm:text-[58px] lg:text-[68px] leading-[0.97] tracking-[-0.022em] font-600">
              Jamu Tradisional<br />
              Indonesia<br />
              <em className="font-[400] text-jamu-sage">untuk Kehidupan Modern</em>
            </h1>
            <p className="mt-5 text-[16.5px] sm:text-[17.5px] leading-relaxed muted max-w-xl">
              Racikan jamu warisan Nusantara, dikemas premium untuk gaya hidup modern. Tanpa pengawet, tanpa pemanis buatan. Disajikan dingin, siap minum.
            </p>
            <div className="flex flex-wrap gap-3 mt-7">
              <a
                href="#products"
                className="btn-primary px-6 py-3.5 rounded-full text-[14.5px] font-semibold inline-flex items-center gap-2"
              >
                Belanja Sekarang
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#ingredients"
                className="btn-ghost px-6 py-3.5 rounded-full text-[14.5px] font-semibold"
              >
                Jelajahi Produk
              </a>
            </div>
            <div className="flex items-center gap-7 mt-8 text-[13.5px] muted">
              <div className="flex -space-x-2">
                <img
                  src="https://ui-avatars.com/api/?name=User+1&background=c89a5b&color=fff&size=40"
                  className="w-8 h-8 rounded-full ring-2 ring-[var(--bg)]"
                  alt="Avatar pengguna"
                />
                <img
                  src="https://ui-avatars.com/api/?name=User+2&background=7a9280&color=fff&size=40"
                  className="w-8 h-8 rounded-full ring-2 ring-[var(--bg)]"
                  alt="Avatar pengguna"
                />
                <img
                  src="https://ui-avatars.com/api/?name=User+3&background=13291d&color=fff&size=40"
                  className="w-8 h-8 rounded-full ring-2 ring-[var(--bg)]"
                  alt="Avatar pengguna"
                />
              </div>
              <div>
                <span className="font-semibold text-jamu-forest dark:text-jamu-beige">4.9/5</span> dari 2.314 ulasan
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-[520px]">
              <div className="relative rounded-[30px] overflow-hidden soft-shadow bg-[#e9e2d6] dark:bg-[#1f2a22]">
                <img
                  src="https://i.pinimg.com/736x/da/3c/b0/da3cb080047c8d7ade17d9eeb20063ce.jpg"
                  alt="Premium Jamu Nusantara bottles"
                  className="w-full h-[500px] sm:h-[560px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
              </div>
              
              {/* Floating stat cards */}
              <div className="absolute -left-4 sm:-left-10 top-12 glass-card rounded-2xl px-4 py-3 w-[170px]">
                <div className="text-[11px] uppercase tracking-wider muted">Pelanggan</div>
                <div className="display-font text-[26px] font-600 leading-tight">10.000+</div>
                <div className="text-[11.5px] muted">Se-Indonesia</div>
              </div>
              <div className="absolute -right-3 sm:-right-8 top-48 glass-card rounded-2xl px-4 py-3 w-[170px]">
                <div className="text-[11px] uppercase tracking-wider muted">Bersertifikat</div>
                <div className="display-font text-[20px] font-600">BPOM RI MD</div>
                <div className="text-[11.5px] muted">Teruji Lab</div>
              </div>
              <div className="absolute left-8 -bottom-6 glass-card rounded-2xl px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-amber-700 dark:text-amber-300" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider muted">100% Alami</div>
                  <div className="font-semibold text-[14px]">Tanpa Pengawet</div>
                </div>
              </div>
            </div>
            <p className="text-center text-[11.5px] tracking-widest text-jamu-sage mt-10 uppercase">
              Kunyit • Jahe • Sereh • Asam Jawa • Temulawak • Kayu Manis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
