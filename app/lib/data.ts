// Product Data
export interface Product {
  id: string;
  name: string;
  price: number;
  tag: string;
  benefits: string[];
  desc: string;
  img: string;
  notes: string;
}

export const products: Product[] = [
  // Immunity
  {
    id: 'kunir',
    name: 'Jamu Kunyit Asam',
    price: 35000,
    tag: 'Immunity',
    benefits: ['Immunity', 'Detox'],
    desc: 'Kunyit segar, asam jawa, gula aren. Segar & asam manis seimbang.',
    img: 'https://i.pinimg.com/1200x/f0/a0/46/f0a046651f10786aa119b026bc75a915.jpg',
    notes: '250ml • 45 kkal • Tanpa pengawet'
  },
  {
    id: 'immunity',
    name: 'Jamu Immunity Booster',
    price: 42000,
    tag: 'Immunity',
    benefits: ['Immunity', 'Energy'],
    desc: 'Kunyit + jahe merah + temulawak + probiotik alami. Power shot.',
    img: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=700&auto=format&fit=crop&q=80',
    notes: '200ml • 35 kkal • Extra gingerol'
  },
  {
    id: 'wedang_uwuh',
    name: 'Wedang Uwuh',
    price: 38000,
    tag: 'Immunity',
    benefits: ['Immunity', 'Energy'],
    desc: 'Campuran secang, jahe, cengkeh, dan rempah lainnya. Hangat dan menjaga daya tahan tubuh.',
    img: 'https://i.pinimg.com/1200x/24/1c/55/241c55c869f6796ead54c2aaf0dc0acf.jpg',
    notes: '250ml • 50 kkal • Kaya antioksidan'
  },
  {
    id: 'susu_jahe',
    name: 'Susu Jahe Merah',
    price: 36000,
    tag: 'Immunity',
    benefits: ['Immunity', 'Digestion'],
    desc: 'Paduan jahe merah murni dan susu segar. Melegakan tenggorokan dan memperkuat imunitas.',
    img: 'https://i.pinimg.com/736x/09/9b/a1/099ba1bc89d6fc8c03f5401074afe8e3.jpg',
    notes: '250ml • 110 kkal • Creamy & Hangat'
  },

  // Digestion
  {
    id: 'temulawak',
    name: 'Jamu Temulawak',
    price: 36000,
    tag: 'Digestion',
    benefits: ['Digestion', 'Detox'],
    desc: 'Temulawak Jawa, madu, jeruk nipis. Tonik hati harian untuk pencernaan sehat.',
    img: 'https://i.pinimg.com/736x/8a/9b/65/8a9b6566a7cf8310017b3f904f0bed39.jpg',
    notes: '250ml • 41 kkal'
  },
  {
    id: 'sinom',
    name: 'Jamu Sinom',
    price: 33000,
    tag: 'Digestion',
    benefits: ['Digestion', 'Immunity'],
    desc: 'Daun asam muda (sinom) dengan kunyit. Menyegarkan, mendinginkan perut, dan melancarkan pencernaan.',
    img: 'https://i.pinimg.com/736x/45/b3/24/45b324f6fa7b4a55febd48d0476c1deb.jpg',
    notes: '250ml • 35 kkal • Sangat menyegarkan'
  },
  {
    id: 'kudu_laos',
    name: 'Jamu Kudu Laos',
    price: 35000,
    tag: 'Digestion',
    benefits: ['Digestion', 'Energy'],
    desc: 'Mengkudu dan lengkuas. Efektif meredakan perut kembung dan menjaga kesehatan lambung.',
    img: 'https://i.pinimg.com/736x/a1/ce/ea/a1ceeab50f09cd591a2ec2362ec96398.jpg',
    notes: '250ml • 40 kkal • Hangat di perut'
  },
  {
    id: 'beras_kencur',
    name: 'Jamu Beras Kencur',
    price: 32000,
    tag: 'Digestion',
    benefits: ['Digestion', 'Energy'],
    desc: 'Beras premium & kencur aromatik. Creamy, hangat, melapisi lambung dengan baik.',
    img: 'https://i.pinimg.com/736x/f6/14/36/f6143626a0cdbd0bb5b0b9abc9c5620c.jpg',
    notes: '250ml • 62 kkal • Madu hutan'
  },

  // Energy
  {
    id: 'jahe',
    name: 'Jamu Jahe Merah',
    price: 34000,
    tag: 'Energy',
    benefits: ['Energy', 'Immunity'],
    desc: 'Jahe merah Wonosobo, sereh, madu. Hangat kuat, sirkulasi lancar seketika.',
    img: 'https://i.pinimg.com/736x/b5/77/e3/b577e3f9e9b0247b237c913aa21beb5c.jpg',
    notes: '250ml • 38 kkal'
  },
  {
    id: 'cabe_puyang',
    name: 'Jamu Cabe Puyang',
    price: 37000,
    tag: 'Energy',
    benefits: ['Energy', 'Digestion'],
    desc: 'Puyang dan cabe jawa. Mengurangi pegal linu dan mengembalikan stamina tubuh yang lelah.',
    img: 'https://i.pinimg.com/1200x/33/30/38/33303808400d46c00be67513bfca7e92.jpg',
    notes: '250ml • 42 kkal • Anti pegal linu'
  },
  {
    id: 'bandrek',
    name: 'Bandrek Rempah',
    price: 35000,
    tag: 'Energy',
    benefits: ['Energy', 'Immunity'],
    desc: 'Minuman hangat tradisional dengan jahe dan gula merah. Pendongkrak energi instan.',
    img: 'https://i.pinimg.com/736x/a1/3b/db/a13bdb714ee10f9bd4c464bcf0bb9ded.jpg',
    notes: '250ml • 85 kkal • Gula aren asli'
  },
  {
    id: 'bajigur',
    name: 'Bajigur Gurih',
    price: 35000,
    tag: 'Energy',
    benefits: ['Energy', 'Digestion'],
    desc: 'Santan, gula aren, dan jahe. Manis, gurih, dan memberi asupan energi mengenyangkan.',
    img: 'https://i.pinimg.com/1200x/1d/75/a6/1d75a648cb0ddcb5b3495aa5162a230d.jpg',
    notes: '250ml • 140 kkal • Gurih santan kelapa'
  },

  // Detox
  {
    id: 'detox',
    name: 'Jamu Detox Herbal',
    price: 39000,
    tag: 'Detox',
    benefits: ['Detox', 'Antioxidant'],
    desc: 'Lemongrass, kayu manis, daun mint. Clean, herbal, ringan, membersihkan usus.',
    img: 'https://i.pinimg.com/1200x/62/3b/ed/623bedd1bf9b5b514a68ef3cdfcc1b52.jpg',
    notes: '250ml • 28 kkal • 0 gula tambahan'
  },
  {
    id: 'pahitan',
    name: 'Jamu Pahitan',
    price: 38000,
    tag: 'Detox',
    benefits: ['Detox', 'Digestion'],
    desc: 'Brotowali dan sambiloto. Sangat pahit, namun luar biasa untuk membersihkan darah dan racun.',
    img: 'https://i.pinimg.com/736x/5a/f9/f2/5af9f269a882e7dc67e98be15443a445.jpg',
    notes: '250ml • 20 kkal • Sangat pahit'
  },
  {
    id: 'galian_singset',
    name: 'Jamu Galian Singset',
    price: 45000,
    tag: 'Detox',
    benefits: ['Detox', 'Energy'],
    desc: 'Kunci rahasia kecantikan keraton. Detoksifikasi tubuh dan menjaga metabolisme tetap optimal.',
    img: 'https://i.pinimg.com/736x/a0/41/34/a0413479d58a97498a857fe50f1ef4ac.jpg',
    notes: '250ml • 30 kkal • Kaya manfaat'
  },
  {
    id: 'sirih_pinang',
    name: 'Jamu Sari Daun Sirih',
    price: 36000,
    tag: 'Detox',
    benefits: ['Detox', 'Immunity'],
    desc: 'Ekstrak daun sirih segar. Membersihkan bakteri dari dalam, antiseptik alami yang menyehatkan.',
    img: 'https://i.pinimg.com/736x/61/f6/b2/61f6b2baec1d7f183a44464a7c83f608.jpg',
    notes: '250ml • 25 kkal • Antiseptik alami'
  }
];

// Testimonial Data
export interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Ayu Lestari',
    role: 'Product Designer, Jakarta',
    text: 'Rasanya bersih, tidak terlalu manis. Kunyit Asam jadi ritual pagi saya sejak 3 bulan. Perut jauh lebih nyaman.',
    avatar: 'https://ui-avatars.com/api/?name=Ayu+Lestari&background=c89a5b&color=fff&size=80',
    rating: 5
  },
  {
    name: 'Rafi Pradana',
    role: 'Founder, Bandung',
    text: 'Jahe Merahnya nampol tapi smooth. Energi stabil seharian, gak kayak kopi yang bikin crash.',
    avatar: 'https://ui-avatars.com/api/?name=Rafi+Pradana&background=7a9280&color=fff&size=80',
    rating: 5
  },
  {
    name: 'Sinta Maharani',
    role: 'Yoga Instructor, Ubud',
    text: 'Packaging kaca, rasa otentik seperti buatan simbah. Langganan mingguan gak pernah lewat.',
    avatar: 'https://ui-avatars.com/api/?name=Sinta+Maharani&background=13291d&color=fff&size=80',
    rating: 5
  },
  {
    name: 'Dimas Aditya',
    role: 'Marathon Runner',
    text: 'Immunity Booster jadi andalan saat musim hujan. Recovery lebih cepat, tidur juga lebih nyenyak.',
    avatar: 'https://ui-avatars.com/api/?name=Dimas+Aditya&background=c89a5b&color=fff&size=80',
    rating: 5
  }
];

// FAQ Data
export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: 'Apakah Jamu Nusantara mengandung pengawet?',
    answer: 'Tidak. 100% alami, cold-pressed, shelf life 14 hari di kulkas 2–5°C.'
  },
  {
    question: 'Berapa lama pengiriman?',
    answer: 'Jakarta, Tangerang, Depok, Bekasi: same-day. Luar Jabodetabek & Yogyakarta: 1–2 hari dengan cold insulated box.'
  },
  {
    question: 'Apakah aman untuk lambung?',
    answer: 'Ya, semua racikan pH-balanced dan menggunakan madu hutan sebagai pemanis. Jika punya maag aktif, mulai dari setengah botol setelah makan.'
  },
  {
    question: 'Bisa langganan?',
    answer: 'Bisa. Paket mingguan hemat 15%, bisa skip/pause kapan saja via aplikasi.'
  },
  {
    question: 'Apakah Halal & BPOM?',
    answer: 'Ya. Halal MUI dan BPOM RI MD. Lab test rutin tiap batch.'
  },
  {
    question: 'Botolnya bisa dikembalikan?',
    answer: 'Bisa. Program Return Bottle Rp 3.000/botol dalam kondisi bersih.'
  }
];
