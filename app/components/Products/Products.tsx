'use client';

import { useState } from 'react';
import { Search, GitCompare } from 'lucide-react';
import { products, Product } from '@/app/lib/data';
import { useCart } from '../../context/CartContext';
import ProductCard from './ProductCard';
import QuickViewModal from './QuickViewModal';
import CompareModal from './CompareModal';

interface ProductsProps {
  showToast: (message: string) => void;
}

export default function Products({ showToast }: ProductsProps) {
  const { addToCart } = useCart();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [compareList, setCompareList] = useState<string[]>([]);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  const filters = ['all', 'Immunity', 'Digestion', 'Energy', 'Detox'];

  const filteredProducts = products.filter((p) => {
    const matchFilter = activeFilter === 'all' || p.benefits.includes(activeFilter);
    const matchSearch =
      !searchTerm ||
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchFilter && matchSearch;
  });

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    showToast('Ditambahkan ke keranjang');
  };

  const handleCompareToggle = (id: string) => {
    if (compareList.includes(id)) {
      setCompareList(compareList.filter((item) => item !== id));
    } else {
      if (compareList.length >= 3) {
        showToast('Maksimal 3 produk untuk dibandingkan');
        return;
      }
      setCompareList([...compareList, id]);
      if (compareList.length + 1 >= 2) {
        setIsCompareModalOpen(true);
      }
    }
  };

  const handleClearCompare = () => {
    setCompareList([]);
    setIsCompareModalOpen(false);
  };

  return (
    <section id="products" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl reveal">
          <div className="text-[11px] tracking-widest text-jamu-sage uppercase font-semibold mb-3">
            Koleksi Pilihan
          </div>
          <h2 className="display-font text-[38px] sm:text-[48px] leading-[1.05] tracking-tight">
            Jamu harian, untuk tubuh modern.
          </h2>
          <p className="muted mt-4 text-[16px]">
            Enam racikan signature. Fresh-brewed setiap pagi di Yogyakarta, dikirim dingin ke seluruh Indonesia.
          </p>
        </div>

        {/* Search / Filters */}
        <div className="mt-8 flex flex-col lg:flex-row lg:items-center gap-3 justify-between reveal">
          <div className="relative w-full lg:max-w-sm">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              placeholder="Cari: kunyit, imunitas, detox..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-full pl-10 pr-4 py-3 text-[14px]"
            />
          </div>
          <div className="flex flex-wrap gap-2 text-[12.5px]">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-2 rounded-full font-semibold transition ${
                  activeFilter === filter
                    ? 'bg-jamu-forest text-jamu-cream dark:bg-jamu-beige dark:text-jamu-forest'
                    : 'border hairline hover:border-jamu-sage'
                }`}
              >
                {filter === 'all' ? 'Semua' : filter}
              </button>
            ))}
            <button
              onClick={() => {
                if (compareList.length === 0) {
                  showToast('Pilih produk untuk dibandingkan');
                } else {
                  setIsCompareModalOpen(true);
                }
              }}
              className="ml-1 px-3.5 py-2 rounded-full border border-jamu-gold/50 text-jamu-gold font-semibold hover:bg-amber-50 dark:hover:bg-white/[0.04] transition inline-flex items-center gap-1.5"
            >
              <GitCompare className="w-3.5 h-3.5" /> Bandingkan{' '}
              <span className="text-[11px]">({compareList.length})</span>
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 mt-9">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isInCompare={compareList.includes(product.id)}
              onAddToCart={() => handleAddToCart(product)}
              onQuickView={() => setQuickViewProduct(product)}
              onCompareToggle={() => handleCompareToggle(product.id)}
            />
          ))}
        </div>

        <div className="text-center mt-10 text-[13.5px] muted">
          Fresh batch setiap hari • Gratis ongkir Jabodetabek min. Rp 150rb • Tukar botol kaca Rp 3.000/btl
        </div>
      </div>

      {/* Modals */}
      {quickViewProduct && (
        <QuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
          onAddToCart={() => handleAddToCart(quickViewProduct)}
        />
      )}
      {isCompareModalOpen && (
        <CompareModal
          compareList={compareList}
          products={products}
          onClose={() => setIsCompareModalOpen(false)}
          onClear={handleClearCompare}
        />
      )}
    </section>
  );
}
