import { X } from 'lucide-react';
import { Product } from '@/app/lib/data';
import { useEffect } from 'react';

interface CompareModalProps {
  compareList: string[];
  products: Product[];
  onClose: () => void;
  onClear: () => void;
}

export default function CompareModal({ compareList, products, onClose, onClear }: CompareModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const compareItems = compareList.map((id) => products.find((p) => p.id === id)).filter(Boolean) as Product[];

  return (
    <div className="fixed inset-0 z-[70]">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-4xl paper rounded-[24px] shadow-soft-lg border hairline p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="display-font text-[26px]">Compare Products</h3>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full hover:bg-black/5 dark:hover:bg-white/10 flex items-center justify-center"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="overflow-x-auto text-[14px]">
          <table className="w-full text-left">
            <tbody>
              <tr className="border-b border-[var(--border)]">
                <td className="py-3 pr-6 font-semibold whitespace-nowrap text-jamu-sage">Produk</td>
                {compareItems.map((item) => (
                  <td key={item.id} className="py-3 pr-6">
                    <strong>{item.name}</strong>
                  </td>
                ))}
              </tr>
              <tr className="border-b border-[var(--border)]">
                <td className="py-3 pr-6 font-semibold whitespace-nowrap text-jamu-sage">Harga</td>
                {compareItems.map((item) => (
                  <td key={item.id} className="py-3 pr-6">
                    Rp {item.price.toLocaleString('id-ID')}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-[var(--border)]">
                <td className="py-3 pr-6 font-semibold whitespace-nowrap text-jamu-sage">Fokus</td>
                {compareItems.map((item) => (
                  <td key={item.id} className="py-3 pr-6">
                    {item.benefits.join(', ')}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-[var(--border)]">
                <td className="py-3 pr-6 font-semibold whitespace-nowrap text-jamu-sage">Catatan</td>
                {compareItems.map((item) => (
                  <td key={item.id} className="py-3 pr-6">
                    {item.notes}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="text-right mt-4">
          <button onClick={onClear} className="text-[13px] muted underline">
            Clear comparison
          </button>
        </div>
      </div>
    </div>
  );
}
