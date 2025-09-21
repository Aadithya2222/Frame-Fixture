import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import ModeToggle from "@/components/ModeToggle";
import QuickActions from "@/components/QuickActions";
import PaymentStats from "@/components/PaymentStats";
import BottomNav from "@/components/BottomNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto relative">
      {/* Header Section */}
      <div className="bg-gradient-to-b from-surface-elevated to-background border-b border-orange-light/20">
        <Header />
        <SearchBar />
      </div>
      
      {/* Mode Toggle */}
      <ModeToggle />
      
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto pb-24 px-0">
        <QuickActions />
        <PaymentStats />
      </div>
      
      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Index;
