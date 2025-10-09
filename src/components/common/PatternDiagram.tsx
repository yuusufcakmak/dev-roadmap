import React from "react";
import { motion } from "framer-motion";

interface PatternDiagramProps {
  pattern: string;
  className?: string;
}

const PatternDiagram: React.FC<PatternDiagramProps> = ({
  pattern,
  className = "",
}) => {
  const renderHOCDiagram = () => (
    <svg viewBox="0 0 400 300" className="w-full h-64">
      <rect width="400" height="300" fill="#f8fafc" rx="8" />
      <text
        x="200"
        y="30"
        textAnchor="middle"
        className="text-lg font-bold brand-h"
      >
        Higher-Order Component (HOC)
      </text>
      <motion.rect
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        x="50"
        y="80"
        width="100"
        height="60"
        rx="8"
        fill="#3b82f6"
        stroke="#1e40af"
        strokeWidth="2"
      />
      <text
        x="100"
        y="115"
        textAnchor="middle"
        className="text-sm font-medium fill-white"
      >
        Component
      </text>
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        d="M 170 110 L 230 110"
        stroke="#6b7280"
        strokeWidth="3"
        fill="none"
        markerEnd="url(#arrowhead)"
      />
      <motion.rect
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        x="250"
        y="60"
        width="120"
        height="80"
        rx="8"
        fill="#10b981"
        stroke="#059669"
        strokeWidth="2"
      />
      <text
        x="310"
        y="85"
        textAnchor="middle"
        className="text-sm font-medium fill-white"
      >
        withAuth
      </text>
      <text x="310" y="105" textAnchor="middle" className="text-xs fill-white">
        (HOC Function)
      </text>
      <text x="310" y="125" textAnchor="middle" className="text-xs fill-white">
        returns Enhanced
      </text>
      <motion.rect
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        x="50"
        y="200"
        width="100"
        height="60"
        rx="8"
        fill="#8b5cf6"
        stroke="#7c3aed"
        strokeWidth="2"
      />
      <text
        x="100"
        y="235"
        textAnchor="middle"
        className="text-sm font-medium fill-white"
      >
        Enhanced
      </text>
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 1 }}
        d="M 100 150 L 100 190"
        stroke="#6b7280"
        strokeWidth="3"
        fill="none"
        markerEnd="url(#arrowhead)"
      />
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
        </marker>
      </defs>
    </svg>
  );
  const renderRenderPropsDiagram = () => (
    <svg viewBox="0 0 400 300" className="w-full h-64">
      <rect width="400" height="300" fill="#f8fafc" rx="8" />

      <text
        x="200"
        y="30"
        textAnchor="middle"
        className="text-lg font-bold brand-h"
      >
        Render Props Pattern
      </text>
      <motion.rect
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        x="50"
        y="80"
        width="120"
        height="80"
        rx="8"
        fill="#f59e0b"
        stroke="#d97706"
        strokeWidth="2"
      />
      <text
        x="110"
        y="105"
        textAnchor="middle"
        className="text-sm font-medium fill-white"
      >
        DataProvider
      </text>
      <text x="110" y="125" textAnchor="middle" className="text-xs fill-white">
        State + Logic
      </text>
      <text x="110" y="145" textAnchor="middle" className="text-xs fill-white">
        render=&#123;data =&gt; ...&#125;
      </text>
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        d="M 190 120 L 250 120"
        stroke="#6b7280"
        strokeWidth="3"
        fill="none"
        markerEnd="url(#arrowhead2)"
      />
      <motion.rect
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        x="270"
        y="80"
        width="100"
        height="80"
        rx="8"
        fill="#ef4444"
        stroke="#dc2626"
        strokeWidth="2"
      />
      <text
        x="320"
        y="105"
        textAnchor="middle"
        className="text-sm font-medium fill-white"
      >
        Consumer
      </text>
      <text x="320" y="125" textAnchor="middle" className="text-xs fill-white">
        Receives Data
      </text>
      <text x="320" y="145" textAnchor="middle" className="text-xs fill-white">
        Renders UI
      </text>
      <motion.circle
        initial={{ r: 0 }}
        animate={{ r: 8 }}
        transition={{
          duration: 0.5,
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        cx="110"
        cy="120"
        fill="#3b82f6"
        opacity="0.7"
      />
      <motion.circle
        initial={{ r: 0 }}
        animate={{ r: 8 }}
        transition={{
          duration: 0.5,
          delay: 1.4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        cx="320"
        cy="120"
        fill="#10b981"
        opacity="0.7"
      />
      <defs>
        <marker
          id="arrowhead2"
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
        </marker>
      </defs>
    </svg>
  );

  const renderCompoundDiagram = () => (
    <svg viewBox="0 0 400 300" className="w-full h-64">
      <rect width="400" height="300" fill="#f8fafc" rx="8" />
      <text
        x="200"
        y="30"
        textAnchor="middle"
        className="text-lg font-bold brand-h"
      >
        Compound Components Pattern
      </text>
      <motion.rect
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        x="50"
        y="80"
        width="300"
        height="140"
        rx="8"
        fill="#8b5cf6"
        stroke="#7c3aed"
        strokeWidth="2"
        strokeDasharray="5,5"
      />
      <text
        x="200"
        y="105"
        textAnchor="middle"
        className="text-sm font-medium fill-purple-800"
      >
        Select Component
      </text>
      <motion.rect
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        x="80"
        y="130"
        width="80"
        height="40"
        rx="4"
        fill="#3b82f6"
        stroke="#1e40af"
        strokeWidth="1"
      />
      <text
        x="120"
        y="155"
        textAnchor="middle"
        className="text-xs font-medium fill-white"
      >
        Select.Trigger
      </text>
      <motion.rect
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        x="180"
        y="130"
        width="80"
        height="40"
        rx="4"
        fill="#10b981"
        stroke="#059669"
        strokeWidth="1"
      />
      <text
        x="220"
        y="155"
        textAnchor="middle"
        className="text-xs font-medium fill-white"
      >
        Select.Content
      </text>

      <motion.rect
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        x="280"
        y="130"
        width="80"
        height="40"
        rx="4"
        fill="#f59e0b"
        stroke="#d97706"
        strokeWidth="1"
      />
      <text
        x="320"
        y="155"
        textAnchor="middle"
        className="text-xs font-medium fill-white"
      >
        Select.Item
      </text>
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        d="M 200 120 L 120 130"
        stroke="#6b7280"
        strokeWidth="2"
        fill="none"
        strokeDasharray="3,3"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        d="M 200 120 L 220 130"
        stroke="#6b7280"
        strokeWidth="2"
        fill="none"
        strokeDasharray="3,3"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        d="M 200 120 L 320 130"
        stroke="#6b7280"
        strokeWidth="2"
        fill="none"
        strokeDasharray="3,3"
      />
    </svg>
  );

  const renderProviderDiagram = () => (
    <svg viewBox="0 0 400 300" className="w-full h-64">
      <rect width="400" height="300" fill="#f8fafc" rx="8" />
      <text
        x="200"
        y="30"
        textAnchor="middle"
        className="text-lg font-bold brand-h"
      >
        Provider Pattern (Context API)
      </text>
      <motion.rect
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        x="50"
        y="80"
        width="120"
        height="80"
        rx="8"
        fill="#ef4444"
        stroke="#dc2626"
        strokeWidth="2"
      />
      <text
        x="110"
        y="105"
        textAnchor="middle"
        className="text-sm font-medium fill-white"
      >
        ThemeProvider
      </text>
      <text x="110" y="125" textAnchor="middle" className="text-xs fill-white">
        Global State
      </text>
      <text x="110" y="145" textAnchor="middle" className="text-xs fill-white">
        Context.Provider
      </text>
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        d="M 190 120 L 250 120"
        stroke="#6b7280"
        strokeWidth="3"
        fill="none"
        markerEnd="url(#arrowhead3)"
      />
      <motion.rect
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        x="270"
        y="80"
        width="100"
        height="40"
        rx="4"
        fill="#3b82f6"
        stroke="#1e40af"
        strokeWidth="1"
      />
      <text
        x="320"
        y="105"
        textAnchor="middle"
        className="text-xs font-medium fill-white"
      >
        Component A
      </text>
      <motion.rect
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        x="270"
        y="140"
        width="100"
        height="40"
        rx="4"
        fill="#10b981"
        stroke="#059669"
        strokeWidth="1"
      />
      <text
        x="320"
        y="165"
        textAnchor="middle"
        className="text-xs font-medium fill-white"
      >
        Component B
      </text>
      <motion.circle
        initial={{ r: 0 }}
        animate={{ r: 6 }}
        transition={{
          duration: 0.5,
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        cx="110"
        cy="120"
        fill="#ef4444"
        opacity="0.7"
      />
      <motion.circle
        initial={{ r: 0 }}
        animate={{ r: 6 }}
        transition={{
          duration: 0.5,
          delay: 1.4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        cx="320"
        cy="100"
        fill="#3b82f6"
        opacity="0.7"
      />
      <motion.circle
        initial={{ r: 0 }}
        animate={{ r: 6 }}
        transition={{
          duration: 0.5,
          delay: 1.6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        cx="320"
        cy="160"
        fill="#10b981"
        opacity="0.7"
      />
      <defs>
        <marker
          id="arrowhead3"
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
        </marker>
      </defs>
    </svg>
  );

  const renderCustomHooksDiagram = () => (
    <svg viewBox="0 0 400 300" className="w-full h-64">
      <rect width="400" height="300" fill="#f8fafc" rx="8" />
      <text
        x="200"
        y="30"
        textAnchor="middle"
        className="text-lg font-bold brand-h"
      >
        Custom Hooks Pattern
      </text>
      <motion.rect
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        x="50"
        y="80"
        width="120"
        height="80"
        rx="8"
        fill="#f59e0b"
        stroke="#d97706"
        strokeWidth="2"
      />
      <text
        x="110"
        y="105"
        textAnchor="middle"
        className="text-sm font-medium fill-white"
      >
        useApi
      </text>
      <text x="110" y="125" textAnchor="middle" className="text-xs fill-white">
        Custom Hook
      </text>
      <text x="110" y="145" textAnchor="middle" className="text-xs fill-white">
        Logic + State
      </text>
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        d="M 190 120 L 250 120"
        stroke="#6b7280"
        strokeWidth="3"
        fill="none"
        markerEnd="url(#arrowhead4)"
      />
      <motion.rect
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        x="270"
        y="60"
        width="100"
        height="50"
        rx="4"
        fill="#3b82f6"
        stroke="#1e40af"
        strokeWidth="1"
      />
      <text
        x="320"
        y="85"
        textAnchor="middle"
        className="text-xs font-medium fill-white"
      >
        Component A
      </text>
      <motion.rect
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        x="270"
        y="130"
        width="100"
        height="50"
        rx="4"
        fill="#10b981"
        stroke="#059669"
        strokeWidth="1"
      />
      <text
        x="320"
        y="155"
        textAnchor="middle"
        className="text-xs font-medium fill-white"
      >
        Component B
      </text>
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        d="M 320 85 L 110 120"
        stroke="#3b82f6"
        strokeWidth="2"
        fill="none"
        strokeDasharray="3,3"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        d="M 320 155 L 110 120"
        stroke="#10b981"
        strokeWidth="2"
        fill="none"
        strokeDasharray="3,3"
      />
      <defs>
        <marker
          id="arrowhead4"
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
        </marker>
      </defs>
    </svg>
  );

  const renderObserverDiagram = () => (
    <svg viewBox="0 0 400 300" className="w-full h-64">
      <rect width="400" height="300" fill="#f8fafc" rx="8" />
      <text
        x="200"
        y="30"
        textAnchor="middle"
        className="text-lg font-bold brand-h"
      >
        Observer Pattern
      </text>
      <motion.rect
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        x="150"
        y="80"
        width="100"
        height="60"
        rx="8"
        fill="#6366f1"
        stroke="#4f46e5"
        strokeWidth="2"
      />
      <text
        x="200"
        y="110"
        textAnchor="middle"
        className="text-sm font-medium fill-white"
      >
        Subject
      </text>
      <motion.rect
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        x="50"
        y="200"
        width="80"
        height="50"
        rx="4"
        fill="#3b82f6"
        stroke="#1e40af"
        strokeWidth="1"
      />
      <text
        x="90"
        y="230"
        textAnchor="middle"
        className="text-xs font-medium fill-white"
      >
        Observer A
      </text>
      <motion.rect
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        x="160"
        y="200"
        width="80"
        height="50"
        rx="4"
        fill="#10b981"
        stroke="#059669"
        strokeWidth="1"
      />
      <text
        x="200"
        y="230"
        textAnchor="middle"
        className="text-xs font-medium fill-white"
      >
        Observer B
      </text>
      <motion.rect
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        x="270"
        y="200"
        width="80"
        height="50"
        rx="4"
        fill="#f59e0b"
        stroke="#d97706"
        strokeWidth="1"
      />
      <text
        x="310"
        y="230"
        textAnchor="middle"
        className="text-xs font-medium fill-white"
      >
        Observer C
      </text>
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        d="M 200 140 L 90 200"
        stroke="#3b82f6"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#arrowhead5)"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        d="M 200 140 L 200 200"
        stroke="#10b981"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#arrowhead5)"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        d="M 200 140 L 310 200"
        stroke="#f59e0b"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#arrowhead5)"
      />
      <motion.circle
        initial={{ r: 0 }}
        animate={{ r: 4 }}
        transition={{
          duration: 0.5,
          delay: 1.6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        cx="200"
        cy="110"
        fill="#ef4444"
        opacity="0.8"
      />
      <defs>
        <marker
          id="arrowhead5"
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
        </marker>
      </defs>
    </svg>
  );

  const renderFactoryDiagram = () => (
    <svg viewBox="0 0 400 300" className="w-full h-64">
      <rect width="400" height="300" fill="#f8fafc" rx="8" />
      <text
        x="200"
        y="30"
        textAnchor="middle"
        className="text-lg font-bold brand-h"
      >
        Factory Pattern
      </text>
      <motion.rect
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        x="150"
        y="80"
        width="100"
        height="80"
        rx="8"
        fill="#ec4899"
        stroke="#db2777"
        strokeWidth="2"
      />
      <text
        x="200"
        y="105"
        textAnchor="middle"
        className="text-sm font-medium fill-white"
      >
        Factory
      </text>
      <text x="200" y="125" textAnchor="middle" className="text-xs fill-white">
        createComponent()
      </text>
      <text x="200" y="145" textAnchor="middle" className="text-xs fill-white">
        register()
      </text>
      <motion.rect
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        x="50"
        y="200"
        width="80"
        height="50"
        rx="4"
        fill="#3b82f6"
        stroke="#1e40af"
        strokeWidth="1"
      />
      <text
        x="90"
        y="230"
        textAnchor="middle"
        className="text-xs font-medium fill-white"
      >
        Button
      </text>
      <motion.rect
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        x="160"
        y="200"
        width="80"
        height="50"
        rx="4"
        fill="#10b981"
        stroke="#059669"
        strokeWidth="1"
      />
      <text
        x="200"
        y="230"
        textAnchor="middle"
        className="text-xs font-medium fill-white"
      >
        Input
      </text>
      <motion.rect
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        x="270"
        y="200"
        width="80"
        height="50"
        rx="4"
        fill="#f59e0b"
        stroke="#d97706"
        strokeWidth="1"
      />
      <text
        x="310"
        y="230"
        textAnchor="middle"
        className="text-xs font-medium fill-white"
      >
        Card
      </text>
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        d="M 200 160 L 90 200"
        stroke="#3b82f6"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#arrowhead6)"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        d="M 200 160 L 200 200"
        stroke="#10b981"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#arrowhead6)"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        d="M 200 160 L 310 200"
        stroke="#f59e0b"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#arrowhead6)"
      />
      <defs>
        <marker
          id="arrowhead6"
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
        </marker>
      </defs>
    </svg>
  );

  const renderMemoizationDiagram = () => (
    <svg viewBox="0 0 400 300" className="w-full h-64">
      <rect width="400" height="300" fill="#f8fafc" rx="8" />
      <text
        x="200"
        y="30"
        textAnchor="middle"
        className="text-lg font-bold brand-h"
      >
        Memoization Pattern
      </text>
      <motion.rect
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        x="50"
        y="80"
        width="80"
        height="50"
        rx="4"
        fill="#2dd4bf"
        stroke="#14b8a6"
        strokeWidth="2"
      />
      <text
        x="90"
        y="110"
        textAnchor="middle"
        className="text-sm font-medium fill-white"
      >
        Input
      </text>
      <motion.rect
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        x="160"
        y="80"
        width="80"
        height="50"
        rx="4"
        fill="#0d9488"
        stroke="#0f766e"
        strokeWidth="2"
      />
      <text
        x="200"
        y="110"
        textAnchor="middle"
        className="text-sm font-medium fill-white"
      >
        Function
      </text>
      <motion.rect
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        x="160"
        y="160"
        width="80"
        height="50"
        rx="4"
        fill="#5eead4"
        stroke="#2dd4bf"
        strokeWidth="2"
      />
      <text
        x="200"
        y="190"
        textAnchor="middle"
        className="text-sm font-medium fill-gray-800"
      >
        Cache
      </text>
      <motion.rect
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        x="270"
        y="80"
        width="80"
        height="50"
        rx="4"
        fill="#2dd4bf"
        stroke="#14b8a6"
        strokeWidth="2"
      />
      <text
        x="310"
        y="110"
        textAnchor="middle"
        className="text-sm font-medium fill-white"
      >
        Output
      </text>
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        d="M 130 105 L 160 105"
        stroke="#6b7280"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#arrowhead7)"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        d="M 240 105 L 270 105"
        stroke="#6b7280"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#arrowhead7)"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        d="M 200 130 L 200 160"
        stroke="#6b7280"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#arrowhead7)"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        d="M 200 210 L 200 130"
        stroke="#6b7280"
        strokeWidth="2"
        fill="none"
        strokeDasharray="3,3"
        markerEnd="url(#arrowhead7)"
      />
      <motion.circle
        initial={{ r: 0 }}
        animate={{ r: 6 }}
        transition={{
          duration: 0.5,
          delay: 1.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        cx="200"
        cy="185"
        fill="#10b981"
        opacity="0.8"
      />

      <defs>
        <marker
          id="arrowhead7"
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
        </marker>
      </defs>
    </svg>
  );

  const renderDiagram = () => {
    switch (pattern) {
      case "hoc":
        return renderHOCDiagram();
      case "render-props":
        return renderRenderPropsDiagram();
      case "compound":
        return renderCompoundDiagram();
      case "provider":
        return renderProviderDiagram();
      case "custom-hooks":
        return renderCustomHooksDiagram();
      case "observer":
        return renderObserverDiagram();
      case "factory":
        return renderFactoryDiagram();
      case "memoization":
        return renderMemoizationDiagram();
      default:
        return (
          <div className="flex items-center justify-center h-64 brand-sub">
            <div className="text-center">
              <div className="text-4xl mb-2">📊</div>
              <p>Diyagram bulunamadı</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div
      className={`bg-white dark:bg-secondary-800 rounded-lg p-4 shadow-lg ${className}`}
    >
      {renderDiagram()}
    </div>
  );
};

export default PatternDiagram;
