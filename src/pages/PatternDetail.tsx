import React from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaCode,
  FaLightbulb,
  FaCheck,
  FaTimes,
  FaPlay,
  FaBook,
  FaGithub,
} from "react-icons/fa";
import PatternDiagram from "../components/common/PatternDiagram";

const PatternDetail: React.FC = () => {
  const { patternId } = useParams<{ patternId: string }>();

  const patternData: { [key: string]: any } = {
    hoc: {
      name: "Higher-Order Components (HOC)",
      category: "Component Patterns",
      description:
        "Bir component'i alıp yeni bir component döndüren fonksiyonlar",
      icon: "FaLayerGroup",
      color: "from-blue-500 to-blue-600",
      detailedDescription:
        "Higher-Order Components (HOC), React'te component'leri yeniden kullanılabilir hale getirmek için kullanılan gelişmiş bir tekniktir. Bir HOC, bir component'i alır ve yeni bir component döndürür. Bu sayede ortak logic'i farklı component'ler arasında paylaşabilirsiniz.",
      useCases: [
        "Authentication",
        "Loading States",
        "Error Handling",
        "Data Fetching",
      ],
      example: "withAuth, withLoading, withErrorBoundary",
      pros: ["Reusability", "Separation of Concerns", "Composition"],
      cons: ["Wrapper Hell", "Props Collision", "Debugging Complexity"],
      codeExample: `// HOC Örneği
const withAuth = (WrappedComponent) => {
  return (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    useEffect(() => {
      checkAuth().then(setIsAuthenticated);
    }, []);
    
    if (!isAuthenticated) {
      return <LoginPage />;
    }
    
    return <WrappedComponent {...props} />;
  };
};

const ProtectedComponent = withAuth(MyComponent);`,
      bestPractices: [
        "HOC'ları sadece gerekli olduğunda kullanın",
        "Props collision'ları önlemek için displayName kullanın",
        "Static method'ları forwardRef ile koruyun",
        "HOC'ları compose edilebilir hale getirin",
      ],
      relatedPatterns: ["Render Props", "Custom Hooks", "Compound Components"],
      externalLinks: [
        {
          title: "React HOC Dokümantasyonu",
          url: "https://reactjs.org/docs/higher-order-components.html",
          type: "documentation",
        },
        {
          title: "Refactoring.Guru - Decorator Pattern",
          url: "https://refactoring.guru/design-patterns/decorator",
          type: "article",
        },
      ],
    },
    "render-props": {
      name: "Render Props",
      category: "Component Patterns",
      description: "Component'in render fonksiyonunu prop olarak alan pattern",
      icon: "FaCode",
      color: "from-green-500 to-green-600",
      detailedDescription:
        "Render Props pattern'i, bir component'in render fonksiyonunu prop olarak alması ve bu fonksiyonu kullanarak UI render etmesi prensibine dayanır. Bu sayede data ve logic'i component'ler arasında paylaşabilirsiniz.",
      useCases: ["Data Sharing", "State Management", "Cross-cutting Concerns"],
      example: "DataProvider, MouseTracker, WindowSize",
      pros: ["Flexibility", "Explicit Dependencies", "Easy Testing"],
      cons: ["Callback Hell", "Performance Issues", "Complex JSX"],
      codeExample: `// Render Props Örneği
const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchData().then((result) => {
      setData(result);
      setLoading(false);
    });
  }, []);
  
  return children({ data, loading });
};

<DataProvider>
  {({ data, loading }) => (
    loading ? <Spinner /> : <DataDisplay data={data} />
  )}
</DataProvider>`,
      bestPractices: [
        "Render prop'ları sadece gerekli olduğunda kullanın",
        "Performance için useMemo kullanın",
        "TypeScript ile type safety sağlayın",
        "Callback'leri optimize edin",
      ],
      relatedPatterns: ["HOC", "Custom Hooks", "Compound Components"],
      externalLinks: [
        {
          title: "React Render Props Dokümantasyonu",
          url: "https://reactjs.org/docs/render-props.html",
          type: "documentation",
        },
        {
          title: "Refactoring.Guru - Strategy Pattern",
          url: "https://refactoring.guru/design-patterns/strategy",
          type: "article",
        },
      ],
    },
    compound: {
      name: "Compound Components",
      category: "Component Patterns",
      description: "Birbirleriyle iletişim kuran component grupları",
      icon: "FaPuzzlePiece",
      color: "from-purple-500 to-purple-600",
      detailedDescription:
        "Compound Components pattern'i, birbirleriyle örtük olarak iletişim kuran ve ortak bir state'i paylaşan bir grup component'ten oluşur. Bu pattern, karmaşık UI bileşenlerinin API'sini basitleştirmek ve esneklik sağlamak için kullanılır.",
      useCases: [
        "Form Components",
        "Modal Systems",
        "Navigation Menus",
        "Accordion, Tabs",
      ],
      example: "Select, Modal, Accordion, Tabs",
      pros: ["Flexible API", "Better Encapsulation", "Intuitive Usage"],
      cons: ["Complex Implementation", "Limited Flexibility", "Learning Curve"],
      codeExample: `// Compound Components Örneği
const Select = ({ children, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <SelectContext.Provider value={{ value, onChange, isOpen, setIsOpen }}>
      <div className="select-container">
        {children}
      </div>
    </SelectContext.Provider>
  );
};

const SelectTrigger = ({ children }) => {
  const { isOpen, setIsOpen } = useContext(SelectContext);
  return (
    <button onClick={() => setIsOpen(!isOpen)}>
      {children}
    </button>
  );
};

const SelectContent = ({ children }) => {
  const { isOpen } = useContext(SelectContext);
  return isOpen ? <div className="select-content">{children}</div> : null;
};

<Select value={selected} onChange={setSelected}>
  <SelectTrigger>
    {selected || "Seçiniz"}
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Seçenek 1</SelectItem>
    <SelectItem value="option2">Seçenek 2</SelectItem>
  </SelectContent>
</Select>`,
      bestPractices: [
        "Context API ile state paylaşımı yapın",
        "Component'leri mantıklı gruplara ayırın",
        "TypeScript ile type safety sağlayın",
        "API'yi basit ve sezgisel tutun",
      ],
      relatedPatterns: ["Provider Pattern", "Context API", "Custom Hooks"],
      externalLinks: [
        {
          title: "React Compound Components",
          url: "https://kentcdodds.com/blog/compound-components-with-react-hooks",
          type: "article",
        },
        {
          title: "Refactoring.Guru - Composite Pattern",
          url: "https://refactoring.guru/design-patterns/composite",
          type: "article",
        },
      ],
    },
    provider: {
      name: "Provider Pattern",
      category: "State Management",
      description: "Context API ile global state yönetimi",
      icon: "FaShieldAlt",
      color: "from-red-500 to-red-600",
      detailedDescription:
        "Provider Pattern, React Context API kullanarak global state yönetimi sağlayan bir desendir. Bu pattern, uygulama ağacının derinliklerindeki componentlere prop drilling yapmadan veri aktarımını kolaylaştırır.",
      useCases: [
        "Theme Management",
        "User Authentication",
        "Global Settings",
        "Language Preferences",
      ],
      example: "ThemeProvider, AuthProvider, LanguageProvider",
      pros: ["Global Access", "Avoid Prop Drilling", "Centralized State"],
      cons: ["Re-render Issues", "Performance Problems", "Testing Complexity"],
      codeExample: `// Provider Pattern Örneği
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  const value = {
    theme,
    toggleTheme
  };
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Main />
    </ThemeProvider>
  );
}

function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className={theme}>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
}`,
      bestPractices: [
        "Provider'ları mantıklı seviyelerde kullanın",
        "Context'leri küçük ve odaklı tutun",
        "useMemo ile value'ları optimize edin",
        "Custom hook'lar ile context kullanımını kolaylaştırın",
      ],
      relatedPatterns: ["Context API", "Custom Hooks", "State Management"],
      externalLinks: [
        {
          title: "React Context Dokümantasyonu",
          url: "https://react.dev/reference/react/createContext",
          type: "documentation",
        },
        {
          title: "Refactoring.Guru - Observer Pattern",
          url: "https://refactoring.guru/design-patterns/observer",
          type: "article",
        },
      ],
    },
    "custom-hooks": {
      name: "Custom Hooks",
      category: "Logic Patterns",
      description: "Stateful logic'i component'lerden ayıran pattern",
      icon: "FaCog",
      color: "from-yellow-500 to-yellow-600",
      detailedDescription:
        "Custom Hooks, stateful mantığı component'lerden ayırarak yeniden kullanılabilir hale getiren özel fonksiyonlardır. React Hooks ile birlikte gelen en güçlü desenlerden biridir ve kod tekrarını azaltır.",
      useCases: ["API Calls", "Form Handling", "Local Storage", "WebSocket"],
      example: "useApi, useForm, useLocalStorage, useWebSocket",
      pros: ["Logic Reuse", "Clean Components", "Easy Testing"],
      cons: ["Hook Rules", "Dependency Management", "Debugging"],
      codeExample: `// Custom Hook Örneği
const useApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [url]);
  
  return { data, loading, error };
};

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });
  
  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };
  
  return [storedValue, setValue];
};

function UserProfile() {
  const { data: user, loading, error } = useApi('/api/user');
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return <div>Welcome, {user.name}!</div>;
}`,
      bestPractices: [
        'Hook\'lar "use" ile başlamalı',
        "Hook'ları sadece component'lerin en üst seviyesinde çağırın",
        "Conditional hook çağrıları yapmayın",
        "Hook'ları tek bir sorumluluğa odaklayın",
      ],
      relatedPatterns: ["HOC", "Render Props", "Provider Pattern"],
      externalLinks: [
        {
          title: "React Custom Hooks Dokümantasyonu",
          url: "https://react.dev/learn/reusing-logic-with-custom-hooks",
          type: "documentation",
        },
        {
          title: "Refactoring.Guru - Template Method Pattern",
          url: "https://refactoring.guru/design-patterns/template-method",
          type: "article",
        },
      ],
    },
    observer: {
      name: "Observer Pattern",
      category: "Behavioral Patterns",
      description: "State değişikliklerini dinleyen pattern",
      icon: "FaEye",
      color: "from-indigo-500 to-indigo-600",
      detailedDescription:
        "Observer Pattern, bir objenin (Subject) durumundaki değişiklikleri, ona bağımlı olan diğer objelere (Observer) otomatik olarak bildirme mekanizmasıdır. React'te event handling ve state yönetiminde dolaylı olarak kullanılır.",
      useCases: ["Event Handling", "State Updates", "Real-time Data"],
      example: "useState, useEffect, Event Listeners",
      pros: ["Loose Coupling", "Dynamic Relationships", "Event-driven"],
      cons: ["Memory Leaks", "Performance Issues", "Complex Debugging"],
      codeExample: `// Observer Pattern Örneği
class EventEmitter {
  constructor() {
    this.events = {};
  }
  
  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }
  
  off(event, callback) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter(cb => cb !== callback);
    }
  }
  
  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(callback => callback(data));
    }
  }
}

const useEventEmitter = () => {
  const emitterRef = useRef(new EventEmitter());
  
  useEffect(() => {
    return () => {
      emitterRef.current.events = {};
    };
  }, []);
  
  return emitterRef.current;
};

function ChatRoom() {
  const emitter = useEventEmitter();
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    const handleMessage = (message) => {
      setMessages(prev => [...prev, message]);
    };
    
    emitter.on('message', handleMessage);
    
    return () => {
      emitter.off('message', handleMessage);
    };
  }, [emitter]);
  
  const sendMessage = (text) => {
    emitter.emit('message', { text, timestamp: Date.now() });
  };
  
  return (
    <div>
      {messages.map((msg, index) => (
        <div key={index}>{msg.text}</div>
      ))}
      <button onClick={() => sendMessage('Hello!')}>Send</button>
    </div>
  );
}`,
      bestPractices: [
        "Memory leak'leri önlemek için cleanup yapın",
        "Observer'ları gerektiğinde kaldırın",
        "Event name'leri tutarlı tutun",
        "Performance için debounce kullanın",
      ],
      relatedPatterns: ["Event Handling", "State Management", "Custom Hooks"],
      externalLinks: [
        {
          title: "React Event Handling",
          url: "https://react.dev/learn/responding-to-events",
          type: "documentation",
        },
        {
          title: "Refactoring.Guru - Observer Pattern",
          url: "https://refactoring.guru/design-patterns/observer",
          type: "article",
        },
      ],
    },
    factory: {
      name: "Factory Pattern",
      category: "Creational Patterns",
      description: "Component'leri dinamik olarak oluşturan pattern",
      icon: "FaCubes",
      color: "from-pink-500 to-pink-600",
      detailedDescription:
        "Factory Pattern, nesne oluşturma mantığını soyutlayan ve esneklik sağlayan bir desendir. React'te component'leri dinamik olarak oluşturmak, plugin sistemleri ve component registry'leri için kullanılır.",
      useCases: ["Dynamic Components", "Plugin Systems", "Component Registry"],
      example: "ComponentFactory, PluginManager, DynamicRenderer",
      pros: ["Flexibility", "Extensibility", "Centralized Creation"],
      cons: ["Complexity", "Type Safety", "Runtime Errors"],
      codeExample: `// Factory Pattern Örneği
const ComponentFactory = {
  components: {
    button: Button,
    input: Input,
    card: Card,
    modal: Modal
  },
  
  create(type, props) {
    const Component = this.components[type];
    if (!Component) {
      throw new Error(\`Unknown component type: \${type}\`);
    }
    return <Component {...props} />;
  },
  
  register(type, component) {
    this.components[type] = component;
  }
};

const DynamicRenderer = ({ type, props, children }) => {
  return ComponentFactory.create(type, { ...props, children });
};

const PluginManager = {
  plugins: new Map(),
  
  register(name, plugin) {
    this.plugins.set(name, plugin);
  },
  
  getPlugin(name) {
    return this.plugins.get(name);
  },
  
  createPluginComponent(name, props) {
    const plugin = this.getPlugin(name);
    if (!plugin) {
      return <div>Plugin not found: {name}</div>;
    }
    return plugin.render(props);
  }
};

function Dashboard() {
  const widgets = [
    { type: 'card', title: 'Users', count: 1000 },
    { type: 'button', text: 'Add User', onClick: handleAdd },
    { type: 'input', placeholder: 'Search...' }
  ];
  
  return (
    <div>
      {widgets.map((widget, index) => (
        <DynamicRenderer key={index} type={widget.type} props={widget} />
      ))}
    </div>
  );
}`,
      bestPractices: [
        "Type safety için TypeScript kullanın",
        "Error handling ekleyin",
        "Component registry'yi güvenli tutun",
        "Plugin sistemlerini sandbox'layın",
      ],
      relatedPatterns: [
        "Dynamic Components",
        "Plugin Architecture",
        "Component Registry",
      ],
      externalLinks: [
        {
          title: "React Dynamic Components",
          url: "https://react.dev/reference/react/createElement",
          type: "documentation",
        },
        {
          title: "Refactoring.Guru - Factory Method Pattern",
          url: "https://refactoring.guru/design-patterns/factory-method",
          type: "article",
        },
      ],
    },
    memoization: {
      name: "Memoization Pattern",
      category: "Performance Patterns",
      description: "Hesaplamaları cache'leyen pattern",
      icon: "FaSync",
      color: "from-teal-500 to-teal-600",
      detailedDescription:
        "Memoization Pattern, pahalı hesaplamaların sonuçlarını önbelleğe alarak performansı artıran bir optimizasyon desenidir. Aynı girdilerle tekrar çağrıldığında önbelleğe alınmış sonucu döndürür.",
      useCases: [
        "Expensive Calculations",
        "API Response Caching",
        "Component Optimization",
      ],
      example: "useMemo, useCallback, React.memo, useSWR",
      pros: ["Performance Boost", "Reduced Calculations", "Better UX"],
      cons: ["Memory Usage", "Cache Invalidation", "Complexity"],
      codeExample: `// Memoization Pattern Örneği
const ExpensiveComponent = ({ data, filter }) => {
  const expensiveValue = useMemo(() => {
    console.log('Expensive calculation running...');
    return data
      .filter(item => item.category === filter)
      .reduce((sum, item) => sum + item.value, 0);
  }, [data, filter]);
  
  const handleClick = useCallback((id) => {
    console.log('Clicked:', id);
  }, []);
  
  return (
    <div>
      <p>Total: {expensiveValue}</p>
      <button onClick={() => handleClick(1)}>Click me</button>
    </div>
  );
};

const MemoizedChild = React.memo(({ name, age }) => {
  console.log('Child component rendered');
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
});

const useMemoizedValue = (value, dependencies) => {
  const memoizedValue = useMemo(() => {
    return expensiveCalculation(value);
  }, dependencies);
  
  return memoizedValue;
};

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('John');
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <MemoizedChild name={name} age={25} />
    </div>
  );
}`,
      bestPractices: [
        "Sadece gerçekten pahalı hesaplamaları memoize edin",
        "Dependency array'i doğru kullanın",
        "Memory leak'leri önlemek için cleanup yapın",
        "Performance profiling ile ölçüm yapın",
      ],
      relatedPatterns: [
        "Performance Optimization",
        "React.memo",
        "useMemo",
        "useCallback",
      ],
      externalLinks: [
        {
          title: "React Performance Dokümantasyonu",
          url: "https://react.dev/learn/render-and-commit",
          type: "documentation",
        },
        {
          title: "Refactoring.Guru - Proxy Pattern",
          url: "https://refactoring.guru/design-patterns/proxy",
          type: "article",
        },
      ],
    },
  };

  const pattern = patternData[patternId || ""];

  if (!pattern) {
    return (
      <div className="min-h-screen brand-section flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 brand-h">
            Pattern Bulunamadı
          </h1>
          <Link
            to="/design-patterns"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
          >
            <FaArrowLeft size={16} />
            Geri Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen brand-section">
      <div className="bg-white dark:bg-secondary-800 shadow-sm border-b border-gray-200 dark:border-secondary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <Link
                to="/design-patterns"
                className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-secondary-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-secondary-600 transition-colors"
              >
                <FaArrowLeft size={16} />
                Geri Dön
              </Link>
              <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium">
                {pattern.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 brand-h">
              {pattern.name}
            </h1>
            <p className="text-xl brand-sub max-w-3xl">
              {pattern.detailedDescription}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-secondary-800 rounded-xl shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold mb-4 brand-h">
                Pattern Diyagramı
              </h2>
              <PatternDiagram pattern={patternId || ""} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white dark:bg-secondary-800 rounded-xl shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 brand-h">
                <FaCode className="text-blue-500" />
                Kod Örneği
              </h2>
              <pre className="bg-gray-100 dark:bg-secondary-900 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm text-gray-800 dark:text-gray-200">
                  {pattern.codeExample}
                </code>
              </pre>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white dark:bg-secondary-800 rounded-xl shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 brand-h">
                <FaLightbulb className="text-yellow-500" />
                En İyi Uygulamalar
              </h2>
              <ul className="space-y-3">
                {pattern.bestPractices.map(
                  (practice: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <FaCheck
                        className="text-green-500 mt-1 flex-shrink-0"
                        size={16}
                      />
                      <span className="brand-sub">{practice}</span>
                    </li>
                  )
                )}
              </ul>
            </motion.div>
          </div>
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white dark:bg-secondary-800 rounded-xl shadow-lg p-6"
            >
              <h3 className="text-lg font-bold mb-4 brand-h">Hızlı Bilgi</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 brand-h">
                    Kullanım Alanları
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {pattern.useCases.map((useCase: string) => (
                      <span
                        key={useCase}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                      >
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 brand-h">Örnekler</h4>
                  <p className="text-sm brand-sub bg-gray-50 dark:bg-secondary-700 p-2 rounded">
                    {pattern.example}
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white dark:bg-secondary-800 rounded-xl shadow-lg p-6"
            >
              <h3 className="text-lg font-bold mb-4 brand-h">
                Artılar ve Eksiler
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2 flex items-center gap-2">
                    <FaCheck size={16} />
                    Avantajlar
                  </h4>
                  <ul className="space-y-1">
                    {pattern.pros.map((pro: string) => (
                      <li
                        key={pro}
                        className="text-sm brand-sub flex items-center gap-2"
                      >
                        <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2 flex items-center gap-2">
                    <FaTimes size={16} />
                    Dezavantajlar
                  </h4>
                  <ul className="space-y-1">
                    {pattern.cons.map((con: string) => (
                      <li
                        key={con}
                        className="text-sm brand-sub flex items-center gap-2"
                      >
                        <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-white dark:bg-secondary-800 rounded-xl shadow-lg p-6"
            >
              <h3 className="text-lg font-bold mb-4 brand-h">Dış Kaynaklar</h3>

              <div className="space-y-3">
                {pattern.externalLinks.map((link: any, index: number) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-secondary-700 rounded-lg hover:bg-gray-100 dark:hover:bg-secondary-600 transition-colors group"
                  >
                    <div className="flex-shrink-0">
                      {link.type === "documentation" ? (
                        <FaBook className="text-blue-500" size={16} />
                      ) : (
                        <FaExternalLinkAlt
                          className="text-green-500"
                          size={16}
                        />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium brand-h group-hover:text-primary-600 dark:group-hover:text-primary-400">
                        {link.title}
                      </p>
                      <p className="text-xs brand-sub truncate">{link.url}</p>
                    </div>
                    <FaExternalLinkAlt
                      className="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300"
                      size={12}
                    />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatternDetail;
