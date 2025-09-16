import { User } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-orange-gradient rounded-lg flex items-center justify-center">
          <div className="w-6 h-6 bg-surface-elevated rounded-sm"></div>
        </div>
        <h1 className="text-2xl font-bold text-text-primary">CraftMate</h1>
      </div>
      
      <div className="w-12 h-12 border-2 border-orange-primary rounded-lg flex items-center justify-center">
        <User className="w-6 h-6 text-orange-primary" />
      </div>
    </header>
  );
};

export default Header;