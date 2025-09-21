import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Share2, Heart, ShoppingCart, Sparkles, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";

const ProductPreview = () => {
  const [showSeoModal, setShowSeoModal] = useState(false);
  const [seoStep, setSeoStep] = useState("optimizing"); // "optimizing" | "success"
  const navigate = useNavigate();

  const handleSeoOptimize = () => {
    setShowSeoModal(true);
    setSeoStep("optimizing");
    
    // Show optimizing for 3 seconds, then success
    setTimeout(() => {
      setSeoStep("success");
      setTimeout(() => {
        setShowSeoModal(false);
      }, 1500);
    }, 3000);
  };

  const handleFinalPost = () => {
    // Navigate back to home or show success
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto">
      <Header />
      
      {/* Header with Navigation */}
      <div className="px-4 py-4 border-b border-orange-light">
        <div className="flex items-center justify-between mb-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate(-1)}
            className="text-text-primary hover:bg-orange-light/20"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-semibold text-text-primary">Product Preview</h1>
          <Button 
            variant="ghost" 
            size="icon"
            className="text-text-primary hover:bg-orange-light/20"
          >
            <Share2 className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-20">
        {/* Product Image */}
        <div className="relative">
          <div className="aspect-square bg-gradient-to-br from-orange-light/20 to-orange-primary/10 border border-orange-light/30">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-orange-primary/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <ShoppingCart className="w-12 h-12 text-orange-primary" />
                </div>
                <p className="text-text-secondary text-sm">Product Image</p>
              </div>
            </div>
          </div>
          <Button 
            size="icon" 
            className="absolute top-4 right-4 bg-surface-elevated/80 backdrop-blur-sm hover:bg-surface-elevated border border-orange-light/20"
          >
            <Heart className="w-5 h-5 text-text-secondary" />
          </Button>
        </div>

        {/* Product Details */}
        <div className="px-4 py-6">
          <div className="mb-4">
            <div className="flex items-start justify-between mb-2">
              <h2 className="text-2xl font-bold text-text-primary flex-1">
                Artisan Handcrafted Wooden Bowl
              </h2>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-orange-primary/10 text-orange-primary border-orange-primary/20">
                Handicraft
              </Badge>
              <Badge variant="outline" className="border-orange-light text-text-secondary">
                Handmade
              </Badge>
            </div>
          </div>

          {/* Price */}
          <Card className="mb-6 border-orange-light/30 bg-gradient-to-r from-orange-primary/5 to-orange-light/5">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-secondary text-sm mb-1">Price</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-orange-primary">$89.99</span>
                    <span className="text-lg text-text-secondary line-through">$120.00</span>
                  </div>
                </div>
                <div className="text-right">
                  <Badge className="bg-green-500 text-white">
                    25% OFF
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-text-primary mb-3">Description</h3>
            <p className="text-text-secondary leading-relaxed">
              Beautiful handcrafted wooden bowl made from premium teak wood. Perfect for serving salads, fruits, or as a decorative piece. Each bowl is unique with its own natural grain patterns. Sustainably sourced and eco-friendly.
            </p>
          </div>

          {/* Product Info */}
          <Card className="mb-6 border-orange-light/30">
            <CardContent className="p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">Category</span>
                <span className="text-text-primary font-medium">Home & Kitchen</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">Listed by</span>
                <span className="text-text-primary font-medium">CraftMaster Studio</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">Material</span>
                <span className="text-text-primary font-medium">Teak Wood</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">Condition</span>
                <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                  New
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button 
              onClick={handleSeoOptimize}
              className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              SEO Optimize
            </Button>
            
            <Button 
              onClick={handleFinalPost}
              className="w-full bg-gradient-primary text-surface-elevated font-semibold py-4 rounded-xl shadow-elegant hover:shadow-glow transition-all duration-300"
            >
              <Check className="w-5 h-5 mr-2" />
              Final Post
            </Button>
          </div>
        </div>
      </div>

      <BottomNav />

      {/* SEO Optimize Modal */}
      <Dialog open={showSeoModal} onOpenChange={setShowSeoModal}>
        <DialogContent className="sm:max-w-md mx-auto bg-surface-elevated border-orange-light">
          <div className="text-center py-8">
            {seoStep === "optimizing" ? (
              <>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">SEO Optimizing...</h3>
                <p className="text-text-secondary">Enhancing content for search engines</p>
                <div className="flex justify-center mt-4">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">SEO Optimized!</h3>
                <p className="text-text-secondary">Content is now search engine ready</p>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductPreview;