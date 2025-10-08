import { Category } from '../../../types/roadmap';

export const sideEffects: Category = {
  id: 'side-effects',
  name: 'SIDE EFFECTS KULLANIMI',
  icon: '🔄',
  description: 'React\'te side effects ve useEffect hook kullanımı',
  topics: [
    {
      id: 'side-effects-concept',
      title: 'Side Effects Nedir?',
      description: 'React\'te side effects kavramı ve kullanımı',
      content: `Side Effects Nedir?

Side effects, component'in render döngüsü dışında gerçekleşen işlemlerdir. Modern React geliştirmede side effects kavramı ve en iyi uygulamaları öğrenin.

Side Effects Nedir?

Render Dışı İşlemler - Component render'ından bağımsız işlemler
Dış Dünya Etkileşimi - API çağrıları, DOM manipülasyonu
Zamanlayıcılar - setTimeout, setInterval
Event Listener'lar - Window event'leri

Günlük Hayattan Örnek

Bir blog uygulaması geliştirdiğinizi düşünün:

- API çağrıları: Blog postlarını sunucudan çekme
- DOM manipülasyonu: Sayfa başlığını güncelleme
- Zamanlayıcılar: Otomatik kaydetme işlemi
- Event listener'lar: Klavye kısayolları

Side Effects Türleri

1. API Çağrıları - Veri çekme, veri gönderme, veri güncelleme
2. DOM Manipülasyonu - Document title değiştirme, scroll pozisyonu, focus yönetimi
3. Subscription'lar - WebSocket bağlantıları, event listener'lar, timer'lar

Modern React Geliştirmede

useEffect Hook - Side effects yönetimi
Cleanup Functions - Memory leak'leri önleme
Dependency Arrays - Effect'lerin ne zaman çalışacağını kontrol etme
Custom Hooks - Side effects logic'ini paylaşma
Error Handling - Side effects hatalarını yönetme

Best Practices

1. Side effects render sırasında yapılmamalı
2. useEffect hook'u kullanılmalı
3. Cleanup işlemleri unutulmamalı
4. Memory leak'lerden kaçının
5. Error handling ekleyin

Ne Zaman Side Effects Kullanın

API çağrılarında
DOM manipülasyonunda
Zamanlayıcılarda
Event listener'larda
Subscription'larda`,
      codeExamples: [],
      relatedProjects: ['api-integration', 'timer-app', 'side-effects-management'],
      resources: [
        {
          id: 'side-effects-docs',
          title: 'React.dev - Side Effects Dokümantasyonu',
          url: 'https://react.dev/learn/synchronizing-with-effects',
          type: 'documentation'
        },
        {
          id: 'side-effects-guide',
          title: 'React Side Effects Kılavuzu',
          url: 'https://react.dev/learn/synchronizing-with-effects',
          type: 'tutorial'
        },
        {
          id: 'side-effects-patterns',
          title: 'React Side Effects Desenleri',
          url: 'https://react.dev/learn/synchronizing-with-effects',
          type: 'article'
        }
      ]
    },
    {
      id: 'useeffect-hook',
      title: 'useEffect Nedir?',
      description: 'useEffect hook ile side effects yönetimi',
      content: `useEffect Nedir?

useEffect, React'te side effects yönetimi için kullanılan hook'tur. Modern React geliştirmede useEffect hook kullanımı ve en iyi uygulamaları öğrenin.

useEffect Nedir?

Side Effects Hook - Side effects yönetimi için
Lifecycle - Component lifecycle'ını yönetir
Dependencies - Bağımlılık array'i ile kontrol edilir
Cleanup - Temizlik işlemleri yapabilir

Günlük Hayattan Örnek

Bir blog uygulaması geliştirdiğinizi düşünün:

- Component mount: Blog postlarını API'den çekme
- State değişikliği: Arama terimi değiştiğinde filtreleme
- Component unmount: Event listener'ları temizleme
- Dependency değişikliği: Kullanıcı ID değiştiğinde profil güncelleme

useEffect Syntax

useEffect(() => {
  // Side effect kodları
  return () => {
    // Cleanup kodları
  };
}, [dependencies]);

Modern React Geliştirmede

Dependency Arrays - Effect'lerin ne zaman çalışacağını kontrol etme
Cleanup Functions - Memory leak'leri önleme
Custom Hooks - useEffect logic'ini paylaşma
Error Handling - Effect hatalarını yönetme
Performance Optimization - Gereksiz effect'leri önleme

Best Practices

1. Her render'da çalışabilir
2. Dependencies array'i önemli
3. Cleanup fonksiyonu optional
4. Memory leak'lerden kaçının
5. Error handling ekleyin

Ne Zaman useEffect Kullanın

API çağrılarında
DOM manipülasyonunda
Subscription'larda
Timer'larda
Event listener'larda`,
      codeExamples: [],
      relatedProjects: ['data-fetching', 'timer-app', 'useeffect-patterns'],
      resources: [
        {
          id: 'useeffect-docs',
          title: 'React.dev - useEffect Dokümantasyonu',
          url: 'https://react.dev/reference/react/useEffect',
          type: 'documentation'
        },
        {
          id: 'useeffect-guide',
          title: 'useEffect Hook Kılavuzu',
          url: 'https://react.dev/reference/react/useEffect',
          type: 'tutorial'
        },
        {
          id: 'useeffect-patterns',
          title: 'useEffect Hook Desenleri',
          url: 'https://react.dev/reference/react/useEffect',
          type: 'article'
        }
      ]
    },
    {
      id: 'useeffect-dependencies',
      title: 'useEffect ve Dependencies',
      description: 'useEffect dependency array kullanımı',
      content: `useEffect ve Dependencies

useEffect dependency array'i, hook'un ne zaman çalışacağını kontrol eder. Modern React geliştirmede dependency array kullanımı ve en iyi uygulamaları öğrenin.

Dependency Array Nedir?

Kontrol Mekanizması - Hook'un ne zaman çalışacağını belirler
Optimizasyon - Gereksiz çalışmaları önler
Bağımlılık - Effect'in hangi değerlere bağımlı olduğunu gösterir

Günlük Hayattan Örnek

Bir blog uygulaması geliştirdiğinizi düşünün:

- Boş array: Component mount'ta blog postlarını çekme
- Değerler içeren array: Arama terimi değiştiğinde filtreleme
- Array yok: Her render'da sayfa başlığını güncelleme
- Dependency değişikliği: Kullanıcı ID değiştiğinde profil güncelleme

Dependency Array Türleri

1. Boş Array [] - Sadece mount'ta çalışır, unmount'ta cleanup yapar, component lifecycle yönetimi
2. Değerler İçeren Array [value1, value2] - Belirtilen değerler değiştiğinde çalışır, selective re-execution, performance optimization
3. Array Yok - Her render'da çalışır, dikkatli kullanılmalı, infinite loop riski

Modern React Geliştirmede

ESLint Rules - useEffect exhaustive-deps kuralı
Performance Optimization - Gereksiz effect'leri önleme
Memory Management - Memory leak'leri önleme
Custom Hooks - Dependency logic'ini paylaşma
Error Handling - Dependency hatalarını yönetme

Best Practices

1. Dependencies'i doğru belirleyin
2. Missing dependencies warning'lerini dikkate alın
3. Object ve function dependencies'te dikkatli olun
4. ESLint kurallarına uyun
5. Performance'ı göz önünde bulundurun

Ne Zaman Dependency Array Kullanın

API çağrılarında
State değişikliklerinde
Props değişikliklerinde
Timer'larda
Event listener'larda`,
      codeExamples: [],
      relatedProjects: ['optimized-effects', 'dependency-management', 'useeffect-optimization'],
      resources: [
        {
          id: 'useeffect-dependencies-docs',
          title: 'React.dev - useEffect Dependencies Dokümantasyonu',
          url: 'https://react.dev/reference/react/useEffect#specifying-reactive-dependencies',
          type: 'documentation'
        },
        {
          id: 'dependency-array-guide',
          title: 'useEffect Dependency Array Kılavuzu',
          url: 'https://react.dev/reference/react/useEffect#specifying-reactive-dependencies',
          type: 'tutorial'
        },
        {
          id: 'dependency-optimization',
          title: 'useEffect Dependency Optimizasyonu',
          url: 'https://react.dev/reference/react/useEffect#specifying-reactive-dependencies',
          type: 'article'
        }
      ]
    },
    {
      id: 'useeffect-cleanup',
      title: 'useEffect Cleanup Fonksiyonu Kullanımı',
      description: 'useEffect cleanup fonksiyonu ile temizlik işlemleri',
      content: `useEffect Cleanup Fonksiyonu Kullanımı

useEffect cleanup fonksiyonu, side effects'lerin temizlenmesi için kullanılır. Modern React geliştirmede cleanup fonksiyonu kullanımı ve en iyi uygulamaları öğrenin.

Cleanup Nedir?

Temizlik İşlemi - Side effect'lerin geri alınması
Memory Leak Önleme - Bellek sızıntılarını önler
Resource Management - Kaynakları serbest bırakır
Event Listener Temizliği - Event listener'ları kaldırır

Günlük Hayattan Örnek

Bir blog uygulaması geliştirdiğinizi düşünün:

- Timer'lar: Otomatik kaydetme timer'ını temizleme
- Event listener'lar: Klavye kısayolları event listener'larını kaldırma
- Subscription'lar: WebSocket bağlantısını kapatma
- API çağrıları: Devam eden API çağrılarını iptal etme

Cleanup Kullanım Senaryoları

1. Timer'lar - setTimeout temizliği, setInterval temizliği, clearTimeout, clearInterval
2. Event Listener'lar - Window event'leri, document event'leri, custom event'ler
3. Subscription'lar - WebSocket bağlantıları, API subscription'ları, observer pattern
4. DOM Manipülasyonu - Focus yönetimi, scroll pozisyonu, document title

Modern React Geliştirmede

Memory Management - Bellek yönetimi ve garbage collection
Resource Cleanup - Kaynak temizliği ve serbest bırakma
Error Handling - Cleanup hatalarını yönetme
Performance Optimization - Gereksiz cleanup'ları önleme
Custom Hooks - Cleanup logic'ini paylaşma

Best Practices

1. Cleanup fonksiyonu optional
2. Component unmount'ta otomatik çalışır
3. Dependencies değiştiğinde de çalışır
4. Memory leak'leri önler
5. Error handling ekleyin

Ne Zaman Cleanup Kullanın

Timer'larda
Event listener'larda
Subscription'larda
API çağrılarında
DOM manipülasyonunda`,
      codeExamples: [],
      relatedProjects: ['timer-cleanup', 'event-cleanup', 'cleanup-patterns'],
      resources: [
        {
          id: 'useeffect-cleanup-docs',
          title: 'React.dev - useEffect Cleanup Dokümantasyonu',
          url: 'https://react.dev/reference/react/useEffect#cleaning-up-an-effect',
          type: 'documentation'
        },
        {
          id: 'cleanup-functions-guide',
          title: 'useEffect Cleanup Functions Kılavuzu',
          url: 'https://react.dev/reference/react/useEffect#cleaning-up-an-effect',
          type: 'tutorial'
        },
        {
          id: 'memory-leak-prevention',
          title: 'React Memory Leak Önleme',
          url: 'https://react.dev/reference/react/useEffect#cleaning-up-an-effect',
          type: 'article'
        }
      ]
    },
    {
      id: 'useeffect-summary',
      title: 'useEffect Özet',
      description: 'useEffect hook kullanımının özeti',
      content: `useEffect Özet

useEffect hook'unun temel kullanımını özetleyelim. Modern React geliştirmede useEffect hook özeti ve en iyi uygulamaları öğrenin.

useEffect Temel Konseptler

1. Side Effects Yönetimi - API çağrıları, DOM manipülasyonu, timer'lar ve subscription'lar
2. Lifecycle Yönetimi - Component mount/unmount, state ve props değişiklikleri, cleanup işlemleri
3. Dependency Array - Boş array: sadece mount'ta, değerler: belirtilen değerler değiştiğinde, array yok: her render'da

Günlük Hayattan Örnek

Bir blog uygulaması geliştirdiğinizi düşünün:

- Side effects: Blog postlarını API'den çekme, sayfa başlığını güncelleme
- Lifecycle: Component mount'ta veri çekme, unmount'ta temizlik
- Dependencies: Arama terimi değiştiğinde filtreleme

Modern React Geliştirmede

Performance Optimization - Gereksiz effect'leri önleme
Memory Management - Memory leak'leri önleme
Error Handling - Effect hatalarını yönetme
Custom Hooks - useEffect logic'ini paylaşma
Testing - Effect'leri test etme

Best Practices

1. Dependencies'i doğru belirleyin
2. Cleanup fonksiyonunu kullanın
3. Memory leak'leri önleyin
4. Performance'ı optimize edin
5. Error handling ekleyin

Ne Zaman useEffect Kullanın

API çağrılarında
DOM manipülasyonunda
Timer'larda
Event listener'larda
Subscription'larda`,
      codeExamples: [],
      relatedProjects: ['useeffect-practice', 'side-effects-mastery', 'useeffect-complete-guide'],
      resources: [
        {
          id: 'useeffect-summary-docs',
          title: 'React.dev - useEffect Özet Dokümantasyonu',
          url: 'https://react.dev/learn/synchronizing-with-effects',
          type: 'documentation'
        },
        {
          id: 'useeffect-complete-guide',
          title: 'useEffect Tam Kılavuzu',
          url: 'https://react.dev/learn/synchronizing-with-effects',
          type: 'tutorial'
        },
        {
          id: 'useeffect-best-practices',
          title: 'useEffect Best Practices',
          url: 'https://react.dev/learn/synchronizing-with-effects',
          type: 'article'
        }
      ]
    }
  ]
};
