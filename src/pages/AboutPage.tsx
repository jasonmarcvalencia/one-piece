import Layout from "@/components/Layout";
import { Anchor, Heart, BookOpen } from "lucide-react";

const AboutPage = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-main max-w-3xl">
        <h1 className="font-display text-4xl text-foreground mb-6">About Grand Line DB</h1>

        <div className="space-y-8">
          <div className="bg-card rounded-lg card-shadow p-6">
            <div className="flex items-center gap-3 mb-3">
              <Anchor className="h-5 w-5 text-primary" />
              <h2 className="font-display text-xl text-foreground">Fan Project</h2>
            </div>
            <p className="text-muted-foreground">
              Grand Line Database is a non-commercial fan project dedicated to cataloging the rich world of One Piece created by Eiichiro Oda. This website is not affiliated with, endorsed by, or connected to Shueisha, Toei Animation, Fuji Television, or Eiichiro Oda.
            </p>
          </div>

          <div className="bg-card rounded-lg card-shadow p-6">
            <div className="flex items-center gap-3 mb-3">
              <Heart className="h-5 w-5 text-primary" />
              <h2 className="font-display text-xl text-foreground">Our Mission</h2>
            </div>
            <p className="text-muted-foreground">
              We believe One Piece deserves more than a standard wiki. Our goal is to present this incredible story's characters, arcs, and lore in a beautifully designed, fast, and enjoyable digital experience — treating every piece of information as the treasure it is.
            </p>
          </div>

          <div className="bg-card rounded-lg card-shadow p-6">
            <div className="flex items-center gap-3 mb-3">
              <BookOpen className="h-5 w-5 text-accent" />
              <h2 className="font-display text-xl text-foreground">Credits & Inspiration</h2>
            </div>
            <p className="text-muted-foreground mb-3">
              All character names, story arcs, Devil Fruits, and lore belong to Eiichiro Oda and their respective rights holders. Character illustrations on this site are AI-generated fan art inspired by the series.
            </p>
            <p className="text-muted-foreground">
              Design inspired by the spirit of adventure, ancient sea charts, and the thrill of discovering new islands on the Grand Line.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default AboutPage;
