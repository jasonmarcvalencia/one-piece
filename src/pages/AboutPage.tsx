import Layout from "@/components/Layout";
import { Anchor, Heart, BookOpen } from "lucide-react";

const AboutPage = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-main max-w-3xl">
        <h1 className="font-display text-4xl text-foreground mb-2">About Grand Line DB</h1>
        <p className="text-muted-foreground mb-10">A fan-built encyclopedia for the world of One Piece.</p>

        <div className="space-y-6">
          <div className="bg-card rounded-lg card-shadow p-6">
            <div className="flex items-center gap-3 mb-3">
              <Anchor className="h-5 w-5 text-primary" />
              <h2 className="font-display text-xl text-foreground">Fan Project</h2>
            </div>
            <p className="text-muted-foreground">
              Grand Line Database is a non-commercial fan project dedicated to cataloging the world of One Piece created by Eiichiro Oda. This website is not affiliated with, endorsed by, or connected to Shueisha, Toei Animation, Fuji Television, or Eiichiro Oda.
            </p>
          </div>

          <div className="bg-card rounded-lg card-shadow p-6">
            <div className="flex items-center gap-3 mb-3">
              <Heart className="h-5 w-5 text-primary" />
              <h2 className="font-display text-xl text-foreground">Mission</h2>
            </div>
            <p className="text-muted-foreground">
              We believe One Piece deserves more than a standard wiki. Our goal is to present this incredible story's characters, arcs, and lore in a well-designed, fast, and enjoyable experience — treating every piece of information as the treasure it is.
            </p>
          </div>

          <div className="bg-card rounded-lg card-shadow p-6">
            <div className="flex items-center gap-3 mb-3">
              <BookOpen className="h-5 w-5 text-accent" />
              <h2 className="font-display text-xl text-foreground">Credits</h2>
            </div>
            <p className="text-muted-foreground">
              All character names, story arcs, Devil Fruits, images, and lore belong to Eiichiro Oda and their respective rights holders. Built with React, Tailwind CSS, and TypeScript.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default AboutPage;
