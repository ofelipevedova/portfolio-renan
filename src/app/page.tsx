import type { Metadata } from "next";

import { HomePageContent } from "@/components/HomePageContent";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Início",
  description: site.description,
};

export default function HomePage() {
  return <HomePageContent />;
}
