const Slice = ({ letter }: { letter: string }) => {
  const bgStyle = {
    backgroundImage: "url(/images/brand_sliced_bg.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed"
  } as const;

  return (
    <div className="flex-1 flex items-center w-full gap-0 overflow-hidden relative group cursor-pointer bg-transparent">
      {/* Sliced Rectangle (Strip) */}
      <div className="h-[18vh] flex-grow flex-shrink-0 relative z-20 overflow-hidden">
        <div 
          className="absolute inset-0 border-y border-white/5"
          style={bgStyle}
        />
      </div>

      {/* Letter Layering */}
      <div className="h-[19vh] flex items-center justify-start flex-shrink-0 relative z-20 min-w-[15vh]" style={{ marginLeft: "-10px" }}>
        <h1 
          className="h-full text-[19vh] font-serif font-black uppercase text-transparent bg-clip-text leading-[1] select-none border-y border-white/5"
          style={bgStyle}
        >
          {letter}
        </h1>
      </div>
    </div>
  );
};

export default function BrandSlicedArt() {
  return (
    <div className="relative w-full h-[60vh] bg-white flex flex-col p-4 lg:p-12 justify-center overflow-hidden">
      <div className="flex flex-col h-full max-h-[800px] gap-2 lg:gap-4">
        {["n", "a", "d", "i"].map((char, i) => (
          <Slice key={i} letter={char} />
        ))}
      </div>
      
      {/* Identity Label */}
      <div className="absolute top-1/2 -left-6 -translate-y-1/2 z-30 -rotate-90 pointer-events-none">
        <span className="text-[10px] uppercase tracking-[0.5em] text-black/20 font-medium whitespace-nowrap">
          Nadi Visual Identity
        </span>
      </div>
    </div>
  );
}
