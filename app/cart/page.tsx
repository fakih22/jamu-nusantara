'use client';

import Link from 'next/link';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { ArrowRight, Minus, Plus, Trash2, ArrowLeft } from 'lucide-react';

export default function CartPage() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeItem, isLoaded } = useCart();

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tax = subtotal * 0.11; // 11% tax
  const total = subtotal + tax;

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-32 pb-20 px-5 sm:px-8 lg:px-10 max-w-7xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-[14px] font-medium muted hover:text-[var(--ink)] transition mb-8">
          <ArrowLeft className="w-4 h-4" /> Kembali Belanja
        </Link>
        <h1 className="display-font text-[32px] sm:text-[40px] text-[var(--ink)] mb-8">Keranjang Belanja</h1>
        
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Cart Items */}
          <div className="lg:col-span-8 space-y-6">
            {!isLoaded ? (
              <div className="text-center py-10 muted">Memuat keranjang...</div>
            ) : cartItems.length === 0 ? (
              <div className="paper p-10 rounded-[24px] border hairline text-center bg-[var(--card)]">
                <p className="text-[16px] muted mb-4">Keranjang belanja Anda kosong.</p>
                <Link href="/" className="btn-primary inline-flex px-6 py-3 rounded-full font-semibold">
                  Mulai Belanja
                </Link>
              </div>
            ) : (
              cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 sm:gap-6 paper p-4 sm:p-6 rounded-[24px] border hairline bg-[var(--card)]">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-[16px] overflow-hidden flex-shrink-0 bg-black/5 dark:bg-white/5">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-semibold text-[18px] sm:text-[20px] text-[var(--ink)]">{item.name}</h3>
                    <div className="text-[15px] font-medium text-jamu-forest dark:text-jamu-gold mt-1">
                      Rp {item.price.toLocaleString('id-ID')}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3 bg-black/5 dark:bg-white/5 rounded-full px-3 py-1.5 border hairline">
                      <button onClick={() => decreaseQuantity(item.id)} className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition">
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-[14px] font-semibold w-4 text-center">{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.id)} className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition">
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="w-10 h-10 flex items-center justify-center rounded-full text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-4">
            <div className="paper p-6 sm:p-8 rounded-[24px] border hairline bg-[var(--card)] sticky top-32">
              <h3 className="font-display font-semibold text-[20px] text-[var(--ink)] mb-6">Ringkasan Pesanan</h3>
              
              <div className="space-y-4 text-[15px]">
                <div className="flex justify-between muted">
                  <span>Subtotal</span>
                  <span className="text-[var(--ink)] font-medium">Rp {subtotal.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between muted">
                  <span>Pajak (11%)</span>
                  <span className="text-[var(--ink)] font-medium">Rp {tax.toLocaleString('id-ID')}</span>
                </div>
                <div className="h-px bg-black/10 dark:bg-white/10 my-4" />
                <div className="flex justify-between text-[18px] font-bold text-[var(--ink)]">
                  <span>Total</span>
                  <span>Rp {total.toLocaleString('id-ID')}</span>
                </div>
              </div>

              <Link 
                href="/checkout"
                className="btn-primary w-full mt-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 group"
              >
                Lanjut ke Pembayaran
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer showToast={() => {}} />
    </>
  );
}
