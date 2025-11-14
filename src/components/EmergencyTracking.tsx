import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle } from "lucide-react";

export const EmergencyTracking = () => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Live Emergency Vehicle Tracking</h3>
          <p className="text-sm text-gray-600">Real-time ambulance monitoring • Automatic route optimization</p>
        </div>
        <Badge className="bg-critical text-white px-3 py-1.5 font-semibold rounded-full text-xs">
          3 Critical Delays
        </Badge>
      </div>

      <div className="relative bg-gray-50 border border-gray-200 rounded-xl overflow-hidden h-[400px]">
        <svg viewBox="0 0 800 400" className="w-full h-full">
          {/* Traffic heatmap - pastel blobs */}
          <circle cx="200" cy="120" r="80" fill="#FECACA" opacity="0.5" />
          <circle cx="400" cy="200" r="100" fill="#FED7AA" opacity="0.5" />
          <circle cx="650" cy="150" r="70" fill="#FEF08A" opacity="0.5" />
          
          {/* Routes */}
          <path 
            d="M 150,280 L 200,260 L 280,240 L 350,220 L 420,210 L 500,200" 
            stroke="#EF4444" 
            strokeWidth="3" 
            strokeDasharray="6,6" 
            fill="none" 
          />
          <path 
            d="M 150,280 L 200,300 L 280,310 L 360,300 L 440,280 L 500,260" 
            stroke="#10B981" 
            strokeWidth="3" 
            fill="none" 
          />
          
          {/* Markers */}
          <g>
            <circle cx="280" cy="240" r="10" fill="#EF4444" />
            <text x="280" y="246" textAnchor="middle" fontSize="12">🚑</text>
          </g>
          <g>
            <circle cx="500" cy="200" r="10" fill="#3B82F6" />
            <text x="500" y="206" textAnchor="middle" fontSize="12">🏥</text>
          </g>
        </svg>

        {/* Critical Delay Card */}
        <div className="absolute top-4 left-4 w-[320px] bg-white border-2 border-critical rounded-xl p-4 shadow-lg">
          <div className="flex items-center gap-2 mb-3">
            <div className="text-xs font-bold text-critical">⚠ CRITICAL DELAY</div>
          </div>
          <div className="space-y-1 text-sm mb-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Patient:</span>
              <span className="font-bold text-critical">Cardiac Arrest</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Delay:</span>
              <span className="font-bold text-critical">8 minutes</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Location:</span>
              <span className="font-medium text-gray-900">Cross Bronx Expwy</span>
            </div>
          </div>
          <div className="bg-critical-bg border-l-4 border-critical p-2 mb-3 text-xs text-critical font-medium">
            ⚠ Survival chance: -80% (CRITICAL)
          </div>
          <Button className="w-full bg-safe hover:bg-green-700 text-white rounded-lg shadow-sm">
            Calculate Alternate Route →
          </Button>
        </div>

        {/* Optimized Route Card */}
        <div className="absolute bottom-4 left-4 w-[320px] bg-white border-2 border-safe rounded-xl p-4 shadow-lg">
          <div className="flex items-center gap-2 mb-3">
            <div className="text-xs font-bold text-safe">✓ OPTIMIZED ROUTE AVAILABLE</div>
          </div>
          <div className="space-y-2 mb-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Time Saved:</span>
              <span className="text-2xl font-bold text-safe tabular-nums">6 min</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Survival Improvement:</span>
              <span className="text-2xl font-bold text-safe tabular-nums">+60%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Route:</span>
              <span className="text-sm font-medium text-gray-900">Via Grand Concourse</span>
            </div>
          </div>
          <Button className="w-full bg-safe hover:bg-green-700 text-white font-bold rounded-lg shadow-md">
            IMPLEMENT NOW →
          </Button>
        </div>
      </div>
    </div>
  );
};
