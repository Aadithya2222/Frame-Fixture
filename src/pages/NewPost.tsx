import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Upload, RotateCcw, User, ChevronLeft, ChevronRight, Mic, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";

const NewPost = () => {
  const [productTitle, setProductTitle] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [currentUploadType, setCurrentUploadType] = useState(0); // 0 for images, 1 for audio
  const [showAnalyzeModal, setShowAnalyzeModal] = useState(false);
  const [analyzeStep, setAnalyzeStep] = useState("analyzing"); // "analyzing" | "success"
  const navigate = useNavigate();

  const handleLeftScroll = () => {
    if (currentUploadType > 0) {
      setCurrentUploadType(currentUploadType - 1);
    }
  };

  const handleRightScroll = () => {
    if (currentUploadType < 1) {
      setCurrentUploadType(currentUploadType + 1);
    }
  };

  const handleAnalyze = () => {
    setShowAnalyzeModal(true);
    setAnalyzeStep("analyzing");
    
    // Show analyzing for 3 seconds, then success
    setTimeout(() => {
      setAnalyzeStep("success");
      setTimeout(() => {
        setShowAnalyzeModal(false);
        navigate("/product-preview");
      }, 1500);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto">
      <Header />
      
      {/* Progress Section */}
      <div className="px-4 py-4 border-b border-orange-light">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-orange-primary flex items-center justify-center">
            <span className="text-surface-elevated text-sm font-semibold">+</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-orange-primary"></div>
            <div className="w-8 h-0.5 bg-orange-primary"></div>
            <div className="w-4 h-4 rounded-full bg-orange-primary"></div>
            <div className="w-8 h-0.5 bg-orange-light"></div>
            <div className="w-4 h-4 rounded-full bg-orange-light"></div>
          </div>
          <h1 className="text-xl font-semibold text-text-primary ml-auto">New Post</h1>
        </div>
        
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium text-text-primary">Product details</h2>
          <Button variant="destructive" size="sm" className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded-full">
            Save as draft
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-20">
        {/* Upload Section */}
        <div className="px-4 py-6">
          <div className="relative overflow-hidden bg-orange-light/20 border-2 border-orange-primary border-dashed rounded-2xl p-8 mb-4">
            <button 
              onClick={handleLeftScroll}
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-10 ${currentUploadType === 0 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
              disabled={currentUploadType === 0}
            >
              <ChevronLeft className="w-6 h-6 text-orange-primary" />
            </button>
            <button 
              onClick={handleRightScroll}
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-10 ${currentUploadType === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
              disabled={currentUploadType === 1}
            >
              <ChevronRight className="w-6 h-6 text-orange-primary" />
            </button>
            
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentUploadType * 100}%)` }}
            >
              {/* Images Upload Slide */}
              <div className="w-full flex-shrink-0">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-primary/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <div className="relative">
                      <User className="w-8 h-8 text-orange-primary" />
                      <Upload className="w-4 h-4 text-orange-primary absolute -top-1 -right-1" />
                    </div>
                  </div>
                  <div className="mb-2">
                    <span className="text-orange-primary">✨</span>
                    <span className="text-orange-primary ml-8">✨</span>
                  </div>
                  <p className="text-text-primary font-medium mb-1">Upload Images,</p>
                  <p className="text-text-primary font-medium mb-4">Pdf, Docs, etc.</p>
                  <p className="text-orange-primary text-sm font-medium">
                    Sit back and see, let our AI make everything for you*
                  </p>
                </div>
              </div>
              
              {/* Audio Upload Slide */}
              <div className="w-full flex-shrink-0">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-primary/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <div className="relative">
                      <Mic className="w-8 h-8 text-orange-primary" />
                      <Upload className="w-4 h-4 text-orange-primary absolute -top-1 -right-1" />
                    </div>
                  </div>
                  <div className="mb-2">
                    <span className="text-orange-primary">🎵</span>
                    <span className="text-orange-primary ml-8">🎵</span>
                  </div>
                  <p className="text-text-primary font-medium mb-1">Upload Audio,</p>
                  <p className="text-text-primary font-medium mb-4">Voice recordings, etc.</p>
                  <p className="text-orange-primary text-sm font-medium">
                    Let our AI transcribe and analyze your audio*
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Step Indicator */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-2">
              <div className="w-12 h-1 bg-orange-primary rounded-full"></div>
              <div className="w-12 h-1 bg-orange-light rounded-full"></div>
              <div className="w-12 h-1 bg-orange-light rounded-full"></div>
              <div className="w-12 h-1 bg-orange-light rounded-full"></div>
            </div>
            <span className="text-text-secondary text-sm">Step 1 of 4</span>
          </div>
          
          <div className="text-center mb-6">
            <span className="text-text-secondary">Or</span>
          </div>

          {/* Analyze Button */}
          <div className="text-center mb-6">
            <Button 
              onClick={handleAnalyze}
              className="bg-gradient-primary text-surface-elevated font-semibold px-8 py-3 rounded-xl shadow-elegant hover:shadow-glow transition-all duration-300"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Analyze with AI
            </Button>
          </div>
        </div>

        {/* Manual Entry Section */}
        <div className="px-4">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Manual entry</h3>
          
          <div className="mb-6">
            <h4 className="text-text-primary font-medium mb-3">Upload images and videos</h4>
            <div className="grid grid-cols-3 gap-3">
              <div className="aspect-square bg-surface-secondary border-2 border-dashed border-orange-light rounded-xl flex flex-col items-center justify-center p-4">
                <div className="w-8 h-8 text-orange-primary mb-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </div>
                <p className="text-text-secondary text-xs text-center">Upload images and videos here.</p>
              </div>
              <div className="aspect-square bg-surface-secondary border-2 border-dashed border-orange-light rounded-xl flex items-center justify-center">
                <div className="w-8 h-8 text-orange-primary">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </div>
              </div>
              <div className="aspect-square bg-surface-secondary border border-orange-light rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 text-orange-primary">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mb-6">
            <div className="w-2 h-2 bg-orange-primary rounded-full"></div>
            <div className="w-8 h-2 bg-orange-light rounded-full"></div>
          </div>

          {/* Product Title */}
          <div className="mb-4">
            <label className="text-text-primary font-medium mb-2 block">Product title</label>
            <div className="relative">
              <Input
                value={productTitle}
                onChange={(e) => setProductTitle(e.target.value)}
                className="pr-24 border-orange-light focus:border-orange-primary"
                placeholder="Enter product title"
              />
              <Button 
                size="sm"
                className="absolute right-1 top-1 bg-orange-primary hover:bg-orange-primary/90 text-surface-elevated text-xs px-3 rounded-md"
              >
                <RotateCcw className="w-3 h-3 mr-1" />
                Regenerate
              </Button>
            </div>
          </div>

          {/* Product Description */}
          <div className="mb-6">
            <label className="text-text-primary font-medium mb-2 block">Product Description</label>
            <Textarea
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              className="min-h-[120px] border-orange-light focus:border-orange-primary resize-none"
              placeholder="Describe your product..."
            />
          </div>
        </div>
      </div>

      <BottomNav />

      {/* Analyze Modal */}
      <Dialog open={showAnalyzeModal} onOpenChange={setShowAnalyzeModal}>
        <DialogContent className="sm:max-w-md mx-auto bg-surface-elevated border-orange-light">
          <div className="text-center py-8">
            {analyzeStep === "analyzing" ? (
              <>
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse">
                  <Sparkles className="w-8 h-8 text-surface-elevated" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">Analyzing...</h3>
                <p className="text-text-secondary">AI is processing your content</p>
                <div className="flex justify-center mt-4">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-orange-primary rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-orange-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-orange-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">Success!</h3>
                <p className="text-text-secondary">Analysis completed successfully</p>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NewPost;