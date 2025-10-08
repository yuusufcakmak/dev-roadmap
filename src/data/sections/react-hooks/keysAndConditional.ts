import { Category } from '../../../types/roadmap';

export const keysAndConditional: Category = {
  id: 'keys-and-conditional',
  name: 'REACT KEYS VE CONDITIONAL CONTENT',
  icon: '🔑',
  description: 'React listelerinde key kullanımı ve koşullu içerik',
  topics: [
    {
      id: 'javascript-map-method',
      title: 'JavaScript Map Metodunu İyi Anlamak',
      description: 'JavaScript map metodunun React\'te kullanımı',
      content: `JavaScript Map Metodunu İyi Anlamak

JavaScript map metodu, React'te listeleri render etmek için kritik öneme sahiptir. Modern React geliştirmede map metodu kullanımı ve en iyi uygulamaları öğrenin.

Map Metodu Nedir?

Array Method - Array üzerinde döngü yapar
Yeni Array - Orijinal array'i değiştirmez
Transform - Her elemanı dönüştürür
Return - Yeni array döndürür

Günlük Hayattan Örnek

Bir e-ticaret uygulaması geliştirdiğinizi düşünün:

- Ürün listesi: map ile ürün verilerini JSX elementlerine dönüştürme
- Kullanıcı listesi: map ile kullanıcı verilerini kartlara dönüştürme
- Yorum listesi: map ile yorum verilerini yorum kartlarına dönüştürme
- Kategori listesi: map ile kategori verilerini butonlara dönüştürme

React'te Kullanımı

Liste Render Etme - Array'deki verileri JSX elementlerine dönüştürür
Key Prop - Her element için benzersiz key sağlar
Conditional Rendering - Map içinde koşullu render yapabilirsiniz

Modern React Geliştirmede

Performance Optimization - Gereksiz re-render'ları önleme
Key Prop - Her liste elemanı için unique key kullanma
Conditional Rendering - Koşullu liste render etme
Data Transformation - Veri dönüşümü ve filtreleme
Error Handling - Liste render hatalarını yönetme

Best Practices

1. Her zaman key prop kullanın
2. Key'ler benzersiz olmalı
3. Index'i key olarak kullanmaktan kaçının
4. Stable key'ler kullanın
5. Performance'ı göz önünde bulundurun

Ne Zaman Map Metodu Kullanın

Liste render etmede
Veri dönüşümünde
Array manipülasyonunda
Conditional rendering'de
Data filtering'de`,
      codeExamples: [],
      relatedProjects: ['todo-list', 'user-list', 'list-rendering'],
      resources: [
        {
          id: 'javascript-map-docs',
          title: 'MDN - JavaScript Map Metodu Dokümantasyonu',
          url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map',
          type: 'documentation'
        },
        {
          id: 'react-list-rendering',
          title: 'React Liste Rendering Kılavuzu',
          url: 'https://react.dev/learn/rendering-lists',
          type: 'tutorial'
        },
        {
          id: 'array-methods-react',
          title: 'React\'te Array Metodları',
          url: 'https://react.dev/learn/rendering-lists',
          type: 'article'
        }
      ]
    },
    {
      id: 'react-key-prop',
      title: 'React Key Özelliği',
      description: 'React listelerinde key prop kullanımı',
      content: `React Key Özelliği

React'te listelerde key prop kullanımı performans ve doğru render için kritiktir. Modern React geliştirmede key prop kullanımı ve en iyi uygulamaları öğrenin.

Key Nedir?

Benzersiz Tanımlayıcı - Her element için benzersiz ID
React Optimizasyonu - Hangi elementlerin değiştiğini bilir
Re-render Optimizasyonu - Gereksiz re-render'ları önler
State Korunması - Component state'ini korur

Günlük Hayattan Örnek

Bir blog uygulaması geliştirdiğinizi düşünün:

- Post listesi: Her post için unique ID key kullanma
- Yorum listesi: Her yorum için unique ID key kullanma
- Kategori listesi: Her kategori için unique ID key kullanma
- Tag listesi: Her tag için unique ID key kullanma

Key Kullanım Kuralları

Doğru Key Kullanımı - Benzersiz olmalı, stable olmalı (değişmemeli), predictable olmalı
Yanlış Key Kullanımı - Index kullanmak (liste değişirse sorun), random değerler, duplicate key'ler

Modern React Geliştirmede

Performance Optimization - Gereksiz re-render'ları önleme
State Preservation - Component state'ini koruma
Virtual DOM Optimization - Virtual DOM diffing optimizasyonu
Memory Management - Bellek yönetimi ve garbage collection
Error Prevention - Render hatalarını önleme

Best Practices

1. Key prop'u en dıştaki element'e verin
2. Key'ler sadece aynı seviyedeki elementler için benzersiz olmalı
3. Key değişirse component yeniden mount edilir
4. Stable key'ler kullanın
5. Performance'ı göz önünde bulundurun

Ne Zaman Key Kullanın

Liste render etmede
Dynamic listelerde
Conditional rendering'de
State preservation'da
Performance optimization'da`,
      codeExamples: [],
      relatedProjects: ['dynamic-list', 'sortable-list', 'key-optimization'],
      resources: [
        {
          id: 'react-key-docs',
          title: 'React.dev - React Key Dokümantasyonu',
          url: 'https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key',
          type: 'documentation'
        },
        {
          id: 'react-keys-guide',
          title: 'React Keys Kılavuzu',
          url: 'https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key',
          type: 'tutorial'
        },
        {
          id: 'key-best-practices',
          title: 'React Key Best Practices',
          url: 'https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key',
          type: 'article'
        }
      ]
    },
    {
      id: 'react-conditional-content',
      title: 'React Conditional Content',
      description: 'React\'te koşullu içerik render etme',
      content: `React Conditional Content

React'te koşullu içerik render etmek için birkaç yöntem vardır. Modern React geliştirmede conditional rendering ve en iyi uygulamaları öğrenin.

Koşullu Render Yöntemleri

1. if/else Statement - Component seviyesinde koşullu render
2. Ternary Operator - Tek satırda koşullu render
3. Logical AND (&&) - Koşul true ise render et
4. Switch Statement - Çoklu koşullar için

Günlük Hayattan Örnek

Bir e-ticaret uygulaması geliştirdiğinizi düşünün:

- Loading state: Veri yüklenirken loading spinner gösterimi
- Error message: Hata durumunda error message gösterimi
- User authentication: Giriş yapmış kullanıcı için farklı içerik
- Feature toggle: Özellik açık/kapalı durumuna göre içerik

Modern React Geliştirmede

Performance Optimization - Gereksiz re-render'ları önleme
State Management - State'e göre koşullu render
Component Composition - Component'leri koşullu birleştirme
Error Boundaries - Hata durumlarını yönetme
Accessibility - Erişilebilirlik standartları

Best Practices

1. Falsy değerlere dikkat edin (0, false, null)
2. Ternary operator daha okunabilir
3. Complex koşullar için ayrı fonksiyon yazın
4. Performance'ı göz önünde bulundurun
5. Accessibility standartlarına uyun

Ne Zaman Conditional Content Kullanın

Loading state'lerde
Error handling'de
User authentication'da
Feature toggle'larda
Dynamic content'te`,
      codeExamples: [],
      relatedProjects: ['conditional-ui', 'loading-states', 'dynamic-content'],
      resources: [
        {
          id: 'conditional-content-docs',
          title: 'React.dev - Conditional Content Dokümantasyonu',
          url: 'https://react.dev/learn/conditional-rendering',
          type: 'documentation'
        },
        {
          id: 'conditional-rendering-guide',
          title: 'React Conditional Rendering Kılavuzu',
          url: 'https://react.dev/learn/conditional-rendering',
          type: 'tutorial'
        },
        {
          id: 'conditional-patterns',
          title: 'React Conditional Patterns',
          url: 'https://react.dev/learn/conditional-rendering',
          type: 'article'
        }
      ]
    }
  ]
};
