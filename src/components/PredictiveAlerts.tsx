import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const PredictiveAlerts = () => {
  const alerts = [
    {
      area: "Mott Haven",
      severity: "HIGH",
      severityColor: "high-risk",
      description: "High asthma spike risk",
      confidence: "85%",
      expected: "In 4 hours",
      trigger: "AQI 95 + Rush hour",
      affected: "~3,200 residents",
      buttonText: "Schedule Mobile Clinic",
      buttonColor: "bg-high-risk hover:bg-high-risk/90"
    },
    {
      area: "Hunts Point",
      severity: "CRITICAL",
      severityColor: "critical",
      description: "Cardiac event surge",
      confidence: "78%",
      expected: "In 2 hours",
      trigger: "Traffic + Pollution",
      affected: "~1,800 at risk",
      buttonText: "Alert EMS & Pre-Position",
      buttonColor: "bg-critical hover:bg-critical/90"
    },
    {
      area: "East Harlem",
      severity: "MODERATE",
      severityColor: "moderate",
      description: "Respiratory issues increase",
      confidence: "72%",
      expected: "In 6 hours",
      trigger: "PM2.5 spike",
      affected: "~2,400 residents",
      buttonText: "Monitor & Alert",
      buttonColor: "bg-moderate hover:bg-moderate/90"
    }
  ];

  return (
    <div className="bg-card rounded-2xl p-6 border-2 border-border h-full">
      <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
        🔮 Predicted Health Crises
      </h3>

      <div className="space-y-4">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className={`bg-${alert.severityColor}/10 border-2 border-${alert.severityColor}/30 rounded-xl p-4 space-y-3 animate-fade-in`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-foreground">{alert.area}</h4>
              <Badge
                className={`bg-${alert.severityColor}/20 text-${alert.severityColor} border-${alert.severityColor}/30`}
              >
                {alert.severity}
              </Badge>
            </div>

            {/* Description */}
            <p className="text-sm font-medium text-foreground">{alert.description}</p>

            {/* Details Grid */}
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Confidence:</span>
                <span className="font-medium text-foreground">{alert.confidence}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Expected:</span>
                <span className="font-medium text-foreground">{alert.expected}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Trigger:</span>
                <span className="font-medium text-foreground">{alert.trigger}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Affected:</span>
                <span className="font-medium text-foreground">{alert.affected}</span>
              </div>
            </div>

            {/* Action Button */}
            <Button className={`w-full ${alert.buttonColor} text-white font-medium`}>
              {alert.buttonText}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
