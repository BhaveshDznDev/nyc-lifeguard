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
    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Priority Health Camp Locations</h3>
          <p className="text-sm text-gray-600">Neighborhoods ranked by lives-saved potential</p>
        </div>
        <Button className="bg-safe hover:bg-green-700 text-white flex items-center gap-2 rounded-lg shadow-sm">
          <Plus className="h-4 w-4" />
          Deploy Camp
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase">#</th>
              <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase">Neighborhood</th>
              <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase">Borough</th>
              <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase">Risk</th>
              <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase">AQI</th>
              <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase">Pop at Risk</th>
              <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase">Lives/Day</th>
              <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase">Priority</th>
              <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {locations.map((loc) => (
              <tr key={loc.rank} className="hover:bg-blue-50/50 transition-colors">
                <td className="py-4 px-4"><span className={`text-2xl font-bold ${loc.rankColor} tabular-nums`}>#{loc.rank}</span></td>
                <td className="py-4 px-4"><span className="font-semibold text-gray-900">{loc.neighborhood}</span></td>
                <td className="py-4 px-4"><span className="text-gray-600">{loc.borough}</span></td>
                <td className="py-4 px-4"><span className={`text-xl font-bold ${loc.rankColor} tabular-nums`}>{loc.risk}</span><span className="text-sm text-gray-600">/100</span></td>
                <td className="py-4 px-4"><span className="text-lg font-bold text-high-risk tabular-nums">{loc.aqi}</span></td>
                <td className="py-4 px-4"><span className="font-semibold text-gray-900 tabular-nums">{loc.pop.toLocaleString()}</span></td>
                <td className="py-4 px-4"><div className="bg-safe-bg border border-green-300 rounded-lg px-3 py-1.5 inline-block"><span className="text-lg font-bold text-safe tabular-nums">{loc.lives}</span></div></td>
                <td className="py-4 px-4">
                  <Badge className={`${
                    loc.priority === 'CRITICAL' ? 'bg-critical-bg text-critical border border-red-200' : 
                    loc.priority === 'HIGH' ? 'bg-high-risk-bg text-high-risk border border-orange-200' : 
                    'bg-moderate-bg text-moderate border border-yellow-200'
                  } rounded-full border`}>
                    {loc.priority}
                  </Badge>
                </td>
                <td className="py-4 px-4">
                  <Button className="bg-safe hover:bg-green-700 text-white font-semibold rounded-lg px-4 py-2 text-sm shadow-sm">
                    {loc.priority === 'CRITICAL' ? 'Deploy Now' : 'Schedule'}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
