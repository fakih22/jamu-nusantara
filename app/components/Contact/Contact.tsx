'use client';

import { FormEvent } from 'react';
import { MessageCircle } from 'lucide-react';

interface ContactProps {
  showToast: (message: string) => void;
}

export default function Contact({ showToast }: ContactProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    showToast('Pesan terkirim. Terima kasih!');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-20 sm:py-24 section-bg border-t hairline">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 reveal">
            <h2 className="display-font text-[36px] sm:text-[44px]">Hubungi kami</h2>
            <p className="muted mt-2">Tim kami di Jakarta Barat, Senin–Sabtu 08:00–17:00 WIB.</p>
            <form onSubmit={handleSubmit} className="mt-7 grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[12.5px] font-medium">Nama</label>
                <input
                  required
                  name="name"
                  placeholder="Nama Anda"
                  className="mt-1 w-full rounded-xl px-3.5 py-3 text-[14px]"
                />
              </div>
              <div>
                <label className="text-[12.5px] font-medium">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="email@domain.com"
                  className="mt-1 w-full rounded-xl px-3.5 py-3 text-[14px]"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-[12.5px] font-medium">Pesan</label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Ada yang bisa kami bantu?"
                  className="mt-1 w-full rounded-xl px-3.5 py-3 text-[14px]"
                />
              </div>
              <div className="sm:col-span-2 flex items-center gap-3">
                <button className="btn-primary px-5 py-3 rounded-full text-[14px] font-semibold">
                  Kirim Pesan
                </button>
                <span className="text-[13px] muted">atau</span>
                <a
                  href="https://wa.me/6282336618275"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-emerald-600/30 text-emerald-700 dark:text-emerald-300 font-semibold text-[13.5px]"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </form>
          </div>
          <div className="lg:col-span-5 reveal">
            <div className="paper rounded-[22px] border hairline p-6 soft-shadow">
              <div className="font-semibold text-[17px]">Jamu Nusantara Kitchen</div>
              <p className="muted text-[14.5px] mt-2">
                Jl. Kemanggisan Slipi
                <br />
                Jakarta Barat, Indonesia
              </p>
              <div className="mt-4 text-[14.5px] space-y-1">
                <div>
                  Email:{' '}
                  <a className="underline underline-offset-2" href="mailto:halo@jamunusantara.id">
                    halo@jamunusantara.id
                  </a>
                </div>
                <div>WA: +62 823-3661-8275</div>
              </div>
              <div className="mt-5 rounded-xl bg-[#eee7d9] dark:bg-white/[0.04] h-36 flex items-center justify-center text-[12.5px] muted">
                Map – Jakarta Barat
              </div>
              <div className="flex gap-4 mt-4 text-[13.5px]">
                <a href="#" className="hover:underline">
                  Instagram
                </a>
                <a href="#" className="hover:underline">
                  TikTok
                </a>
                <a href="#" className="hover:underline">
                  Tokopedia
                </a>
                <a href="#" className="hover:underline">
                  Shopee
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
