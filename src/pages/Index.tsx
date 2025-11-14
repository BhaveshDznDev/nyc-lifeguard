import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Content area with padding for fixed nav */}
      <main className="pt-[72px]">
        <div className="max-w-[1920px] mx-auto px-6 py-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-semibold text-foreground">
              Dashboard Ready
            </h2>
            <p className="text-muted-foreground">
              Navigation component is live. Ready for dashboard widgets.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
