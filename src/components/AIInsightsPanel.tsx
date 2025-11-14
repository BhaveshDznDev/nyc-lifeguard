import { Sparkles, AlertTriangle, Calendar, TrendingUp, Activity, Brain } from "lucide-react";

export const AIInsightsPanel = () => {
  const insights = [
    {
      icon: AlertTriangle,
      title: "Critical Health Alert",
      description: "Mott Haven: 85% chance of asthma spike in 4 hours. Deploy mobile clinic recommended.",
      color: "orange",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-500",
      iconBg: "bg-orange-500",
    },
    {
      icon: Calendar,
      title: "Optimal Response Window",
      description: "Best ambulance pre-positioning: 2-6 PM near Cross Bronx Expressway",
      color: "green",
      bgColor: "bg-green-50",
      borderColor: "border-green-500",
      iconBg: "bg-green-500",
    },
    {
      icon: TrendingUp,
      title: "Pollution Trend",
      description: "PM2.5 levels increasing by 15% - peak expected at 5 PM",
      color: "blue",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-500",
      iconBg: "bg-blue-500",
    },
    {
      icon: Activity,
      title: "Emergency Surge",
      description: "Predicted +22% emergency calls this weekend. Pre-position 3 ambulances.",
      color: "red",
      bgColor: "bg-red-50",
      borderColor: "border-red-500",
      iconBg: "bg-red-500",
    },
    {
      icon: Brain,
      title: "Pattern Detection",
      description: "Traffic-health correlation detected: 20% congestion increase → 15% more ER visits",
      color: "purple",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-500",
      iconBg: "bg-purple-500",
    },
  ];

  return (
    <aside className="fixed right-0 top-0 h-screen w-80 bg-card border-l border-border p-6 overflow-y-auto z-40 shadow-sm">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-6 h-6 text-accent" />
          <h2 className="text-lg font-bold text-foreground">AI Insights</h2>
        </div>
        <p className="text-xs text-muted-foreground">Real-time predictions</p>
      </div>

      {/* Insight Cards */}
      <div className="space-y-4 mb-8">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <div
              key={index}
              className={`border-l-4 ${insight.borderColor} ${insight.bgColor} rounded-xl p-4 transition-all duration-300 hover:shadow-md animate-slide-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-xl ${insight.iconBg} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-foreground mb-1">{insight.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{insight.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* System Status */}
      <div className="pt-4 border-t border-border">
        <h3 className="text-sm font-semibold text-foreground mb-3">System Status</h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center py-2 border-b border-border/50">
            <span className="text-xs text-muted-foreground">Data Accuracy</span>
            <span className="text-sm font-semibold text-safe">94.2%</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-border/50">
            <span className="text-xs text-muted-foreground">Active Alerts</span>
            <span className="text-sm font-semibold text-info">2,847</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-xs text-muted-foreground">Lives Saved Today</span>
            <span className="text-sm font-semibold text-safe">156</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
