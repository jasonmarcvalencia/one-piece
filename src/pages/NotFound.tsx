import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Compass } from "lucide-react";

const NotFound = () => (
  <Layout>
    <section className="section-padding flex items-center justify-center min-h-[60svh]">
      <div className="text-center">
        <p className="font-display text-8xl text-primary mb-4">404</p>
        <h1 className="font-display text-3xl text-foreground mb-2">Lost at Sea</h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          This page doesn't exist. Even the best navigators lose their way on the Grand Line.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-body font-bold text-sm hover:bg-primary/90 active:scale-[0.97] transition-all duration-200"
        >
          <Compass className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </section>
  </Layout>
);

export default NotFound;
