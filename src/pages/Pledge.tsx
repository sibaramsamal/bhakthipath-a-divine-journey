import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Target, CheckCircle, ArrowRight, Sparkles, Heart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const predefinedPledges = [
  { id: 'daily-chanting', text: 'I will chant the Hare Krishna maha-mantra daily' },
  { id: 'read-gita', text: 'I will read one verse from Bhagavad Gita daily' },
  { id: 'temple-visit', text: 'I will visit the temple at least once a week' },
  { id: 'seva', text: 'I will engage in seva (service) activities regularly' },
  { id: 'vegetarian', text: 'I will maintain a vegetarian diet' },
  { id: 'study-scripture', text: 'I will study sacred scriptures regularly' }
];

const Pledge: React.FC = () => {
  const { toast } = useToast();
  const [selectedPledges, setSelectedPledges] = useState<string[]>([]);
  const [customPledge, setCustomPledge] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const updateProgress = (window as any).updateSpiritualProgress;
    if (updateProgress) {
      updateProgress('pledge');
    }

    // Check if already completed
    const completed = localStorage.getItem('bhaktipath-pledge-completed');
    if (completed) {
      setIsCompleted(true);
      const savedPledges = JSON.parse(localStorage.getItem('bhaktipath-pledges') || '[]');
      setSelectedPledges(savedPledges.selected || []);
      setCustomPledge(savedPledges.custom || '');
    }
  }, []);

  const handlePledgeToggle = (pledgeId: string) => {
    setSelectedPledges(prev => 
      prev.includes(pledgeId) 
        ? prev.filter(id => id !== pledgeId)
        : [...prev, pledgeId]
    );
  };

  const handleSubmitPledges = () => {
    if (selectedPledges.length === 0 && !customPledge.trim()) {
      toast({
        title: "Please make at least one pledge",
        description: "Select a commitment or write your own",
        variant: "destructive"
      });
      return;
    }

    const pledgeData = {
      selected: selectedPledges,
      custom: customPledge,
      timestamp: new Date().toISOString()
    };

    localStorage.setItem('bhaktipath-pledges', JSON.stringify(pledgeData));
    localStorage.setItem('bhaktipath-pledge-completed', 'true');
    setIsCompleted(true);

    toast({
      title: "🙏 Sacred Pledges Accepted!",
      description: "Your commitments have been witnessed by Lord Krishna",
    });
  };

  const handleProceed = () => {
    const userDetails = localStorage.getItem('bhaktipath-user');
    if (!userDetails) {
      const event = new CustomEvent('triggerProceedModal');
      window.dispatchEvent(event);
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="w-20 h-20 mx-auto bg-divine-blue/10 rounded-full flex items-center justify-center float-animation">
          <Target className="w-10 h-10 text-divine-blue pulse-divine" />
        </div>
        
        <div>
          <h1 className="text-3xl font-divine font-bold divine-title mb-2">
            🎯 Pledge - Sacred Commitments
          </h1>
          <p className="text-muted-foreground">
            Make lifelong spiritual commitments for your divine growth
          </p>
        </div>
      </div>

      {isCompleted ? (
        /* Completion State */
        <div className="space-y-6">
          <Card className="sacred-shadow border-sacred-gold bg-sacred-gold/10">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-sacred-gold/20 rounded-full flex items-center justify-center offerings-float">
                <CheckCircle className="w-8 h-8 text-sacred-gold" />
              </div>
              
              <div>
                <h2 className="text-2xl font-divine font-bold text-sacred-gold mb-2">
                  🏆 Divine Journey Complete!
                </h2>
                <p className="text-muted-foreground mb-4">
                  Congratulations! You have completed all 8 sacred steps of your spiritual journey
                </p>
              </div>

              <div className="bg-white/50 p-4 rounded-lg space-y-2">
                <p className="font-sanskrit text-saffron text-lg">
                  "भक्तिर्न केवलैः शास्त्रैः प्राप्यते"
                </p>
                <p className="text-sm text-muted-foreground">
                  "Devotion is achieved through practice, not just scriptures"
                </p>
              </div>

              {/* Show completed pledges */}
              {selectedPledges.length > 0 && (
                <div className="text-left bg-sandalwood/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-saffron mb-2">Your Sacred Commitments:</h3>
                  <ul className="space-y-1 text-sm">
                    {selectedPledges.map(pledgeId => {
                      const pledge = predefinedPledges.find(p => p.id === pledgeId);
                      return pledge ? (
                        <li key={pledgeId} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-sacred-gold" />
                          {pledge.text}
                        </li>
                      ) : null;
                    })}
                  </ul>
                  {customPledge && (
                    <div className="mt-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-sacred-gold mt-0.5" />
                        <span className="text-sm italic">{customPledge}</span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="text-center">
                <Button 
                  onClick={handleProceed}
                  size="lg"
                  className="saffron-gradient hover:opacity-90 divine-transition shadow-divine-glow"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Begin New Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        /* Pledge Interface */
        <div className="space-y-6">
          {/* About Pledges */}
          <Card className="sacred-shadow border-saffron/20">
            <CardHeader>
              <CardTitle className="text-saffron font-sanskrit">
                🕉️ The Power of Sacred Commitment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-justify mb-4">
                Making a pledge or vow (Sanskrit: Vrata) is a powerful spiritual practice that demonstrates 
                serious commitment to one's spiritual advancement. When we make sincere commitments before 
                the Lord, He helps us maintain them and grants His special mercy.
              </p>
              
              <div className="bg-sandalwood/20 p-4 rounded-lg">
                <h4 className="font-semibold text-maroon mb-2">Benefits of Spiritual Vows:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Strengthens determination and willpower</li>
                  <li>• Attracts divine assistance and blessings</li>
                  <li>• Accelerates spiritual progress</li>
                  <li>• Purifies consciousness</li>
                  <li>• Brings inner peace and satisfaction</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Predefined Pledges */}
          <Card className="sacred-shadow border-saffron/20">
            <CardHeader>
              <CardTitle className="text-saffron">Choose Your Sacred Commitments</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {predefinedPledges.map((pledge) => (
                <div key={pledge.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-sandalwood/20 divine-transition">
                  <Checkbox
                    id={pledge.id}
                    checked={selectedPledges.includes(pledge.id)}
                    onCheckedChange={() => handlePledgeToggle(pledge.id)}
                    className="border-saffron"
                  />
                  <Label htmlFor={pledge.id} className="flex-1 cursor-pointer">
                    {pledge.text}
                  </Label>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Custom Pledge */}
          <Card className="sacred-shadow border-saffron/20">
            <CardHeader>
              <CardTitle className="text-saffron">Your Personal Commitment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="custom-pledge">Write your own spiritual commitment:</Label>
                <Textarea
                  id="custom-pledge"
                  value={customPledge}
                  onChange={(e) => setCustomPledge(e.target.value)}
                  placeholder="I pledge to..."
                  className="border-saffron/30 focus:border-saffron min-h-[100px]"
                />
              </div>
            </CardContent>
          </Card>

          {/* Submit Pledges */}
          <div className="text-center">
            <Button 
              onClick={handleSubmitPledges}
              size="lg"
              className="saffron-gradient hover:opacity-90 divine-transition shadow-divine-glow"
              disabled={selectedPledges.length === 0 && !customPledge.trim()}
            >
              <Heart className="w-5 h-5 mr-2" />
              Make Sacred Pledge
              <Sparkles className="w-5 h-5 ml-2" />
            </Button>
            
            <p className="text-sm text-muted-foreground mt-2">
              Your commitments will be witnessed by Lord Krishna
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pledge;