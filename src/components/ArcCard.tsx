interface ArcCardProps {
  title: string;
  summary: string;
  characters: string[];
  events: string[];
  index?: number;
}

const ArcCard = ({ title, summary, characters, events, index = 0 }: ArcCardProps) => (
  <div
    className="scroll-reveal bg-card rounded-lg card-shadow p-6 border-l-4 border-primary"
    style={{ transitionDelay: `${index * 80}ms` }}
  >
    <h3 className="font-display text-2xl text-foreground mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground mb-4">{summary}</p>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <h4 className="text-xs font-body font-bold uppercase tracking-wider text-primary mb-2">Key Characters</h4>
        <ul className="space-y-1">
          {characters.map((c) => (
            <li key={c} className="text-sm text-foreground">{c}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-xs font-body font-bold uppercase tracking-wider text-accent mb-2">Important Events</h4>
        <ul className="space-y-1">
          {events.map((e) => (
            <li key={e} className="text-sm text-foreground">{e}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default ArcCard;
