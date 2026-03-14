import { useState } from "react";
import Layout from "@/components/Layout";
import { X } from "lucide-react";

const typeColors: Record<string, string> = {
  Paramecia: "bg-primary/10 text-primary",
  Zoan: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  Logia: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
};

const fruits = [
  { name: "Gomu Gomu no Mi", type: "Paramecia", ability: "Grants the user a rubber body, allowing them to stretch, bounce, and become immune to blunt attacks and electricity.", user: "Monkey D. Luffy", image: "/devil%20fruits/Gomu_Gomu_no_Mi_Infobox.png" },
  { name: "Mera Mera no Mi", type: "Logia", ability: "Allows the user to create, control, and transform into fire at will.", user: "Portgas D. Ace / Sabo", image: "/devil%20fruits/Mera_Mera_no_Mi_Infobox.png" },
  { name: "Ope Ope no Mi", type: "Paramecia", ability: "Creates a spherical space called 'ROOM' within which the user can manipulate anything — teleporting objects, swapping personalities, and performing impossible surgery.", user: "Trafalgar Law", image: "/devil%20fruits/Ope_Ope_no_Mi_Infobox.png" },
  { name: "Hie Hie no Mi", type: "Logia", ability: "Allows the user to create, control, and transform into ice. Can freeze entire oceans instantly.", user: "Kuzan (Aokiji)", image: "/devil%20fruits/Hie_Hie_no_Mi.png" },
  { name: "Gura Gura no Mi", type: "Paramecia", ability: "Generates devastating shockwaves and earthquakes capable of destroying the world itself.", user: "Edward Newgate (Whitebeard) / Blackbeard", image: "/devil%20fruits/Gura_Gura_no_Mi_Infobox.png" },
  { name: "Hito Hito no Mi, Model: Nika", type: "Zoan", ability: "A mythical Zoan fruit that transforms the user into the Sun God Nika, granting absurd rubber powers limited only by imagination.", user: "Monkey D. Luffy", image: "/devil%20fruits/Gomu_Gomu_no_Mi_Infobox.png" },
  { name: "Yami Yami no Mi", type: "Logia", ability: "Controls darkness itself, absorbing anything including other Devil Fruit powers. The unique ability to wield multiple fruits.", user: "Marshall D. Teach (Blackbeard)", image: "/devil%20fruits/Yami_Yami_no_Mi_Infobox.png" },
  { name: "Suna Suna no Mi", type: "Logia", ability: "Allows the user to create, control, and transform into sand. Can dehydrate anything on contact.", user: "Crocodile", image: "/devil%20fruits/Suna_Suna_no_Mi_Infobox.png" },
  { name: "Hana Hana no Mi", type: "Paramecia", ability: "Allows the user to sprout duplicates of their body parts on any surface within range.", user: "Nico Robin", image: "/devil%20fruits/Hana_Hana_no_Mi_Infobox.png" },
] as const;

type FruitType = "All" | "Paramecia" | "Zoan" | "Logia";

const DevilFruitsPage = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [filter, setFilter] = useState<FruitType>("All");

  const filtered = filter === "All" ? fruits : fruits.filter((f) => f.type === filter);
  const selectedFruit = selected !== null ? filtered[selected] : null;

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-main max-w-4xl">
          <h1 className="font-display text-3xl text-foreground mb-1">Devil Fruits</h1>
          <p className="text-sm text-muted-foreground mb-6">
            {fruits.length} mysterious fruits that grant supernatural powers.
          </p>

          {/* Type filter */}
          <div className="flex gap-2 mb-6">
            {(["All", "Paramecia", "Zoan", "Logia"] as FruitType[]).map((t) => (
              <button
                key={t}
                onClick={() => { setFilter(t); setSelected(null); }}
                className={`px-3 py-1.5 rounded-lg text-xs font-body font-bold transition-colors ${
                  filter === t
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Detail panel */}
          {selectedFruit && (
            <div className="mb-6 bg-card border border-border rounded-lg p-5 animate-fade-up">
              <div className="flex items-start gap-5">
                <img
                  src={selectedFruit.image}
                  alt={selectedFruit.name}
                  className="h-28 w-28 object-contain mix-blend-multiply dark:mix-blend-normal flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h2 className="font-display text-xl text-foreground">{selectedFruit.name}</h2>
                      <span className={`inline-block text-xs font-body font-bold px-2 py-0.5 rounded-full mt-1 ${typeColors[selectedFruit.type]}`}>
                        {selectedFruit.type}
                      </span>
                    </div>
                    <button
                      onClick={() => setSelected(null)}
                      className="text-muted-foreground hover:text-foreground transition-colors p-1"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2">{selectedFruit.ability}</p>
                  <p className="text-xs font-body font-semibold text-accent">User: {selectedFruit.user}</p>
                </div>
              </div>
            </div>
          )}

          {/* Compact grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3">
            {filtered.map((f, i) => {
              const isActive = selected === i;
              return (
                <button
                  key={f.name}
                  onClick={() => setSelected(isActive ? null : i)}
                  className={`bg-card border rounded-lg p-3 text-center group transition-all duration-200 ${
                    isActive
                      ? "border-primary ring-2 ring-primary/20"
                      : "border-border card-hover"
                  }`}
                >
                  <img
                    src={f.image}
                    alt={f.name}
                    className="h-14 w-14 mx-auto mb-2 object-contain mix-blend-multiply dark:mix-blend-normal group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <p className="font-display text-xs text-foreground leading-tight group-hover:text-primary transition-colors">
                    {f.name}
                  </p>
                  <p className="font-body text-[10px] text-muted-foreground mt-0.5">{f.user.split(" / ")[0]}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DevilFruitsPage;
