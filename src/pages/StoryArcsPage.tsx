import Layout from "@/components/Layout";
import ArcCard from "@/components/ArcCard";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const arcs = [
  {
    title: "East Blue Saga",
    summary: "The beginning of Luffy's journey. He assembles his initial crew — Zoro, Nami, Usopp, and Sanji — while facing local threats across the East Blue.",
    characters: ["Monkey D. Luffy", "Roronoa Zoro", "Nami", "Usopp", "Sanji"],
    events: ["Luffy sets sail", "Defeat of Arlong", "Zoro's oath at Baratie", "Usopp joins the crew"],
  },
  {
    title: "Alabasta",
    summary: "The Straw Hats travel to the desert kingdom of Alabasta to stop Crocodile's plan to seize the throne and ignite a civil war.",
    characters: ["Vivi", "Crocodile", "Nico Robin", "Ace"],
    events: ["Luffy defeats Crocodile", "Robin joins the crew", "Ace encounters Luffy", "Poneglyph discovery"],
  },
  {
    title: "Enies Lobby",
    summary: "The crew storms the judicial island of Enies Lobby to rescue Nico Robin from CP9 and the World Government, declaring war on the entire world.",
    characters: ["Nico Robin", "Rob Lucci", "Franky", "Spandam"],
    events: ["Declaration of war", "Gear Second debut", "Merry's farewell", "Franky joins the crew"],
  },
  {
    title: "Marineford",
    summary: "The Summit War. Whitebeard's fleet clashes with the full force of the Marines to save Ace from execution. The world is changed forever.",
    characters: ["Whitebeard", "Portgas D. Ace", "Akainu", "Shanks"],
    events: ["Ace's execution", "Whitebeard's last stand", "Shanks ends the war", "The death of an era"],
  },
  {
    title: "Wano Country",
    summary: "An epic saga where the Straw Hats ally with samurai to overthrow the tyrant Kaido and liberate the isolated country of Wano.",
    characters: ["Kaido", "Yamato", "Kozuki Oden", "Big Mom"],
    events: ["Raid on Onigashima", "Luffy's Gear 5 awakening", "Kaido's defeat", "Wano liberated"],
  },
];

const StoryArcsPage = () => {
  const revealRef = useScrollReveal();

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-main">
          <h1 className="font-display text-4xl text-foreground mb-2">Story Arcs</h1>
          <p className="text-muted-foreground mb-10">The grand saga of One Piece, from the East Blue to the New World.</p>

          <div ref={revealRef} className="space-y-6">
            {/* Timeline line */}
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
              <div className="space-y-8 md:pl-12">
                {arcs.map((arc, i) => (
                  <ArcCard key={arc.title} {...arc} index={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StoryArcsPage;
