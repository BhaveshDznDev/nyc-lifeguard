import { MapPin, Cloud, BarChart3 } from "lucide-react";

interface SidebarProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

export const Sidebar = ({ activeView, onViewChange }: SidebarProps) => {
  const menuItems = [
    {
      id: "maps",
      icon: MapPin,
      label: "Borough Maps",
      description: "Interactive borough views",
    },
    {
      id: "environment",
      icon: Cloud,
      label: "Environment",
      description: "Air Quality & Pollution",
    },
    {
      id: "analytics",
      icon: BarChart3,
      label: "Analytics",
      description: "Overall Metrics",
    },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-20 bg-card border-r border-border flex flex-col z-40">
      {/* Logo Section */}
      <div className="p-6 border-b border-border">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-xs">NYC</span>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 py-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`w-full flex flex-col items-center gap-2 py-4 transition-colors relative ${
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r" />
              )}
              <Icon className="w-5 h-5" />
              <span className="text-xs font-medium">{item.label.split(' ')[0]}</span>
            </button>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="p-6 border-t border-border">
        <div className="flex justify-center">
          <span className="w-2 h-2 rounded-full bg-safe"></span>
        </div>
      </div>
    </aside>
  );
};
