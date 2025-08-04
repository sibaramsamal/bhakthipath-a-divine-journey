import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Calendar, Music, ArrowRight, Sparkles, Heart } from 'lucide-react';

const events = [
  {
    id: 'krishna-bhajan',
    title: 'Krishna Bhajan Evening',
    description: 'Join devotees in melodious kirtans and bhajans',
    time: '6:00 PM - 8:00 PM',
    category: 'Music',
    icon: Music,
    participants: 150
  },
  {
    id: 'seva-kitchen',
    title: 'Prasadam Kitchen Seva',
    description: 'Help prepare sacred food for Lord Krishna',
    time: '10:00 AM - 2:00 PM',
    category: 'Seva',
    icon: Heart,
    participants: 75
  },
  {
    id: 'cultural-dance',
    title: 'Ras Lila Cultural Dance',
    description: 'Traditional dance depicting Krishna\'s divine pastimes',
    time: '7:00 PM - 9:00 PM',
    category: 'Cultural',
    icon: Users,
    participants: 200
  }
];

const Participate: React.FC = () => {
  useEffect(() => {
    const updateProgress = (window as any).updateSpiritualProgress;
    if (updateProgress) {
      updateProgress('participate');
    }
  }, []);

  const handleProceed = () => {
    const userDetails = localStorage.getItem('bhaktipath-user');
    if (!userDetails) {
      const event = new CustomEvent('triggerProceedModal');
      window.dispatchEvent(event);
    } else {
      window.location.href = '/purchase';
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20">
      <div className="text-center space-y-4">
        <div className="w-20 h-20 mx-auto bg-divine-blue/10 rounded-full flex items-center justify-center float-animation">
          <Users className="w-10 h-10 text-divine-blue" />
        </div>
        
        <div>
          <h1 className="text-3xl font-divine font-bold divine-title mb-2">
            🤝 Participate - Community Seva
          </h1>
          <p className="text-muted-foreground">
            Join fellow devotees in sacred service and cultural celebration
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {events.map((event) => {
          const IconComponent = event.icon;
          
          return (
            <Card key={event.id} className="sacred-shadow border-saffron/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-divine-blue/10 rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-divine-blue" />
                    </div>
                    <div>
                      <CardTitle className="text-saffron">{event.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{event.time}</p>
                    </div>
                  </div>
                  <Badge className="bg-divine-blue text-white">
                    {event.participants} joined
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4">{event.description}</p>
                <Button className="saffron-gradient hover:opacity-90">
                  Join Event
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="text-center">
        <Button 
          onClick={handleProceed}
          size="lg"
          className="saffron-gradient hover:opacity-90 divine-transition shadow-divine-glow"
        >
          <Sparkles className="w-5 h-5 mr-2" />
          Continue to Purchase
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default Participate;