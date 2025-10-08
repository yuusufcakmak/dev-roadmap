import { Category } from "../../../types/roadmap";

export const advancedReact: Category = {
  id: "performance",
  name: "Performans",
  icon: "⚡",
  description: "React uygulamalarında performans optimizasyonu",
  topics: [
    {
      id: "performance-optimization",
      title: "Performans Optimizasyonu",
      description: "React uygulamalarında performans optimizasyonu teknikleri",
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
};
