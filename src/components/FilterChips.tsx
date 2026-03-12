interface FilterChipsProps {
  options: string[];
  selected: string;
  onSelect: (v: string) => void;
}

const FilterChips = ({ options, selected, onSelect }: FilterChipsProps) => (
  <div className="flex flex-wrap gap-2">
    {options.map((opt) => (
      <button
        key={opt}
        onClick={() => onSelect(opt)}
        className={`px-3 py-1.5 rounded-full text-xs font-body font-semibold transition-all duration-150
          ${
            selected === opt
              ? "bg-primary text-primary-foreground shadow-sm"
              : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
          }`}
      >
        {opt}
      </button>
    ))}
  </div>
);

export default FilterChips;
