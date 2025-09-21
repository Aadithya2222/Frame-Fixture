import { useState } from "react";

const PaymentStats = () => {
  const [activeTab, setActiveTab] = useState("paid");
  
  const statsData = {
    paid: { amount: "₹12,500", growth: "+4%", growthAmount: "+₹1.9k" },
    cod: { amount: "₹8,200", growth: "+2%", growthAmount: "+₹800" },
    emi: { amount: "₹5,300", growth: "+6%", growthAmount: "+₹1.2k" }
  };

  const currentStats = statsData[activeTab as keyof typeof statsData];

  return (
    <div className="mx-4 mb-8">
      <h2 className="text-xl font-bold text-text-primary mb-6">Payment Stats</h2>
      
      <div className="bg-gradient-primary rounded-3xl p-8 text-surface-elevated shadow-glow relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-surface-elevated/10 rounded-full -translate-y-8 translate-x-8"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-surface-elevated/5 rounded-full translate-y-8 -translate-x-8"></div>
        
        <div className="relative z-10">
          <div className="flex gap-2 mb-8">
            {[
              { key: "paid", label: "Paid", icon: "●" },
              { key: "cod", label: "COD", icon: "●" },
              { key: "emi", label: "EMI", icon: "●" }
            ].map((tab) => (
              <button 
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 ${
                  activeTab === tab.key
                    ? "bg-surface-elevated text-orange-primary shadow-soft transform scale-105"
                    : "border border-surface-elevated/30 text-surface-elevated hover:bg-surface-elevated/20"
                }`}
              >
                <span className={`w-2 h-2 rounded-full inline-block mr-2 ${
                  activeTab === tab.key ? 'bg-orange-primary' : 'bg-surface-elevated'
                }`}></span>
                {tab.label}
              </button>
            ))}
          </div>
        
          <div className="flex items-center gap-6 mb-10">
            <div className="text-4xl font-bold tracking-tight">{currentStats.amount}</div>
            <div className="flex items-center gap-2 bg-surface-elevated/20 backdrop-blur-sm px-4 py-2 rounded-2xl border border-surface-elevated/20">
              <div className="text-lg font-semibold">{currentStats.growth}</div>
              <div className="text-sm opacity-90">({currentStats.growthAmount})</div>
            </div>
          </div>
        
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-4 opacity-90">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 bg-surface-elevated rounded-full"></span>
                Current period
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 border-2 border-surface-elevated rounded-full"></span>
                Comparison
              </span>
            </div>
          </div>
          
          {/* Enhanced Chart area */}
          <div className="h-40 relative overflow-hidden rounded-2xl bg-surface-elevated/10 p-4">
            <svg viewBox="0 0 400 120" className="w-full h-full">
              {/* Grid lines */}
              <defs>
                <pattern id="grid" width="40" height="24" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 24" fill="none" stroke="white" strokeWidth="0.5" opacity="0.1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              
              {/* Area fill */}
              <path
                d="M0,90 Q50,70 100,80 T200,60 T300,50 T400,55 L400,120 L0,120 Z"
                fill="white"
                opacity="0.1"
              />
              
              {/* Main line */}
              <path
                d="M0,90 Q50,70 100,80 T200,60 T300,50 T400,55"
                stroke="white"
                strokeWidth="3"
                fill="none"
                opacity="0.9"
                strokeLinecap="round"
              />
              
              {/* Comparison line */}
              <path
                d="M0,80 Q50,60 100,70 T200,40 T300,30 T400,35"
                stroke="white"
                strokeWidth="2"
                fill="none"
                opacity="0.5"
                strokeDasharray="4,4"
              />
              
              {/* Data points */}
              <circle cx="100" cy="80" r="3" fill="white" opacity="0.9"/>
              <circle cx="200" cy="60" r="3" fill="white" opacity="0.9"/>
              <circle cx="300" cy="50" r="3" fill="white" opacity="0.9"/>
              <circle cx="400" cy="55" r="3" fill="white" opacity="0.9"/>
            </svg>
          </div>
          
          <div className="flex justify-between text-sm mt-6 opacity-80">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'].map((month) => (
              <span key={month} className="font-medium">{month}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentStats;