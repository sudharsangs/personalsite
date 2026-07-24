import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Engineering Case Studies | Sudharsan GS",
  description: "Projects built at Fubo, Molotov, Winuall, FactoStack, and for freelance clients.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
