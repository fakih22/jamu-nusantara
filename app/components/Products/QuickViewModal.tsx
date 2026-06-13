'use client';

import { X, ShoppingBag, Leaf, Shield, Thermometer } from 'lucide-react';
import { Product } from '@/app/lib/data';
import { useEffect, useState } from 'react';

interface QuickViewModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: () => void;
}

export default function QuickViewModal({ product, onClose, onAddToCart }: QuickViewModalProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    const t = setTimeout(() => setVisible(true), 10);
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      clearTimeout(t);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 280);
  };

  const handleAddAndClose = () => {
    onAddToCart();
    handleClose();
  };

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center px-4"
      style={{
        transition: 'background 0.28s ease',
        background: visible ? 'rgba(0,0,0,0.55)' : 'rgba(0,0,0,0)',
        backdropFilter: visible ? 'blur(6px)' : 'blur(0px)',
        WebkitBackdropFilter: visible ? 'blur(6px)' : 'blur(0px)',
      }}
      onClick={handleClose}
    >
      {/* Modal Panel */}
      <div
        className="relative w-full max-w-3xl paper rounded-[28px] shadow-soft-lg border hairline overflow-hidden"
        style={{
          transition: 'opacity 0.28s ease, transform 0.28s cubic-bezier(0.16,1,0.3,1)',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0) scale(1)' : 'translateY(32px) scale(0.97)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 z-20 w-9 h-9 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 flex items-center justify-center transition"
          aria-label="Tutup"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Product Image */}
          <div className="relative bg-[#f0e7d9] dark:bg-[#1d2820] min-h-[300px] md:min-h-[420px]">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-full object-cover absolute inset-0"
            />
            {/* Badge */}
            <span className="absolute left-4 top-4 chip z-10">{product.tag}</span>
          </div>

          {/* Product Details */}
          <div className="p-7 flex flex-col justify-between">
            <div>
              {/* Benefits Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {product.benefits.map((b) => (
                  <span
                    key={b}
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-full border border-jamu-sage/40 text-jamu-sage bg-jamu-sage/5"
                  >
                    {b}
                  </span>
                ))}
              </div>

              {/* Name */}
              <h3 className="display-font text-[26px] sm:text-[30px] leading-tight">{product.name}</h3>

              {/* Description */}
              <p className="muted mt-2.5 text-[14px] leading-relaxed">{product.desc}</p>

              {/* Divider */}
              <div className="ornamental-line my-5" />

              {/* Info list */}
              <ul className="space-y-2.5 text-[13.5px]">
                <li className="flex items-center gap-2.5">
                  <Leaf className="w-4 h-4 text-jamu-sage flex-shrink-0" />
                  <span className="muted">{product.notes}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Shield className="w-4 h-4 text-jamu-sage flex-shrink-0" />
                  <span className="muted">BPOM Certified • Halal MUI</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Thermometer className="w-4 h-4 text-jamu-sage flex-shrink-0" />
                  <span className="muted">Disimpan dingin 2–5°C</span>
                </li>
              </ul>
            </div>

            {/* Price & CTA */}
            <div className="mt-6 pt-5 border-t hairline flex items-center justify-between gap-4">
              <div>
                <div className="text-[24px] font-bold tracking-tight whitespace-nowrap">
                  Rp {product.price.toLocaleString('id-ID')}
                </div>
                <div className="text-[11.5px] muted mt-0.5">
                  {product.notes.split('•')[0]?.trim()}
                </div>
              </div>
              <button
                onClick={handleAddAndClose}
                className="btn-primary flex items-center gap-2 px-5 py-3 rounded-full text-[14px] font-semibold whitespace-nowrap"
              >
                <ShoppingBag className="w-4 h-4" />
                Tambah ke Keranjang
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
