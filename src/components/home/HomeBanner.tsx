import { cn } from "@/lib/utils";
import ShinyText from "../ShinyText";
import { ImageWithFallback } from "../common/ImageWithFallback";
import SplitText from "../SplitText";

export const HomeBanner = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center ">
      <div
        className={cn(
          "absolute inset-0 ",
          "bg-size-[40px_40px]",
          "bg-[linear-gradient(to_right,#411C1C_1px,transparent_1px),linear-gradient(to_bottom,#411C1C_1px,transparent_1px)]",
        )}
      />
      <div className="absolute z-10 bg-linear-to-t lg:bg-linear-to-bottom from-black to-transparent w-full h-full lg:h-full"></div>
      <div className="max-w-7xl mx-auto px-4 xl:px-0 z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 my-32 md:my-28 lg:my-20">
        <div>
          <p className="py-2 font-medium">HEY, I'M</p>
          <div className="flex flex-col gap-2">
            <ShinyText
              text="Tanvir Hasan"
              speed={3}
              delay={0}
              color="#b5b5b5"
              shineColor="#ffffff"
              spread={120}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
              disabled={false}
              className="text-4xl lg:text-7xl font-semibold"
            />
            <ShinyText
              text="Serazy"
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
          <SplitText
            text="Relentless front-end Developer experienced in designing responsive,scalable, real-time web applications using JavaScript technologies passionate about user-centered design and performance optimization!"
            delay={50}
            className="py-4 max-w-xl text-gray-200 "
            duration={1.25}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="start"
          />
        </div>
        <div>
          <ImageWithFallback
            src="/images/banner/banner.png"
            alt="Banner"
            loading="eager"
            height={1700}
            width={1500}
            className="w-60 h-72 md:w-96 md:h-112 lg:w-120 lg:h-132 xl:w-lg xl:h-152 object-cover"
          />
        </div>
      </div>
    </section>
  );
};
