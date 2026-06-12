import { X } from 'lucide-react';
import { Product } from '@/app/lib/data';
import { useEffect } from 'react';

interface QuickViewModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: () => void;
}

export default function QuickViewModal({ product, onClose, onAddToCart }: QuickViewModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handleAddAndClose = () => {
    onAddToCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[70]">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] max-w-3xl paper rounded-[24px] shadow-soft-lg border hairline overflow-hidden">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 w-9 h-9 rounded-full hover:bg-black/5 dark:hover:bg-white/10 flex items-center justify-center z-10"
        >
          <X className="w-4 h-4" />
        </button>
        <div className="grid md:grid-cols-2 gap-0">
          <div className="bg-[#f0e7d9] dark:bg-[#1d2820] min-h-[320px]">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-full object-cover min-h-[320px]"
            />
          </div>
          <div className="p-7">
            <div className="chip inline-block mb-2">{product.tag}</div>
            <h3 className="display-font text-[28px]">{product.name}</h3>
            <p className="muted mt-2">{product.desc}</p>
            <ul className="text-[13.5px] muted mt-4 space-y-1">
              <li>• {product.notes}</li>
              <li>• BPOM Certified • Halal</li>
              <li>• Cold chain 2–5°C</li>
            </ul>
            <div className="flex items-center justify-between mt-6">
              <div className="text-[22px] font-semibold">
                Rp {product.price.toLocaleString('id-ID')}
              </div>
              <button
                onClick={handleAddAndClose}
                className="btn-primary px-5 py-3 rounded-full text-[14px] font-semibold"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
