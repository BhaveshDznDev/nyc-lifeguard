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
    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Interactive Borough Map</h3>
          <p className="text-sm text-gray-600">
            Click any borough to view detailed metrics
          </p>
        </div>

        {/* Live indicator */}
        <div className="flex items-center gap-2 px-2 py-1">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-xs text-gray-600">Live</span>
        </div>
      </div>

      {/* Layer toggles */}
      <div className="flex items-center gap-3 mb-4">
        <button
          onClick={() => setShowTraffic(!showTraffic)}
          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
            showTraffic 
              ? "bg-blue-100 text-blue-700" 
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Traffic
        </button>
        <button
          onClick={() => setShowAQI(!showAQI)}
          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
            showAQI 
              ? "bg-blue-100 text-blue-700" 
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Air Quality
        </button>
        <button
          onClick={() => setShowEmergencies(!showEmergencies)}
          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
            showEmergencies 
              ? "bg-blue-100 text-blue-700" 
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Emergency
        </button>
      </div>

      {/* Map Container */}
      <div className="relative bg-gray-50 border border-gray-200 rounded-xl overflow-hidden h-[500px]">
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
        <div className="absolute bottom-4 left-4 bg-white border border-gray-200 rounded-xl p-4 space-y-2 shadow-lg">
          <div className="text-xs font-semibold text-gray-900 mb-2">Health Risk Level</div>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-green-100 border border-green-300" />
              <div className="flex-1">
                <div className="text-xs font-medium text-gray-900">Low</div>
                <div className="text-xs text-gray-500">0-30</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-blue-100 border border-blue-300" />
              <div className="flex-1">
                <div className="text-xs font-medium text-gray-900">Moderate</div>
                <div className="text-xs text-gray-500">31-50</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-yellow-100 border border-yellow-300" />
              <div className="flex-1">
                <div className="text-xs font-medium text-gray-900">Elevated</div>
                <div className="text-xs text-gray-500">51-70</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-orange-100 border border-orange-300" />
              <div className="flex-1">
                <div className="text-xs font-medium text-gray-900">High</div>
                <div className="text-xs text-gray-500">71-85</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-red-100 border border-red-300" />
              <div className="flex-1">
                <div className="text-xs font-medium text-gray-900">Critical</div>
                <div className="text-xs text-gray-500">86-100</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
