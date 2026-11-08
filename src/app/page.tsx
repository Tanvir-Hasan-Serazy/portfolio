import { HomeAbout } from "@/components/home/HomeAbout";
import { HomeBanner } from "@/components/home/HomeBanner";
import { HomeSkills } from "@/components/home/HomeSkills";
import { HomeProfessionalJourney } from "@/components/home/HomeProfessionalJourney";
import { HomeContact } from "@/components/home/HomeContact";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tanvir Hasan Serazy",
    url: "https://www.serazy.dev",
    jobTitle: "Software Engineer",
    image: "https://www.serazy.dev/favicon.png",
    mainEntityOfPage: "https://www.serazy.dev",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <HomeBanner />
      <HomeAbout />
      <HomeSkills />
      <HomeProfessionalJourney />
      <HomeContact />
    </main>
  );
}
