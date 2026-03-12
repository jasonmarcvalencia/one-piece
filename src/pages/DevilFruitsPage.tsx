import Layout from "@/components/Layout";
import DevilFruitCard from "@/components/DevilFruitCard";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const fruits: Array<{ name: string; type: "Paramecia" | "Zoan" | "Logia"; ability: string; user: string }> = [
  { name: "Gomu Gomu no Mi", type: "Paramecia", ability: "Grants the user a rubber body, allowing them to stretch, bounce, and become immune to blunt attacks and electricity.", user: "Monkey D. Luffy" },
  { name: "Mera Mera no Mi", type: "Logia", ability: "Allows the user to create, control, and transform into fire at will.", user: "Portgas D. Ace / Sabo" },
  { name: "Ope Ope no Mi", type: "Paramecia", ability: "Creates a spherical space called 'ROOM' within which the user can manipulate anything — teleporting objects, swapping personalities, and performing impossible surgery.", user: "Trafalgar Law" },
  { name: "Hie Hie no Mi", type: "Logia", ability: "Allows the user to create, control, and transform into ice. Can freeze entire oceans instantly.", user: "Kuzan (Aokiji)" },
  { name: "Gura Gura no Mi", type: "Paramecia", ability: "Generates devastating shockwaves and earthquakes capable of destroying the world itself.", user: "Edward Newgate (Whitebeard) / Blackbeard" },
  { name: "Hito Hito no Mi, Model: Nika", type: "Zoan", ability: "A mythical Zoan fruit that transforms the user into the Sun God Nika, granting absurd rubber powers limited only by imagination.", user: "Monkey D. Luffy" },
  { name: "Yami Yami no Mi", type: "Logia", ability: "Controls darkness itself, absorbing anything including other Devil Fruit powers. The unique ability to wield multiple fruits.", user: "Marshall D. Teach (Blackbeard)" },
  { name: "Suna Suna no Mi", type: "Logia", ability: "Allows the user to create, control, and transform into sand. Can dehydrate anything on contact.", user: "Crocodile" },
  { name: "Hana Hana no Mi", type: "Paramecia", ability: "Allows the user to sprout duplicates of their body parts on any surface within range.", user: "Nico Robin" },
];

const DevilFruitsPage = () => {
  const revealRef = useScrollReveal();

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-main">
          <h1 className="font-display text-4xl text-foreground mb-2">Devil Fruits</h1>
          <p className="text-muted-foreground mb-10">Mysterious fruits that grant supernatural abilities at the cost of the ability to swim.</p>

          <div ref={revealRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fruits.map((f, i) => (
              <DevilFruitCard key={f.name} {...f} index={i} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DevilFruitsPage;
