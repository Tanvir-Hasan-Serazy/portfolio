import { cn } from "@/lib/utils";

export const HomeBanner = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center ">
      <div
        className={cn(
          "absolute inset-0 ",
          "bg-size-[40px_40px]",
          "bg-[linear-gradient(to_right,#411C1C_1px,transparent_1px),linear-gradient(to_bottom,#411C1C_1px,transparent_1px)]",
        )}
      />
      <div className="absolute z-10 bg-linear-to-t lg:bg-linear-to-bottom from-black to-transparent w-full h-full lg:h-full"></div>
    </section>
  );
};
