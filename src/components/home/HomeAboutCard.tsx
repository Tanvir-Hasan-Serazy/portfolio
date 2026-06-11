import BorderGlow from "../BorderGlow";
import { ImageWithFallback } from "../common/ImageWithFallback";

export const HomeAboutCard = ({
  title,
  description,
  imageSrc,
  alt,
}: {
  title: string;
  description: string;
  imageSrc: string;
  alt: string;
}) => {
  return (
    <BorderGlow
      className="bg-[#1A1A1A] p-6 rounded-md md:min-h-60 h-full max-w-130 w-full mx-auto"
      edgeSensitivity={30}
      glowColor="40 80 80"
      backgroundColor="#1A1A1A"
      borderRadius={6}
      glowRadius={40}
      glowIntensity={1}
      coneSpread={25}
      animated={true}
      colors={["#D85E5E", "#732828"]}
    >
      <h3 className="text-2xl font-bold mt-4 text-secondary">{title}</h3>
      <div className="flex mt-4 gap-4 lg:gap-8 items-center justify-between">
        <p className="text-gray-200 text-sm md:text-base leading-relaxed lg:leading-10 ">
          {description}
        </p>
        <ImageWithFallback
          src={imageSrc}
          alt={alt}
          width={80}
          height={130}
          className="object-cover"
        />
      </div>
    </BorderGlow>
  );
};
