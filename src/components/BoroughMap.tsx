import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface BoroughMapProps {
  onBoroughSelect: (borough: string) => void;
  selectedBorough: string;
}

export const BoroughMap = ({ onBoroughSelect, selectedBorough }: BoroughMapProps) => {
  const [showTraffic, setShowTraffic] = useState(true);
  const [showAQI, setShowAQI] = useState(true);
  const [showEmergencies, setShowEmergencies] = useState(true);

  const boroughs = [
    {
      name: "Manhattan",
      path: "M 250,200 L 280,180 L 290,220 L 295,280 L 285,320 L 270,340 L 260,320 L 250,280 Z",
      color: "rgba(2, 132, 199, 0.15)",
      hoverColor: "rgba(2, 132, 199, 0.25)",
      stroke: "#0284C7",
      labelX: 273,
      labelY: 260,
      risk: 48
    },
    {
      name: "Brooklyn",
      path: "M 270,340 L 285,320 L 320,340 L 350,370 L 360,400 L 340,420 L 310,410 L 280,380 Z",
      color: "rgba(217, 119, 6, 0.15)",
      hoverColor: "rgba(217, 119, 6, 0.25)",
      stroke: "#D97706",
      labelX: 315,
      labelY: 375,
      risk: 62
    },
    {
      name: "Queens",
      path: "M 295,280 L 320,270 L 360,290 L 380,320 L 370,360 L 350,370 L 320,340 L 285,320 Z",
      color: "rgba(234, 88, 12, 0.15)",
      hoverColor: "rgba(234, 88, 12, 0.25)",
      stroke: "#EA580C",
      labelX: 340,
      labelY: 315,
      risk: 71
    },
    {
      name: "Bronx",
      path: "M 250,150 L 280,140 L 310,160 L 320,190 L 310,220 L 280,210 L 260,190 Z",
      color: "rgba(220, 38, 38, 0.25)",
      hoverColor: "rgba(220, 38, 38, 0.35)",
      stroke: "#DC2626",
      labelX: 283,
      labelY: 175,
      risk: 92
    },
    {
      name: "Staten Island",
      path: "M 180,380 L 210,370 L 240,390 L 245,420 L 230,440 L 200,430 L 180,410 Z",
      color: "rgba(5, 150, 105, 0.15)",
      hoverColor: "rgba(5, 150, 105, 0.25)",
      stroke: "#059669",
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
          <h2 className="text-2xl font-bold text-slate-900 mb-1">NYC Health Risk Map</h2>
          <p className="text-sm text-slate-600">
            Click any borough to view detailed metrics • Live data updates every 30 seconds
          </p>
        </div>

        {/* Live indicator */}
        <div className="flex items-center gap-2 bg-white border-2 border-slate-200 rounded-xl px-3 py-2 shadow-sm">
          <div className="w-2 h-2 rounded-full bg-green-600" />
          <span className="text-sm text-slate-700">Live Data</span>
        </div>
      </div>

      {/* Layer toggles */}
      <div className="flex items-center gap-6 bg-white border-2 border-slate-200 rounded-xl p-4 shadow-sm">
        <div className="flex items-center gap-2">
          <Checkbox 
            id="traffic" 
            checked={showTraffic} 
            onCheckedChange={(checked) => setShowTraffic(checked as boolean)}
            className="accent-blue-600"
          />
          <Label htmlFor="traffic" className="text-sm text-slate-700 cursor-pointer">
            Traffic
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox 
            id="aqi" 
            checked={showAQI} 
            onCheckedChange={(checked) => setShowAQI(checked as boolean)}
            className="accent-blue-600"
          />
          <Label htmlFor="aqi" className="text-sm text-slate-700 cursor-pointer">
            AQI
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox 
            id="emergencies" 
            checked={showEmergencies} 
            onCheckedChange={(checked) => setShowEmergencies(checked as boolean)}
            className="accent-blue-600"
          />
          <Label htmlFor="emergencies" className="text-sm text-slate-700 cursor-pointer">
            Emergencies
          </Label>
        </div>
      </div>

      {/* Map Container */}
      <div className="relative bg-slate-50 border-2 border-slate-200 rounded-2xl overflow-hidden h-[500px] shadow-sm">
        <svg
          viewBox="0 0 600 600"
          className="w-full h-full"
          style={{ background: '#F8FAFC' }}
        >
          {/* Boroughs */}
          {boroughs.map((borough) => (
            <g key={borough.name}>
              <path
                d={borough.path}
                fill={selectedBorough === borough.name ? borough.hoverColor : borough.color}
                stroke={borough.stroke}
                strokeWidth="2"
                className="cursor-pointer transition-all duration-200 hover:brightness-110"
                onClick={() => onBoroughSelect(borough.name)}
                style={{ 
                  transform: selectedBorough === borough.name ? 'scale(1.02)' : 'scale(1)',
                  transformOrigin: `${borough.labelX}px ${borough.labelY}px`
                }}
              />
              <text
                x={borough.labelX}
                y={borough.labelY}
                textAnchor="middle"
                fill="#0F172A"
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
                fill="#64748B"
                fontSize="11"
                className="pointer-events-none"
              >
                Risk: {borough.risk}
              </text>
            </g>
          ))}

          {/* Ambulance markers */}
          {showEmergencies && (
            <>
              <g>
                <circle cx="310" cy="280" r="16" fill="#DC2626" />
                <text x="310" y="286" textAnchor="middle" fontSize="16">🚑</text>
              </g>
              <g>
                <circle cx="340" cy="350" r="16" fill="#DC2626" />
                <text x="340" y="356" textAnchor="middle" fontSize="16">🚑</text>
              </g>
            </>
          )}

          {/* Hospital marker */}
          {showEmergencies && (
            <g>
              <circle cx="270" cy="260" r="16" fill="#0284C7" />
              <text x="270" y="266" textAnchor="middle" fontSize="16">🏥</text>
            </g>
          )}
        </svg>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-white border-2 border-slate-200 rounded-xl p-4 space-y-3 shadow-md">
          <div className="text-xs font-semibold text-slate-900 mb-2">Health Risk Level</div>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs">
              <div className="w-4 h-4 rounded bg-green-600" />
              <span className="text-slate-700">Low (0-30)</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div className="w-4 h-4 rounded bg-blue-600" />
              <span className="text-slate-700">Moderate (31-50)</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div className="w-4 h-4 rounded bg-amber-600" />
              <span className="text-slate-700">Elevated (51-70)</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div className="w-4 h-4 rounded bg-orange-600" />
              <span className="text-slate-700">High (71-85)</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div className="w-4 h-4 rounded bg-red-600" />
              <span className="text-slate-700">Critical (86-100)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
