import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Layout from "@/components/Layout";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const arcs = [
  {
    title: "East Blue Arc",
    summary: "The beginning of Luffy's journey sees him leaving his hometown to become the Pirate King. He travels across East Blue, defeating dangerous foes and assembling his first crew members, each with their own dreams and skills. This arc establishes the camaraderie and resolve that will define the Straw Hat Pirates.",
    characters: ["Monkey D. Luffy", "Roronoa Zoro", "Nami", "Usopp", "Sanji"],
    events: ["Luffy sets sail", "Defeat of Arlong", "Zoro's oath at Baratie", "Usopp joins the crew"],
  },
  {
    title: "Alabasta Arc",
    summary: "The crew enters the Grand Line and becomes involved in a civil war in Alabasta. They confront the Baroque Works organization and its leader Crocodile to save Princess Vivi's kingdom. This arc highlights the stakes of political intrigue and the bonds of friendship under extreme danger.",
    characters: ["Monkey D. Luffy", "Roronoa Zoro", "Nami", "Usopp", "Sanji", "Vivi"],
    events: ["Luffy defeats Crocodile", "Baroque Works is dismantled", "Vivi chooses to stay with her people", "Straw Hats gain greater fame"],
  },
  {
    title: "Skypiea Arc",
    summary: "The crew discovers a mysterious sky island and uncovers its history and the legendary city of gold. Luffy confronts the self-proclaimed god Enel, challenging his dominion and saving the island's people. Themes of faith, destiny, and exploration are central in this arc.",
    characters: ["Monkey D. Luffy", "Roronoa Zoro", "Nami", "Usopp", "Sanji", "Enel"],
    events: ["Discovery of Skypiea", "Battle against Enel", "Exploration of Upper Yard", "Ancient city history revealed"],
  },
  {
    title: "Water 7 Arc",
    summary: "The Straw Hats arrive at the city of Water 7, facing betrayal, shipwright conflicts, and CP9 agents. Tensions rise as they fight to save Nico Robin and defend their crew's honor. This arc sets the stage for high-stakes battles and introduces Franky.",
    characters: ["Monkey D. Luffy", "Roronoa Zoro", "Nami", "Usopp", "Sanji", "Nico Robin", "Franky"],
    events: ["Robin kidnapped by CP9", "Enies Lobby mission", "Franky joins the crew", "Buster Call avoided"],
  },
  {
    title: "Thriller Bark Arc",
    summary: "The crew lands on the haunted Thriller Bark and faces the warlord Gecko Moria. They must retrieve stolen shadows and combat zombies while testing their teamwork. Brook, a living skeleton, joins the crew after this adventure.",
    characters: ["Monkey D. Luffy", "Roronoa Zoro", "Nami", "Usopp", "Sanji", "Brook", "Gecko Moria"],
    events: ["Battle with Moria", "Shadows recovered", "Brook joins the crew", "Thriller Bark destroyed"],
  },
  {
    title: "Summit War Arc",
    summary: "This arc centers on Ace's capture and the ensuing war at Marineford. Luffy and many allies confront the Navy and the Warlords of the Sea to save him. The story reshapes the world, with major losses and Luffy's two-year training period following the conflict.",
    characters: ["Monkey D. Luffy", "Roronoa Zoro", "Nami", "Sanji", "Portgas D. Ace", "Whitebeard"],
    events: ["Ace executed (saved too late)", "War at Marineford", "Whitebeard dies", "Straw Hats separated for training"],
  },
  {
    title: "Fish-Man Island Arc",
    summary: "The crew reunites and travels to Fish-Man Island, uncovering the legacy of Fisher Tiger and confronting Hody Jones. The arc addresses racism, oppression, and the importance of unity between humans and fish-men.",
    characters: ["Monkey D. Luffy", "Roronoa Zoro", "Nami", "Usopp", "Sanji", "Fisher Tiger", "Hody Jones"],
    events: ["Reunion of Straw Hats", "Battle against Hody Jones", "Island saved", "Luffy recognized as hero"],
  },
  {
    title: "Dressrosa Arc",
    summary: "Luffy and allies confront Donquixote Doflamingo in Dressrosa to end his tyranny. The arc is filled with gladiatorial battles, political intrigue, and the formation of the Straw Hat Grand Fleet.",
    characters: ["Monkey D. Luffy", "Roronoa Zoro", "Nami", "Sanji", "Law", "Doflamingo"],
    events: ["Luffy defeats Doflamingo", "Straw Hat Grand Fleet formed", "Colosseum tournament", "Tontatta Kingdom liberated"],
  },
  {
    title: "Four Emperors Arc",
    summary: "The crew faces two of the Four Emperors: Big Mom and Kaido. Major battles in Whole Cake Island and Wano involve alliances, betrayals, and power struggles that shape the New World. Luffy grows significantly in strength and leadership.",
    characters: ["Monkey D. Luffy", "Roronoa Zoro", "Nami", "Sanji", "Kaido", "Big Mom"],
    events: ["Sanji rescued from Big Mom", "Luffy defeats Kaido's forces", "Road Poneglyphs discovered", "Alliance with Samurai of Wano"],
  },
  {
    title: "Egghead Arc",
    summary: "The crew visits Egghead Island, home of Dr. Vegapunk, encountering advanced technology and new adversaries. The arc pushes the crew into the final phase of their journey, blending science, strategy, and exploration.",
    characters: ["Monkey D. Luffy", "Roronoa Zoro", "Nami", "Sanji", "Dr. Vegapunk"],
    events: ["Introduction to Vegapunk's tech", "Straw Hats challenge new threats", "Preparation for final conflicts"],
  },
];

const StoryArcsPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const revealRef = useScrollReveal();

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-main max-w-3xl">
          <h1 className="font-display text-3xl text-foreground mb-1">Story Arcs</h1>
          <p className="text-sm text-muted-foreground mb-8">{arcs.length} arcs from East Blue to the New World.</p>

          <div ref={revealRef} className="space-y-2">
            {arcs.map((arc, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={arc.title}
                  className="scroll-reveal bg-card border border-border rounded-lg overflow-hidden"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  {/* Accordion header */}
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-body text-xs font-bold text-muted-foreground w-6">{String(i + 1).padStart(2, "0")}</span>
                      <span className="font-display text-lg text-foreground">{arc.title}</span>
                    </div>
                    <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                  </button>

                  {/* Accordion content */}
                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 animate-fade-up border-t border-border">
                      <p className="text-sm text-muted-foreground mb-4 mt-4 leading-relaxed">{arc.summary}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-xs font-body font-bold uppercase tracking-wider text-primary mb-2">Key Characters</h4>
                          <ul className="space-y-1">
                            {arc.characters.map((c) => (
                              <li key={c} className="text-sm text-foreground">{c}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-xs font-body font-bold uppercase tracking-wider text-accent mb-2">Important Events</h4>
                          <ul className="space-y-1">
                            {arc.events.map((e) => (
                              <li key={e} className="text-sm text-foreground">{e}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StoryArcsPage;
