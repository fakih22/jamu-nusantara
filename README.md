# Jamu Nusantara - Next.js Website

Website premium untuk Jamu Nusantara yang dibangun dengan Next.js 16, TypeScript, dan Tailwind CSS.

## 🚀 Features

- ✅ **Modern Next.js 16** dengan App Router
- ✅ **TypeScript** untuk type safety
- ✅ **Tailwind CSS 4** untuk styling
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Dark Mode** dengan local storage persistence
- ✅ **Smooth Animations** - Reveal on scroll, transitions
- ✅ **Interactive Components**:
  - Product search & filtering
  - Product comparison modal
  - Quick view modal
  - Shopping cart
  - Testimonial carousel
  - FAQ accordion
  - Contact form
  - Newsletter subscription
  - Countdown timer
  - Toast notifications

## 📦 Tech Stack

- **Framework**: Next.js 16.2.9
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Fraunces, Plus Jakarta Sans)

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
app/
├── components/           # React components
│   ├── Navbar/          # Navigation bar with cart
│   ├── Hero/            # Hero section
│   ├── Products/        # Product grid with modals
│   ├── Benefits/        # Benefits section
│   ├── Ingredients/     # Ingredients showcase
│   ├── WhyUs/           # Why choose us
│   ├── Testimonials/    # Customer testimonials
│   ├── HowItWorks/      # Step-by-step guide
│   ├── Blog/            # Blog preview
│   ├── Promo/           # Promotional banner
│   ├── FAQ/             # FAQ accordion
│   ├── AppPromo/        # Mobile app promotion
│   ├── Contact/         # Contact form
│   ├── Footer/          # Footer
│   ├── Toast/           # Toast notifications
│   ├── TrustStrip/      # Trust badges
│   ├── ScrollProgress/  # Scroll progress bar
│   ├── WhatsAppButton/  # Floating WhatsApp button
│   └── RevealOnScroll/  # Scroll reveal animations
├── lib/
│   └── data.ts          # Product, FAQ, Testimonial data
├── globals.css          # Global styles & Tailwind config
├── layout.tsx           # Root layout
└── page.tsx             # Home page

public/                  # Static assets
```

## 🎨 Design Features

### Color Palette
- **Primary Green**: `#13291d` (Jamu Forest)
- **Sage Green**: `#7a9280`
- **Gold Accent**: `#c89a5b`
- **Cream Background**: `#fdfbf7`
- **Beige**: `#e7ddd0`

### Typography
- **Display Font**: Fraunces (Serif)
- **Body Font**: Plus Jakarta Sans (Sans-serif)

### Components

#### Navbar
- Fixed position with glass morphism effect
- Dark mode toggle
- Shopping cart counter
- Mobile menu

#### Products Section
- Real-time search
- Filter by benefits (Immunity, Digestion, Energy, Detox)
- Product comparison (max 3 products)
- Quick view modal
- Add to cart functionality

#### Testimonials
- Auto-rotating carousel (5.6s interval)
- Navigation arrows
- Dot indicators
- Smooth transitions

#### FAQ
- Accordion style
- Smooth expand/collapse
- Clean design

#### Contact Form
- Form validation
- Toast notification on submit
- WhatsApp quick link

## 🔧 Configuration

### Tailwind CSS
Custom colors and utilities are defined in `globals.css`:
- Jamu color palette
- Custom shadows
- Glass morphism effects
- Animation classes

### Fonts
Fonts are loaded via Next.js Font Optimization:
- Fraunces: Display font for headings
- Plus Jakarta Sans: Body text

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🌙 Dark Mode

Dark mode implemented with:
- CSS variables for theme colors
- Local storage for persistence
- Smooth transitions
- Toggle in navbar

## 🚀 Performance

- Static Site Generation (SSG)
- Image optimization with Next.js Image
- Font optimization with Next.js Font
- Code splitting
- Lazy loading

## 📝 Data Management

All static data (products, FAQs, testimonials) are stored in `app/lib/data.ts` for easy management and updates.

## 🎯 SEO

- Semantic HTML
- Meta tags configured
- Open Graph ready
- Descriptive alt texts
- Proper heading hierarchy

## 📄 License

© 2024 Jamu Nusantara, PT Herba Sehat Indonesia. All rights reserved.

## 🤝 Contributing

This is a proprietary project. For inquiries, contact: halo@jamunusantara.id

---

**Developed with ❤️ using Next.js**
