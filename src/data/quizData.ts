export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
  topic: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
  duration: number;
  difficulty: "easy" | "medium" | "hard";
  topic: string;
}

export const quizData: Quiz[] = [
  {
    id: "javascript-basics-quiz",
    title: "JavaScript Temelleri Quiz",
    description: "React için gerekli JavaScript temel kavramlarını test edin",
    duration: 15,
    difficulty: "easy",
    topic: "JavaScript Temelleri",
    questions: [
      {
        id: "js-q1",
        question: "JavaScript'te var, let ve const arasındaki fark nedir?",
        options: [
          "Hepsi aynıdır",
          "var function-scoped, let/const block-scoped",
          "let/const function-scoped, var block-scoped",
          "Sadece const farklıdır",
        ],
        correctAnswer: 1,
        explanation:
          "var function-scoped, let ve const ise block-scoped'dur. const ayrıca değiştirilemez.",
        difficulty: "medium",
        topic: "JavaScript Temelleri",
      },
      {
        id: "js-q2",
        question: "Arrow function ile normal function arasındaki fark nedir?",
        options: [
          "Arrow function'da this yoktur",
          "Normal function'da this yoktur",
          "Hepsi aynıdır",
          "Sadece syntax farkı vardır",
        ],
        correctAnswer: 0,
        explanation:
          "Arrow function'da kendi this'i yoktur, lexical this kullanır.",
        difficulty: "medium",
        topic: "Arrow Functions",
      },
      {
        id: "js-q3",
        question: "Destructuring nedir?",
        options: [
          "Obje ve array'lerden değer çıkarma",
          "String'leri parçalama",
          "Function'ları bölme",
          "Class'ları ayırma",
        ],
        correctAnswer: 0,
        explanation:
          "Destructuring, obje ve array'lerden değerleri çıkarıp değişkenlere atama işlemidir.",
        difficulty: "easy",
        topic: "Destructuring",
      },
      {
        id: "js-q4",
        question: "Spread operator (...) ne işe yarar?",
        options: [
          "Array'leri genişletir",
          "Objeleri kopyalar",
          "Function parametrelerini genişletir",
          "Hepsi doğru",
        ],
        correctAnswer: 3,
        explanation:
          "Spread operator array'leri genişletir, objeleri kopyalar ve function parametrelerini genişletir.",
        difficulty: "medium",
        topic: "Spread Operator",
      },
      {
        id: "js-q5",
        question: "Template literals nasıl kullanılır?",
        options: [
          "`string ${variable}`",
          '"string ${variable}"',
          "'string ${variable}'",
          "Hepsi doğru",
        ],
        correctAnswer: 0,
        explanation:
          "Template literals backtick (`) ile kullanılır ve ${} ile değişkenler eklenir.",
        difficulty: "easy",
        topic: "Template Literals",
      },
    ],
  },
  {
    id: "react-basics-quiz",
    title: "React Temelleri Quiz",
    description: "React.js temel kavramlarını test edin",
    duration: 15,
    difficulty: "easy",
    topic: "React Temelleri",
    questions: [
      {
        id: "react-q1",
        question: "React nedir?",
        options: [
          "Bir JavaScript framework'ü",
          "Bir JavaScript kütüphanesi",
          "Bir programlama dili",
          "Bir veritabanı sistemi",
        ],
        correctAnswer: 1,
        explanation:
          "React, Facebook tarafından geliştirilen bir JavaScript kütüphanesidir. UI oluşturmak için kullanılır.",
        difficulty: "easy",
        topic: "React Temelleri",
      },
      {
        id: "react-q2",
        question: "Virtual DOM nedir?",
        options: [
          "Gerçek DOM'un kopyası",
          "Memory'de tutulan DOM temsili",
          "Browser'ın DOM'u",
          "Server'daki DOM",
        ],
        correctAnswer: 1,
        explanation:
          "Virtual DOM, gerçek DOM'un memory'de tutulan JavaScript temsilidir.",
        difficulty: "medium",
        topic: "Virtual DOM",
      },
      {
        id: "react-q3",
        question: "React component'lerinde hangi fonksiyon kullanılır?",
        options: ["render()", "display()", "show()", "print()"],
        correctAnswer: 0,
        explanation:
          "React component'lerinde render() fonksiyonu kullanılır. Bu fonksiyon JSX döndürür.",
        difficulty: "easy",
        topic: "Componentler",
      },
      {
        id: "react-q4",
        question: "React'te key prop'u neden önemlidir?",
        options: [
          "Performance için",
          "Liste elemanlarını tanımlamak için",
          "Re-render optimizasyonu için",
          "Hepsi doğru",
        ],
        correctAnswer: 3,
        explanation:
          "Key prop'u liste elemanlarını tanımlar, performance sağlar ve re-render optimizasyonu yapar.",
        difficulty: "medium",
        topic: "Keys",
      },
      {
        id: "react-q5",
        question: "React'te conditional rendering nasıl yapılır?",
        options: [
          "if-else ile",
          "Ternary operator ile",
          "Logical AND ile",
          "Hepsi doğru",
        ],
        correctAnswer: 3,
        explanation:
          "React'te conditional rendering if-else, ternary operator ve logical AND ile yapılabilir.",
        difficulty: "medium",
        topic: "Conditional Rendering",
      },
    ],
  },
  {
    id: "jsx-quiz",
    title: "JSX ve Componentler Quiz",
    description: "JSX syntax ve component yapısını test edin",
    duration: 15,
    difficulty: "medium",
    topic: "JSX",
    questions: [
      {
        id: "q1",
        question: "JSX'te className kullanımı doğru mu?",
        options: [
          "Evet, class yerine className kullanılır",
          "Hayır, class kullanılır",
          "İkisi de kullanılabilir",
          "Hiçbiri kullanılmaz",
        ],
        correctAnswer: 0,
        explanation:
          "JSX'te HTML'deki class yerine className kullanılır çünkü class JavaScript'te reserved keyword'dür.",
        difficulty: "easy",
        topic: "JSX",
      },
      {
        id: "q2",
        question: "JSX'te JavaScript değişkeni nasıl kullanılır?",
        options: ["{{variable}}", "{variable}", "${variable}", "{{variable}}"],
        correctAnswer: 1,
        explanation:
          "JSX'te JavaScript değişkenlerini kullanmak için tek süslü parantez {} kullanılır.",
        difficulty: "easy",
        topic: "JSX",
      },
      {
        id: "q3",
        question: "React component'i nasıl tanımlanır?",
        options: [
          "function ComponentName() { return <div>Hello</div>; }",
          "class ComponentName { render() { return <div>Hello</div>; } }",
          "const ComponentName = () => <div>Hello</div>;",
          "Hepsi doğru",
        ],
        correctAnswer: 3,
        explanation:
          "React component'leri function, class veya arrow function olarak tanımlanabilir.",
        difficulty: "medium",
        topic: "Componentler",
      },
      {
        id: "q4",
        question: "JSX'te hangi etiket kapatılmalıdır?",
        options: ["Sadece div", "Sadece span", "Tüm etiketler", "Hiçbiri"],
        correctAnswer: 2,
        explanation:
          "JSX'te tüm etiketler kapatılmalıdır. Self-closing etiketler için <tag /> kullanılır.",
        difficulty: "easy",
        topic: "JSX",
      },
      {
        id: "q5",
        question: "React Fragment nasıl kullanılır?",
        options: [
          "<Fragment>...</Fragment>",
          "<>...</>",
          "React.Fragment",
          "Hepsi doğru",
        ],
        correctAnswer: 3,
        explanation:
          "React Fragment üç farklı şekilde kullanılabilir: <Fragment>, <>, veya React.Fragment.",
        difficulty: "medium",
        topic: "JSX",
      },
    ],
  },
  {
    id: "hooks-quiz",
    title: "React Hooks Quiz",
    description: "useState, useEffect ve diğer hooks'ları test edin",
    duration: 20,
    difficulty: "hard",
    topic: "Hooks",
    questions: [
      {
        id: "q1",
        question: "useState hook'u ne işe yarar?",
        options: [
          "Component'in state'ini yönetir",
          "Side effect'leri yönetir",
          "Component'i mount eder",
          "Props'ları günceller",
        ],
        correctAnswer: 0,
        explanation:
          "useState hook'u component'in state'ini yönetmek için kullanılır.",
        difficulty: "medium",
        topic: "useState",
      },
      {
        id: "q2",
        question: "useEffect hook'u ne zaman çalışır?",
        options: [
          "Sadece component mount olduğunda",
          "Her render'da",
          "Dependency array'e göre",
          "Hiçbir zaman",
        ],
        correctAnswer: 2,
        explanation:
          "useEffect hook'u dependency array'e göre çalışır. Boş array [] sadece mount'ta çalışır.",
        difficulty: "hard",
        topic: "useEffect",
      },
      {
        id: "q3",
        question: "useEffect'te cleanup function ne işe yarar?",
        options: [
          "Component'i temizler",
          "Memory leak'leri önler",
          "State'i sıfırlar",
          "Props'ları temizler",
        ],
        correctAnswer: 1,
        explanation:
          "useEffect'te cleanup function memory leak'leri önlemek için kullanılır.",
        difficulty: "hard",
        topic: "useEffect",
      },
      {
        id: "q4",
        question: "useState'te state güncellemesi nasıl yapılır?",
        options: [
          "setState(newValue)",
          "setState(prevState => newValue)",
          "İkisi de doğru",
          "Hiçbiri",
        ],
        correctAnswer: 2,
        explanation:
          "useState'te state güncellemesi hem doğrudan değer hem de function ile yapılabilir.",
        difficulty: "medium",
        topic: "useState",
      },
      {
        id: "q5",
        question: "Custom hook nedir?",
        options: [
          "React'in built-in hook'u",
          "Geliştiricinin yazdığı hook",
          "useState'in başka adı",
          "useEffect'in başka adı",
        ],
        correctAnswer: 1,
        explanation:
          'Custom hook, geliştiricinin kendi yazdığı ve "use" ile başlayan fonksiyondur.',
        difficulty: "hard",
        topic: "Custom Hooks",
      },
    ],
  },
  {
    id: "design-patterns-quiz",
    title: "Design Patterns Quiz",
    description: "React Design Pattern'larını test edin",
    duration: 20,
    difficulty: "hard",
    topic: "Design Patterns",
    questions: [
      {
        id: "dp-q1",
        question: "Higher-Order Component (HOC) nedir?",
        options: [
          "Bir component'i alıp yeni component döndüren fonksiyon",
          "React'in built-in component'i",
          "State yönetim aracı",
          "Event handler",
        ],
        correctAnswer: 0,
        explanation:
          "HOC, bir component'i alıp yeni bir component döndüren fonksiyondur.",
        difficulty: "hard",
        topic: "HOC",
      },
      {
        id: "dp-q2",
        question: "Render Props pattern'i ne işe yarar?",
        options: [
          "Component'in render fonksiyonunu prop olarak alır",
          "State'i yönetir",
          "Props'ları geçirir",
          "Event'leri handle eder",
        ],
        correctAnswer: 0,
        explanation:
          "Render Props pattern'i, component'in render fonksiyonunu prop olarak alır.",
        difficulty: "hard",
        topic: "Render Props",
      },
      {
        id: "dp-q3",
        question: "Compound Components pattern'i nedir?",
        options: [
          "Birbirleriyle iletişim kuran component grupları",
          "Tek bir component",
          "State yönetim aracı",
          "Event handler",
        ],
        correctAnswer: 0,
        explanation:
          "Compound Components, birbirleriyle iletişim kuran component gruplarıdır.",
        difficulty: "hard",
        topic: "Compound Components",
      },
      {
        id: "dp-q4",
        question: "Provider Pattern ne zaman kullanılır?",
        options: [
          "Global state yönetimi için",
          "Local state için",
          "Props geçirmek için",
          "Event handling için",
        ],
        correctAnswer: 0,
        explanation:
          "Provider Pattern, Context API ile global state yönetimi için kullanılır.",
        difficulty: "medium",
        topic: "Provider Pattern",
      },
      {
        id: "dp-q5",
        question: "Custom Hook'ların avantajı nedir?",
        options: [
          "Logic'i component'lerden ayırır",
          "State'i yönetir",
          "Props'ları geçirir",
          "Event'leri handle eder",
        ],
        correctAnswer: 0,
        explanation:
          "Custom Hook'lar, stateful logic'i component'lerden ayırır ve yeniden kullanılabilir hale getirir.",
        difficulty: "medium",
        topic: "Custom Hooks",
      },
    ],
  },
  {
    id: "advanced-react-quiz",
    title: "Advanced React Quiz",
    description: "İleri seviye React konularını test edin",
    duration: 25,
    difficulty: "hard",
    topic: "Advanced React",
    questions: [
      {
        id: "ar-q1",
        question: "React.memo() ne işe yarar?",
        options: [
          "Component'i memoize eder",
          "State'i yönetir",
          "Props'ları geçirir",
          "Event'leri handle eder",
        ],
        correctAnswer: 0,
        explanation:
          "React.memo(), component'i memoize ederek gereksiz re-render'ları önler.",
        difficulty: "hard",
        topic: "React.memo",
      },
      {
        id: "ar-q2",
        question: "useCallback hook'u ne zaman kullanılır?",
        options: [
          "Function'ları memoize etmek için",
          "State'i yönetmek için",
          "Props'ları geçirmek için",
          "Event'leri handle etmek için",
        ],
        correctAnswer: 0,
        explanation:
          "useCallback, function'ları memoize ederek gereksiz re-render'ları önler.",
        difficulty: "hard",
        topic: "useCallback",
      },
      {
        id: "ar-q3",
        question: "useMemo hook'u ne işe yarar?",
        options: [
          "Expensive computation'ları memoize eder",
          "State'i yönetir",
          "Props'ları geçirir",
          "Event'leri handle eder",
        ],
        correctAnswer: 0,
        explanation:
          "useMemo, expensive computation'ları memoize ederek performance'ı artırır.",
        difficulty: "hard",
        topic: "useMemo",
      },
      {
        id: "ar-q4",
        question: "Redux ne zaman kullanılır?",
        options: [
          "Karmaşık state yönetimi için",
          "Basit state için",
          "Props geçirmek için",
          "Event handling için",
        ],
        correctAnswer: 0,
        explanation:
          "Redux, karmaşık state yönetimi ve global state için kullanılır.",
        difficulty: "hard",
        topic: "Redux",
      },
      {
        id: "ar-q5",
        question: "React Router ne işe yarar?",
        options: [
          "SPA routing için",
          "State yönetimi için",
          "Props geçirmek için",
          "Event handling için",
        ],
        correctAnswer: 0,
        explanation:
          "React Router, Single Page Application'larda routing işlemleri için kullanılır.",
        difficulty: "medium",
        topic: "React Router",
      },
    ],
  },
  {
    id: "http-requests-quiz",
    title: "HTTP Requests Quiz",
    description: "React'te HTTP istekleri ve API kullanımını test edin",
    duration: 20,
    difficulty: "medium",
    topic: "HTTP Requests",
    questions: [
      {
        id: "http-q1",
        question: "React'te HTTP istekleri nasıl yapılır?",
        options: [
          "fetch() API ile",
          "axios kütüphanesi ile",
          "useEffect hook'u ile",
          "Hepsi doğru",
        ],
        correctAnswer: 3,
        explanation:
          "React'te HTTP istekleri fetch(), axios ve useEffect ile yapılabilir.",
        difficulty: "medium",
        topic: "HTTP Requests",
      },
      {
        id: "http-q2",
        question: "Loading state nasıl yönetilir?",
        options: [
          "useState ile boolean değer",
          "useEffect ile",
          "useContext ile",
          "Hepsi doğru",
        ],
        correctAnswer: 0,
        explanation:
          "Loading state genellikle useState ile boolean değer olarak yönetilir.",
        difficulty: "easy",
        topic: "Loading State",
      },
      {
        id: "http-q3",
        question: "Error handling nasıl yapılır?",
        options: [
          "try-catch ile",
          "useState ile error state",
          "Error boundary ile",
          "Hepsi doğru",
        ],
        correctAnswer: 3,
        explanation:
          "Error handling try-catch, useState ve Error boundary ile yapılabilir.",
        difficulty: "medium",
        topic: "Error Handling",
      },
      {
        id: "http-q4",
        question: "Async/await ne işe yarar?",
        options: [
          "Asenkron işlemleri senkron gibi yazar",
          "State'i yönetir",
          "Props'ları geçirir",
          "Event'leri handle eder",
        ],
        correctAnswer: 0,
        explanation:
          "Async/await, asenkron işlemleri senkron kod gibi yazmayı sağlar.",
        difficulty: "medium",
        topic: "Async/Await",
      },
      {
        id: "http-q5",
        question: "CORS nedir?",
        options: [
          "Cross-Origin Resource Sharing",
          "Cross-Origin Request Sharing",
          "Cross-Origin Response Sharing",
          "Cross-Origin Resource Request",
        ],
        correctAnswer: 0,
        explanation: "CORS, Cross-Origin Resource Sharing'in kısaltmasıdır.",
        difficulty: "hard",
        topic: "CORS",
      },
    ],
  },
  {
    id: "performance-quiz",
    title: "Performance Optimization Quiz",
    description: "React performance optimizasyon tekniklerini test edin",
    duration: 20,
    difficulty: "hard",
    topic: "Performance",
    questions: [
      {
        id: "perf-q1",
        question: "React'te performance sorunları neden olur?",
        options: [
          "Gereksiz re-render'lar",
          "Büyük component'ler",
          "Inefficient state updates",
          "Hepsi doğru",
        ],
        correctAnswer: 3,
        explanation:
          "Performance sorunları gereksiz re-render, büyük component ve inefficient state update'lerden olur.",
        difficulty: "hard",
        topic: "Performance Issues",
      },
      {
        id: "perf-q2",
        question: "Virtual DOM'un avantajı nedir?",
        options: [
          "Hızlı diffing algoritması",
          "Minimal DOM manipulation",
          "Batch updates",
          "Hepsi doğru",
        ],
        correctAnswer: 3,
        explanation:
          "Virtual DOM hızlı diffing, minimal DOM manipulation ve batch updates sağlar.",
        difficulty: "medium",
        topic: "Virtual DOM",
      },
      {
        id: "perf-q3",
        question: "Code splitting ne işe yarar?",
        options: [
          "Bundle boyutunu küçültür",
          "Lazy loading sağlar",
          "Initial load time'ı azaltır",
          "Hepsi doğru",
        ],
        correctAnswer: 3,
        explanation:
          "Code splitting bundle boyutunu küçültür, lazy loading sağlar ve initial load time'ı azaltır.",
        difficulty: "hard",
        topic: "Code Splitting",
      },
      {
        id: "perf-q4",
        question: "Lazy loading nasıl yapılır?",
        options: [
          "React.lazy() ile",
          "Dynamic import ile",
          "Suspense ile",
          "Hepsi doğru",
        ],
        correctAnswer: 3,
        explanation:
          "Lazy loading React.lazy(), dynamic import ve Suspense ile yapılır.",
        difficulty: "hard",
        topic: "Lazy Loading",
      },
      {
        id: "perf-q5",
        question: "Bundle analyzer ne işe yarar?",
        options: [
          "Bundle boyutunu analiz eder",
          "Unused code'ları bulur",
          "Optimization önerileri verir",
          "Hepsi doğru",
        ],
        correctAnswer: 3,
        explanation:
          "Bundle analyzer bundle boyutunu analiz eder, unused code bulur ve optimization önerileri verir.",
        difficulty: "hard",
        topic: "Bundle Analysis",
      },
    ],
  },
];

export default quizData;
