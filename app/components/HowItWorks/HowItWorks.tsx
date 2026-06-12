const steps = [
  {
    number: '1',
    title: 'Pilih Produk',
    description: 'Pilih racikan sesuai kebutuhan harian Anda.'
  },
  {
    number: '2',
    title: 'Pesan',
    description: 'Checkout via web, WA, atau aplikasi.'
  },
  {
    number: '3',
    title: 'Pengiriman Cepat',
    description: 'Cold chain same-day untuk JKT & YK.'
  },
  {
    number: '4',
    title: 'Nikmati Hidup Sehat',
    description: 'Minum dingin setiap pagi. Rasakan bedanya 7 hari.'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 section-bg border-y hairline">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <h2 className="display-font text-[34px] sm:text-[42px] text-center reveal">
          Cara mulai
        </h2>
        <div className="ornamental-line w-24 mx-auto mt-4 mb-10" />
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center reveal">
              <div className="w-12 h-12 mx-auto rounded-full bg-jamu-forest text-jamu-cream dark:bg-jamu-beige dark:text-jamu-forest flex items-center justify-center font-semibold">
                {step.number}
              </div>
              <div className="font-semibold mt-4">{step.title}</div>
              <p className="muted text-[14px] mt-1">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
