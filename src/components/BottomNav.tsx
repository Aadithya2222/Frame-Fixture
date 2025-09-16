import { Home, Coins, Plus, BarChart3, List } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", active: true },
  { icon: Coins, label: "Earn" },
  { icon: Plus, label: "New Post", isCenter: true },
  { icon: BarChart3, label: "Report" },
  { icon: List, label: "My Listing" },
];

const BottomNav = () => {
  return (
    <div className="bg-surface-elevated border-t border-orange-light px-4 py-2 rounded-t-3xl">
      <div className="flex items-center justify-around">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={index}
              className={`flex flex-col items-center gap-1 p-2 ${
                item.isCenter
                  ? "bg-orange-primary text-surface-elevated rounded-full p-3 -mt-4 shadow-elevated"
                  : item.active
                  ? "text-orange-primary"
                  : "text-text-secondary"
              }`}
            >
              <Icon className={`w-6 h-6 ${item.isCenter ? "w-7 h-7" : ""}`} />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;