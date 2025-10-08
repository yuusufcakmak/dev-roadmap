import { Category } from "../../../types/roadmap";

export const reactRouter: Category = {
  id: "react-router",
  name: "REACT ROUTER İLE MULTİ PAGE SPA",
  icon: "🛣️",
  description: "React Router ile single-page application routing",
  topics: [
    {
      id: "spa-multi-page",
      title: "Single-Page Application ve React Multi-Page",
      description: "SPA kavramı ve React'te multi-page uygulamalar",
      content: `Single-Page Application ve React Multi-Page

SPA kavramını ve React'te multi-page uygulamaları nasıl oluşturacağımızı öğrenelim. Modern React geliştirmede SPA kavramı ve en iyi uygulamaları öğrenin.

SPA Nedir?

Single-Page Application - Tek HTML sayfası, JavaScript ile dinamik içerik, client-side routing, hızlı kullanıcı deneyimi
Kullanım Amacı - Modern web uygulamaları, hızlı navigation, state preservation, interactive user experience

Günlük Hayattan Örnek

Bir e-ticaret uygulaması geliştirdiğinizi düşünün:

- Product Catalog: Ürün listesi sayfası, filtreleme, arama, pagination
- Product Detail: Ürün detay sayfası, resim galerisi, yorumlar, benzer ürünler
- Shopping Cart: Sepet sayfası, ürün ekleme/çıkarma, miktar güncelleme
- Checkout: Ödeme sayfası, adres bilgileri, ödeme yöntemleri

Geleneksel Multi-Page vs SPA

1. Server-side Routing - Her sayfa için server request, page reload, slower navigation, traditional web
2. Client-side Routing - JavaScript ile navigation, no page reload, faster navigation, modern web
3. SEO Challenges - Search engine indexing, meta tag management, server-side rendering
4. Development Complexity - Modern tooling, build processes, deployment strategies

React Router

Client-side Routing - URL değişiklikleri, component rendering, browser history, navigation handling
Routing Benefits - Fast navigation, better user experience, state preservation, dynamic content loading

SPA Avantajları

1. Performance - Faster navigation, reduced server requests, cached resources, better user experience
2. User Experience - Smooth transitions, no page reloads, interactive interfaces, mobile-friendly
3. State Management - Global state preservation, user session management, form data retention
4. Development - Modern development tools, component-based architecture, reusable code

SPA Challenges

1. SEO Issues - Search engine indexing, meta tag management, server-side rendering, social media sharing
2. Initial Load Time - Large bundle sizes, JavaScript dependency, loading strategies, code splitting
3. Browser Support - JavaScript dependency, modern browser requirements, fallback strategies
4. Complexity - Build tools, routing configuration, state management, error handling

Modern React Geliştirmede

SPA Architecture - Single-page application architecture
Client-side Routing - Client-side routing
Performance Optimization - Performance optimizasyonu
SEO Optimization - SEO optimizasyonu
User Experience - Kullanıcı deneyimi

Best Practices

1. Code splitting kullanın
2. Lazy loading implement edin
3. SEO optimizasyonu yapın
4. Performance monitoring ekleyin
5. Error boundaries kullanın

Ne Zaman SPA Kullanın

Interactive web applications geliştirirken
Fast navigation gerektiğinde
State management kritik olduğunda
Modern user experience istediğinizde
Real-time features gerektiğinde`,
      codeExamples: [],
      relatedProjects: ["spa-routing", "multi-page-app"],
      resources: [
        {
          id: "spa-docs",
          title: "React Router - SPA Dokümantasyonu",
          url: "https://reactrouter.com/en/main/start/concepts",
          type: "documentation",
        },
        {
          id: "spa-guide",
          title: "SPA Kılavuzu",
          url: "https://reactrouter.com/en/main/start/concepts",
          type: "tutorial",
        },
        {
          id: "spa-patterns",
          title: "SPA Desenleri",
          url: "https://reactrouter.com/en/main/start/concepts",
          type: "article",
        },
      ],
    },
    {
      id: "react-router-dom-installation",
      title: "react-router-dom Kurulumu",
      description: "React Router DOM paketi kurulumu",
      content: `react-router-dom Kurulumu

React Router DOM paketini nasıl kuracağımızı öğrenelim. Modern React geliştirmede React Router kurulumu ve en iyi uygulamaları öğrenin.

Package Installation

React Router DOM - Official routing library, React için özel tasarım, browser routing support, modern API
Kullanım Amacı - Client-side routing, navigation management, URL handling, browser history management

Günlük Hayattan Örnek

Bir blog uygulaması geliştirdiğinizi düşünün:

- Home Page: Ana sayfa, blog post listesi, navigation menu
- About Page: Hakkımızda sayfası, team bilgileri, company history
- Blog Post Detail: Blog post detay sayfası, yorumlar, related posts
- Contact Page: İletişim sayfası, form, contact information

Kurulum Komutları

1. NPM - npm install react-router-dom, package.json'a dependency ekleme, node_modules'a yükleme
2. Yarn - yarn add react-router-dom, yarn.lock dosyası güncelleme, dependency management
3. TypeScript Support - npm install @types/react-router-dom, type definitions, IntelliSense support

Version Compatibility

1. React Router v6 - Modern API, simplified routing, better TypeScript support, improved performance
2. Migration from v5 - API changes, component updates, hook changes, configuration updates
3. Breaking Changes - Route structure changes, component prop changes, hook API updates
4. New Features - Data loading, error boundaries, nested routing improvements

Dependencies

1. Peer Dependencies - React 16.8+, React DOM, modern browser support, JavaScript ES6+
2. Browser Support - Modern browsers, HTML5 history API, JavaScript ES6+ features
3. Development Dependencies - TypeScript types, development tools, testing libraries

Modern React Geliştirmede

Package Management - Package yönetimi
Dependency Installation - Dependency kurulumu
Version Management - Versiyon yönetimi
TypeScript Integration - TypeScript entegrasyonu
Development Setup - Development setup

Best Practices

1. Latest stable version kullanın
2. TypeScript types ekleyin
3. Peer dependencies kontrol edin
4. Version compatibility kontrol edin
5. Development tools kurun

Ne Zaman React Router Kurun

Multi-page application geliştirirken
Client-side routing gerektiğinde
Navigation management yaparken
URL-based state management gerektiğinde
SPA architecture kullanırken`,
      codeExamples: [],
      relatedProjects: ["router-installation", "package-setup"],
      resources: [
        {
          id: "router-installation-docs",
          title: "React Router - Kurulum Dokümantasyonu",
          url: "https://reactrouter.com/en/main/start/tutorial#setup",
          type: "documentation",
        },
        {
          id: "router-installation-guide",
          title: "React Router Kurulum Kılavuzu",
          url: "https://reactrouter.com/en/main/start/tutorial#setup",
          type: "tutorial",
        },
        {
          id: "router-installation-patterns",
          title: "React Router Kurulum Desenleri",
          url: "https://reactrouter.com/en/main/start/tutorial#setup",
          type: "article",
        },
      ],
    },
    {
      id: "route-definition",
      title: "Route Tanımlama",
      description: "React Router ile route tanımlama ve yapılandırma",
      content: `Route Tanımlama

React Router ile route'ları nasıl tanımlayacağımızı öğrenelim. Modern React geliştirmede route tanımlama ve en iyi uygulamaları öğrenin.

Route Tanımlama

BrowserRouter - HTML5 history API, clean URLs, server configuration, production ready
Route Components - Route matching, component rendering, path parameters, query parameters

Günlük Hayattan Örnek

Bir e-ticaret uygulaması geliştirdiğinizi düşünün:

- Home Route: Ana sayfa route'u, product showcase, featured items
- Product Route: Ürün detay route'u, product/:id pattern, dynamic content
- Category Route: Kategori route'u, category/:name pattern, filtered products
- Cart Route: Sepet route'u, cart page, checkout process

Basic Routing

1. Router Setup - BrowserRouter wrapper, route definitions, component mapping, path configuration
2. Route Matching - Exact matching, path parameters, wildcard routes, priority handling
3. Component Mapping - Route to component mapping, dynamic rendering, conditional rendering
4. Path Configuration - URL structure, parameter definition, query string handling

Route Patterns

1. Static Routes - Fixed paths, component mapping, simple navigation, basic routing
2. Dynamic Routes - Path parameters, variable segments, data loading, dynamic content
3. Nested Routes - Route hierarchy, layout components, shared UI elements, complex navigation
4. Wildcard Routes - Catch-all routes, 404 handling, fallback routes, error boundaries

Route Configuration

1. Path Syntax - String patterns, parameter syntax, optional parameters, wildcard matching
2. Component Rendering - Element prop, component prop, render prop, children prop
3. Route Props - Route parameters, location object, history object, match object
4. Route Guards - Authentication checks, permission validation, redirect logic, access control

Modern React Geliştirmede

Route Definition - Route tanımlama
Component Mapping - Component mapping
Path Configuration - Path yapılandırması
Route Patterns - Route desenleri
Navigation Management - Navigation yönetimi

Best Practices

1. Descriptive route names kullanın
2. Consistent URL structure oluşturun
3. Route parameters validate edin
4. Error boundaries ekleyin
5. Performance optimize edin

Ne Zaman Route Tanımlayın

Multi-page application geliştirirken
Navigation structure oluştururken
URL-based state management gerektiğinde
Dynamic content routing yaparken
User flow management gerektiğinde`,
      codeExamples: [],
      relatedProjects: ["route-setup", "basic-routing"],
      resources: [
        {
          id: "route-definition-docs",
          title: "React Router - Route Tanımlama Dokümantasyonu",
          url: "https://reactrouter.com/en/main/route/route",
          type: "documentation",
        },
        {
          id: "route-definition-guide",
          title: "Route Tanımlama Kılavuzu",
          url: "https://reactrouter.com/en/main/route/route",
          type: "tutorial",
        },
        {
          id: "route-definition-patterns",
          title: "Route Tanımlama Desenleri",
          url: "https://reactrouter.com/en/main/route/route",
          type: "article",
        },
      ],
    },
    {
      id: "second-route-definition",
      title: "İkinci Route Tanımlama",
      description: "Birden fazla route tanımlama ve yönetme",
      content: `İkinci Route Tanımlama

Birden fazla route nasıl tanımlanır ve yönetilir? Modern React geliştirmede multiple route tanımlama ve en iyi uygulamaları öğrenin.

Multiple Routes

Route Array - Multiple route definitions, component mapping, path organization, route priority
Route Management - Organized structure, maintainable code, scalable architecture, clear separation

Günlük Hayattan Örnek

Bir blog uygulaması geliştirdiğinizi düşünün:

- Home Route: Ana sayfa, blog post listesi, featured posts
- About Route: Hakkımızda sayfası, team information, company history
- Blog Route: Blog post listesi, pagination, category filtering
- Contact Route: İletişim sayfası, contact form, location information

Route Organization

1. Route Structure - Logical grouping, feature-based routing, hierarchical organization, maintainable code
2. Component Mapping - One-to-one mapping, component reuse, lazy loading, code splitting
3. Path Organization - Consistent naming, descriptive paths, URL structure, SEO friendly
4. Route Priority - Route order, matching priority, fallback routes, error handling

Route Management

1. Feature Grouping - Related routes grouping, module separation, clear hierarchy, maintainable structure
2. Code Organization - Route files organization, component separation, import management, dependency management
3. Scalability - Route scaling, new feature addition, route modification, maintenance
4. Performance - Route optimization, lazy loading, code splitting, bundle optimization

Modern React Geliştirmede

Multiple Route Definition - Multiple route tanımlama
Route Organization - Route organizasyonu
Component Mapping - Component mapping
Route Management - Route yönetimi
Scalable Architecture - Scalable architecture

Best Practices

1. Logical route grouping yapın
2. Consistent naming convention kullanın
3. Feature-based organization uygulayın
4. Route priority dikkate alın
5. Performance optimize edin

Ne Zaman Multiple Route Tanımlayın

Complex application geliştirirken
Multiple pages gerektiğinde
Feature-based routing yaparken
Scalable architecture gerektiğinde
Navigation structure oluştururken`,
      codeExamples: [],
      relatedProjects: ["multiple-routes", "route-organization"],
      resources: [
        {
          id: "multiple-routes-docs",
          title: "React Router - Multiple Routes Dokümantasyonu",
          url: "https://reactrouter.com/en/main/start/tutorial",
          type: "documentation",
        },
        {
          id: "multiple-routes-guide",
          title: "Multiple Routes Kılavuzu",
          url: "https://reactrouter.com/en/main/start/tutorial",
          type: "tutorial",
        },
        {
          id: "multiple-routes-patterns",
          title: "Multiple Routes Desenleri",
          url: "https://reactrouter.com/en/main/start/tutorial",
          type: "article",
        },
      ],
    },
    {
      id: "alternative-route-definition",
      title: "Route Tanımlamanın Alternatif Yolu",
      description: "createBrowserRouter ve RouterProvider kullanımı",
      content: `Route Tanımlamanın Alternatif Yolu

createBrowserRouter ve RouterProvider ile modern route tanımlama. Modern React geliştirmede alternative route tanımlama ve en iyi uygulamaları öğrenin.

Modern Router API

createBrowserRouter - Data router, loader functions, action functions, error handling
RouterProvider - Router provider, modern API, better TypeScript support, enhanced features

Günlük Hayattan Örnek

Bir e-ticaret uygulaması geliştirdiğinizi düşünün:

- Product Data Loading: Ürün detayları için loader function, async data fetching
- Form Actions: Ürün ekleme formu için action function, server communication
- Error Handling: Route-level error boundaries, user-friendly error messages
- Nested Routes: Product detail sayfası, nested routes, shared layout

Configuration

1. Router Creation - Route configuration, data loading, error boundaries, nested routes
2. Provider Setup - Router provider, application wrapper, context provision, route rendering
3. Route Configuration - Route definitions, component mapping, path configuration, parameter handling
4. Data Integration - Loader functions, action functions, server communication, state management

Advanced Features

1. Data Loading - Loader functions, async data fetching, route-level loading, error handling
2. Actions - Form actions, data mutations, server communication, state updates
3. Error Boundaries - Route-level error handling, error components, recovery mechanisms, user feedback
4. Nested Routing - Route hierarchy, layout components, shared UI elements, complex navigation

Migration

1. From BrowserRouter - API differences, configuration changes, feature enhancements, best practices
2. Breaking Changes - Route structure changes, component prop changes, hook API updates
3. New Features - Data loading capabilities, enhanced error handling, improved TypeScript support
4. Best Practices - Modern routing patterns, performance optimization, maintainable code

Modern React Geliştirmede

Modern Router API - Modern router API
Data Loading - Data loading
Error Handling - Error handling
Route Configuration - Route yapılandırması
Performance Optimization - Performance optimizasyonu

Best Practices

1. Data loading patterns kullanın
2. Error boundaries implement edin
3. TypeScript support'u kullanın
4. Performance optimize edin
5. Modern API features'ları kullanın

Ne Zaman Alternative Route Tanımlama Kullanın

Data loading gerektiğinde
Advanced error handling gerektiğinde
Modern API features istediğinizde
TypeScript support gerektiğinde
Performance optimization gerektiğinde`,
      codeExamples: [],
      relatedProjects: ["modern-routing", "data-router"],
      resources: [
        {
          id: "alternative-routing-docs",
          title: "React Router - Alternative Routing Dokümantasyonu",
          url: "https://reactrouter.com/en/main/routers/create-browser-router",
          type: "documentation",
        },
        {
          id: "alternative-routing-guide",
          title: "Alternative Routing Kılavuzu",
          url: "https://reactrouter.com/en/main/routers/create-browser-router",
          type: "tutorial",
        },
        {
          id: "alternative-routing-patterns",
          title: "Alternative Routing Desenleri",
          url: "https://reactrouter.com/en/main/routers/create-browser-router",
          type: "article",
        },
      ],
    },
    {
      id: "link-navigation",
      title: "Link ile Sayfalar Arasında Gezinme",
      description: "React Router Link component ile navigation",
      content: `Link ile Sayfalar Arasında Gezinme

React Router Link component ile sayfalar arası navigation. Modern React geliştirmede Link component kullanımı ve en iyi uygulamaları öğrenin.

Link Component

Navigation - Client-side navigation, no page reload, history management, state preservation
Link vs Anchor - SPA navigation, performance benefits, state management, user experience

Günlük Hayattan Örnek

Bir blog uygulaması geliştirdiğinizi düşünün:

- Navigation Menu: Ana sayfa, hakkımızda, blog, iletişim linkleri
- Blog Post Links: Blog post listesinden detay sayfasına linkler
- Related Posts: İlgili blog post'larına linkler
- Category Links: Kategori sayfalarına linkler

Link Usage

1. Basic Link - to prop, path navigation, component rendering, click handling
2. Link Props - to property, replace option, state passing, className handling
3. Link Styling - CSS classes, inline styles, conditional styling, theme integration
4. Link Behavior - Default behavior, custom behavior, event handling, navigation control

Navigation Patterns

1. Internal Navigation - Route navigation, component switching, state preservation, history management
2. External Navigation - External URLs, new tab opening, download links, email links
3. Conditional Navigation - Authentication-based navigation, permission-based links, dynamic routing
4. Programmatic Navigation - JavaScript-based navigation, form submissions, event-driven navigation

Link Features

1. State Passing - Route state, component state, user data, navigation context
2. Replace Option - History replacement, back button behavior, navigation stack management
3. Active States - Current route highlighting, visual feedback, navigation indicators
4. Accessibility - Screen reader support, keyboard navigation, focus management, semantic HTML

Modern React Geliştirmede

Link Component - Link component
Navigation Management - Navigation yönetimi
State Preservation - State preservation
Performance Optimization - Performance optimizasyonu
Accessibility - Accessibility

Best Practices

1. Semantic HTML kullanın
2. Accessibility support ekleyin
3. Performance optimize edin
4. State management dikkate alın
5. User experience iyileştirin

Ne Zaman Link Component Kullanın

Internal navigation gerektiğinde
SPA navigation yaparken
State preservation gerektiğinde
Performance optimization gerektiğinde
User experience iyileştirmek istediğinizde`,
      codeExamples: [],
      relatedProjects: ["link-navigation", "spa-navigation"],
      resources: [
        {
          id: "link-navigation-docs",
          title: "React Router - Link Navigation Dokümantasyonu",
          url: "https://reactrouter.com/en/main/components/link",
          type: "documentation",
        },
        {
          id: "link-navigation-guide",
          title: "Link Navigation Kılavuzu",
          url: "https://reactrouter.com/en/main/components/link",
          type: "tutorial",
        },
        {
          id: "link-navigation-patterns",
          title: "Link Navigation Desenleri",
          url: "https://reactrouter.com/en/main/components/link",
          type: "article",
        },
      ],
    },
    {
      id: "layouts-nested-routes",
      title: "Layouts ve Nested Routes",
      description: "Layout component'ler ve nested routing yapısı",
      content: `Layouts ve Nested Routes

Layout component'ler ve nested routing yapısını öğrenelim. Modern React geliştirmede layouts ve nested routes kullanımı ve en iyi uygulamaları öğrenin.

Nested Routing

Route Hierarchy - Parent-child routes, shared layouts, nested components, URL structure
Layout Components - Shared UI elements, header/footer, sidebar navigation, content areas

Günlük Hayattan Örnek

Bir e-ticaret uygulaması geliştirdiğinizi düşünün:

- App Layout: Ana layout, header, footer, navigation menu
- Product Layout: Ürün sayfaları layout'u, breadcrumb, product navigation
- User Layout: Kullanıcı paneli layout'u, user menu, account navigation
- Admin Layout: Admin paneli layout'u, admin menu, management tools

Implementation

1. Outlet Component - Child route rendering, layout integration, content projection, dynamic rendering
2. Route Nesting - Route hierarchy, path inheritance, component composition, layout sharing
3. Layout Integration - Layout component integration, shared UI elements, consistent structure
4. Content Projection - Dynamic content rendering, conditional rendering, context-aware UI

Layout Patterns

1. App Layout - Main application layout, global navigation, shared components, consistent structure
2. Feature Layouts - Feature-specific layouts, specialized navigation, context-aware UI, modular design
3. Page Layouts - Page-specific layouts, content organization, responsive design, user experience
4. Nested Layouts - Hierarchical layouts, layout composition, shared elements, modular architecture

Layout Features

1. Shared Components - Header, footer, navigation, sidebar, common UI elements
2. Context Awareness - Route-based context, user context, feature context, dynamic behavior
3. Responsive Design - Mobile-first design, breakpoint management, adaptive layouts, user experience
4. State Management - Layout state, navigation state, user preferences, theme management

Modern React Geliştirmede

Nested Routing - Nested routing
Layout Components - Layout component'ler
Route Hierarchy - Route hierarchy
Component Composition - Component composition
Performance Optimization - Performance optimizasyonu

Best Practices

1. Reusable layouts oluşturun
2. Component composition kullanın
3. Performance optimize edin
4. Accessibility support ekleyin
5. Responsive design uygulayın

Ne Zaman Layouts ve Nested Routes Kullanın

Complex application structure gerektiğinde
Shared UI elements gerektiğinde
Hierarchical navigation gerektiğinde
Modular architecture istediğinizde
Consistent user experience gerektiğinde`,
      codeExamples: [],
      relatedProjects: ["nested-routing", "layout-components"],
      resources: [
        {
          id: "nested-routes-docs",
          title: "React Router - Nested Routes Dokümantasyonu",
          url: "https://reactrouter.com/en/main/start/tutorial#nested-routes",
          type: "documentation",
        },
        {
          id: "nested-routes-guide",
          title: "Nested Routes Kılavuzu",
          url: "https://reactrouter.com/en/main/start/tutorial#nested-routes",
          type: "tutorial",
        },
        {
          id: "nested-routes-patterns",
          title: "Nested Routes Desenleri",
          url: "https://reactrouter.com/en/main/start/tutorial#nested-routes",
          type: "article",
        },
      ],
    },
    {
      id: "error-element",
      title: "errorElement ile Hata Sayfalarını Gösterme",
      description: "React Router error boundaries ve hata yönetimi",
      content: `errorElement ile Hata Sayfalarını Gösterme

React Router error boundaries ile hata sayfalarını nasıl yöneteceğimizi öğrenelim. Modern React geliştirmede error handling ve en iyi uygulamaları öğrenin.

Error Handling

errorElement - Route-level error boundaries, error component rendering, error information access, user-friendly errors
Error Boundaries - Component error catching, error UI rendering, error recovery, development vs production

Günlük Hayattan Örnek

Bir e-ticaret uygulaması geliştirdiğinizi düşünün:

- 404 Error: Sayfa bulunamadı hatası, ürün bulunamadı, kategori bulunamadı
- Network Error: API bağlantı hatası, server error, timeout error
- Component Error: JavaScript error, component crash, rendering error
- Data Error: Veri yükleme hatası, format error, validation error

Implementation

1. Error Routes - errorElement prop, error component, error information, recovery mechanisms
2. Error Components - User-friendly messages, error details, navigation options, recovery actions
3. Error Boundaries - Route-level error handling, component error catching, error recovery
4. Error Recovery - Retry mechanisms, fallback UI, user guidance, error reporting

Error Types

1. Route Errors - Route not found, component errors, data loading errors, navigation errors
2. Application Errors - JavaScript errors, network errors, API errors, runtime errors
3. User Errors - Invalid input, permission errors, authentication errors, validation errors
4. System Errors - Server errors, database errors, external service errors, infrastructure errors

Error Features

1. Error Information - Error details, stack traces, error context, user context
2. Recovery Options - Retry buttons, fallback actions, alternative navigation, help resources
3. User Feedback - Clear error messages, helpful suggestions, contact information, support links
4. Error Logging - Error tracking, user feedback, debug information, performance monitoring

Modern React Geliştirmede

Error Handling - Error handling
Error Boundaries - Error boundaries
User Experience - Kullanıcı deneyimi
Error Recovery - Error recovery
Error Logging - Error logging

Best Practices

1. Clear error messages kullanın
2. Recovery options sağlayın
3. User-friendly UI tasarlayın
4. Error logging implement edin
5. Performance monitoring ekleyin

Ne Zaman Error Handling Kullanın

Route errors handle etmek gerektiğinde
Component errors catch etmek gerektiğinde
User experience iyileştirmek istediğinizde
Error recovery mechanisms gerektiğinde
Production error handling gerektiğinde`,
      codeExamples: [],
      relatedProjects: ["error-handling", "error-boundaries"],
      resources: [
        {
          id: "error-element-docs",
          title: "React Router - Error Element Dokümantasyonu",
          url: "https://reactrouter.com/en/main/route/error-element",
          type: "documentation",
        },
        {
          id: "error-element-guide",
          title: "Error Element Kılavuzu",
          url: "https://reactrouter.com/en/main/route/error-element",
          type: "tutorial",
        },
        {
          id: "error-element-patterns",
          title: "Error Element Desenleri",
          url: "https://reactrouter.com/en/main/route/error-element",
          type: "article",
        },
      ],
    },
    {
      id: "navlink-usage",
      title: "NavLink ile Çalışmak",
      description: "NavLink component ile active navigation states",
      content: `NavLink ile Çalışmak

NavLink component ile active navigation states nasıl yönetilir? Modern React geliştirmede NavLink kullanımı ve en iyi uygulamaları öğrenin.

NavLink Component

Active States - Current route highlighting, visual feedback, navigation indicators, user orientation
NavLink vs Link - Active state support, styling capabilities, navigation enhancement, user experience

Günlük Hayattan Örnek

Bir blog uygulaması geliştirdiğinizi düşünün:

- Navigation Menu: Ana sayfa, hakkımızda, blog, iletişim linkleri
- Active State: Mevcut sayfa vurgulanması, visual feedback, user orientation
- Breadcrumb: Sayfa hiyerarşisi, navigation path, current location
- Sidebar Navigation: Kategori linkleri, active category highlighting

Implementation

1. Basic NavLink - to prop, active styling, className function, style function
2. Active Styling - CSS classes, inline styles, conditional styling, dynamic classes
3. Styling Options - Active class names, conditional classes, CSS modules, styled components
4. Dynamic Styling - Dynamic styles, JavaScript objects, conditional styling, theme integration

Active State Features

1. Visual Feedback - Clear active states, consistent styling, accessibility support, user guidance
2. Styling Capabilities - CSS classes, inline styles, conditional styling, theme integration
3. Navigation Enhancement - User orientation, navigation indicators, visual hierarchy, user experience
4. Accessibility - Screen reader support, keyboard navigation, focus management, semantic HTML

Styling Options

1. CSS Classes - Active class names, conditional classes, CSS modules, styled components
2. Inline Styles - Dynamic styles, JavaScript objects, conditional styling, theme integration
3. Conditional Styling - Route-based styling, user-based styling, theme-based styling, state-based styling
4. Theme Integration - Theme colors, theme spacing, theme typography, theme components

Modern React Geliştirmede

NavLink Component - NavLink component
Active States - Active states
Visual Feedback - Visual feedback
Navigation Enhancement - Navigation enhancement
Accessibility - Accessibility

Best Practices

1. Clear active states kullanın
2. Consistent styling uygulayın
3. Accessibility support ekleyin
4. Performance optimize edin
5. User experience iyileştirin

Ne Zaman NavLink Kullanın

Active navigation states gerektiğinde
Visual feedback gerektiğinde
Navigation enhancement yaparken
User orientation gerektiğinde
Consistent navigation design istediğinizde`,
      codeExamples: [],
      relatedProjects: ["navlink-styling", "active-navigation"],
      resources: [
        {
          id: "navlink-docs",
          title: "React Router - NavLink Dokümantasyonu",
          url: "https://reactrouter.com/en/main/components/nav-link",
          type: "documentation",
        },
        {
          id: "navlink-guide",
          title: "NavLink Kılavuzu",
          url: "https://reactrouter.com/en/main/components/nav-link",
          type: "tutorial",
        },
        {
          id: "navlink-patterns",
          title: "NavLink Desenleri",
          url: "https://reactrouter.com/en/main/components/nav-link",
          type: "article",
        },
      ],
    },
    {
      id: "use-navigate-hook",
      title: "useNavigate Hook Kullanımı",
      description: "Programmatic navigation ile useNavigate hook",
      content: `useNavigate Hook Kullanımı

Programmatic navigation için useNavigate hook kullanımı. Modern React geliştirmede useNavigate hook kullanımı ve en iyi uygulamaları öğrenin.

useNavigate Hook

Programmatic Navigation - JavaScript ile navigation, conditional navigation, form submissions, event handlers
Navigation Control - Route changes, history manipulation, state passing, navigation options

Günlük Hayattan Örnek

Bir e-ticaret uygulaması geliştirdiğinizi düşünün:

- Form Submission: Ürün ekleme formu, success redirect, error handling
- Authentication: Login formu, success redirect, error handling
- Shopping Cart: Sepete ekleme, checkout redirect, payment redirect
- User Profile: Profile update, success redirect, error handling

Implementation

1. Basic Navigation - navigate function, path navigation, replace option, state passing
2. Navigation Options - Replace vs push, state data, relative navigation, delta navigation
3. Conditional Navigation - Authentication checks, permission validation, feature flags, user flow
4. Form Handling - Form submissions, success redirects, error handling, validation flow

Navigation Features

1. Route Changes - Path navigation, route switching, component rendering, URL updates
2. History Manipulation - Back/forward navigation, history stack management, browser history
3. State Passing - Route state, component state, user data, navigation context
4. Navigation Options - Replace vs push, state data, relative navigation, delta navigation

Use Cases

1. Form Handling - Form submissions, success redirects, error handling, validation flow
2. Conditional Navigation - Authentication checks, permission validation, feature flags, user flow
3. Event Handling - Click events, user interactions, conditional logic, dynamic navigation
4. State Management - State-based navigation, user preferences, application state, navigation state

Modern React Geliştirmede

useNavigate Hook - useNavigate hook
Programmatic Navigation - Programmatic navigation
Navigation Control - Navigation control
State Management - State management
User Experience - Kullanıcı deneyimi

Best Practices

1. Appropriate timing kullanın
2. User feedback sağlayın
3. Loading states ekleyin
4. Error handling implement edin
5. Accessibility support ekleyin

Ne Zaman useNavigate Hook Kullanın

Programmatic navigation gerektiğinde
Form submissions yaparken
Conditional navigation gerektiğinde
Event handling yaparken
State-based navigation gerektiğinde`,
      codeExamples: [],
      relatedProjects: ["programmatic-navigation", "form-navigation"],
      resources: [
        {
          id: "use-navigate-docs",
          title: "React Router - useNavigate Dokümantasyonu",
          url: "https://reactrouter.com/en/main/hooks/use-navigate",
          type: "documentation",
        },
        {
          id: "use-navigate-guide",
          title: "useNavigate Kılavuzu",
          url: "https://reactrouter.com/en/main/hooks/use-navigate",
          type: "tutorial",
        },
        {
          id: "use-navigate-patterns",
          title: "useNavigate Desenleri",
          url: "https://reactrouter.com/en/main/hooks/use-navigate",
          type: "article",
        },
      ],
    },
    {
      id: "dynamic-routes",
      title: "Dinamik Route İşlemleri",
      description: "URL parametreleri ve dinamik routing",
      content: `Dinamik Route İşlemleri

URL parametreleri ve dinamik routing nasıl implement edilir? Modern React geliştirmede dynamic routing ve en iyi uygulamaları öğrenin.

Dynamic Routing

URL Parameters - Path parameters, query parameters, route parameters, dynamic segments
Parameter Access - useParams hook, useSearchParams hook, parameter extraction, type conversion

Günlük Hayattan Örnek

Bir e-ticaret uygulaması geliştirdiğinizi düşünün:

- Product Detail: /product/:id route, product ID parameter, dynamic content
- User Profile: /user/:username route, username parameter, user data
- Category Page: /category/:name route, category name parameter, filtered products
- Search Results: /search?q=keyword route, search query parameter, search results

Implementation

1. Path Parameters - Route definition, parameter syntax, parameter access, validation
2. Query Parameters - URL search params, parameter parsing, state management, URL synchronization
3. Parameter Access - useParams hook, useSearchParams hook, parameter extraction, type conversion
4. Parameter Validation - Type checking, range validation, format validation, error handling

Use Cases

1. Resource Details - Product pages, user profiles, article pages, dynamic content
2. Search and Filtering - Search queries, filter parameters, pagination, sorting options
3. Data Loading - Parameter-based loading, dynamic data fetching, conditional rendering, error handling
4. User Experience - Dynamic content, personalized experience, context-aware UI, interactive features

Parameter Features

1. Path Parameters - Route segments, dynamic values, parameter extraction, type conversion
2. Query Parameters - URL search params, parameter parsing, state management, URL synchronization
3. Parameter Validation - Type checking, range validation, format validation, error handling
4. Parameter Optimization - Performance optimization, caching strategies, loading optimization, memory management

Modern React Geliştirmede

Dynamic Routing - Dynamic routing
URL Parameters - URL parametreleri
Parameter Access - Parameter access
Data Loading - Data loading
Performance Optimization - Performance optimizasyonu

Best Practices

1. Parameter validation yapın
2. SEO-friendly URLs kullanın
3. Performance optimize edin
4. Error handling ekleyin
5. User experience iyileştirin

Ne Zaman Dynamic Routing Kullanın

Dynamic content gerektiğinde
URL-based state management gerektiğinde
Search ve filtering gerektiğinde
Resource detail pages gerektiğinde
User-specific content gerektiğinde`,
      codeExamples: [],
      relatedProjects: ["dynamic-routing", "url-parameters"],
      resources: [
        {
          id: "dynamic-routes-docs",
          title: "React Router - Dynamic Routes Dokümantasyonu",
          url: "https://reactrouter.com/en/main/route/route#dynamic-segments",
          type: "documentation",
        },
        {
          id: "dynamic-routes-guide",
          title: "Dynamic Routes Kılavuzu",
          url: "https://reactrouter.com/en/main/route/route#dynamic-segments",
          type: "tutorial",
        },
        {
          id: "dynamic-routes-patterns",
          title: "Dynamic Routes Desenleri",
          url: "https://reactrouter.com/en/main/route/route#dynamic-segments",
          type: "article",
        },
      ],
    },
    {
      id: "absolute-relative-paths",
      title: "Absolute ve Relative Path",
      description: "Mutlak ve göreceli path kullanımı",
      content: `Absolute ve Relative Path

Mutlak ve göreceli path kullanımını öğrenelim. Modern React geliştirmede path types ve en iyi uygulamaları öğrenin.

Path Types

Absolute Paths - Root-based paths, full path specification, independent navigation, clear structure
Relative Paths - Context-based paths, parent-relative navigation, flexible routing, nested structures

Günlük Hayattan Örnek

Bir e-ticaret uygulaması geliştirdiğinizi düşünün:

- Absolute Paths: /products, /about, /contact, /cart (ana navigation)
- Relative Paths: ../products, ./details, ../../category (nested navigation)
- Product Navigation: /products/:id, /products/:id/reviews, /products/:id/similar
- Category Navigation: /category/:name, /category/:name/subcategory

Implementation

1. Absolute Navigation - Leading slash, full path specification, root-based navigation, direct routing
2. Relative Navigation - No leading slash, context-aware navigation, parent-relative paths, flexible routing
3. Path Resolution - Path resolution logic, context awareness, navigation hierarchy, route matching
4. Path Validation - Path validation, error handling, fallback routes, user feedback

Use Cases

1. Absolute Paths - Main navigation, direct links, external references, fixed routes
2. Relative Paths - Nested navigation, context-aware links, flexible structures, reusable components
3. Dynamic Paths - Parameter-based paths, conditional paths, user-specific paths, feature-based paths
4. Navigation Patterns - Breadcrumb navigation, hierarchical navigation, contextual navigation, user flow

Path Features

1. Path Resolution - Path resolution logic, context awareness, navigation hierarchy, route matching
2. Path Validation - Path validation, error handling, fallback routes, user feedback
3. Path Optimization - Performance optimization, caching strategies, loading optimization, memory management
4. Path Security - Path security, access control, permission validation, user authentication

Modern React Geliştirmede

Path Types - Path types
Navigation Logic - Navigation logic
Path Resolution - Path resolution
Performance Optimization - Performance optimizasyonu
User Experience - Kullanıcı deneyimi

Best Practices

1. Consistent naming kullanın
2. Clear structure oluşturun
3. Context awareness dikkate alın
4. Performance optimize edin
5. User experience iyileştirin

Ne Zaman Absolute/Relative Path Kullanın

Main navigation gerektiğinde
Nested navigation gerektiğinde
Context-aware navigation gerektiğinde
Flexible routing gerektiğinde
Reusable components gerektiğinde`,
      codeExamples: [],
      relatedProjects: ["path-navigation", "url-structure"],
      resources: [
        {
          id: "absolute-relative-docs",
          title: "React Router - Absolute ve Relative Path Dokümantasyonu",
          url: "https://reactrouter.com/en/main/start/concepts#relative-links",
          type: "documentation",
        },
        {
          id: "absolute-relative-guide",
          title: "Absolute ve Relative Path Kılavuzu",
          url: "https://reactrouter.com/en/main/start/concepts#relative-links",
          type: "tutorial",
        },
        {
          id: "absolute-relative-patterns",
          title: "Absolute ve Relative Path Desenleri",
          url: "https://reactrouter.com/en/main/start/concepts#relative-links",
          type: "article",
        },
      ],
    },
    {
      id: "react-router-components",
      title: "React Router Components",
      description: "React Router component'lerinin genel özeti",
      content: `React Router Components

React Router component'lerinin genel özetini çıkaralım. Modern React geliştirmede React Router components ve en iyi uygulamaları öğrenin.

Core Components

Router Components - BrowserRouter, HashRouter, MemoryRouter, StaticRouter
Navigation Components - Link, NavLink, Navigate, Outlet

Günlük Hayattan Örnek

Bir e-ticaret uygulaması geliştirdiğinizi düşünün:

- BrowserRouter: Ana router, HTML5 history API, clean URLs, production ready
- Link Components: Navigation menu, product links, category links, user links
- NavLink Components: Active navigation states, current page highlighting, user orientation
- Outlet Component: Layout integration, nested routes, content projection, dynamic rendering

Component Overview

1. BrowserRouter - HTML5 history API, clean URLs, server configuration, production ready
2. Route - Route definition, component rendering, path matching, parameter extraction
3. Link/NavLink - Client-side navigation, active states, accessibility support, performance optimization
4. Outlet - Nested route rendering, layout integration, content projection, dynamic rendering

Hook Summary

1. Navigation Hooks - useNavigate, useLocation, useParams, useSearchParams
2. State Hooks - useOutletContext, useNavigation, useMatches, useResolvedPath
3. Utility Hooks - useRouteError, useLoaderData, useActionData, useFetcher
4. Advanced Hooks - useRevalidator, useRouteLoaderData, useMatches, useResolvedPath

Component Features

1. Router Components - Router configuration, history management, URL handling, browser integration
2. Navigation Components - Client-side navigation, active states, accessibility support, performance optimization
3. Layout Components - Layout integration, nested routes, content projection, dynamic rendering
4. Utility Components - Error boundaries, loading states, fallback components, error handling

Modern React Geliştirmede

React Router Components - React Router component'ler
Component Selection - Component selection
Integration Patterns - Integration patterns
Performance Optimization - Performance optimizasyonu
Accessibility - Accessibility

Best Practices

1. Appropriate components seçin
2. Performance considerations dikkate alın
3. Accessibility support ekleyin
4. Maintainable code yazın
5. Error handling implement edin

Ne Zaman React Router Components Kullanın

Multi-page application geliştirirken
Client-side routing gerektiğinde
Navigation management yaparken
Layout integration gerektiğinde
Dynamic routing gerektiğinde`,
      codeExamples: [],
      relatedProjects: ["router-components", "component-overview"],
      resources: [
        {
          id: "router-components-docs",
          title: "React Router - Components Dokümantasyonu",
          url: "https://reactrouter.com/en/main/components",
          type: "documentation",
        },
        {
          id: "router-components-guide",
          title: "React Router Components Kılavuzu",
          url: "https://reactrouter.com/en/main/components",
          type: "tutorial",
        },
        {
          id: "router-components-patterns",
          title: "React Router Components Desenleri",
          url: "https://reactrouter.com/en/main/components",
          type: "article",
        },
      ],
    },
  ],
};
