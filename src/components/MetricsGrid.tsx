import { Ambulance, Cloud, Building2, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const MetricsGrid = () => {
  const sparklineData = [45, 52, 48, 65, 72, 68, 58, 62, 70, 75, 82, 78, 85, 88, 92, 87, 83, 79, 74, 68];
  const erVisitsData = [720, 780, 850, 820, 870, 890, 847];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {/* Card 1: Emergency Response Time */}
      <div className="bg-white rounded-2xl p-6 border-l-4 border-critical shadow-sm hover:shadow-md transition-all">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Ambulance className="h-5 w-5 text-gray-400" />
            <span className="text-xs text-gray-600 font-medium">Emergency Response</span>
          </div>
          <Badge className="bg-critical-bg text-critical border-0 rounded-full px-2 py-1 text-xs font-medium">
            ↑ 1.3 min
          </Badge>
        </div>
        
        <div className="mb-2">
          <span className="text-4xl font-bold text-gray-900 tabular-nums">9.2</span>
        </div>
        <p className="text-sm text-gray-600 mb-4">minutes average</p>
        
        <div className="flex items-end gap-0.5 h-12 mb-2">
          {sparklineData.map((value, i) => (
            <div
              key={i}
              className="flex-1 bg-critical rounded-t-sm hover:opacity-80 transition-opacity"
              style={{ height: `${(value / 100) * 100}%` }}
            />
          ))}
        </div>
      </div>

      {/* Card 2: Air Quality Index */}
      <div className="bg-orange-50/30 rounded-2xl p-6 border-l-4 border-high-risk shadow-sm hover:shadow-md transition-all">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Cloud className="h-5 w-5 text-gray-400" />
            <span className="text-xs text-gray-600 font-medium">Air Quality Index</span>
          </div>
          <Badge className="bg-high-risk-bg text-high-risk border-0 rounded-full px-2 py-1 text-xs font-medium">
            ↑ 3.1%
          </Badge>
        </div>
        
        <div className="mb-2">
          <span className="text-4xl font-bold text-high-risk tabular-nums">87</span>
        </div>
        <p className="text-sm text-gray-600 mb-4">Moderate</p>
        
        <div className="flex items-end gap-0.5 h-12 mb-2">
          {sparklineData.map((value, i) => (
            <div
              key={i}
              className="flex-1 bg-high-risk rounded-t-sm hover:opacity-80 transition-opacity"
              style={{ height: `${((value + 10) / 100) * 100}%` }}
            />
          ))}
        </div>
      </div>

      {/* Card 3: Hospital ER Visits */}
      <div className="bg-purple-50/30 rounded-2xl p-6 border-l-4 border-health shadow-sm hover:shadow-md transition-all">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-gray-400" />
            <span className="text-xs text-gray-600 font-medium">ER Visits Today</span>
          </div>
          <Badge className="bg-health-bg text-health border-0 rounded-full px-2 py-1 text-xs font-medium">
            ↑ 12%
          </Badge>
        </div>
        
        <div className="mb-2">
          <span className="text-4xl font-bold text-health tabular-nums">847</span>
        </div>
        <p className="text-sm text-gray-600 mb-4">Traffic-related</p>
        
        <div className="flex items-end gap-0.5 h-12 mb-2">
          {erVisitsData.map((value, i) => (
            <div
              key={i}
              className="flex-1 bg-health rounded-t-sm hover:opacity-80 transition-opacity"
              style={{ height: `${(value / 900) * 100}%` }}
            />
          ))}
        </div>
      </div>

      {/* Card 4: Lives Saved Today */}
      <div className="bg-green-50/30 rounded-2xl p-6 border-l-4 border-safe shadow-sm hover:shadow-md transition-all">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-safe fill-safe" />
            <span className="text-xs text-gray-600 font-medium">Lives Saved Today</span>
          </div>
          <Badge className="bg-safe text-white border-0 rounded-full px-2 py-1 text-xs font-medium">
            Active
          </Badge>
        </div>
        
        <div className="mb-2">
          <span className="text-4xl font-bold text-safe tabular-nums">12-18</span>
        </div>
        <p className="text-sm text-gray-600 mb-4">Potential impact</p>
        
        <div className="flex items-end gap-0.5 h-12 mb-2">
          {[65, 72, 78, 85, 88, 92, 95].map((value, i) => (
            <div
              key={i}
              className="flex-1 bg-safe rounded-t-sm hover:opacity-80 transition-opacity"
              style={{ height: `${(value / 100) * 100}%` }}
            />
          ))}
        </div>
      </div>

      {/* CARD 4: Lives Saved Today */}
      <div className="bg-green-50 rounded-2xl p-8 border-2 border-slate-200 border-l-4 border-l-green-600 shadow-sm hover:shadow-md transition-all duration-200">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Heart className="h-6 w-6 text-green-600 fill-green-600" />
            <p className="label-default">Lives Saved Today</p>
          </div>
          <Badge className="bg-green-600 text-white border-0 rounded-full px-3 py-1 text-xs font-semibold">
            ACTIVE
          </Badge>
        </div>

        <div className="mb-6">
          <span className="text-6xl font-bold text-green-600 tabular-nums">12-18</span>
          <p className="text-sm text-slate-600 mt-1">potential lives saved</p>
        </div>

        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-sm text-slate-700">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span>3 ambulances rerouted</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-700">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span>2 mobile clinics deployed</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-700">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span>Traffic optimized</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-700">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span>12 alerts sent</span>
          </div>
        </div>

        <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl py-3">
          View Details →
        </Button>
      </div>
    </div>
  );
};
