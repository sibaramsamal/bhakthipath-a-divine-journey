import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Image, Book, ArrowRight, Sparkles, Play } from 'lucide-react';

const galleries = [
  {
    id: 'deity-gallery',
    title: 'Divine Deity Gallery',
    description: 'Beautiful images of Lord Krishna from ISKCON temples worldwide',
    type: 'Images',
    count: 150,
    thumbnail: '🖼️'
  },
  {
    id: 'festival-videos',
    title: 'Festival Celebrations',
    description: 'Video recordings of Janmashtami celebrations',
    type: 'Videos',
    count: 25,
    thumbnail: '🎥'
  },
  {
    id: 'sacred-articles',
    title: 'Sacred Articles',
    description: 'Inspiring articles about Krishna consciousness',
    type: 'Articles',
    count: 50,
    thumbnail: '📚'
  }
];

const Perceive: React.FC = () => {
  useEffect(() => {
    const updateProgress = (window as any).updateSpiritualProgress;
    if (updateProgress) {
      updateProgress('perceive');
    }
  }, []);

  const handleProceed = () => {
    const userDetails = localStorage.getItem('bhaktipath-user');
    if (!userDetails) {
      const event = new CustomEvent('triggerProceedModal');
      window.dispatchEvent(event);
    } else {
      window.location.href = '/pledge';
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20">
      <div className="text-center space-y-4">
        <div className="w-20 h-20 mx-auto bg-maroon/10 rounded-full flex items-center justify-center float-animation">
          <Eye className="w-10 h-10 text-maroon" />
        </div>
        
        <div>
          <h1 className="text-3xl font-divine font-bold divine-title mb-2">
            👁️ Perceive - Divine Gallery
          </h1>
          <p className="text-muted-foreground">
            Explore sacred images, videos, and enlightening articles
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleries.map((gallery) => (
          <Card key={gallery.id} className="sacred-shadow border-saffron/20">
            <CardHeader className="text-center">
              <div className="text-6xl mb-2">{gallery.thumbnail}</div>
              <CardTitle className="text-saffron">{gallery.title}</CardTitle>
              <Badge className="bg-maroon text-white">{gallery.count} {gallery.type}</Badge>
            </CardHeader>
            
            <CardContent className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">{gallery.description}</p>
              <Button className="saffron-gradient hover:opacity-90 w-full">
                <Eye className="w-4 h-4 mr-2" />
                Explore Gallery
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
          Continue to Pledge
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default Perceive;