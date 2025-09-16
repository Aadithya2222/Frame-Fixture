import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import ModeToggle from "@/components/ModeToggle";
import QuickActions from "@/components/QuickActions";
import PaymentStats from "@/components/PaymentStats";
import BottomNav from "@/components/BottomNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto">
      <Header />
      <SearchBar />
      <ModeToggle />
      
      <div className="flex-1 overflow-y-auto">
        <QuickActions />
        <PaymentStats />
      </div>
      
      <BottomNav />
    </div>
  );
};

export default Index;
