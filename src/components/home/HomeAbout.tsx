"use client";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
    <section className="my-36">
      <style>{`
        .swiper-pagination-bullet {
          background-color: #d1d5db !important;
        }
        .swiper-pagination-bullet-active {
          background-color: var(--color-primary, #3b82f6) !important;
        }
      `}</style>
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

      <div className="max-w-6xl mx-auto px-4 mt-12 lg:hidden">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={16}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
        >
          {homeAboutData.map((item) => (
            <SwiperSlide key={item.id} className="h-auto pb-12">
              <HomeAboutCard
                title={item.title}
                description={item.description}
                imageSrc={item.imageSrc}
                alt={item.alt}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden lg:grid max-w-6xl mx-auto grid-cols-1 md:grid-cols-2 px-4 gap-4 md:gap-6 xl:gap-10 mt-12">
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
