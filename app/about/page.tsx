import About from "@/components/modules/about";
import Experience from "@/components/modules/experience";
import { experiences } from "@/data/experience";
import Link from "next/link";
import { Home } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden min-h-screen pt-16 pb-24">
      <div className="container mx-auto px-4 sm:px-4 lg:px-8">
        {/* Home Navigation */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/60 border border-border hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 group shadow-sm hover:shadow-md"
            aria-label="Back to Home"
          >
            <Home className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </Link>
        </div>

        <About />
        <Experience experiences={experiences} />
      </div>
    </div>
  );
}
