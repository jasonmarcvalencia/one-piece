import { Link } from "react-router-dom";
import { Compass, Skull, Flame, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import CharacterCard from "@/components/CharacterCard";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import heroBg from "@/assets/hero-bg.jpg";
import luffy from "@/assets/characters/luffy.jpg";
import zoro from "@/assets/characters/zoro.jpg";
import nami from "@/assets/characters/nami.jpg";

const featuredCharacters = [
  { name: "Monkey D. Luffy", crew: "Straw Hats", bounty: "฿3,000,000,000", description: "Captain of the Straw Hat Pirates and the man who will become King of the Pirates.", image: luffy },
  { name: "Roronoa Zoro", crew: "Straw Hats", bounty: "฿1,111,000,000", description: "The Straw Hats' swordsman who aims to become the world's greatest.", image: zoro },
  { name: "Nami", crew: "Straw Hats", bounty: "฿366,000,000", description: "Navigator of the Straw Hat crew and cartographer who dreams of mapping the entire world.", image: nami },
];

const featuredArcs = [
  { title: "Enies Lobby", desc: "The Straw Hats wage war on the World Government to save Robin." },
  { title: "Marineford", desc: "The greatest war in pirate history. Whitebeard vs. the Marines." },
  { title: "Wano", desc: "An epic showdown against two Emperors to liberate the land of samurai." },
];

const featuredFruits = [
  { name: "Gomu Gomu no Mi", type: "Paramecia", user: "Monkey D. Luffy" },
  { name: "Mera Mera no Mi", type: "Logia", user: "Portgas D. Ace / Sabo" },
  { name: "Ope Ope no Mi", type: "Paramecia", user: "Trafalgar Law" },
];

const HomePage = () => {
  const revealRef = useScrollReveal();

  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative min-h-[70svh] flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
        <div className="relative z-10 text-center px-6 py-20">
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl text-primary-foreground mb-4 animate-fade-up">
            Welcome to the Grand Line
          </h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "150ms" }}>
            Your definitive fan encyclopedia for the world of One Piece. Explore characters, devil fruits, and the legendary story arcs.
          </p>
          <Link
            to="/characters"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-body font-bold text-sm
              hover:bg-primary/90 active:scale-[0.97] transition-all duration-150 animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            <Compass className="h-4 w-4" />
            Explore the World of One Piece
          </Link>
        </div>
      </section>

      <div ref={revealRef}>
        {/* Featured Characters */}
        <section className="section-padding">
          <div className="container-main">
            <div className="flex items-center justify-between mb-8">
              <h2 className="scroll-reveal font-display text-3xl text-foreground">Featured Characters</h2>
              <Link to="/characters" className="scroll-reveal text-sm font-body font-semibold text-primary hover:text-primary/80 flex items-center gap-1 transition-colors">
                View All <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCharacters.map((c, i) => (
                <CharacterCard key={c.name} {...c} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Arcs */}
        <section className="section-padding bg-muted/50">
          <div className="container-main">
            <div className="flex items-center justify-between mb-8">
              <h2 className="scroll-reveal font-display text-3xl text-foreground flex items-center gap-2">
                <Skull className="h-6 w-6 text-primary" /> Legendary Story Arcs
              </h2>
              <Link to="/story-arcs" className="scroll-reveal text-sm font-body font-semibold text-primary hover:text-primary/80 flex items-center gap-1 transition-colors">
                All Arcs <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredArcs.map((a, i) => (
                <div key={a.title} className="scroll-reveal bg-card rounded-lg card-shadow p-5 hover:-translate-y-1 hover:card-shadow-hover transition-all duration-200" style={{ transitionDelay: `${i * 60}ms` }}>
                  <h3 className="font-display text-xl text-foreground mb-2">{a.title}</h3>
                  <p className="text-sm text-muted-foreground">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Devil Fruits */}
        <section className="section-padding">
          <div className="container-main">
            <div className="flex items-center justify-between mb-8">
              <h2 className="scroll-reveal font-display text-3xl text-foreground flex items-center gap-2">
                <Flame className="h-6 w-6 text-accent" /> Devil Fruits
              </h2>
              <Link to="/devil-fruits" className="scroll-reveal text-sm font-body font-semibold text-primary hover:text-primary/80 flex items-center gap-1 transition-colors">
                All Fruits <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredFruits.map((f, i) => (
                <div key={f.name} className="scroll-reveal bg-card rounded-lg card-shadow p-5 hover:-translate-y-1 hover:card-shadow-hover transition-all duration-200" style={{ transitionDelay: `${i * 60}ms` }}>
                  <h3 className="font-display text-lg text-foreground">{f.name}</h3>
                  <p className="text-xs font-body font-bold text-accent mt-1">{f.type}</p>
                  <p className="text-sm text-muted-foreground mt-2">Known user: {f.user}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-secondary text-secondary-foreground">
          <div className="container-main text-center">
            <h2 className="scroll-reveal font-display text-3xl md:text-4xl mb-4">Begin Your Adventure</h2>
            <p className="scroll-reveal text-secondary-foreground/70 max-w-lg mx-auto mb-8">
              Dive deeper into the world of One Piece. Search characters, explore arcs, and discover every Devil Fruit.
            </p>
            <Link
              to="/characters"
              className="scroll-reveal inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-body font-bold text-sm
                hover:bg-accent/90 active:scale-[0.97] transition-all duration-150"
            >
              Explore the Grand Line
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
