# React.js Türkçe Öğrenme Roadmap Sitesi

Modern, responsive ve kullanıcı dostu bir React öğrenme platformu. React.js'i adım adım öğrenmek için kapsamlı Türkçe kaynak.

## 🚀 Özellikler

- **Modern Tasarım**: Temiz, minimalist ve profesyonel görünüm
- **Dark/Light Mode**: Tema değiştirme özelliği
- **Responsive**: Mobile-first yaklaşım (320px - 4K destekli)
- **Animasyonlar**: Smooth transitions, hover effects, scroll animations
- **Progress Tracking**: LocalStorage ile ilerleme takibi
- **Türkçe İçerik**: Tamamen Türkçe açıklamalar ve örnekler

## 🛠️ Teknolojiler

- **React 18+** - Modern React hooks kullanımı
- **TypeScript** - Tip güvenliği
- **React Router** - Sayfa yönlendirmeleri
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animasyonlar
- **React Icons** - İkon kütüphanesi

## 📁 Proje Yapısı

```
src/
├── components/
│   ├── common/          # Ortak bileşenler
│   │   ├── Hero.tsx
│   │   ├── FeatureCard.tsx
│   │   └── StatsSection.tsx
│   └── layout/          # Layout bileşenleri
│       ├── Layout.tsx
│       ├── Navbar.tsx
│       └── Footer.tsx
├── context/             # React Context'ler
│   ├── ThemeContext.tsx
│   └── ProgressContext.tsx
├── data/                # Veri dosyaları
│   └── roadmapData.ts
├── pages/               # Sayfa bileşenleri
│   ├── Home.tsx
│   ├── Roadmap.tsx
│   ├── Projects.tsx
│   ├── Resources.tsx
│   └── TopicDetail.tsx
├── hooks/               # Custom hooks
├── utils/               # Yardımcı fonksiyonlar
├── App.tsx
└── index.css
```

## 🎨 Tasarım Sistemi

### Renk Paleti
- **Primary**: React mavisi (#61dafb)
- **Secondary**: Koyu mavi (#282c34)
- **Accent**: Turuncu/sarı ton (vurgu için)

### Typography
- **Başlıklar**: Inter (bold)
- **Body**: Inter veya System Font Stack
- **Kod**: Fira Code veya JetBrains Mono

### Spacing
Tutarlı spacing scale: 4px, 8px, 16px, 24px, 32px, 48px, 64px

## 🚀 Kurulum

1. **Projeyi klonlayın**
   ```bash
   git clone <repository-url>
   cd react-roadmap
   ```

2. **Bağımlılıkları yükleyin**
   ```bash
   npm install
   ```

3. **Geliştirme sunucusunu başlatın**
   ```bash
   npm start
   ```

4. **Tarayıcıda açın**
   ```
   http://localhost:3000
   ```

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🎯 Roadmap Yapısı

### React 101 - Başlangıç
- React.js Giriş
  - React Nedir?
  - Node.js Kurulumu
  - İlk React Projesinin Oluşturulması
- Componentler
  - Component Nedir?
  - Component ve JSX Kuralları
  - Componentlerde Değişken Render
  - Koşullu Render İşlemi

### React 201 - Orta Seviye
- State Management
  - useState Hook
  - useEffect Hook
  - Custom Hooks

### React 301 - İleri Seviye
- Performance Optimization
- Advanced Patterns
- Testing

## 🔧 Geliştirme

### Yeni Konu Ekleme
`src/data/roadmapData.ts` dosyasına yeni konular ekleyebilirsiniz.

### Yeni Component Ekleme
`src/components/` klasörüne yeni bileşenler ekleyebilirsiniz.

### Stil Değişiklikleri
`src/index.css` ve `tailwind.config.js` dosyalarını düzenleyebilirsiniz.

## 📦 Build

```bash
npm run build
```

Build dosyaları `build/` klasöründe oluşturulur.

## 🧪 Test

```bash
npm test
```

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📞 İletişim

- GitHub: [@username](https://github.com/username)
- Email: your.email@example.com

---

Made with ❤️ in Turkey