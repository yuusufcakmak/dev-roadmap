import { Category } from '../../../types/roadmap';

export const useReducerState: Category = {
  id: 'usereducer-state',
  name: 'USEREDUCER İLE STATE MANAGEMENT',
  icon: '🔄',
  description: 'useReducer hook ile karmaşık state yönetimi',
  topics: [
    {
      id: 'usereducer-hook',
      title: 'useReducer Nedir?',
      description: 'useReducer hook ile karmaşık state yönetimi',
      content: `useReducer Nedir?

useReducer, useState'e alternatif olarak karmaşık state yönetimi için kullanılan hook'tur. Modern React geliştirmede useReducer hook kullanımı ve en iyi uygulamaları öğrenin.

useReducer Nedir?

Complex State - Karmaşık state yönetimi için
Reducer Pattern - Redux benzeri pattern
Predictable Updates - State güncellemeleri öngörülebilir
Multiple Actions - Birden fazla action türü

Günlük Hayattan Örnek

Bir e-ticaret sepet uygulaması geliştirdiğinizi düşünün:

- Ürün ekleme: ADD_ITEM action ile sepete ürün ekleme
- Ürün çıkarma: REMOVE_ITEM action ile sepetten ürün çıkarma
- Miktar güncelleme: UPDATE_QUANTITY action ile ürün miktarını güncelleme
- Sepeti temizleme: CLEAR_CART action ile tüm sepeti temizleme

useReducer vs useState

useReducer - Karmaşık state, multiple actions, predictable, reducer function
useState - Basit state, single update, direct update, direct setter

Modern React Geliştirmede

State Management - Karmaşık state yönetimi
Action Dispatching - Action'ları dispatch etme
Reducer Pattern - Reducer pattern kullanımı
State Immutability - Immutable state güncellemeleri
Performance Optimization - State güncellemelerini optimize etme

Best Practices

1. Karmaşık state logic için kullanın
2. Reducer pure function olmalı
3. State'i mutate etmeyin
4. Action type'ları consistent olmalı
5. Performance'ı göz önünde bulundurun

Ne Zaman useReducer Kullanın

State güncellemeleri karmaşıksa
Birden fazla sub-value varsa
State logic karmaşıksa
useState yeterli değilse
Redux benzeri pattern istiyorsanız`,
      codeExamples: [],
      relatedProjects: ['todo-app', 'shopping-cart', 'complex-state-management'],
      resources: [
        {
          id: 'usereducer-docs',
          title: 'React.dev - useReducer Hook Dokümantasyonu',
          url: 'https://react.dev/reference/react/useReducer',
          type: 'documentation'
        },
        {
          id: 'usereducer-patterns',
          title: 'useReducer Hook Desenleri',
          url: 'https://react.dev/reference/react/useReducer',
          type: 'tutorial'
        },
        {
          id: 'usereducer-vs-usestate',
          title: 'useReducer vs useState Kılavuzu',
          url: 'https://react.dev/reference/react/useReducer',
          type: 'article'
        }
      ]
    },
    {
      id: 'usestate-state-management',
      title: 'useState ile State Yönetimi',
      description: 'useState hook ile basit state yönetimi',
      content: `useState ile State Yönetimi

useState hook'u ile basit state yönetimi nasıl yapılır? Modern React geliştirmede useState hook kullanımı ve en iyi uygulamaları öğrenin.

useState Temel Kullanım

Basit State - Tek değerli state'ler için
Direct Updates - Doğrudan güncelleme
Easy to Use - Kolay kullanım
Performance - Küçük state'ler için hızlı

Günlük Hayattan Örnek

Bir blog uygulaması geliştirdiğinizi düşünün:

- Sayaç: useState(0) ile beğeni sayısını takip etme
- Toggle: useState(false) ile modal açık/kapalı durumu
- String: useState('') ile arama terimini saklama
- Number: useState(1) ile sayfa numarasını takip etme

Kullanım Senaryoları

Basit Değerler - Counter, Toggle (true/false), String değerler, Number değerler
Object State - Form data, User preferences, Simple configurations

Modern React Geliştirmede

State Management - Basit state yönetimi
Direct Updates - Doğrudan state güncellemeleri
Performance Optimization - Küçük state'ler için optimize edilmiş
State Immutability - Immutable state güncellemeleri
Hook Rules - Hook kullanım kuralları

Best Practices

1. Basit state'ler için useState kullanın
2. Object state'lerde spread operator kullanın
3. Functional update kullanın
4. State'i mümkün olduğunca basit tutun
5. Performance'ı göz önünde bulundurun

Ne Zaman useState Kullanın

Basit state yönetiminde
Tek değerli state'lerde
Küçük uygulamalarda
Hızlı prototiplemede
Karmaşık logic gerektirmeyen durumlarda`,
      codeExamples: [],
      relatedProjects: ['counter-app', 'simple-form', 'basic-state-management'],
      resources: [
        {
          id: 'usestate-state-docs',
          title: 'React.dev - useState Hook Dokümantasyonu',
          url: 'https://react.dev/reference/react/useState',
          type: 'documentation'
        },
        {
          id: 'usestate-basic-usage',
          title: 'useState Temel Kullanım Kılavuzu',
          url: 'https://react.dev/reference/react/useState',
          type: 'tutorial'
        },
        {
          id: 'usestate-best-practices',
          title: 'useState Best Practices',
          url: 'https://react.dev/reference/react/useState',
          type: 'article'
        }
      ]
    },
    {
      id: 'usereducer-state-management',
      title: 'useReducer ile State Yönetimi',
      description: 'useReducer hook ile karmaşık state yönetimi',
      content: `useReducer ile State Yönetimi

useReducer hook'u ile karmaşık state yönetimi nasıl yapılır? Modern React geliştirmede useReducer hook kullanımı ve en iyi uygulamaları öğrenin.

useReducer Yapısı

1. Reducer Function - State ve action alır, yeni state döndürür, pure function olmalı, side effect içermemeli
2. Initial State - Başlangıç state değeri, object veya primitive olabilir, reducer'ın ilk çağrısında kullanılır
3. Dispatch Function - Action'ları gönderir, reducer'ı tetikler, state güncellemesi yapar

Günlük Hayattan Örnek

Bir todo uygulaması geliştirdiğinizi düşünün:

- ADD_TODO: Yeni görev ekleme action'ı
- REMOVE_TODO: Görev silme action'ı
- TOGGLE_TODO: Görev tamamlama action'ı
- CLEAR_COMPLETED: Tamamlanan görevleri temizleme action'ı

Action Türleri

1. String Actions - Basit string action'lar
2. Object Actions - Type ve payload içeren action'lar
3. Multiple Actions - Birden fazla action türü

Kullanım Örnekleri

Todo List - ADD_TODO, REMOVE_TODO, TOGGLE_TODO, CLEAR_COMPLETED
Form Management - UPDATE_FIELD, VALIDATE_FORM, RESET_FORM, SUBMIT_FORM

Modern React Geliştirmede

State Management - Karmaşık state yönetimi
Action Dispatching - Action'ları dispatch etme
Reducer Pattern - Reducer pattern kullanımı
State Immutability - Immutable state güncellemeleri
Performance Optimization - State güncellemelerini optimize etme

Best Practices

1. Reducer pure function olmalı
2. State'i mutate etmeyin
3. Spread operator kullanın
4. Action type'ları consistent olmalı
5. Performance'ı göz önünde bulundurun

Ne Zaman useReducer ile State Yönetimi Kullanın

Karmaşık state logic'inde
Birden fazla action türünde
State güncellemeleri karmaşıksa
useState yeterli değilse
Redux benzeri pattern istiyorsanız`,
      codeExamples: [],
      relatedProjects: ['advanced-todo', 'complex-form', 'usereducer-patterns'],
      resources: [
        {
          id: 'usereducer-state-docs',
          title: 'React.dev - useReducer State Yönetimi Dokümantasyonu',
          url: 'https://react.dev/reference/react/useReducer',
          type: 'documentation'
        },
        {
          id: 'usereducer-advanced-patterns',
          title: 'useReducer Gelişmiş Desenleri',
          url: 'https://react.dev/reference/react/useReducer',
          type: 'tutorial'
        },
        {
          id: 'usereducer-complex-state',
          title: 'useReducer ile Karmaşık State Yönetimi',
          url: 'https://react.dev/reference/react/useReducer',
          type: 'article'
        }
      ]
    }
  ]
};
