import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { MetricsGrid } from "@/components/MetricsGrid";
import { BoroughMap } from "@/components/BoroughMap";
import { BoroughDetails } from "@/components/BoroughDetails";

const Index = () => {
  const [selectedBorough, setSelectedBorough] = useState("Bronx");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Content area with padding for fixed nav */}
      <main className="pt-[72px]">
        <div className="max-w-[1920px] mx-auto px-6 py-8 space-y-8">
          {/* Metrics Grid */}
          <MetricsGrid />

          {/* Map + Details Section */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
            {/* Map Section - 8 columns */}
            <div className="xl:col-span-8">
              <BoroughMap 
                selectedBorough={selectedBorough}
                onBoroughSelect={setSelectedBorough}
              />
            </div>

            {/* Details Panel - 4 columns */}
            <div className="xl:col-span-4">
              <BoroughDetails borough={selectedBorough} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
