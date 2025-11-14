import { Navigation } from "@/components/Navigation";
import { MetricsGrid } from "@/components/MetricsGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Content area with padding for fixed nav */}
      <main className="pt-[72px]">
        <div className="max-w-[1920px] mx-auto px-6 py-8">
          <MetricsGrid />
        </div>
      </main>
    </div>
  );
};

export default Index;
