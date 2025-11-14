import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

export const EmergencyTracking = () => {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-1 flex items-center gap-2">
            🚨 Live Emergency Vehicle Tracking & Route Optimization
          </h2>
          <p className="text-sm text-muted-foreground">
            Real-time ambulance monitoring across all 5 boroughs • Automatic route optimization
          </p>
        </div>

        <Badge variant="destructive" className="bg-critical text-white flex items-center gap-2 px-4 py-2">
          <AlertTriangle className="h-4 w-4" />
          3 Critical Delays
        </Badge>
      </div>

      {/* Map Container */}
      <div className="relative bg-background border-2 border-border rounded-xl overflow-hidden h-[400px]">
        <svg
          viewBox="0 0 800 400"
          className="w-full h-full"
          style={{ background: 'hsl(var(--background))' }}
        >
          {/* Traffic heatmap blobs */}
          <defs>
            <filter id="blur">
              <feGaussianBlur in="SourceGraphic" stdDeviation="40" />
            </filter>
          </defs>

          {/* Red blob - heavy traffic */}
          <circle
            cx="200"
            cy="120"
            r="80"
            fill="#EF4444"
            opacity="0.3"
            filter="url(#blur)"
          />
          
          {/* Orange blob - moderate traffic */}
          <circle
            cx="400"
            cy="200"
            r="100"
            fill="#F97316"
            opacity="0.25"
            filter="url(#blur)"
          />

          {/* Yellow blob - light traffic */}
          <circle
            cx="650"
            cy="150"
            r="70"
            fill="#F59E0B"
            opacity="0.2"
            filter="url(#blur)"
          />

          {/* Delayed route (red dashed) */}
          <path
            d="M 150,280 L 200,260 L 280,240 L 350,220 L 420,210 L 500,200"
            stroke="#EF4444"
            strokeWidth="4"
            strokeDasharray="10,10"
            fill="none"
            opacity="0.8"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="20"
              to="0"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>

          {/* Optimized route (green solid) */}
          <path
            d="M 150,280 L 200,300 L 280,310 L 360,300 L 440,280 L 500,260"
            stroke="#10B981"
            strokeWidth="5"
            fill="none"
            opacity="0.9"
          />

          {/* Ambulance marker with pulsing circle */}
          <g>
            <circle cx="280" cy="240" r="20" fill="#EF4444" opacity="0.2" className="animate-pulse-critical" />
            <circle cx="280" cy="240" r="15" fill="#EF4444" opacity="0.4" className="animate-pulse-critical" />
            <circle cx="280" cy="240" r="10" fill="#EF4444" />
            <text x="280" y="246" textAnchor="middle" fontSize="14">🚑</text>
          </g>

          {/* Hospital destination marker */}
          <g>
            <circle cx="500" cy="200" r="15" fill="#3B82F6" opacity="0.3" />
            <circle cx="500" cy="200" r="10" fill="#3B82F6" />
            <text x="500" y="206" textAnchor="middle" fontSize="14">🏥</text>
          </g>
        </svg>

        {/* Overlay Card 1 - Stuck Ambulance Alert */}
        <div className="absolute top-4 left-4 w-[320px] bg-critical/10 border-2 border-critical/50 backdrop-blur-md rounded-xl p-4 space-y-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-critical animate-pulse-critical" />
            <span className="text-xs font-bold text-critical uppercase tracking-wide">
              CRITICAL DELAY
            </span>
          </div>

          <div className="space-y-1.5 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Ambulance ID:</span>
              <span className="font-medium text-foreground">AMB-001</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Patient:</span>
              <span className="font-bold text-critical">Cardiac Arrest</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Delay:</span>
              <span className="font-bold text-critical">8 minutes</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Location:</span>
              <span className="font-medium text-foreground">Cross Bronx Expwy</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Destination:</span>
              <span className="font-medium text-foreground">Lincoln Hospital</span>
            </div>
          </div>

          <div className="bg-critical/20 border border-critical/30 rounded-lg p-2 flex items-start gap-2">
            <AlertTriangle className="h-4 w-4 text-critical flex-shrink-0 mt-0.5" />
            <span className="text-xs text-critical font-medium">
              Survival chance: -80% (CRITICAL)
            </span>
          </div>

          <Button className="w-full bg-safe hover:bg-safe/90 text-white font-medium">
            Calculate Alternate Route →
          </Button>
        </div>

        {/* Overlay Card 2 - Optimization Result */}
        <div className="absolute bottom-4 left-4 w-[320px] bg-safe/10 border-2 border-safe/50 backdrop-blur-md rounded-xl p-4 space-y-3">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="h-5 w-5 text-safe" />
            <span className="text-xs font-bold text-safe uppercase tracking-wide">
              OPTIMIZED ROUTE AVAILABLE
            </span>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Time Saved:</span>
              <span className="text-2xl font-bold text-safe tabular-nums">6 min</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Survival Improvement:</span>
              <span className="text-2xl font-bold text-safe tabular-nums">+60%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Route:</span>
              <span className="text-sm font-medium text-foreground">Via Grand Concourse</span>
            </div>
          </div>

          <Button className="w-full bg-safe hover:bg-safe/90 text-white font-bold shadow-lg shadow-safe/30">
            IMPLEMENT NOW →
          </Button>
        </div>
      </div>
    </div>
  );
};
