import { Category } from "../../../types/roadmap";

export const optimizationTechniques: Category = {
  id: "optimization-techniques",
  name: "REACT OPTİMİZASYON TEKNİKLERİ",
  icon: "⚡",
  description: "React uygulamalarında performans optimizasyonu teknikleri",
  topics: [
    {
      id: "react-working-principle",
      title: "React Çalışma Mantığı",
      description: "React'in nasıl çalıştığını ve render sürecini anlama",
      content: `React Çalışma Mantığı

React'in nasıl çalıştığını ve render sürecini derinlemesine anlayalım. Modern React geliştirmede React'in çalışma mantığı ve en iyi uygulamaları öğrenin.

React'in Temel Çalışma Prensibi

Virtual DOM - React, gerçek DOM yerine Virtual DOM kullanır, değişiklikleri önce Virtual DOM'da yapar, sonra gerçek DOM ile karşılaştırır (Diffing), sadece değişen kısımları günceller (Reconciliation)
Component Lifecycle - Mount: Component ilk kez render edilir, Update: State veya props değiştiğinde, Unmount: Component DOM'dan kaldırılır

Günlük Hayattan Örnek

Bir e-ticaret uygulaması geliştirdiğinizi düşünün:

- Virtual DOM: Ürün listesi değiştiğinde sadece değişen ürünleri güncelleme
- Component Lifecycle: Sepet component'i mount olduğunda veri çekme, unmount olduğunda temizlik
- Re-render: Kullanıcı filtreleme yaptığında sadece gerekli component'leri güncelleme

Render Süreci

1. Initial Render - Component ilk kez oluşturulur, Virtual DOM tree oluşturulur, gerçek DOM'a yazılır
2. Re-render - State veya props değişir, component yeniden render edilir, Virtual DOM güncellenir, diffing algoritması çalışır, gerekli DOM güncellemeleri yapılır

Performance Etkileri

Re-render Nedenleri - State değişiklikleri, props değişiklikleri, parent component re-render, context değer değişiklikleri
Optimizasyon Stratejileri - Gereksiz re-render'ları önleme, memoization kullanımı, component splitting, lazy loading

Modern React Geliştirmede

Virtual DOM Optimization - Virtual DOM optimizasyonu
Render Optimization - Render optimizasyonu
Performance Monitoring - Performance monitoring
Component Architecture - Component mimarisi
Memory Management - Bellek yönetimi

Best Practices

1. Gereksiz re-render'ları önleyin
2. Memoization kullanın
3. Component'leri bölün
4. Lazy loading uygulayın
5. Performance'ı monitor edin

Ne Zaman React Çalışma Mantığını Anlayın

Performance sorunları yaşarken
Optimizasyon yaparken
Component architecture tasarlarken
Debugging yaparken
Team çalışmasında`,
      codeExamples: [],
      relatedProjects: [
        "performance-analysis",
        "render-optimization",
        "react-internals",
      ],
      resources: [
        {
          id: "react-working-principle-docs",
          title: "React.dev - React Çalışma Mantığı Dokümantasyonu",
          url: "https://react.dev/learn/render-and-commit",
          type: "documentation",
        },
        {
          id: "react-internals-guide",
          title: "React İç Yapısı Kılavuzu",
          url: "https://react.dev/learn/render-and-commit",
          type: "tutorial",
        },
        {
          id: "react-performance-optimization",
          title: "React Performance Optimizasyonu",
          url: "https://react.dev/learn/render-and-commit",
          type: "article",
        },
      ],
    },
    {
      id: "component-updates",
      title: "Componentlerin Güncellenmesi",
      description:
        "React componentlerinin ne zaman ve nasıl güncellendiğini anlama",
      content: `Componentlerin Güncellenmesi

React componentlerinin ne zaman ve nasıl güncellendiğini detaylı olarak inceleyelim. Modern React geliştirmede component güncellemeleri ve en iyi uygulamaları öğrenin.

Component Update Tetikleyicileri

1. State Değişiklikleri - useState hook'u ile state güncelleme, useReducer ile state güncelleme, state değiştiğinde component re-render olur
2. Props Değişiklikleri - Parent component'ten gelen props değişir, child component otomatik olarak re-render olur, props referansı değişirse re-render tetiklenir
3. Context Değişiklikleri - Context değeri değişirse, tüm consumer component'ler re-render olur, context provider'ın value prop'u değişirse

Günlük Hayattan Örnek

Bir blog uygulaması geliştirdiğinizi düşünün:

- State Değişiklikleri: Kullanıcı beğeni butonuna tıkladığında beğeni sayısı state'i güncellenir
- Props Değişiklikleri: Parent component'ten gelen post verisi değiştiğinde post component'i güncellenir
- Context Değişiklikleri: Theme context'i değiştiğinde tüm component'ler yeniden render olur

Update Süreci

1. Trigger Phase - State veya props değişikliği tespit edilir, component update işlemi başlatılır
2. Render Phase - Component fonksiyonu yeniden çalıştırılır, yeni Virtual DOM tree oluşturulur, pure function olarak çalışır
3. Commit Phase - Virtual DOM ile gerçek DOM karşılaştırılır, gerekli DOM güncellemeleri yapılır, useEffect hook'ları çalıştırılır

Update Optimizasyonu

Gereksiz Re-render'ları Önleme - React.memo kullanımı, useMemo ve useCallback kullanımı, component splitting, props drilling'i azaltma
Performance Monitoring - React DevTools Profiler, console.log ile render takibi, Performance API kullanımı

Modern React Geliştirmede

Component Lifecycle - Component lifecycle yönetimi
Update Optimization - Update optimizasyonu
Performance Monitoring - Performance monitoring
Render Analysis - Render analizi
Memory Management - Bellek yönetimi

Best Practices

1. Gereksiz re-render'ları önleyin
2. React.memo kullanın
3. useMemo ve useCallback kullanın
4. Component'leri bölün
5. Performance'ı monitor edin

Ne Zaman Component Güncellemelerini Anlayın

Performance sorunları yaşarken
Optimizasyon yaparken
Component architecture tasarlarken
Debugging yaparken
Team çalışmasında`,
      codeExamples: [],
      relatedProjects: [
        "component-optimization",
        "render-analysis",
        "update-patterns",
      ],
      resources: [
        {
          id: "component-updates-docs",
          title: "React.dev - Component Güncellemeleri Dokümantasyonu",
          url: "https://react.dev/learn/render-and-commit",
          type: "documentation",
        },
        {
          id: "component-updates-guide",
          title: "Component Güncellemeleri Kılavuzu",
          url: "https://react.dev/learn/render-and-commit",
          type: "tutorial",
        },
        {
          id: "component-updates-patterns",
          title: "Component Güncelleme Desenleri",
          url: "https://react.dev/learn/render-and-commit",
          type: "article",
        },
      ],
    },
    {
      id: "child-component-reevaluation",
      title: "Child Component Re-Evaluation",
      description:
        "Child componentlerin ne zaman yeniden değerlendirildiğini anlama",
      content: `Child Component Re-Evaluation

Child componentlerin ne zaman yeniden değerlendirildiğini ve bunun performansa etkisini inceleyelim. Modern React geliştirmede child component re-evaluation ve en iyi uygulamaları öğrenin.

Re-evaluation Tetikleyicileri

1. Parent Re-render - Parent component re-render olduğunda, tüm child component'ler de re-render olur, props değişmese bile re-evaluation yapılır
2. Props Değişikliği - Child'a geçilen props değişirse, component yeniden render edilir, referans eşitliği kontrol edilir
3. Context Değişikliği - Child component context kullanıyorsa, context değeri değiştiğinde re-render olur

Günlük Hayattan Örnek

Bir e-ticaret uygulaması geliştirdiğinizi düşünün:

- Parent Re-render: Ana sayfa component'i güncellendiğinde tüm ürün kartları yeniden render olur
- Props Değişikliği: Ürün fiyatı değiştiğinde sadece o ürün kartı güncellenir
- Context Değişikliği: Theme context'i değiştiğinde tüm child component'ler yeniden render olur

Re-evaluation Süreci

1. Parent Component Update - Parent component state değişir, parent re-render olur, child component'ler için render işlemi başlar
2. Child Component Analysis - Child component'in props'ları kontrol edilir, önceki props ile karşılaştırılır, değişiklik varsa re-render yapılır
3. Performance Impact - Gereksiz re-render'lar performansı etkiler, özellikle büyük component tree'lerde, memory ve CPU kullanımını artırır

Optimizasyon Stratejileri

React.memo Kullanımı - Child component'leri memo ile sarmalayın, props değişmediğinde re-render'ı önler, shallow comparison yapar
Component Splitting - Büyük component'leri bölün, sadece değişen kısımları re-render edin, granular updates sağlayın
Props Optimization - Gereksiz props geçmeyin, object ve function props'ları optimize edin, useCallback ve useMemo kullanın

Modern React Geliştirmede

Child Component Optimization - Child component optimizasyonu
Re-evaluation Control - Re-evaluation kontrolü
Performance Impact Analysis - Performance etki analizi
Component Tree Optimization - Component tree optimizasyonu
Memory Management - Bellek yönetimi

Best Practices

1. React.memo kullanın
2. Component'leri bölün
3. Props'ları optimize edin
4. useCallback ve useMemo kullanın
5. Performance'ı monitor edin

Ne Zaman Child Component Re-Evaluation'ı Anlayın

Performance sorunları yaşarken
Büyük component tree'lerde
Optimizasyon yaparken
Debugging yaparken
Team çalışmasında`,
      codeExamples: [],
      relatedProjects: [
        "child-optimization",
        "memo-implementation",
        "re-evaluation-patterns",
      ],
      resources: [
        {
          id: "child-reevaluation-docs",
          title: "React.dev - Child Component Re-evaluation Dokümantasyonu",
          url: "https://react.dev/reference/react/memo",
          type: "documentation",
        },
        {
          id: "child-reevaluation-guide",
          title: "Child Component Re-evaluation Kılavuzu",
          url: "https://react.dev/reference/react/memo",
          type: "tutorial",
        },
        {
          id: "child-reevaluation-patterns",
          title: "Child Component Re-evaluation Desenleri",
          url: "https://react.dev/reference/react/memo",
          type: "article",
        },
      ],
    },
    {
      id: "react-memo-usage",
      title: "React.memo() Kullanımı",
      description: "React.memo ile component optimizasyonu",
      content: `React.memo() Kullanımı

React.memo ile component'lerin gereksiz re-render'larını nasıl önleyeceğimizi öğrenelim. Modern React geliştirmede React.memo kullanımı ve en iyi uygulamaları öğrenin.

React.memo Nedir?

Higher-Order Component - Component'i sarmalayan HOC, props değişikliklerini kontrol eder, shallow comparison yapar, değişiklik yoksa re-render'ı önler
Kullanım Amacı - Performance optimizasyonu, gereksiz re-render'ları önleme, CPU kullanımını azaltma, memory optimizasyonu

Günlük Hayattan Örnek

Bir blog uygulaması geliştirdiğinizi düşünün:

- Expensive Component: Post listesi component'i React.memo ile sarmalanır
- Sık Re-render: Kullanıcı profili component'i sık güncellenir
- Props Nadiren Değişir: Sidebar component'i nadiren güncellenir
- List Item: Post kartları React.memo ile optimize edilir

React.memo Kullanımı

1. Basit Kullanım - Component'i memo ile sarmalayın, props değişmediğinde re-render olmaz, otomatik shallow comparison
2. Custom Comparison - İkinci parametre olarak comparison function, daha detaylı kontrol sağlar, özel karşılaştırma mantığı
3. Nested Objects - Object props'lar için dikkatli olun, referans eşitliği kontrol edilir, useMemo ile object'leri optimize edin

Best Practices

Ne Zaman Kullanılır? - Expensive component'ler, sık re-render olan component'ler, props'ları nadiren değişen component'ler, list item component'leri
Ne Zaman Kullanılmaz? - Props'ları sık değişen component'ler, basit component'ler, memory overhead'i gereksiz olan durumlar
Dikkat Edilmesi Gerekenler - Props referanslarını kontrol edin, object ve function props'ları optimize edin, useCallback ve useMemo ile birlikte kullanın

Modern React Geliştirmede

Component Memoization - Component memoization
Performance Optimization - Performance optimizasyonu
Shallow Comparison - Shallow comparison
Memory Management - Bellek yönetimi
Render Optimization - Render optimizasyonu

Best Practices

1. Expensive component'ler için kullanın
2. Props'ları nadiren değişen component'ler için kullanın
3. Object ve function props'ları optimize edin
4. useCallback ve useMemo ile birlikte kullanın
5. Performance test yapın

Ne Zaman React.memo Kullanın

Expensive component'lerde
Sık re-render olan component'lerde
Props'ları nadiren değişen component'lerde
List item component'lerinde
Performance kritik uygulamalarda`,
      codeExamples: [],
      relatedProjects: [
        "memo-optimization",
        "performance-comparison",
        "react-memo-patterns",
      ],
      resources: [
        {
          id: "react-memo-docs",
          title: "React.dev - React.memo Dokümantasyonu",
          url: "https://react.dev/reference/react/memo",
          type: "documentation",
        },
        {
          id: "react-memo-guide",
          title: "React.memo Kullanım Kılavuzu",
          url: "https://react.dev/reference/react/memo",
          type: "tutorial",
        },
        {
          id: "react-memo-patterns",
          title: "React.memo Kullanım Desenleri",
          url: "https://react.dev/reference/react/memo",
          type: "article",
        },
      ],
    },
    {
      id: "usecallback-usage",
      title: "useCallback Kullanımı",
      description: "useCallback hook ile function optimizasyonu",
      content: `useCallback Kullanımı

useCallback hook ile function'ların gereksiz yeniden oluşturulmasını nasıl önleyeceğimizi öğrenelim. Modern React geliştirmede useCallback kullanımı ve en iyi uygulamaları öğrenin.

useCallback Nedir?

Function Memoization - Function'ları memoize eder, dependency array'e göre cache'ler, referans eşitliğini korur, re-render'ları optimize eder
Kullanım Amacı - Function referanslarını stabilize etme, child component re-render'larını önleme, performance optimizasyonu, memory kullanımını optimize etme

Günlük Hayattan Örnek

Bir blog uygulaması geliştirdiğinizi düşünün:

- Event Handler'lar: onClick, onChange gibi event handler'lar useCallback ile optimize edilir
- Child Component Props: Function'ları child component'lere geçerken useCallback kullanılır
- API Call Function'ları: HTTP istekleri yapan function'lar useCallback ile optimize edilir

useCallback Kullanımı

1. Temel Syntax - useCallback(function, dependencies), function'ı dependency array'e göre cache'ler, dependencies değişmediğinde aynı referansı döndürür
2. Event Handler'lar - onClick, onChange gibi event handler'lar, child component'lere props olarak geçilen function'lar, gereksiz re-render'ları önler
3. API Call Function'ları - HTTP istekleri yapan function'lar, data fetching function'ları, async operation'lar

Kullanım Senaryoları

1. Child Component Props - Function'ları child component'lere geçerken, React.memo ile birlikte kullanım, referans eşitliği sağlama
2. useEffect Dependencies - useEffect dependency array'inde function kullanımı, infinite loop'ları önleme, stable reference sağlama
3. Custom Hook'lar - Custom hook'larda function return etme, hook consumer'larının re-render'ını önleme, API wrapper function'ları

Dikkat Edilmesi Gerekenler

Over-optimization - Her function'ı useCallback ile sarmalamayın, sadece gerekli durumlarda kullanın, performance test yapın
Dependency Array - Doğru dependencies'i belirleyin, missing dependencies warning'lerini dikkate alın, stale closure'lara dikkat edin
Memory Usage - useCallback memory kullanır, gereksiz kullanım memory leak'e neden olabilir, balance sağlayın

Modern React Geliştirmede

Function Memoization - Function memoization
Performance Optimization - Performance optimizasyonu
Memory Management - Bellek yönetimi
Referans Stability - Referans stabilitesi
Render Optimization - Render optimizasyonu

Best Practices

1. Sadece gerekli durumlarda kullanın
2. Doğru dependencies'i belirleyin
3. Performance test yapın
4. Memory kullanımını kontrol edin
5. Balance sağlayın

Ne Zaman useCallback Kullanın

Child component'lere function geçerken
useEffect dependency array'inde function kullanırken
Custom hook'larda function return ederken
Performance kritik uygulamalarda
React.memo ile birlikte kullanırken`,
      codeExamples: [],
      relatedProjects: [
        "callback-optimization",
        "function-memoization",
        "usecallback-patterns",
      ],
      resources: [
        {
          id: "usecallback-docs",
          title: "React.dev - useCallback Dokümantasyonu",
          url: "https://react.dev/reference/react/useCallback",
          type: "documentation",
        },
        {
          id: "usecallback-guide",
          title: "useCallback Kullanım Kılavuzu",
          url: "https://react.dev/reference/react/useCallback",
          type: "tutorial",
        },
        {
          id: "usecallback-patterns",
          title: "useCallback Kullanım Desenleri",
          url: "https://react.dev/reference/react/useCallback",
          type: "article",
        },
      ],
    },
    {
      id: "usecallback-dependencies",
      title: "useCallback Dependency Array",
      description: "useCallback dependency array kullanımı ve optimizasyonu",
      content: `useCallback Dependency Array

useCallback dependency array'inin doğru kullanımını ve optimizasyon stratejilerini öğrenelim. Modern React geliştirmede useCallback dependency array kullanımı ve en iyi uygulamaları öğrenin.

Dependency Array Nedir?

Bağımlılık Kontrolü - Function'ın hangi değerlere bağımlı olduğunu belirtir, bu değerler değiştiğinde function yeniden oluşturulur, değişmediğinde cached version kullanılır, shallow comparison yapılır
Kullanım Amacı - Function'ın doğru çalışmasını sağlama, stale closure'ları önleme, performance optimizasyonu, predictable behavior sağlama

Günlük Hayattan Örnek

Bir blog uygulaması geliştirdiğinizi düşünün:

- Boş Array: Sabit function'lar için boş array kullanılır
- Değerler İçeren Array: State değerlerine bağımlı function'lar için
- Object Dependencies: Object props'lara bağımlı function'lar için

Dependency Array Türleri

1. Boş Array [] - Function hiçbir değere bağımlı değil, sadece mount'ta oluşturulur, component lifecycle boyunca aynı kalır
2. Değerler İçeren Array [value1, value2] - Belirtilen değerler değiştiğinde function yeniden oluşturulur, selective re-creation, fine-grained control
3. Object ve Function Dependencies - Object referansları kontrol edilir, function referansları kontrol edilir, nested object'ler için dikkatli olun

Best Practices

Doğru Dependencies - Function içinde kullanılan tüm değerleri ekleyin, ESLint exhaustive-deps rule'unu kullanın, missing dependencies warning'lerini dikkate alın
Object Dependencies - Object'leri useMemo ile optimize edin, nested object'ler için dikkatli olun, spread operator kullanımına dikkat edin
Function Dependencies - Function'ları useCallback ile optimize edin, circular dependency'leri önleyin, custom hook'larda dikkatli olun

Yaygın Hatalar

Missing Dependencies - Function içinde kullanılan değerleri unutma, stale closure'lara neden olur, ESLint warning'lerini dikkate alın
Over-dependencies - Gereksiz değerleri dependency array'e ekleme, function'ın sık yeniden oluşturulmasına neden olur, performance kaybına yol açar
Object Reference Issues - Object'lerin referans eşitliği sorunları, useMemo ile object'leri optimize edin, immutable update pattern'leri kullanın

Modern React Geliştirmede

Dependency Management - Dependency yönetimi
Performance Optimization - Performance optimizasyonu
ESLint Integration - ESLint entegrasyonu
Memory Management - Bellek yönetimi
Error Prevention - Hata önleme

Best Practices

1. Function içinde kullanılan tüm değerleri ekleyin
2. ESLint exhaustive-deps rule'unu kullanın
3. Object'leri useMemo ile optimize edin
4. Function'ları useCallback ile optimize edin
5. Performance test yapın

Ne Zaman useCallback Dependency Array Kullanın

Function'lar state'e bağımlı olduğunda
useEffect dependency array'inde function kullanırken
Custom hook'larda function return ederken
Performance optimizasyonu gerektiğinde
Stale closure'ları önlemek için`,
      codeExamples: [],
      relatedProjects: [
        "dependency-optimization",
        "callback-dependencies",
        "usecallback-dependency-patterns",
      ],
      resources: [
        {
          id: "usecallback-dependencies-docs",
          title: "React.dev - useCallback Dependencies Dokümantasyonu",
          url: "https://react.dev/reference/react/useCallback#specifying-reactive-dependencies",
          type: "documentation",
        },
        {
          id: "usecallback-dependencies-guide",
          title: "useCallback Dependencies Kılavuzu",
          url: "https://react.dev/reference/react/useCallback#specifying-reactive-dependencies",
          type: "tutorial",
        },
        {
          id: "usecallback-dependencies-patterns",
          title: "useCallback Dependencies Desenleri",
          url: "https://react.dev/reference/react/useCallback#specifying-reactive-dependencies",
          type: "article",
        },
      ],
    },
    {
      id: "usememo-usage",
      title: "useMemo Kullanımı",
      description: "useMemo hook ile expensive computation optimizasyonu",
      content: `useMemo Kullanımı

useMemo hook ile expensive computation'ları nasıl optimize edeceğimizi öğrenelim. Modern React geliştirmede useMemo kullanımı ve en iyi uygulamaları öğrenin.

useMemo Nedir?

Value Memoization - Expensive computation'ları cache'ler, dependency array'e göre yeniden hesaplar, referans eşitliğini korur, performance optimizasyonu sağlar
Kullanım Amacı - Expensive calculation'ları optimize etme, object ve array referanslarını stabilize etme, child component re-render'larını önleme, memory ve CPU kullanımını optimize etme

Günlük Hayattan Örnek

Bir e-ticaret uygulaması geliştirdiğinizi düşünün:

- Expensive Calculations: Büyük ürün listesini filtreleme ve sıralama
- Object ve Array Props: Child component'lere geçilen filtreleme objesi
- Context Values: Global state object'leri
- useEffect Dependencies: useEffect'te kullanılan hesaplanmış değerler

useMemo Kullanımı

1. Temel Syntax - useMemo(() => computation, dependencies), computation function'ı dependency array'e göre çalıştırır, dependencies değişmediğinde cached value döndürür
2. Expensive Calculations - Complex mathematical operations, data filtering ve sorting, array transformations, object manipulations
3. Object ve Array Creation - Child component'lere geçilen object'ler, useEffect dependency'leri, context value'ları

Kullanım Senaryoları

1. Expensive Computations - Large dataset filtering, complex mathematical calculations, string processing operations, data transformations
2. Object ve Array Props - Child component'lere geçilen object'ler, React.memo ile birlikte kullanım, referans eşitliği sağlama
3. Context Values - Context Provider value'ları, multiple context consumer'ları, global state objects

Dikkat Edilmesi Gerekenler

Over-optimization - Her computation'ı useMemo ile sarmalamayın, sadece gerçekten expensive olanları optimize edin, performance test yapın
Memory Usage - useMemo memory kullanır, gereksiz kullanım memory leak'e neden olabilir, balance sağlayın
Dependency Array - Doğru dependencies'i belirleyin, missing dependencies warning'lerini dikkate alın, object ve function dependencies'te dikkatli olun

Performance Tips

When to Use - Expensive calculations, object/array props to child components, context values, useEffect dependencies
When NOT to Use - Simple calculations, primitive values, frequently changing dependencies, small datasets

Modern React Geliştirmede

Value Memoization - Value memoization
Performance Optimization - Performance optimizasyonu
Memory Management - Bellek yönetimi
Referans Stability - Referans stabilitesi
Computation Optimization - Computation optimizasyonu

Best Practices

1. Sadece expensive computation'lar için kullanın
2. Object ve array props için kullanın
3. Context value'ları için kullanın
4. useEffect dependencies için kullanın
5. Performance test yapın

Ne Zaman useMemo Kullanın

Expensive calculation'lar yaparken
Object ve array props geçerken
Context value'ları oluştururken
useEffect dependencies'te kullanırken
Performance kritik uygulamalarda`,
      codeExamples: [],
      relatedProjects: [
        "memo-optimization",
        "computation-caching",
        "usememo-patterns",
      ],
      resources: [
        {
          id: "usememo-docs",
          title: "React.dev - useMemo Dokümantasyonu",
          url: "https://react.dev/reference/react/useMemo",
          type: "documentation",
        },
        {
          id: "usememo-guide",
          title: "useMemo Kullanım Kılavuzu",
          url: "https://react.dev/reference/react/useMemo",
          type: "tutorial",
        },
        {
          id: "usememo-patterns",
          title: "useMemo Kullanım Desenleri",
          url: "https://react.dev/reference/react/useMemo",
          type: "article",
        },
      ],
    },
  ],
};
