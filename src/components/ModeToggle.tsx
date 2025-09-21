import { useState } from "react";
import { Clock, BarChart3, FileText, Truck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ModeToggle = () => {
  const [activeMode, setActiveMode] = useState(0);
  const { toast } = useToast();

  const modes = [
    { icon: Clock, label: "Profile mode" },
    { icon: BarChart3, label: "Sales" },
    { icon: FileText, label: "Reports" },
    { icon: Truck, label: "Delivery details" },
  ];

  const handleModeChange = (index: number, mode: typeof modes[0]) => {
    setActiveMode(index);
    toast({
      title: `Switched to ${mode.label}`,
      description: `Now viewing ${mode.label.toLowerCase()}`
    });
  };

  return (
    <div className="px-4 mb-8">
      <div className="bg-surface-elevated rounded-3xl p-2 shadow-soft border border-orange-light/20">
        <div className="flex gap-1">
          {modes.map((mode, index) => {
            const Icon = mode.icon;
            const isActive = activeMode === index;
            return (
              <button
                key={index}
                onClick={() => handleModeChange(index, mode)}
                className={`flex items-center gap-2 px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 flex-1 justify-center ${
                  isActive
                    ? "bg-gradient-primary text-surface-elevated shadow-elegant transform scale-105"
                    : "text-text-secondary hover:text-orange-primary hover:bg-orange-light/20"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'animate-pulse' : ''}`} />
                <span className="hidden sm:inline">{mode.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ModeToggle;