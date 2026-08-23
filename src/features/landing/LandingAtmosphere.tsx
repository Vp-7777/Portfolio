"use client";

export function LandingAtmosphere() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden z-0 select-none bg-[#050507]"
    >
      {/* Exact Reference Silky Diagonal Metallic Spotlight Beams */}
      
      {/* Beam 1: Top Left Diagonal Light Shaft */}
      <div className="absolute -top-[15%] -left-[10%] w-[38vw] h-[85vh] rounded-[100%] bg-gradient-to-br from-white/20 via-white/8 to-transparent blur-[90px] rotate-[-25deg] will-change-transform" />

      {/* Beam 2: Top Center-Right Shaft */}
      <div className="absolute -top-[20%] left-[32%] w-[34vw] h-[90vh] rounded-[100%] bg-gradient-to-br from-white/22 via-white/7 to-transparent blur-[100px] rotate-[-28deg] will-change-transform" />

      {/* Beam 3: Top Far Right Shaft */}
      <div className="absolute -top-[10%] right-[-8%] w-[36vw] h-[80vh] rounded-[100%] bg-gradient-to-br from-white/18 via-white/6 to-transparent blur-[95px] rotate-[-30deg] will-change-transform" />

      {/* Beam 4: Bottom Left Soft Ambient Reflection */}
      <div className="absolute bottom-[-15%] -left-[5%] w-[42vw] h-[65vh] rounded-[100%] bg-gradient-to-tr from-white/16 via-white/5 to-transparent blur-[110px] rotate-[-20deg]" />

      {/* Beam 5: Bottom Right Diagonal Light Shaft */}
      <div className="absolute bottom-[-10%] right-[10%] w-[40vw] h-[75vh] rounded-[100%] bg-gradient-to-tl from-white/20 via-white/6 to-transparent blur-[105px] rotate-[-25deg]" />

      {/* Subtle Ambient Vignette & Grain */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/60 pointer-events-none" />
    </div>
  );
}
