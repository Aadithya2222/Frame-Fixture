import { Clock, BarChart3, FileText, Truck } from "lucide-react";

const modes = [
  { icon: Clock, label: "Profile mode", active: true },
  { icon: BarChart3, label: "Sales" },
  { icon: FileText, label: "Reports" },
  { icon: Truck, label: "Delivery details" },
];

const ModeToggle = () => {
  return (
    <div className="flex gap-2 px-4 mb-6">
      {modes.map((mode, index) => {
        const Icon = mode.icon;
        return (
          <button
            key={index}
            className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-colors ${
              mode.active
                ? "bg-orange-primary text-surface-elevated"
                : "border border-orange-primary text-orange-primary"
            }`}
          >
            <Icon className="w-4 h-4" />
            {mode.label}
          </button>
        );
      })}
    </div>
  );
};

export default ModeToggle;