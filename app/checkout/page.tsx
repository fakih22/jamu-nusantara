'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function CheckoutPage() {
  const { cartItems, clearCart, isLoaded } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    shipping: 'reguler'
  });

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tax = subtotal * 0.11;
  const shippingCost = formData.shipping === 'express' ? 25000 : 15000;
  const total = subtotal + tax + shippingCost;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) return;
    
    let orderDetails = cartItems.map(item => `- ${item.name} (${item.quantity}x) - Rp ${(item.price * item.quantity).toLocaleString('id-ID')}`).join('%0A');
    
    const message = `Halo Jamu Nusantara! Saya ingin mengkonfirmasi pesanan saya:%0A%0A*Data Pemesan:*%0ANama: ${formData.name}%0ANo HP: ${formData.phone}%0AAlamat: ${formData.address}%0APengiriman: ${formData.shipping === 'express' ? 'Express (1 Hari)' : 'Reguler (2-3 Hari)'}%0A%0A*Rincian Pesanan:*%0A${orderDetails}%0A%0ASubtotal: Rp ${subtotal.toLocaleString('id-ID')}%0APajak (11%): Rp ${tax.toLocaleString('id-ID')}%0AOngkos Kirim: Rp ${shippingCost.toLocaleString('id-ID')}%0A*Total Pembayaran: Rp ${total.toLocaleString('id-ID')}*%0A%0AMohon info untuk pembayaran selanjutnya. Terima kasih!`;
    
    clearCart();
    window.open(`https://wa.me/6282336618275?text=${message}`, '_blank');
  };

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-32 pb-20 px-5 sm:px-8 lg:px-10 max-w-7xl mx-auto">
        <Link href="/cart" className="inline-flex items-center gap-2 text-[14px] font-medium muted hover:text-[var(--ink)] transition mb-8">
          <ArrowLeft className="w-4 h-4" /> Kembali ke Keranjang
        </Link>
        
        <h1 className="display-font text-[32px] sm:text-[40px] text-[var(--ink)] mb-8">Checkout</h1>
        
        {!isLoaded ? (
          <div className="text-center py-10 muted">Memuat data pesanan...</div>
        ) : cartItems.length === 0 ? (
          <div className="paper p-10 rounded-[24px] border hairline text-center bg-[var(--card)]">
            <p className="text-[16px] muted mb-4">Keranjang belanja Anda kosong.</p>
            <Link href="/" className="btn-primary inline-flex px-6 py-3 rounded-full font-semibold">
              Mulai Belanja
            </Link>
          </div>
        ) : (
        <form onSubmit={handleSubmit} className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-8">
            <div className="paper p-6 sm:p-8 rounded-[24px] border hairline bg-[var(--card)]">
              <h2 className="font-display font-semibold text-[20px] text-[var(--ink)] mb-6">Informasi Pengiriman</h2>
              
              <div className="space-y-5">
                <div>
                  <label className="block text-[13px] font-semibold text-[var(--ink)] mb-2">Nama Lengkap</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-transparent border hairline rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-jamu-forest dark:focus:border-jamu-gold transition" placeholder="Masukkan nama lengkap" />
                </div>
                
                <div>
                  <label className="block text-[13px] font-semibold text-[var(--ink)] mb-2">Nomor HP / WhatsApp</label>
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-transparent border hairline rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-jamu-forest dark:focus:border-jamu-gold transition" placeholder="Contoh: 081234567890" />
                </div>
                
                <div>
                  <label className="block text-[13px] font-semibold text-[var(--ink)] mb-2">Alamat Lengkap</label>
                  <textarea required name="address" value={formData.address} onChange={handleChange} rows={3} className="w-full bg-transparent border hairline rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-jamu-forest dark:focus:border-jamu-gold transition resize-none" placeholder="Masukkan alamat pengiriman lengkap dengan kode pos"></textarea>
                </div>

                <div>
                  <label className="block text-[13px] font-semibold text-[var(--ink)] mb-2">Pilihan Pengiriman</label>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className={`cursor-pointer rounded-xl border hairline p-4 flex items-start gap-3 transition ${formData.shipping === 'reguler' ? 'border-jamu-forest bg-jamu-forest/5 dark:border-jamu-gold dark:bg-jamu-gold/10' : ''}`}>
                      <div className="pt-0.5">
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${formData.shipping === 'reguler' ? 'border-jamu-forest dark:border-jamu-gold' : 'border-gray-300'}`}>
                          {formData.shipping === 'reguler' && <div className="w-2 h-2 rounded-full bg-jamu-forest dark:bg-jamu-gold" />}
                        </div>
                      </div>
                      <input type="radio" name="shipping" value="reguler" checked={formData.shipping === 'reguler'} onChange={handleChange} className="hidden" />
                      <div>
                        <div className="font-semibold text-[14px] text-[var(--ink)]">Reguler</div>
                        <div className="text-[12px] muted mt-0.5">Estimasi 2-3 hari</div>
                        <div className="text-[13px] font-semibold text-[var(--ink)] mt-1">Rp 15.000</div>
                      </div>
                    </label>
                    <label className={`cursor-pointer rounded-xl border hairline p-4 flex items-start gap-3 transition ${formData.shipping === 'express' ? 'border-jamu-forest bg-jamu-forest/5 dark:border-jamu-gold dark:bg-jamu-gold/10' : ''}`}>
                      <div className="pt-0.5">
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${formData.shipping === 'express' ? 'border-jamu-forest dark:border-jamu-gold' : 'border-gray-300'}`}>
                          {formData.shipping === 'express' && <div className="w-2 h-2 rounded-full bg-jamu-forest dark:bg-jamu-gold" />}
                        </div>
                      </div>
                      <input type="radio" name="shipping" value="express" checked={formData.shipping === 'express'} onChange={handleChange} className="hidden" />
                      <div>
                        <div className="font-semibold text-[14px] text-[var(--ink)]">Express</div>
                        <div className="text-[12px] muted mt-0.5">Estimasi 1 hari (Besok sampai)</div>
                        <div className="text-[13px] font-semibold text-[var(--ink)] mt-1">Rp 25.000</div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="paper p-6 sm:p-8 rounded-[24px] border hairline bg-[var(--card)] sticky top-32">
              <h3 className="font-display font-semibold text-[20px] text-[var(--ink)] mb-6">Rincian Pesanan</h3>
              
              <div className="space-y-4 mb-6">
                {cartItems.map((item, index) => (
                  <div key={index} className="flex justify-between text-[14px]">
                    <div className="muted">{item.name} <span className="text-[var(--ink)] font-medium ml-1">x{item.quantity}</span></div>
                    <div className="font-medium text-[var(--ink)]">Rp {(item.price * item.quantity).toLocaleString('id-ID')}</div>
                  </div>
                ))}
              </div>

              <div className="h-px bg-black/10 dark:bg-white/10 my-4" />

              <div className="space-y-3 text-[14px]">
                <div className="flex justify-between muted">
                  <span>Subtotal</span>
                  <span className="text-[var(--ink)] font-medium">Rp {subtotal.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between muted">
                  <span>Pajak (11%)</span>
                  <span className="text-[var(--ink)] font-medium">Rp {tax.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between muted">
                  <span>Ongkos Kirim</span>
                  <span className="text-[var(--ink)] font-medium">Rp {shippingCost.toLocaleString('id-ID')}</span>
                </div>
                <div className="h-px bg-black/10 dark:bg-white/10 my-4" />
                <div className="flex justify-between text-[18px] font-bold text-[var(--ink)]">
                  <span>Total Bayar</span>
                  <span className="text-jamu-forest dark:text-jamu-gold">Rp {total.toLocaleString('id-ID')}</span>
                </div>
              </div>

              <button 
                type="submit"
                className="btn-primary w-full mt-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
              >
                <CheckCircle2 className="w-5 h-5" />
                Konfirmasi via WhatsApp
              </button>
            </div>
          </div>
        </form>
        )}
      </main>

      <Footer showToast={() => {}} />
    </>
  );
}
