import React, { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { 
  BookOpen, 
  Heart, 
  Flower, 
  Users, 
  ShoppingBag, 
  Star, 
  Eye, 
  Target,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const spiritualPaths = [
  { 
    title: "Prepare", 
    path: "/prepare", 
    icon: BookOpen, 
    description: "Sacred preparation through divine articles",
    color: "text-sacred-gold",
    bgColor: "bg-sacred-gold/10"
  },
  { 
    title: "Pray", 
    path: "/pray", 
    icon: Heart, 
    description: "Divine prayers and sacred mantras",
    color: "text-maroon",
    bgColor: "bg-maroon/10"
  },
  { 
    title: "Perform", 
    path: "/perform", 
    icon: Flower, 
    description: "Sacred rituals and archana booking",
    color: "text-saffron",
    bgColor: "bg-saffron/10"
  },
  { 
    title: "Participate", 
    path: "/participate", 
    icon: Users, 
    description: "Community seva and events",
    color: "text-divine-blue",
    bgColor: "bg-divine-blue/10"
  },
  { 
    title: "Purchase", 
    path: "/purchase", 
    icon: ShoppingBag, 
    description: "Divine offerings and prasadam",
    color: "text-sacred-gold",
    bgColor: "bg-sacred-gold/10"
  },
  { 
    title: "Perfect", 
    path: "/perfect", 
    icon: Star, 
    description: "Spiritual programs and association",
    color: "text-saffron",
    bgColor: "bg-saffron/10"
  },
  { 
    title: "Perceive", 
    path: "/perceive", 
    icon: Eye, 
    description: "Divine gallery and sacred articles",
    color: "text-maroon",
    bgColor: "bg-maroon/10"
  },
  { 
    title: "Pledge", 
    path: "/pledge", 
    icon: Target, 
    description: "Sacred vows and daily commitments",
    color: "text-divine-blue",
    bgColor: "bg-divine-blue/10"
  },
];

const Home: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Update progress for visiting home
    const updateProgress = (window as any).updateSpiritualProgress;
    if (updateProgress) {
      updateProgress('home');
    }
  }, []);

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  const handleProceed = () => {
    const userDetails = localStorage.getItem('bhaktipath-user');
    if (!userDetails) {
      // Trigger the proceed modal from layout
      const event = new CustomEvent('triggerProceedModal');
      window.dispatchEvent(event);
    } else {
      // Navigate to first path
      navigate('/prepare');
    }
  };

  return (
    <div className="space-y-8 pb-20">
      {/* Welcome Section */}
      <div className="text-center space-y-4 mt-8">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-divine font-bold divine-title">
            🙏 Welcome to BhaktiPath
          </h1>
          <p className="text-lg text-muted-foreground font-sanskrit">
            Your Divine Janmashtami Journey Awaits
          </p>
        </div>
        
        <div className="flex items-center justify-center gap-2 text-sm">
          <Sparkles className="w-4 h-4 text-saffron" />
          <span className="text-saffron font-medium">8 Sacred Steps to Divine Bliss</span>
          <Sparkles className="w-4 h-4 text-saffron" />
        </div>
      </div>

      {/* Sacred Quote */}
      <Card className="sacred-shadow border-saffron/20 bg-sandalwood/20">
        <CardContent className="p-6 text-center">
          <blockquote className="text-lg font-sanskrit italic text-maroon">
            "जन्माष्टमी भगवान कृष्ण के दिव्य अवतरण का पावन उत्सव है"
          </blockquote>
          <p className="text-sm text-muted-foreground mt-2">
            "Janmashtami is the sacred celebration of Lord Krishna's divine appearance"
          </p>
        </CardContent>
      </Card>

      {/* Spiritual Paths Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {spiritualPaths.map((pathItem, index) => {
          const IconComponent = pathItem.icon;
          
          return (
            <Card 
              key={pathItem.path}
              className="cursor-pointer divine-transition hover:shadow-divine-glow hover:-translate-y-1 border-saffron/20 group"
              onClick={() => handleCardClick(pathItem.path)}
            >
              <CardHeader className="text-center pb-2">
                <div className={`w-16 h-16 mx-auto rounded-full ${pathItem.bgColor} flex items-center justify-center mb-2 offerings-float`}>
                  <IconComponent className={`w-8 h-8 ${pathItem.color}`} />
                </div>
                <CardTitle className="text-lg font-sanskrit">
                  {pathItem.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="text-center space-y-3">
                <CardDescription className="text-sm">
                  {pathItem.description}
                </CardDescription>
                
                <Badge variant="outline" className="text-xs border-saffron/30">
                  Step {index + 1}
                </Badge>
                
                <div className="flex items-center justify-center text-saffron group-hover:translate-x-1 divine-transition">
                  <span className="text-sm font-medium">Begin Journey</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className="text-center space-y-4 pt-8">
        <div className="space-y-2">
          <h3 className="text-2xl font-divine font-semibold text-saffron">
            Ready to Begin Your Sacred Journey?
          </h3>
          <p className="text-muted-foreground">
            Complete all 8 steps to receive divine blessings and special recognition
          </p>
        </div>
        
        <Button 
          onClick={handleProceed}
          size="lg"
          className="saffron-gradient hover:opacity-90 divine-transition shadow-divine-glow px-8"
        >
          <Sparkles className="w-5 h-5 mr-2" />
          Start Divine Journey
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default Home;