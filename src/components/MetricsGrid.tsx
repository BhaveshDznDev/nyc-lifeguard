import { Ambulance, Cloud, Building2, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const MetricsGrid = () => {
  const sparklineData = [45, 52, 48, 65, 72, 68, 58, 62, 70, 75, 82, 78, 85, 88, 92, 87, 83, 79, 74, 68];
  const erVisitsData = [720, 780, 850, 820, 870, 890, 847];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {/* Card 1: Emergency Response Time */}
      <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <div className="flex items-center justify-between mb-6">
          <div className="p-2 bg-critical/10 rounded-lg">
            <Ambulance className="h-5 w-5 text-critical" />
          </div>
          <Badge className="bg-critical/10 text-critical border-0 rounded-lg px-2.5 py-1 text-xs font-medium">
            ↑ 1.3 min
          </Badge>
        </div>
        
        <div className="mb-1">
          <span className="metric-large text-foreground">9.2</span>
        </div>
        <p className="text-sm text-muted-foreground mb-6">minutes average</p>
        
        <div className="flex items-end gap-1 h-12">
          {sparklineData.map((value, i) => (
            <div
              key={i}
              className="flex-1 bg-critical/20 rounded-t hover:bg-critical/30 transition-colors"
              style={{ height: `${(value / 100) * 100}%` }}
            />
          ))}
        </div>
      </div>

      {/* Card 2: Air Quality Index */}
      <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <div className="flex items-center justify-between mb-6">
          <div className="p-2 bg-high-risk/10 rounded-lg">
            <Cloud className="h-5 w-5 text-high-risk" />
          </div>
          <Badge className="bg-high-risk/10 text-high-risk border-0 rounded-lg px-2.5 py-1 text-xs font-medium">
            ↑ 3.1%
          </Badge>
        </div>
        
        <div className="mb-1">
          <span className="metric-large text-foreground">87</span>
        </div>
        <p className="text-sm text-muted-foreground mb-6">Moderate</p>
        
        <div className="flex items-end gap-1 h-12">
          {sparklineData.map((value, i) => (
            <div
              key={i}
              className="flex-1 bg-high-risk/20 rounded-t hover:bg-high-risk/30 transition-colors"
              style={{ height: `${((value + 10) / 100) * 100}%` }}
            />
          ))}
        </div>
      </div>

      {/* Card 3: Hospital ER Visits */}
      <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <div className="flex items-center justify-between mb-6">
          <div className="p-2 bg-health/10 rounded-lg">
            <Building2 className="h-5 w-5 text-health" />
          </div>
          <Badge className="bg-health/10 text-health border-0 rounded-lg px-2.5 py-1 text-xs font-medium">
            ↑ 12%
          </Badge>
        </div>
        
        <div className="mb-1">
          <span className="metric-large text-foreground">847</span>
        </div>
        <p className="text-sm text-muted-foreground mb-6">Traffic-related</p>
        
        <div className="flex items-end gap-1 h-12">
          {erVisitsData.map((value, i) => (
            <div
              key={i}
              className="flex-1 bg-health/20 rounded-t hover:bg-health/30 transition-colors"
              style={{ height: `${(value / 900) * 100}%` }}
            />
          ))}
        </div>
      </div>

      {/* Card 4: Health Risk Score */}
      <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <div className="flex items-center justify-between mb-6">
          <div className="p-2 bg-safe/10 rounded-lg">
            <Heart className="h-5 w-5 text-safe" />
          </div>
          <Badge className="bg-safe/10 text-safe border-0 rounded-lg px-2.5 py-1 text-xs font-medium">
            ↓ 4%
          </Badge>
        </div>
        
        <div className="mb-1">
          <span className="metric-large text-foreground">72</span>
        </div>
        <p className="text-sm text-muted-foreground mb-6">Good</p>
        
        <div className="flex items-end gap-1 h-12">
          {sparklineData.reverse().map((value, i) => (
            <div
              key={i}
              className="flex-1 bg-safe/20 rounded-t hover:bg-safe/30 transition-colors"
              style={{ height: `${((100 - value) / 100) * 100}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
