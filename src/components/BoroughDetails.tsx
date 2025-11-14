import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle } from "lucide-react";

interface BoroughDetailsProps {
  borough: string;
}

export const BoroughDetails = ({ borough }: BoroughDetailsProps) => {
  const boroughData: Record<string, any> = {
    "Bronx": {
      riskScore: 92,
      status: "CRITICAL",
      aqi: 95,
      erVisits: 194,
      responseTime: "11.5m",
      avgSpeed: "8.2mph",
      alerts: [
        { text: "High PM2.5 near PS 123 (3,200 students affected)" },
        { text: "3 ambulances delayed on Cross Bronx Expressway" },
        { text: "Asthma spike predicted in 4 hours (85% confidence)" }
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
      aqi: 52,
      erVisits: 127,
      responseTime: "7.8m",
      avgSpeed: "12.4mph",
      alerts: [
        { text: "Elevated traffic on FDR Drive during rush hour" },
        { text: "Minor AQI increase in Midtown area" }
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
      aqi: 68,
      erVisits: 156,
      responseTime: "8.9m",
      avgSpeed: "10.7mph",
      alerts: [
        { text: "Traffic congestion on BQE affecting response times" },
        { text: "Air quality concerns in East New York" }
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
      aqi: 78,
      erVisits: 178,
      responseTime: "9.8m",
      avgSpeed: "9.5mph",
      alerts: [
        { text: "Multiple highway delays affecting ambulance routes" },
        { text: "Elevated PM2.5 near JFK Airport" }
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
      aqi: 35,
      erVisits: 42,
      responseTime: "6.2m",
      avgSpeed: "18.3mph",
      alerts: [
        { text: "All systems operating normally" }
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

  const getBorderColor = () => {
    if (data.riskScore >= 86) return 'border-red-600';
    if (data.riskScore >= 71) return 'border-orange-600';
    if (data.riskScore >= 51) return 'border-amber-600';
    return 'border-blue-600';
  };

  const getStatusColor = () => {
    if (data.riskScore >= 86) return 'bg-red-600';
    if (data.riskScore >= 71) return 'border-orange-600';
    return 'bg-blue-600';
  };

  const getRiskColor = () => {
    if (data.riskScore >= 86) return 'text-red-600';
    if (data.riskScore >= 71) return 'text-orange-600';
    return 'text-blue-600';
  };

  const getProgressColor = () => {
    if (data.riskScore >= 86) return 'bg-red-600';
    if (data.riskScore >= 71) return 'bg-orange-600';
    return 'bg-blue-600';
  };

  return (
    <div className="space-y-6">
      {/* Borough Details Card */}
      <div className={`bg-white rounded-2xl p-6 border-2 ${getBorderColor()} shadow-sm`}>
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-slate-900">{borough}</h3>
          <Badge className={`${getStatusColor()} text-white border-0 rounded-full px-3 py-1 text-xs font-semibold`}>
            {data.status}
          </Badge>
        </div>

        {/* Health Risk Score */}
        <div className="mb-6">
          <div className="flex items-baseline gap-2 mb-2">
            <span className={`text-5xl font-bold ${getRiskColor()} tabular-nums`}>{data.riskScore}</span>
            <span className="text-lg text-slate-600">/100</span>
            <span className="text-sm text-slate-600">Health Risk Score</span>
          </div>
          <Progress 
            value={data.riskScore} 
            className="h-4 bg-slate-200"
            indicatorClassName={getProgressColor()}
          />
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <div className="label-default mb-1">AQI</div>
            <div className="text-3xl font-bold text-orange-600 tabular-nums">{data.aqi}</div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <div className="label-default mb-1">ER Visits</div>
            <div className="text-3xl font-bold text-purple-600 tabular-nums">{data.erVisits}</div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <div className="label-default mb-1">Response Time</div>
            <div className="text-3xl font-bold text-red-600 tabular-nums">{data.responseTime}</div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <div className="label-default mb-1">Avg Speed</div>
            <div className="text-3xl font-bold text-amber-600 tabular-nums">{data.avgSpeed}</div>
          </div>
        </div>

        {/* Critical Issues */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-slate-900 mb-3">Critical Issues</h4>
          <div className="space-y-2">
            {data.alerts.map((alert: any, index: number) => (
              <div
                key={index}
                className="bg-red-50 border-l-4 border-red-600 p-3 rounded-lg text-sm text-slate-700"
              >
                {alert.text}
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 font-semibold">
            Reroute Traffic
          </Button>
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl py-3 font-semibold">
            Deploy Mobile Clinic
          </Button>
          <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-xl py-3 font-semibold">
            Alert Residents
          </Button>
        </div>
      </div>

      {/* Population at Risk Card */}
      <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-sm">
        <h4 className="text-lg font-semibold text-slate-900 mb-4">Population at Risk</h4>
        
        <div className="mb-4">
          <div className="text-3xl font-bold text-slate-900 tabular-nums mb-1">
            ~{data.population.toLocaleString()}
          </div>
          <div className="text-sm text-slate-600">
            residents in sensitive groups
          </div>
        </div>

        <div className="space-y-2">
          {data.breakdown.map((item: any, index: number) => (
            <div
              key={index}
              className="bg-slate-50 rounded-lg p-3 flex items-center justify-between"
            >
              <span className="text-sm text-slate-600">{item.label}</span>
              <span className="text-sm font-semibold text-slate-900 tabular-nums">
                {item.value.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
