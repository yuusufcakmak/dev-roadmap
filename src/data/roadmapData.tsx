import { Level } from "../types/roadmap";

const roadmapData: Level[] = [
  {
    id: "react-101",
    name: "React Temelleri",
    order: 1,
    description: "React öğrenmeye başlamak için temel kavramlar",
    categories: [
      {
        id: "temel-kavramlar",
        name: "Temel Kavramlar",
        icon: "🎯",
        description: "React temel kavramları ve kurulum",
        topics: [
          {
            id: "react-nedir",
            title: "React Nedir?",
            description: "React kütüphanesinin temellerini öğrenin",
            duration: "2 saat",
            difficulty: "easy",
            content: `# React Nedir? 🚀

React, Facebook tarafından geliştirilen ve kullanıcı arayüzü oluşturmak için kullanılan bir JavaScript kütüphanesidir.

## 🎯 React'ın Avantajları

- **Component Tabanlı**: Yeniden kullanılabilir UI bileşenleri
- **Virtual DOM**: Performanslı DOM güncellemeleri
- **Tek Yönlü Veri Akışı**: Tahmin edilebilir state yönetimi
- **Zengin Ekosistem**: Geniş topluluk desteği

## 🔧 Temel Konseptler

### Component
React uygulamaları component'lerden oluşur. Her component bir UI parçasını temsil eder.

### JSX
JavaScript XML - HTML benzeri syntax ile JavaScript içinde UI yazabilirsiniz.

### Props
Component'ler arası veri geçişi için kullanılan parametreler.

### State
Component'in iç durumunu yöneten veri yapısı.`,
            codeExamples: [
              {
                id: "react-hello-world",
                title: "İlk React Component",
                code: `import React from 'react';

function HelloWorld() {
  return (
    <div>
      <h1>Merhaba React!</h1>
      <p>İlk React component'iniz hazır!</p>
    </div>
  );
}

export default HelloWorld;`,
                language: "jsx",
                description: "Basit bir React component örneği",
              },
            ],
            relatedProjects: ["hello-world-app"],
            resources: [
              {
                id: "react-official-docs",
                title: "React Resmi Dokümantasyonu",
                url: "https://tr.react.dev/",
                type: "documentation",
              },
            ],
          },
          {
            id: "jsx-syntax",
            title: "JSX Syntax",
            description: "JSX ile HTML benzeri syntax kullanımı",
            duration: "3 saat",
            difficulty: "easy",
            content: `# JSX Syntax 📝

JSX, JavaScript XML'in kısaltmasıdır ve React'te UI yazmak için kullanılan syntax'tır.

## 🎯 JSX Özellikleri

- HTML benzeri syntax
- JavaScript ifadeleri içerebilir
- Component'ler döndürür
- Babel ile JavaScript'e çevrilir

## 🔧 Temel Kullanım

### Basit JSX
\`\`\`jsx
const element = <h1>Merhaba, Dünya!</h1>;
\`\`\`

### JavaScript İfadeleri
\`\`\`jsx
const name = 'React';
const element = <h1>Merhaba, {name}!</h1>;
\`\`\`

### Attributes
\`\`\`jsx
const element = <div className="container" id="main">İçerik</div>;
\`\`\`

## ⚠️ Önemli Kurallar

- Tek bir root element döndürün
- className kullanın (class değil)
- Self-closing tag'ler kullanın
- JavaScript ifadeleri {} içinde yazın`,
            codeExamples: [
              {
                id: "jsx-basic",
                title: "Temel JSX Örnekleri",
                code: `import React from 'react';

function JSXExamples() {
  const name = 'React';
  const isLoggedIn = true;
  
  return (
    <div className="container">
      <h1>Merhaba, {name}!</h1>
      <p>Bugün {new Date().toLocaleDateString()}</p>
      {isLoggedIn ? (
        <button>Çıkış Yap</button>
      ) : (
        <button>Giriş Yap</button>
      )}
    </div>
  );
}

export default JSXExamples;`,
                language: "jsx",
                description: "JSX ile temel örnekler",
              },
            ],
            relatedProjects: ["jsx-practice"],
            resources: [
              {
                id: "jsx-docs",
                title: "JSX Dokümantasyonu",
                url: "https://react.dev/learn/writing-markup-with-jsx",
                type: "documentation",
              },
            ],
          },
        ],
      },
      {
        id: "components-props",
        name: "Components ve Props",
        icon: "🧩",
        description: "React componentleri ve props kullanimi",
        topics: [
          {
            id: "functional-components",
            title: "Functional Components",
            description: "Modern React ile functional componentler",
            duration: "2 saat",
            difficulty: "easy",
            content: `# Functional Components 🧩

Functional componentler, Reactte UI olusturmanin modern yoludur.

## 🎯 Functional Component Özellikleri

- JavaScript fonksiyonlari
- Props parametresi alir
- JSX dondurur
- Hooks kullanabilir
- Daha performansli

## 🔧 Temel Syntax

\`\`\`jsx
function MyComponent(props) {
  return <div>Merhaba, {props.name}!</div>;
}
\`\`\`

## 📝 Örnekler

### Basit Component
\`\`\`jsx
function Welcome() {
  return <h1>Hoş geldiniz!</h1>;
}
\`\`\`

### Props ile Component
\`\`\`jsx
function Greeting({ name, age }) {
  return (
    <div>
      <h2>Merhaba, {name}!</h2>
      <p>Yaşınız: {age}</p>
    </div>
  );
}
\`\`\`

### Arrow Function
\`\`\`jsx
const Button = ({ onClick, children }) => (
  <button onClick={onClick}>
    {children}
  </button>
);
\`\`\``,
            codeExamples: [
              {
                id: "functional-component-example",
                title: "Functional Component Örneği",
                code: `import React from 'react';

function UserCard({ user }) {
  return (
    <div className="user-card">
      <img src={user.avatar} alt={user.name} />
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <button>Profil Görüntüle</button>
    </div>
  );
}

function App() {
  const user = {
    name: 'Ahmet Yılmaz',
    email: 'ahmet@example.com',
    avatar: 'https://via.placeholder.com/150'
  };

  return (
    <div>
      <h1>Kullanıcı Profili</h1>
      <UserCard user={user} />
    </div>
  );
}

export default App;`,
                language: "jsx",
                description: "Functional component ile kullanıcı kartı",
              },
            ],
            relatedProjects: ["component-library"],
            resources: [
              {
                id: "components-docs",
                title: "Components Dokümantasyonu",
                url: "https://react.dev/learn/your-first-component",
                type: "documentation",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "react-hooks",
    name: "React Hooks",
    order: 2,
    description: "Modern React ile state ve lifecycle yönetimi",
    categories: [
      {
        id: "state-hooks",
        name: "State Hooks",
        icon: "🎣",
        description: "useState ve state yönetimi",
        topics: [
          {
            id: "usestate-hook",
            title: "useState Hook",
            description: "State yönetimi için useState hook kullanımı",
            duration: "3 saat",
            difficulty: "medium",
            content: `# useState Hook 🎣

useState hook, React componentlerinde state yonetimi icin kullanilan temel hooktur.

## 🎯 useState Kullanımı

useState hooku iki deger dondurur:
1. **State degeri**: Mevcut state
2. **Setter fonksiyon**: Statei guncellemek icin

## 🔧 Temel Syntax

\`\`\`javascript
const [state, setState] = useState(initialValue);
\`\`\`

## 📝 Örnekler

### Sayac Örneği
\`\`\`javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Sayı: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Artır
      </button>
      <button onClick={() => setCount(count - 1)}>
        Azalt
      </button>
    </div>
  );
}
\`\`\`

### Form Örneği
\`\`\`javascript
import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="İsim"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Gönder</button>
    </form>
  );
}
\`\`\`

## ⚠️ Önemli Notlar

- State guncellemeleri asenkron olabilir
- Statei dogrudan degistirmeyin, setter fonksiyon kullanin
- Object ve array stateleri icin spread operator kullanin`,
            codeExamples: [
              {
                id: "usestate-counter",
                title: "useState ile Sayaç",
                code: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <h2>Sayaç: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Sıfırla</button>
    </div>
  );
}

export default Counter;`,
                language: "javascript",
                description: "useState hook ile sayaç uygulaması",
              },
            ],
            relatedProjects: ["counter-app", "todo-app"],
            resources: [
              {
                id: "usestate-docs",
                title: "useState Hook Dokümantasyonu",
                url: "https://react.dev/reference/react/useState",
                type: "documentation",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "advanced-react",
    name: "İleri Seviye React",
    order: 3,
    description: "Performans optimizasyonu ve ileri seviye kavramlar",
    categories: [
      {
        id: "performance",
        name: "Performans",
        icon: "⚡",
        description: "React uygulamalarında performans optimizasyonu",
        topics: [
          {
            id: "performance-optimization",
            title: "Performans Optimizasyonu",
            description:
              "React uygulamalarında performans optimizasyonu teknikleri",
            duration: "5 saat",
            difficulty: "hard",
            content: `# Performans Optimizasyonu ⚡

React uygulamalarında performansı artırmak için kullanılan teknikler.

## 🎯 Optimizasyon Teknikleri

### 1. React.memo
Componentlerin gereksiz re-renderlarini onler.

### 2. useMemo
Hesaplamali degerleri cache'ler.

### 3. useCallback
Fonksiyonlari cache'ler.

### 4. Code Splitting
Uygulamayi kucuk parcalara boler.

## 🔧 Örnekler

### React.memo Kullanımı
\`\`\`javascript
import React, { memo } from 'react';

const ExpensiveComponent = memo(({ data }) => {
  // Ağır hesaplamalar
  const processedData = data.map(item => ({
    ...item,
    processed: true
  }));

  return (
    <div>
      {processedData.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
});
\`\`\`

### useMemo Kullanımı
\`\`\`javascript
import React, { useMemo } from 'react';

function DataProcessor({ items }) {
  const expensiveValue = useMemo(() => {
    return items.reduce((sum, item) => sum + item.value, 0);
  }, [items]);

  return <div>Toplam: {expensiveValue}</div>;
}
\`\`\`

### useCallback Kullanımı
\`\`\`javascript
import React, { useCallback, useState } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return <Child onClick={handleClick} />;
}
\`\`\`

## 📊 Performans İpuçları

- Gereksiz re-renderlari onleyin
- Buyuk listeler icin virtualization kullanin
- Bundle sizei optimize edin
- Lazy loading uygulayin`,
            codeExamples: [
              {
                id: "memo-example",
                title: "React.memo Örneği",
                code: `import React, { memo, useState } from 'react';

const ExpensiveChild = memo(({ data, onUpdate }) => {
  console.log('ExpensiveChild rendered');
  
  return (
    <div>
      <h3>Veri: {data}</h3>
      <button onClick={onUpdate}>Güncelle</button>
    </div>
  );
});

function Parent() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState('Initial data');

  const handleUpdate = () => {
    setData(\`Updated data \${Date.now()}\`);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Count Artır
      </button>
      <ExpensiveChild data={data} onUpdate={handleUpdate} />
    </div>
  );
}

export default Parent;`,
                language: "javascript",
                description: "React.memo ile performans optimizasyonu",
              },
            ],
            relatedProjects: ["performance-demo", "optimized-app"],
            resources: [
              {
                id: "react-performance",
                title: "React Performans Rehberi",
                url: "https://react.dev/learn/render-and-commit",
                type: "documentation",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default roadmapData;
