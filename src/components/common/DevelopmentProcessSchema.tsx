import React from "react";

const DevelopmentProcessSchema: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl shadow-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 800"
        className="w-full h-auto"
      >
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#f8fafc", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#e2e8f0", stopOpacity: 1 }}
            />
          </linearGradient>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="4"
              stdDeviation="8"
              floodColor="#000000"
              floodOpacity="0.1"
            />
          </filter>
        </defs>

        <rect width="1200" height="800" fill="url(#bgGradient)" />

        <text
          x="600"
          y="40"
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontSize="24"
          fontWeight="bold"
          fill="#1e293b"
        >
          React Geliştirme Süreci
        </text>

        <g transform="translate(50, 100)">
          <rect
            x="0"
            y="0"
            width="140"
            height="100"
            rx="12"
            fill="#61dafb"
            filter="url(#shadow)"
          />
          <text
            x="70"
            y="30"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="14"
            fontWeight="bold"
            fill="white"
          >
            Node.js
          </text>
          <text
            x="70"
            y="50"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="12"
            fill="white"
          >
            Kurulumu
          </text>
          <text
            x="70"
            y="70"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="10"
            fill="white"
          >
            15 dk
          </text>
          <text
            x="70"
            y="85"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="10"
            fill="white"
          >
            ⭐
          </text>
        </g>

        <path
          d="M 200 150 L 250 150"
          stroke="#64748b"
          strokeWidth="3"
          fill="none"
          markerEnd="url(#arrowhead)"
        />

        <g transform="translate(270, 100)">
          <rect
            x="0"
            y="0"
            width="140"
            height="100"
            rx="12"
            fill="#007acc"
            filter="url(#shadow)"
          />
          <text
            x="70"
            y="30"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="14"
            fontWeight="bold"
            fill="white"
          >
            VS Code
          </text>
          <text
            x="70"
            y="50"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="12"
            fill="white"
          >
            Eklentiler
          </text>
          <text
            x="70"
            y="70"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="10"
            fill="white"
          >
            10 dk
          </text>
          <text
            x="70"
            y="85"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="10"
            fill="white"
          >
            ⭐
          </text>
        </g>

        <path
          d="M 420 150 L 470 150"
          stroke="#64748b"
          strokeWidth="3"
          fill="none"
          markerEnd="url(#arrowhead)"
        />

        <g transform="translate(490, 100)">
          <rect
            x="0"
            y="0"
            width="140"
            height="100"
            rx="12"
            fill="#f05032"
            filter="url(#shadow)"
          />
          <text
            x="70"
            y="30"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="14"
            fontWeight="bold"
            fill="white"
          >
            Git
          </text>
          <text
            x="70"
            y="50"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="12"
            fill="white"
          >
            Repository
          </text>
          <text
            x="70"
            y="70"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="10"
            fill="white"
          >
            5 dk
          </text>
          <text
            x="70"
            y="85"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="10"
            fill="white"
          >
            ⭐
          </text>
        </g>
        <path
          d="M 640 150 L 690 150"
          stroke="#64748b"
          strokeWidth="3"
          fill="none"
          markerEnd="url(#arrowhead)"
        />
        <g transform="translate(710, 100)">
          <rect
            x="0"
            y="0"
            width="140"
            height="100"
            rx="12"
            fill="#cb3837"
            filter="url(#shadow)"
          />
          <text
            x="70"
            y="30"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="14"
            fontWeight="bold"
            fill="white"
          >
            NPM
          </text>
          <text
            x="70"
            y="50"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="12"
            fill="white"
          >
            Paketleri
          </text>
          <text
            x="70"
            y="70"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="10"
            fill="white"
          >
            10 dk
          </text>
          <text
            x="70"
            y="85"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="10"
            fill="white"
          >
            ⭐⭐
          </text>
        </g>
        <path
          d="M 860 150 L 910 150"
          stroke="#64748b"
          strokeWidth="3"
          fill="none"
          markerEnd="url(#arrowhead)"
        />

        <g transform="translate(930, 100)">
          <rect
            x="0"
            y="0"
            width="140"
            height="100"
            rx="12"
            fill="#61dafb"
            filter="url(#shadow)"
          />
          <text
            x="70"
            y="30"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="14"
            fontWeight="bold"
            fill="white"
          >
            React
          </text>
          <text
            x="70"
            y="50"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="12"
            fill="white"
          >
            Projesi
          </text>
          <text
            x="70"
            y="70"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="10"
            fill="white"
          >
            20 dk
          </text>
          <text
            x="70"
            y="85"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="10"
            fill="white"
          >
            ⭐⭐
          </text>
        </g>

        <path
          d="M 1000 200 L 1000 250"
          stroke="#64748b"
          strokeWidth="3"
          fill="none"
          markerEnd="url(#arrowhead)"
        />

        <g transform="translate(930, 270)">
          <rect
            x="0"
            y="0"
            width="140"
            height="100"
            rx="12"
            fill="#10b981"
            filter="url(#shadow)"
          />
          <text
            x="70"
            y="30"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="14"
            fontWeight="bold"
            fill="white"
          >
            Geliştirme
          </text>
          <text
            x="70"
            y="50"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="12"
            fill="white"
          >
            Component
          </text>
          <text
            x="70"
            y="70"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="10"
            fill="white"
          >
            2-4 hafta
          </text>
          <text
            x="70"
            y="85"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="10"
            fill="white"
          >
            ⭐⭐⭐
          </text>
        </g>

        <path
          d="M 860 320 L 810 320"
          stroke="#64748b"
          strokeWidth="3"
          fill="none"
          markerEnd="url(#arrowhead)"
        />

        <g transform="translate(650, 270)">
          <rect
            x="0"
            y="0"
            width="140"
            height="100"
            rx="12"
            fill="#8b5cf6"
            filter="url(#shadow)"
          />
          <text
            x="70"
            y="30"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="14"
            fontWeight="bold"
            fill="white"
          >
            Deployment
          </text>
          <text
            x="70"
            y="50"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="12"
            fill="white"
          >
            Production
          </text>
          <text
            x="70"
            y="70"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="10"
            fill="white"
          >
            30 dk
          </text>
          <text
            x="70"
            y="85"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="10"
            fill="white"
          >
            ⭐⭐
          </text>
        </g>

        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#64748b" />
          </marker>
        </defs>

        <text
          x="600"
          y="450"
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontSize="18"
          fontWeight="bold"
          fill="#1e293b"
        >
          Öğrenme Yolculuğu
        </text>
        <g transform="translate(50, 480)">
          <rect
            x="0"
            y="0"
            width="200"
            height="120"
            rx="12"
            fill="#fef3c7"
            filter="url(#shadow)"
          />
          <text
            x="100"
            y="25"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="14"
            fontWeight="bold"
            fill="#92400e"
          >
            Önkoşullar
          </text>
          <text
            x="100"
            y="45"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="12"
            fill="#92400e"
          >
            HTML
          </text>
          <text
            x="100"
            y="65"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="12"
            fill="#92400e"
          >
            CSS
          </text>
          <text
            x="100"
            y="85"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="12"
            fill="#92400e"
          >
            JavaScript
          </text>
          <text
            x="100"
            y="105"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="12"
            fill="#92400e"
          >
            ECMAScript
          </text>
        </g>
        <g transform="translate(300, 480)">
          <rect
            x="0"
            y="0"
            width="200"
            height="120"
            rx="12"
            fill="#dbeafe"
            filter="url(#shadow)"
          />
          <text
            x="100"
            y="25"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="14"
            fontWeight="bold"
            fill="#1e40af"
          >
            Editörler
          </text>
          <text
            x="100"
            y="45"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="12"
            fill="#1e40af"
          >
            VS Code
          </text>
          <text
            x="100"
            y="65"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="12"
            fill="#1e40af"
          >
            WebStorm
          </text>
          <text
            x="100"
            y="85"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="12"
            fill="#1e40af"
          >
            Atom
          </text>
          <text
            x="100"
            y="105"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="12"
            fill="#1e40af"
          >
            Sublime Text
          </text>
        </g>
        <g transform="translate(550, 480)">
          <rect
            x="0"
            y="0"
            width="200"
            height="120"
            rx="12"
            fill="#f3e8ff"
            filter="url(#shadow)"
          />
          <text
            x="100"
            y="25"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="14"
            fontWeight="bold"
            fill="#7c3aed"
          >
            Araçlar
          </text>
          <text
            x="100"
            y="45"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="12"
            fill="#7c3aed"
          >
            Node.js
          </text>
          <text
            x="100"
            y="65"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="12"
            fill="#7c3aed"
          >
            NPM
          </text>
          <text
            x="100"
            y="85"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="12"
            fill="#7c3aed"
          >
            NPX
          </text>
          <text
            x="100"
            y="105"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="12"
            fill="#7c3aed"
          >
            Git
          </text>
        </g>
        <g transform="translate(800, 480)">
          <rect
            x="0"
            y="0"
            width="200"
            height="120"
            rx="12"
            fill="#ecfdf5"
            filter="url(#shadow)"
          />
          <text
            x="100"
            y="25"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="14"
            fontWeight="bold"
            fill="#065f46"
          >
            Zaman Çizelgesi
          </text>
          <text
            x="100"
            y="45"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="12"
            fill="#065f46"
          >
            Kurulum: 1 saat
          </text>
          <text
            x="100"
            y="65"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="12"
            fill="#065f46"
          >
            İlk Proje: 30 dk
          </text>
          <text
            x="100"
            y="85"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="12"
            fill="#065f46"
          >
            Geliştirme: 2-4 hafta
          </text>
          <text
            x="100"
            y="105"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="12"
            fill="#065f46"
          >
            Deployment: 30 dk
          </text>
        </g>
        <text
          x="600"
          y="680"
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontSize="14"
          fill="#64748b"
        >
          React Geliştirme Süreci - Adım Adım Rehber
        </text>
      </svg>
    </div>
  );
};

export default DevelopmentProcessSchema;
