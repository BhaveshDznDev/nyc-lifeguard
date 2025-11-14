import { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Ambulance, Building2 } from "lucide-react";

interface BoroughMapProps {
  onBoroughSelect: (borough: string) => void;
  selectedBorough: string;
}

export const BoroughMap = ({ onBoroughSelect, selectedBorough }: BoroughMapProps) => {
  const [showTraffic, setShowTraffic] = useState(true);
  const [showAQI, setShowAQI] = useState(true);
  const [showEmergencies, setShowEmergencies] = useState(true);
  const [liveUpdate, setLiveUpdate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveUpdate(prev => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const boroughs = [
    {
      name: "Manhattan",
      path: "M 250,200 L 280,180 L 290,220 L 295,280 L 285,320 L 270,340 L 260,320 L 250,280 Z",
      color: "rgba(59, 130, 246, 0.3)",
      hoverColor: "rgba(59, 130, 246, 0.5)",
      stroke: "#3B82F6",
      labelX: 273,
      labelY: 260,
      risk: 48
    },
    {
      name: "Brooklyn",
      path: "M 270,340 L 285,320 L 320,340 L 350,370 L 360,400 L 340,420 L 310,410 L 280,380 Z",
      color: "rgba(245, 158, 11, 0.3)",
      hoverColor: "rgba(245, 158, 11, 0.5)",
      stroke: "#F59E0B",
      labelX: 315,
      labelY: 375,
      risk: 62
    },
    {
      name: "Queens",
      path: "M 295,280 L 320,270 L 360,290 L 380,320 L 370,360 L 350,370 L 320,340 L 285,320 Z",
      color: "rgba(249, 115, 22, 0.3)",
      hoverColor: "rgba(249, 115, 22, 0.5)",
      stroke: "#F97316",
      labelX: 340,
      labelY: 315,
      risk: 71
    },
    {
      name: "Bronx",
      path: "M 250,150 L 280,140 L 310,160 L 320,190 L 310,220 L 280,210 L 260,190 Z",
      color: "rgba(239, 68, 68, 0.4)",
      hoverColor: "rgba(239, 68, 68, 0.6)",
      stroke: "#EF4444",
      labelX: 283,
      labelY: 175,
      risk: 92
    },
    {
      name: "Staten Island",
      path: "M 180,380 L 210,370 L 240,390 L 245,420 L 230,440 L 200,430 L 180,410 Z",
      color: "rgba(16, 185, 129, 0.3)",
      hoverColor: "rgba(16, 185, 129, 0.5)",
      stroke: "#10B981",
      labelX: 213,
      labelY: 405,
      risk: 28
    }
  ];

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-1">NYC Health Risk Map</h2>
          <p className="text-sm text-muted-foreground">
            Click any borough to view detailed metrics • Live data updates every 30 seconds
          </p>
        </div>

        {/* Live indicator */}
        <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-3 py-2">
          <div className={`w-2 h-2 rounded-full bg-safe ${liveUpdate ? 'animate-pulse-critical' : ''}`} />
          <span className="text-xs font-medium text-safe">Live Updates</span>
        </div>
      </div>

      {/* Layer toggles */}
      <div className="flex items-center gap-6 bg-card border border-border rounded-lg p-4">
        <div className="flex items-center gap-2">
          <Checkbox 
            id="traffic" 
            checked={showTraffic} 
            onCheckedChange={(checked) => setShowTraffic(checked as boolean)}
          />
          <Label htmlFor="traffic" className="text-sm font-medium cursor-pointer">
            Traffic
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox 
            id="aqi" 
            checked={showAQI} 
            onCheckedChange={(checked) => setShowAQI(checked as boolean)}
          />
          <Label htmlFor="aqi" className="text-sm font-medium cursor-pointer">
            AQI
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox 
            id="emergencies" 
            checked={showEmergencies} 
            onCheckedChange={(checked) => setShowEmergencies(checked as boolean)}
          />
          <Label htmlFor="emergencies" className="text-sm font-medium cursor-pointer">
            Emergencies
          </Label>
        </div>
      </div>

      {/* Map Container */}
      <div className="relative bg-background border-2 border-border rounded-xl overflow-hidden h-[500px]">
        <svg
          viewBox="0 0 600 600"
          className="w-full h-full"
          style={{ background: 'hsl(var(--background))' }}
        >
          {/* Boroughs */}
          {boroughs.map((borough) => (
            <g key={borough.name}>
              <path
                d={borough.path}
                fill={selectedBorough === borough.name ? borough.hoverColor : borough.color}
                stroke={borough.stroke}
                strokeWidth="2"
                className="cursor-pointer transition-all duration-300 hover:brightness-125"
                onClick={() => onBoroughSelect(borough.name)}
                filter={selectedBorough === borough.name ? "url(#glow)" : ""}
              />
              <text
                x={borough.labelX}
                y={borough.labelY}
                textAnchor="middle"
                fill="white"
                fontSize="14"
                fontWeight="600"
                className="pointer-events-none"
              >
                {borough.name}
              </text>
              <text
                x={borough.labelX}
                y={borough.labelY + 18}
                textAnchor="middle"
                fill="white"
                fontSize="11"
                className="pointer-events-none"
              >
                Risk: {borough.risk}
              </text>
            </g>
          ))}

          {/* Bronx warning indicator */}
          {showEmergencies && (
            <g>
              <circle
                cx="283"
                cy="165"
                r="15"
                fill="#EF4444"
                opacity="0.3"
                className="animate-pulse-critical"
              />
              <text
                x="283"
                y="170"
                textAnchor="middle"
                fontSize="18"
              >
                ⚠
              </text>
            </g>
          )}

          {/* Ambulance markers */}
          {showEmergencies && (
            <>
              <g>
                <circle cx="310" cy="280" r="10" fill="#EF4444" opacity="0.3" className="animate-pulse-critical" />
                <circle cx="310" cy="280" r="5" fill="#EF4444" />
                <text x="310" y="284" textAnchor="middle" fontSize="12">🚑</text>
              </g>
              <g>
                <circle cx="340" cy="350" r="10" fill="#EF4444" opacity="0.3" className="animate-pulse-critical" />
                <circle cx="340" cy="350" r="5" fill="#EF4444" />
                <text x="340" y="354" textAnchor="middle" fontSize="12">🚑</text>
              </g>
            </>
          )}

          {/* Hospital marker */}
          {showEmergencies && (
            <g>
              <circle cx="270" cy="260" r="8" fill="#3B82F6" opacity="0.5" />
              <text x="270" y="264" textAnchor="middle" fontSize="12">🏥</text>
            </g>
          )}

          {/* Glow filter for selected borough */}
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
        </svg>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-card/95 backdrop-blur-md border border-border rounded-lg p-4 space-y-3">
          <div className="text-xs font-semibold text-foreground mb-2">Health Risk Level</div>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs">
              <div className="w-4 h-4 rounded bg-safe" />
              <span className="text-foreground">Low (0-30)</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div className="w-4 h-4 rounded bg-info" />
              <span className="text-foreground">Moderate (31-50)</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div className="w-4 h-4 rounded bg-moderate" />
              <span className="text-foreground">Elevated (51-70)</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div className="w-4 h-4 rounded bg-high-risk" />
              <span className="text-foreground">High (71-85)</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div className="w-4 h-4 rounded bg-critical" />
              <span className="text-foreground">Critical (86-100)</span>
            </div>
          </div>
          <div className="border-t border-border pt-2 mt-2 space-y-1.5">
            <div className="flex items-center gap-2 text-xs">
              <Ambulance className="w-4 h-4 text-critical" />
              <span className="text-foreground">Active Ambulance</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <Building2 className="w-4 h-4 text-info" />
              <span className="text-foreground">Hospital</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
