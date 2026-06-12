'use client';

import { useEffect, useState } from 'react';

export default function Promo() {
  const [timeLeft, setTimeLeft] = useState({
    days: 47,
    hours: 12,
    minutes: 8,
    seconds: 22
  });

  useEffect(() => {
    const endTime = Date.now() + 1000 * 60 * 60 * 47 + 1000 * 60 * 12 + 1000 * 22 + 1000 * 60 * 60 * 8;

    const interval = setInterval(() => {
      const diff = Math.max(0, endTime - Date.now());
      const days = Math.floor(diff / 86400000);
      const hours = Math.floor(diff / 3600000) % 24;
      const minutes = Math.floor(diff / 60000) % 60;
      const seconds = Math.floor(diff / 1000) % 60;

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const padNumber = (num: number) => String(num).padStart(2, '0');

  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="rounded-[28px] overflow-hidden relative bg-[#193224] text-[#f1e8d7] reveal">
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
              backgroundSize: '18px 18px'
            }}
          />
          <div className="relative px-6 sm:px-12 py-12 sm:py-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <div className="text-[11px] tracking-widest text-amber-200/90 uppercase font-semibold">
                Limited — Musim Pancaroba
              </div>
              <h3 className="display-font text-[34px] sm:text-[42px] mt-2">
                Imunitas Pack – Hemat 20%
              </h3>
              <p className="text-amber-100/80 mt-2 max-w-xl">
                Bundle Kunyit Asam + Jahe Merah + Immunity Booster, 12 botol. Gratis cooler bag.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-[13px]">
                <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15 font-mono">
                  JAMUSEHAT20
                </span>
                <span className="text-amber-200/80">Copy voucher saat checkout</span>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="text-[11px] tracking-widest uppercase text-amber-200/80">
                Berakhir dalam
              </div>
              <div className="display-font text-[34px] sm:text-[40px] tracking-tight mt-1">
                {padNumber(timeLeft.days)}:{padNumber(timeLeft.hours)}:{padNumber(timeLeft.minutes)}:
                {padNumber(timeLeft.seconds)}
              </div>
              <div className="text-[11px] text-amber-200/70 tracking-wide">
                Hari : Jam : Menit : Detik
              </div>
              <a
                href="#products"
                className="inline-flex mt-4 px-5 py-3 rounded-full bg-[#e8d7bd] text-[#1b2a1f] font-semibold text-[14px] hover:bg-[#f0e2c9] transition"
              >
                Dapatkan Penawaran
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
