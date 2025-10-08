export interface Project {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'expert';
  duration: string;
  technologies: string[];
  features: string[];
  demoUrl?: string;
  sourceUrl?: string;
  imageUrl?: string;
  prerequisites: string[];
  learningOutcomes: string[];
}

export const projectsData: Project[] = [
  {
    id: 'todo-app',
    title: 'Todo Uygulaması',
    description: 'Temel React kavramlarını öğrenmek için mükemmel bir başlangıç projesi. useState, event handling ve list rendering konularını pratik edeceksiniz.',
    difficulty: 'easy',
    duration: '2-3 saat',
    technologies: ['React', 'useState', 'Event Handling', 'Lists'],
    features: [
      'Yeni todo ekleme',
      'Todo\'ları tamamlama',
      'Todo\'ları silme',
      'Filtreleme (Tümü, Aktif, Tamamlanan)',
      'Local storage ile veri saklama'
    ],
    demoUrl: 'https://codesandbox.io/s/react-todo-app',
    sourceUrl: 'https://github.com/example/todo-app',
    prerequisites: ['useState Hook', 'Event Handling', 'Lists ve Keys'],
    learningOutcomes: [
      'useState hook kullanımı',
      'Event handling temelleri',
      'List rendering ve key kullanımı',
      'Conditional rendering',
      'Local storage kullanımı'
    ]
  },
  {
    id: 'counter-app',
    title: 'Sayaç Uygulaması',
    description: 'React state yönetiminin temellerini öğrenmek için basit ama etkili bir proje. useState hook\'unu pratik edeceksiniz.',
    difficulty: 'easy',
    duration: '1-2 saat',
    technologies: ['React', 'useState', 'Event Handling'],
    features: [
      'Sayıyı artırma/azaltma',
      'Sıfırlama',
      'Özel değer ekleme',
      'Görsel feedback'
    ],
    demoUrl: 'https://codesandbox.io/s/react-counter-app',
    sourceUrl: 'https://github.com/example/counter-app',
    prerequisites: ['useState Hook', 'Event Handling'],
    learningOutcomes: [
      'useState hook temel kullanımı',
      'Event handling',
      'State güncelleme',
      'Component yapısı'
    ]
  },
  {
    id: 'weather-app',
    title: 'Hava Durumu Uygulaması',
    description: 'API entegrasyonu ve useEffect hook kullanımını öğrenmek için ideal bir proje. Gerçek veri çekme deneyimi yaşayacaksınız.',
    difficulty: 'medium',
    duration: '4-6 saat',
    technologies: ['React', 'useState', 'useEffect', 'API', 'Fetch'],
    features: [
      'Şehir bazlı hava durumu',
      'Günlük hava tahmini',
      'Sıcaklık birimi değiştirme',
      'Arama özelliği',
      'Loading ve error handling'
    ],
    demoUrl: 'https://codesandbox.io/s/react-weather-app',
    sourceUrl: 'https://github.com/example/weather-app',
    prerequisites: ['useState Hook', 'useEffect Hook', 'API Çağrıları'],
    learningOutcomes: [
      'useEffect hook kullanımı',
      'API entegrasyonu',
      'Async/await kullanımı',
      'Error handling',
      'Loading states'
    ]
  },
  {
    id: 'movie-search',
    title: 'Film Arama Uygulaması',
    description: 'Arama fonksiyonalitesi ve API entegrasyonu ile React\'in gücünü keşfedin. Kullanıcı etkileşimi ve veri yönetimi konularını öğreneceksiniz.',
    difficulty: 'medium',
    duration: '5-7 saat',
    technologies: ['React', 'useState', 'useEffect', 'API', 'Search'],
    features: [
      'Film arama',
      'Film detayları',
      'Favorilere ekleme',
      'Pagination',
      'Responsive tasarım'
    ],
    demoUrl: 'https://codesandbox.io/s/react-movie-search',
    sourceUrl: 'https://github.com/example/movie-search',
    prerequisites: ['useState Hook', 'useEffect Hook', 'API Çağrıları', 'Event Handling'],
    learningOutcomes: [
      'Arama fonksiyonalitesi',
      'API entegrasyonu',
      'State yönetimi',
      'Component organizasyonu',
      'User experience'
    ]
  },
  {
    id: 'tic-tac-toe',
    title: 'Tic-Tac-Toe Oyunu',
    description: 'React\'in resmi dokümantasyonunda yer alan klasik proje. State yönetimi, component yapısı ve oyun mantığı konularını öğreneceksiniz.',
    difficulty: 'medium',
    duration: '3-4 saat',
    technologies: ['React', 'useState', 'Game Logic', 'Conditional Rendering'],
    features: [
      'İki oyunculu oyun',
      'Kazanan belirleme',
      'Oyun geçmişi',
      'Zaman yolculuğu',
      'Yeniden başlatma'
    ],
    demoUrl: 'https://codesandbox.io/s/react-tic-tac-toe',
    sourceUrl: 'https://github.com/example/tic-tac-toe',
    prerequisites: ['useState Hook', 'Event Handling', 'Conditional Rendering'],
    learningOutcomes: [
      'State yönetimi',
      'Game logic',
      'Component yapısı',
      'Array manipulation',
      'Conditional rendering'
    ]
  },
  {
    id: 'e-commerce',
    title: 'E-ticaret Sitesi',
    description: 'Karmaşık state yönetimi, routing ve API entegrasyonu ile gerçek dünya projesi deneyimi. İleri seviye React konularını öğreneceksiniz.',
    difficulty: 'hard',
    duration: '2-3 hafta',
    technologies: ['React', 'React Router', 'Context API', 'API', 'State Management'],
    features: [
      'Ürün kataloğu',
      'Sepet yönetimi',
      'Kullanıcı girişi',
      'Ödeme sistemi',
      'Admin paneli'
    ],
    demoUrl: 'https://codesandbox.io/s/react-ecommerce',
    sourceUrl: 'https://github.com/example/ecommerce',
    prerequisites: ['React Router', 'Context API', 'useEffect', 'API Çağrıları'],
    learningOutcomes: [
      'Complex state management',
      'Routing',
      'Context API',
      'Authentication',
      'Project architecture'
    ]
  },
  {
    id: 'dashboard',
    title: 'Admin Dashboard',
    description: 'Veri görselleştirme, tablo yönetimi ve karmaşık UI componentleri ile profesyonel bir dashboard projesi.',
    difficulty: 'hard',
    duration: '3-4 hafta',
    technologies: ['React', 'Charts', 'Tables', 'API', 'State Management'],
    features: [
      'Veri görselleştirme',
      'Tablo yönetimi',
      'Filtreleme ve sıralama',
      'Responsive tasarım',
      'Real-time updates'
    ],
    demoUrl: 'https://codesandbox.io/s/react-dashboard',
    sourceUrl: 'https://github.com/example/dashboard',
    prerequisites: ['useEffect', 'API Çağrıları', 'Complex State', 'Charts'],
    learningOutcomes: [
      'Data visualization',
      'Complex UI components',
      'Performance optimization',
      'Real-time data',
      'Professional development'
    ]
  },
  {
    id: 'fullstack-app',
    title: 'Full-Stack Uygulama',
    description: 'React frontend, Node.js backend ve veritabanı entegrasyonu ile tam kapsamlı bir uygulama. Gerçek dünya projesi deneyimi.',
    difficulty: 'expert',
    duration: '1-2 ay',
    technologies: ['React', 'Node.js', 'Database', 'Authentication', 'Deployment'],
    features: [
      'Full-stack architecture',
      'User authentication',
      'Database integration',
      'File upload',
      'Deployment'
    ],
    demoUrl: 'https://your-app.herokuapp.com',
    sourceUrl: 'https://github.com/example/fullstack-app',
    prerequisites: ['React', 'Node.js', 'Database', 'Authentication'],
    learningOutcomes: [
      'Full-stack development',
      'Database design',
      'Authentication systems',
      'Deployment strategies',
      'Production considerations'
    ]
  }
];

export default projectsData;
