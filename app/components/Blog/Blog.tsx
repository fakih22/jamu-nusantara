const articles = [
  {
    category: 'Tips Kesehatan Herbal',
    title: 'Kunyit vs Temulawak: kapan minum yang mana?',
    description: 'Panduan sederhana memilih jamu pagi & malam.',
    image: 'https://i.pinimg.com/736x/1b/56/db/1b56db1f00ce7c7f55a687be37f04c6e.jpg'
  },
  {
    category: 'Wawasan Nutrisi',
    title: 'Mengapa jamu harus cold-pressed?',
    description: 'Menjaga enzim & rasa asli rimpang.',
    image: 'https://i.pinimg.com/1200x/8d/43/8c/8d438c24e327e9a925d4042b5e471222.jpg'
  },
  {
    category: 'Gaya Hidup Sehat',
    title: 'Ritual pagi 5 menit ala Nusantara',
    description: 'Peregangan, napas, dan segelas jamu dingin.',
    image: 'https://i.pinimg.com/1200x/ef/f3/b3/eff3b34ad986ebab85fc72f7e0e9277c.jpg'
  }
];

export default function Blog() {
  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-3 mb-8 reveal">
          <h2 className="display-font text-[34px] sm:text-[42px]">Jurnal Jamu</h2>
          <a href="#" className="text-[14px] font-semibold underline underline-offset-4">
            Lihat semua artikel →
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <article
              key={index}
              className="paper rounded-[20px] border hairline overflow-hidden hover:shadow-soft transition reveal"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <div className="text-[11px] tracking-widest text-jamu-sage uppercase">
                  {article.category}
                </div>
                <h3 className="font-semibold text-[18px] mt-2 leading-snug">{article.title}</h3>
                <p className="muted text-[14px] mt-2">{article.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
