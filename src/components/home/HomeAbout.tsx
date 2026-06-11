import ShinyText from "../ShinyText";
import { HomeAboutCard } from "./HomeAboutCard";

const homeAboutData = [
  {
    id: 1,
    title: "My Identity",
    description: "Front-end Engineer. Problem Solver. Experience Builder.",
    imageSrc: "/images/about/identity.png",
    alt: "identity",
  },
  {
    id: 2,
    title: "What I Build?",
    description: "Real-world products powered by React, Next.js & TypeScript.",
    imageSrc: "/images/about/build.png",
    alt: "Builder",
  },
  {
    id: 3,
    title: "What I Care About?",
    description: "Performance. Accessibility. User Experience.",
    imageSrc: "/images/about/performance.png",
    alt: "performance",
  },
  {
    id: 4,
    title: "Current Focus",
    description: "Crafting scalable web apps and digital experiences.",
    imageSrc: "/images/about/focus.png",
    alt: "Focus",
  },
];

export const HomeAbout = () => {
  return (
    <section className="min-h-screen my-20 lg:my-24">
      <div className="text-center">
        <ShinyText
          text="About Me"
          speed={3}
          delay={0}
          color="#732828"
          shineColor="#D85E5E"
          spread={120}
          direction="left"
          yoyo={false}
          pauseOnHover={false}
          disabled={false}
          className="text-4xl lg:text-5xl font-semibold "
        />
      </div>
      <span className="h-1 w-32 md:w-48 rounded-md bg-primary mx-auto block mt-2"></span>

      {/* About Me Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 px-4 gap-4 md:gap-6 xl:gap-10 mt-12">
        {homeAboutData.map((item) => (
          <HomeAboutCard
            key={item.id}
            title={item.title}
            description={item.description}
            imageSrc={item.imageSrc}
            alt={item.alt}
          />
        ))}
      </div>
    </section>
  );
};
