import { Plus, Clock, Edit, RotateCcw, RefreshCw, DollarSign, HelpCircle, AlertTriangle, Target } from "lucide-react";

const actions = [
  { icon: Plus, label: "New Post", color: "text-orange-primary" },
  { icon: Clock, label: "Pending", color: "text-orange-primary" },
  { icon: Edit, label: "Edit", color: "text-orange-primary" },
  { icon: Target, label: "Status", color: "text-orange-primary" },
  { icon: RotateCcw, label: "Returns", color: "text-orange-primary" },
  { icon: DollarSign, label: "Refunds", color: "text-orange-primary" },
  { icon: HelpCircle, label: "Support", color: "text-orange-primary" },
  { icon: AlertTriangle, label: "Issues", color: "text-orange-primary" },
];

const QuickActions = () => {
  return (
    <div className="mx-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-text-primary">Quick actions</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-text-secondary">View as</span>
          <span className="px-3 py-1 bg-orange-primary text-surface-elevated text-sm rounded-full font-medium">
            Artisan
          </span>
        </div>
      </div>
      
      <div className="bg-surface-elevated rounded-2xl border-2 border-orange-primary p-4 shadow-soft">
        <div className="grid grid-cols-4 gap-4">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <button
                key={index}
                className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-orange-light transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl border-2 border-orange-primary flex items-center justify-center group-hover:bg-orange-primary transition-colors">
                  <Icon className={`w-6 h-6 ${action.color} group-hover:text-surface-elevated transition-colors`} />
                </div>
                <span className="text-sm font-medium text-text-primary text-center leading-tight">
                  {action.label}
                </span>
              </button>
            );
          })}
        </div>
        
        <div className="mt-4 pt-4 border-t border-orange-light">
          <button className="w-full py-2 bg-orange-primary text-surface-elevated rounded-xl font-medium">
            View more
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;