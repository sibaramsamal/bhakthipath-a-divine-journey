import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Video, Calendar, ArrowRight, Sparkles, Play } from 'lucide-react';

const programs = [
  {
    id: 'online-satsang',
    title: 'Weekly Online Satsang',
    description: 'Join spiritual discussions and Q&A sessions',
    schedule: 'Every Sunday 7 PM',
    type: 'Live',
    participants: 500
  },
  {
    id: 'gita-study',
    title: 'Bhagavad Gita Study Circle',
    description: 'Deep dive into Krishna\'s teachings',
    schedule: 'Tuesdays & Thursdays',
    type: 'Interactive',
    participants: 200
  },
  {
    id: 'meditation-sessions',
    title: 'Guided Meditation Sessions',
    description: 'Learn the art of Krishna consciousness meditation',
    schedule: 'Daily 6 AM',
    type: 'Practice',
    participants: 150
  }
];

const Perfect: React.FC = () => {
  useEffect(() => {
    const updateProgress = (window as any).updateSpiritualProgress;
    if (updateProgress) {
      updateProgress('perfect');
    }
  }, []);

  const handleProceed = () => {
    const userDetails = localStorage.getItem('bhaktipath-user');
    if (!userDetails) {
      const event = new CustomEvent('triggerProceedModal');
      window.dispatchEvent(event);
    } else {
      window.location.href = '/perceive';
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20">
      <div className="text-center space-y-4">
        <div className="w-20 h-20 mx-auto bg-saffron/10 rounded-full flex items-center justify-center float-animation">
          <Star className="w-10 h-10 text-saffron pulse-divine" />
        </div>
        
        <div>
          <h1 className="text-3xl font-divine font-bold divine-title mb-2">
            ⭐ Perfect - Spiritual Enhancement
          </h1>
          <p className="text-muted-foreground">
            Elevate your spiritual journey through divine programs
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {programs.map((program) => (
          <Card key={program.id} className="sacred-shadow border-saffron/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-saffron/10 rounded-full flex items-center justify-center">
                    <Video className="w-6 h-6 text-saffron" />
                  </div>
                  <div>
                    <CardTitle className="text-saffron">{program.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{program.schedule}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge className="bg-saffron text-white mb-2">{program.type}</Badge>
                  <p className="text-xs text-muted-foreground">{program.participants} members</p>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <p className="text-muted-foreground mb-4">{program.description}</p>
              <Button className="saffron-gradient hover:opacity-90">
                <Play className="w-4 h-4 mr-2" />
                Join Program
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button 
          onClick={handleProceed}
          size="lg"
          className="saffron-gradient hover:opacity-90 divine-transition shadow-divine-glow"
        >
          <Sparkles className="w-5 h-5 mr-2" />
          Continue to Perceive
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default Perfect;