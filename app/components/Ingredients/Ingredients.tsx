const ingredients = [
  {
    latin: 'Curcuma Longa',
    badge: 'Anti-inflamasi',
    badgeColor: 'amber',
    name: 'Kunyit',
    desc: 'Kaya curcumin, bantu imunitas & meredakan nyeri sendi ringan.',
    origin: 'Asal: Karanganyar • Panen: 9 bulan.'
  },
  {
    latin: 'Zingiber Officinale',
    badge: 'Hangat',
    badgeColor: 'amber',
    name: 'Jahe Merah',
    desc: 'Gingerol tinggi, melancarkan sirkulasi & mengurangi mual.',
    origin: 'Asal: Pacitan • Varietas: Dandang Merah.'
  },
  {
    latin: 'Cymbopogon',
    badge: 'Detox',
    badgeColor: 'emerald',
    name: 'Sereh',
    desc: 'Citral alami, segar, bantu detoksifikasi & menenangkan.',
    origin: 'Asal: Boyolali • Petik pagi.'
  },
  {
    latin: 'Tamarindus Indica',
    badge: 'Pencernaan',
    badgeColor: 'amber',
    name: 'Asam Jawa',
    desc: 'Asam alami kaya vitamin C, bantu pencernaan & segar.',
    origin: 'Asal: Surakarta • Grade A'
  },
  {
    latin: 'Curcuma Xanthorrhiza',
    badge: 'Tonik Hati',
    badgeColor: 'amber',
    name: 'Temulawak',
    desc: 'Tonik hati tradisional, bantu nafsu makan & stamina.',
    origin: 'Asal: Gunung Kidul.'
  },
  {
    latin: 'Cinnamomum',
    badge: 'Antioksidan',
    badgeColor: 'amber',
    name: 'Kayu Manis',
    desc: 'Ceylon cinnamon, antioksidan & penyeimbang gula darah.',
    origin: 'Asal: Silaga laga, Sumatra utara.'
  }
];

export default function Ingredients() {
  return (
    <section id="ingredients" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 reveal">
          <div>
            <div className="text-[11px] tracking-widest text-jamu-sage uppercase font-semibold mb-3">
              Dari Tanah Indonesia
            </div>
            <h2 className="display-font text-[38px] sm:text-[46px] leading-tight">
              Bahan baku asli Nusantara
            </h2>
          </div>
          <p className="muted max-w-md">
            Dipetik saat matang optimal dari mitra petani di Jawa & Sumatera. Tidak ada konsentrat.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ingredients.map((ingredient, index) => (
            <div
              key={index}
              className="ingredient-card rounded-[20px] border hairline paper p-6 hover:shadow-soft transition reveal cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="text-[12px] tracking-wide text-jamu-sage uppercase">
                  {ingredient.latin}
                </div>
                <span
                  className={`text-[11px] px-2 py-1 rounded-full ${
                    ingredient.badgeColor === 'emerald'
                      ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-200'
                      : 'bg-amber-50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-200'
                  }`}
                >
                  {ingredient.badge}
                </span>
              </div>
              <h3 className="display-font text-[26px] mt-2">{ingredient.name}</h3>
              <p className="muted text-[14px] mt-2">{ingredient.desc}</p>
              <div className="mt-4 text-[12.5px] text-jamu-sage">{ingredient.origin}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
