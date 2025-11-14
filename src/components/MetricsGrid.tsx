import { Ambulance, Cloud, Building2, Heart, TrendingUp, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const MetricsGrid = () => {
  // Sparkline data (24 hours)
  const sparklineData = [45, 52, 48, 65, 72, 68, 58, 62, 70, 75, 82, 78, 85, 88, 92, 87, 83, 79, 74, 68, 63, 58, 54, 50];
  
  // ER visits mini chart (7 days)
  const erVisitsData = [720, 780, 850, 820, 870, 890, 847];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {/* CARD 1: Emergency Response Time */}
      <div className="bg-card rounded-2xl p-6 border-2 border-border hover:border-critical/50 hover:shadow-2xl hover:shadow-critical/20 transition-all duration-300 relative animate-fade-in">
        <Badge 
          variant="destructive" 
          className="absolute top-4 right-4 bg-critical text-white flex items-center gap-1"
        >
          <TrendingUp className="h-3 w-3" />
          ↑ 1.3 min
        </Badge>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-critical/20 rounded-lg flex items-center justify-center">
            <Ambulance className="h-6 w-6 text-critical" />
          </div>
          <p className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">
            Emergency Response
          </p>
        </div>

        <div className="mb-4">
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold text-red-400 tabular-nums">9.2</span>
            <span className="text-sm text-muted-foreground">minutes average</span>
          </div>
        </div>

        <div className="bg-critical/20 border border-critical/30 rounded-lg p-3 mb-4 flex items-start gap-2">
          <AlertTriangle className="h-4 w-4 text-critical flex-shrink-0 mt-0.5" />
          <p className="text-xs text-critical font-medium">
            Every extra minute = 10% lower survival chance
          </p>
        </div>

        {/* Sparkline */}
        <div className="mb-4 flex items-end gap-0.5 h-12">
          {sparklineData.map((value, i) => (
            <div
              key={i}
              className="flex-1 bg-gradient-to-t from-red-400 to-red-300 rounded-sm hover:opacity-80 transition-opacity"
              style={{ height: `${(value / 100) * 100}%` }}
            />
          ))}
        </div>

        <p className="text-xs text-muted-foreground">
          Most delayed: <span className="text-critical font-medium">South Bronx (11.5 min)</span>
        </p>
      </div>

      {/* CARD 2: Air Quality Index */}
      <div className="bg-card rounded-2xl p-6 border-2 border-border hover:border-high-risk/50 hover:shadow-2xl hover:shadow-high-risk/20 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-high-risk/20 rounded-lg flex items-center justify-center">
            <Cloud className="h-6 w-6 text-high-risk" />
          </div>
          <p className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">
            Air Quality Index
          </p>
        </div>

        <div className="mb-4 flex items-baseline gap-3">
          <span className="text-5xl font-bold text-orange-400 tabular-nums">87</span>
          <Badge className="bg-high-risk/20 text-high-risk border-high-risk/30">
            MODERATE
          </Badge>
        </div>

        {/* Pollutant breakdown */}
        <div className="space-y-2 mb-4 bg-secondary/50 rounded-lg p-3">
          <div className="flex justify-between items-center text-xs">
            <span className="text-muted-foreground">PM2.5</span>
            <span className="font-medium text-foreground tabular-nums">8.7 μg/m³</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-muted-foreground">NO₂</span>
            <span className="font-medium text-foreground tabular-nums">22.3 ppb</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-muted-foreground">O₃</span>
            <span className="font-medium text-foreground tabular-nums">32.1 ppb</span>
          </div>
        </div>

        <div className="bg-high-risk/10 border border-high-risk/30 rounded-lg p-3 mb-3">
          <p className="text-xs text-high-risk font-medium">
            ~54,000 residents in sensitive groups affected today
          </p>
        </div>

        <p className="text-xs text-muted-foreground">
          Worst area: <span className="text-high-risk font-medium">South Bronx (AQI 95)</span>
        </p>
      </div>

      {/* CARD 3: Hospital ER Visits */}
      <div className="bg-card rounded-2xl p-6 border-2 border-border hover:border-health/50 hover:shadow-2xl hover:shadow-health/20 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <Badge 
          className="absolute top-4 right-4 bg-health/20 text-health border-health/30 flex items-center gap-1"
        >
          <TrendingUp className="h-3 w-3" />
          ↑ 12%
        </Badge>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-health/20 rounded-lg flex items-center justify-center">
            <Building2 className="h-6 w-6 text-health" />
          </div>
          <p className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">
            Hospital ER Visits
          </p>
        </div>

        <div className="mb-4">
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold text-purple-400 tabular-nums">847</span>
          </div>
          <span className="text-sm text-muted-foreground">traffic-related visits today</span>
        </div>

        {/* Breakdown */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-400" />
              <span className="text-foreground">Respiratory</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-foreground tabular-nums">412</span>
              <span className="text-xs text-purple-400">(↑15%)</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <span className="text-foreground">Cardiac</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-foreground tabular-nums">258</span>
              <span className="text-xs text-red-400">(↑8%)</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-yellow-400" />
              <span className="text-foreground">Traffic injuries</span>
            </div>
            <span className="font-medium text-foreground tabular-nums">177</span>
          </div>
        </div>

        {/* Mini bar chart */}
        <div className="flex items-end justify-between gap-1 h-16 mb-3">
          {erVisitsData.map((value, i) => (
            <div
              key={i}
              className="flex-1 bg-gradient-to-t from-purple-400 to-purple-300 rounded-sm hover:opacity-80 transition-opacity"
              style={{ height: `${(value / 900) * 100}%` }}
            />
          ))}
        </div>

        <p className="text-xs text-muted-foreground">
          Peak: <span className="text-health font-medium">2-6 PM (rush hour correlation)</span>
        </p>
      </div>

      {/* CARD 4: Lives Saved Potential */}
      <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-2xl p-6 border-2 border-safe/30 hover:border-safe/50 hover:shadow-2xl hover:shadow-safe/20 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <Badge className="absolute top-4 right-4 bg-safe/20 text-safe border-safe/30 animate-pulse-critical">
          ACTIVE
        </Badge>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-safe/20 rounded-lg flex items-center justify-center">
            <Heart className="h-6 w-6 text-safe fill-safe" />
          </div>
          <p className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">
            Lives Saved Today
          </p>
        </div>

        <div className="mb-4">
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold text-green-400 tabular-nums">12-18</span>
          </div>
          <span className="text-sm text-muted-foreground">potential lives saved</span>
        </div>

        {/* Action list */}
        <div className="space-y-2 mb-4 bg-safe/10 border border-safe/20 rounded-lg p-3">
          <div className="flex items-center gap-2 text-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-safe animate-pulse-critical" />
            <span className="text-foreground">3 ambulances rerouted</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-safe animate-pulse-critical" />
            <span className="text-foreground">2 mobile clinics deployed</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-safe animate-pulse-critical" />
            <span className="text-foreground">Traffic signals optimized</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-safe animate-pulse-critical" />
            <span className="text-foreground">12 high-risk alerts sent</span>
          </div>
        </div>

        <Button className="w-full bg-safe hover:bg-safe/90 text-white font-medium mb-3">
          Deploy More Interventions →
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          Real-time impact across all 5 boroughs
        </p>
      </div>
    </div>
  );
};
