import { Category } from '../../../types/roadmap';

export const contextApi: Category = {
  id: 'context-api',
  name: 'CONTEXT API VE USECONTEXT HOOK İLE STATE YÖNETİMİ',
  icon: '🌐',
  description: 'Context API ve useContext hook ile global state yönetimi',
  topics: [
    {
      id: 'global-state-management',
      title: 'Global State Management',
      description: 'React uygulamalarında global state yönetimi',
      content: `Global State Management

React uygulamalarında global state yönetimi nasıl yapılır? Modern React geliştirmede global state yönetimi ve en iyi uygulamaları öğrenin.

Global State Nedir?

Uygulama Geneli - Tüm component'lerde erişilebilir
Shared Data - Paylaşılan veri
Cross-Component - Component'ler arası veri paylaşımı
Centralized - Merkezi state yönetimi

Günlük Hayattan Örnek

Bir e-ticaret uygulaması geliştirdiğinizi düşünün:

- User Authentication: Login durumu, user bilgileri, permission'lar
- Theme Management: Dark/Light mode, color schemes, UI preferences
- Shopping Cart: Cart items, total price, checkout process
- Language Settings: Current language, translations, locale settings

Global State Kullanım Senaryoları

1. User Authentication - Login durumu, user bilgileri, permission'lar
2. Theme Management - Dark/Light mode, color schemes, UI preferences
3. Shopping Cart - Cart items, total price, checkout process
4. Language Settings - Current language, translations, locale settings

Global State Yönetim Yöntemleri

1. Context API - React'in built-in çözümü, prop drilling'i önler, basit kullanım
2. Redux - Daha karmaşık uygulamalar için, time-travel debugging, middleware support
3. Zustand - Lightweight, TypeScript friendly, modern approach

Modern React Geliştirmede

State Management - Global state yönetimi
Prop Drilling Prevention - Prop drilling'i önleme
Performance Optimization - Performance optimizasyonu
State Sharing - State paylaşımı
Centralized Management - Merkezi yönetim

Best Practices

1. Prop drilling sorunu varsa kullanın
2. Çok fazla component'te aynı data kullanılıyorsa kullanın
3. State güncellemeleri karmaşıksa kullanın
4. Performance optimizasyonu gerekiyorsa kullanın
5. Doğru state management tool'unu seçin

Ne Zaman Global State Kullanın

Prop drilling sorunu varsa
Çok fazla component'te aynı data kullanılıyorsa
State güncellemeleri karmaşıksa
Performance optimizasyonu gerekiyorsa
Merkezi state yönetimi istiyorsanız`,
      codeExamples: [],
      relatedProjects: ['global-theme', 'user-auth', 'global-state-patterns'],
      resources: [
        {
          id: 'global-state-docs',
          title: 'React.dev - Global State Management Dokümantasyonu',
          url: 'https://react.dev/learn/passing-data-deeply-with-context',
          type: 'documentation'
        },
        {
          id: 'global-state-patterns',
          title: 'Global State Management Desenleri',
          url: 'https://react.dev/learn/passing-data-deeply-with-context',
          type: 'tutorial'
        },
        {
          id: 'state-management-comparison',
          title: 'State Management Karşılaştırması',
          url: 'https://react.dev/learn/passing-data-deeply-with-context',
          type: 'article'
        }
      ]
    },
    {
      id: 'context-api-useeffect',
      title: 'Context API ve useContext Kullanımı',
      description: 'Context API ve useContext hook kullanımı',
      content: `Context API ve useContext Kullanımı

Context API ve useContext hook'u ile global state yönetimi. Modern React geliştirmede Context API kullanımı ve en iyi uygulamaları öğrenin.

Context API Nedir?

React Feature - React'in built-in özelliği
Prop Drilling Çözümü - Props'ları derinlemesine geçmeyi önler
Global State - Uygulama genelinde state paylaşımı
Provider Pattern - Provider ile state sağlama

Günlük Hayattan Örnek

Bir blog uygulaması geliştirdiğinizi düşünün:

- Theme Context: Dark/Light mode için global theme state
- Auth Context: Kullanıcı giriş durumu için global auth state
- Language Context: Dil tercihi için global language state
- Notification Context: Bildirimler için global notification state

Context API Yapısı

1. createContext - Context oluşturur
2. Provider - State'i sağlar
3. useContext - Context'ten state'i okur

Kullanım Adımları

1. Context Oluşturma - createContext ile context oluşturun
2. Provider Oluşturma - Context.Provider ile state'i sağlayın
3. Hook Oluşturma - useContext ile custom hook oluşturun
4. Component'lerde Kullanma - Custom hook'u component'lerde kullanın

Modern React Geliştirmede

Context Management - Context yönetimi
Provider Pattern - Provider pattern kullanımı
Custom Hooks - Custom hook oluşturma
State Sharing - State paylaşımı
Performance Optimization - Performance optimizasyonu

Best Practices

1. Context değeri değişirse tüm consumer'lar re-render olur
2. Performance için dikkatli kullanın
3. Context'i mümkün olduğunca küçük tutun
4. Multiple context'ler kullanabilirsiniz
5. Custom hook'lar oluşturun

Ne Zaman Context API Kullanın

Prop drilling sorunu varsa
Global state gerekiyorsa
Component'ler arası veri paylaşımı gerekiyorsa
Theme yönetimi gerekiyorsa
User authentication gerekiyorsa`,
      codeExamples: [],
      relatedProjects: ['theme-context', 'auth-context', 'context-patterns'],
      resources: [
        {
          id: 'context-api-docs',
          title: 'React.dev - Context API Dokümantasyonu',
          url: 'https://react.dev/reference/react/createContext',
          type: 'documentation'
        },
        {
          id: 'context-api-patterns',
          title: 'Context API Desenleri',
          url: 'https://react.dev/reference/react/createContext',
          type: 'tutorial'
        },
        {
          id: 'context-api-best-practices',
          title: 'Context API Best Practices',
          url: 'https://react.dev/reference/react/createContext',
          type: 'article'
        }
      ]
    },
    {
      id: 'context-folder-setup',
      title: 'Context Klasör Kurulumu',
      description: 'Context API için klasör yapısı ve organizasyon',
      content: `Context Klasör Kurulumu

Context API için düzenli klasör yapısı nasıl oluşturulur? Modern React geliştirmede context organizasyonu ve en iyi uygulamaları öğrenin.

Klasör Yapısı

1. contexts/ Klasörü - Tüm context'ler için ana klasör
2. Context Dosyaları - Her context için ayrı dosya
3. Types Dosyası - TypeScript type tanımları
4. Index Dosyası - Export'ları organize etmek için

Günlük Hayattan Örnek

Bir e-ticaret uygulaması geliştirdiğinizi düşünün:

- AuthContext.tsx: Kullanıcı authentication için
- ThemeContext.tsx: Dark/Light mode için
- CartContext.tsx: Sepet yönetimi için
- types.ts: Tüm context type'ları için
- index.ts: Clean export'lar için

Önerilen Yapı

src/ klasörü altında contexts/ klasörü oluşturun ve içine AuthContext.tsx, ThemeContext.tsx, CartContext.tsx, types.ts ve index.ts dosyalarını ekleyin.

Dosya İçerikleri

Context Dosyası - createContext, Provider component, Custom hook, Type definitions
Types Dosyası - Context type'ları, State type'ları, Action type'ları
Index Dosyası - Tüm context'leri export et, Clean import'lar

Modern React Geliştirmede

Project Organization - Proje organizasyonu
Context Structure - Context yapısı
TypeScript Integration - TypeScript entegrasyonu
Clean Architecture - Temiz mimari
Scalable Structure - Ölçeklenebilir yapı

Best Practices

1. Her context için ayrı dosya
2. Consistent naming convention
3. TypeScript kullanın
4. Clean exports
5. Organized structure

Ne Zaman Context Klasör Kurulumu Yapın

Büyük projelerde
Multiple context'ler kullanırken
Team çalışmasında
Maintainable code için
Scalable architecture için`,
      codeExamples: [],
      relatedProjects: ['context-organization', 'project-structure', 'context-architecture'],
      resources: [
        {
          id: 'context-folder-docs',
          title: 'React.dev - Context Klasör Kurulumu Dokümantasyonu',
          url: 'https://react.dev/learn/passing-data-deeply-with-context',
          type: 'documentation'
        },
        {
          id: 'context-organization-guide',
          title: 'Context Organizasyon Kılavuzu',
          url: 'https://react.dev/learn/passing-data-deeply-with-context',
          type: 'tutorial'
        },
        {
          id: 'context-architecture',
          title: 'Context Architecture Best Practices',
          url: 'https://react.dev/learn/passing-data-deeply-with-context',
          type: 'article'
        }
      ]
    },
    {
      id: 'context-api-setup',
      title: 'Projeye Context API Kurulumu',
      description: 'Mevcut projeye Context API entegrasyonu',
      content: `Projeye Context API Kurulumu

Mevcut projeye Context API nasıl entegre edilir? Modern React geliştirmede Context API kurulumu ve en iyi uygulamaları öğrenin.

Kurulum Adımları

1. Context Oluşturma - createContext ile context oluşturun, initial value belirleyin, type definitions ekleyin
2. Provider Component - Context.Provider oluşturun, state management ekleyin, children prop'u geçin
3. Custom Hook - useContext hook'u kullanın, error handling ekleyin, type safety sağlayın
4. App Integration - Provider'ı App component'ine ekleyin, component tree'yi wrap edin

Günlük Hayattan Örnek

Bir blog uygulaması geliştirdiğinizi düşünün:

- Theme Context: Dark/Light mode için context oluşturma
- Auth Context: Kullanıcı giriş durumu için context oluşturma
- Language Context: Dil tercihi için context oluşturma
- Notification Context: Bildirimler için context oluşturma

Implementation Details

Context Creation - createContext ile context oluşturun ve initial value belirleyin
Provider Component - Context.Provider ile state'i sağlayın ve children prop'u geçin
Custom Hook - useContext hook'u kullanın ve error handling ekleyin

Modern React Geliştirmede

Context Integration - Context entegrasyonu
Provider Pattern - Provider pattern kullanımı
Custom Hooks - Custom hook oluşturma
TypeScript Integration - TypeScript entegrasyonu
Error Handling - Hata yönetimi

Best Practices

1. Provider'ı en üst seviyeye koyun
2. Error handling ekleyin
3. TypeScript kullanın
4. Performance'ı optimize edin
5. Clean architecture uygulayın

Ne Zaman Context API Kurulumu Yapın

Global state gerekiyorsa
Prop drilling sorunu varsa
Component'ler arası veri paylaşımı gerekiyorsa
Theme yönetimi gerekiyorsa
User authentication gerekiyorsa`,
      codeExamples: [],
      relatedProjects: ['context-integration', 'app-setup', 'context-setup-guide'],
      resources: [
        {
          id: 'context-setup-docs',
          title: 'React.dev - Context API Kurulumu Dokümantasyonu',
          url: 'https://react.dev/learn/passing-data-deeply-with-context',
          type: 'documentation'
        },
        {
          id: 'context-setup-tutorial',
          title: 'Context API Kurulum Kılavuzu',
          url: 'https://react.dev/learn/passing-data-deeply-with-context',
          type: 'tutorial'
        },
        {
          id: 'context-integration-patterns',
          title: 'Context API Entegrasyon Desenleri',
          url: 'https://react.dev/learn/passing-data-deeply-with-context',
          type: 'article'
        }
      ]
    },
    {
      id: 'useeffect-context-usage',
      title: 'Projede useContext Kullanımı',
      description: 'Component\'lerde useContext hook kullanımı',
      content: `Projede useContext Kullanımı

Component'lerde useContext hook'u nasıl kullanılır? Modern React geliştirmede useContext hook kullanımı ve en iyi uygulamaları öğrenin.

useContext Kullanımı

1. Hook Import - Custom hook'u import edin
2. Context Kullanımı - Component içinde hook'u çağırın
3. State Access - Context'ten state'e erişin
4. State Updates - State güncellemelerini yapın

Günlük Hayattan Örnek

Bir blog uygulaması geliştirdiğinizi düşünün:

- Theme Context: useTheme hook'u ile theme ve toggleTheme fonksiyonlarına erişin
- Auth Context: useAuth hook'u ile user, login ve logout fonksiyonlarına erişin
- Cart Context: useCart hook'u ile items, addItem ve removeItem fonksiyonlarına erişin
- Language Context: useLanguage hook'u ile currentLanguage ve setLanguage fonksiyonlarına erişin

Kullanım Örnekleri

Theme Context - useTheme hook'u ile theme ve toggleTheme fonksiyonlarına erişin
Auth Context - useAuth hook'u ile user, login ve logout fonksiyonlarına erişin
Cart Context - useCart hook'u ile items, addItem ve removeItem fonksiyonlarına erişin

Modern React Geliştirmede

Context Usage - Context kullanımı
Custom Hooks - Custom hook kullanımı
State Management - State yönetimi
Type Safety - Type safety
Performance Optimization - Performance optimizasyonu

Best Practices

1. Custom Hook Kullanın - useContext'i doğrudan kullanmak yerine custom hook kullanın
2. Error Handling - Context'in Provider içinde kullanıldığından emin olun
3. Type Safety - TypeScript ile type safety sağlayın
4. Performance - Gereksiz re-render'ları önleyin
5. Clean Code - Temiz kod yazın

Ne Zaman useContext Kullanın

Global state'e erişim gerekiyorsa
Context'ten veri okuma gerekiyorsa
State güncellemeleri gerekiyorsa
Custom hook kullanımında
Component'ler arası veri paylaşımında`,
      codeExamples: [],
      relatedProjects: ['context-usage', 'component-integration', 'useeffect-patterns'],
      resources: [
        {
          id: 'useeffect-context-docs',
          title: 'React.dev - useContext Kullanımı Dokümantasyonu',
          url: 'https://react.dev/reference/react/useContext',
          type: 'documentation'
        },
        {
          id: 'useeffect-context-guide',
          title: 'useContext Kullanım Kılavuzu',
          url: 'https://react.dev/reference/react/useContext',
          type: 'tutorial'
        },
        {
          id: 'useeffect-context-patterns',
          title: 'useContext Kullanım Desenleri',
          url: 'https://react.dev/reference/react/useContext',
          type: 'article'
        }
      ]
    },
    {
      id: 'context-api-limitations',
      title: 'Context API Sınırlamalar ve Dezavantajlar',
      description: 'Context API\'nin sınırlamaları ve alternatif çözümler',
      content: `Context API Sınırlamalar ve Dezavantajlar

Context API'nin sınırlamaları ve ne zaman alternatif çözümler düşünülmeli? Modern React geliştirmede Context API sınırlamaları ve en iyi uygulamaları öğrenin.

Context API Sınırlamaları

1. Performance Issues - Context değeri değişirse tüm consumer'lar re-render olur, büyük object'ler için performans sorunu, frequent updates için uygun değil
2. Re-render Problems - Unnecessary re-renders, component tree'de tüm alt component'ler etkilenir, optimization zorluğu
3. Complexity - Karmaşık state logic için uygun değil, multiple context'ler yönetim zorluğu, debugging zorluğu

Günlük Hayattan Örnek

Bir e-ticaret uygulaması geliştirdiğinizi düşünün:

- Performance Issues: Sepet context'i değiştiğinde tüm component'ler re-render olur
- Re-render Problems: Kullanıcı profili güncellendiğinde gereksiz re-render'lar
- Complexity: Karmaşık state logic için Context API yeterli değil

Alternatif Çözümler

1. Redux - Daha güçlü state management, time-travel debugging, middleware support, DevTools
2. Zustand - Lightweight, TypeScript friendly, modern approach, easy to use
3. Jotai - Atomic state management, fine-grained updates, performance optimized, modern approach

Ne Zaman Context API Kullanılır?

Uygun Durumlar - Basit global state, theme management, user authentication, language settings
Uygun Olmayan Durumlar - Karmaşık state logic, frequent updates, performance critical apps, large applications

Modern React Geliştirmede

Performance Optimization - Performance optimizasyonu
State Management - State yönetimi
Alternative Solutions - Alternatif çözümler
Best Practices - En iyi uygulamalar
Tool Selection - Doğru tool seçimi

Best Practices

1. Context'i mümkün olduğunca küçük tutun
2. Multiple context'ler kullanın
3. Performance'ı optimize edin
4. Alternatif çözümleri değerlendirin
5. Doğru tool'u seçin

Ne Zaman Alternatif Çözüm Düşünün

Karmaşık state logic gerekiyorsa
Frequent updates gerekiyorsa
Performance critical uygulamalarda
Büyük uygulamalarda
Advanced debugging gerekiyorsa`,
      codeExamples: [],
      relatedProjects: ['performance-optimization', 'state-management-comparison', 'context-alternatives'],
      resources: [
        {
          id: 'context-limitations-docs',
          title: 'React.dev - Context API Sınırlamalar Dokümantasyonu',
          url: 'https://react.dev/learn/passing-data-deeply-with-context',
          type: 'documentation'
        },
        {
          id: 'context-alternatives-guide',
          title: 'Context API Alternatifleri Kılavuzu',
          url: 'https://react.dev/learn/passing-data-deeply-with-context',
          type: 'tutorial'
        },
        {
          id: 'state-management-comparison',
          title: 'State Management Karşılaştırması',
          url: 'https://react.dev/learn/passing-data-deeply-with-context',
          type: 'article'
        }
      ]
    },
    {
      id: 'react-hooks-rules',
      title: 'React Hooks Kuralları',
      description: 'React hooks kullanımında dikkat edilmesi gereken kurallar',
      content: `React Hooks Kuralları

React hooks kullanımında dikkat edilmesi gereken temel kurallar. Modern React geliştirmede hooks kuralları ve en iyi uygulamaları öğrenin.

Hooks Kuralları

1. Sadece Top Level'de Kullanın - Loop'lar içinde kullanmayın, condition'lar içinde kullanmayın, nested function'larda kullanmayın
2. Sadece React Function'larda Kullanın - React function component'lerde, custom hook'larda, regular JavaScript function'larda kullanmayın

Günlük Hayattan Örnek

Bir blog uygulaması geliştirdiğinizi düşünün:

- Yanlış Kullanım: Condition içinde hook kullanmak, loop içinde hook kullanmak, nested function'larda hook kullanmak
- Doğru Kullanım: Top level'de hook kullanmak, custom hook'larda hook kullanmak, React function component'lerde hook kullanmak

Yaygın Hatalar

Yanlış Kullanım - Condition içinde hook kullanmak, loop içinde hook kullanmak, nested function'larda hook kullanmak
Doğru Kullanım - Top level'de hook kullanmak, custom hook'larda hook kullanmak, React function component'lerde hook kullanmak

ESLint Rules

1. react-hooks/rules-of-hooks - Hooks kurallarını kontrol eder
2. react-hooks/exhaustive-deps - useEffect dependencies'ini kontrol eder

Neden Bu Kurallar Var?

Consistent Order - Hooks'ların sırası önemli
State Preservation - State'in korunması için
Performance - Optimizasyon için
Predictability - Öngörülebilir davranış için

Modern React Geliştirmede

Hook Rules - Hook kuralları
ESLint Integration - ESLint entegrasyonu
Best Practices - En iyi uygulamalar
Error Prevention - Hata önleme
Code Quality - Kod kalitesi

Best Practices

1. ESLint rules'ları aktif edin
2. Hooks'ları her zaman aynı sırada kullanın
3. Custom hook'lar oluşturun
4. Hooks'ları condition'lara bağlamayın
5. Hook kurallarına uyun

Ne Zaman Hook Kurallarına Dikkat Edin

Hook kullanırken
Custom hook oluştururken
ESLint kurallarını aktif ederken
Code review yaparken
Team çalışmasında`,
      codeExamples: [],
      relatedProjects: ['hooks-best-practices', 'eslint-setup', 'react-hooks-rules'],
      resources: [
        {
          id: 'react-hooks-rules-docs',
          title: 'React.dev - React Hooks Kuralları Dokümantasyonu',
          url: 'https://react.dev/reference/rules/rules-of-hooks',
          type: 'documentation'
        },
        {
          id: 'react-hooks-rules-guide',
          title: 'React Hooks Kuralları Kılavuzu',
          url: 'https://react.dev/reference/rules/rules-of-hooks',
          type: 'tutorial'
        },
        {
          id: 'react-hooks-best-practices',
          title: 'React Hooks Best Practices',
          url: 'https://react.dev/reference/rules/rules-of-hooks',
          type: 'article'
        }
      ]
    }
  ]
};
