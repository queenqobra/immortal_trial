export const HeroBannerSection = (): JSX.Element => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center gap-2 w-full">
      {/* Logo area with wings */}
      <div className="relative w-[580px] h-[277px] flex-shrink-0 scale-[1.2] origin-top">
        {/* Right wing */}
        <div className="absolute top-[25px] left-[410px] w-[153px] h-[165px] bg-[url(/wing.png)] bg-[100%_100%]" />
        {/* Left wing */}
        <div className="absolute top-[25px] right-[410px] w-[153px] h-[165px] bg-[url(/wing.png)] bg-[100%_100%] scale-x-[-1]" />
        {/* Central logo - enlarged */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[url(/TOIlogo.png)] bg-contain bg-center bg-no-repeat scale-[1.3]" />
      </div>

      {/* Stats section */}
      <div className="flex items-center justify-center gap-16 scale-[1.15] origin-top">
        {/* КОМАНДЫ */}
        <div className="flex flex-col items-center gap-0">
          <span className="font-literature text-[#ffffff57] text-[10px] tracking-[0.3px]">
            КОМАНДЫ
          </span>
          <span className="text-[#d3d3d3] text-[40px] leading-[40px] drop-shadow-[0_0_21px_#d3d3d3]" style={{ fontFamily: "'Antic Didone', serif" }}>
            32
          </span>
        </div>

        {/* ПРИЗОВОЙ ФОНД */}
        <div className="flex flex-col items-center gap-0">
          <span className="font-literature text-[#ffffff57] text-[10px] tracking-[0.3px]">
            ПРИЗОВОЙ ФОНД
          </span>
          <div className="flex items-baseline">
            <span className="text-[#d3d3d3] text-[40px] tracking-[1.2px] leading-[40px] drop-shadow-[0_0_13px_#d3d3d3]" style={{ fontFamily: "'Antic Didone', serif" }}>
              12000
            </span>
            <span className="font-literature text-[#d3d3d3] text-[15px] ml-1">
              РУБ
            </span>
          </div>
        </div>

        {/* ЗАВЕРШЕННЫХ */}
        <div className="flex flex-col items-center gap-0">
          <span className="font-literature text-[#ffffff57] text-[10px] tracking-[0.3px]">
            ЗАВЕРШЕННЫХ
          </span>
          <span className="text-[#d3d3d3] text-[40px] leading-[40px] drop-shadow-[0_0_21px_#d3d3d3]" style={{ fontFamily: "'Antic Didone', serif" }}>
            150+
          </span>
        </div>
      </div>

      {/* CTA - УЧАСТВОВАТЬ */}
      <div className="mt-6">
        <span className="bg-[linear-gradient(134deg,rgba(255,6,0,1)_25%,rgba(66,2,0,1)_76%)] bg-clip-text text-transparent font-kudry text-[70px] tracking-[2.1px] leading-[100px] cursor-pointer hover:opacity-80 transition-opacity">
          УЧАСТВОВАТЬ
        </span>
      </div>

      {/* Subtitle */}
      <div className="mt-[-10px]">
        <span className="font-labor text-[#a7a7a7] text-[10px] tracking-[0.9px]">
          Докажи своё превосходство
        </span>
      </div>
    </div>
  );
};
