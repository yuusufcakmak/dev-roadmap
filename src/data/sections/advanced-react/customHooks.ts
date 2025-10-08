import { Category } from "../../../types/roadmap";

export const customHooks: Category = {
  id: "custom-hooks",
  name: "REACT CUSTOM HOOKS OLUŞTURMA",
  icon: "🎣",
  description: "React custom hook'lar oluşturma ve kullanma teknikleri",
  topics: [
    {
      id: "custom-hook-creation",
      title: "Custom Hook Oluşturma",
      description: "React custom hook'lar nasıl oluşturulur?",
      content: `Custom Hook Oluşturma

React custom hook'ları nasıl oluşturup kullanacağımızı öğrenelim. Modern React geliştirmede custom hook oluşturma ve en iyi uygulamaları öğrenin.

Custom Hook Nedir?

Hook Tanımı - "use" ile başlayan JavaScript fonksiyonu, diğer hook'ları kullanabilir, stateful logic'i paylaşır, reusable component logic
Kullanım Amacı - Logic'i component'lerden ayırma, code reusability, separation of concerns, testing kolaylığı

Günlük Hayattan Örnek

Bir blog uygulaması geliştirdiğinizi düşünün:

- useCounter Hook: Blog post beğeni sayısı için sayaç logic'i
- useLocalStorage Hook: Kullanıcı tercihlerini localStorage'da saklama
- useApi Hook: Blog post'ları API'den çekme logic'i
- useAuth Hook: Kullanıcı authentication logic'i

Custom Hook Yapısı

1. Function Definition - "use" prefix kullanımı, JavaScript function, hook'ları içerebilir, return value
2. State Management - useState hook kullanımı, useReducer hook kullanımı, local state yönetimi, state logic encapsulation
3. Side Effects - useEffect hook kullanımı, API calls, event listeners, cleanup operations

Custom Hook Örnekleri

1. useCounter Hook - Counter logic, increment/decrement, reset functionality, state management
2. useLocalStorage Hook - Local storage integration, state synchronization, data persistence, error handling
3. useApi Hook - API call logic, loading states, error handling, data caching

Best Practices

Naming Convention - "use" ile başlamalı, descriptive names, clear purpose, consistent naming
Single Responsibility - Tek bir işlev, focused logic, clear purpose, easy to test
Error Handling - Try/catch blocks, error states, fallback values, user feedback
Documentation - Clear comments, usage examples, parameter descriptions, return value explanation

Modern React Geliştirmede

Custom Hook Patterns - Custom hook desenleri
Logic Extraction - Logic çıkarma
Code Reusability - Kod yeniden kullanılabilirliği
Testing - Test etme
Performance Optimization - Performance optimizasyonu

Best Practices

1. "use" prefix kullanın
2. Single responsibility principle uygulayın
3. Error handling ekleyin
4. Documentation yazın
5. Testing yapın

Ne Zaman Custom Hook Oluşturun

Logic'i birden fazla component'te kullanırken
Complex state logic gerektiğinde
API integration logic'i için
Form handling logic'i için
Reusable functionality gerektiğinde`,
      codeExamples: [],
      relatedProjects: [
        "custom-hook-creation",
        "logic-extraction",
        "custom-hook-patterns",
      ],
      resources: [
        {
          id: "custom-hook-creation-docs",
          title: "React.dev - Custom Hook Oluşturma Dokümantasyonu",
          url: "https://react.dev/learn/reusing-logic-with-custom-hooks",
          type: "documentation",
        },
        {
          id: "custom-hook-creation-guide",
          title: "Custom Hook Oluşturma Kılavuzu",
          url: "https://react.dev/learn/reusing-logic-with-custom-hooks",
          type: "tutorial",
        },
        {
          id: "custom-hook-creation-patterns",
          title: "Custom Hook Oluşturma Desenleri",
          url: "https://react.dev/learn/reusing-logic-with-custom-hooks",
          type: "article",
        },
      ],
    },
    {
      id: "custom-hook-usage",
      title: "Custom Hook Kullanımı",
      description: "Oluşturulan custom hook'ları component'lerde kullanma",
      content: `Custom Hook Kullanımı

Oluşturulan custom hook'ları component'lerde nasıl kullanacağımızı öğrenelim. Modern React geliştirmede custom hook kullanımı ve en iyi uygulamaları öğrenin.

Custom Hook Kullanımı

Import ve Kullanım - Hook'u import etme, component içinde çağırma, return değerlerini kullanma, state ve function'ları erişim
Kullanım Amacı - Component logic'i basitleştirme, reusable logic, code organization, testing kolaylığı

Günlük Hayattan Örnek

Bir blog uygulaması geliştirdiğinizi düşünün:

- Form Management: useForm hook'u ile form state yönetimi
- API Integration: useApi hook'u ile blog post'ları çekme
- Local Storage: useLocalStorage hook'u ile kullanıcı tercihlerini saklama
- Authentication: useAuth hook'u ile kullanıcı giriş yönetimi

Kullanım Patterns

1. State Hook Kullanımı - useState benzeri kullanım, state değerlerine erişim, state update function'ları, local state management
2. Effect Hook Kullanımı - useEffect benzeri kullanım, side effect management, cleanup operations, dependency management
3. Combined Hook Kullanımı - Multiple hook'ları birleştirme, complex logic, state ve effect combination, advanced patterns

Kullanım Senaryoları

1. Form Management - Form state yönetimi, validation logic, submission handling, error management
2. API Integration - Data fetching, loading states, error handling, caching logic
3. Local Storage - Data persistence, state synchronization, browser storage, data recovery

Best Practices

Hook Rules - Top level'de kullanım, conditional kullanım yok, loop içinde kullanım yok, React function'larda kullanım
Performance - Memoization kullanımı, dependency optimization, unnecessary re-renders, memory management
Error Handling - Error boundaries, try/catch blocks, fallback values, user feedback
Testing - Unit testing, integration testing, mock implementations, edge case testing

Advanced Usage

1. Hook Composition - Multiple hook'ları birleştirme, complex logic, state management, effect coordination
2. Hook Parameters - Configuration options, initial values, callback functions, dependency arrays
3. Hook Return Values - Multiple return values, object destructuring, array destructuring, conditional returns

Modern React Geliştirmede

Custom Hook Usage - Custom hook kullanımı
Component Integration - Component entegrasyonu
Performance Optimization - Performance optimizasyonu
Error Handling - Hata yönetimi
Testing - Test etme

Best Practices

1. Hook rules'larına uyun
2. Performance'ı optimize edin
3. Error handling ekleyin
4. Testing yapın
5. Clean code yazın

Ne Zaman Custom Hook Kullanın

Logic'i birden fazla component'te kullanırken
Complex state logic gerektiğinde
API integration logic'i için
Form handling logic'i için
Reusable functionality gerektiğinde`,
      codeExamples: [],
      relatedProjects: [
        "hook-usage",
        "component-integration",
        "custom-hook-usage-patterns",
      ],
      resources: [
        {
          id: "custom-hook-usage-docs",
          title: "React.dev - Custom Hook Kullanımı Dokümantasyonu",
          url: "https://react.dev/learn/reusing-logic-with-custom-hooks",
          type: "documentation",
        },
        {
          id: "custom-hook-usage-guide",
          title: "Custom Hook Kullanımı Kılavuzu",
          url: "https://react.dev/learn/reusing-logic-with-custom-hooks",
          type: "tutorial",
        },
        {
          id: "custom-hook-usage-patterns",
          title: "Custom Hook Kullanımı Desenleri",
          url: "https://react.dev/learn/reusing-logic-with-custom-hooks",
          type: "article",
        },
      ],
    },
    {
      id: "counter-settings",
      title: "Eksi Sayaç Ayarları",
      description: "Custom hook ile sayaç uygulaması geliştirme",
      content: `Eksi Sayaç Ayarları

Custom hook kullanarak sayaç uygulaması nasıl geliştirilir? Modern React geliştirmede countdown timer custom hook ve en iyi uygulamaları öğrenin.

Sayaç Uygulaması

Countdown Timer - Geri sayım mantığı, time interval management, state updates, timer control
Kullanım Amacı - Event countdown, session timer, game timer, notification timer

Günlük Hayattan Örnek

Bir blog uygulaması geliştirdiğinizi düşünün:

- Event Countdown: Blog yazısı yayınlanma zamanına geri sayım
- Session Timer: Kullanıcı oturum süresi takibi
- Game Timer: Blog yazısı okuma süresi ölçümü
- Notification Timer: Bildirim gösterme süresi

Custom Hook Implementation

1. useCountdown Hook - Initial time value, timer state management, interval handling, cleanup operations
2. Timer Controls - Start/stop functionality, reset operation, pause/resume, time formatting
3. State Management - Current time state, timer status, callback functions, event handling

Hook Features

1. Time Management - Second-based counting, minute/hour conversion, time formatting, display options
2. Control Functions - Start timer, stop timer, reset timer, pause timer
3. Status Tracking - Timer state, remaining time, completion status, error states

Implementation Details

useEffect Usage - Interval management, cleanup on unmount, dependency management, performance optimization
State Updates - Time decrement, status changes, callback execution, error handling
Memory Management - Interval cleanup, event listener removal, memory leak prevention, resource optimization

Advanced Features

1. Custom Intervals - Configurable intervals, different time units, precision control, performance tuning
2. Callback Support - Completion callbacks, progress callbacks, error callbacks, status callbacks
3. Persistence - Local storage, session storage, state recovery, data persistence

Modern React Geliştirmede

Countdown Timer Patterns - Countdown timer desenleri
Timer Management - Timer yönetimi
State Management - State yönetimi
Performance Optimization - Performance optimizasyonu
Memory Management - Bellek yönetimi

Best Practices

1. Interval cleanup yapın
2. Memory leak'leri önleyin
3. Performance'ı optimize edin
4. Error handling ekleyin
5. Cleanup operations yapın

Ne Zaman Countdown Timer Custom Hook Kullanın

Event countdown gerektiğinde
Session timer gerektiğinde
Game timer gerektiğinde
Notification timer gerektiğinde
Time-based functionality gerektiğinde`,
      codeExamples: [],
      relatedProjects: [
        "countdown-timer",
        "timer-app",
        "countdown-timer-patterns",
      ],
      resources: [
        {
          id: "counter-settings-docs",
          title: "React.dev - Sayaç Ayarları Dokümantasyonu",
          url: "https://react.dev/learn/reusing-logic-with-custom-hooks",
          type: "documentation",
        },
        {
          id: "counter-settings-guide",
          title: "Sayaç Ayarları Kılavuzu",
          url: "https://react.dev/learn/reusing-logic-with-custom-hooks",
          type: "tutorial",
        },
        {
          id: "counter-settings-patterns",
          title: "Sayaç Ayarları Desenleri",
          url: "https://react.dev/learn/reusing-logic-with-custom-hooks",
          type: "article",
        },
      ],
    },
    {
      id: "new-custom-hook-example",
      title: "Yeni Custom Hook Örneği",
      description: "Farklı bir custom hook örneği geliştirme",
      content: `Yeni Custom Hook Örneği

Farklı bir custom hook örneği ile advanced pattern'leri öğrenelim. Modern React geliştirmede advanced custom hook örnekleri ve en iyi uygulamaları öğrenin.

Advanced Custom Hook

useToggle Hook - Boolean state management, toggle functionality, multiple toggle states, state persistence
Kullanım Amacı - Modal açma/kapama, menu toggle, feature flags, UI state management

Günlük Hayattan Örnek

Bir blog uygulaması geliştirdiğinizi düşünün:

- Modal Management: Blog yazısı detay modal'ını açma/kapama
- Menu Toggle: Navigation menu'yu açma/kapama
- Feature Flags: Dark mode toggle, notification settings
- UI State Management: Sidebar açma/kapama, search bar toggle

Hook Implementation

1. Basic Toggle - Boolean state, toggle function, initial value, state management
2. Advanced Features - Multiple states, callback support, state persistence, custom logic
3. Return Values - Current state, toggle function, set state function, reset function

Kullanım Senaryoları

1. Modal Management - Modal açma/kapama, multiple modals, state synchronization, event handling
2. Menu Toggle - Navigation menu, dropdown menus, sidebar toggle, mobile menu
3. Feature Flags - Feature enable/disable, A/B testing, user preferences, configuration

Advanced Patterns

1. Multiple States - Array of states, object state management, complex state logic, state coordination
2. Callback Integration - State change callbacks, side effect handling, event propagation, error handling
3. Persistence - Local storage, session storage, cookie storage, server synchronization

Best Practices

Hook Design - Single responsibility, clear interface, flexible parameters, consistent naming
Performance - Memoization, dependency optimization, unnecessary re-renders, memory management
Error Handling - Input validation, error states, fallback values, user feedback
Testing - Unit tests, integration tests, edge cases, mock implementations

Modern React Geliştirmede

Advanced Custom Hook Patterns - Advanced custom hook desenleri
State Management - State yönetimi
Performance Optimization - Performance optimizasyonu
Error Handling - Hata yönetimi
Testing - Test etme

Best Practices

1. Single responsibility principle uygulayın
2. Clear interface tasarlayın
3. Performance'ı optimize edin
4. Error handling ekleyin
5. Testing yapın

Ne Zaman Advanced Custom Hook Kullanın

Complex state logic gerektiğinde
Multiple states yönetirken
State persistence gerektiğinde
Callback integration gerektiğinde
Advanced UI patterns gerektiğinde`,
      codeExamples: [],
      relatedProjects: [
        "toggle-hook",
        "advanced-patterns",
        "advanced-custom-hook-patterns",
      ],
      resources: [
        {
          id: "new-custom-hook-docs",
          title: "React.dev - Yeni Custom Hook Örneği Dokümantasyonu",
          url: "https://react.dev/learn/reusing-logic-with-custom-hooks",
          type: "documentation",
        },
        {
          id: "new-custom-hook-guide",
          title: "Yeni Custom Hook Örneği Kılavuzu",
          url: "https://react.dev/learn/reusing-logic-with-custom-hooks",
          type: "tutorial",
        },
        {
          id: "new-custom-hook-patterns",
          title: "Yeni Custom Hook Örneği Desenleri",
          url: "https://react.dev/learn/reusing-logic-with-custom-hooks",
          type: "article",
        },
      ],
    },
    {
      id: "usehttp-hook-creation",
      title: "useHttp Hook Oluşturma",
      description: "HTTP istekleri için custom hook oluşturma",
      content: `useHttp Hook Oluşturma

HTTP istekleri için reusable custom hook nasıl oluşturulur? Modern React geliştirmede useHttp custom hook ve en iyi uygulamaları öğrenin.

useHttp Hook

HTTP Request Management - GET, POST, PUT, DELETE, loading states, error handling, response processing
Kullanım Amacı - API integration, data fetching, request management, state synchronization

Günlük Hayattan Örnek

Bir blog uygulaması geliştirdiğinizi düşünün:

- GET Requests: Blog post'ları listeleme, kullanıcı profil bilgileri çekme
- POST Requests: Yeni blog post oluşturma, yorum ekleme
- PUT Requests: Blog post güncelleme, kullanıcı profil güncelleme
- DELETE Requests: Blog post silme, yorum silme

Hook Implementation

1. Request Function - HTTP method support, URL configuration, headers management, body data handling
2. State Management - Loading state, error state, data state, request status
3. Response Handling - JSON parsing, error processing, success handling, data transformation

Hook Features

1. HTTP Methods - GET requests, POST requests, PUT requests, DELETE requests
2. State Management - Loading indicators, error messages, success states, data caching
3. Configuration - Base URL, default headers, timeout settings, retry logic

Implementation Details

Fetch API Integration - Modern fetch API, promise handling, error catching, response processing
Error Handling - Network errors, HTTP errors, JSON parsing errors, timeout handling
Performance - Request cancellation, memory management, caching strategies, resource cleanup

Advanced Features

1. Request Interceptors - Request modification, authentication, logging, error handling
2. Response Interceptors - Response transformation, error handling, data processing, caching logic
3. Retry Logic - Automatic retry, exponential backoff, error conditions, success criteria
4. Caching - Response caching, cache invalidation, memory management, performance optimization

Modern React Geliştirmede

useHttp Hook Patterns - useHttp hook desenleri
HTTP Request Management - HTTP istek yönetimi
Error Handling - Hata yönetimi
Performance Optimization - Performance optimizasyonu
Caching Strategies - Caching stratejileri

Best Practices

1. Error handling ekleyin
2. Loading states yönetin
3. Request cancellation yapın
4. Caching stratejileri uygulayın
5. Performance'ı optimize edin

Ne Zaman useHttp Hook Kullanın

API integration yaparken
Data fetching gerektiğinde
Request management gerektiğinde
State synchronization gerektiğinde
HTTP istekleri yaparken`,
      codeExamples: [],
      relatedProjects: [
        "http-hook",
        "api-integration",
        "usehttp-hook-patterns",
      ],
      resources: [
        {
          id: "usehttp-hook-docs",
          title: "React.dev - useHttp Hook Dokümantasyonu",
          url: "https://react.dev/learn/reusing-logic-with-custom-hooks",
          type: "documentation",
        },
        {
          id: "usehttp-hook-guide",
          title: "useHttp Hook Kılavuzu",
          url: "https://react.dev/learn/reusing-logic-with-custom-hooks",
          type: "tutorial",
        },
        {
          id: "usehttp-hook-patterns",
          title: "useHttp Hook Desenleri",
          url: "https://react.dev/learn/reusing-logic-with-custom-hooks",
          type: "article",
        },
      ],
    },
    {
      id: "usehttp-hook-usage",
      title: "useHttp Hook Kullanımı",
      description: "useHttp hook'unu component'lerde kullanma",
      content: `useHttp Hook Kullanımı

useHttp hook'unu component'lerde nasıl kullanacağımızı öğrenelim. Modern React geliştirmede useHttp hook kullanımı ve en iyi uygulamaları öğrenin.

Hook Kullanımı

Component Integration - Hook import, function call, state destructuring, function usage
Kullanım Amacı - Data fetching, form submission, API integration, state management

Günlük Hayattan Örnek

Bir blog uygulaması geliştirdiğinizi düşünün:

- Data Fetching: Blog post'ları listeleme, kullanıcı profil bilgileri çekme
- Form Submission: Yeni blog post oluşturma, yorum ekleme
- CRUD Operations: Blog post güncelleme, yorum silme
- API Integration: Authentication, user preferences

Kullanım Patterns

1. Data Fetching - Initial data loading, dependency-based fetching, manual refresh, error handling
2. Form Submission - POST requests, form validation, success handling, error feedback
3. CRUD Operations - Create operations, read operations, update operations, delete operations

Kullanım Senaryoları

1. User Data - Profile loading, user updates, authentication, preferences
2. Product Management - Product listing, product creation, product updates, product deletion
3. Content Management - Blog posts, comments, media uploads, content updates

Best Practices

Error Handling - Try/catch blocks, error states, user feedback, retry mechanisms
Loading States - Loading indicators, skeleton screens, progress tracking, user experience
Performance - Request optimization, caching strategies, memory management, resource cleanup
Security - Input validation, authentication, authorization, data sanitization

Advanced Usage

1. Multiple Requests - Parallel requests, sequential requests, request coordination, error handling
2. Request Queuing - Request queuing, priority handling, rate limiting, resource management
3. Real-time Updates - WebSocket integration, polling mechanisms, event handling, state synchronization
4. Offline Support - Offline detection, request queuing, sync mechanisms, data persistence

Modern React Geliştirmede

useHttp Hook Usage - useHttp hook kullanımı
Component Integration - Component entegrasyonu
Error Handling - Hata yönetimi
Performance Optimization - Performance optimizasyonu
Security - Güvenlik

Best Practices

1. Error handling ekleyin
2. Loading states yönetin
3. Performance'ı optimize edin
4. Security önlemleri alın
5. Clean code yazın

Ne Zaman useHttp Hook Kullanın

Data fetching gerektiğinde
Form submission yaparken
API integration yaparken
CRUD operations gerektiğinde
HTTP istekleri yaparken`,
      codeExamples: [],
      relatedProjects: [
        "http-integration",
        "api-usage",
        "usehttp-usage-patterns",
      ],
      resources: [
        {
          id: "usehttp-usage-docs",
          title: "React.dev - useHttp Hook Kullanımı Dokümantasyonu",
          url: "https://react.dev/learn/reusing-logic-with-custom-hooks",
          type: "documentation",
        },
        {
          id: "usehttp-usage-guide",
          title: "useHttp Hook Kullanımı Kılavuzu",
          url: "https://react.dev/learn/reusing-logic-with-custom-hooks",
          type: "tutorial",
        },
        {
          id: "usehttp-usage-patterns",
          title: "useHttp Hook Kullanımı Desenleri",
          url: "https://react.dev/learn/reusing-logic-with-custom-hooks",
          type: "article",
        },
      ],
    },
    {
      id: "usehttp-post-method",
      title: "useHttp Hook Post Method",
      description: "useHttp hook ile POST istekleri gönderme",
      content: `useHttp Hook Post Method

useHttp hook ile POST istekleri nasıl gönderilir? Modern React geliştirmede useHttp hook POST method ve en iyi uygulamaları öğrenin.

POST Method

Data Submission - Form data sending, JSON data, file uploads, API integration
Kullanım Amacı - Data creation, form submission, file upload, API communication

Günlük Hayattan Örnek

Bir blog uygulaması geliştirdiğinizi düşünün:

- Form Submission: Yeni blog post oluşturma formu, kullanıcı kayıt formu
- Data Creation: Yeni kullanıcı oluşturma, blog post oluşturma
- File Upload: Blog post resmi yükleme, profil fotoğrafı yükleme
- API Communication: Yorum ekleme, beğeni gönderme

POST Request Implementation

1. Hook Configuration - Method specification, URL configuration, headers setup, body data
2. Data Handling - JSON serialization, form data, file uploads, validation
3. Response Processing - Success handling, error handling, data processing, state updates

Kullanım Senaryoları

1. Form Submission - Contact forms, registration forms, login forms, feedback forms
2. Data Creation - User creation, product creation, content creation, resource creation
3. File Upload - Image uploads, document uploads, media files, bulk uploads

Implementation Details

Request Configuration - Content-Type headers, authentication, CORS handling, request timeout
Data Validation - Input validation, server validation, error handling, user feedback
Error Handling - Network errors, validation errors, server errors, timeout errors

Advanced Features

1. Multipart Data - File uploads, form data, mixed content, progress tracking
2. Batch Operations - Multiple submissions, bulk operations, transaction handling, error rollback
3. Optimistic Updates - Immediate UI updates, error rollback, conflict resolution, user experience
4. Request Queuing - Request queuing, priority handling, retry logic, resource management

Modern React Geliştirmede

useHttp POST Method - useHttp POST method
Data Submission - Veri gönderme
File Upload - Dosya yükleme
Error Handling - Hata yönetimi
Performance Optimization - Performance optimizasyonu

Best Practices

1. Content-Type headers'ı doğru ayarlayın
2. Data validation yapın
3. Error handling ekleyin
4. Progress tracking ekleyin
5. Performance'ı optimize edin

Ne Zaman useHttp POST Method Kullanın

Form submission yaparken
Data creation gerektiğinde
File upload yaparken
API communication gerektiğinde
Server'a veri gönderirken`,
      codeExamples: [],
      relatedProjects: [
        "post-requests",
        "form-submission",
        "usehttp-post-patterns",
      ],
      resources: [
        {
          id: "usehttp-post-docs",
          title: "React.dev - useHttp POST Method Dokümantasyonu",
          url: "https://react.dev/learn/reusing-logic-with-custom-hooks",
          type: "documentation",
        },
        {
          id: "usehttp-post-guide",
          title: "useHttp POST Method Kılavuzu",
          url: "https://react.dev/learn/reusing-logic-with-custom-hooks",
          type: "tutorial",
        },
        {
          id: "usehttp-post-patterns",
          title: "useHttp POST Method Desenleri",
          url: "https://react.dev/learn/reusing-logic-with-custom-hooks",
          type: "article",
        },
      ],
    },
  ],
};
