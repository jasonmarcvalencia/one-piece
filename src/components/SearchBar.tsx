import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}

const SearchBar = ({ value, onChange, placeholder = "Search..." }: SearchBarProps) => (
  <div className="relative">
    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-background text-foreground font-body text-sm
        shadow-[inset_0_0_0_1px_hsl(var(--border))]
        focus:shadow-[inset_0_0_0_1px_hsl(var(--primary)),0_0_0_3px_hsla(17,80%,50%,0.3)]
        outline-none transition-shadow duration-150"
    />
  </div>
);

export default SearchBar;
