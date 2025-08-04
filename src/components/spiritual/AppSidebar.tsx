import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  BookOpen, 
  Heart, 
  Flower, 
  Users, 
  ShoppingBag, 
  Star, 
  Eye, 
  Target,
  Menu,
  Home
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import iskconLogo from '@/assets/iskcon-logo.png';

const spiritualPaths = [
  { title: "Prepare", url: "/prepare", icon: BookOpen, description: "Sacred preparation" },
  { title: "Pray", url: "/pray", icon: Heart, description: "Divine prayers" },
  { title: "Perform", url: "/perform", icon: Flower, description: "Sacred rituals" },
  { title: "Participate", url: "/participate", icon: Users, description: "Community seva" },
  { title: "Purchase", url: "/purchase", icon: ShoppingBag, description: "Divine offerings" },
  { title: "Perfect", url: "/perfect", icon: Star, description: "Spiritual programs" },
  { title: "Perceive", url: "/perceive", icon: Eye, description: "Divine gallery" },
  { title: "Pledge", url: "/pledge", icon: Target, description: "Sacred vows" },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const isCollapsed = state === "collapsed";
  
  const getNavClassName = (isActive: boolean) => 
    `divine-transition group ${isActive 
      ? "bg-saffron text-white shadow-divine-glow" 
      : "hover:bg-sandalwood hover:text-saffron"
    }`;

  return (
    <Sidebar className={`${isCollapsed ? "w-20" : "w-64"} divine-transition border-r border-saffron/20 bg-card/80 backdrop-blur-sm`}>
      {/* ISKCON Logo */}
      <div className="p-4 border-b border-saffron/20">
        <div className="flex items-center gap-2">
          <img 
            src={iskconLogo} 
            alt="ISKCON" 
            className="w-10 h-10 float-animation"
          />
          {!isCollapsed && (
            <div className="text-sm font-sanskrit">
              <div className="font-semibold text-saffron">ISKCON</div>
              <div className="text-xs text-muted-foreground">Divine Journey</div>
            </div>
          )}
        </div>
      </div>

      <SidebarContent className="sacred-shadow">
        <SidebarGroup>
          <SidebarGroupLabel className="text-saffron font-sanskrit">
            {!isCollapsed && "Sacred Navigation"}
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu>
              {/* Home */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink 
                    to="/" 
                    className={({ isActive }) => getNavClassName(isActive)}
                  >
                    <Home className="w-5 h-5 pulse-divine" />
                    {!isCollapsed && <span className="font-medium">Home</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Spiritual Paths */}
              {spiritualPaths.map((path) => (
                <SidebarMenuItem key={path.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={path.url} 
                      className={({ isActive }) => getNavClassName(isActive)}
                    >
                      <path.icon className="w-5 h-5 offerings-float" />
                      {!isCollapsed && (
                        <div className="flex flex-col">
                          <span className="font-medium">{path.title}</span>
                          <span className="text-xs opacity-70">{path.description}</span>
                        </div>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}