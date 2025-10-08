import { Category } from "../../../types/roadmap";

export const reactBasics: Category = {
  id: "react-basics",
  name: "Temel React ve Component Mantığı",
  icon: "🧩",
  description: "React component yapısı ve temel kavramlar",
  topics: [
    {
      id: "react-component-importance",
      title: "React Component Yapısının Önemi",
      description:
        "React component yapısının neden önemli olduğu ve modern geliştirmede avantajları",
      content: `React Component Yapısının Önemi

React'te component yapısı neden bu kadar önemli? Modern web geliştirmede component tabanlı mimarinin avantajlarını öğrenin.

Component Yapısının Avantajları

Yeniden Kullanılabilirlik - Aynı component'i farklı yerlerde kullanabilirsiniz
Modülerlik - Büyük uygulamaları küçük parçalara böler
Bakım Kolaylığı - Her component kendi sorumluluğunu üstlenir
Test Edilebilirlik - Component'ler ayrı ayrı test edilebilir
Performans - Sadece değişen component'ler yeniden render edilir

Günlük Hayattan Örnek

Bir e-ticaret uygulaması geliştirdiğinizi düşünün:

- Ürün kartı: Aynı component'i farklı ürünler için kullanabilirsiniz
- Buton: Tüm sayfalarda aynı buton component'ini kullanabilirsiniz
- Header: Tüm sayfalarda aynı header component'ini kullanabilirsiniz
- Modal: Farklı içeriklerle aynı modal component'ini kullanabilirsiniz

Component Mantığı

Tek Sorumluluk İlkesi - Her component sadece bir işi yapmalıdır
Props ile Veri Geçişi - Component'ler arası veri geçişi props ile yapılır
State Yönetimi - Her component kendi state'ini yönetebilir

Modern React Geliştirmede

Component'ler fonksiyon gibi davranır
Her component bir UI parçasını temsil eder
Component'ler birleştirilerek büyük uygulamalar oluşturulur
Functional component'ler modern yaklaşımdır
Hook'lar ile state yönetimi yapılır

Best Practices

1. Her component için ayrı dosya oluşturun
2. Component isimlerini büyük harfle başlatın
3. Tek sorumluluk ilkesini uygulayın
4. Props ile component'leri özelleştirin
5. Reusable component'ler oluşturun

Ne Zaman Component Oluşturun

Yeniden kullanılacak UI parçaları için
Karmaşık logic'i ayırmak için
Test edilebilirlik için
Kod organizasyonu için
Performance optimizasyonu için`,
      codeExamples: [],
      relatedProjects: ["component-structure-practice", "reusable-components"],
      resources: [
        {
          id: "component-importance-docs",
          title: "React.dev - Component Yapısı Dokümantasyonu",
          url: "https://react.dev/learn/thinking-in-react",
          type: "documentation",
        },
        {
          id: "component-best-practices",
          title: "React Component Best Practices",
          url: "https://react.dev/learn/your-first-component",
          type: "tutorial",
        },
        {
          id: "component-architecture",
          title: "Modern React Component Mimarisi",
          url: "https://react.dev/learn/thinking-in-react",
          type: "article",
        },
      ],
    },
    {
      id: "react-setup",
      title: "React Kurulumu",
      description:
        "React projesi kurulumu ve modern geliştirme ortamı yapılandırması",
      content: `React Kurulumu

React projesi kurmak için gerekli adımlar. Modern geliştirme ortamı kurulumu ve en iyi uygulamaları öğrenin.

Kurulum Yöntemleri

Create React App - Klasik ve güvenilir yöntem, öğrenme için ideal
Vite - Hızlı ve modern, production projeler için önerilen
Next.js - Full-stack React framework, büyük projeler için
Remix - Modern web framework, performans odaklı

Günlük Hayattan Örnek

Bir blog uygulaması geliştirdiğinizi düşünün:

- Create React App: Hızlı başlangıç için ideal
- Vite: Hızlı development ve build için
- Next.js: SEO ve performans için
- Remix: Modern web standartları için

Gerekli Dosyalar

package.json - Proje bağımlılıkları ve script'ler
index.html - Ana HTML dosyası
src/index.js - React uygulaması giriş noktası
src/App.js - Ana component
src/index.css - Global stiller

Modern Geliştirme Ortamı

Node.js 18+ gerekli
Modern tarayıcı desteği
Development server otomatik başlar
Hot reload ile anlık güncellemeler
ESLint ve Prettier entegrasyonu

Best Practices

1. Vite kullanın (hızlı development için)
2. TypeScript ekleyin (tip güvenliği için)
3. ESLint ve Prettier kurun (kod kalitesi için)
4. Git repository oluşturun (versiyon kontrolü için)
5. README dosyası yazın (dokümantasyon için)

Ne Zaman Hangi Yöntemi Kullanın

Create React App: Öğrenme ve basit projeler
Vite: Modern projeler ve hızlı development
Next.js: SEO gereken projeler
Remix: Modern web standartları gereken projeler`,
      codeExamples: [],
      relatedProjects: ["setup-practice", "modern-react-setup"],
      resources: [
        {
          id: "react-setup-docs",
          title: "React.dev - Proje Kurulum Dokümantasyonu",
          url: "https://react.dev/learn/start-a-new-react-project",
          type: "documentation",
        },
        {
          id: "vite-setup-guide",
          title: "Vite ile React Kurulum Kılavuzu",
          url: "https://vitejs.dev/guide/",
          type: "tutorial",
        },
        {
          id: "modern-react-tools",
          title: "Modern React Geliştirme Araçları",
          url: "https://react.dev/learn/editor-setup",
          type: "tutorial",
        },
      ],
    },
    {
      id: "jsx-basics",
      title: "JSX Nedir?",
      description: "JSX syntax ve modern React geliştirmede kullanımı",
      content: `JSX Nedir?

JSX, JavaScript XML'in kısaltmasıdır ve React'te UI yazmak için kullanılan syntax'tır. Modern React geliştirmede JSX'in gücünü ve kullanımını öğrenin.

JSX Özellikleri

HTML benzeri syntax - Tanıdık HTML yapısı
JavaScript ifadeleri içerebilir - Dinamik içerik
Component'ler döndürür - Reusable UI parçaları
Babel ile JavaScript'e çevrilir - Tarayıcı uyumluluğu

Günlük Hayattan Örnek

Bir sosyal medya uygulaması geliştirdiğinizi düşünün:

- Post kartı: JSX ile dinamik post içeriği
- Kullanıcı profili: JavaScript değişkenleri ile kişiselleştirilmiş profil
- Buton: Koşullu rendering ile farklı buton durumları
- Liste: Array map ile dinamik liste oluşturma

Temel Kullanım

Basit JSX - HTML benzeri yapı
JavaScript İfadeleri - Süslü parantezler ile dinamik içerik
Attributes - className, id gibi HTML özellikleri
Conditional Rendering - Koşullu içerik gösterme
List Rendering - Array'lerden liste oluşturma

Modern React Geliştirmede

Tek bir root element döndürün
className kullanın (class değil)
Self-closing tag'ler kullanın
JavaScript ifadeleri {} içinde yazın
Fragment kullanın (gereksiz div'lerden kaçının)

Best Practices

1. JSX'i okunabilir tutun
2. Conditional rendering kullanın
3. Fragment'ları tercih edin
4. JavaScript logic'i JSX dışında tutun
5. Consistent naming kullanın

Ne Zaman JSX Kullanın

UI component'leri oluştururken
Dinamik içerik göstermek için
Koşullu rendering yaparken
Liste oluştururken
Form elementleri oluştururken`,
      codeExamples: [],
      relatedProjects: ["jsx-practice", "dynamic-jsx-components"],
      resources: [
        {
          id: "jsx-docs",
          title: "React.dev - JSX Dokümantasyonu",
          url: "https://react.dev/learn/writing-markup-with-jsx",
          type: "documentation",
        },
        {
          id: "jsx-best-practices",
          title: "JSX Best Practices Kılavuzu",
          url: "https://react.dev/learn/javascript-in-jsx-with-curly-braces",
          type: "tutorial",
        },
        {
          id: "jsx-conditional-rendering",
          title: "JSX ile Koşullu Rendering",
          url: "https://react.dev/learn/conditional-rendering",
          type: "article",
        },
      ],
    },
    {
      id: "react-file-structure",
      title: "React Dosya ve Klasör Yapısı",
      description:
        "React projelerinde dosya ve klasör yapısının nasıl olması gerektiği ve modern organizasyon",
      content: `React Dosya ve Klasör Yapısı

Bir React projesinde iyi bir dosya ve klasör yapısı, projenin sürdürülebilirliği için çok önemlidir. Modern React projelerinde dosya organizasyonu ve en iyi uygulamaları öğrenin.

Önerilen Yapı

/src - Tüm kaynak kodunun bulunduğu ana klasör
/components - Tekrar kullanılabilir UI component'leri
/pages - Her bir sayfanın ana component'i
/context - Global state yönetimi için context'ler
/hooks - Özel (custom) hook'lar
/data - Sabit veriler, API'dan gelen verilerin mock'ları
/utils - Yardımcı fonksiyonlar
/types - TypeScript tipleri ve arayüzleri

Günlük Hayattan Örnek

Bir e-ticaret uygulaması geliştirdiğinizi düşünün:

- /components/common: Button, Input, Modal gibi genel component'ler
- /components/layout: Header, Footer, Sidebar gibi sayfa düzeni component'leri
- /pages: Home, Products, Cart, Checkout gibi sayfa component'leri
- /context: UserContext, CartContext gibi global state yönetimi
- /hooks: useAuth, useCart gibi özel hook'lar

Modern Organizasyon

Feature-based organization - Özellik bazlı klasör yapısı
Component co-location - İlgili dosyaları birlikte tutma
Barrel exports - Index dosyaları ile clean import'lar
Consistent naming - Tutarlı dosya isimlendirme
Separation of concerns - Sorumlulukların ayrılması

Best Practices

1. Feature-based klasör yapısı kullanın
2. Component'leri co-locate edin
3. Barrel exports kullanın
4. Consistent naming uygulayın
5. Separation of concerns uygulayın

Ne Zaman Hangi Yapıyı Kullanın

Küçük projeler: Component-based organization
Orta projeler: Feature-based organization
Büyük projeler: Domain-driven organization
Monorepo: Workspace-based organization`,
      codeExamples: [],
      relatedProjects: ["file-structure-practice", "modern-react-organization"],
      resources: [
        {
          id: "react-file-structure-docs",
          title: "React.dev - Proje Yapısı Dokümantasyonu",
          url: "https://react.dev/learn/start-a-new-react-project",
          type: "documentation",
        },
        {
          id: "react-folder-structure",
          title: "React Klasör Yapısı Best Practices",
          url: "https://react.dev/learn/importing-and-exporting-components",
          type: "tutorial",
        },
        {
          id: "modern-react-architecture",
          title: "Modern React Proje Mimarisi",
          url: "https://react.dev/learn/thinking-in-react",
          type: "article",
        },
      ],
    },
    {
      id: "how-react-works",
      title: "React Çalışma Mantığı",
      description:
        "Virtual DOM, render ve state yönetimi gibi temel kavramlar ve modern React performansı",
      content: `React Çalışma Mantığı

React'in arka planda nasıl çalıştığını anlamak, daha performanslı uygulamalar geliştirmenize yardımcı olur. Modern React'in çalışma prensiplerini ve performans optimizasyonlarını öğrenin.

Temel Kavramlar

Virtual DOM - React, gerçek DOM'un bir kopyasını bellekte tutar
Diffing Algorithm - React, eski ve yeni Virtual DOM arasındaki farkları bulur
Reconciliation - Sadece değişen kısımlar gerçek DOM'a yansıtılır
Render - Bir component'in state'i veya props'u değiştiğinde yeniden render edilir

Günlük Hayattan Örnek

Bir blog uygulaması geliştirdiğinizi düşünün:

- Post listesi: Virtual DOM ile sadece değişen post'lar güncellenir
- Kullanıcı profili: State değiştiğinde sadece ilgili kısımlar render edilir
- Yorum sistemi: Yeni yorum eklendiğinde sadece yorum listesi güncellenir
- Like butonu: Buton durumu değiştiğinde sadece buton re-render edilir

Modern React Performansı

Concurrent Features - React 18 ile gelen yeni özellikler
Automatic Batching - State güncellemelerinin otomatik gruplandırılması
Suspense - Asenkron işlemler için loading state'leri
Error Boundaries - Hata yakalama ve kurtarma
Strict Mode - Development'ta potansiyel problemleri tespit etme

Best Practices

1. Virtual DOM'un avantajlarını anlayın
2. Gereksiz re-render'ları önleyin
3. useMemo ve useCallback kullanın
4. Component'leri optimize edin
5. Performance monitoring yapın

Ne Zaman Optimize Edin

Yavaş render'lar varsa
Gereksiz re-render'lar tespit edilirse
Büyük listeler render ediliyorsa
Karmaşık hesaplamalar yapılıyorsa
Memory leak'ler varsa`,
      codeExamples: [],
      relatedProjects: ["react-performance-practice", "virtual-dom-demo"],
      resources: [
        {
          id: "react-how-it-works-docs",
          title: "React.dev - Render ve Commit Dokümantasyonu",
          url: "https://react.dev/learn/render-and-commit",
          type: "documentation",
        },
        {
          id: "react-virtual-dom",
          title: "React Virtual DOM Kılavuzu",
          url: "https://react.dev/learn/render-and-commit",
          type: "tutorial",
        },
        {
          id: "react-performance",
          title: "React Performance Optimizasyonu",
          url: "https://react.dev/learn/preserving-and-resetting-state",
          type: "article",
        },
      ],
    },
    {
      id: "custom-components",
      title: "Custom Component",
      description:
        "Kendi React componentlerinizi oluşturma ve modern component geliştirme",
      content: `Custom Component Oluşturma

React'in gücü, kendi component'lerinizi oluşturarak UI'ı parçalara ayırabilmenizden gelir. Modern React geliştirmede component oluşturma ve en iyi uygulamaları öğrenin.

Adımlar

Fonksiyon Oluşturun - Bir JavaScript fonksiyonu oluşturun, component isimleri büyük harfle başlamalıdır
JSX Döndürün - Fonksiyon, render edilmesini istediğiniz JSX kodunu döndürmelidir
Export Edin - Component'i başka dosyalarda kullanabilmek için export edin

Günlük Hayattan Örnek

Bir e-ticaret uygulaması geliştirdiğinizi düşünün:

- ProductCard: Ürün bilgilerini gösteren component
- Button: Tüm sayfalarda kullanılacak buton component'i
- Modal: Popup'lar için kullanılacak modal component'i
- Header: Tüm sayfalarda kullanılacak header component'i

Modern Component Geliştirme

Functional Components - Modern React yaklaşımı
Props ile Özelleştirme - Component'leri props ile özelleştirin
TypeScript Desteği - Tip güvenliği için TypeScript kullanın
Custom Hooks - Logic'i component'lerden ayırın
Performance Optimization - useMemo, useCallback kullanın

Best Practices

1. Component isimlerini büyük harfle başlatın
2. Tek sorumluluk ilkesini uygulayın
3. Props ile component'leri özelleştirin
4. TypeScript kullanın
5. Custom hook'lar oluşturun

Ne Zaman Component Oluşturun

Yeniden kullanılacak UI parçaları için
Karmaşık logic'i ayırmak için
Test edilebilirlik için
Kod organizasyonu için
Performance optimizasyonu için`,
      codeExamples: [],
      relatedProjects: ["custom-component-practice", "reusable-components"],
      resources: [
        {
          id: "custom-components-docs",
          title: "React.dev - İlk Component Dokümantasyonu",
          url: "https://react.dev/learn/your-first-component",
          type: "documentation",
        },
        {
          id: "component-best-practices",
          title: "React Component Best Practices",
          url: "https://react.dev/learn/thinking-in-react",
          type: "tutorial",
        },
        {
          id: "modern-component-patterns",
          title: "Modern React Component Desenleri",
          url: "https://react.dev/learn/importing-and-exporting-components",
          type: "article",
        },
      ],
    },
    {
      id: "component-styling",
      title: "Component Stillendirme",
      description:
        "React componentlerini stillendirme yöntemleri ve modern CSS yaklaşımları",
      content: `Component Stillendirme

React'te component'leri stillendirmek için birkaç farklı yaklaşım vardır. Modern React geliştirmede CSS yönetimi ve en iyi uygulamaları öğrenin.

Yöntemler

CSS Dosyaları - Her component için ayrı bir .css dosyası oluşturup import edebilirsiniz
CSS Modules - Stil çakışmalarını önlemek için kullanılır
Styled-Components - CSS'i JavaScript içinde yazmanızı sağlayan bir kütüphanedir
Tailwind CSS - Utility-first bir CSS framework'üdür
Inline Styles - JSX içinde style attribute'u ile stil verme

Günlük Hayattan Örnek

Bir blog uygulaması geliştirdiğinizi düşünün:

- Post kartı: CSS Modules ile component-specific stiller
- Buton: Tailwind CSS ile hızlı utility class'lar
- Modal: Styled-Components ile dinamik stiller
- Header: CSS dosyaları ile organize stiller

Modern CSS Yaklaşımları

CSS-in-JS - JavaScript içinde CSS yazma
Utility-First - Tailwind CSS gibi utility class'lar
Component-Scoped - CSS Modules ile component-specific stiller
Design Systems - Tutarlı tasarım sistemi
Responsive Design - Mobile-first yaklaşım

Best Practices

1. CSS Modules kullanın (stil çakışmalarını önlemek için)
2. Tailwind CSS ile hızlı development yapın
3. Design system oluşturun
4. Responsive design uygulayın
5. Performance'ı göz önünde bulundurun

Ne Zaman Hangi Yöntemi Kullanın

CSS Dosyaları: Basit projeler için
CSS Modules: Orta büyüklükte projeler için
Styled-Components: Dinamik stiller gereken projeler için
Tailwind CSS: Hızlı development için
Inline Styles: Çok basit stiller için`,
      codeExamples: [],
      relatedProjects: ["styling-practice", "modern-css-react"],
      resources: [
        {
          id: "component-styling-docs",
          title: "React.dev - Component Stillendirme Dokümantasyonu",
          url: "https://react.dev/learn/conditional-rendering",
          type: "documentation",
        },
        {
          id: "css-modules-guide",
          title: "CSS Modules Kılavuzu",
          url: "https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/",
          type: "article",
        },
        {
          id: "tailwind-css-react",
          title: "Tailwind CSS ile React Geliştirme",
          url: "https://tailwindcss.com/docs/guides/create-react-app",
          type: "tutorial",
        },
      ],
    },
    {
      id: "javascript-in-react",
      title: "React İçerisinde JavaScript Kullanma",
      description:
        "JSX içinde JavaScript ifadeleri ve mantığı kullanma ve modern React geliştirme",
      content: `React İçerisinde JavaScript Kullanma

JSX, HTML benzeri bir yapı sunsa da aslında tamamen JavaScript'tir. Bu sayede JSX içinde JavaScript'in gücünü kullanabilirsiniz. Modern React geliştirmede JavaScript kullanımı ve en iyi uygulamaları öğrenin.

Kullanım Yolları

Süslü Parantezler {} - JSX içinde JavaScript ifadeleri yazmak için süslü parantez kullanılır
Değişkenler - Değişkenlerin değerlerini JSX içinde gösterebilirsiniz
Fonksiyon Çağrıları - Fonksiyonları çağırıp sonucunu render edebilirsiniz
Koşullu Render - if, && veya ternary operatör (?) ile koşullu render yapabilirsiniz
Döngüler - .map() metodu ile listeleri render edebilirsiniz

Günlük Hayattan Örnek

Bir sosyal medya uygulaması geliştirdiğinizi düşünün:

- Kullanıcı adı: JavaScript değişkeni ile dinamik kullanıcı adı
- Post sayısı: JavaScript hesaplaması ile toplam post sayısı
- Like butonu: Koşullu rendering ile farklı buton durumları
- Yorum listesi: Array map ile dinamik yorum listesi

Modern React Geliştirmede

Expression Evaluation - JavaScript ifadelerinin değerlendirilmesi
Conditional Rendering - Koşullu içerik gösterme
List Rendering - Array'lerden liste oluşturma
Event Handling - JavaScript event handler'ları
State Management - JavaScript state yönetimi

Best Practices

1. JavaScript logic'i JSX dışında tutun
2. Conditional rendering kullanın
3. Array methods ile listeler oluşturun
4. Event handler'ları optimize edin
5. Performance'ı göz önünde bulundurun

Ne Zaman JavaScript Kullanın

Dinamik içerik göstermek için
Koşullu rendering yaparken
Liste oluştururken
Event handling yaparken
State yönetimi yaparken`,
      codeExamples: [],
      relatedProjects: ["javascript-jsx-practice", "dynamic-react-components"],
      resources: [
        {
          id: "javascript-in-react-docs",
          title: "React.dev - JSX'te JavaScript Kullanma Dokümantasyonu",
          url: "https://react.dev/learn/javascript-in-jsx-with-curly-braces",
          type: "documentation",
        },
        {
          id: "conditional-rendering",
          title: "React Koşullu Rendering Kılavuzu",
          url: "https://react.dev/learn/conditional-rendering",
          type: "tutorial",
        },
        {
          id: "list-rendering",
          title: "React Liste Rendering Kılavuzu",
          url: "https://react.dev/learn/rendering-lists",
          type: "article",
        },
      ],
    },
    {
      id: "react-props",
      title: "React Props",
      description:
        "Componentler arası veri aktarımı için props kullanımı ve modern React geliştirme",
      content: `React Props

Props (properties), parent component'ten child component'e veri aktarmak için kullanılır. Props, component'ler için fonksiyon argümanları gibidir. Modern React geliştirmede props kullanımı ve en iyi uygulamaları öğrenin.

Temel Özellikler

Read-Only - Props sadece okunabilir, child component aldığı props'u değiştiremez
Veri Akışı - Veri akışı tek yönlüdür (parent'tan child'a)
Her Türlü Veri - String, number, boolean, array, object, hatta fonksiyon bile props olarak gönderilebilir

Günlük Hayattan Örnek

Bir e-ticaret uygulaması geliştirdiğinizi düşünün:

- ProductCard: Ürün bilgilerini props ile alır
- Button: Buton metni ve onClick fonksiyonunu props ile alır
- Modal: Modal içeriğini ve açık/kapalı durumunu props ile alır
- Header: Kullanıcı bilgilerini ve menü öğelerini props ile alır

Modern React Geliştirmede

Props Destructuring - Props'ları destructure ederek kullanın
Default Props - Varsayılan değerler atayın
PropTypes - Props tiplerini kontrol edin
TypeScript - Tip güvenliği için TypeScript kullanın
Children Props - props.children ile içerik geçin

Best Practices

1. Props'ları destructure edin
2. Default props kullanın
3. TypeScript ile tip güvenliği sağlayın
4. Props'ları minimal tutun
5. Consistent naming kullanın

Ne Zaman Props Kullanın

Component'ler arası veri geçişi için
Component'leri özelleştirmek için
Event handler'ları geçmek için
Configuration değerleri geçmek için
Conditional rendering için`,
      codeExamples: [],
      relatedProjects: ["props-practice", "component-communication"],
      resources: [
        {
          id: "react-props-docs",
          title: "React.dev - Props Geçme Dokümantasyonu",
          url: "https://react.dev/learn/passing-props-to-a-component",
          type: "documentation",
        },
        {
          id: "props-best-practices",
          title: "React Props Best Practices",
          url: "https://react.dev/learn/passing-props-to-a-component",
          type: "tutorial",
        },
        {
          id: "typescript-props",
          title: "TypeScript ile React Props",
          url: "https://react.dev/learn/typescript",
          type: "article",
        },
      ],
    },
    {
      id: "dynamic-props",
      title: "Dinamik Props",
      description:
        "Değişkenlere ve state'e bağlı olarak dinamik props geçme ve modern React geliştirme",
      content: `Dinamik Props

Component'lere her zaman statik veri göndermek zorunda değiliz. Değişkenlere veya component'in state'ine bağlı olarak dinamik props geçebiliriz. Modern React geliştirmede dinamik props kullanımı ve en iyi uygulamaları öğrenin.

Kullanım

Kullanıcı etkileşimi veya API'dan gelen verilere göre bir component'in görünümünü veya davranışını değiştirmek için dinamik props kullanılır.

Günlük Hayattan Örnek

Bir sosyal medya uygulaması geliştirdiğinizi düşünün:

- Kullanıcı profili: Giriş durumuna göre farklı profil bilgileri
- Post kartı: Like durumuna göre farklı buton renkleri
- Bildirimler: Okunma durumuna göre farklı görünüm
- Menü: Kullanıcı rolüne göre farklı menü öğeleri

Modern React Geliştirmede

State-based Props - State değişikliklerine göre props geçme
Conditional Props - Koşullu props geçme
Computed Props - Hesaplanmış props değerleri
Event-driven Props - Event'lere göre props değiştirme
API-driven Props - API yanıtlarına göre props güncelleme

Best Practices

1. State değişikliklerini props'a yansıtın
2. Conditional props kullanın
3. Computed props ile hesaplamalar yapın
4. Event-driven props ile etkileşim sağlayın
5. API-driven props ile dinamik içerik sağlayın

Ne Zaman Dinamik Props Kullanın

Kullanıcı etkileşimlerine göre component değişikliği için
State değişikliklerine göre görünüm değişikliği için
API yanıtlarına göre içerik güncelleme için
Koşullu rendering için
Event handling için`,
      codeExamples: [],
      relatedProjects: ["dynamic-props-practice", "interactive-components"],
      resources: [
        {
          id: "dynamic-props-docs",
          title: "React.dev - Dinamik Props Dokümantasyonu",
          url: "https://react.dev/learn/passing-props-to-a-component",
          type: "documentation",
        },
        {
          id: "conditional-props",
          title: "React Koşullu Props Kılavuzu",
          url: "https://react.dev/learn/conditional-rendering",
          type: "tutorial",
        },
        {
          id: "state-props-patterns",
          title: "React State ve Props Desenleri",
          url: "https://react.dev/learn/state-a-components-memory",
          type: "article",
        },
      ],
    },
    {
      id: "using-js-files-in-components",
      title: "React Componentlerinde JavaScript Dosyası Kullanma",
      description:
        "Componentler içinde harici JavaScript dosyalarını ve fonksiyonlarını kullanma ve modern modül organizasyonu",
      content: `Harici JavaScript Dosyası Kullanma

Component'lerinizi daha temiz ve organize tutmak için yardımcı fonksiyonları veya sabit verileri ayrı JavaScript dosyalarında tutabilirsiniz. Modern React geliştirmede modül organizasyonu ve en iyi uygulamaları öğrenin.

Adımlar

Dosya Oluşturun - Örneğin src/utils/helpers.js adında bir dosya oluşturun
Fonksiyonu Export Edin - Dosya içindeki fonksiyonu export anahtar kelimesiyle dışa aktırın
Component'e Import Edin - Kullanmak istediğiniz component dosyasında import ile fonksiyonu içeri alın
Kullanın - Artık fonksiyonu component içinde çağırabilirsiniz

Günlük Hayattan Örnek

Bir e-ticaret uygulaması geliştirdiğinizi düşünün:

- utils/formatPrice.js: Fiyat formatlama fonksiyonları
- utils/validation.js: Form validasyon fonksiyonları
- constants/api.js: API URL'leri ve sabit değerler
- helpers/dateUtils.js: Tarih işleme fonksiyonları

Modern Modül Organizasyonu

ES6 Modules - Modern JavaScript modül sistemi
Named Exports - İsimli export'lar
Default Exports - Varsayılan export'lar
Barrel Exports - Index dosyaları ile clean import'lar
Tree Shaking - Kullanılmayan kod'ların otomatik kaldırılması

Best Practices

1. Utility fonksiyonları ayrı dosyalarda tutun
2. Constants'ları ayrı dosyalarda organize edin
3. Barrel exports kullanın
4. Consistent naming uygulayın
5. Tree shaking'i optimize edin

Ne Zaman Harici Dosya Kullanın

Yardımcı fonksiyonlar için
Sabit veriler için
API yapılandırmaları için
Validation fonksiyonları için
Utility fonksiyonları için`,
      codeExamples: [],
      relatedProjects: ["module-organization-practice", "utility-functions"],
      resources: [
        {
          id: "js-files-in-components-docs",
          title: "React.dev - Import/Export Dokümantasyonu",
          url: "https://react.dev/learn/importing-and-exporting-components",
          type: "documentation",
        },
        {
          id: "es6-modules-guide",
          title: "ES6 Modules Kılavuzu",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
          type: "tutorial",
        },
        {
          id: "react-module-patterns",
          title: "React Modül Organizasyon Desenleri",
          url: "https://react.dev/learn/importing-and-exporting-components",
          type: "article",
        },
      ],
    },
    {
      id: "props-children",
      title: "props.children Özelliği",
      description:
        "Bir componentin içine başka componentler veya JSX elemanları yerleştirme ve modern React geliştirme",
      content: `props.children Özelliği

props.children, bir component'in açılış ve kapanış etiketleri arasına yazılan her şeyi içeren özel bir prop'tur. Modern React geliştirmede wrapper component'ler ve composition pattern'leri öğrenin.

Ne İşe Yarar?

Genellikle "wrapper" (sarmalayıcı) component'ler oluşturmak için kullanılır. Örneğin, bir kart, modal veya layout component'i, içeriğini props.children ile alabilir.

Günlük Hayattan Örnek

Bir blog uygulaması geliştirdiğinizi düşünün:

- Card: Post kartları için wrapper component
- Modal: Popup'lar için wrapper component
- Layout: Sayfa düzeni için wrapper component
- Button: Buton içeriği için wrapper component

Modern React Geliştirmede

Composition Pattern - Component'leri birleştirme deseni
Wrapper Components - Sarmalayıcı component'ler
Layout Components - Düzen component'leri
Container Components - İçerik component'leri
Higher-Order Components - Yüksek seviye component'ler

Best Practices

1. Wrapper component'ler oluşturun
2. Composition pattern kullanın
3. Layout component'leri kullanın
4. Container component'leri kullanın
5. Consistent naming uygulayın

Ne Zaman props.children Kullanın

Wrapper component'ler oluştururken
Layout component'leri oluştururken
Container component'leri oluştururken
Composition pattern uygularken
Reusable component'ler oluştururken`,
      codeExamples: [],
      relatedProjects: ["children-props-practice", "wrapper-components"],
      resources: [
        {
          id: "props-children-docs",
          title: "React.dev - props.children Dokümantasyonu",
          url: "https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children",
          type: "documentation",
        },
        {
          id: "composition-pattern",
          title: "React Composition Pattern Kılavuzu",
          url: "https://react.dev/learn/passing-props-to-a-component",
          type: "tutorial",
        },
        {
          id: "wrapper-components",
          title: "React Wrapper Componentleri",
          url: "https://react.dev/learn/thinking-in-react",
          type: "article",
        },
      ],
    },
    {
      id: "component-reusability",
      title: "Component Reusability",
      description:
        "Tekrar kullanılabilir ve modüler componentler oluşturma prensipleri ve modern React geliştirme",
      content: `Component Reusability

İyi bir React geliştiricisi, yazdığı component'leri mümkün olduğunca tekrar kullanılabilir (reusable) yapar. Modern React geliştirmede component reusability ve en iyi uygulamaları öğrenin.

Prensipler

Tek Sorumluluk - Her component sadece bir iş yapmalıdır
Props ile Özelleştirme - Component'in davranışını ve görünümünü props ile kontrol edilebilir yapın
İçeriği Ayırma - props.children kullanarak genel sarmalayıcı component'ler oluşturun
Context'ten Kaçınma - Component'i çok özele bağlamamak için her şeyi context'e bağlamayın
İyi İsimlendirme - Component ve props isimlerinin anlaşılır olduğundan emin olun

Günlük Hayattan Örnek

Bir e-ticaret uygulaması geliştirdiğinizi düşünün:

- Button: Tüm sayfalarda kullanılacak tekrar kullanılabilir buton
- Card: Ürün, kullanıcı, sipariş kartları için genel kart component'i
- Modal: Farklı içeriklerle kullanılacak genel modal component'i
- Input: Form'lar için tekrar kullanılabilir input component'i

Modern React Geliştirmede

Composition over Inheritance - Kalıtım yerine kompozisyon
Higher-Order Components - Yüksek seviye component'ler
Render Props - Render prop pattern'i
Custom Hooks - Logic'i component'lerden ayırma
Design Systems - Tutarlı tasarım sistemi

Best Practices

1. Tek sorumluluk ilkesini uygulayın
2. Props ile component'leri özelleştirin
3. Composition pattern kullanın
4. Custom hook'lar oluşturun
5. Design system oluşturun

Ne Zaman Reusable Component Oluşturun

Yeniden kullanılacak UI parçaları için
Tutarlı tasarım gereken projeler için
Büyük projeler için
Team development için
Maintenance kolaylığı için`,
      codeExamples: [],
      relatedProjects: ["reusable-components-practice", "design-system"],
      resources: [
        {
          id: "component-reusability-docs",
          title: "React.dev - Component Reusability Dokümantasyonu",
          url: "https://react.dev/learn/thinking-in-react",
          type: "documentation",
        },
        {
          id: "composition-patterns",
          title: "React Composition Patternleri",
          url: "https://react.dev/learn/passing-props-to-a-component",
          type: "tutorial",
        },
        {
          id: "design-systems",
          title: "React Design System Kılavuzu",
          url: "https://react.dev/learn/thinking-in-react",
          type: "article",
        },
      ],
    },
  ],
};
