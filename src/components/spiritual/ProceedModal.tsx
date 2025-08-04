import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';

interface ProceedModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceed: () => void;
}

interface UserDetails {
  name: string;
  mobile: string;
  age: string;
  gender: string;
}

export const ProceedModal: React.FC<ProceedModalProps> = ({ isOpen, onClose, onProceed }) => {
  const [userDetails, setUserDetails] = useState<UserDetails>({
    name: '',
    mobile: '',
    age: '',
    gender: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!userDetails.name || !userDetails.mobile || !userDetails.age || !userDetails.gender) {
      alert('Please fill all fields');
      return;
    }

    // Save to localStorage
    localStorage.setItem('bhaktipath-user', JSON.stringify(userDetails));
    
    onClose();
    onProceed();
  };

  const handleInputChange = (field: keyof UserDetails, value: string) => {
    setUserDetails(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md sacred-shadow">
        <DialogHeader>
          <DialogTitle className="text-saffron font-sanskrit text-center">
            🙏 Sacred Details
          </DialogTitle>
          <DialogDescription className="text-center">
            Please share your details to continue your divine journey
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Card className="p-4 bg-sandalwood/20 border-saffron/20">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={userDetails.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="border-saffron/30 focus:border-saffron"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mobile" className="text-sm font-medium">
                  Mobile Number *
                </Label>
                <Input
                  id="mobile"
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={userDetails.mobile}
                  onChange={(e) => handleInputChange('mobile', e.target.value)}
                  className="border-saffron/30 focus:border-saffron"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="age" className="text-sm font-medium">
                    Age *
                  </Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="Age"
                    value={userDetails.age}
                    onChange={(e) => handleInputChange('age', e.target.value)}
                    className="border-saffron/30 focus:border-saffron"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">
                    Gender *
                  </Label>
                  <Select 
                    value={userDetails.gender} 
                    onValueChange={(value) => handleInputChange('gender', value)}
                  >
                    <SelectTrigger className="border-saffron/30 focus:border-saffron">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </Card>

          <div className="flex gap-3 pt-4">
            <Button 
              type="button"
              variant="outline" 
              onClick={onClose}
              className="flex-1 hover:bg-sandalwood"
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              className="flex-1 saffron-gradient hover:opacity-90 divine-transition"
            >
              Continue Journey 🚀
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};