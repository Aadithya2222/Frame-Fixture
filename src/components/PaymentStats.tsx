const PaymentStats = () => {
  return (
    <div className="mx-4 mb-6">
      <h2 className="text-lg font-semibold text-text-primary mb-4">Payment Stats</h2>
      
      <div className="bg-orange-gradient rounded-2xl p-6 text-surface-elevated shadow-elevated">
        <div className="flex gap-2 mb-6">
          <button className="px-4 py-2 bg-surface-elevated text-orange-primary rounded-lg font-medium flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-primary rounded-full"></span>
            Paid
          </button>
          <button className="px-4 py-2 border border-surface-elevated/30 text-surface-elevated rounded-lg font-medium">
            COD
          </button>
          <button className="px-4 py-2 border border-surface-elevated/30 text-surface-elevated rounded-lg font-medium">
            EMI
          </button>
        </div>
        
        <div className="flex items-center gap-4 mb-8">
          <div className="text-3xl font-bold">₹12,500</div>
          <div className="flex items-center gap-1 bg-surface-elevated/20 px-2 py-1 rounded-lg">
            <div className="text-sm">+4%</div>
            <div className="text-xs">(+₹1.9k)</div>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span>● Current period</span>
            <span>○ Comparison</span>
          </div>
        </div>
        
        {/* Chart area */}
        <div className="h-32 relative overflow-hidden">
          <svg viewBox="0 0 400 100" className="w-full h-full">
            <path
              d="M0,80 Q50,60 100,70 T200,50 T300,40 T400,45"
              stroke="white"
              strokeWidth="2"
              fill="none"
              opacity="0.8"
            />
            <path
              d="M0,70 Q50,50 100,60 T200,30 T300,20 T400,25"
              stroke="white"
              strokeWidth="2"
              fill="none"
              opacity="0.4"
            />
          </svg>
        </div>
        
        <div className="flex justify-between text-xs mt-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num) => (
            <span key={num} className="opacity-70">{num}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentStats;