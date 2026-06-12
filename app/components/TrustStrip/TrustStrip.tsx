export default function TrustStrip() {
  const badges = [
    'Bersertifikat BPOM',
    '• Halal MUI',
    '• Cold-Pressed',
    '• Botol Kaca',
    '• Pengiriman Ramah Lingkungan',
    '• Yogyakarta - Indonesia'
  ];

  return (
    <section className="border-y hairline py-5 section-bg">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 flex flex-wrap justify-center gap-x-10 gap-y-3 text-[11.5px] tracking-widest text-jamu-sage uppercase">
        {badges.map((badge, index) => (
          <span key={index}>{badge}</span>
        ))}
      </div>
    </section>
  );
}
