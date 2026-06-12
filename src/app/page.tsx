import { HomeAbout } from "@/components/home/HomeAbout";
import { HomeBanner } from "@/components/home/HomeBanner";
import { HomeSkills } from "@/components/home/HomeSkills";
import { HomeProfessionalJourney } from "@/components/home/HomeProfessionalJourney";
import { HomeContact } from "@/components/home/HomeContact";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <HomeAbout />
      <HomeSkills />
      <HomeProfessionalJourney />
      <HomeContact />
    </>
  );
}
