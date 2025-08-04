import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingBag, Book, Coffee, ArrowRight, Sparkles, ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 'bhagavad-gita',
    title: 'Bhagavad Gita As It Is',
    description: 'Complete edition with commentary by Srila Prabhupada',
    price: 450,
    image: '📖',
    category: 'Books'
  },
  {
    id: 'tulsi-mala',
    title: 'Sacred Tulsi Mala',
    description: 'Hand-crafted prayer beads for japa meditation',
    price: 250,
    image: '📿',
    category: 'Spiritual'
  },
  {
    id: 'prasadam-box',
    title: 'Divine Prasadam Box',
    description: 'Blessed food offering from the temple',
    price: 350,
    image: '🍯',
    category: 'Prasadam'
  }
];

const Purchase: React.FC = () => {
  useEffect(() => {
    const updateProgress = (window as any).updateSpiritualProgress;
    if (updateProgress) {
      updateProgress('purchase');
    }
  }, []);

  const handleProceed = () => {
    const userDetails = localStorage.getItem('bhaktipath-user');
    if (!userDetails) {
      const event = new CustomEvent('triggerProceedModal');
      window.dispatchEvent(event);
    } else {
      window.location.href = '/perfect';
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20">
      <div className="text-center space-y-4">
        <div className="w-20 h-20 mx-auto bg-sacred-gold/10 rounded-full flex items-center justify-center float-animation">
          <ShoppingBag className="w-10 h-10 text-sacred-gold" />
        </div>
        
        <div>
          <h1 className="text-3xl font-divine font-bold divine-title mb-2">
            🛍️ Purchase - Divine Offerings
          </h1>
          <p className="text-muted-foreground">
            Acquire sacred items and blessed prasadam
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="sacred-shadow border-saffron/20">
            <CardHeader className="text-center">
              <div className="text-6xl mb-2">{product.image}</div>
              <CardTitle className="text-saffron">{product.title}</CardTitle>
              <Badge className="bg-sacred-gold text-white">₹{product.price}</Badge>
            </CardHeader>
            
            <CardContent className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">{product.description}</p>
              <Button className="saffron-gradient hover:opacity-90 w-full">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
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
          Continue to Perfect
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default Purchase;