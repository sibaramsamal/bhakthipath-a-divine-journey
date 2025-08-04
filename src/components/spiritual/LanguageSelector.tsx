import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import iskconLogo from '@/assets/iskcon-logo.png';

interface LanguageSelectorProps {
  onLanguageSelect: (language: string) => void;
}

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸', greeting: 'Welcome to BhaktiPath' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳', greeting: 'भक्तिपथ में आपका स्वागत है' },
  { code: 'bn', name: 'বাংলা', flag: '🇧🇩', greeting: 'ভক্তিপথে আপনাকে স্বাগতম' },
  { code: 'gu', name: 'ગુજરાતી', flag: '🇮🇳', greeting: 'ભક્તિપથમાં આપનું સ્વાગત છે' },
];

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onLanguageSelect }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 temple-gradient">
      <div className="w-full max-w-md space-y-6">
        {/* ISKCON Logo and Title */}
        <div className="text-center space-y-4">
          <img 
            src={iskconLogo} 
            alt="ISKCON" 
            className="w-20 h-20 mx-auto float-animation"
          />
          <div>
            <h1 className="text-3xl font-divine font-bold divine-title">
              BhaktiPath
            </h1>
            <p className="text-muted-foreground font-sanskrit">
              Your Divine Janmashtami Journey
            </p>
          </div>
        </div>

        {/* Language Selection */}
        <Card className="sacred-shadow border-saffron/20">
          <CardHeader className="text-center">
            <CardTitle className="text-saffron font-sanskrit">
              Select Your Language
            </CardTitle>
            <CardDescription>
              Choose your preferred language for the spiritual journey
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-3">
            {languages.map((language) => (
              <Button
                key={language.code}
                variant="outline"
                className="w-full justify-start p-4 h-auto hover:bg-sandalwood hover:border-saffron divine-transition"
                onClick={() => onLanguageSelect(language.code)}
              >
                <div className="flex items-center gap-3 w-full">
                  <span className="text-2xl">{language.flag}</span>
                  <div className="text-left flex-1">
                    <div className="font-medium">{language.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {language.greeting}
                    </div>
                  </div>
                </div>
              </Button>
            ))}
          </CardContent>
        </Card>

        <p className="text-center text-sm text-muted-foreground">
          Experience the divine celebration of Lord Krishna's birth
        </p>
      </div>
    </div>
  );
};