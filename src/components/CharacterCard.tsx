interface CharacterCardProps {
  name: string;
  crew: string;
  bounty: string;
  description: string;
  image: string;
  index?: number;
}

const CharacterCard = ({ name, crew, bounty, description, image, index = 0 }: CharacterCardProps) => (
  <div
    className="scroll-reveal bg-card rounded-lg card-shadow hover:-translate-y-1 hover:card-shadow-hover transition-all duration-200 overflow-hidden group"
    style={{ transitionDelay: `${index * 50}ms` }}
  >
    <div className="aspect-[3/4] overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
    </div>
    <div className="p-4">
      <h3 className="font-display text-lg text-foreground">{name}</h3>
      <div className="flex items-center justify-between mt-1 mb-2">
        <span className="text-xs font-body font-semibold text-primary uppercase tracking-wider">{crew}</span>
        <span className="text-xs font-body font-bold text-accent bounty-number">{bounty}</span>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  </div>
);

export default CharacterCard;
