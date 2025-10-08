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
    id: "react-basics-quiz",
    title: "React Temelleri Quiz",
    description: "React.js temel kavramlarını test edin",
    duration: 10,
    difficulty: "easy",
    topic: "React Temelleri",
    questions: [
      {
        id: "q1",
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
        id: "q2",
        question: "JSX nedir?",
        options: [
          "JavaScript XML",
          "Java Script eXtension",
          "JSON XML",
          "JavaScript eXtension",
        ],
        correctAnswer: 0,
        explanation:
          "JSX, JavaScript XML'in kısaltmasıdır ve React'te component'leri yazmak için kullanılır.",
        difficulty: "easy",
        topic: "JSX",
      },
      {
        id: "q3",
        question: "React component'lerinde hangi fonksiyon kullanılır?",
        options: ["render()", "display()", "show()", "print()"],
        correctAnswer: 0,
        explanation:
          "React component'lerinde render() fonksiyonu kullanılır. Bu fonksiyon JSX döndürür.",
        difficulty: "easy",
        topic: "Componentler",
      },
      {
        id: "q4",
        question: "Props nedir?",
        options: [
          "Component'in içindeki veriler",
          "Component'ler arası veri aktarımı",
          "State'in başka adı",
          "Event handler'lar",
        ],
        correctAnswer: 1,
        explanation:
          "Props, component'ler arası veri aktarımını sağlayan sabit verilerdir.",
        difficulty: "medium",
        topic: "Props",
      },
      {
        id: "q5",
        question: "State nedir?",
        options: [
          "Component'in sabit verileri",
          "Component'in değişebilen verileri",
          "Props'un başka adı",
          "Event handler'lar",
        ],
        correctAnswer: 1,
        explanation:
          "State, component'in değişebilen verilerini tutan JavaScript objesidir.",
        difficulty: "medium",
        topic: "State",
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
    id: "props-state-quiz",
    title: "Props ve State Quiz",
    description: "Props ve State kavramlarını derinlemesine test edin",
    duration: 15,
    difficulty: "medium",
    topic: "Props ve State",
    questions: [
      {
        id: "q1",
        question: "Props ve State arasındaki fark nedir?",
        options: [
          "Props değiştirilebilir, State değiştirilemez",
          "Props değiştirilemez, State değiştirilebilir",
          "İkisi de aynıdır",
          "İkisi de değiştirilemez",
        ],
        correctAnswer: 1,
        explanation:
          "Props read-only'dir ve değiştirilemez, State ise component içinde değiştirilebilir.",
        difficulty: "medium",
        topic: "Props ve State",
      },
      {
        id: "q2",
        question: "Props drilling nedir?",
        options: [
          "Props'ları hızlı geçirme",
          "Props'ları birçok seviyeden geçirme",
          "Props'ları silme",
          "Props'ları kopyalama",
        ],
        correctAnswer: 1,
        explanation:
          "Props drilling, props'ların birçok component seviyesinden geçirilmesi durumudur.",
        difficulty: "hard",
        topic: "Props",
      },
      {
        id: "q3",
        question: "State lifting nedir?",
        options: [
          "State'i yukarı taşıma",
          "State'i aşağı taşıma",
          "State'i silme",
          "State'i kopyalama",
        ],
        correctAnswer: 0,
        explanation:
          "State lifting, state'i en yakın ortak parent component'e taşıma işlemidir.",
        difficulty: "hard",
        topic: "State",
      },
      {
        id: "q4",
        question: "PropTypes ne işe yarar?",
        options: [
          "Props'ları günceller",
          "Props'ların tipini kontrol eder",
          "Props'ları siler",
          "Props'ları kopyalar",
        ],
        correctAnswer: 1,
        explanation:
          "PropTypes, props'ların tipini kontrol etmek ve runtime'da hata yakalamak için kullanılır.",
        difficulty: "medium",
        topic: "Props",
      },
      {
        id: "q5",
        question: "Default props nasıl tanımlanır?",
        options: [
          "Component.defaultProps = {}",
          "Component.defaults = {}",
          "Component.props = {}",
          "Component.initial = {}",
        ],
        correctAnswer: 0,
        explanation:
          "Default props, Component.defaultProps = {} şeklinde tanımlanır.",
        difficulty: "medium",
        topic: "Props",
      },
    ],
  },
];

export default quizData;
