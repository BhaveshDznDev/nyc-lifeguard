import { Ambulance, Cloud, Building2, Heart, AlertTriangle, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const MetricsGrid = () => {
  const sparklineData = [45, 52, 48, 65, 72, 68, 58, 62, 70, 75, 82, 78, 85, 88, 92, 87, 83, 79, 74, 68, 63, 58, 54, 50];
  const erVisitsData = [720, 780, 850, 820, 870, 890, 847];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {/* CARD 1: Emergency Response Time */}
      <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 border-l-4 border-l-red-600 shadow-sm hover:shadow-md transition-all duration-200">
        <div className="flex items-center gap-3 mb-6">
          <Ambulance className="h-6 w-6 text-slate-600" />
          <p className="label-default">Emergency Response Time</p>
        </div>

        <div className="mb-6">
          <div className="flex items-baseline gap-2">
            <span className="text-6xl font-bold text-red-600 tabular-nums">9.2</span>
            <span className="text-sm text-slate-600">minutes</span>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-6 flex items-start gap-2">
          <AlertTriangle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-700 font-medium">
            Each extra minute reduces survival by 10%
          </p>
        </div>

        <div className="mb-4 flex items-end gap-0.5 h-12">
          {sparklineData.map((value, i) => (
            <div
              key={i}
              className="flex-1 bg-red-600 rounded-t-sm hover:opacity-80 transition-opacity"
              style={{ height: `${(value / 100) * 100}%` }}
            />
          ))}
        </div>

        <p className="text-xs text-slate-500">
          Longest: <span className="text-slate-700 font-medium">Bronx 11.5 min</span>
        </p>
      </div>

      {/* CARD 2: Air Quality Index */}
      <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 border-l-4 border-l-orange-600 shadow-sm hover:shadow-md transition-all duration-200">
        <div className="flex items-center gap-3 mb-6">
          <Cloud className="h-6 w-6 text-slate-600" />
          <p className="label-default">Air Quality Index</p>
        </div>

        <div className="mb-4 flex items-baseline gap-3">
          <span className="text-6xl font-bold text-orange-600 tabular-nums">87</span>
          <Badge className="bg-orange-100 text-orange-700 border-0 rounded-full px-3 py-1 text-xs font-semibold">
            MODERATE
          </Badge>
        </div>

        <div className="space-y-1 mb-6">
          <div className="bg-slate-50 rounded-lg p-2 flex justify-between items-center">
            <span className="text-sm text-slate-600">PM2.5</span>
            <span className="text-sm font-medium text-slate-900 tabular-nums">8.7 μg/m³</span>
          </div>
          <div className="bg-slate-50 rounded-lg p-2 flex justify-between items-center">
            <span className="text-sm text-slate-600">NO₂</span>
            <span className="text-sm font-medium text-slate-900 tabular-nums">22.3 ppb</span>
          </div>
          <div className="bg-slate-50 rounded-lg p-2 flex justify-between items-center">
            <span className="text-sm text-slate-600">O₃</span>
            <span className="text-sm font-medium text-slate-900 tabular-nums">32.1 ppb</span>
          </div>
        </div>

        <p className="text-xs text-slate-600">54,000 residents affected</p>
      </div>

      {/* CARD 3: Hospital ER Visits */}
      <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 border-l-4 border-l-purple-600 shadow-sm hover:shadow-md transition-all duration-200">
        <div className="flex items-center gap-3 mb-6">
          <Building2 className="h-6 w-6 text-slate-600" />
          <p className="label-default">Hospital ER Visits</p>
        </div>

        <div className="mb-6">
          <span className="text-6xl font-bold text-purple-600 tabular-nums">847</span>
          <p className="text-sm text-slate-600 mt-1">traffic-related visits today</p>
        </div>

        <div className="space-y-2 mb-6">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-700">Respiratory</span>
            <span className="font-medium text-slate-900 tabular-nums">412</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-700">Cardiac</span>
            <span className="font-medium text-slate-900 tabular-nums">258</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-700">Injuries</span>
            <span className="font-medium text-slate-900 tabular-nums">177</span>
          </div>
        </div>

        <div className="flex items-end justify-between gap-1 h-16 mb-3">
          {erVisitsData.map((value, i) => (
            <div
              key={i}
              className="flex-1 bg-purple-600 rounded-t-md hover:opacity-80 transition-opacity"
              style={{ height: `${(value / 900) * 100}%` }}
            />
          ))}
        </div>

        <p className="text-xs text-slate-500">
          Peak: <span className="text-slate-700 font-medium">2-6 PM</span>
        </p>
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
