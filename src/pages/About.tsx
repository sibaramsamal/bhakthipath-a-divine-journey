import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Users, 
  Globe, 
  BookOpen, 
  Sparkles, 
  ArrowRight,
  Star,
  Target,
  Flower
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import iskconLogo from '@/assets/iskcon-logo.png';

const About: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: BookOpen,
      title: "Sacred Learning",
      description: "Dive deep into the divine significance of Janmashtami through authentic scriptures and teachings"
    },
    {
      icon: Heart,
      title: "Spiritual Practice",
      description: "Engage in prayer, chanting, and meditation to purify your consciousness"
    },
    {
      icon: Flower,
      title: "Divine Rituals",
      description: "Participate in traditional archana, arti, and other sacred ceremonies"
    },
    {
      icon: Users,
      title: "Community Seva",
      description: "Join fellow devotees in service activities and cultural programs"
    },
    {
      icon: Globe,
      title: "Global Connection",
      description: "Connect with ISKCON centers worldwide and share the divine experience"
    },
    {
      icon: Target,
      title: "Spiritual Growth",
      description: "Make sacred vows and commitments for your spiritual advancement"
    }
  ];

  const spiritualJourney = [
    { step: "Prepare", description: "Learn about Janmashtami's divine significance", icon: BookOpen },
    { step: "Pray", description: "Chant sacred mantras and connect with Krishna", icon: Heart },
    { step: "Perform", description: "Book archana and participate in rituals", icon: Flower },
    { step: "Participate", description: "Join community seva and events", icon: Users },
    { step: "Purchase", description: "Acquire sacred items and prasadam", icon: Sparkles },
    { step: "Perfect", description: "Enhance through spiritual programs", icon: Star },
    { step: "Perceive", description: "Explore divine galleries and teachings", icon: Globe },
    { step: "Pledge", description: "Make lifelong spiritual commitments", icon: Target }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-20">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <div className="space-y-4">
          <img 
            src={iskconLogo} 
            alt="ISKCON" 
            className="w-24 h-24 mx-auto float-animation"
          />
          <div>
            <h1 className="text-4xl md:text-5xl font-divine font-bold divine-title mb-4">
              🙏 BhaktiPath Marketplace
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your Complete Digital Temple Experience for Janmashtami Celebration
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Badge className="bg-saffron text-white px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            8 Sacred Steps
          </Badge>
          <Badge className="bg-maroon text-white px-4 py-2">
            <Heart className="w-4 h-4 mr-2" />
            Divine Experience
          </Badge>
          <Badge className="bg-sacred-gold text-white px-4 py-2">
            <Globe className="w-4 h-4 mr-2" />
            Global Community
          </Badge>
        </div>
      </div>

      {/* Mission Statement */}
      <Card className="sacred-shadow border-saffron/20 bg-sandalwood/10">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl font-divine font-bold text-saffron mb-4">
            Our Divine Mission
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            BhaktiPath is more than a digital platform – it's a sacred journey that transforms your 
            Janmashtami celebration into a deeply spiritual experience. We bridge the ancient wisdom 
            of Krishna consciousness with modern technology to create an immersive temple-like 
            atmosphere in the digital realm.
          </p>
          <div className="bg-white/50 p-4 rounded-lg">
            <p className="font-sanskrit text-saffron text-xl mb-2">
              "जन्माष्टमी भगवान कृष्ण के दिव्य अवतरण का पावन उत्सव है"
            </p>
            <p className="text-sm text-muted-foreground italic">
              "Janmashtami is the sacred celebration of Lord Krishna's divine appearance"
            </p>
          </div>
        </CardContent>
      </Card>

      {/* The 8-Step Spiritual Journey */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-divine font-bold text-saffron mb-4">
            🚀 The 8-Step Divine Journey
          </h2>
          <p className="text-muted-foreground">
            Experience complete spiritual transformation through our carefully crafted sacred path
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {spiritualJourney.map((journey, index) => {
            const IconComponent = journey.icon;
            
            return (
              <Card 
                key={journey.step}
                className="text-center sacred-shadow border-saffron/20 hover:shadow-divine-glow divine-transition"
              >
                <CardContent className="p-4 space-y-3">
                  <div className="w-12 h-12 mx-auto bg-saffron/10 rounded-full flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-saffron" />
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-saffron">
                      {index + 1}. {journey.step}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {journey.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Key Features */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-divine font-bold text-maroon mb-4">
            ✨ Divine Features
          </h2>
          <p className="text-muted-foreground">
            Every feature designed to enhance your spiritual experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            
            return (
              <Card 
                key={index}
                className="sacred-shadow border-saffron/20 hover:shadow-divine-glow divine-transition"
              >
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-saffron/10 rounded-full flex items-center justify-center offerings-float">
                    <IconComponent className="w-8 h-8 text-saffron" />
                  </div>
                  <CardTitle className="text-center text-maroon font-sanskrit">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* ISKCON Connection */}
      <Card className="sacred-shadow border-saffron/20">
        <CardHeader>
          <CardTitle className="text-2xl font-divine text-saffron text-center">
            🏛️ ISKCON - Our Sacred Foundation
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-justify">
            The International Society for Krishna Consciousness (ISKCON) was founded by 
            His Divine Grace A.C. Bhaktivedanta Swami Prabhupada in 1966. Our mission is to 
            promote the well-being of society by teaching the science of Krishna consciousness 
            according to Bhagavad-gita and other Vedic scriptures.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-saffron">500+</div>
              <div className="text-sm text-muted-foreground">Centers Worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-maroon">50+</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-sacred-gold">Millions</div>
              <div className="text-sm text-muted-foreground">Devotees</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <div className="text-center space-y-6 pt-8">
        <div className="space-y-2">
          <h3 className="text-3xl font-divine font-bold text-saffron">
            Ready to Begin Your Sacred Journey?
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of devotees worldwide in celebrating the divine appearance of Lord Krishna. 
            Your spiritual transformation awaits.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => navigate('/')}
            size="lg"
            className="saffron-gradient hover:opacity-90 divine-transition shadow-divine-glow"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Start Your Journey
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          <Button 
            onClick={() => navigate('/prepare')}
            variant="outline"
            size="lg"
            className="hover:bg-sandalwood border-saffron/50"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;