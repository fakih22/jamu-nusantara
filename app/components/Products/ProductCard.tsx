import { Product } from '@/app/lib/data';

interface ProductCardProps {
  product: Product;
  isInCompare: boolean;
  onAddToCart: () => void;
  onQuickView: () => void;
  onCompareToggle: () => void;
}

export default function ProductCard({
  product,
  isInCompare,
  onAddToCart,
  onQuickView,
  onCompareToggle
}: ProductCardProps) {
  return (
    <div className="group product-card paper rounded-[22px] border hairline overflow-hidden soft-shadow hover:shadow-soft-lg transition reveal in">
      {/* Clickable image area — opens detail popup */}
      <div
        className="relative overflow-hidden bg-[#f0e7d9] dark:bg-[#1d2820] h-[250px] cursor-pointer"
        onClick={onQuickView}
        title="Lihat detail produk"
      >
        <img
          src={product.img}
          alt={product.name}
          className="product-img w-full h-full object-cover"
        />
        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        <span className="absolute left-3 top-3 chip">{product.tag}</span>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold text-[17.5px] leading-snug">{product.name}</h3>
          <button
            onClick={onCompareToggle}
            className={`text-[11px] px-2 py-1 rounded-full border transition whitespace-nowrap ${
              isInCompare
                ? 'bg-amber-50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-200 border-amber-200 dark:border-amber-800'
                : 'hairline muted hover:border-jamu-sage'
            }`}
          >
            {isInCompare ? 'Terpilih' : 'Bandingkan'}
          </button>
        </div>
        <p className="muted text-[13.5px] mt-1.5 min-h-[38px]">{product.desc}</p>
        <div className="flex items-center justify-between mt-4">
          <div>
            <div className="text-[18px] font-semibold">
              Rp {product.price.toLocaleString('id-ID')}
            </div>
            <div className="text-[11.5px] muted">{product.notes.split('•')[0]}</div>
          </div>
          <button
            onClick={onAddToCart}
            className="btn-primary px-4 py-2.5 rounded-full text-[13.5px] font-semibold"
          >
            Tambah ke Keranjang
          </button>
        </div>
      </div>
    </div>
  );
}
