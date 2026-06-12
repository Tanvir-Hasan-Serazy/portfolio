import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ShinyText from "../ShinyText";
import { Timeline } from "../ui/timeline";

const data = [
  {
    id: 1,
    title: "2026",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-white md:text-sm text-justify">
          Developed and maintained the Halal Fly tour booking platform and NexM
          internal management dashboard using Next.js and React. Optimized
          performance, SEO, and accessibility through SSR, SSG, caching
          strategies, and reusable component architecture, while integrating
          backend APIs to deliver dynamic content and ensure a seamless user
          experience across devices.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {/* Image 1 */}
          <Dialog key="nexm">
            <DialogTrigger className="cursor-pointer">
              <img
                src="/images/professional-journey/nexm.png"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </DialogTrigger>
            <DialogContent className="bg-transparent border-0 shadow-none p-0 md:min-w-lg lg:min-w-4xl xl:min-w-6xl">
              <DialogHeader className="sr-only">
                <DialogTitle className="sr-only"></DialogTitle>
                <DialogDescription className="sr-only"></DialogDescription>
              </DialogHeader>
              <img
                src="/images/professional-journey/nexm.png"
                alt="startup template"
                width={1500}
                height={1000}
                className="h-40 md:h-80 lg:h-100 xl:h-140 md:min-w-md w-full lg:min-w-4xl rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]  "
              />
            </DialogContent>
          </Dialog>

          {/* Image 2 */}
          <Dialog key="halal-fly2">
            <DialogTrigger className="cursor-pointer">
              <img
                src="/images/professional-journey/halal-fly2.png"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 lg:h-60 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]  "
              />
            </DialogTrigger>
            <DialogContent className="bg-transparent border-0 shadow-none p-0 md:min-w-lg lg:min-w-4xl xl:min-w-6xl">
              <DialogHeader className="sr-only">
                <DialogTitle className="sr-only"></DialogTitle>
                <DialogDescription className="sr-only"></DialogDescription>
              </DialogHeader>
              <img
                src="/images/professional-journey/halal-fly2.png"
                alt="startup template"
                width={1500}
                height={1000}
                className="h-40 md:h-80 lg:h-100 xl:h-140 w-full lg:min-w-4xl rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]  "
              />
            </DialogContent>
          </Dialog>

          {/* Image 3 */}
          <Dialog key="halal-fly3">
            <DialogTrigger className="cursor-pointer">
              <img
                src="/images/professional-journey/halal-fly3.png"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </DialogTrigger>
            <DialogContent className="bg-transparent border-0 shadow-none p-0 md:min-w-lg lg:min-w-4xl xl:min-w-6xl">
              <DialogHeader className="sr-only">
                <DialogTitle className="sr-only"></DialogTitle>
                <DialogDescription className="sr-only"></DialogDescription>
              </DialogHeader>
              <img
                src="/images/professional-journey/halal-fly3.png"
                alt="startup template"
                width={1500}
                height={1000}
                className="h-40 md:h-80 lg:h-100 xl:h-140 md:min-w-md w-full lg:min-w-4xl rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]  lg:h-120"
              />
            </DialogContent>
          </Dialog>

          {/* Image 4 */}
          <Dialog key="halal-fly4">
            <DialogTrigger className="cursor-pointer">
              <img
                src="/images/professional-journey/halal-fly1.jpg"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </DialogTrigger>
            <DialogContent className="bg-transparent border-0 shadow-none p-0 md:min-w-lg lg:min-w-4xl xl:min-w-6xl">
              <DialogHeader className="sr-only">
                <DialogTitle className="sr-only"></DialogTitle>
                <DialogDescription className="sr-only"></DialogDescription>
              </DialogHeader>
              <img
                src="/images/professional-journey/halal-fly1.jpg"
                alt="startup template"
                width={1500}
                height={1000}
                className="h-40 md:h-80 lg:h-100 xl:h-140 md:min-w-md w-full lg:min-w-4xl rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "2025",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-white md:text-base text-justify">
          Developed and maintained client-facing web applications for Skitto and
          Sundarban Courier Service using React and Next.js, collaborated with
          designers to build responsive interfaces from Figma designs,
          integrated REST and GraphQL APIs, and contributed to code
          optimization, debugging, and Agile development processes.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {/* Image 1 */}
          <Dialog key="skitto1">
            <DialogTrigger className="cursor-pointer" key="skitto1">
              <img
                src="/images/professional-journey/skitto1.png"
                alt="hero template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </DialogTrigger>
            <DialogContent className="bg-transparent border-0 shadow-none p-0 md:min-w-lg lg:min-w-4xl xl:min-w-6xl">
              <DialogHeader className="sr-only">
                <DialogTitle className="sr-only"></DialogTitle>
                <DialogDescription className="sr-only"></DialogDescription>
              </DialogHeader>
              <img
                src="/images/professional-journey/skitto1.png"
                alt="hero template"
                width={1500}
                height={1000}
                className="h-40 md:h-80 lg:h-100 xl:h-140 md:min-w-md w-full lg:min-w-4xl rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] "
              />
            </DialogContent>
          </Dialog>

          {/* Image 2 */}
          <Dialog key="skitto2">
            <DialogTrigger className="cursor-pointer" key="skitto2">
              <img
                src="/images/professional-journey/skitto2.png"
                alt="hero template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </DialogTrigger>
            <DialogContent className="bg-transparent border-0 shadow-none p-0 md:min-w-lg lg:min-w-4xl xl:min-w-6xl">
              <DialogHeader className="sr-only">
                <DialogTitle className="sr-only"></DialogTitle>
                <DialogDescription className="sr-only"></DialogDescription>
              </DialogHeader>
              <img
                src="/images/professional-journey/skitto2.png"
                alt="hero template"
                width={1500}
                height={1000}
                className="h-40 md:h-80 lg:h-100 xl:h-140 md:min-w-md w-full lg:min-w-4xl rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] "
              />
            </DialogContent>
          </Dialog>

          {/* Image 3 */}
          <Dialog key="sundarban1">
            <DialogTrigger className="cursor-pointer" key="sundarban1">
              <img
                src="/images/professional-journey/sundarban1.png"
                alt="bento template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </DialogTrigger>
            <DialogContent className="bg-transparent border-0 shadow-none p-0 md:min-w-lg lg:min-w-4xl xl:min-w-6xl">
              <DialogHeader className="sr-only">
                <DialogTitle className="sr-only"></DialogTitle>
                <DialogDescription className="sr-only"></DialogDescription>
              </DialogHeader>
              <img
                src="/images/professional-journey/sundarban1.png"
                alt="bento template"
                width={1500}
                height={1000}
                className="h-40 md:h-80 lg:h-100 xl:h-140 md:min-w-md w-full lg:min-w-4xl rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] "
              />
            </DialogContent>
          </Dialog>

          {/* Image 4 */}
          <Dialog key="sundarban2">
            <DialogTrigger className="cursor-pointer" key="sundarban2">
              <img
                src="/images/professional-journey/sundarban2.png"
                alt="cards template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </DialogTrigger>
            <DialogContent className="bg-transparent border-0 shadow-none p-0 md:min-w-lg lg:min-w-4xl xl:min-w-6xl">
              <DialogHeader className="sr-only">
                <DialogTitle className="sr-only"></DialogTitle>
                <DialogDescription className="sr-only"></DialogDescription>
              </DialogHeader>
              <img
                src="/images/professional-journey/sundarban2.png"
                alt="cards template"
                width={1500}
                height={1000}
                className="h-40 md:h-80 lg:h-100 xl:h-140 md:min-w-md w-full lg:min-w-4xl rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] "
              />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    ),
  },
];

export const HomeProfessionalJourney = () => {
  return (
    <section className="min-h-screen my-20 ">
      <div className="text-center">
        <ShinyText
          text="Professional Journey"
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
      <span className="h-1 w-32 md:w-52 rounded-md bg-primary mx-auto block mt-2"></span>

      <div className="relative w-full overflow-clip">
        <Timeline data={data} />
      </div>
    </section>
  );
};
