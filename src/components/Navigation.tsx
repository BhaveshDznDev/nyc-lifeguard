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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-[1920px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm">
            <span className="text-white font-bold text-lg">NYC</span>
          </div>
          
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-slate-900 leading-tight">
              NYC Health & Traffic Intelligence
            </h1>
            <p className="text-sm text-slate-600 leading-tight">
              Real-time Life-Saving System • All 5 Boroughs
            </p>
          </div>
        </div>

        {/* Controls Section */}
        <div className="flex items-center gap-6">
          {/* Borough Filter */}
          <div className="flex flex-col gap-1">
            <label className="text-xs text-slate-500 font-medium">Filter by Borough</label>
            <Select value={selectedBorough} onValueChange={setSelectedBorough}>
              <SelectTrigger className="w-[200px] bg-white border-2 border-slate-200 rounded-xl py-3 px-5 font-medium text-slate-700 hover:bg-gray-50">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white border-2 border-slate-200 rounded-xl">
                {BOROUGHS.map((borough) => (
                  <SelectItem key={borough} value={borough} className="hover:bg-slate-50">
                    {borough}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Date & Time Display */}
          <div className="flex flex-col items-end gap-1 min-w-[180px]">
            <div className="text-sm font-semibold text-slate-900 tabular-nums">
              {currentTime}
            </div>
            <div className="text-xs text-slate-500">
              {currentDate}
            </div>
          </div>

          {/* Critical Alerts Badge */}
          <Badge className="bg-red-100 border border-red-300 text-red-700 px-4 py-2 text-sm font-semibold flex items-center gap-2 hover:bg-red-100">
            <div className="w-2 h-2 rounded-full bg-red-600" />
            {criticalAlerts} Critical Alerts
          </Badge>
        </div>
      </div>
    </nav>
  );
};
