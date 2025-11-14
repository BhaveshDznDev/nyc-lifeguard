import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export const MobileHealthCamps = () => {
  const locations = [
    { rank: 1, neighborhood: "Mott Haven", borough: "Bronx", risk: 92, aqi: 95, pop: 54000, lives: "8-12", priority: "CRITICAL", rankColor: "text-red-600" },
    { rank: 2, neighborhood: "Hunts Point", borough: "Bronx", risk: 88, aqi: 91, pop: 47000, lives: "6-10", priority: "CRITICAL", rankColor: "text-red-600" },
    { rank: 3, neighborhood: "Port Morris", borough: "Bronx", risk: 85, aqi: 87, pop: 32000, lives: "4-7", priority: "HIGH", rankColor: "text-orange-600" },
    { rank: 4, neighborhood: "East Harlem", borough: "Manhattan", risk: 78, aqi: 82, pop: 41000, lives: "3-6", priority: "HIGH", rankColor: "text-orange-600" },
    { rank: 5, neighborhood: "Brownsville", borough: "Brooklyn", risk: 72, aqi: 76, pop: 38000, lives: "2-5", priority: "MODERATE", rankColor: "text-amber-600" }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-1">⛺ Priority Mobile Health Camp Locations</h2>
          <p className="text-sm text-slate-600">Neighborhoods ranked by lives-saved potential • Updated every 30 minutes</p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2"><Plus className="h-4 w-4" />Deploy Camp</Button>
      </div>

      <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-sm overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr className="border-b border-slate-200">
              <th className="py-3 px-4 text-left label-default">#</th>
              <th className="py-3 px-4 text-left label-default">Neighborhood</th>
              <th className="py-3 px-4 text-left label-default">Borough</th>
              <th className="py-3 px-4 text-left label-default">Risk</th>
              <th className="py-3 px-4 text-left label-default">AQI</th>
              <th className="py-3 px-4 text-left label-default">Pop at Risk</th>
              <th className="py-3 px-4 text-left label-default">Lives/Day</th>
              <th className="py-3 px-4 text-left label-default">Priority</th>
              <th className="py-3 px-4 text-left label-default">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {locations.map((loc) => (
              <tr key={loc.rank} className="hover:bg-blue-50 transition-colors">
                <td className="py-5 px-4"><span className={`text-3xl font-bold ${loc.rankColor} tabular-nums`}>#{loc.rank}</span></td>
                <td className="py-5 px-4"><span className="font-semibold text-slate-900">{loc.neighborhood}</span></td>
                <td className="py-5 px-4"><span className="text-slate-600">{loc.borough}</span></td>
                <td className="py-5 px-4"><span className={`text-2xl font-bold ${loc.rankColor} tabular-nums`}>{loc.risk}</span><span className="text-sm text-slate-600">/100</span></td>
                <td className="py-5 px-4"><span className="text-xl font-bold text-orange-600 tabular-nums">{loc.aqi}</span></td>
                <td className="py-5 px-4"><span className="font-bold text-slate-900 tabular-nums">{loc.pop.toLocaleString()}</span></td>
                <td className="py-5 px-4"><div className="bg-green-100 border border-green-300 rounded-lg px-3 py-1.5 inline-block"><span className="text-xl font-bold text-green-600 tabular-nums">{loc.lives}</span></div></td>
                <td className="py-5 px-4"><Badge className={`${loc.priority === 'CRITICAL' ? 'bg-red-600' : loc.priority === 'HIGH' ? 'bg-orange-600' : 'bg-amber-600'} text-white rounded-full`}>{loc.priority}</Badge></td>
                <td className="py-5 px-4"><Button className="bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg px-4 py-2">Deploy Now</Button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
