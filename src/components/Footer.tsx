import { Link } from "react-router-dom";
import { Anchor } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-secondary text-secondary-foreground">
    <div className="container-main py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Link to="/" className="flex items-center gap-2 font-display text-lg">
            <Anchor className="h-4 w-4 text-accent" />
            Grand Line DB
          </Link>
          <p className="mt-3 text-sm text-secondary-foreground/70 max-w-xs">
            A fan-made encyclopedia celebrating Eiichiro Oda's One Piece. Not affiliated with Shueisha, Toei Animation, or Eiichiro Oda.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-display mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-secondary-foreground/70">
            <li><Link to="/characters" className="hover:text-accent transition-colors">Characters</Link></li>
            <li><Link to="/story-arcs" className="hover:text-accent transition-colors">Story Arcs</Link></li>
            <li><Link to="/devil-fruits" className="hover:text-accent transition-colors">Devil Fruits</Link></li>
            <li><Link to="/about" className="hover:text-accent transition-colors">About</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-display mb-3">Disclaimer</h4>
          <p className="text-sm text-secondary-foreground/70">
            One Piece is created by Eiichiro Oda and published by Shueisha. This is a non-commercial fan project built for the community.
          </p>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-secondary-foreground/10 text-center text-xs text-secondary-foreground/50">
        © {new Date().getFullYear()} Grand Line Database. Fan project — all rights belong to their respective owners.
      </div>
    </div>
  </footer>
);

export default Footer;
