import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface CampLocation {
  rank: number;
  neighborhood: string;
  borough: string;
  riskScore: number;
  aqi: number;
  popAtRisk: number;
  livesPerDay: string;
  priority: "CRITICAL" | "HIGH" | "MODERATE";
  actionText: string;
}

export const MobileHealthCamps = () => {
  const locations: CampLocation[] = [
    {
      rank: 1,
      neighborhood: "Mott Haven",
      borough: "Bronx",
      riskScore: 92,
      aqi: 95,
      popAtRisk: 54000,
      livesPerDay: "8-12",
      priority: "CRITICAL",
      actionText: "Deploy Now"
    },
    {
      rank: 2,
      neighborhood: "Hunts Point",
      borough: "Bronx",
      riskScore: 88,
      aqi: 91,
      popAtRisk: 47000,
      livesPerDay: "6-10",
      priority: "CRITICAL",
      actionText: "Deploy Now"
    },
    {
      rank: 3,
      neighborhood: "Port Morris",
      borough: "Bronx",
      riskScore: 85,
      aqi: 87,
      popAtRisk: 32000,
      livesPerDay: "4-7",
      priority: "HIGH",
      actionText: "Schedule"
    },
    {
      rank: 4,
      neighborhood: "East Harlem",
      borough: "Manhattan",
      riskScore: 78,
      aqi: 82,
      popAtRisk: 41000,
      livesPerDay: "3-6",
      priority: "HIGH",
      actionText: "Schedule"
    },
    {
      rank: 5,
      neighborhood: "Brownsville",
      borough: "Brooklyn",
      riskScore: 72,
      aqi: 76,
      popAtRisk: 38000,
      livesPerDay: "2-5",
      priority: "MODERATE",
      actionText: "Schedule"
    }
  ];

  const getRankColor = (rank: number) => {
    if (rank <= 2) return "text-red-400";
    if (rank <= 4) return "text-orange-400";
    return "text-yellow-400";
  };

  const getRiskColor = (score: number) => {
    if (score >= 86) return "text-red-400";
    if (score >= 71) return "text-orange-400";
    if (score >= 51) return "text-yellow-400";
    return "text-blue-400";
  };

  const getAqiColor = (aqi: number) => {
    if (aqi >= 86) return "text-orange-400";
    if (aqi >= 71) return "text-yellow-400";
    return "text-blue-400";
  };

  const getPriorityStyle = (priority: string) => {
    switch (priority) {
      case "CRITICAL":
        return "bg-critical/20 text-critical border-critical/30";
      case "HIGH":
        return "bg-high-risk/20 text-high-risk border-high-risk/30";
      case "MODERATE":
        return "bg-moderate/20 text-moderate border-moderate/30";
      default:
        return "";
    }
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-1 flex items-center gap-2">
            ⛺ Priority Mobile Health Camp Locations
          </h2>
          <p className="text-sm text-muted-foreground">
            Neighborhoods ranked by lives-saved potential • Updated every 30 minutes
          </p>
        </div>

        <Button className="bg-safe hover:bg-safe/90 text-white flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Deploy Camp
        </Button>
      </div>

      {/* Table Container */}
      <div className="bg-card rounded-2xl p-6 border-2 border-border overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="py-3 px-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                #
              </th>
              <th className="py-3 px-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Neighborhood
              </th>
              <th className="py-3 px-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Borough
              </th>
              <th className="py-3 px-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Risk Score
              </th>
              <th className="py-3 px-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                AQI
              </th>
              <th className="py-3 px-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Pop at Risk
              </th>
              <th className="py-3 px-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Lives/Day
              </th>
              <th className="py-3 px-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Priority
              </th>
              <th className="py-3 px-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {locations.map((location) => (
              <tr
                key={location.rank}
                className="hover:bg-secondary/50 transition-colors duration-200"
              >
                {/* Rank */}
                <td className="py-4 px-4">
                  <span className={`text-2xl font-bold tabular-nums ${getRankColor(location.rank)}`}>
                    #{location.rank}
                  </span>
                </td>

                {/* Neighborhood */}
                <td className="py-4 px-4">
                  <span className="font-semibold text-foreground">
                    {location.neighborhood}
                  </span>
                </td>

                {/* Borough */}
                <td className="py-4 px-4">
                  <span className="text-muted-foreground">
                    {location.borough}
                  </span>
                </td>

                {/* Risk Score */}
                <td className="py-4 px-4">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-xl font-bold tabular-nums ${getRiskColor(location.riskScore)}`}>
                      {location.riskScore}
                    </span>
                    <span className="text-sm text-muted-foreground">/100</span>
                  </div>
                </td>

                {/* AQI */}
                <td className="py-4 px-4">
                  <span className={`text-xl font-bold tabular-nums ${getAqiColor(location.aqi)}`}>
                    {location.aqi}
                  </span>
                </td>

                {/* Pop at Risk */}
                <td className="py-4 px-4">
                  <span className="font-bold text-foreground tabular-nums">
                    {location.popAtRisk.toLocaleString()}
                  </span>
                </td>

                {/* Lives/Day - THE KEY METRIC */}
                <td className="py-4 px-4">
                  <div className="bg-safe/10 border border-safe/30 rounded-lg px-3 py-1.5 inline-block">
                    <span className="text-xl font-bold text-safe tabular-nums">
                      {location.livesPerDay}
                    </span>
                  </div>
                </td>

                {/* Priority */}
                <td className="py-4 px-4">
                  <Badge className={`${getPriorityStyle(location.priority)} flex items-center gap-1.5 w-fit`}>
                    {location.priority === "CRITICAL" && (
                      <span className="w-2 h-2 rounded-full bg-critical animate-pulse-critical" />
                    )}
                    {location.priority}
                  </Badge>
                </td>

                {/* Action */}
                <td className="py-4 px-4">
                  <Button
                    className="bg-safe hover:bg-safe/80 text-white font-medium px-4 py-2"
                    size="sm"
                  >
                    {location.actionText}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom Stats Summary */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-card border-2 border-border rounded-xl p-4">
          <div className="text-sm text-muted-foreground mb-1">Total Lives/Day Potential</div>
          <div className="text-3xl font-bold text-safe tabular-nums">23-40</div>
        </div>
        <div className="bg-card border-2 border-border rounded-xl p-4">
          <div className="text-sm text-muted-foreground mb-1">Total Population at Risk</div>
          <div className="text-3xl font-bold text-foreground tabular-nums">212,000</div>
        </div>
        <div className="bg-card border-2 border-border rounded-xl p-4">
          <div className="text-sm text-muted-foreground mb-1">Neighborhoods Needing Action</div>
          <div className="text-3xl font-bold text-high-risk tabular-nums">5</div>
        </div>
      </div>
    </div>
  );
};
