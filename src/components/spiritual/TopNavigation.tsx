import React, { useState } from 'react';
import { Bell, MessageCircle, Settings, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { SidebarTrigger } from '@/components/ui/sidebar';
import iskconLogo from '@/assets/iskcon-logo.png';

export const TopNavigation: React.FC = () => {
  const [notifications] = useState(3);
  const [messages] = useState(2);

  return (
    <header className="h-16 border-b border-saffron/20 bg-card/80 backdrop-blur-sm px-4 flex items-center justify-between sacred-shadow">
      {/* Left section */}
      <div className="flex items-center gap-4">
        <SidebarTrigger className="hover:bg-sandalwood divine-transition" />
        
        <div className="flex items-center gap-2">
          <img 
            src={iskconLogo} 
            alt="ISKCON" 
            className="w-8 h-8 float-animation hidden sm:block"
          />
          <h1 className="text-lg font-divine font-semibold divine-title hidden sm:block">
            BhaktiPath
          </h1>
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-2">
        {/* Notifications */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative hover:bg-sandalwood divine-transition"
        >
          <Bell className="w-5 h-5" />
          {notifications > 0 && (
            <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 bg-saffron text-white text-xs">
              {notifications}
            </Badge>
          )}
        </Button>

        {/* Messages */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative hover:bg-sandalwood divine-transition"
        >
          <MessageCircle className="w-5 h-5" />
          {messages > 0 && (
            <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 bg-maroon text-white text-xs">
              {messages}
            </Badge>
          )}
        </Button>

        {/* Settings */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="hover:bg-sandalwood divine-transition"
        >
          <Settings className="w-5 h-5" />
        </Button>

        {/* Profile Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-sandalwood divine-transition"
            >
              <User className="w-5 h-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 sacred-shadow">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="hover:bg-sandalwood">
              View Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-sandalwood">
              Edit Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-sandalwood">
              Master Data
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="hover:bg-maroon/10 text-maroon">
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};