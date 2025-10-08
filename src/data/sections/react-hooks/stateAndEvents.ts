import { Category } from '../../../types/roadmap';

export const stateAndEvents: Category = {
  id: 'state-and-events',
  name: 'REACT STATE VE EVENTLERLE CALISMAK',
  icon: '🎯',
  description: 'React state yönetimi ve event handling',
  topics: [
    {
      id: 'react-events',
      title: 'React Eventlerle Çalışmak',
      description: 'React componentlerinde event handling',
      content: `React Eventlerle Çalışmak

React'te event handling, HTML event handling'den biraz farklıdır. Modern React geliştirmede event yönetimi ve en iyi uygulamaları öğrenin.

Temel Farklar

CamelCase - React'te event isimleri camelCase kullanır (onClick, onChange)
Function - Event handler olarak fonksiyon geçilir
SyntheticEvent - React kendi event sistemi kullanır

Günlük Hayattan Örnek

Bir e-ticaret uygulaması geliştirdiğinizi düşünün:

- Ürün ekleme: onClick ile sepete ürün ekleme
- Arama: onChange ile arama kutusu değişikliklerini dinleme
- Form gönderimi: onSubmit ile kullanıcı kayıt formu
- Filtreleme: onClick ile ürün filtreleme butonları

Temel Kullanım

onClick Event - Buton tıklamalarını yakalama
onChange Event - Input değişikliklerini yakalama
onSubmit Event - Form gönderimlerini yakalama
onFocus/onBlur - Input odaklanma olayları
onMouseEnter/onMouseLeave - Mouse olayları

Modern React Geliştirmede

Event Handler Optimization - useCallback ile optimize edilmiş event handler'lar
Event Delegation - Event delegation pattern'i
Custom Events - Özel event'ler oluşturma
Event Bubbling Control - Event propagation kontrolü
Accessibility - Erişilebilirlik için event handling

Best Practices

1. Event handler'ları useCallback ile optimize edin
2. SyntheticEvent'i doğru kullanın
3. Event propagation'i kontrol edin
4. Accessibility standartlarına uyun
5. Performance'ı göz önünde bulundurun

Ne Zaman Event Kullanın

Kullanıcı etkileşimleri için
Form işlemleri için
Navigation için
UI state değişiklikleri için
API çağrıları için`,
      codeExamples: [],
      relatedProjects: ['event-handling-practice', 'interactive-components'],
      resources: [
        {
          id: 'react-events-docs',
          title: 'React.dev - Event Handling Dokümantasyonu',
          url: 'https://react.dev/learn/responding-to-events',
          type: 'documentation'
        },
        {
          id: 'event-handling-patterns',
          title: 'React Event Handling Desenleri',
          url: 'https://react.dev/learn/responding-to-events',
          type: 'tutorial'
        },
        {
          id: 'synthetic-events',
          title: 'React SyntheticEvent Kılavuzu',
          url: 'https://react.dev/learn/responding-to-events',
          type: 'article'
        }
      ]
    },
    {
      id: 'react-state-logic',
      title: 'React State Mantığı',
      description: 'State kavramı ve React\'te state yönetimi',
      content: `React State Mantığı

State, bir component'in zaman içinde değişebilen verilerini tutar. Modern React geliştirmede state yönetimi ve en iyi uygulamaları öğrenin.

State Nedir?

Değişken Veri - Component'in render edilmesi arasında değişebilen veri
Component'e Özel - Her component kendi state'ini yönetir
Re-render Tetikler - State değiştiğinde component yeniden render edilir

Günlük Hayattan Örnek

Bir blog uygulaması geliştirdiğinizi düşünün:

- Kullanıcı girişi: Giriş durumu state'te tutulur
- Post beğenme: Beğeni sayısı state'te güncellenir
- Arama: Arama terimi state'te saklanır
- Modal açma: Modal açık/kapalı durumu state'te tutulur

State vs Props

State - Component içinde tanımlanır, değiştirilebilir, component'i re-render eder
Props - Parent'tan gelir, read-only, parent değişirse re-render eder

Modern React Geliştirmede

useState Hook - Modern state yönetimi
State Immutability - Immutable state güncellemeleri
State Lifting - State'i üst component'e taşıma
State Normalization - Karmaşık state yapılarını normalize etme
State Persistence - State'i localStorage'da saklama

Best Practices

1. State'i minimal tutun
2. Immutable updates yapın
3. State'i doğru yerde tanımlayın
4. State lifting kullanın
5. State normalization uygulayın

Ne Zaman State Kullanın

Form input değerleri için
Kullanıcı etkileşimleri için
API'den gelen veriler için
UI durumları için
Component içi hesaplamalar için`,
      codeExamples: [],
      relatedProjects: ['state-management-practice', 'interactive-state-components'],
      resources: [
        {
          id: 'react-state-docs',
          title: 'React.dev - State Dokümantasyonu',
          url: 'https://react.dev/learn/state-a-components-memory',
          type: 'documentation'
        },
        {
          id: 'state-management-patterns',
          title: 'React State Management Desenleri',
          url: 'https://react.dev/learn/state-a-components-memory',
          type: 'tutorial'
        },
        {
          id: 'state-vs-props',
          title: 'React State vs Props Kılavuzu',
          url: 'https://react.dev/learn/state-a-components-memory',
          type: 'article'
        }
      ]
    },
    {
      id: 'usestate-hook',
      title: 'React useState Hook',
      description: 'useState hook ile state yönetimi',
      content: `React useState Hook

useState, React'te state yönetimi için kullanılan temel hook'tur. Modern React geliştirmede useState hook kullanımı ve en iyi uygulamaları öğrenin.

useState Nedir?

Hook - React 16.8'de tanıtılan özel fonksiyon
State Yönetimi - Component'te state oluşturur ve yönetir
Array Döndürür - [state, setState] şeklinde iki değer döndürür

Günlük Hayattan Örnek

Bir sayaç uygulaması geliştirdiğinizi düşünün:

- Sayaç değeri: useState(0) ile başlangıç değeri
- Kullanıcı adı: useState('') ile boş string
- Modal açık: useState(false) ile kapalı durum
- Renk seçimi: useState('blue') ile varsayılan renk

Temel Syntax

useState(initialValue) şeklinde kullanılır ve [state, setState] döndürür.

Modern React Geliştirmede

Functional Components - Modern component yapısı
Hook Rules - Hook kullanım kuralları
State Updates - State güncelleme yöntemleri
Lazy Initial State - Lazy state initialization
State Batching - State güncellemelerini toplu yapma

Best Practices

1. Hook'ları component'in en üstünde kullanın
2. Conditional hook kullanmayın
3. State'i minimal tutun
4. Immutable updates yapın
5. Lazy initialization kullanın

Ne Zaman useState Kullanın

Component içi veri için
Kullanıcı etkileşimleri için
Form input değerleri için
UI durumları için
Hesaplanmış değerler için`,
      codeExamples: [],
      relatedProjects: ['counter-app', 'todo-app', 'interactive-state-components'],
      resources: [
        {
          id: 'usestate-docs',
          title: 'React.dev - useState Hook Dokümantasyonu',
          url: 'https://react.dev/reference/react/useState',
          type: 'documentation'
        },
        {
          id: 'usestate-patterns',
          title: 'useState Hook Desenleri',
          url: 'https://react.dev/reference/react/useState',
          type: 'tutorial'
        },
        {
          id: 'state-updates',
          title: 'React State Güncellemeleri',
          url: 'https://react.dev/reference/react/useState',
          type: 'article'
        }
      ]
    },
    {
      id: 'usestate-application',
      title: 'useState Uygulama',
      description: 'useState hook ile pratik uygulamalar',
      content: `useState Uygulama

useState hook'unu gerçek projelerde nasıl kullanacağımızı öğrenelim. Modern React geliştirmede useState hook pratik uygulamaları ve en iyi uygulamaları öğrenin.

Pratik Uygulamalar

Todo List Uygulaması - Yeni görev ekleme, görevleri tamamlama, görevleri silme
Form Yönetimi - Input değerlerini takip etme, form validasyonu, form gönderme
Modal ve Popup Yönetimi - Modal açma/kapama, popup gösterme/gizleme

Günlük Hayattan Örnek

Bir e-ticaret uygulaması geliştirdiğinizi düşünün:

- Sepet yönetimi: useState ile sepet ürünlerini takip etme
- Kullanıcı profili: useState ile kullanıcı bilgilerini saklama
- Arama filtreleri: useState ile filtre durumlarını yönetme
- Bildirimler: useState ile bildirim durumlarını kontrol etme

Modern React Geliştirmede

State Composition - Birden fazla state'i birleştirme
State Normalization - Karmaşık state yapılarını normalize etme
State Persistence - State'i localStorage'da saklama
State Optimization - Gereksiz re-render'ları önleme
State Testing - State logic'ini test etme

Best Practices

1. State'i mümkün olduğunca basit tutun
2. İlgili state'leri gruplayın
3. Functional update kullanın
4. State'i doğru yerde tanımlayın
5. Performance'ı göz önünde bulundurun

Ne Zaman useState Uygulayın

Gerçek projelerde
Karmaşık state yönetiminde
Form işlemlerinde
UI durumlarında
Kullanıcı etkileşimlerinde`,
      codeExamples: [],
      relatedProjects: ['todo-app', 'form-management', 'interactive-state-components'],
      resources: [
        {
          id: 'usestate-application-docs',
          title: 'React.dev - useState Uygulama Örnekleri',
          url: 'https://react.dev/learn/state-a-components-memory',
          type: 'documentation'
        },
        {
          id: 'usestate-practical-examples',
          title: 'useState Pratik Örnekleri',
          url: 'https://react.dev/learn/state-a-components-memory',
          type: 'tutorial'
        },
        {
          id: 'state-management-patterns',
          title: 'React State Management Desenleri',
          url: 'https://react.dev/learn/state-a-components-memory',
          type: 'article'
        }
      ]
    },
    {
      id: 'form-inputs-adding',
      title: 'Form Inputlarını Ekleme',
      description: 'React formlarında input elemanları ekleme',
      content: `Form Inputlarını Ekleme

React'te form oluştururken input elemanlarını nasıl ekleyeceğimizi öğrenelim. Modern React geliştirmede form input yönetimi ve en iyi uygulamaları öğrenin.

Input Türleri

Text Input - Metin girişi için kullanılır
Email Input - E-posta adresi girişi için kullanılır
Password Input - Şifre girişi için kullanılır
Number Input - Sayısal değer girişi için kullanılır
Textarea - Uzun metin girişi için kullanılır
Select - Seçenek listesi için kullanılır

Günlük Hayattan Örnek

Bir kullanıcı kayıt formu geliştirdiğinizi düşünün:

- Ad soyad: Text input ile kullanıcı adı
- E-posta: Email input ile e-posta adresi
- Şifre: Password input ile güvenli şifre
- Yaş: Number input ile sayısal değer
- Hakkında: Textarea ile uzun metin
- Şehir: Select ile seçenek listesi

Modern React Geliştirmede

Controlled Components - Input değerlerini state ile kontrol etme
Uncontrolled Components - Input değerlerini ref ile kontrol etme
Form Validation - Input validasyonu
Accessibility - Erişilebilirlik standartları
Form Libraries - React Hook Form, Formik gibi kütüphaneler

Best Practices

1. Controlled components kullanın
2. Input validasyonu ekleyin
3. Accessibility standartlarına uyun
4. Form state'ini optimize edin
5. Error handling ekleyin

Ne Zaman Form Input Kullanın

Kullanıcı veri girişi için
Form oluşturma için
Veri toplama için
Kullanıcı etkileşimi için
Veri doğrulama için`,
      codeExamples: [],
      relatedProjects: ['contact-form', 'registration-form', 'form-validation'],
      resources: [
        {
          id: 'form-inputs-docs',
          title: 'React.dev - Form Input Dokümantasyonu',
          url: 'https://react.dev/reference/react-dom/components/input',
          type: 'documentation'
        },
        {
          id: 'form-input-patterns',
          title: 'React Form Input Desenleri',
          url: 'https://react.dev/reference/react-dom/components/input',
          type: 'tutorial'
        },
        {
          id: 'controlled-components',
          title: 'React Controlled Components Kılavuzu',
          url: 'https://react.dev/reference/react-dom/components/input',
          type: 'article'
        }
      ]
    },
    {
      id: 'form-inputs-listening',
      title: 'Form Inputlarını Dinleme',
      description: 'Form input değişikliklerini dinleme ve state ile bağlama',
      content: `Form Inputlarını Dinleme

Form input'larındaki değişiklikleri dinlemek ve state ile bağlamak. Modern React geliştirmede form input dinleme ve en iyi uygulamaları öğrenin.

onChange Event

Input değişikliklerini dinlemek için onChange event'ini kullanırız.

State ile Bağlama

Input değerlerini state ile bağlayarak kontrollü component oluştururuz.

Günlük Hayattan Örnek

Bir arama uygulaması geliştirdiğinizi düşünün:

- Arama kutusu: onChange ile arama terimini dinleme
- Filtreler: onChange ile filtre değişikliklerini takip etme
- Form alanları: onChange ile form değerlerini güncelleme
- Ayarlar: onChange ile kullanıcı tercihlerini kaydetme

Controlled vs Uncontrolled

Controlled - Input değeri state tarafından kontrol edilir
Uncontrolled - Input kendi değerini yönetir

Modern React Geliştirmede

Event Handling - onChange event'lerini optimize etme
State Management - Form state'ini verimli yönetme
Validation - Real-time form validasyonu
Performance - Gereksiz re-render'ları önleme
Accessibility - Erişilebilirlik standartları

Best Practices

1. Controlled component'ler daha güvenilirdir
2. Form validasyonu için controlled component kullanın
3. Real-time güncellemeler için onChange kullanın
4. Event handler'ları optimize edin
5. Performance'ı göz önünde bulundurun

Ne Zaman Input Dinleme Kullanın

Form validasyonu için
Real-time güncellemeler için
Kullanıcı etkileşimleri için
Veri filtreleme için
Arama işlevleri için`,
      codeExamples: [],
      relatedProjects: ['dynamic-form', 'real-time-validation', 'form-state-management'],
      resources: [
        {
          id: 'form-listening-docs',
          title: 'React.dev - Form Input Dinleme Dokümantasyonu',
          url: 'https://react.dev/learn/responding-to-events',
          type: 'documentation'
        },
        {
          id: 'form-event-handling',
          title: 'React Form Event Handling',
          url: 'https://react.dev/learn/responding-to-events',
          type: 'tutorial'
        },
        {
          id: 'controlled-vs-uncontrolled',
          title: 'React Controlled vs Uncontrolled Components',
          url: 'https://react.dev/learn/responding-to-events',
          type: 'article'
        }
      ]
    },
    {
      id: 'multiple-states',
      title: 'Birden Fazla State İle Çalışmak',
      description: 'Bir componentte birden fazla state kullanımı',
      content: `Birden Fazla State İle Çalışmak

Bir component'te birden fazla state kullanırken dikkat edilmesi gerekenler. Modern React geliştirmede çoklu state yönetimi ve en iyi uygulamaları öğrenin.

Çoklu State Kullanımı

Ayrı State'ler - Her state için ayrı useState hook'u kullanabilirsiniz
Object State - İlgili state'leri tek bir object içinde toplayabilirsiniz

Günlük Hayattan Örnek

Bir kullanıcı profili formu geliştirdiğinizi düşünün:

- Ad: useState('') ile ayrı state
- Soyad: useState('') ile ayrı state
- E-posta: useState('') ile ayrı state
- Profil bilgileri: useState({}) ile object state
- Ayarlar: useState({}) ile object state

Hangi Yöntemi Seçmeli?

Ayrı State'ler Kullanın Eğer:
- State'ler birbirinden bağımsızsa
- Farklı zamanlarda güncelleniyorsa
- Farklı component'lerde kullanılacaksa

Object State Kullanın Eğer:
- State'ler birbiriyle ilişkiliyse
- Birlikte güncelleniyorsa
- Tek bir entity'yi temsil ediyorsa

Modern React Geliştirmede

State Composition - Birden fazla state'i birleştirme
State Normalization - Karmaşık state yapılarını normalize etme
State Optimization - Gereksiz re-render'ları önleme
State Testing - Çoklu state logic'ini test etme
State Persistence - Çoklu state'i localStorage'da saklama

Best Practices

1. State'leri mantıklı şekilde gruplayın
2. İlgili state'leri object içinde toplayın
3. Bağımsız state'leri ayrı tutun
4. State güncellemelerini optimize edin
5. Performance'ı göz önünde bulundurun

Ne Zaman Çoklu State Kullanın

Karmaşık form yönetiminde
Kullanıcı profili yönetiminde
Ayarlar ve tercihlerde
Veri filtreleme ve sıralamada
UI durumlarında`,
      codeExamples: [],
      relatedProjects: ['complex-form', 'user-management', 'state-optimization'],
      resources: [
        {
          id: 'multiple-states-docs',
          title: 'React.dev - Çoklu State Dokümantasyonu',
          url: 'https://react.dev/learn/state-a-components-memory',
          type: 'documentation'
        },
        {
          id: 'state-composition',
          title: 'React State Composition Desenleri',
          url: 'https://react.dev/learn/state-a-components-memory',
          type: 'tutorial'
        },
        {
          id: 'state-optimization',
          title: 'React State Optimizasyonu',
          url: 'https://react.dev/learn/state-a-components-memory',
          type: 'article'
        }
      ]
    },
    {
      id: 'single-state-multiple-values',
      title: 'Çoklu Stateleri Tek State İçinde Yazmak',
      description: 'Birden fazla state değerini tek bir state objesinde toplama',
      content: `Çoklu Stateleri Tek State İçinde Yazmak

Birden fazla state değerini tek bir state objesinde toplamak daha organize bir yaklaşımdır. Modern React geliştirmede state organizasyonu ve en iyi uygulamaları öğrenin.

Avantajları

Organizasyon - İlgili state'ler bir arada
Performans - Tek bir setState çağrısı
Okunabilirlik - Kod daha temiz görünür
Bakım - State yönetimi daha kolay

Günlük Hayattan Örnek

Bir kullanıcı kayıt formu geliştirdiğinizi düşünün:

- Form verileri: useState({}) ile tek object
- Kullanıcı profili: useState({}) ile tek object
- Ayarlar: useState({}) ile tek object
- Filtreler: useState({}) ile tek object

Kullanım Senaryoları

Form State'i - Form verilerini tek bir object içinde toplayabilirsiniz
User State'i - Kullanıcı bilgilerini tek bir object içinde toplayabilirsiniz

Modern React Geliştirmede

State Normalization - Karmaşık state yapılarını normalize etme
State Immutability - Immutable state güncellemeleri
State Composition - Birden fazla state'i birleştirme
State Optimization - Gereksiz re-render'ları önleme
State Testing - State logic'ini test etme

Best Practices

1. Spread operator kullanmayı unutmayın
2. Nested object güncellemelerinde dikkatli olun
3. State yapısını basit tutun
4. İlgili state'leri gruplayın
5. Performance'ı göz önünde bulundurun

Ne Zaman Tek State Kullanın

İlgili veriler için
Form yönetimi için
Kullanıcı profili için
Ayarlar ve tercihler için
Karmaşık state yapıları için`,
      codeExamples: [],
      relatedProjects: ['unified-form', 'user-profile', 'state-organization'],
      resources: [
        {
          id: 'single-state-docs',
          title: 'React.dev - Tek State Yönetimi Dokümantasyonu',
          url: 'https://react.dev/learn/state-a-components-memory',
          type: 'documentation'
        },
        {
          id: 'state-organization',
          title: 'React State Organizasyonu',
          url: 'https://react.dev/learn/state-a-components-memory',
          type: 'tutorial'
        },
        {
          id: 'state-structure',
          title: 'React State Yapısı Kılavuzu',
          url: 'https://react.dev/learn/state-a-components-memory',
          type: 'article'
        }
      ]
    },
    {
      id: 'previous-state-usage',
      title: 'State Update İşleminde Previous State Kullanımı',
      description: 'State güncellemelerinde önceki state değerini kullanma',
      content: `State Update İşleminde Previous State Kullanımı

State güncellemelerinde önceki state değerini kullanmak önemli bir kavramdır. Modern React geliştirmede state güncellemeleri ve en iyi uygulamaları öğrenin.

Neden Previous State Kullanırız?

Asenkron Güncellemeler - State güncellemeleri asenkron olabilir
Doğru Değer - Her zaman en güncel state değerini alırız
Race Condition - Eşzamanlı güncellemelerde sorun yaşamayız
Functional Update - Daha güvenilir güncellemeler

Günlük Hayattan Örnek

Bir sayaç uygulaması geliştirdiğinizi düşünün:

- Sayaç artırma: setCount(prev => prev + 1) ile güvenli güncelleme
- Liste ekleme: setItems(prev => [...prev, newItem]) ile array güncelleme
- Form güncelleme: setForm(prev => ({...prev, field: value})) ile object güncelleme
- Toggle işlemi: setIsOpen(prev => !prev) ile boolean güncelleme

Kullanım Yöntemleri

Functional Update - setState(prevState => newState) şeklinde kullanılır
Object State ile - Object state'lerde spread operator ile güncelleme yapılır
Array State ile - Array state'lerde spread operator ile güncelleme yapılır

Modern React Geliştirmede

State Immutability - Immutable state güncellemeleri
State Batching - State güncellemelerini toplu yapma
State Optimization - Gereksiz re-render'ları önleme
State Testing - State logic'ini test etme
State Persistence - State'i localStorage'da saklama

Best Practices

1. Her zaman functional update kullanın
2. Özellikle asenkron işlemlerde kritik
3. Counter ve toggle işlemlerinde mutlaka kullanın
4. State güncellemelerini optimize edin
5. Performance'ı göz önünde bulundurun

Ne Zaman Previous State Kullanın

Asenkron güncellemelerde
Eşzamanlı güncellemelerde
Array ve object güncellemelerinde
Karmaşık state logic'inde
Performance kritik uygulamalarda`,
      codeExamples: [],
      relatedProjects: ['counter-app', 'todo-app', 'state-updates'],
      resources: [
        {
          id: 'previous-state-docs',
          title: 'React.dev - Previous State Dokümantasyonu',
          url: 'https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state',
          type: 'documentation'
        },
        {
          id: 'functional-updates',
          title: 'React Functional Updates Kılavuzu',
          url: 'https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state',
          type: 'tutorial'
        },
        {
          id: 'state-immutability',
          title: 'React State Immutability',
          url: 'https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state',
          type: 'article'
        }
      ]
    },
    {
      id: 'form-onsubmit',
      title: 'Form onSubmit İşlemi',
      description: 'React formlarında onSubmit event handling',
      content: `Form onSubmit İşlemi

React'te form gönderme işlemlerini nasıl yöneteceğimizi öğrenelim. Modern React geliştirmede form gönderme ve en iyi uygulamaları öğrenin.

Form Gönderme

onSubmit Event - Form gönderme işlemi için onSubmit event'ini kullanırız
preventDefault - Sayfa yenilenmesini önlemek için preventDefault() kullanırız

Günlük Hayattan Örnek

Bir kullanıcı kayıt formu geliştirdiğinizi düşünün:

- Form gönderme: onSubmit ile form verilerini işleme
- Validasyon: Form göndermeden önce veri kontrolü
- API çağrısı: Form verilerini sunucuya gönderme
- Hata yönetimi: Başarı/hata durumlarını yönetme

Form Validasyonu

Boş alan kontrolü - Zorunlu alanların dolu olup olmadığını kontrol etme
Email format kontrolü - E-posta adresinin geçerli formatını kontrol etme
Şifre eşleşme kontrolü - Şifre ve şifre tekrarının eşleşip eşleşmediğini kontrol etme
Minimum karakter kontrolü - Minimum karakter sayısını kontrol etme

Modern React Geliştirmede

Form Libraries - React Hook Form, Formik gibi kütüphaneler
Validation Libraries - Yup, Zod gibi validasyon kütüphaneleri
Error Handling - Form hata yönetimi
Loading States - Form gönderme durumları
Success States - Başarılı gönderme durumları

Best Practices

1. preventDefault() kullanmayı unutmayın
2. Form validasyonu ekleyin
3. Loading state'leri yönetin
4. Error handling ekleyin
5. Success feedback verin

Ne Zaman Form onSubmit Kullanın

Form gönderme işlemlerinde
Veri toplama işlemlerinde
Kullanıcı kayıt işlemlerinde
İletişim formlarında
Ayarlar kaydetme işlemlerinde`,
      codeExamples: [],
      relatedProjects: ['contact-form', 'registration-form', 'form-handling'],
      resources: [
        {
          id: 'form-onsubmit-docs',
          title: 'React.dev - Form onSubmit Dokümantasyonu',
          url: 'https://react.dev/learn/responding-to-events',
          type: 'documentation'
        },
        {
          id: 'form-submission',
          title: 'React Form Submission Kılavuzu',
          url: 'https://react.dev/learn/responding-to-events',
          type: 'tutorial'
        },
        {
          id: 'form-validation',
          title: 'React Form Validation',
          url: 'https://react.dev/learn/responding-to-events',
          type: 'article'
        }
      ]
    },
    {
      id: 'two-way-binding',
      title: 'Two-way Binding',
      description: 'React\'te çift yönlü veri bağlama',
      content: `Two-way Binding

Two-way binding, verinin hem component'ten input'a hem de input'tan component'e akmasını sağlar. Modern React geliştirmede two-way binding ve en iyi uygulamaları öğrenin.

Two-way Binding Nedir?

Component → Input - State değeri input'a yansır
Input → Component - Input değişikliği state'i günceller
Senkronizasyon - Her iki yön de senkronize kalır

Günlük Hayattan Örnek

Bir kullanıcı profili formu geliştirdiğinizi düşünün:

- Ad alanı: State değeri input'a yansır, input değişikliği state'i günceller
- E-posta alanı: State değeri input'a yansır, input değişikliği state'i günceller
- Telefon alanı: State değeri input'a yansır, input değişikliği state'i günceller
- Adres alanı: State değeri input'a yansır, input değişikliği state'i günceller

React'te Two-way Binding

Controlled Component - State ile input değerini kontrol eder
Form Input'ları - Form elemanlarında two-way binding kullanılır

Modern React Geliştirmede

Controlled Components - State ile input kontrolü
Uncontrolled Components - Ref ile input kontrolü
Form Libraries - React Hook Form, Formik gibi kütüphaneler
Validation - Real-time form validasyonu
Performance - Gereksiz re-render'ları önleme

Best Practices

1. React'te two-way binding manuel olarak yapılır
2. Controlled component kullanın
3. State ve input değeri her zaman senkronize olmalı
4. Performance'ı göz önünde bulundurun
5. Form validasyonu ekleyin

Ne Zaman Two-way Binding Kullanın

Form input'larında
Kullanıcı veri girişinde
Real-time güncellemelerde
Veri senkronizasyonunda
Kullanıcı etkileşimlerinde`,
      codeExamples: [],
      relatedProjects: ['dynamic-form', 'real-time-preview', 'form-binding'],
      resources: [
        {
          id: 'two-way-binding-docs',
          title: 'React.dev - Two-way Binding Dokümantasyonu',
          url: 'https://react.dev/learn/responding-to-events',
          type: 'documentation'
        },
        {
          id: 'controlled-components',
          title: 'React Controlled Components Kılavuzu',
          url: 'https://react.dev/learn/responding-to-events',
          type: 'tutorial'
        },
        {
          id: 'form-binding',
          title: 'React Form Binding Desenleri',
          url: 'https://react.dev/learn/responding-to-events',
          type: 'article'
        }
      ]
    },
    {
      id: 'component-communication',
      title: 'Componentler Arası İletişim',
      description: 'Parent ve child componentler arasında veri iletişimi',
      content: `Componentler Arası İletişim

React'te component'ler arasında veri iletişimi nasıl sağlanır? Modern React geliştirmede component iletişimi ve en iyi uygulamaları öğrenin.

İletişim Yöntemleri

1. Props (Parent → Child) - Parent component'ten child component'e veri gönderme
2. Callback Functions (Child → Parent) - Child component'ten parent component'e veri gönderme
3. State Lifting (Kardeş Component'ler) - Ortak parent'ta state tutulur, props ile child'lara geçilir, callback ile parent'a geri döner

Günlük Hayattan Örnek

Bir e-ticaret uygulaması geliştirdiğinizi düşünün:

- Ürün listesi: Parent component'ten child component'e ürün verilerini gönderme
- Sepet ekleme: Child component'ten parent component'e sepet güncelleme
- Filtreleme: Kardeş component'ler arasında filtre durumunu paylaşma
- Modal yönetimi: Child component'ten parent component'e modal açma/kapama

Modern React Geliştirmede

Context API - Global state yönetimi
Custom Hooks - State logic'ini paylaşma
Event Emitters - Component'ler arası event iletişimi
State Management - Redux, Zustand gibi kütüphaneler
Component Composition - Component'leri birleştirme

Best Practices

1. Props drilling'den kaçının
2. State lifting kullanın
3. Callback function'ları optimize edin
4. Context API'yi doğru kullanın
5. Performance'ı göz önünde bulundurun

Ne Zaman Component İletişimi Kullanın

Form validasyonunda
Modal açma/kapamada
Veri güncellemede
Event handling'de
State paylaşımında`,
      codeExamples: [],
      relatedProjects: ['user-management', 'todo-app', 'component-communication'],
      resources: [
        {
          id: 'component-communication-docs',
          title: 'React.dev - Component İletişimi Dokümantasyonu',
          url: 'https://react.dev/learn/passing-props-to-a-component',
          type: 'documentation'
        },
        {
          id: 'props-callbacks',
          title: 'React Props ve Callbacks Kılavuzu',
          url: 'https://react.dev/learn/passing-props-to-a-component',
          type: 'tutorial'
        },
        {
          id: 'state-lifting',
          title: 'React State Lifting Desenleri',
          url: 'https://react.dev/learn/passing-props-to-a-component',
          type: 'article'
        }
      ]
    }
  ]
};
