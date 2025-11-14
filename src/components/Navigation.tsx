import { useState, useEffect } from "react";
import { ChevronDown, AlertCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const BOROUGHS = [
  "All NYC Boroughs",
  "Manhattan",
  "Brooklyn",
  "Queens",
  "Bronx",
  "Staten Island",
];

export const Navigation = () => {
  const [selectedBorough, setSelectedBorough] = useState("All NYC Boroughs");
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [criticalAlerts] = useState(3);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      
      // Format date: "Mon, Jan 15, 2025"
      const dateOptions: Intl.DateTimeFormatOptions = { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric',
        year: 'numeric'
      };
      setCurrentDate(now.toLocaleDateString('en-US', dateOptions));
      
      // Format time: "3:45:30 PM"
      const timeOptions: Intl.DateTimeFormatOptions = { 
        hour: 'numeric', 
        minute: '2-digit',
        second: '2-digit',
        hour12: true 
      };
      setCurrentTime(now.toLocaleTimeString('en-US', timeOptions));
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-xl border-b border-border">
      <div className="max-w-[1920px] mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">NYC</span>
          </div>
          
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold text-foreground leading-tight">
              NYC Health & Traffic Intelligence
            </h1>
            <p className="text-sm text-muted-foreground leading-tight">
              Real-time Life-Saving System • All 5 Boroughs
            </p>
          </div>
        </div>

        {/* Controls Section */}
        <div className="flex items-center gap-6">
          {/* Borough Filter */}
          <div className="flex flex-col gap-1">
            <label className="text-xs text-muted-foreground">Filter by Borough</label>
            <Select value={selectedBorough} onValueChange={setSelectedBorough}>
              <SelectTrigger className="w-[200px] bg-secondary border-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border">
                {BOROUGHS.map((borough) => (
                  <SelectItem key={borough} value={borough}>
                    {borough}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Date & Time Display */}
          <div className="flex flex-col items-end gap-1 min-w-[180px]">
            <div className="text-sm font-medium text-foreground tabular-nums">
              {currentTime}
            </div>
            <div className="text-xs text-muted-foreground">
              {currentDate}
            </div>
          </div>

          {/* Critical Alerts Badge */}
          <Badge 
            variant="destructive" 
            className="bg-critical hover:bg-critical/90 text-white px-4 py-2 text-sm font-medium flex items-center gap-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-critical absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            {criticalAlerts} Critical Alerts
          </Badge>
        </div>
      </div>
    </nav>
  );
};
