import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Clock, ArrowRight, Sparkles } from 'lucide-react';

const Prepare: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    // Update progress for visiting prepare page
    const updateProgress = (window as any).updateSpiritualProgress;
    if (updateProgress) {
      updateProgress('prepare');
    }
  }, []);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setScrollProgress(Math.min(progress, 100));
    
    if (progress >= 80 && !isCompleted) {
      setIsCompleted(true);
    }
  };

  const handleProceed = () => {
    const userDetails = localStorage.getItem('bhaktipath-user');
    if (!userDetails) {
      const event = new CustomEvent('triggerProceedModal');
      window.dispatchEvent(event);
    } else {
      window.location.href = '/pray';
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="w-20 h-20 mx-auto bg-sacred-gold/10 rounded-full flex items-center justify-center float-animation">
          <BookOpen className="w-10 h-10 text-sacred-gold" />
        </div>
        
        <div>
          <h1 className="text-3xl font-divine font-bold divine-title mb-2">
            🕉️ Prepare - Sacred Foundation
          </h1>
          <p className="text-muted-foreground">
            Understand the divine significance of Janmashtami before beginning your spiritual journey
          </p>
        </div>

        {/* Reading Progress */}
        <Card className="border-saffron/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <Clock className="w-5 h-5 text-saffron" />
              <div className="flex-1">
                <div className="flex justify-between text-sm mb-1">
                  <span>Reading Progress</span>
                  <span className="text-saffron font-medium">{Math.round(scrollProgress)}%</span>
                </div>
                <Progress value={scrollProgress} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Article Content */}
      <Card className="sacred-shadow border-saffron/20">
        <CardHeader>
          <CardTitle className="text-saffron font-sanskrit text-center">
            What is Janmashtami and its Significance?
          </CardTitle>
        </CardHeader>
        
        <CardContent>
          <ScrollArea 
            className="h-96 w-full pr-4"
            onScrollCapture={handleScroll}
          >
            <div className="space-y-6 text-justify leading-relaxed">
              <div className="typewriter text-lg font-sanskrit text-saffron text-center mb-6">
                🙏 जन्माष्टमी - भगवान श्रीकृष्ण का दिव्य प्राकट्य दिवस 🙏
              </div>

              <p className="text-base">
                <strong className="text-saffron">Janmashtami</strong> is the divine appearance day of Lord Sri Krishna, 
                the Supreme Personality of Godhead, who descended on earth over 5,000 years ago in 
                Mathura, India. It is observed on the eighth day (ashtami) of the dark fortnight in the month 
                of Sravana (July-August).
              </p>

              <div className="bg-sandalwood/20 p-4 rounded-lg border-l-4 border-saffron">
                <h3 className="font-semibold text-saffron mb-2">The Divine Purpose</h3>
                <p>
                  He descends to protect devotees, destroy evil, and reestablish dharma. His birth is 
                  transcendental, and remembering His pastimes purifies the heart. Srila Prabhupada taught 
                  that celebrating Janmashtami means awakening devotion, deepening our Krishna consciousness, 
                  and making a lifelong commitment to spiritual life.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-maroon">🌺 The Sacred Celebration</h3>
                <p>
                  Janmashtami is celebrated with great devotion across the world. Devotees observe fasting, 
                  chant the holy names, perform kirtans, and engage in various seva (service) activities. 
                  The celebration typically includes:
                </p>

                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li className="text-sm">🎵 <strong>Sankirtana:</strong> Congregational chanting of Krishna's holy names</li>
                  <li className="text-sm">📖 <strong>Katha:</strong> Narrating the pastimes of Lord Krishna's birth</li>
                  <li className="text-sm">🌸 <strong>Archana:</strong> Offering prayers and flowers to the deity</li>
                  <li className="text-sm">🍯 <strong>Bhoga:</strong> Preparing and offering delicious food to Krishna</li>
                  <li className="text-sm">💃 <strong>Cultural Programs:</strong> Dances, dramas depicting Krishna lila</li>
                </ul>
              </div>

              <div className="bg-lotus-pink/20 p-4 rounded-lg">
                <h3 className="font-semibold text-maroon mb-2">🕉️ Spiritual Significance</h3>
                <p>
                  The celebration of Janmashtami is not just an external festival but an inner transformation. 
                  When we participate with sincere devotion, we invite Krishna to appear in our hearts. 
                  This divine connection helps us transcend material consciousness and develop pure love for God.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-saffron">🏛️ ISKCON's Role</h3>
                <p>
                  The International Society for Krishna Consciousness (ISKCON) has been instrumental in 
                  spreading the celebration of Janmashtami worldwide. Founded by His Divine Grace A.C. 
                  Bhaktivedanta Swami Prabhupada, ISKCON centers organize grand festivities, allowing 
                  people from all backgrounds to participate in this divine celebration.
                </p>
              </div>

              <div className="text-center p-6 bg-saffron/10 rounded-lg">
                <div className="text-2xl font-sanskrit text-saffron mb-2">
                  हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे
                </div>
                <div className="text-2xl font-sanskrit text-saffron mb-3">
                  हरे राम हरे राम राम राम हरे हरे
                </div>
                <p className="text-sm text-muted-foreground italic">
                  The maha-mantra that purifies the heart and connects us with the Supreme
                </p>
              </div>

              {isCompleted && (
                <div className="text-center p-4 bg-sacred-gold/10 rounded-lg offerings-float">
                  <Sparkles className="w-8 h-8 mx-auto text-sacred-gold mb-2" />
                  <p className="text-sacred-gold font-semibold">
                    🎉 Wonderful! You have completed the preparation step!
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Your heart is now ready for the divine journey ahead
                  </p>
                </div>
              )}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Proceed Button */}
      <div className="text-center">
        <Button 
          onClick={handleProceed}
          size="lg"
          className="saffron-gradient hover:opacity-90 divine-transition shadow-divine-glow"
          disabled={!isCompleted}
        >
          {isCompleted ? (
            <>
              <Sparkles className="w-5 h-5 mr-2" />
              Continue to Prayer
              <ArrowRight className="w-5 h-5 ml-2" />
            </>
          ) : (
            <>
              <BookOpen className="w-5 h-5 mr-2" />
              Complete Reading First
            </>
          )}
        </Button>
        
        {!isCompleted && (
          <p className="text-sm text-muted-foreground mt-2">
            Please read the complete article to proceed
          </p>
        )}
      </div>
    </div>
  );
};

export default Prepare;