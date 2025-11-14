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
    <aside className="fixed left-0 top-0 h-screen w-60 bg-card border-r border-border p-6 flex flex-col z-40 shadow-sm">
      {/* Logo Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-md">
            <span className="text-primary-foreground font-bold text-sm">NYC</span>
          </div>
          <div>
            <h1 className="text-lg font-semibold text-foreground">NYC Command</h1>
            <p className="text-xs text-muted-foreground">Health & Traffic</p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 mb-2 ${
                isActive
                  ? "bg-primary/10 text-primary border-l-4 border-primary font-semibold shadow-sm"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <div className="flex-1 text-left">
                <div className="text-sm">{item.label}</div>
                <div className="text-xs text-gray-500">{item.description}</div>
              </div>
            </button>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="pt-4 mt-auto border-t border-border">
        <div className="text-xs text-muted-foreground">
          <div className="flex items-center justify-between mb-1">
            <span>System Status</span>
            <span className="w-2 h-2 rounded-full bg-safe shadow-sm"></span>
          </div>
          <div className="text-muted">All systems operational</div>
        </div>
      </div>
    </aside>
  );
};
