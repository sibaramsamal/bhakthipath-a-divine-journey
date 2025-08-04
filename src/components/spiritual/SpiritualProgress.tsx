import React, { useEffect, useState } from 'react';
import { Progress } from '@/components/ui/progress';

export const SpiritualProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);
  
  const spiritualPaths = [
    'prepare', 'pray', 'perform', 'participate', 
    'purchase', 'perfect', 'perceive', 'pledge'
  ];

  useEffect(() => {
    const visitedPaths = JSON.parse(localStorage.getItem('bhaktipath-visited') || '[]');
    const progressPercentage = (visitedPaths.length / spiritualPaths.length) * 100;
    setProgress(progressPercentage);
  }, []);

  const updateProgress = (pathName: string) => {
    const visitedPaths = JSON.parse(localStorage.getItem('bhaktipath-visited') || '[]');
    if (!visitedPaths.includes(pathName)) {
      visitedPaths.push(pathName);
      localStorage.setItem('bhaktipath-visited', JSON.stringify(visitedPaths));
      const progressPercentage = (visitedPaths.length / spiritualPaths.length) * 100;
      setProgress(progressPercentage);
    }
  };

  // Expose function globally for pages to call
  React.useEffect(() => {
    (window as any).updateSpiritualProgress = updateProgress;
  }, []);

  if (progress === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-20 w-64 p-4 bg-card/90 backdrop-blur-sm rounded-lg sacred-shadow border border-saffron/20">
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="font-sanskrit text-saffron">Spiritual Journey</span>
          <span className="text-sacred-gold font-semibold">{Math.round(progress)}%</span>
        </div>
        
        <Progress 
          value={progress} 
          className="h-2 bg-sandalwood"
        />
        
        <div className="text-xs text-muted-foreground text-center">
          {progress === 100 ? (
            <span className="text-sacred-gold font-medium">🏆 Divine Journey Complete!</span>
          ) : (
            <span>Continue your sacred path</span>
          )}
        </div>
      </div>
    </div>
  );
};