interface DevilFruitCardProps {
  name: string;
  type: "Paramecia" | "Zoan" | "Logia";
  ability: string;
  user: string;
  index?: number;
}

const typeColors: Record<string, string> = {
  Paramecia: "bg-primary/10 text-primary",
  Zoan: "bg-green-100 text-green-800",
  Logia: "bg-blue-100 text-blue-800",
};

const DevilFruitCard = ({ name, type, ability, user, index = 0 }: DevilFruitCardProps) => (
  <div
    className="scroll-reveal bg-card rounded-lg card-shadow hover:-translate-y-1 hover:card-shadow-hover transition-all duration-200 p-5"
    style={{ transitionDelay: `${index * 50}ms` }}
  >
    <div className="flex items-start justify-between mb-3">
      <h3 className="font-display text-lg text-foreground">{name}</h3>
      <span className={`text-xs font-body font-bold px-2 py-0.5 rounded-full ${typeColors[type]}`}>
        {type}
      </span>
    </div>
    <p className="text-sm text-muted-foreground mb-3">{ability}</p>
    <p className="text-xs font-body font-semibold text-accent">User: {user}</p>
  </div>
);

export default DevilFruitCard;
