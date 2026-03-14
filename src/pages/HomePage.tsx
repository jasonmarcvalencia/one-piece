import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Users, BookOpen, Flame, ChevronRight, Anchor } from "lucide-react";
import Layout from "@/components/Layout";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import heroBg from "@/assets/hero-bg.webp";

const quickNav = [
  { to: "/characters", label: "Characters", icon: Users, count: 48 },
  { to: "/story-arcs", label: "Story Arcs", icon: BookOpen, count: 10 },
  { to: "/devil-fruits", label: "Devil Fruits", icon: Flame, count: 9 },
];

const recentCharacters = [
  { name: "Monkey D. Luffy", crew: "Straw Hats", bounty: "฿3,000,000,000", image: "/straw hats/luffy.webp" },
  { name: "Trafalgar Law", crew: "Heart Pirates", bounty: "฿3,000,000,000", image: "/heart%20pirates/Trafalgar_D._Water_Law_Anime_Post_Timeskip_Infobox.webp" },
  { name: "Sakazuki", crew: "Admirals", bounty: "฿5,000,000,000", image: "/admirals/Sakazuki_Anime_Post_Timeskip_Infobox.webp" },
  { name: "Dracule Mihawk", crew: "Warlords", bounty: "฿3,590,000,000", image: "/warlords/Dracule_Mihawk_Anime_Infobox.webp" },
  { name: "Roronoa Zoro", crew: "Straw Hats", bounty: "฿1,111,000,000", image: "/straw hats/zoro.webp" },
  { name: "Marshall D. Teach", crew: "Warlords", bounty: "฿3,996,000,000", image: "/warlords/Marshall_D._Teach_Anime_Post_Timeskip_Infobox.webp" },
];

const topFruits = [
  { name: "Gomu Gomu no Mi", type: "Paramecia", user: "Luffy", image: "/devil%20fruits/Gomu_Gomu_no_Mi_Infobox.png" },
  { name: "Yami Yami no Mi", type: "Logia", user: "Blackbeard", image: "/devil%20fruits/Yami_Yami_no_Mi_Infobox.png" },
  { name: "Ope Ope no Mi", type: "Paramecia", user: "Law", image: "/devil%20fruits/Ope_Ope_no_Mi_Infobox.png" },
  { name: "Mera Mera no Mi", type: "Logia", user: "Sabo", image: "/devil%20fruits/Mera_Mera_no_Mi_Infobox.png" },
];

const HomePage = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const revealRef = useScrollReveal();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) navigate(`/characters?q=${encodeURIComponent(search.trim())}`);
  };

  return (
    <Layout>
      {/* Hero — compact with search */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 dark:opacity-15"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/30 to-background" />

        <div className="relative z-10 container-main py-16 md:py-24 w-full">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4 animate-fade-up opacity-0" style={{ animationDelay: "100ms" }}>
              <Anchor className="h-5 w-5 text-primary" />
              <span className="font-body text-xs font-bold text-primary uppercase tracking-[0.2em]">Grand Line Database</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-3 animate-fade-up opacity-0" style={{ animationDelay: "200ms" }}>
              The One Piece Encyclopedia
            </h1>
            <p className="font-body text-sm md:text-base text-muted-foreground max-w-md mx-auto mb-8 animate-fade-up opacity-0" style={{ animationDelay: "300ms" }}>
              Search across characters, devil fruits, and story arcs.
            </p>

            {/* Search bar */}
            <form onSubmit={handleSearch} className="relative max-w-lg mx-auto mb-8 animate-fade-up opacity-0" style={{ animationDelay: "400ms" }}>
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search characters by name..."
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-card text-foreground font-body text-sm
                  border border-border
                  focus:border-primary focus:ring-2 focus:ring-primary/20
                  outline-none transition-all duration-200"
              />
            </form>

            {/* Quick nav chips */}
            <div className="flex flex-wrap justify-center gap-3 animate-fade-up opacity-0" style={{ animationDelay: "500ms" }}>
              {quickNav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="inline-flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-lg font-body text-sm
                    text-foreground hover:border-primary hover:text-primary transition-all duration-200 card-hover"
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                  <span className="text-xs text-muted-foreground">{item.count}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div ref={revealRef}>
        {/* Top Bounties — compact list */}
        <section className="py-12 md:py-16">
          <div className="container-main">
            <div className="flex items-center justify-between mb-6">
              <h2 className="scroll-reveal font-display text-2xl text-foreground">Top Bounties</h2>
              <Link to="/characters" className="scroll-reveal text-sm font-body font-semibold text-primary hover:text-primary/80 flex items-center gap-1 transition-colors">
                View All <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="scroll-reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {recentCharacters.map((c) => (
                <Link
                  key={c.name}
                  to={`/characters?q=${encodeURIComponent(c.name)}`}
                  className="flex items-center gap-3 bg-card border border-border rounded-lg p-3 card-hover group"
                >
                  <img
                    src={c.image}
                    alt={c.name}
                    className="h-12 w-12 rounded-lg object-cover object-top flex-shrink-0"
                    loading="lazy"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="font-body text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors">{c.name}</p>
                    <p className="font-body text-xs text-muted-foreground">{c.crew}</p>
                  </div>
                  <span className="font-body text-xs font-bold text-accent whitespace-nowrap">{c.bounty}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Devil Fruits — compact row */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container-main">
            <div className="flex items-center justify-between mb-6">
              <h2 className="scroll-reveal font-display text-2xl text-foreground">Devil Fruits</h2>
              <Link to="/devil-fruits" className="scroll-reveal text-sm font-body font-semibold text-primary hover:text-primary/80 flex items-center gap-1 transition-colors">
                All Fruits <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="scroll-reveal grid grid-cols-2 sm:grid-cols-4 gap-4">
              {topFruits.map((f) => (
                <Link
                  key={f.name}
                  to="/devil-fruits"
                  className="bg-card border border-border rounded-lg p-4 text-center card-hover group"
                >
                  <img
                    src={f.image}
                    alt={f.name}
                    className="h-16 w-16 mx-auto mb-3 object-contain mix-blend-multiply dark:mix-blend-normal group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <p className="font-display text-sm text-foreground mb-0.5 group-hover:text-primary transition-colors">{f.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{f.user}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Browse by Category */}
        <section className="py-12 md:py-16">
          <div className="container-main">
            <h2 className="scroll-reveal font-display text-2xl text-foreground mb-6">Browse by Category</h2>
            <div className="scroll-reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Straw Hats", count: 10, to: "/characters?crew=Straw Hats", color: "border-l-primary" },
                { label: "Heart Pirates", count: 9, to: "/characters?crew=Heart Pirates", color: "border-l-blue-500" },
                { label: "Admirals", count: 8, to: "/characters?crew=Admirals", color: "border-l-yellow-500" },
                { label: "Warlords", count: 12, to: "/characters?crew=Warlords", color: "border-l-red-500" },
              ].map((cat) => (
                <Link
                  key={cat.label}
                  to={cat.to}
                  className={`bg-card border border-border border-l-4 ${cat.color} rounded-lg p-4 card-hover group`}
                >
                  <p className="font-display text-lg text-foreground group-hover:text-primary transition-colors">{cat.label}</p>
                  <p className="font-body text-xs text-muted-foreground">{cat.count} characters</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
