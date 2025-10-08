import { Category } from "../../../types/roadmap";

export const reduxStateManagement: Category = {
  id: "redux-state-management",
  name: "REDUX İLE STATE MANAGEMENT",
  icon: "🔄",
  description: "Redux ile global state yönetimi ve React entegrasyonu",
  topics: [
    {
      id: "redux-introduction",
      title: "Redux Nedir?",
      description: "Redux state management kütüphanesinin temelleri",
      content: `Redux Nedir?

Redux state management kütüphanesinin temellerini ve React ile entegrasyonunu öğrenelim. Modern React geliştirmede Redux kullanımı ve en iyi uygulamaları öğrenin.

Redux Nedir?

State Management Library - Predictable state container, JavaScript uygulamaları için, centralized state management, time-travel debugging
Kullanım Amacı - Global state yönetimi, complex application state, predictable state updates, debugging kolaylığı

Günlük Hayattan Örnek

Bir e-ticaret uygulaması geliştirdiğinizi düşünün:

- Store: Tüm uygulama state'i (kullanıcı bilgileri, sepet, ürünler, filtreler)
- Actions: Kullanıcı sepet ürün ekleme, ürün silme, filtreleme
- Reducers: State güncellemelerini yapan pure function'lar
- Dispatch: Action'ları store'a gönderen fonksiyon

Redux Temel Kavramlar

1. Store - Uygulamanın state'ini tutar, single source of truth, immutable state, centralized data
2. Actions - State değişikliklerini tanımlar, plain JavaScript objects, type ve payload içerir, state'i değiştirmez
3. Reducers - State güncellemelerini yapar, pure functions, previous state + action = new state, immutable updates
4. Dispatch - Action'ları store'a gönderir, state güncellemesini tetikler, synchronous operation, predictable flow

Redux Data Flow

1. Component Dispatch - Component action dispatch eder, user interaction sonucu, event handler'lar, form submissions
2. Store Processing - Store action'ı alır, reducer'ı çağırır, state güncellemesi, new state oluşturur
3. Component Update - Store değişikliği, component re-render, UI güncellemesi, user feedback

Redux vs Context API

Redux Avantajları - Time-travel debugging, DevTools support, middleware ecosystem, predictable updates
Context API Avantajları - Built-in React feature, simpler setup, less boilerplate, native integration
Ne Zaman Redux? - Complex state logic, large applications, multiple state slices, advanced debugging needs
Ne Zaman Context API? - Simple global state, small applications, basic state sharing, quick implementation

Modern React Geliştirmede

Redux State Management - Redux state yönetimi
Global State - Global state
Predictable Updates - Öngörülebilir güncellemeler
Debugging - Debugging
Performance Optimization - Performance optimizasyonu

Best Practices

1. Single source of truth kullanın
2. Immutable state updates yapın
3. Pure functions yazın
4. Predictable updates sağlayın
5. DevTools kullanın

Ne Zaman Redux Kullanın

Complex state logic gerektiğinde
Large applications geliştirirken
Multiple state slices gerektiğinde
Advanced debugging gerektiğinde
Team collaboration gerektiğinde`,
      codeExamples: [],
      relatedProjects: [
        "redux-introduction",
        "state-management-comparison",
        "redux-patterns",
      ],
      resources: [
        {
          id: "redux-introduction-docs",
          title: "Redux.js - Redux Nedir Dokümantasyonu",
          url: "https://redux.js.org/introduction/getting-started",
          type: "documentation",
        },
        {
          id: "redux-introduction-guide",
          title: "Redux Nedir Kılavuzu",
          url: "https://redux.js.org/introduction/getting-started",
          type: "tutorial",
        },
        {
          id: "redux-introduction-patterns",
          title: "Redux Nedir Desenleri",
          url: "https://redux.js.org/introduction/getting-started",
          type: "article",
        },
      ],
    },
    {
      id: "react-vs-context-api",
      title: "React vs Context API",
      description: "Redux ve Context API karşılaştırması",
      content: `React vs Context API

Redux ve Context API arasındaki farkları ve ne zaman hangisini kullanacağımızı öğrenelim. Modern React geliştirmede Redux vs Context API karşılaştırması ve en iyi uygulamaları öğrenin.

Karşılaştırma Analizi

Redux Özellikleri - External library, complex setup, powerful features, learning curve
Context API Özellikleri - Built-in React, simple setup, basic features, easy to learn

Günlük Hayattan Örnek

Bir e-ticaret uygulaması geliştirdiğinizi düşünün:

- Redux Kullanımı: Büyük e-ticaret uygulaması, karmaşık sepet yönetimi, çoklu geliştirici takımı
- Context API Kullanımı: Küçük blog uygulaması, basit theme yönetimi, hızlı prototip
- Performance: Redux selective subscriptions, Context API tüm consumer'lar re-render
- Developer Experience: Redux DevTools, Context API basic debugging

Detaylı Karşılaştırma

1. Setup Complexity - Redux: Complex boilerplate, Context API: Simple setup, Redux: Multiple files, Context API: Single file
2. Performance - Redux: Optimized updates, Context API: Re-render issues, Redux: Selective subscriptions, Context API: All consumers re-render
3. Developer Experience - Redux: DevTools support, Context API: Basic debugging, Redux: Time-travel debugging, Context API: Limited debugging
4. Ecosystem - Redux: Rich ecosystem, Context API: Limited ecosystem, Redux: Middleware support, Context API: No middleware

Kullanım Senaryoları

Redux Kullanımı - Large applications, complex state logic, multiple developers, advanced debugging needs
Context API Kullanımı - Small applications, simple state sharing, quick prototypes, basic global state

Performance Considerations

Redux Performance - Selective subscriptions, optimized re-renders, memoization support, middleware optimization
Context API Performance - All consumers re-render, no selective subscriptions, manual optimization needed, potential performance issues

Migration Strategies

Context API to Redux - Gradual migration, state extraction, action creation, reducer implementation
Redux to Context API - State simplification, context creation, provider setup, consumer implementation

Decision Matrix

Choose Redux When: Complex state logic, large team, advanced debugging, performance critical
Choose Context API When: Simple state, small team, quick development, basic requirements

Modern React Geliştirmede

Redux vs Context API - Redux vs Context API karşılaştırması
State Management - State yönetimi
Performance Optimization - Performance optimizasyonu
Developer Experience - Developer experience
Decision Making - Karar verme

Best Practices

1. Proje büyüklüğünü değerlendirin
2. State complexity'yi analiz edin
3. Team size'ı göz önünde bulundurun
4. Performance requirements'ı değerlendirin
5. Development timeline'ı düşünün

Ne Zaman Redux vs Context API Karar Verin

Proje başlangıcında
State management gereksinimlerini değerlendirirken
Performance kritik uygulamalarda
Team collaboration gerektiğinde
Long-term maintenance düşünürken`,
      codeExamples: [],
      relatedProjects: [
        "redux-context-comparison",
        "state-management-decision",
        "redux-context-patterns",
      ],
      resources: [
        {
          id: "redux-context-comparison-docs",
          title: "Redux.js - Redux vs Context API Dokümantasyonu",
          url: "https://redux.js.org/understanding/thinking-in-redux/motivation",
          type: "documentation",
        },
        {
          id: "redux-context-comparison-guide",
          title: "Redux vs Context API Kılavuzu",
          url: "https://redux.js.org/understanding/thinking-in-redux/motivation",
          type: "tutorial",
        },
        {
          id: "redux-context-comparison-patterns",
          title: "Redux vs Context API Desenleri",
          url: "https://redux.js.org/understanding/thinking-in-redux/motivation",
          type: "article",
        },
      ],
    },
    {
      id: "redux-how-it-works",
      title: "Redux Nasıl Çalışır?",
      description: "Redux'un çalışma prensipleri ve data flow",
      content: `Redux Nasıl Çalışır?

Redux'un çalışma prensiplerini ve data flow'unu detaylı olarak inceleyelim. Modern React geliştirmede Redux çalışma prensipleri ve en iyi uygulamaları öğrenin.

Redux Architecture

Unidirectional Data Flow - Single direction data flow, predictable state updates, clear data flow, easy to debug
Core Principles - Single source of truth, state is read-only, changes via pure functions, immutable updates

Günlük Hayattan Örnek

Bir e-ticaret uygulaması geliştirdiğinizi düşünün:

- Action Creation: Kullanıcı sepete ürün ekleme butonuna tıkladığında
- Action Dispatch: dispatch() fonksiyonu ile action store'a gönderilir
- Reducer Processing: Reducer pure function olarak yeni state oluşturur
- Store Update: Yeni state store'da saklanır ve component'ler güncellenir

Redux Data Flow

1. Action Creation - User interaction, action creator functions, action objects, type ve payload
2. Action Dispatch - dispatch() function, store'a action gönderme, middleware processing, reducer invocation
3. Reducer Processing - Pure function, previous state + action, new state creation, immutable updates
4. Store Update - New state storage, subscriber notification, component re-render, UI update

Redux Components

1. Store - State container, dispatch method, getState method, subscribe method
2. Actions - Plain objects, type property, payload data, action creators
3. Reducers - Pure functions, state transformation, immutable updates, no side effects
4. Middleware - Action processing, async operations, logging, DevTools integration

Redux Principles

1. Single Source of Truth - One store, centralized state, consistent data, easy debugging
2. State is Read-Only - No direct mutations, actions only way to change, immutable updates, predictable changes
3. Pure Functions - Reducers are pure, no side effects, same input = same output, testable functions

Advanced Concepts

1. Middleware - Action processing pipeline, async operations, logging middleware, DevTools middleware
2. Selectors - State derivation, computed values, memoization, performance optimization
3. Normalization - Flat state structure, entity relationships, efficient updates, data consistency
4. Time Travel - State history, action replay, debugging, development tools

Modern React Geliştirmede

Redux Architecture - Redux mimarisi
Data Flow - Veri akışı
State Management - State yönetimi
Performance Optimization - Performance optimizasyonu
Debugging - Debugging

Best Practices

1. Unidirectional data flow kullanın
2. Pure functions yazın
3. Immutable updates yapın
4. Single source of truth sağlayın
5. Middleware kullanın

Ne Zaman Redux Çalışma Prensiplerini Anlayın

Redux implementasyonu yaparken
State management tasarlarken
Performance optimizasyonu yaparken
Debugging yaparken
Team collaboration yaparken`,
      codeExamples: [],
      relatedProjects: [
        "redux-architecture",
        "data-flow-analysis",
        "redux-principles-patterns",
      ],
      resources: [
        {
          id: "redux-how-it-works-docs",
          title: "Redux.js - Redux Nasıl Çalışır Dokümantasyonu",
          url: "https://redux.js.org/understanding/thinking-in-redux/three-principles",
          type: "documentation",
        },
        {
          id: "redux-how-it-works-guide",
          title: "Redux Nasıl Çalışır Kılavuzu",
          url: "https://redux.js.org/understanding/thinking-in-redux/three-principles",
          type: "tutorial",
        },
        {
          id: "redux-how-it-works-patterns",
          title: "Redux Nasıl Çalışır Desenleri",
          url: "https://redux.js.org/understanding/thinking-in-redux/three-principles",
          type: "article",
        },
      ],
    },
    {
      id: "redux-dispatch-usage",
      title: "Redux dispatch Kullanımı",
      description: "Redux dispatch fonksiyonu ile action gönderme",
      content: `Redux dispatch Kullanımı

Redux dispatch fonksiyonu ile action'ları nasıl göndereceğimizi öğrenelim. Modern React geliştirmede Redux dispatch kullanımı ve en iyi uygulamaları öğrenin.

dispatch Nedir?

Store Method - Store'un dispatch method'u, action'ları store'a gönderir, state güncellemesini tetikler, synchronous operation
Kullanım Amacı - State değişiklikleri, user interactions, API calls, side effects

Günlük Hayattan Örnek

Bir e-ticaret uygulaması geliştirdiğinizi düşünün:

- Basic Dispatch: Kullanıcı sepete ürün ekleme butonuna tıkladığında
- Action Creators: Ürün ekleme action'ı parametreli olarak oluşturulur
- Async Actions: API'den ürün bilgileri çekme işlemi
- Batch Actions: Sepete ürün ekleme ve sepet sayısını güncelleme

dispatch Kullanımı

1. Basic Dispatch - store.dispatch(action), direct store access, simple action dispatch, immediate execution
2. Action Creators - Function-based actions, parameterized actions, reusable actions, type safety
3. Async Actions - Thunk middleware, async operations, API calls, side effects

dispatch Patterns

1. Synchronous Actions - Immediate state updates, simple data changes, user interactions, form submissions
2. Asynchronous Actions - API calls, data fetching, file uploads, background operations
3. Batch Actions - Multiple actions, atomic operations, transaction-like behavior, consistency

Best Practices

Action Design - Descriptive action types, minimal payload, consistent structure, type safety
Error Handling - Error actions, error states, user feedback, recovery mechanisms
Performance - Action batching, selective updates, memoization, optimization

Advanced Usage

1. Middleware Integration - Thunk middleware, saga middleware, custom middleware, action processing
2. Action Creators - Parameterized creators, async creators, conditional actions, complex logic
3. Batch Dispatching - Multiple actions, atomic operations, performance optimization, consistency
4. Conditional Dispatching - Conditional logic, state-based actions, user permissions, feature flags

Modern React Geliştirmede

Redux Dispatch - Redux dispatch
Action Management - Action yönetimi
State Updates - State güncellemeleri
Performance Optimization - Performance optimizasyonu
Error Handling - Hata yönetimi

Best Practices

1. Descriptive action types kullanın
2. Minimal payload gönderin
3. Error handling ekleyin
4. Performance'ı optimize edin
5. Type safety sağlayın

Ne Zaman Redux dispatch Kullanın

State değişiklikleri gerektiğinde
User interactions yönetirken
API calls yaparken
Side effects yönetirken
Action'ları store'a gönderirken`,
      codeExamples: [],
      relatedProjects: [
        "redux-dispatch",
        "action-management",
        "redux-dispatch-patterns",
      ],
      resources: [
        {
          id: "redux-dispatch-docs",
          title: "Redux.js - Redux dispatch Dokümantasyonu",
          url: "https://redux.js.org/api/store#dispatchaction",
          type: "documentation",
        },
        {
          id: "redux-dispatch-guide",
          title: "Redux dispatch Kılavuzu",
          url: "https://redux.js.org/api/store#dispatchaction",
          type: "tutorial",
        },
        {
          id: "redux-dispatch-patterns",
          title: "Redux dispatch Desenleri",
          url: "https://redux.js.org/api/store#dispatchaction",
          type: "article",
        },
      ],
    },
    {
      id: "redux-project-setup",
      title: "React Projesine Redux Kurulumu - Başlangıç Projesi",
      description: "Mevcut React projesine Redux kurulumu",
      content: `React Projesine Redux Kurulumu - Başlangıç Projesi

Mevcut React projesine Redux nasıl kurulur? Modern React geliştirmede Redux kurulumu ve en iyi uygulamaları öğrenin.

Redux Kurulumu

Package Installation - npm install redux react-redux, Redux core library, React bindings, development tools
Kullanım Amacı - State management, global state, predictable updates, debugging tools

Günlük Hayattan Örnek

Bir e-ticaret uygulaması geliştirdiğinizi düşünün:

- Package Installation: Redux core library ve React bindings kurulumu
- Project Structure: Store configuration, reducer organization, action definitions
- Basic Setup: Store creation, provider setup, basic reducer, initial state
- Development Tools: Redux DevTools, TypeScript support, debugging tools

Kurulum Adımları

1. Package Installation - Redux core package, React-Redux bindings, Redux DevTools, TypeScript types
2. Project Structure - Store configuration, reducer organization, action definitions, component integration
3. Basic Setup - Store creation, provider setup, basic reducer, initial state

Kurulum Komutları

NPM Installation - npm install redux, npm install react-redux, npm install @reduxjs/toolkit, npm install --save-dev redux-devtools-extension
Yarn Installation - yarn add redux react-redux, yarn add @reduxjs/toolkit, yarn add -D redux-devtools-extension

Kurulum Sonrası

Project Structure - src/store/ klasörü, reducer dosyaları, action dosyaları, type definitions
Next Steps - Store configuration, reducer creation, provider setup, component integration

Development Tools

Redux DevTools - Browser extension, time-travel debugging, action inspection, state monitoring
TypeScript Support - Type definitions, type safety, IntelliSense, error prevention

Modern React Geliştirmede

Redux Installation - Redux kurulumu
Project Setup - Proje kurulumu
Development Tools - Development araçları
TypeScript Integration - TypeScript entegrasyonu
Best Practices - En iyi uygulamalar

Best Practices

1. Redux DevTools kurun
2. TypeScript kullanın
3. Project structure'ı organize edin
4. Development tools'ları aktif edin
5. Best practices uygulayın

Ne Zaman Redux Kurulumu Yapın

Global state management gerektiğinde
Complex state logic gerektiğinde
Large applications geliştirirken
Team collaboration gerektiğinde
Advanced debugging gerektiğinde`,
      codeExamples: [],
      relatedProjects: [
        "redux-setup",
        "project-configuration",
        "redux-setup-patterns",
      ],
      resources: [
        {
          id: "redux-setup-docs",
          title: "Redux.js - Redux Kurulumu Dokümantasyonu",
          url: "https://redux.js.org/introduction/getting-started#installation",
          type: "documentation",
        },
        {
          id: "redux-setup-guide",
          title: "Redux Kurulumu Kılavuzu",
          url: "https://redux.js.org/introduction/getting-started#installation",
          type: "tutorial",
        },
        {
          id: "redux-setup-patterns",
          title: "Redux Kurulumu Desenleri",
          url: "https://redux.js.org/introduction/getting-started#installation",
          type: "article",
        },
      ],
    },
    {
      id: "redux-store-creation",
      title: "Redux Store Oluşturma",
      description: "Redux store yapılandırması ve oluşturma",
      content: `Redux Store Oluşturma

Redux store'u nasıl oluşturup yapılandıracağımızı öğrenelim. Modern React geliştirmede Redux store oluşturma ve en iyi uygulamaları öğrenin.

Redux Store

Store Definition - State container, single source of truth, centralized data, immutable state
Kullanım Amacı - Global state management, data centralization, predictable updates, debugging support

Günlük Hayattan Örnek

Bir e-ticaret uygulaması geliştirdiğinizi düşünün:

- Store Definition: Tüm uygulama state'i tek bir yerde saklanır
- Store Configuration: Reducer combination, middleware setup, DevTools integration
- Store Methods: getState(), dispatch(), subscribe(), replaceReducer()
- Store Structure: Root reducer, middleware setup, initial state

Store Creation

1. createStore Function - Redux core function, reducer parameter, initial state, middleware support
2. Store Configuration - Reducer combination, middleware setup, DevTools integration, initial state
3. Store Methods - getState(), dispatch(), subscribe(), replaceReducer()

Store Structure

1. Root Reducer - Combined reducers, state slices, modular structure, scalable architecture
2. Middleware Setup - Thunk middleware, DevTools middleware, logging middleware, custom middleware
3. Initial State - Default values, state structure, data initialization, fallback values

Store Configuration

1. Reducer Combination - combineReducers, state slices, modular reducers, scalable structure
2. Middleware Integration - applyMiddleware, thunk support, DevTools integration, custom middleware
3. DevTools Setup - Development tools, time-travel debugging, action inspection, state monitoring

Advanced Configuration

1. State Persistence - Local storage, session storage, state hydration, data recovery
2. Hot Reloading - Development setup, state preservation, code changes, development experience
3. TypeScript Integration - Type definitions, type safety, IntelliSense, error prevention
4. Production Optimization - Bundle optimization, performance tuning, memory management, error handling

Modern React Geliştirmede

Redux Store Creation - Redux store oluşturma
Store Configuration - Store yapılandırması
Middleware Integration - Middleware entegrasyonu
DevTools Integration - DevTools entegrasyonu
Performance Optimization - Performance optimizasyonu

Best Practices

1. Single source of truth sağlayın
2. Middleware kullanın
3. DevTools entegre edin
4. TypeScript kullanın
5. Performance'ı optimize edin

Ne Zaman Redux Store Oluşturun

Global state management gerektiğinde
Complex state logic gerektiğinde
Large applications geliştirirken
Team collaboration gerektiğinde
Advanced debugging gerektiğinde`,
      codeExamples: [],
      relatedProjects: [
        "redux-store",
        "store-configuration",
        "redux-store-patterns",
      ],
      resources: [
        {
          id: "redux-store-docs",
          title: "Redux.js - Redux Store Dokümantasyonu",
          url: "https://redux.js.org/api/createstore",
          type: "documentation",
        },
        {
          id: "redux-store-guide",
          title: "Redux Store Kılavuzu",
          url: "https://redux.js.org/api/createstore",
          type: "tutorial",
        },
        {
          id: "redux-store-patterns",
          title: "Redux Store Desenleri",
          url: "https://redux.js.org/api/createstore",
          type: "article",
        },
      ],
    },
    {
      id: "redux-provider-usage",
      title: "Redux Provider Kullanımı",
      description: "React uygulamasında Redux Provider kurulumu",
      content: `Redux Provider Kullanımı

React uygulamasında Redux Provider'ı nasıl kuracağımızı öğrenelim. Modern React geliştirmede Redux Provider kullanımı ve en iyi uygulamaları öğrenin.

Redux Provider

Provider Component - React-Redux component, store'u uygulamaya sağlar, context-based distribution, component tree wrapping
Kullanım Amacı - Store access, component integration, state distribution, global state availability

Günlük Hayattan Örnek

Bir e-ticaret uygulaması geliştirdiğinizi düşünün:

- Provider Setup: App component'i Provider ile sarmalayarak store'u tüm uygulamaya sağlama
- Store Integration: Store prop ile Provider'a store'u geçme
- App Structure: Root component'te Provider wrapping, component hierarchy
- State Access: useSelector ve useDispatch hook'ları ile state erişimi

Provider Setup

1. Provider Import - react-redux import, Provider component, store import, App component wrapping
2. Store Integration - Store prop, provider configuration, component tree wrapping, state availability
3. App Structure - Root component, provider wrapping, component hierarchy, state access

Provider Configuration

1. Basic Setup - Provider component, store prop, children components, state distribution
2. Advanced Configuration - Multiple stores, store isolation, context customization, performance optimization
3. Error Handling - Error boundaries, store errors, component errors, fallback UI

Best Practices

1. Provider Placement - Root level placement, single provider, store isolation, performance optimization
2. Store Access - useSelector hook, useDispatch hook, component integration, state consumption
3. Performance - Selective subscriptions, memoization, component optimization, re-render prevention

Advanced Usage

1. Multiple Providers - Store separation, feature isolation, performance optimization, complex architectures
2. Custom Context - Context customization, store isolation, feature-specific stores, advanced patterns
3. Provider Composition - Provider nesting, store hierarchy, feature organization, scalable architecture
4. Testing - Provider mocking, store testing, component testing, integration testing

Modern React Geliştirmede

Redux Provider - Redux Provider
Provider Setup - Provider kurulumu
Store Integration - Store entegrasyonu
Performance Optimization - Performance optimizasyonu
Error Handling - Hata yönetimi

Best Practices

1. Root level'de provider kullanın
2. Single provider kullanın
3. Performance'ı optimize edin
4. Error handling ekleyin
5. Testing yapın

Ne Zaman Redux Provider Kullanın

Store'u uygulamaya sağlarken
Component integration gerektiğinde
State distribution gerektiğinde
Global state availability gerektiğinde
Redux entegrasyonu yaparken`,
      codeExamples: [],
      relatedProjects: [
        "redux-provider",
        "app-integration",
        "redux-provider-patterns",
      ],
      resources: [
        {
          id: "redux-provider-docs",
          title: "React-Redux - Redux Provider Dokümantasyonu",
          url: "https://react-redux.js.org/api/provider",
          type: "documentation",
        },
        {
          id: "redux-provider-guide",
          title: "Redux Provider Kılavuzu",
          url: "https://react-redux.js.org/api/provider",
          type: "tutorial",
        },
        {
          id: "redux-provider-patterns",
          title: "Redux Provider Desenleri",
          url: "https://react-redux.js.org/api/provider",
          type: "article",
        },
      ],
    },
    {
      id: "useselector-usedispatch",
      title: "useSelector ve useDispatch Kullanımı",
      description: "React-Redux hook'ları ile state erişimi ve action dispatch",
      content: `useSelector ve useDispatch Kullanımı

React-Redux hook'ları ile Redux state'ine nasıl erişeceğimizi ve action'ları nasıl dispatch edeceğimizi öğrenelim. Modern React geliştirmede useSelector ve useDispatch kullanımı ve en iyi uygulamaları öğrenin.

React-Redux Hooks

useSelector Hook - State'e erişim, selective subscriptions, re-render optimization, component integration
useDispatch Hook - Action dispatch, store method access, event handling, state updates

Günlük Hayattan Örnek

Bir e-ticaret uygulaması geliştirdiğinizi düşünün:

- useSelector Kullanımı: Sepet ürün sayısını state'ten okuma, kullanıcı bilgilerini state'ten okuma
- useDispatch Kullanımı: Sepete ürün ekleme action'ı dispatch etme, kullanıcı giriş action'ı dispatch etme
- Selector Functions: Sepet toplam fiyatını hesaplama, kullanıcı durumunu kontrol etme
- Action Creators: Ürün ekleme action'ı oluşturma, kullanıcı giriş action'ı oluşturma

useSelector Kullanımı

1. Basic Usage - State selection, component integration, re-render optimization, selective subscriptions
2. Selector Functions - State derivation, computed values, memoization, performance optimization
3. Multiple Selectors - Multiple state slices, combined selectors, complex state access, modular approach

useDispatch Kullanımı

1. Basic Dispatch - Action dispatch, event handlers, user interactions, state updates
2. Action Creators - Function-based actions, parameterized actions, reusable actions, type safety
3. Async Actions - Thunk actions, API calls, side effects, error handling

Best Practices

1. Selector Optimization - Memoized selectors, shallow equality, performance optimization, re-render prevention
2. Dispatch Optimization - useCallback usage, action memoization, event handler optimization, performance tuning
3. Error Handling - Error boundaries, action errors, state errors, user feedback

Advanced Patterns

1. Custom Hooks - Reusable logic, state abstraction, component simplification, logic extraction
2. Selector Composition - Complex selectors, state derivation, computed values, performance optimization
3. Action Batching - Multiple actions, atomic operations, performance optimization, consistency
4. Conditional Logic - Conditional dispatch, state-based actions, feature flags, user permissions

Modern React Geliştirmede

useSelector ve useDispatch - useSelector ve useDispatch
State Access - State erişimi
Action Dispatch - Action dispatch
Performance Optimization - Performance optimizasyonu
Error Handling - Hata yönetimi

Best Practices

1. Memoized selectors kullanın
2. useCallback ile dispatch optimize edin
3. Error handling ekleyin
4. Performance'ı optimize edin
5. Custom hooks oluşturun

Ne Zaman useSelector ve useDispatch Kullanın

Redux state'ine erişim gerektiğinde
Action dispatch gerektiğinde
Component integration gerektiğinde
State updates gerektiğinde
Redux hook'ları kullanırken`,
      codeExamples: [],
      relatedProjects: ["redux-hooks", "state-access", "redux-hooks-patterns"],
      resources: [
        {
          id: "redux-hooks-docs",
          title: "React-Redux - useSelector ve useDispatch Dokümantasyonu",
          url: "https://react-redux.js.org/api/hooks",
          type: "documentation",
        },
        {
          id: "redux-hooks-guide",
          title: "useSelector ve useDispatch Kılavuzu",
          url: "https://react-redux.js.org/api/hooks",
          type: "tutorial",
        },
        {
          id: "redux-hooks-patterns",
          title: "useSelector ve useDispatch Desenleri",
          url: "https://react-redux.js.org/api/hooks",
          type: "article",
        },
      ],
    },
    {
      id: "redux-multiple-state",
      title: "Action'a Yeni Veri Gönderme ve Çoklu State ile Çalışma",
      description: "Redux'ta çoklu state yönetimi ve action payload",
      content: `Action'a Yeni Veri Gönderme ve Çoklu State ile Çalışma

Redux'ta çoklu state yönetimi ve action'lara veri gönderme tekniklerini öğrenelim. Modern React geliştirmede çoklu state yönetimi ve en iyi uygulamaları öğrenin.

Çoklu State Yönetimi

State Slices - Modular state structure, feature-based organization, scalable architecture, maintainable code
Action Payload - Data transmission, state updates, complex data structures, type safety

Günlük Hayattan Örnek

Bir e-ticaret uygulaması geliştirdiğinizi düşünün:

- State Slices: User slice (kullanıcı bilgileri), Product slice (ürün bilgileri), Cart slice (sepet bilgileri), UI slice (UI durumu)
- Action Payload: Sepete ürün ekleme action'ına ürün bilgileri gönderme
- Reducer Combination: combineReducers ile tüm slice'ları birleştirme
- Action Types: Namespaced actions, feature-specific actions

State Organization

1. State Slices - User slice, product slice, cart slice, UI slice
2. Reducer Combination - combineReducers, modular reducers, state isolation, feature separation
3. Action Types - Namespaced actions, feature-specific actions, global actions, consistent naming

Action Payload Patterns

1. Simple Payload - Primitive values, simple objects, direct updates, basic operations
2. Complex Payload - Nested objects, arrays, complex data structures, advanced operations
3. Conditional Payload - Conditional data, dynamic updates, feature flags, user permissions

Best Practices

1. State Structure - Flat state structure, normalized data, entity relationships, efficient updates
2. Action Design - Descriptive action types, minimal payload, consistent structure, type safety
3. Reducer Logic - Pure functions, immutable updates, no side effects, predictable behavior

Advanced Patterns

1. Normalization - Flat data structure, entity management, relationship handling, efficient updates
2. Computed Values - Derived state, selector functions, memoization, performance optimization
3. State Synchronization - Multiple state slices, cross-slice updates, data consistency, conflict resolution
4. Batch Updates - Multiple actions, atomic operations, performance optimization, consistency

State Management Strategies

1. Feature-based - Feature slices, isolated state, modular architecture, team collaboration
2. Domain-based - Business domains, domain slices, cross-cutting concerns, enterprise architecture
3. Hybrid Approach - Combined strategies, flexible organization, scalable architecture, maintainable code

Modern React Geliştirmede

Çoklu State Yönetimi - Çoklu state yönetimi
Action Payload - Action payload
State Organization - State organizasyonu
Performance Optimization - Performance optimizasyonu
Best Practices - En iyi uygulamalar

Best Practices

1. Flat state structure kullanın
2. Normalized data yapısı oluşturun
3. Descriptive action types kullanın
4. Pure functions yazın
5. Performance'ı optimize edin

Ne Zaman Çoklu State Yönetimi Kullanın

Large applications geliştirirken
Complex state logic gerektiğinde
Multiple features gerektiğinde
Team collaboration gerektiğinde
Scalable architecture gerektiğinde`,
      codeExamples: [],
      relatedProjects: [
        "multi-state-management",
        "action-payloads",
        "redux-multiple-state-patterns",
      ],
      resources: [
        {
          id: "redux-multiple-state-docs",
          title: "Redux.js - Çoklu State Yönetimi Dokümantasyonu",
          url: "https://redux.js.org/usage/structuring-reducers/structuring-reducers",
          type: "documentation",
        },
        {
          id: "redux-multiple-state-guide",
          title: "Çoklu State Yönetimi Kılavuzu",
          url: "https://redux.js.org/usage/structuring-reducers/structuring-reducers",
          type: "tutorial",
        },
        {
          id: "redux-multiple-state-patterns",
          title: "Çoklu State Yönetimi Desenleri",
          url: "https://redux.js.org/usage/structuring-reducers/structuring-reducers",
          type: "article",
        },
      ],
    },
    {
      id: "redux-correct-implementation",
      title: "Redux'ı Doğru Çalıştırmak",
      description: "Redux best practices ve doğru implementasyon",
      content: `Redux'ı Doğru Çalıştırmak

Redux'ı doğru şekilde nasıl implement edeceğimizi ve best practice'leri öğrenelim. Modern React geliştirmede Redux best practices ve en iyi uygulamaları öğrenin.

Redux Best Practices

Architecture Principles - Single source of truth, immutable state, pure functions, predictable updates
Implementation Guidelines - Proper structure, type safety, performance optimization, error handling

Günlük Hayattan Örnek

Bir e-ticaret uygulaması geliştirdiğinizi düşünün:

- State Structure: Flat state structure, normalized data, entity relationships
- Action Design: Descriptive action types, minimal payload, consistent structure
- Reducer Implementation: Pure functions, immutable updates, no side effects
- Component Integration: Selective subscriptions, memoized selectors, optimized re-renders

Doğru Implementasyon

1. State Structure - Flat state structure, normalized data, entity relationships, efficient updates
2. Action Design - Descriptive action types, minimal payload, consistent structure, type safety
3. Reducer Implementation - Pure functions, immutable updates, no side effects, predictable behavior
4. Component Integration - Selective subscriptions, memoized selectors, optimized re-renders, performance tuning

Best Practices

1. Code Organization - Feature-based structure, modular architecture, clear separation, maintainable code
2. Type Safety - TypeScript integration, action types, state types, selector types
3. Performance - Memoized selectors, optimized re-renders, batch updates, memory management
4. Error Handling - Error boundaries, action errors, state errors, user feedback

Common Mistakes

1. State Mutations - Direct state modification, mutable updates, side effects in reducers, impure functions
2. Over-engineering - Unnecessary complexity, premature optimization, over-abstraction, complex patterns
3. Performance Issues - Unnecessary re-renders, large state objects, inefficient selectors, memory leaks
4. Poor Structure - Unclear organization, tight coupling, hard to test, difficult maintenance

Advanced Best Practices

1. Testing - Unit tests, integration tests, reducer testing, action testing
2. Development Tools - Redux DevTools, time-travel debugging, action inspection, state monitoring
3. Production Optimization - Bundle optimization, performance tuning, error monitoring, analytics integration
4. Team Collaboration - Code standards, documentation, code reviews, knowledge sharing

Implementation Checklist

Do's: Use TypeScript, implement proper error handling, write tests, use DevTools, follow naming conventions
Don'ts: Mutate state directly, put side effects in reducers, over-engineer simple cases, ignore performance, skip error handling

Modern React Geliştirmede

Redux Best Practices - Redux best practices
Proper Implementation - Doğru implementasyon
Performance Optimization - Performance optimizasyonu
Error Handling - Hata yönetimi
Team Collaboration - Team collaboration

Best Practices

1. TypeScript kullanın
2. Proper error handling implement edin
3. Test yazın
4. DevTools kullanın
5. Naming conventions takip edin

Ne Zaman Redux Best Practices Uygulayın

Redux implementasyonu yaparken
Large applications geliştirirken
Team collaboration yaparken
Performance kritik uygulamalarda
Production deployment yaparken`,
      codeExamples: [],
      relatedProjects: [
        "redux-best-practices",
        "proper-implementation",
        "redux-best-practices-patterns",
      ],
      resources: [
        {
          id: "redux-correct-implementation-docs",
          title: "Redux.js - Redux Doğru Implementasyon Dokümantasyonu",
          url: "https://redux.js.org/style-guide/style-guide",
          type: "documentation",
        },
        {
          id: "redux-correct-implementation-guide",
          title: "Redux Doğru Implementasyon Kılavuzu",
          url: "https://redux.js.org/style-guide/style-guide",
          type: "tutorial",
        },
        {
          id: "redux-correct-implementation-patterns",
          title: "Redux Doğru Implementasyon Desenleri",
          url: "https://redux.js.org/style-guide/style-guide",
          type: "article",
        },
      ],
    },
  ],
};
