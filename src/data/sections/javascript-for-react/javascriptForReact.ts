import { Category } from "../../../types/roadmap";

export const javascriptForReact: Category = {
  id: "javascript-for-react",
  name: "React İçin JavaScript",
  icon: "📜",
  description: "Modern React geliştirme için temel JavaScript kavramları",
  topics: [
    {
      id: "var-let-const",
      title: "Var, Let ve Const Keywords",
      description:
        "Modern JavaScript değişken tanımlama yöntemleri ve React'te kullanımı",
      content: `Var, Let ve Const Keywords

JavaScript'te değişken tanımlamak için kullanılan üç farklı yöntem. Modern React geliştirmede hangi yöntemi ne zaman kullanacağınızı öğrenin.

Temel Farklar

var - Eski yöntem, function scope kullanır ve hoisting özelliği vardır. Modern JavaScript'te önerilmez.

let - Modern yöntem, block scope kullanır ve değiştirilebilir değişkenler için idealdir.

const - Sabit değerler için kullanılır, block scope kullanır ve değeri değiştirilemez.

Günlük Hayattan Örnek

Bir e-ticaret uygulaması geliştirdiğinizi düşünün:

- const kullanın: Ürün fiyatları, kullanıcı rolleri, API endpoint'leri gibi değişmeyecek değerler için
- let kullanın: Sepet tutarı, kullanıcı giriş durumu, geçici hesaplamalar gibi değişebilir değerler için
- var kullanmayın: Modern JavaScript'te artık kullanılmaz

React'te Kullanım

React component'lerinde genellikle const kullanılır çünkü component'ler genellikle yeniden oluşturulur. State değişkenleri için useState hook'u kullanılır.

Best Practices

1. Her zaman const ile başlayın
2. Değer değişmesi gerekiyorsa let'e geçin
3. var kullanmayın
4. Değişken isimlerini anlamlı yapın
5. Block scope'u doğru kullanın`,
      codeExamples: [],
      relatedProjects: ["variable-practice", "react-state-management"],
      resources: [
        {
          id: "var-let-const-docs",
          title: "MDN - Var, Let, Const Dokümantasyonu",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var",
          type: "documentation",
        },
        {
          id: "javascript-scope-guide",
          title: "JavaScript Scope Kılavuzu",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#variable_scope",
          type: "article",
        },
        {
          id: "react-variables-patterns",
          title: "React'te Değişken Kullanım Desenleri",
          url: "https://react.dev/learn/state-a-components-memory",
          type: "tutorial",
        },
      ],
    },
    {
      id: "arrow-functions",
      title: "Arrow Function",
      description:
        "Modern JavaScript arrow function kullanımı ve React'te avantajları",
      content: `Arrow Function

ES6 ile gelen modern JavaScript fonksiyon tanımlama yöntemi. React geliştirmede neden tercih edildiğini ve nasıl kullanılacağını öğrenin.

Temel Özellikler

Kısa Syntax - Daha az kod yazarak aynı işlevi gerçekleştirir
Lexical This Binding - this değerini otomatik olarak doğru şekilde bağlar
Implicit Return - Tek satırlık fonksiyonlarda return yazmaya gerek yok
React'te Yaygın Kullanım - Modern React geliştirmede standart

Günlük Hayattan Örnek

Bir online alışveriş uygulaması geliştirdiğinizi düşünün:

- Ürün filtreleme: Arrow function ile kısa ve okunabilir filtreleme fonksiyonları
- Event handler'lar: onClick, onChange gibi event'lerde temiz kod
- Array işlemleri: map, filter, reduce gibi array method'larında kullanım
- API çağrıları: Promise chain'lerinde daha temiz kod

React'te Kullanım Avantajları

1. Event Handler'lar: onClick, onChange gibi event'lerde this binding sorunu yok
2. Array Method'ları: map, filter gibi method'larda kısa ve okunabilir kod
3. Callback'ler: useEffect, useState gibi hook'larda temiz syntax
4. Component Method'ları: Class component'lerde this sorununu çözer

Best Practices

1. Tek satırlık fonksiyonlarda implicit return kullanın
2. Event handler'larda arrow function tercih edin
3. Array method'larında arrow function kullanın
4. Constructor'da arrow function kullanmayın
5. Object method'larında dikkatli kullanın

Ne Zaman Kullanılır

Kullanın: Event handler'lar, array method'ları, kısa fonksiyonlar, callback'ler
Kullanmayın: Constructor'lar, object method'ları, prototype method'ları`,
      codeExamples: [],
      relatedProjects: ["arrow-function-practice", "react-event-handlers"],
      resources: [
        {
          id: "arrow-function-docs",
          title: "MDN - Arrow Function Dokümantasyonu",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions",
          type: "documentation",
        },
        {
          id: "arrow-functions-guide",
          title: "Arrow Functions Kılavuzu",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#arrow_functions",
          type: "article",
        },
        {
          id: "react-arrow-functions",
          title: "React'te Arrow Function Kullanımı",
          url: "https://react.dev/learn/responding-to-events",
          type: "tutorial",
        },
      ],
    },
    {
      id: "export-import",
      title: "Export ve Import (Modules)",
      description: "JavaScript modül sistemi ve React'te kod organizasyonu",
      content: `Export ve Import (Modules)

JavaScript modül sistemi ile kod organizasyonu. Modern React projelerinde nasıl düzenli ve sürdürülebilir kod yazacağınızı öğrenin.

Modül Sistemi

Export - Modülden dışarı çıkarma, başka dosyalarda kullanılabilir hale getirme
Import - Modülü içeri alma, başka dosyalardan fonksiyon ve değişkenleri kullanma
Default Export - Varsayılan çıkarma, bir dosyadan tek bir ana değer çıkarma
Named Export - İsimli çıkarma, bir dosyadan birden fazla değer çıkarma

Günlük Hayattan Örnek

Bir e-ticaret uygulaması geliştirdiğinizi düşünün:

- Button component'i: Default export ile ana component'i çıkarın
- Utility fonksiyonları: Named export ile fiyat hesaplama, format fonksiyonlarını çıkarın
- Constants: Named export ile API URL'leri, renk kodları gibi sabitleri çıkarın
- Custom hook'lar: Default export ile tekrar kullanılabilir hook'ları çıkarın

React'te Kullanım

React projelerinde modül sistemi çok önemlidir:

- Component'ler: Her component ayrı dosyada, default export ile çıkarılır
- Utility fonksiyonları: Yardımcı fonksiyonlar named export ile organize edilir
- Constants: Sabit değerler named export ile merkezi olarak yönetilir
- Custom hook'lar: Tekrar kullanılabilir logic'ler default export ile çıkarılır

Best Practices

1. Her component için ayrı dosya oluşturun
2. Default export'u ana component için kullanın
3. Named export'u yardımcı fonksiyonlar için kullanın
4. Dosya isimlerini component ismiyle aynı yapın
5. Index dosyaları ile clean import'lar oluşturun

Ne Zaman Hangi Yöntemi Kullanın

Default Export: Ana component, custom hook, tek bir ana fonksiyon
Named Export: Birden fazla fonksiyon, constants, utility fonksiyonları
Mixed Export: Hem ana component hem de yardımcı fonksiyonlar varsa`,
      codeExamples: [],
      relatedProjects: ["module-practice", "react-component-organization"],
      resources: [
        {
          id: "modules-docs",
          title: "MDN - JavaScript Modüller Dokümantasyonu",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
          type: "documentation",
        },
        {
          id: "es6-modules-guide",
          title: "ES6 Modüller Kılavuzu",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export",
          type: "article",
        },
        {
          id: "react-module-patterns",
          title: "React'te Modül Organizasyonu",
          url: "https://react.dev/learn/importing-and-exporting-components",
          type: "tutorial",
        },
      ],
    },
    {
      id: "classes",
      title: "Classları Anlamak",
      description: "JavaScript class yapısı ve modern React'te kullanımı",
      content: `Classları Anlamak

JavaScript ES6 class yapısı ve modern React geliştirmede neden functional component'lerin tercih edildiğini öğrenin.

Class Özellikleri

Constructor - Yapıcı fonksiyon, sınıf örneği oluşturulurken çalışır
Methods - Sınıf metodları, sınıfın davranışlarını tanımlar
Inheritance - Kalıtım, bir sınıfın başka sınıftan özellik alması
this - Sınıf referansı, sınıfın kendisini işaret eder

Günlük Hayattan Örnek

Bir oyun uygulaması geliştirdiğinizi düşünün:

- Oyuncu sınıfı: Constructor ile oyuncu bilgileri, method'larla hareket ve aksiyonlar
- Düşman sınıfı: Oyuncu sınıfından kalıtım alarak benzer özellikler
- Power-up sınıfı: Farklı güçlendirici öğeler için ayrı sınıflar
- Oyun yöneticisi: Tüm sınıfları koordine eden ana sınıf

Modern React'te Kullanım

Modern React geliştirmede class component'ler artık önerilmez:

- Functional component'ler daha basit ve anlaşılır
- Hook'lar ile state yönetimi daha kolay
- Performance açısından daha iyi
- Kod daha az ve temiz

Ne Zaman Class Kullanılır

Class component'ler sadece şu durumlarda kullanılır:
- Legacy projelerde mevcut kod
- Error boundary'ler için
- Çok özel durumlar için

Best Practices

1. Yeni projelerde functional component kullanın
2. Class component'leri functional'a çevirin
3. Hook'lar ile state yönetimi yapın
4. Class syntax'ını anlayın ama kullanmayın
5. Modern JavaScript özelliklerini tercih edin`,
      codeExamples: [],
      relatedProjects: ["class-practice", "functional-components"],
      resources: [
        {
          id: "classes-docs",
          title: "MDN - JavaScript Class Dokümantasyonu",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes",
          type: "documentation",
        },
        {
          id: "class-vs-functional",
          title: "Class vs Functional Component Karşılaştırması",
          url: "https://react.dev/learn/your-first-component",
          type: "article",
        },
        {
          id: "modern-react-patterns",
          title: "Modern React Geliştirme Desenleri",
          url: "https://react.dev/learn/thinking-in-react",
          type: "tutorial",
        },
      ],
    },
    {
      id: "spread-rest",
      title: "Spread ve Rest Operatörleri",
      description:
        "JavaScript spread ve rest operatörleri ve React'te kullanımı",
      content: `Spread ve Rest Operatörleri

JavaScript'te veri manipülasyonu için güçlü operatörler. Modern React geliştirmede props geçme, state güncelleme ve array/object işlemlerinde nasıl kullanılacağını öğrenin.

Spread Operatörü

Array'lerde - Array'leri birleştirme, kopyalama ve yeni array oluşturma
Object'lerde - Object'leri birleştirme, kopyalama ve yeni object oluşturma
Fonksiyon çağrılarında - Array elemanlarını ayrı parametreler olarak geçme
React'te - Props geçme, state güncelleme, array/object manipülasyonu

Rest Operatörü

Fonksiyon parametrelerinde - Sınırsız sayıda parametre alma
Destructuring'de - Kalan elemanları toplama
Array/object işlemlerinde - Belirli elemanları ayırma

Günlük Hayattan Örnek

Bir sosyal medya uygulaması geliştirdiğinizi düşünün:

- Kullanıcı profili: Spread ile mevcut bilgileri koruyarak yeni bilgiler ekleme
- Post listesi: Rest ile belirli post'ları ayırıp kalanları gösterme
- Yorum sistemi: Spread ile yeni yorumları mevcut listeye ekleme
- Bildirimler: Rest ile okunmamış bildirimleri ayırma

React'te Kullanım

Modern React geliştirmede çok önemlidir:

- Props geçme: Spread ile tüm props'ları component'e geçme
- State güncelleme: Spread ile immutable state güncellemeleri
- Array işlemleri: Spread ile yeni array'ler oluşturma
- Object işlemleri: Spread ile yeni object'ler oluşturma

Best Practices

1. State güncellemelerinde spread kullanın
2. Props geçerken spread kullanın
3. Array/object kopyalarken spread kullanın
4. Rest ile gereksiz parametreleri toplayın
5. Immutable updates için spread kullanın

Ne Zaman Kullanılır

Spread: Array/object birleştirme, kopyalama, props geçme
Rest: Sınırsız parametre alma, destructuring, kalan elemanları toplama`,
      codeExamples: [],
      relatedProjects: ["spread-rest-practice", "react-props-patterns"],
      resources: [
        {
          id: "spread-rest-docs",
          title: "MDN - Spread/Rest Dokümantasyonu",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax",
          type: "documentation",
        },
        {
          id: "react-spread-patterns",
          title: "React'te Spread Kullanım Desenleri",
          url: "https://react.dev/learn/passing-props-to-a-component",
          type: "article",
        },
        {
          id: "immutable-updates",
          title: "Immutable State Güncellemeleri",
          url: "https://react.dev/learn/updating-objects-in-state",
          type: "tutorial",
        },
      ],
    },
    {
      id: "destructuring",
      title: "Destructuring",
      description: "JavaScript destructuring yapısı ve React'te kullanımı",
      content: `Destructuring

JavaScript'te veri yapılarından değer çıkarma yöntemi. Modern React geliştirmede props, state ve array/object işlemlerinde nasıl kullanılacağını öğrenin.

Destructuring Türleri

Array Destructuring - Array elemanlarını ayrı değişkenlere atama
Object Destructuring - Object özelliklerini ayrı değişkenlere atama
Nested Destructuring - İç içe yapılardan değer çıkarma
Default Values - Varsayılan değerler atama
Rest Destructuring - Kalan elemanları toplama

Günlük Hayattan Örnek

Bir e-ticaret uygulaması geliştirdiğinizi düşünün:

- Ürün bilgileri: Object destructuring ile ürün özelliklerini ayrı değişkenlere atama
- Sipariş listesi: Array destructuring ile ilk üç ürünü ayrı değişkenlere atama
- Kullanıcı profili: Nested destructuring ile iç içe kullanıcı bilgilerini çıkarma
- API yanıtları: Destructuring ile API'den gelen verileri organize etme

React'te Kullanım

Modern React geliştirmede çok önemlidir:

- Props destructuring: Component props'larını ayrı değişkenlere atama
- State destructuring: useState hook'undan gelen değerleri ayrı değişkenlere atama
- Array destructuring: useState ile array state'ini yönetme
- Object destructuring: useState ile object state'ini yönetme

Best Practices

1. Props'ları destructure edin
2. State'i destructure edin
3. Default values kullanın
4. Nested destructuring'i dikkatli kullanın
5. Rest destructuring ile kalan elemanları toplayın

Ne Zaman Kullanılır

Array Destructuring: useState, array işlemleri, API yanıtları
Object Destructuring: Props, state, API yanıtları, configuration
Nested Destructuring: Karmaşık veri yapıları, API yanıtları
Default Values: Opsiyonel props, API yanıtları`,
      codeExamples: [],
      relatedProjects: ["destructuring-practice", "react-props-destructuring"],
      resources: [
        {
          id: "destructuring-docs",
          title: "MDN - Destructuring Dokümantasyonu",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment",
          type: "documentation",
        },
        {
          id: "react-destructuring-patterns",
          title: "React'te Destructuring Desenleri",
          url: "https://react.dev/learn/passing-props-to-a-component",
          type: "article",
        },
        {
          id: "javascript-destructuring-guide",
          title: "JavaScript Destructuring Kılavuzu",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment",
          type: "tutorial",
        },
      ],
    },
    {
      id: "reference-primitive",
      title: "Reference ve Primitive Tipler",
      description: "JavaScript veri tipleri ve React'te state yönetimi",
      content: `Reference ve Primitive Tipler

JavaScript'te veri tipleri ve bellek yönetimi. Modern React geliştirmede state güncellemelerinde neden dikkat edilmesi gerektiğini öğrenin.

Primitive Tipler

string - Metin verileri
number - Sayısal veriler
boolean - Doğru/yanlış değerleri
undefined - Tanımsız değerler
null - Boş değerler
symbol - Benzersiz değerler

Reference Tipler

Object - Nesne verileri
Array - Dizi verileri
Function - Fonksiyon verileri

Farklar

Primitive - Değer kopyalama, her değişken kendi değerine sahip
Reference - Referans kopyalama, tüm değişkenler aynı bellek adresini işaret eder

Günlük Hayattan Örnek

Bir blog uygulaması geliştirdiğinizi düşünün:

- Kullanıcı adı: Primitive (string) - her kullanıcının kendi adı
- Post sayısı: Primitive (number) - her kullanıcının kendi sayısı
- Kullanıcı profili: Reference (object) - tüm referanslar aynı profili işaret eder
- Post listesi: Reference (array) - tüm referanslar aynı listeyi işaret eder

React'te Kullanım

Modern React geliştirmede çok önemlidir:

- State güncellemeleri: Reference tiplerde dikkatli olun
- Immutable updates: Spread operatörü ile yeni referanslar oluşturun
- Performance: Gereksiz re-render'ları önleyin
- Bug prevention: Beklenmeyen değişiklikleri önleyin

Best Practices

1. State güncellemelerinde spread kullanın
2. Reference tipleri dikkatli kopyalayın
3. Immutable updates yapın
4. Shallow comparison'ları anlayın
5. useCallback ve useMemo kullanın

Ne Zaman Dikkat Edilmeli

Primitive: Güvenli, değer kopyalama
Reference: Dikkatli, referans kopyalama
State Updates: Her zaman yeni referans oluşturun
Props: Reference tipleri dikkatli geçin`,
      codeExamples: [],
      relatedProjects: ["types-practice", "react-state-management"],
      resources: [
        {
          id: "types-docs",
          title: "MDN - JavaScript Tipler Dokümantasyonu",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures",
          type: "documentation",
        },
        {
          id: "react-state-updates",
          title: "React State Güncellemeleri",
          url: "https://react.dev/learn/updating-objects-in-state",
          type: "article",
        },
        {
          id: "immutable-patterns",
          title: "Immutable State Desenleri",
          url: "https://react.dev/learn/updating-arrays-in-state",
          type: "tutorial",
        },
      ],
    },
    {
      id: "console-usage",
      title: "Console Kullanımı ve Debugging",
      description:
        "JavaScript console metodları ve React geliştirmede debugging",
      content: `Console Kullanımı ve Debugging

JavaScript console metodları ve React geliştirmede debugging tekniklerini öğrenelim. Modern React geliştirmede console kullanımı ve en iyi uygulamaları öğrenin.

Console Nedir?

Browser Developer Tools - Browser'ın geliştirici araçları, debugging için kullanılır, JavaScript kodunu test etmek için, development sırasında bilgi almak için
Kullanım Amacı - Debugging, logging, testing, development, performance monitoring

Günlük Hayattan Örnek

Bir e-ticaret uygulaması geliştirdiğinizi düşünün:

- console.log: Kullanıcı sepete ürün eklediğinde log yazma
- console.error: API isteği başarısız olduğunda hata loglama
- console.warn: Kullanıcı geçersiz veri girdiğinde uyarı
- console.table: Ürün listesini tablo formatında gösterme

Temel Console Metodları

1. console.log() - Genel bilgi loglama, debug mesajları, değişken değerleri, development bilgileri
2. console.error() - Hata mesajları, exception handling, critical errors, user feedback
3. console.warn() - Uyarı mesajları, deprecated features, potential issues, development warnings
4. console.info() - Bilgi mesajları, general information, status updates, system messages

Gelişmiş Console Metodları

1. console.table() - Array ve object'leri tablo formatında gösterme, data visualization, debugging complex data
2. console.group() - Log'ları gruplama, organized debugging, hierarchical information, clean output
3. console.time() - Performance measurement, execution time tracking, optimization, benchmarking
4. console.trace() - Call stack tracking, function call history, debugging flow, error tracing

React'te Console Kullanımı

1. Component Lifecycle - Component mount/unmount tracking, render cycle monitoring, state changes
2. State Debugging - State değişikliklerini takip etme, props changes, hook dependencies
3. API Debugging - Request/response logging, error tracking, performance monitoring
4. User Interaction - Event handling, form submissions, navigation tracking

Console Best Practices

1. Development vs Production - Development'ta detaylı loglar, production'da minimal logging, environment-based logging
2. Log Levels - Error, warn, info, debug seviyeleri, appropriate usage, consistent logging
3. Performance - Console.log performance impact, production optimization, logging overhead
4. Security - Sensitive data logging, user information protection, data privacy

Modern React Geliştirmede

Console Debugging - Console debugging
Development Tools - Development araçları
Error Tracking - Hata takibi
Performance Monitoring - Performance monitoring
User Experience - Kullanıcı deneyimi

Best Practices

1. Development'ta detaylı loglar kullanın
2. Production'da minimal logging yapın
3. Sensitive data loglamayın
4. Performance'ı dikkate alın
5. Consistent logging yapın

Ne Zaman Console Kullanın

Debugging yaparken
Development sırasında
Error tracking yaparken
Performance monitoring yaparken
User interaction tracking yaparken`,
      codeExamples: [],
      relatedProjects: [
        "console-debugging",
        "react-debugging",
        "console-usage-patterns",
      ],
      resources: [
        {
          id: "console-docs",
          title: "MDN - Console API Dokümantasyonu",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Console",
          type: "documentation",
        },
        {
          id: "console-guide",
          title: "Console Kullanım Kılavuzu",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Console",
          type: "tutorial",
        },
        {
          id: "react-debugging",
          title: "React Debugging Teknikleri",
          url: "https://react.dev/learn/react-developer-tools",
          type: "article",
        },
      ],
    },
  ],
};
