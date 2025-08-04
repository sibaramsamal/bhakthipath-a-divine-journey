import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Heart, Play, Pause, Volume2, ArrowRight, Sparkles, RotateCcw } from 'lucide-react';

interface Mantra {
  id: string;
  title: string;
  sanskrit: string;
  translation: string;
  duration: string;
  audioUrl?: string;
}

const mantras: Mantra[] = [
  {
    id: 'maha-mantra',
    title: 'Hare Krishna Maha Mantra',
    sanskrit: 'हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे। हरे राम हरे राम राम राम हरे हरे॥',
    translation: 'O Lord Krishna and Lord Rama, please engage me in Your devotional service',
    duration: '108 times'
  },
  {
    id: 'krishna-mantra',
    title: 'Krishna Janma Mantra',
    sanskrit: 'कृष्णाय वासुदेवाय हरये परमात्मने। प्रणत क्लेशनाशाय गोविन्दाय नमो नमः॥',
    translation: 'Salutations to Krishna, son of Vasudeva, who destroys all sufferings',
    duration: '21 times'
  },
  {
    id: 'govinda-mantra',
    title: 'Govinda Mantra',
    sanskrit: 'गोविन्द जय जय गोपाल जय जय। राधा रमण हरि गोविन्द जय जय॥',
    translation: 'Glory to Govinda, glory to Gopal, glory to Radha-Raman Hari',
    duration: '51 times'
  }
];

const Pray: React.FC = () => {
  const [chantingCount, setChantingCount] = useState<{ [key: string]: number }>({});
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);
  const [completedMantras, setCompletedMantras] = useState<string[]>([]);

  useEffect(() => {
    // Update progress for visiting pray page
    const updateProgress = (window as any).updateSpiritualProgress;
    if (updateProgress) {
      updateProgress('pray');
    }

    // Load saved progress
    const savedProgress = localStorage.getItem('bhaktipath-chanting-progress');
    if (savedProgress) {
      const progress = JSON.parse(savedProgress);
      setChantingCount(progress.counts || {});
      setCompletedMantras(progress.completed || []);
    }
  }, []);

  const saveProgress = (counts: { [key: string]: number }, completed: string[]) => {
    localStorage.setItem('bhaktipath-chanting-progress', JSON.stringify({
      counts,
      completed
    }));
  };

  const handleChant = (mantraId: string) => {
    const newCounts = { ...chantingCount };
    newCounts[mantraId] = (newCounts[mantraId] || 0) + 1;
    setChantingCount(newCounts);

    // Check if mantra is completed
    const mantra = mantras.find(m => m.id === mantraId);
    const targetCount = getTargetCount(mantra?.duration || '');
    
    let newCompleted = [...completedMantras];
    if (newCounts[mantraId] >= targetCount && !completedMantras.includes(mantraId)) {
      newCompleted.push(mantraId);
      setCompletedMantras(newCompleted);
    }

    saveProgress(newCounts, newCompleted);
  };

  const getTargetCount = (duration: string): number => {
    if (duration.includes('108')) return 108;
    if (duration.includes('51')) return 51;
    if (duration.includes('21')) return 21;
    return 10;
  };

  const getProgress = (mantraId: string, duration: string): number => {
    const current = chantingCount[mantraId] || 0;
    const target = getTargetCount(duration);
    return Math.min((current / target) * 100, 100);
  };

  const toggleAudio = (mantraId: string) => {
    if (currentlyPlaying === mantraId) {
      setCurrentlyPlaying(null);
    } else {
      setCurrentlyPlaying(mantraId);
    }
  };

  const resetMantra = (mantraId: string) => {
    const newCounts = { ...chantingCount };
    newCounts[mantraId] = 0;
    setChantingCount(newCounts);
    
    const newCompleted = completedMantras.filter(id => id !== mantraId);
    setCompletedMantras(newCompleted);
    
    saveProgress(newCounts, newCompleted);
  };

  const handleProceed = () => {
    const userDetails = localStorage.getItem('bhaktipath-user');
    if (!userDetails) {
      const event = new CustomEvent('triggerProceedModal');
      window.dispatchEvent(event);
    } else {
      window.location.href = '/perform';
    }
  };

  const allMantrasCompleted = mantras.every(mantra => completedMantras.includes(mantra.id));

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="w-20 h-20 mx-auto bg-maroon/10 rounded-full flex items-center justify-center float-animation">
          <Heart className="w-10 h-10 text-maroon pulse-divine" />
        </div>
        
        <div>
          <h1 className="text-3xl font-divine font-bold divine-title mb-2">
            🙏 Pray - Divine Connection
          </h1>
          <p className="text-muted-foreground">
            Chant sacred mantras to purify your heart and connect with Lord Krishna
          </p>
        </div>

        <Card className="border-saffron/20 bg-sandalwood/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-saffron">{completedMantras.length}</div>
                <div className="text-sm text-muted-foreground">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-maroon">{mantras.length - completedMantras.length}</div>
                <div className="text-sm text-muted-foreground">Remaining</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mantras */}
      <div className="space-y-6">
        {mantras.map((mantra, index) => {
          const isCompleted = completedMantras.includes(mantra.id);
          const progress = getProgress(mantra.id, mantra.duration);
          const currentCount = chantingCount[mantra.id] || 0;
          const targetCount = getTargetCount(mantra.duration);

          return (
            <Card 
              key={mantra.id} 
              className={`sacred-shadow border-saffron/20 divine-transition ${
                isCompleted ? 'bg-sacred-gold/10 border-sacred-gold' : ''
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-saffron font-sanskrit flex items-center gap-2">
                    {mantra.title}
                    {isCompleted && <Sparkles className="w-5 h-5 text-sacred-gold" />}
                  </CardTitle>
                  <Badge variant={isCompleted ? "default" : "outline"} className="bg-saffron/10">
                    Step {index + 1}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Sanskrit Text */}
                <div className="bg-sandalwood/20 p-4 rounded-lg text-center">
                  <div className="text-lg font-sanskrit text-maroon leading-relaxed mb-2">
                    {mantra.sanskrit}
                  </div>
                  <div className="text-sm text-muted-foreground italic">
                    {mantra.translation}
                  </div>
                </div>

                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Chanting Progress</span>
                    <span className="text-saffron font-medium">
                      {currentCount} / {targetCount}
                    </span>
                  </div>
                  <Progress value={progress} className="h-3" />
                </div>

                {/* Controls */}
                <div className="flex flex-wrap gap-3 justify-center">
                  {/* Audio Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toggleAudio(mantra.id)}
                    className="hover:bg-sandalwood"
                  >
                    {currentlyPlaying === mantra.id ? (
                      <Pause className="w-4 h-4 mr-2" />
                    ) : (
                      <Play className="w-4 h-4 mr-2" />
                    )}
                    <Volume2 className="w-4 h-4" />
                  </Button>

                  {/* Chant Button */}
                  <Button
                    onClick={() => handleChant(mantra.id)}
                    disabled={isCompleted}
                    className={`${
                      isCompleted 
                        ? 'bg-sacred-gold/20 text-sacred-gold' 
                        : 'saffron-gradient hover:opacity-90'
                    } divine-transition`}
                  >
                    {isCompleted ? (
                      <>
                        <Sparkles className="w-4 h-4 mr-2" />
                        Completed
                      </>
                    ) : (
                      <>
                        <Heart className="w-4 h-4 mr-2" />
                        Chant ({currentCount + 1})
                      </>
                    )}
                  </Button>

                  {/* Reset Button */}
                  {currentCount > 0 && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => resetMantra(mantra.id)}
                      className="hover:bg-maroon/10 text-maroon"
                    >
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Reset
                    </Button>
                  )}
                </div>

                {isCompleted && (
                  <div className="text-center p-3 bg-sacred-gold/10 rounded-lg offerings-float">
                    <p className="text-sacred-gold font-semibold text-sm">
                      🌺 Beautiful! Your prayers have reached Lord Krishna's lotus feet
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Proceed Button */}
      <div className="text-center">
        <Button 
          onClick={handleProceed}
          size="lg"
          className="saffron-gradient hover:opacity-90 divine-transition shadow-divine-glow"
          disabled={!allMantrasCompleted}
        >
          {allMantrasCompleted ? (
            <>
              <Sparkles className="w-5 h-5 mr-2" />
              Continue to Perform Rituals
              <ArrowRight className="w-5 h-5 ml-2" />
            </>
          ) : (
            <>
              <Heart className="w-5 h-5 mr-2" />
              Complete All Prayers First
            </>
          )}
        </Button>
        
        {!allMantrasCompleted && (
          <p className="text-sm text-muted-foreground mt-2">
            Please complete all mantras to proceed
          </p>
        )}
      </div>
    </div>
  );
};

export default Pray;