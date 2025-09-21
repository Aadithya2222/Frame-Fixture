import { Plus, Clock, Edit, RotateCcw, RefreshCw, DollarSign, HelpCircle, AlertTriangle, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const QuickActions = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const actions = [
    { 
      icon: Plus, 
      label: "New Post", 
      color: "text-orange-primary",
      action: () => navigate("/new-post")
    },
    { 
      icon: Clock, 
      label: "Pending", 
      color: "text-orange-primary",
      action: () => toast({ title: "Pending Orders", description: "5 orders are pending review" })
    },
    { 
      icon: Edit, 
      label: "Edit", 
      color: "text-orange-primary",
      action: () => toast({ title: "Edit Mode", description: "Select items to edit" })
    },
    { 
      icon: Target, 
      label: "Status", 
      color: "text-orange-primary",
      action: () => toast({ title: "Status", description: "All systems operational" })
    },
    { 
      icon: RotateCcw, 
      label: "Returns", 
      color: "text-orange-primary",
      action: () => toast({ title: "Returns", description: "2 return requests pending" })
    },
    { 
      icon: DollarSign, 
      label: "Refunds", 
      color: "text-orange-primary",
      action: () => toast({ title: "Refunds", description: "No pending refunds" })
    },
    { 
      icon: HelpCircle, 
      label: "Support", 
      color: "text-orange-primary",
      action: () => toast({ title: "Support", description: "Help center opened" })
    },
    { 
      icon: AlertTriangle, 
      label: "Issues", 
      color: "text-orange-primary",
      action: () => toast({ title: "Issues", description: "No active issues found" })
    },
  ];
  const handleViewMore = () => {
    toast({ 
      title: "More Actions", 
      description: "Additional actions will be available soon" 
    });
  };

  return (
    <div className="mx-4 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-text-primary">Quick actions</h2>
        <div className="flex items-center gap-3">
          <span className="text-sm text-text-secondary">View as</span>
          <div className="px-4 py-2 bg-gradient-primary text-surface-elevated text-sm rounded-full font-semibold shadow-soft">
            Artisan
          </div>
        </div>
      </div>
      
      <div className="bg-surface-elevated rounded-3xl border border-orange-light/30 p-6 shadow-elevated">
        <div className="grid grid-cols-4 gap-4 mb-6">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <button
                key={index}
                onClick={action.action}
                className="flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-gradient-to-br hover:from-orange-light/10 hover:to-orange-primary/5 transition-all duration-300 group transform hover:scale-105"
              >
                <div className="w-14 h-14 rounded-2xl border-2 border-orange-primary/30 bg-gradient-to-br from-orange-light/20 to-orange-primary/10 flex items-center justify-center group-hover:border-orange-primary group-hover:shadow-glow transition-all duration-300">
                  <Icon className={`w-6 h-6 ${action.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <span className="text-xs font-semibold text-text-primary text-center leading-tight group-hover:text-orange-primary transition-colors">
                  {action.label}
                </span>
              </button>
            );
          })}
        </div>
        
        <div className="pt-4 border-t border-orange-light/20">
          <button 
            onClick={handleViewMore}
            className="w-full py-3 bg-gradient-primary text-surface-elevated rounded-2xl font-semibold shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-[1.02]"
          >
            View more actions
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;