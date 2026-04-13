import About from "@/components/modules/about";
import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden min-h-screen pt-16 pb-24">
      <div>
        {/* Home Navigation */}
        <div className="mb-6 flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/60 border border-border hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 group shadow-sm hover:shadow-md"
            aria-label="Back to Home"
          >
            <Home className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            Projects
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <About />
      </div>
    </div>
  );
}
