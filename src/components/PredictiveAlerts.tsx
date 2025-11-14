import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const PredictiveAlerts = () => {
  const alerts = [
    { area: "Mott Haven", severity: "HIGH", color: "orange", confidence: "85%", expected: "In 4 hours", description: "High asthma spike risk" },
    { area: "Hunts Point", severity: "CRITICAL", color: "red", confidence: "78%", expected: "In 2 hours", description: "Cardiac event surge" },
    { area: "East Harlem", severity: "MODERATE", color: "amber", confidence: "72%", expected: "In 6 hours", description: "Respiratory issues" }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-sm h-full">
      <h3 className="text-xl font-bold text-slate-900 mb-4">🔮 Predicted Health Crises</h3>
      <div className="space-y-4">
        {alerts.map((alert, i) => (
          <div key={i} className={`bg-${alert.color}-50 border-l-4 border-${alert.color}-600 rounded-xl p-4 space-y-2`}>
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-slate-900">{alert.area}</h4>
              <Badge className={`bg-${alert.color}-600 text-white rounded-full`}>{alert.severity}</Badge>
            </div>
            <p className="text-sm text-slate-700">{alert.description}</p>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between"><span className="text-slate-600">Confidence:</span><span className="font-medium">{alert.confidence}</span></div>
              <div className="flex justify-between"><span className="text-slate-600">Expected:</span><span className="font-medium">{alert.expected}</span></div>
            </div>
            <Button className={`w-full bg-${alert.color}-600 hover:bg-${alert.color}-700 text-white rounded-lg`}>Take Action</Button>
          </div>
        ))}
      </div>
    </div>
  );
};
