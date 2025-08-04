import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Flower, CreditCard, CheckCircle, ArrowRight, Sparkles, Heart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ArchanaBooking {
  type: string;
  devotee_name: string;
  special_request: string;
  amount: number;
}

const archanaTypes = [
  { id: 'special-archana', name: 'Special Archana', price: 501, description: 'Special worship with flowers and fruits' },
  { id: 'maha-archana', name: 'Maha Archana', price: 1001, description: 'Grand worship with elaborate offerings' },
  { id: 'ekadashi-archana', name: 'Ekadashi Archana', price: 251, description: 'Sacred Ekadashi day worship' },
  { id: 'simple-archana', name: 'Simple Archana', price: 101, description: 'Basic worship with incense and flowers' }
];

const Perform: React.FC = () => {
  const { toast } = useToast();
  const [selectedArchana, setSelectedArchana] = useState('');
  const [booking, setBooking] = useState<ArchanaBooking>({
    type: '',
    devotee_name: '',
    special_request: '',
    amount: 0
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    // Update progress for visiting perform page
    const updateProgress = (window as any).updateSpiritualProgress;
    if (updateProgress) {
      updateProgress('perform');
    }

    // Load user details
    const userDetails = localStorage.getItem('bhaktipath-user');
    if (userDetails) {
      const user = JSON.parse(userDetails);
      setBooking(prev => ({ ...prev, devotee_name: user.name }));
    }

    // Check if already completed
    const completed = localStorage.getItem('bhaktipath-perform-completed');
    if (completed) {
      setIsCompleted(true);
    }
  }, []);

  const handleArchanaSelect = (archanaId: string) => {
    const archana = archanaTypes.find(a => a.id === archanaId);
    if (archana) {
      setSelectedArchana(archanaId);
      setBooking(prev => ({
        ...prev,
        type: archana.name,
        amount: archana.price
      }));
    }
  };

  const handleBooking = async () => {
    if (!selectedArchana || !booking.devotee_name) {
      toast({
        title: "Please complete all fields",
        description: "All fields are required for archana booking",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsCompleted(true);
      localStorage.setItem('bhaktipath-perform-completed', 'true');
      
      toast({
        title: "🌺 Archana Booked Successfully!",
        description: "Your offering has been accepted by Lord Krishna",
      });
    }, 2000);
  };

  const handleProceed = () => {
    const userDetails = localStorage.getItem('bhaktipath-user');
    if (!userDetails) {
      const event = new CustomEvent('triggerProceedModal');
      window.dispatchEvent(event);
    } else {
      window.location.href = '/participate';
    }
  };

  const selectedArchanaDetails = archanaTypes.find(a => a.id === selectedArchana);

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="w-20 h-20 mx-auto bg-saffron/10 rounded-full flex items-center justify-center float-animation">
          <Flower className="w-10 h-10 text-saffron offerings-float" />
        </div>
        
        <div>
          <h1 className="text-3xl font-divine font-bold divine-title mb-2">
            🌸 Perform - Sacred Rituals
          </h1>
          <p className="text-muted-foreground">
            Book archana and offer your devotion to Lord Krishna
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
                  🙏 Archana Successfully Completed!
                </h2>
                <p className="text-muted-foreground">
                  Your sacred offering has been accepted by Lord Krishna
                </p>
              </div>

              <div className="bg-white/50 p-4 rounded-lg">
                <p className="font-sanskrit text-saffron text-lg mb-2">
                  "सर्वं कृष्णार्पणं तु"
                </p>
                <p className="text-sm text-muted-foreground">
                  "Everything is offered to Krishna"
                </p>
              </div>

              <div className="text-center">
                <Button 
                  onClick={handleProceed}
                  size="lg"
                  className="saffron-gradient hover:opacity-90 divine-transition shadow-divine-glow"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Continue to Participate
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        /* Booking Interface */
        <div className="space-y-6">
          {/* About Archana */}
          <Card className="sacred-shadow border-saffron/20">
            <CardHeader>
              <CardTitle className="text-saffron font-sanskrit">
                🕉️ About Sacred Archana
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-justify">
                  Archana is a sacred ritual of worship where devotees offer flowers, incense, and prayers 
                  to the deity. This divine service pleases Lord Krishna and brings His blessings upon the devotee.
                </p>
                
                <div className="bg-sandalwood/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-maroon mb-2">Benefits of Archana:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Purification of mind and heart</li>
                    <li>• Divine blessings for prosperity</li>
                    <li>• Spiritual advancement</li>
                    <li>• Peace and happiness</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Archana Selection */}
          <Card className="sacred-shadow border-saffron/20">
            <CardHeader>
              <CardTitle className="text-saffron">Choose Your Archana</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {archanaTypes.map((archana) => (
                  <Card 
                    key={archana.id}
                    className={`cursor-pointer divine-transition border-2 ${
                      selectedArchana === archana.id 
                        ? 'border-saffron bg-saffron/10' 
                        : 'border-border hover:border-saffron/50'
                    }`}
                    onClick={() => handleArchanaSelect(archana.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{archana.name}</h3>
                        <Badge className="bg-saffron text-white">
                          ₹{archana.price}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {archana.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Booking Form */}
          {selectedArchana && (
            <Card className="sacred-shadow border-saffron/20">
              <CardHeader>
                <CardTitle className="text-saffron">Booking Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="devotee-name">Devotee Name *</Label>
                  <Input
                    id="devotee-name"
                    value={booking.devotee_name}
                    onChange={(e) => setBooking(prev => ({ ...prev, devotee_name: e.target.value }))}
                    placeholder="Enter devotee name"
                    className="border-saffron/30 focus:border-saffron"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="special-request">Special Prayers/Requests</Label>
                  <Textarea
                    id="special-request"
                    value={booking.special_request}
                    onChange={(e) => setBooking(prev => ({ ...prev, special_request: e.target.value }))}
                    placeholder="Any special prayers or requests..."
                    className="border-saffron/30 focus:border-saffron"
                  />
                </div>

                {selectedArchanaDetails && (
                  <div className="bg-sandalwood/20 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Selected Archana:</span>
                      <span className="text-saffron font-semibold">{selectedArchanaDetails.name}</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="font-medium">Amount:</span>
                      <span className="text-xl font-bold text-saffron">₹{selectedArchanaDetails.price}</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Proceed to Payment */}
          {selectedArchana && booking.devotee_name && (
            <div className="text-center">
              <Button 
                onClick={handleBooking}
                size="lg"
                disabled={isProcessing}
                className="saffron-gradient hover:opacity-90 divine-transition shadow-divine-glow"
              >
                {isProcessing ? (
                  <>
                    <Heart className="w-5 h-5 mr-2 animate-pulse" />
                    Processing Sacred Offering...
                  </>
                ) : (
                  <>
                    <CreditCard className="w-5 h-5 mr-2" />
                    Book Archana - ₹{booking.amount}
                    <Flower className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Perform;