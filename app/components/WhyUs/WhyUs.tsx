const features = [
  {
    title: '100% Alami',
    description: 'Hanya rimpang, rempah, air, dan madu hutan murni.'
  },
  {
    title: 'Tanpa Pengawet Buatan',
    description: 'Cold chain 2–5°C, shelf life 14 hari.'
  },
  {
    title: 'Bersertifikat BPOM',
    description: 'MD 123456789012 • Halal MUI'
  },
  {
    title: 'Kemasan Ramah Lingkungan',
    description: 'Botol kaca returnable, label kertas daur ulang.'
  },
  {
    title: 'Diproduksi Segar Setiap Hari',
    description: 'Brewed 04:00 WIB. Kirim hari yang sama.'
  },
  {
    title: 'Dipercaya Ribuan Pelanggan',
    description: '10.472 pelanggan aktif, repeat order 68%.'
  }
];

export default function WhyUs() {
  return (
    <section className="py-20 sm:py-24 section-bg border-y hairline">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 reveal">
            <h2 className="display-font text-[38px] sm:text-[46px] leading-tight">
              Kenapa Jamu Nusantara?
            </h2>
            <p className="muted mt-4">
              Kami membawa jamu ke standar craft beverage modern, tanpa menghilangkan jiwa-nya.
            </p>
            <div className="mt-6 rounded-[20px] overflow-hidden border hairline">
              <img
                src="https://images.unsplash.com/photo-1544145945-f90425340c7e?w=900&auto=format&fit=crop&q=80"
                alt="Jamu brewing process"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <div key={index} className="paper rounded-[18px] border hairline p-5 reveal">
                <div className="font-semibold">{feature.title}</div>
                <p className="muted text-[14px] mt-1">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
