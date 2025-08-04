import React, { useState, useEffect } from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from '@/components/spiritual/AppSidebar';
import { TopNavigation } from '@/components/spiritual/TopNavigation';
import { DeityCenter } from '@/components/spiritual/DeityCenter';
import { SpiritualProgress } from '@/components/spiritual/SpiritualProgress';
import { ProceedModal } from '@/components/spiritual/ProceedModal';
import { LanguageSelector } from '@/components/spiritual/LanguageSelector';
import { IncenseSmoke } from '@/components/spiritual/IncenseSmoke';
import templeBackground from '@/assets/temple-background.png';

interface SpiritualLayoutProps {
  children: React.ReactNode;
}

export const SpiritualLayout: React.FC<SpiritualLayoutProps> = ({ children }) => {
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);
  const [showProceedModal, setShowProceedModal] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const hasSelectedLanguage = localStorage.getItem('bhaktipath-language');
    if (!hasSelectedLanguage) {
      setShowLanguageSelector(true);
    } else {
      setCurrentLanguage(hasSelectedLanguage);
    }
  }, []);

  const handleLanguageSelect = (language: string) => {
    localStorage.setItem('bhaktipath-language', language);
    setCurrentLanguage(language);
    setShowLanguageSelector(false);
  };

  const handleProceed = () => {
    const userDetails = localStorage.getItem('bhaktipath-user');
    if (!userDetails) {
      setShowProceedModal(true);
    } else {
      // User already provided details, can proceed
      console.log('User can proceed to next step');
    }
  };

  if (showLanguageSelector) {
    return <LanguageSelector onLanguageSelect={handleLanguageSelect} />;
  }

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed relative"
      style={{ backgroundImage: `url(${templeBackground})` }}
    >
      {/* Sacred overlay */}
      <div className="absolute inset-0 temple-gradient opacity-90 z-0" />
      
      {/* Incense smoke animation */}
      <IncenseSmoke />
      
      <SidebarProvider defaultOpen={false}>
        <div className="min-h-screen flex w-full relative z-10">
          <AppSidebar />
          
          <div className="flex-1 flex flex-col">
            <TopNavigation />
            
            <main className="flex-1 relative">
              {/* Deity center - always visible */}
              <DeityCenter />
              
              {/* Content area */}
              <div className="container mx-auto px-4 py-6 relative z-10">
                {children}
              </div>
              
              {/* Spiritual Progress */}
              <SpiritualProgress />
            </main>
          </div>
        </div>
      </SidebarProvider>
      
      {/* Proceed Modal */}
      <ProceedModal 
        isOpen={showProceedModal}
        onClose={() => setShowProceedModal(false)}
        onProceed={handleProceed}
      />
    </div>
  );
};