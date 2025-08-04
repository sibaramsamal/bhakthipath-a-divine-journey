import React from 'react';

export const IncenseSmoke: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Multiple smoke particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-8 bg-gradient-to-t from-sandalwood/30 to-transparent rounded-full incense-smoke opacity-40"
          style={{
            left: `${20 + i * 15}%`,
            bottom: '10%',
            animationDelay: `${i * 1.5}s`,
            animationDuration: `${8 + i}s`
          }}
        />
      ))}
      
      {/* Additional subtle smoke effects */}
      {[...Array(4)].map((_, i) => (
        <div
          key={`smoke-${i}`}
          className="absolute w-1 h-6 bg-gradient-to-t from-sacred-gold/20 to-transparent rounded-full incense-smoke opacity-30"
          style={{
            right: `${10 + i * 20}%`,
            bottom: '15%',
            animationDelay: `${i * 2}s`,
            animationDuration: `${10 + i}s`
          }}
        />
      ))}
    </div>
  );
};