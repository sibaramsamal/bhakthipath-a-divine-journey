import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import lordKrishnaDeity from '@/assets/lord-krishna-deity.png';

export const DeityCenter: React.FC = () => {
  const [soundEnabled, setSoundEnabled] = useState(false);

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
    // Here you would implement actual audio control
    console.log(`Divine ambient sound ${soundEnabled ? 'disabled' : 'enabled'}`);
  };

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5 pointer-events-none">
      {/* Deity Image */}
      <div className="relative">
        <div className="w-32 h-48 md:w-40 md:h-60 rounded-lg overflow-hidden sacred-shadow divine-glow">
          <img 
            src={lordKrishnaDeity}
            alt="Lord Krishna"
            className="w-full h-full object-cover float-animation"
          />
        </div>
        
        {/* Divine Glow Effect */}
        <div className="absolute inset-0 rounded-lg bg-saffron/20 opacity-50 pulse-divine"></div>
        
        {/* Floating Lotus Petals */}
        <div className="absolute -top-4 -left-4 w-4 h-4 bg-lotus-pink rounded-full opacity-70 offerings-float"></div>
        <div className="absolute -top-2 right-0 w-3 h-3 bg-sacred-gold rounded-full opacity-60 offerings-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 -left-2 w-2 h-2 bg-lotus-pink rounded-full opacity-80 offerings-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Sound Toggle */}
      <div className="absolute top-0 right-0 transform translate-x-8 pointer-events-auto">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSound}
          className="w-8 h-8 bg-card/80 backdrop-blur-sm hover:bg-sandalwood divine-transition sacred-shadow"
        >
          {soundEnabled ? (
            <Volume2 className="w-4 h-4 text-saffron" />
          ) : (
            <VolumeX className="w-4 h-4 text-muted-foreground" />
          )}
        </Button>
      </div>
    </div>
  );
};