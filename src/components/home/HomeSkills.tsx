"use client";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import ShinyText from "../ShinyText";
import { HomeSkillsCard, type HomeSkillsCardProps } from "./HomeSkillsCard";

type HomeSkillsSectionItem = HomeSkillsCardProps & {
  id: number;
};

const homeSkillsData: HomeSkillsSectionItem[] = [
  {
    id: 1,
    title: "Programming Languages",
    skills: [
      { label: "JavaScript", icon: "/images/tech-stack/js.png" },
      { label: "TypeScript", icon: "/images/tech-stack/typescript.png" },
      { label: "Python", icon: "/images/tech-stack/python.png" },
    ],
  },
  {
    id: 2,
    title: "Database & ORMs",
    skills: [
      { label: "MySQL", icon: "/images/tech-stack/mysql.png" },
      { label: "MongoDB", icon: "/images/tech-stack/mongodb.png" },
      { label: "PostgreSQL", icon: "/images/tech-stack/postgresql.png" },
      { label: "Prisma", icon: "/images/tech-stack/prisma.png" },
    ],
  },
  {
    id: 3,
    title: "Frameworks & Libraries",
    skills: [
      { label: "Express.js", icon: "/images/tech-stack/express.svg" },
      { label: "React", icon: "/images/tech-stack/react.png" },
      { label: "Node.js", icon: "/images/tech-stack/nodejs.png" },
      { label: "Framer Motion", icon: "/images/tech-stack/motion.png" },
      { label: "Next.js", icon: "/images/tech-stack/nextjs.png" },
      { label: "ShadCN", icon: "/images/tech-stack/shadcnui.png" },
      { label: "TailwindCSS", icon: "/images/tech-stack/tailwindcss.png" },
      { label: "Material UI", icon: "/images/tech-stack/materialui.png" },
      { label: "SCSS", icon: "/images/tech-stack/scss.svg" },
      { label: "Chakra UI", icon: "/images/tech-stack/chakraui.png" },
    ],
  },
  {
    id: 4,
    title: "Tools",
    skills: [
      { label: "Git", icon: "/images/tech-stack/git.png" },
      { label: "Gitlab", icon: "/images/tech-stack/gitlab.png" },
      { label: "Github", icon: "/images/tech-stack/github.png" },
      { label: "Linux", icon: "/images/tech-stack/linux.png" },
      { label: "Vercel", icon: "/images/tech-stack/vercel.png" },
      { label: "Postman", icon: "/images/tech-stack/postman.png" },
      { label: "Figma", icon: "/images/tech-stack/figma.png" },
    ],
  },
];

export const HomeSkills = () => {
  return (
    <>
      <style>{`
        .swiper-pagination-bullet {
          background-color: #d1d5db !important;
        }
        .swiper-pagination-bullet-active {
          background-color: var(--color-primary, #3b82f6) !important;
        }
      `}</style>
      <section id="skills" className="lg:min-h-screen lg:my-24 scroll-mt-24">
        <div className="text-center">
          <ShinyText
            text="Skills"
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

        <div className="max-w-6xl mx-auto px-4 mt-12 lg:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={16}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
          >
            {homeSkillsData?.map((skill) => (
              <SwiperSlide key={skill.id} className="h-auto pb-12">
                <HomeSkillsCard title={skill.title} skills={skill.skills} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Skills Cards */}
        <div className="hidden lg:grid max-w-6xl mx-auto grid-cols-1 md:grid-cols-2 px-4 gap-4 md:gap-6 xl:gap-10 mt-12">
          {homeSkillsData?.map((skill) => (
            <HomeSkillsCard
              key={skill.id}
              title={skill.title}
              skills={skill.skills}
            />
          ))}
        </div>
      </section>
    </>
  );
};
