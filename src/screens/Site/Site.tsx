import { HeroBannerSection } from "./sections/HeroBannerSection";
import { NavigationHeaderSection } from "./sections/NavigationHeaderSection";
import { SocialMediaFooterSection } from "./sections/SocialMediaFooterSection";
import { TournamentBracketSection } from "./sections/TournamentBracketSection/TournamentBracketSection";
import { TournamentDetailsSection } from "./sections/TournamentDetailsSection/TournamentDetailsSection";

export const Site = (): JSX.Element => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative bg-black min-h-screen flex flex-col">
      {/* Fixed navigation */}
      <NavigationHeaderSection />

      {/* Hero section with background */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background image - fills entire hero */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Background"
          src="/1background.png"
        />

        {/* Side decorations */}
        <img
          className="absolute top-0 left-0 w-[25vw] max-w-[460px] h-auto object-contain z-10 pointer-events-none"
          alt="Left decoration"
          src="/side-decor.png"
        />
        <img
          className="absolute top-0 right-0 w-[25vw] max-w-[460px] h-auto object-contain z-10 scale-x-[-1]"
          alt="Right decoration"
          src="/side-decor.png"
        />

        {/* Top dark gradient */}
        <div className="absolute top-0 left-0 w-full h-[25%] bg-gradient-to-b from-black via-black/70 to-transparent z-10 pointer-events-none" />

        {/* Bottom gradient to black */}
        <div className="absolute bottom-0 left-0 w-full h-[35%] bg-gradient-to-t from-black via-black/70 to-transparent z-10 pointer-events-none" />

        {/* Clouds at the very bottom */}
        <img
          className="absolute bottom-0 left-0 w-full h-auto object-cover z-[5] pointer-events-none opacity-60"
          alt="Clouds"
          src="/clouds.webp"
        />

        {/* Hero content centered */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pt-[60px]">
          <HeroBannerSection />
        </div>
      </section>

      {/* Main content */}
      <main className="flex-1 bg-black relative z-10">
        <TournamentDetailsSection />
        <TournamentBracketSection />
      </main>

      {/* Footer */}
      <SocialMediaFooterSection />

      {/* Arrow scroll-to-top */}
      <div
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-8 h-[31px] bg-[url(/arrow.png)] bg-[100%_100%] z-50 cursor-pointer hover:opacity-80 transition-opacity"
      />
    </div>
  );
};
