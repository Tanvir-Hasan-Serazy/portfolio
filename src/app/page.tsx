import { HomeAbout } from "@/components/home/HomeAbout";
import { HomeBanner } from "@/components/home/HomeBanner";
import { HomeSkills } from "@/components/home/HomeSkills";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <HomeAbout />
      <HomeSkills />
    </>
  );
}
