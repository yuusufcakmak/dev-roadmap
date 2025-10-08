import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface ProgressData {
  completedTopics: string[];
  lastVisitedTopic?: string;
  totalProgress: number;
}

interface ProgressContextType {
  progress: ProgressData;
  markTopicCompleted: (topicId: string) => void;
  markTopicIncomplete: (topicId: string) => void;
  isTopicCompleted: (topicId: string) => boolean;
  updateLastVisitedTopic: (topicId: string) => void;
  getProgressPercentage: () => number;
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

interface ProgressProviderProps {
  children: ReactNode;
  totalTopics?: number;
}

export const ProgressProvider: React.FC<ProgressProviderProps> = ({ 
  children, 
  totalTopics = 0 
}) => {
  const [progress, setProgress] = useState<ProgressData>(() => {
    const savedProgress = localStorage.getItem('react-roadmap-progress');
    if (savedProgress) {
      return JSON.parse(savedProgress);
    }
    return {
      completedTopics: [],
      totalProgress: 0,
    };
  });

  useEffect(() => {
    localStorage.setItem('react-roadmap-progress', JSON.stringify(progress));
  }, [progress]);

  const markTopicCompleted = (topicId: string) => {
    setProgress(prev => {
      if (!prev.completedTopics.includes(topicId)) {
        const newCompletedTopics = [...prev.completedTopics, topicId];
        const newProgress = totalTopics > 0 ? (newCompletedTopics.length / totalTopics) * 100 : 0;
        
        return {
          ...prev,
          completedTopics: newCompletedTopics,
          totalProgress: newProgress,
        };
      }
      return prev;
    });
  };

  const markTopicIncomplete = (topicId: string) => {
    setProgress(prev => {
      const newCompletedTopics = prev.completedTopics.filter(id => id !== topicId);
      const newProgress = totalTopics > 0 ? (newCompletedTopics.length / totalTopics) * 100 : 0;
      
      return {
        ...prev,
        completedTopics: newCompletedTopics,
        totalProgress: newProgress,
      };
    });
  };

  const isTopicCompleted = (topicId: string): boolean => {
    return progress.completedTopics.includes(topicId);
  };

  const updateLastVisitedTopic = (topicId: string) => {
    setProgress(prev => ({
      ...prev,
      lastVisitedTopic: topicId,
    }));
  };

  const getProgressPercentage = (): number => {
    return progress.totalProgress;
  };

  const resetProgress = () => {
    setProgress({
      completedTopics: [],
      totalProgress: 0,
    });
  };

  const value: ProgressContextType = {
    progress,
    markTopicCompleted,
    markTopicIncomplete,
    isTopicCompleted,
    updateLastVisitedTopic,
    getProgressPercentage,
    resetProgress,
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = (): ProgressContextType => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
