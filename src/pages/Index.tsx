import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { AIInsightsPanel } from "@/components/AIInsightsPanel";
import { MetricsGrid } from "@/components/MetricsGrid";
import { TrafficMap } from "@/components/TrafficMap";
import { BoroughDetails } from "@/components/BoroughDetails";
import { EmergencyTracking } from "@/components/EmergencyTracking";
import { MobileHealthCamps } from "@/components/MobileHealthCamps";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const BOROUGHS = [
  "All NYC Boroughs",
  "Manhattan",
  "Brooklyn",
  "Queens",
  "Bronx",
  "Staten Island",
];

const Index = () => {
  const [activeView, setActiveView] = useState("maps");
  const [selectedBorough, setSelectedBorough] = useState("Bronx");
  const [boroughFilter, setBoroughFilter] = useState("All NYC Boroughs");

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar Navigation */}
      <Sidebar activeView={activeView} onViewChange={setActiveView} />

      {/* Main Content */}
      <main className="ml-60 mr-80 p-8">
        {/* Top Bar */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {activeView === "maps" && "Borough Maps"}
              {activeView === "environment" && "Environmental Data"}
              {activeView === "analytics" && "Department Analytics"}
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Real-time monitoring across NYC • Last updated: 2m ago
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Select value={boroughFilter} onValueChange={setBoroughFilter}>
              <SelectTrigger className="w-48 bg-white border-2 border-gray-200 rounded-xl py-2.5 px-4 text-sm font-medium hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white border-2 border-gray-200 rounded-xl">
                {BOROUGHS.map((borough) => (
                  <SelectItem key={borough} value={borough} className="hover:bg-gray-50">
                    {borough}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Executive Summary */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Executive Summary</h2>
          <MetricsGrid />
        </section>

        {/* Borough Map & Details */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">NYC Traffic & Health Risk Overview</h2>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-8">
              <TrafficMap
                onBoroughSelect={setSelectedBorough}
                selectedBorough={selectedBorough}
              />
            </div>
            <div className="col-span-4">
              <BoroughDetails borough={selectedBorough} />
            </div>
          </div>
        </section>

        {/* Emergency Tracking */}
        <section className="mb-8">
          <EmergencyTracking />
        </section>

        {/* Mobile Health Camps */}
        <section className="mb-8">
          <MobileHealthCamps />
        </section>
      </main>

      {/* AI Insights Panel */}
      <AIInsightsPanel />
    </div>
  );
};

export default Index;
