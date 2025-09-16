import { Home, Coins, Plus, BarChart3, List } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Coins, label: "Earn", path: "/earn" },
  { icon: Plus, label: "New Post", path: "/new-post", isCenter: true },
  { icon: BarChart3, label: "Report", path: "/report" },
  { icon: List, label: "My Listing", path: "/my-listing" },
];

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-surface-elevated border-t border-orange-light px-4 py-2 rounded-t-3xl z-50">
      <div className="flex items-center justify-around">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <button
              key={index}
              onClick={() => handleNavigation(item.path)}
              className={`flex flex-col items-center gap-1 p-2 transition-colors ${
                item.isCenter
                  ? "bg-orange-primary text-surface-elevated rounded-full p-3 -mt-4 shadow-elevated hover:bg-orange-primary/90"
                  : isActive
                  ? "text-orange-primary"
                  : "text-text-secondary hover:text-orange-primary"
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