import { CheckCircle2, Apple, Play } from 'lucide-react';

const features = [
  'Pesan online',
  'Paket berlangganan',
  'Pelacakan kesehatan',
  'Poin loyalitas'
];

export default function AppPromo() {
  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto w-[280px]">
              <div className="rounded-[44px] border-[10px] border-[#1B2C21] shadow-soft-lg bg-[var(--bg-soft)] h-[560px] overflow-hidden relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#1B2C21] rounded-b-2xl" />
                <div className="p-6 pt-12">
                  <div className="text-[11px] tracking-widest text-jamu-sage uppercase">
                    Jamu Nusantara App
                  </div>
                  <div className="display-font text-[28px] mt-2 leading-tight text-[var(--ink)]">
                    Langganan jamu mingguan
                  </div>
                  <div className="mt-5 space-y-3 text-[14px]">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 paper rounded-2xl border hairline p-4 shadow-sm bg-[var(--card)]">
                    <div className="text-[12px] muted">Pengiriman berikutnya</div>
                    <div className="font-semibold text-[var(--ink)]">Selasa, 7:00 – 10:00</div>
                    <div className="text-[12px] muted mt-1">Jl. Kemanggisan Slipi Jakarta Barat</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2 reveal">
            <div className="text-[11px] tracking-widest text-jamu-sage uppercase font-semibold">
              Aplikasi Mobile
            </div>
            <h2 className="display-font text-[38px] sm:text-[50px] leading-[1.05] mt-3">
              Jamu langganan,<br />
              diatur otomatis.
            </h2>
            <p className="muted mt-4 max-w-lg text-[16px]">
              Atur jadwal, skip kapan saja, kumpulkan poin. Dapatkan pengingat minum & laporan kesehatan bulanan.
            </p>
            <ul className="mt-6 space-y-2 text-[15px] muted">
              <li>• Pesan online dengan pelacakan cold-chain</li>
              <li>• Berlangganan mingguan & bulanan – hemat 15%</li>
              <li>• Pelacakan kesehatan & pengingat</li>
              <li>• Poin loyalitas bisa ditukar produk</li>
            </ul>
            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href="#"
                className="px-4 py-3 rounded-xl bg-black text-white text-[13.5px] font-semibold flex items-center gap-2"
              >
                <Apple className="w-4 h-4" /> App Store
              </a>
              <a
                href="#"
                className="px-4 py-3 rounded-xl bg-black text-white text-[13.5px] font-semibold flex items-center gap-2"
              >
                <Play className="w-4 h-4" /> Google Play
              </a>
            </div>
            <p className="text-[12.5px] muted mt-3">4.8 ★ 1,2 ribu ulasan • Ukuran 28 MB</p>
          </div>
        </div>
      </div>
    </section>
  );
}
