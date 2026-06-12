import { ShieldCheck, Leaf, Zap, Droplets, Moon, Sparkles } from 'lucide-react';

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Tingkatkan Imunitas',
    description: 'Curcumin & gingerol bantu pertahanan tubuh harian.'
  },
  {
    icon: Leaf,
    title: 'Perbaiki Pencernaan',
    description: 'Temulawak dan asam jawa meredakan kembung.'
  },
  {
    icon: Zap,
    title: 'Tambah Energi',
    description: 'Jahe merah & kencur, energi bersih tanpa crash.'
  },
  {
    icon: Droplets,
    title: 'Detoks Alami',
    description: 'Lemongrass & cinnamon bantu proses detoks alami hati.'
  },
  {
    icon: Moon,
    title: 'Kurangi Kelelahan',
    description: 'Adaptogen herbal untuk recovery yang lebih baik.'
  },
  {
    icon: Sparkles,
    title: 'Kaya Antioksidan',
    description: 'Tinggi antioksidan alami untuk kulit & sel tubuh.'
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 sm:py-24 section-bg border-y hairline">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl mx-auto text-center reveal">
          <h2 className="display-font text-[38px] sm:text-[46px] leading-tight">
            Kenapa tubuh Anda akan berterima kasih
          </h2>
          <p className="muted mt-3">Manfaat yang terasa, bukan sekadar klaim.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="paper rounded-[20px] border hairline p-6 soft-shadow reveal">
                <div className="w-11 h-11 rounded-xl bg-[#e8efe6] dark:bg-white/[0.05] flex items-center justify-center text-jamu-forest dark:text-jamu-sage-light mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-[17px]">{benefit.title}</h3>
                <p className="muted text-[14.5px] mt-2">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
