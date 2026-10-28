"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import BorderGlow from "../BorderGlow";
import { ImageWithFallback } from "../common/ImageWithFallback";

export type HomeSkillItem = {
  label: string;
  icon: string;
};

export type HomeSkillsCardProps = {
  title: string;
  skills: HomeSkillItem[];
};

export const HomeSkillsCard = ({ title, skills }: HomeSkillsCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true, // only trigger once
    amount: 0.2, // 20% of element must be visible
  });
  return (
    <div ref={ref}>
      {isInView && (
        <BorderGlow
          className="p-6 rounded-md min-h-60 h-full w-full overflow-clip"
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
          <h3 className="text-2xl font-bold mt-4 text-secondary">{title}</h3>
          <div className="grid grid-cols-2 gap-4 mt-6 overflow-hidden">
            {skills?.map((skill) => (
              <div
                key={skill.label}
                className="flex gap-4 lg:gap-8 items-center"
              >
                <ImageWithFallback
                  src={skill.icon}
                  alt={skill.label}
                  width={40}
                  height={40}
                  className="object-cover"
                />
                <p className="text-gray-200 text-sm md:text-base leading-relaxed lg:leading-10">
                  {skill.label}
                </p>
              </div>
            ))}
          </div>
        </BorderGlow>
      )}
    </div>
  );
};
