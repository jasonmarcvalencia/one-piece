import { useState, useMemo } from "react";
import Layout from "@/components/Layout";
import CharacterCard from "@/components/CharacterCard";
import SearchBar from "@/components/SearchBar";
import FilterChips from "@/components/FilterChips";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

import luffy from "@/assets/characters/luffy.jpg";
import zoro from "@/assets/characters/zoro.jpg";
import nami from "@/assets/characters/nami.jpg";
import sanji from "@/assets/characters/sanji.jpg";
import usopp from "@/assets/characters/usopp.jpg";
import law from "@/assets/characters/law.jpg";

const characters = [
  { name: "Monkey D. Luffy", crew: "Straw Hats", bounty: "฿3,000,000,000", description: "Captain of the Straw Hat Pirates. A rubber man who ate the Gomu Gomu no Mi. His dream is to become King of the Pirates.", image: luffy },
  { name: "Roronoa Zoro", crew: "Straw Hats", bounty: "฿1,111,000,000", description: "First mate and swordsman of the Straw Hat Pirates. Aims to become the world's greatest swordsman.", image: zoro },
  { name: "Nami", crew: "Straw Hats", bounty: "฿366,000,000", description: "Navigator of the Straw Hat crew. Expert cartographer who dreams of drawing a map of the entire world.", image: nami },
  { name: "Sanji", crew: "Straw Hats", bounty: "฿1,032,000,000", description: "Cook of the Straw Hat Pirates. A master of Black Leg Style martial arts. Seeks the All Blue.", image: sanji },
  { name: "Usopp", crew: "Straw Hats", bounty: "฿500,000,000", description: "Sniper of the Straw Hat Pirates. A creative inventor and storyteller who aspires to become a brave warrior of the sea.", image: usopp },
  { name: "Trafalgar Law", crew: "Heart Pirates", bounty: "฿3,000,000,000", description: "Captain of the Heart Pirates and the 'Surgeon of Death'. Wielder of the Ope Ope no Mi.", image: law },
];

const crews = ["All", "Straw Hats", "Heart Pirates", "Marines", "Warlords"];

const CharactersPage = () => {
  const [search, setSearch] = useState("");
  const [crew, setCrew] = useState("All");
  const revealRef = useScrollReveal();

  const filtered = useMemo(() => {
    return characters.filter((c) => {
      const matchSearch = c.name.toLowerCase().includes(search.toLowerCase());
      const matchCrew = crew === "All" || c.crew === crew;
      return matchSearch && matchCrew;
    });
  }, [search, crew]);

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-main">
          <h1 className="font-display text-4xl text-foreground mb-2">Characters</h1>
          <p className="text-muted-foreground mb-8">Explore the pirates, marines, and legends of the Grand Line.</p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-1">
              <SearchBar value={search} onChange={setSearch} placeholder="Search characters..." />
            </div>
          </div>

          <div className="mb-8">
            <FilterChips options={crews} selected={crew} onSelect={setCrew} />
          </div>

          <div ref={revealRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((c, i) => (
              <CharacterCard key={c.name} {...c} index={i} />
            ))}
            {filtered.length === 0 && (
              <p className="col-span-full text-center text-muted-foreground py-12">No characters found.</p>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CharactersPage;
