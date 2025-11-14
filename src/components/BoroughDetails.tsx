import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, TrendingUp } from "lucide-react";

interface BoroughDetailsProps {
  borough: string;
}

export const BoroughDetails = ({ borough }: BoroughDetailsProps) => {
  // Data for different boroughs
  const boroughData: Record<string, any> = {
    "Bronx": {
      riskScore: 92,
      status: "CRITICAL",
      statusColor: "bg-critical",
      aqi: 95,
      erVisits: 194,
      responseTime: "11.5m",
      avgSpeed: "8.2mph",
      alerts: [
        { severity: "critical", text: "High PM2.5 near PS 123 (3,200 students affected)" },
        { severity: "critical", text: "3 ambulances delayed on Cross Bronx Expressway" },
        { severity: "high", text: "Asthma spike predicted in 4 hours (85% confidence)" }
      ],
      population: 54000,
      breakdown: [
        { label: "Children (<12)", value: 18900 },
        { label: "Elderly (65+)", value: 15400 },
        { label: "Respiratory conditions", value: 12800 },
        { label: "Cardiac conditions", value: 6900 }
      ]
    },
    "Manhattan": {
      riskScore: 48,
      status: "MODERATE",
      statusColor: "bg-info",
      aqi: 52,
      erVisits: 127,
      responseTime: "7.8m",
      avgSpeed: "12.4mph",
      alerts: [
        { severity: "moderate", text: "Elevated traffic on FDR Drive during rush hour" },
        { severity: "moderate", text: "Minor AQI increase in Midtown area" }
      ],
      population: 38000,
      breakdown: [
        { label: "Children (<12)", value: 12000 },
        { label: "Elderly (65+)", value: 14200 },
        { label: "Respiratory conditions", value: 8600 },
        { label: "Cardiac conditions", value: 3200 }
      ]
    },
    "Brooklyn": {
      riskScore: 62,
      status: "ELEVATED",
      statusColor: "bg-moderate",
      aqi: 68,
      erVisits: 156,
      responseTime: "8.9m",
      avgSpeed: "10.7mph",
      alerts: [
        { severity: "high", text: "Traffic congestion on BQE affecting response times" },
        { severity: "moderate", text: "Air quality concerns in East New York" }
      ],
      population: 47000,
      breakdown: [
        { label: "Children (<12)", value: 16200 },
        { label: "Elderly (65+)", value: 13800 },
        { label: "Respiratory conditions", value: 11400 },
        { label: "Cardiac conditions", value: 5600 }
      ]
    },
    "Queens": {
      riskScore: 71,
      status: "HIGH",
      statusColor: "bg-high-risk",
      aqi: 78,
      erVisits: 178,
      responseTime: "9.8m",
      avgSpeed: "9.5mph",
      alerts: [
        { severity: "high", text: "Multiple highway delays affecting ambulance routes" },
        { severity: "high", text: "Elevated PM2.5 near JFK Airport" }
      ],
      population: 51000,
      breakdown: [
        { label: "Children (<12)", value: 17800 },
        { label: "Elderly (65+)", value: 14900 },
        { label: "Respiratory conditions", value: 12100 },
        { label: "Cardiac conditions", value: 6200 }
      ]
    },
    "Staten Island": {
      riskScore: 28,
      status: "LOW",
      statusColor: "bg-safe",
      aqi: 35,
      erVisits: 42,
      responseTime: "6.2m",
      avgSpeed: "18.3mph",
      alerts: [
        { severity: "low", text: "All systems operating normally" }
      ],
      population: 15000,
      breakdown: [
        { label: "Children (<12)", value: 5200 },
        { label: "Elderly (65+)", value: 4800 },
        { label: "Respiratory conditions", value: 3400 },
        { label: "Cardiac conditions", value: 1600 }
      ]
    }
  };

  const data = boroughData[borough] || boroughData["Bronx"];

  return (
    <div className="space-y-6">
      {/* Borough Details Card */}
      <div className={`bg-card rounded-2xl p-6 border-2 ${
        data.riskScore >= 86 ? 'border-critical/50' :
        data.riskScore >= 71 ? 'border-high-risk/50' :
        data.riskScore >= 51 ? 'border-moderate/50' :
        data.riskScore >= 31 ? 'border-info/50' :
        'border-safe/50'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-foreground">{borough}</h3>
          <Badge className={`${data.statusColor} text-white`}>
            {data.status}
          </Badge>
        </div>

        {/* Health Risk Score */}
        <div className="mb-6">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-4xl font-bold tabular-nums text-foreground">{data.riskScore}</span>
            <span className="text-lg text-muted-foreground">/100</span>
            <span className="text-sm text-muted-foreground">Health Risk Score</span>
          </div>
          <Progress 
            value={data.riskScore} 
            className="h-2"
            indicatorClassName={
              data.riskScore >= 86 ? 'bg-critical' :
              data.riskScore >= 71 ? 'bg-high-risk' :
              data.riskScore >= 51 ? 'bg-moderate' :
              data.riskScore >= 31 ? 'bg-info' :
              'bg-safe'
            }
          />
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-secondary/50 rounded-lg p-3">
            <div className="text-xs text-muted-foreground mb-1">AQI</div>
            <div className="text-2xl font-bold text-high-risk tabular-nums">{data.aqi}</div>
          </div>
          <div className="bg-secondary/50 rounded-lg p-3">
            <div className="text-xs text-muted-foreground mb-1">ER Visits</div>
            <div className="text-2xl font-bold text-health tabular-nums">{data.erVisits}</div>
          </div>
          <div className="bg-secondary/50 rounded-lg p-3">
            <div className="text-xs text-muted-foreground mb-1">Response Time</div>
            <div className="text-2xl font-bold text-critical tabular-nums">{data.responseTime}</div>
          </div>
          <div className="bg-secondary/50 rounded-lg p-3">
            <div className="text-xs text-muted-foreground mb-1">Avg Speed</div>
            <div className="text-2xl font-bold text-moderate tabular-nums">{data.avgSpeed}</div>
          </div>
        </div>

        {/* Critical Issues */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-critical" />
            Critical Issues
          </h4>
          <div className="space-y-2">
            {data.alerts.map((alert: any, index: number) => (
              <div
                key={index}
                className={`p-3 rounded-lg border text-sm flex items-start gap-2 ${
                  alert.severity === 'critical' ? 'bg-critical/10 border-critical/30 text-critical' :
                  alert.severity === 'high' ? 'bg-high-risk/10 border-high-risk/30 text-high-risk' :
                  alert.severity === 'moderate' ? 'bg-moderate/10 border-moderate/30 text-moderate' :
                  'bg-safe/10 border-safe/30 text-safe'
                }`}
              >
                <AlertTriangle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>{alert.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <Button className="w-full bg-info hover:bg-info/90 text-white">
            Reroute Traffic
          </Button>
          <Button className="w-full bg-safe hover:bg-safe/90 text-white">
            Deploy Mobile Clinic
          </Button>
          <Button className="w-full bg-high-risk hover:bg-high-risk/90 text-white">
            Alert Residents
          </Button>
        </div>
      </div>

      {/* Population at Risk Card */}
      <div className="bg-card rounded-2xl p-6 border-2 border-border">
        <h4 className="text-lg font-semibold text-foreground mb-4">Population at Risk</h4>
        
        <div className="mb-4">
          <div className="text-3xl font-bold text-foreground tabular-nums mb-1">
            ~{data.population.toLocaleString()}
          </div>
          <div className="text-sm text-muted-foreground">
            residents in sensitive groups
          </div>
        </div>

        <div className="space-y-2">
          {data.breakdown.map((item: any, index: number) => (
            <div
              key={index}
              className="bg-secondary rounded-lg p-3 flex items-center justify-between"
            >
              <span className="text-sm text-foreground">{item.label}</span>
              <span className="text-sm font-bold text-foreground tabular-nums">
                {item.value.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
