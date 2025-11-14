import { Ambulance, TrendingUp, Phone, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const MetricsGrid = () => {
  const sparklineData = [45, 52, 48, 65, 72, 68, 58, 62, 70, 75, 82, 78, 85, 88, 92, 87, 83, 79, 74, 68];
  
  // Traffic congestion data (percentage)
  const congestionData = [45, 48, 52, 58, 62, 68, 72, 75, 78, 82, 85, 83, 80, 78, 75, 72, 70, 68, 65, 62];
  // Collision data (number of incidents)
  const collisionData = [12, 15, 18, 22, 25, 28, 32, 35, 38, 42, 45, 43, 40, 38, 35, 32, 30, 28, 25, 22];
  // 311 Air quality complaints data
  const airQualityComplaints = [8, 10, 12, 15, 18, 22, 26, 28, 32, 35, 38, 36, 34, 32, 30, 28, 26, 24, 22, 20];
  // Hourly average speed data (mph) - 24 hours
  const hourlySpeed = [35, 38, 42, 45, 42, 35, 28, 22, 18, 15, 16, 18, 20, 22, 20, 18, 15, 14, 16, 20, 25, 30, 32, 34];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {/* Card 1: Emergency Response Time */}
      <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-critical/10 rounded-lg">
            <Ambulance className="h-5 w-5 text-critical" />
          </div>
          <Badge className="bg-critical/10 text-critical border-0 rounded-lg px-2.5 py-1 text-xs font-medium">
            ↑ 1.3 min
          </Badge>
        </div>
        
        <h3 className="text-sm font-medium text-muted-foreground mb-4">Emergency Response Time</h3>
        
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

      {/* Card 2: Traffic Congestion vs Collisions */}
      <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <TrendingUp className="h-5 w-5 text-primary" />
          </div>
          <Badge className="bg-moderate/10 text-moderate border-0 rounded-lg px-2.5 py-1 text-xs font-medium">
            Correlated
          </Badge>
        </div>
        
        <h3 className="text-sm font-medium text-muted-foreground mb-4">Traffic Congestion vs Collisions</h3>
        
        <div className="mb-1">
          <span className="text-2xl font-bold text-foreground">62%</span>
          <span className="text-sm text-muted-foreground ml-2">congestion</span>
        </div>
        <p className="text-sm text-muted-foreground mb-4">22 collisions today</p>
        
        {/* Dual trendline chart */}
        <div className="relative h-16 mb-2">
          {/* Congestion line (area chart) */}
          <div className="absolute inset-0 flex items-end gap-1">
            {congestionData.map((value, i) => (
              <div
                key={`cong-${i}`}
                className="flex-1 bg-primary/20 rounded-t transition-all hover:bg-primary/30"
                style={{ height: `${(value / 100) * 100}%` }}
              />
            ))}
          </div>
          
          {/* Collision line (overlay) */}
          <div className="absolute inset-0 flex items-end gap-1">
            {collisionData.map((value, i) => (
              <div
                key={`col-${i}`}
                className="flex-1 bg-high-risk/40 rounded-t transition-all hover:bg-high-risk/50"
                style={{ height: `${(value / 50) * 100}%` }}
              />
            ))}
          </div>
        </div>
        
        {/* Legend */}
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-primary/30"></div>
            <span className="text-muted-foreground">Congestion</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-high-risk/40"></div>
            <span className="text-muted-foreground">Collisions</span>
          </div>
        </div>
      </div>

      {/* Card 3: Congestion vs Air Quality Complaints */}
      <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-info/10 rounded-lg">
            <Phone className="h-5 w-5 text-info" />
          </div>
          <Badge className="bg-info/10 text-info border-0 rounded-lg px-2.5 py-1 text-xs font-medium">
            +18% trend
          </Badge>
        </div>
        
        <h3 className="text-sm font-medium text-muted-foreground mb-4">Congestion Impact on Air Quality</h3>
        
        <div className="mb-1">
          <span className="text-2xl font-bold text-foreground">20</span>
          <span className="text-sm text-muted-foreground ml-2">complaints</span>
        </div>
        <p className="text-sm text-muted-foreground mb-4">311 Air Quality reports today</p>
        
        {/* Dual trendline showing correlation */}
        <div className="relative h-16 mb-2">
          {/* Congestion baseline */}
          <div className="absolute inset-0 flex items-end gap-1 opacity-30">
            {congestionData.map((value, i) => (
              <div
                key={`cong-base-${i}`}
                className="flex-1 bg-muted rounded-t"
                style={{ height: `${(value / 100) * 80}%` }}
              />
            ))}
          </div>
          
          {/* Air quality complaints overlay */}
          <div className="absolute inset-0 flex items-end gap-1">
            {airQualityComplaints.map((value, i) => (
              <div
                key={`aq-${i}`}
                className="flex-1 bg-info/40 rounded-t transition-all hover:bg-info/50"
                style={{ height: `${(value / 40) * 100}%` }}
              />
            ))}
          </div>
        </div>
        
        {/* Legend */}
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-muted/50"></div>
            <span className="text-muted-foreground">Congestion</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-info/40"></div>
            <span className="text-muted-foreground">311 Complaints</span>
          </div>
        </div>
      </div>

      {/* Card 4: Hourly Speed Trends */}
      <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-moderate/10 rounded-lg">
            <Clock className="h-5 w-5 text-moderate" />
          </div>
          <Badge className="bg-critical/10 text-critical border-0 rounded-lg px-2.5 py-1 text-xs font-medium">
            Peak: 4-8 PM
          </Badge>
        </div>
        
        <h3 className="text-sm font-medium text-muted-foreground mb-4">Hourly Average Speed</h3>
        
        <div className="mb-1">
          <span className="text-2xl font-bold text-foreground">14</span>
          <span className="text-sm text-muted-foreground ml-2">mph</span>
        </div>
        <p className="text-sm text-muted-foreground mb-4">Current speed (5:30 PM)</p>
        
        {/* 24-hour speed chart */}
        <div className="relative">
          {/* Peak hours background highlight */}
          <div className="absolute top-0 h-16 bg-critical/5 rounded" 
               style={{ 
                 left: `${(16 / 24) * 100}%`, 
                 width: `${(4 / 24) * 100}%` 
               }}>
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] text-critical font-medium whitespace-nowrap">
              Peak Hours
            </div>
          </div>
          
          <div className="relative flex items-end gap-0.5 h-16 mb-3">
            {hourlySpeed.map((speed, i) => {
              const isPeakHour = i >= 16 && i <= 19; // 4 PM - 8 PM
              return (
                <div
                  key={`hour-${i}`}
                  className={`flex-1 rounded-t transition-all relative group ${
                    isPeakHour 
                      ? 'bg-critical/40 hover:bg-critical/50' 
                      : 'bg-moderate/30 hover:bg-moderate/40'
                  }`}
                  style={{ height: `${(speed / 45) * 100}%` }}
                >
                  {/* Tooltip on hover */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="bg-foreground text-background text-[10px] px-2 py-1 rounded whitespace-nowrap">
                      {i === 0 ? '12 AM' : i < 12 ? `${i} AM` : i === 12 ? '12 PM' : `${i - 12} PM`}: {speed} mph
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Enhanced time labels with markers */}
        <div className="relative">
          <div className="flex justify-between text-[10px] text-muted-foreground font-medium">
            <span>12AM</span>
            <span>6AM</span>
            <span>12PM</span>
            <span className="text-critical">4PM</span>
            <span className="text-critical font-semibold">6PM</span>
            <span>12AM</span>
          </div>
        </div>
      </div>
    </div>
  );
};
