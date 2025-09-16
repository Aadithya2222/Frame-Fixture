import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="mx-4 mb-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Analytics.."
          className="w-full px-4 py-3 pr-12 bg-surface-elevated border border-border rounded-xl text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-transparent"
        />
        <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-secondary" />
      </div>
    </div>
  );
};

export default SearchBar;