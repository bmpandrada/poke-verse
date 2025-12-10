import React from "react";

const Hero = () => {
  return (
    <div className='hero text-center py-16 sm:py-20 relative select-none'>
      <div className='max-w-2xl space-y-6 sm:space-y-8 mx-auto px-4'>
        {/* TITLE */}
        <h1
          className='
            text-4xl sm:text-5xl md:text-6xl 
            font-title font-extrabold tracking-wide
            bg-linear-to-b from-white to-blue-200 bg-clip-text text-transparent
            drop-shadow-[0_0_25px_rgba(0,40,120,0.45)]
            animate-[holoTitle_4s_ease-in-out_infinite]
          '
        >
          PokéVerse
        </h1>

        {/* SUBTITLE */}
        <p
          className='
          text-gray-300 
          text-base sm:text-lg 
          font-body leading-relaxed
          px-2
        '
        >
          Explore powerful Pokémon data with a beautifully crafted React &
          TypeScript Pokédex.
        </p>

        {/* BUTTONS */}
        <div
          className='
            flex flex-col sm:flex-row 
            justify-center items-center 
            gap-4 pt-4
          '
        >
          {/* Primary Button */}
          <button
            className='
              w-full sm:w-auto
              px-6 py-3 rounded-lg 
              bg-blue-600 hover:bg-blue-500 
              text-white font-semibold tracking-wide
              shadow-[0_0_20px_rgba(59,130,246,0.35)]
              hover:shadow-[0_0_28px_rgba(59,130,246,0.55)]
              transition-all duration-300
            '
          >
            Browse Pokémon
          </button>

          {/* Glass Button */}
          <button
            className='
              w-full sm:w-auto
              px-6 py-3 rounded-lg
              border border-white/20 
              bg-white/10 hover:bg-white/20
              backdrop-blur-md 
              text-white font-semibold tracking-wide
              shadow-[0_0_12px_rgba(255,255,255,0.15)]
              hover:shadow-[0_0_18px_rgba(255,255,255,0.25)]
              transition-all duration-300
            '
          >
            Start Exploring
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Hero);
