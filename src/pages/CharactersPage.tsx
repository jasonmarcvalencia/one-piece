import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { LayoutGrid, List, ArrowUpDown } from "lucide-react";
import Layout from "@/components/Layout";
import CharacterCard from "@/components/CharacterCard";
import SearchBar from "@/components/SearchBar";
import FilterChips from "@/components/FilterChips";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const characters = [
  { name: "Monkey D. Luffy", crew: "Straw Hats", bounty: "฿3,000,000,000", description: "Captain of the Straw Hat Pirates. A rubber man who ate the Gomu Gomu no Mi. His dream is to become King of the Pirates.", image: "/straw%20hats/luffy.webp" },
  { name: "Roronoa Zoro", crew: "Straw Hats", bounty: "฿1,111,000,000", description: "First mate and swordsman of the Straw Hat Pirates. Aims to become the world's greatest swordsman.", image: "/straw%20hats/zoro.webp" },
  { name: "Nami", crew: "Straw Hats", bounty: "฿366,000,000", description: "Navigator of the Straw Hat crew. Expert cartographer who dreams of drawing a map of the entire world.", image: "/straw%20hats/nami.webp" },
  { name: "Usopp", crew: "Straw Hats", bounty: "฿500,000,000", description: "Sniper of the Straw Hat Pirates. A creative inventor and storyteller who aspires to become a brave warrior of the sea.", image: "/straw%20hats/usopp.webp" },
  { name: "Sanji", crew: "Straw Hats", bounty: "฿1,032,000,000", description: "Cook of the Straw Hat Pirates. A master of Black Leg Style martial arts. Seeks the All Blue.", image: "/straw%20hats/sanji.webp" },
  { name: "Tony Tony Chopper", crew: "Straw Hats", bounty: "฿1,000", description: "Doctor of the Straw Hat Pirates. A reindeer who ate the Hito Hito no Mi. Dreams of becoming a doctor who can cure any disease.", image: "/straw%20hats/chopper.webp" },
  { name: "Nico Robin", crew: "Straw Hats", bounty: "฿930,000,000", description: "Archaeologist of the Straw Hat Pirates. Seeks to uncover the True History by finding the Rio Poneglyph.", image: "/straw%20hats/robin.webp" },
  { name: "Franky", crew: "Straw Hats", bounty: "฿394,000,000", description: "Shipwright of the Straw Hat Pirates. A cyborg who built the Thousand Sunny. Dreams of sailing on his dream ship.", image: "/straw%20hats/franky.webp" },
  { name: "Brook", crew: "Straw Hats", bounty: "฿383,000,000", description: "Musician of the Straw Hat Pirates. A living skeleton revived by the Yomi Yomi no Mi. Promises to reunite with Laboon.", image: "/straw%20hats/brook.webp" },
  { name: "Jinbe", crew: "Straw Hats", bounty: "฿1,100,000,000", description: "Helmsman of the Straw Hat Pirates. A whale shark fish-man and former Warlord. Master of Fish-Man Karate.", image: "/straw%20hats/jinbe.webp" },
  { name: "Trafalgar D. Water Law", crew: "Heart Pirates", bounty: "฿3,000,000,000", description: "Captain and doctor of the Heart Pirates. Wields the Ope Ope no Mi to manipulate anything within his spatial fields.", image: "/heart%20pirates/Trafalgar_D._Water_Law_Anime_Post_Timeskip_Infobox.webp" },
  { name: "Bepo", crew: "Heart Pirates", bounty: "฿500", description: "Navigator of the Heart Pirates. A polar bear mink from Zou capable of the Sulong transformation.", image: "/heart%20pirates/Bepo_Anime_Infobox.webp" },
  { name: "Penguin", crew: "Heart Pirates", bounty: "Unknown", description: "Founding member of the Heart Pirates. A North Blue martial artist skilled with spears and katanas.", image: "/heart%20pirates/Penguin_Anime_Infobox.webp" },
  { name: "Shachi", crew: "Heart Pirates", bounty: "Unknown", description: "Founding member of the Heart Pirates. Can expel water as a high-pressure stream in combat.", image: "/heart%20pirates/Shachi_Anime_Infobox.webp" },
  { name: "Jean Bart", crew: "Heart Pirates", bounty: "Unknown", description: "Former pirate captain freed from slavery by Law. Possesses immense physical strength.", image: "/heart%20pirates/Jean_Bart_Anime_Post_Timeskip_Infobox.webp" },
  { name: "Ikkaku", crew: "Heart Pirates", bounty: "Unknown", description: "Submarine operator aboard the Polar Tang. Fought in the Wano Country arc against the Beasts Pirates.", image: "/heart%20pirates/Ikkaku_Anime_Infobox.webp" },
  { name: "Uni", crew: "Heart Pirates", bounty: "Unknown", description: "Crew member who wields polearms and twin daggers. Fought at Zou and during the Wano arc.", image: "/heart%20pirates/Uni_Anime_Infobox.webp" },
  { name: "Clione", crew: "Heart Pirates", bounty: "Unknown", description: "Sword-wielding crew member. Fought alongside the Mink Tribe during the invasion of Zou.", image: "/heart%20pirates/Clione_Anime_Infobox.webp" },
  { name: "Hakugan", crew: "Heart Pirates", bounty: "Unknown", description: "Helmsman of the Heart Pirates. Pilots the Polar Tang submarine and is an exceptional swimmer.", image: "/heart%20pirates/Hakugan_Anime_Infobox.webp" },
  { name: "Sakazuki", crew: "Admirals", role: "Fleet Admiral", bounty: "฿5,000,000,000", description: "Fleet Admiral of the Marines, known as Akainu. Wields the Magu Magu no Mi to control magma. Embodies Absolute Justice.", image: "/admirals/Sakazuki_Anime_Post_Timeskip_Infobox.webp" },
  { name: "Borsalino", crew: "Admirals", role: "Current Admiral", bounty: "฿3,000,000,000", description: "Marine Admiral known as Kizaru. Wields the Pika Pika no Mi, granting light-speed movement and devastating laser attacks.", image: "/admirals/Borsalino_Anime_Infobox.webp" },
  { name: "Issho", crew: "Admirals", role: "Current Admiral", bounty: "฿3,000,000,000", description: "Marine Admiral known as Fujitora. A blind swordsman who controls gravity with the Zushi Zushi no Mi.", image: "/admirals/Issho_Anime_Infobox.webp" },
  { name: "Aramaki", crew: "Admirals", role: "Current Admiral", bounty: "฿3,000,000,000", description: "Marine Admiral known as Ryokugyu. Wields the Mori Mori no Mi to create and control plant life.", image: "/admirals/Aramaki_Anime_Infobox.webp" },
  { name: "Kuzan", crew: "Admirals", role: "Former Admiral", bounty: "Unknown", description: "Former Marine Admiral known as Aokiji. Wields the Hie Hie no Mi to control ice. Left the Marines after losing to Sakazuki.", image: "/admirals/Kuzan_Anime_Post_Timeskip_Infobox.webp" },
  { name: "Sengoku", crew: "Admirals", role: "Former Admiral", bounty: "Unknown", description: "Former Fleet Admiral known as Sengoku the Buddha. Wields the Hito Hito no Mi, Model: Daibutsu. Now serves as Inspector General.", image: "/admirals/Sengoku_Anime_Post_Timeskip_Infobox.webp" },
  { name: "Kong", crew: "Admirals", role: "Former Admiral", bounty: "Unknown", description: "Commander-in-Chief of the World Government. Former Fleet Admiral who oversees all military forces.", image: "/admirals/Kong_Anime_Infobox.webp" },
  { name: "Zephyr", crew: "Admirals", role: "Former Admiral", bounty: "Unknown", description: "Former Marine Admiral known as Black Arm Z. A legendary instructor who trained generations of Marines without any Devil Fruit.", image: "/admirals/Z_Anime_Infobox.webp" },
  { name: "Dracule Mihawk", crew: "Warlords", role: "Member Before Dissolution", bounty: "฿3,590,000,000", description: "The World's Strongest Swordsman known as Hawk Eyes. Now serves as an officer of the Cross Guild.", image: "/warlords/Dracule_Mihawk_Anime_Infobox.webp" },
  { name: "Bartholomew Kuma", crew: "Warlords", role: "Member Before Dissolution", bounty: "฿296,000,000", description: "Former king of Sorbet Kingdom and Revolutionary Army commander. Wields the Nikyu Nikyu no Mi to repel anything.", image: "/warlords/Bartholomew_Kuma_Anime_Infobox.webp" },
  { name: "Boa Hancock", crew: "Warlords", role: "Member Before Dissolution", bounty: "฿1,659,000,000", description: "Pirate Empress of Amazon Lily and captain of the Kuja Pirates. Wields the Mero Mero no Mi to petrify anyone.", image: "/warlords/Boa_Hancock_Anime_Infobox.webp" },
  { name: "Buggy", crew: "Warlords", role: "Member Before Dissolution", bounty: "฿3,189,000,000", description: "Former Roger Pirates apprentice who failed upward into becoming one of the Four Emperors. Figurehead of the Cross Guild.", image: "/warlords/Buggy_Anime_Post_Timeskip_Infobox.webp" },
  { name: "Edward Weevil", crew: "Warlords", role: "Member Before Dissolution", bounty: "฿480,000,000", description: "Self-proclaimed son of Whitebeard. Possesses immense physical strength said to rival a young Whitebeard.", image: "/warlords/Edward_Weevil_Anime_Infobox.webp" },
  { name: "Hanafuda", crew: "Warlords", role: "Revoked", bounty: "Unknown", description: "Former Warlord known as the King of Lizards. A towering figure whose title was revoked by the World Government.", image: "/warlords/Hanafuda_Manga_Infobox.webp" },
  { name: "Crocodile", crew: "Warlords", role: "Revoked", bounty: "฿1,965,000,000", description: "Desert King who wields the Suna Suna no Mi. Former Baroque Works president, now a Cross Guild officer.", image: "/warlords/Crocodile_Anime_Infobox.webp" },
  { name: "Gecko Moria", crew: "Warlords", role: "Revoked", bounty: "฿320,000,000", description: "Captain of the Thriller Bark Pirates. Wields the Kage Kage no Mi to manipulate shadows.", image: "/warlords/Gecko_Moria_Anime_Infobox.webp" },
  { name: "Trafalgar Law", crew: "Warlords", role: "Revoked", bounty: "฿3,000,000,000", description: "Captain of the Heart Pirates who had his Warlord title revoked after allying with the Straw Hats.", image: "/warlords/Trafalgar_D._Water_Law_Anime_Post_Timeskip_Infobox.webp" },
  { name: "Donquixote Doflamingo", crew: "Warlords", role: "Revoked", bounty: "฿340,000,000", description: "Former king of Dressrosa known as the Heavenly Yaksha. Wields the Ito Ito no Mi. Now imprisoned in Impel Down.", image: "/warlords/Donquixote_Doflamingo_Anime_Infobox.webp" },
  { name: "Jinbe", crew: "Warlords", role: "Resigned", bounty: "฿1,100,000,000", description: "Former Warlord and whale shark fish-man who resigned to ally with Whitebeard during the Marineford War.", image: "/warlords/Jinbe_Anime_Infobox.webp" },
  { name: "Marshall D. Teach", crew: "Warlords", role: "Resigned", bounty: "฿3,996,000,000", description: "Blackbeard, one of the Four Emperors. The only known person to wield two Devil Fruits: Yami Yami and Gura Gura.", image: "/warlords/Marshall_D._Teach_Anime_Post_Timeskip_Infobox.webp" },
];

const crews = ["All", "Straw Hats", "Heart Pirates", "Admirals", "Warlords"];
type SortKey = "name" | "bounty";
type ViewMode = "grid" | "list";

function parseBounty(b: string): number {
  if (b === "Unknown") return -1;
  return parseInt(b.replace(/[฿,]/g, ""), 10) || 0;
}

const CharactersPage = () => {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get("q") || "";
  const initialCrew = searchParams.get("crew") || "All";
  const [search, setSearch] = useState(initialSearch);
  const [crew, setCrew] = useState(initialCrew);
  const [sort, setSort] = useState<SortKey>("name");
  const [view, setView] = useState<ViewMode>("grid");
  const revealRef = useScrollReveal([search, crew, sort, view]);

  const filtered = useMemo(() => {
    const list = characters.filter((c) => {
      const matchSearch = c.name.toLowerCase().includes(search.toLowerCase());
      const matchCrew = crew === "All" || c.crew === crew;
      return matchSearch && matchCrew;
    });

    if (sort === "bounty") {
      list.sort((a, b) => parseBounty(b.bounty) - parseBounty(a.bounty));
    } else {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  }, [search, crew, sort]);

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-main">
          {/* Header with controls */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
            <div>
              <h1 className="font-display text-3xl text-foreground">Characters</h1>
              <p className="text-sm text-muted-foreground">{filtered.length} results</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSort(sort === "name" ? "bounty" : "name")}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-border bg-card text-xs font-body font-semibold text-foreground hover:border-primary transition-colors"
              >
                <ArrowUpDown className="h-3.5 w-3.5" />
                {sort === "name" ? "Name" : "Bounty"}
              </button>
              <div className="flex border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setView("grid")}
                  className={`p-2 transition-colors ${view === "grid" ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:text-foreground"}`}
                >
                  <LayoutGrid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setView("list")}
                  className={`p-2 transition-colors ${view === "list" ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:text-foreground"}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <SearchBar value={search} onChange={setSearch} placeholder="Search characters..." />
          </div>

          <div className="mb-8">
            <FilterChips options={crews} selected={crew} onSelect={setCrew} />
          </div>

          {/* Grid view */}
          {view === "grid" && (
            <div ref={revealRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((c, i) => (
                <CharacterCard key={`${c.name}-${c.crew}`} {...c} index={i} />
              ))}
            </div>
          )}

          {/* List view */}
          {view === "list" && (
            <div ref={revealRef} className="space-y-2">
              {filtered.map((c, i) => (
                <div
                  key={`${c.name}-${c.crew}`}
                  className="scroll-reveal flex items-center gap-4 bg-card border border-border rounded-lg p-3 card-hover"
                  style={{ transitionDelay: `${i * 30}ms` }}
                >
                  <img src={c.image} alt={c.name} className="h-14 w-14 rounded-lg object-cover object-top flex-shrink-0" loading="lazy" />
                  <div className="min-w-0 flex-1">
                    <p className="font-body text-sm font-semibold text-foreground truncate">{c.name}</p>
                    <p className="font-body text-xs text-muted-foreground">{(c as any).role || c.crew}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-body text-xs font-bold text-accent bounty-number">{c.bounty}</p>
                    <p className="font-body text-[10px] text-muted-foreground uppercase tracking-wider">{c.crew}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-16">No characters found.</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default CharactersPage;
