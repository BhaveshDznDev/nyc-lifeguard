import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle } from "lucide-react";

export const EmergencyTracking = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-1">🚨 Live Emergency Vehicle Tracking</h2>
          <p className="text-slate-600">Real-time ambulance monitoring • Automatic route optimization</p>
        </div>
        <Badge className="bg-red-600 text-white px-4 py-2 font-semibold">3 Critical Delays</Badge>
      </div>

      <div className="relative bg-slate-50 border-2 border-slate-200 rounded-xl overflow-hidden h-[400px]">
        <svg viewBox="0 0 800 400" className="w-full h-full" style={{ background: '#F8FAFC' }}>
          <circle cx="200" cy="120" r="80" fill="#FEE2E2" opacity="0.5" />
          <circle cx="400" cy="200" r="100" fill="#FFEDD5" opacity="0.5" />
          <circle cx="650" cy="150" r="70" fill="#FEF3C7" opacity="0.5" />
          <path d="M 150,280 L 200,260 L 280,240 L 350,220 L 420,210 L 500,200" stroke="#DC2626" strokeWidth="3" strokeDasharray="6,6" fill="none" />
          <path d="M 150,280 L 200,300 L 280,310 L 360,300 L 440,280 L 500,260" stroke="#059669" strokeWidth="3" fill="none" />
          <g><circle cx="280" cy="240" r="10" fill="#DC2626" /><text x="280" y="246" textAnchor="middle" fontSize="12">🚑</text></g>
          <g><circle cx="500" cy="200" r="10" fill="#0284C7" /><text x="500" y="206" textAnchor="middle" fontSize="12">🏥</text></g>
        </svg>

        <div className="absolute top-4 left-4 w-[320px] bg-white border-2 border-red-600 rounded-xl p-4 shadow-lg">
          <div className="text-xs font-bold text-red-600 mb-3">⚠ CRITICAL DELAY</div>
          <div className="space-y-1 text-sm mb-3">
            <div className="flex justify-between"><span className="text-slate-600">Patient:</span><span className="font-bold text-red-600">Cardiac Arrest</span></div>
            <div className="flex justify-between"><span className="text-slate-600">Delay:</span><span className="font-bold text-red-600">8 minutes</span></div>
          </div>
          <div className="bg-red-50 border-l-4 border-red-600 p-2 mb-3 text-xs text-red-700">Survival chance: -80%</div>
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg">Calculate Route</Button>
        </div>

        <div className="absolute bottom-4 left-4 w-[320px] bg-white border-2 border-green-600 rounded-xl p-4 shadow-lg">
          <div className="text-xs font-bold text-green-600 mb-3">✓ OPTIMIZED ROUTE</div>
          <div className="space-y-2 mb-3">
            <div className="flex justify-between"><span className="text-slate-600">Time Saved:</span><span className="text-2xl font-bold text-green-600">6 min</span></div>
            <div className="flex justify-between"><span className="text-slate-600">Survival:</span><span className="text-2xl font-bold text-green-600">+60%</span></div>
          </div>
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg shadow-md">IMPLEMENT NOW</Button>
        </div>
      </div>
    </div>
  );
};
