import { AtSign, MapPin } from "lucide-react";
import {
  FaFacebookMessenger,
  FaGithub,
  FaLinkedin,
  FaSquareInstagram,
  FaSquareWhatsapp,
  FaTelegram,
} from "react-icons/fa6";
import BorderGlow from "../BorderGlow";
import ShinyText from "../ShinyText";
import { FloatingDock } from "../ui/floating-dock";
import { ContactForm } from "./HomeContactForm";
import Link from "next/link";

export const HomeContact = () => {
  const links = [
    {
      title: "GitHub",
      icon: <FaGithub className="h-full w-full text-primary " />,
      href: "https://github.com/Tanvir-Hasan-Serazy",
    },
    {
      title: "LinkedIn",
      icon: <FaLinkedin className="h-full w-full text-primary" />,
      href: "https://www.linkedin.com/in/tanvir-hasan-serazy-592bbb209/",
    },
    {
      title: "Telegram",
      icon: <FaTelegram className="h-full w-full text-primary" />,
      href: "https://t.me/Serazy069",
    },
    {
      title: "Whatsapp",
      icon: <FaSquareWhatsapp className="h-full w-full text-primary" />,
      href: "https://wa.link/zetehv",
    },
    {
      title: "Facebook",
      icon: <FaFacebookMessenger className="h-full w-full text-primary" />,
      href: "https://m.me/T.H.Serazy",
    },
    {
      title: "Instagram",
      icon: <FaSquareInstagram className="h-full w-full text-primary" />,
      href: "https://www.instagram.com/tanvirserazy/",
    },
  ];
  return (
    <section className="my-36 max-w-7xl mx-auto px-4 xl:px-0 ">
      <div className="flex flex-col gap-2 ">
        <ShinyText
          text="LET'S BUILD SOMETHING"
          speed={3}
          delay={0}
          color="#b5b5b5"
          shineColor="#ffffff"
          spread={120}
          direction="left"
          yoyo={false}
          pauseOnHover={false}
          disabled={false}
          className="text-4xl lg:text-6xl xl:text-7xl font-semibold"
        />
        <ShinyText
          text="LEGENDARY"
          speed={3}
          delay={0}
          color="#732828"
          shineColor="#D85E5E"
          spread={120}
          direction="left"
          yoyo={false}
          pauseOnHover={false}
          disabled={false}
          className="text-4xl lg:text-7xl font-semibold"
        />
      </div>
      <p className="py-4 max-w-6xl text-gray-200 md:text-lg mt-6">
        Ready to bridge the gap between complex engineering and striking user
        experiences? Reach out for technical collaborations, full-stack
        inquiries, or just to talk high-performance architecture.
      </p>

      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto mt-6 lg:mt-10 gap-8 md:gap-16 justify-between">
        {/* Email, Address & Network*/}
        <div className="max-w-lg flex flex-col gap-4">
          {/* Email */}
          <div className="flex items-center gap-4">
            <BorderGlow
              className="bg-[#1A1A1A] p-3 rounded-md h-full min-w-max"
              edgeSensitivity={30}
              glowColor="20 20 20"
              backgroundColor="#1A1A1A"
              borderRadius={6}
              glowRadius={40}
              glowIntensity={1}
              coneSpread={25}
              animated={true}
              colors={["#D85E5E", "#732828"]}
            >
              <AtSign className="size-6 lg:size-10 text-secondary" />
            </BorderGlow>
            <div>
              <p className="text-lg text-secondary">Email</p>
              <Link
                href="mailto:thserazy@gmail.com"
                className="hover:underline"
              >
                thserazy@gmail.com
              </Link>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center gap-4">
            <BorderGlow
              className="bg-[#1A1A1A] p-3 rounded-md h-full min-w-max"
              edgeSensitivity={30}
              glowColor="20 20 20"
              backgroundColor="#1A1A1A"
              borderRadius={6}
              glowRadius={40}
              glowIntensity={1}
              coneSpread={25}
              animated={true}
              colors={["#D85E5E", "#732828"]}
            >
              <MapPin className="size-6 lg:size-10 text-secondary" />
            </BorderGlow>

            <div>
              <p className="text-lg text-secondary">Address</p>
              <p>Mirpur, Dhaka-1216, Bangladesh</p>
            </div>
          </div>

          {/* Network */}
          <ShinyText
            text="NETWORK"
            speed={3}
            delay={0}
            color="#732828"
            shineColor="#D85E5E"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
            className="text-xl lg:text-4xl mt-4 font-semibold"
          />

          <div className="flex items-start justify-start w-full">
            <FloatingDock
              items={links}
              mobileClassName="mx-0 flex bg-[#1A1A1A]"
              desktopClassName="mx-0 bg-[#1A1A1A]"
            />
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};
