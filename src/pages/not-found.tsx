const NotFound = () => {
  return (
    <div
      className='
        min-h-screen flex flex-col justify-center items-center 
        text-white relative overflow-hidden
        bg-gradient-to-b from-[#0a0f16] via-[#0d1422] to-[#0f1724]
        select-none
      '
    >
      {/* ==== GALAXY BACKGROUND ==== */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {/* Nebula Left */}
        <div
          className="
            absolute inset-0 
            bg-[url('/nebula-cloud-1.svg')]
            bg-no-repeat bg-size-[900px]
            bg-[left_-250px_top_40%]
            opacity-20 blur-sm mix-blend-screen
            animate-[nebulaFloat_20s_ease-in-out_infinite]
          "
        />

        {/* Nebula Right */}
        <div
          className="
            absolute inset-0 
            bg-[url('/nebula-cloud-2.svg')]
            bg-no-repeat bg-size-[1200px]
            bg-[right_-300px_top_30%]
            opacity-25 blur-[90px] mix-blend-lighten
            animate-[nebulaMove_18s_ease-in-out_infinite]
          "
        />

        {/* Soft glow */}
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(80,120,255,0.18),transparent_70%)] opacity-40' />
      </div>

      {/* ==== MAIN CONTENT ==== */}
      <div className='relative z-10 text-center px-6'>
        <h1
          className='
            text-6xl sm:text-7xl md:text-8xl font-title font-extrabold
            bg-gradient-to-b from-white to-blue-200 bg-clip-text text-transparent
            drop-shadow-[0_0_25px_rgba(0,40,120,0.55)]
            animate-[holoTitle_4s_ease_infinite]
          '
        >
          404
        </h1>

        <p className='text-gray-300 text-lg sm:text-xl font-body mt-4'>
          Oops! This part of the PokéVerse doesn’t exist.
        </p>

        <p className='text-gray-400 mt-2 mb-8 text-sm sm:text-base'>
          The Pokémon you’re looking for might be in another universe.
        </p>

        {/* BUTTON */}
        <a
          href='/'
          className='
            inline-block px-6 py-3 rounded-lg mt-4
            bg-blue-600 hover:bg-blue-500 transition-all duration-300 
            text-white font-semibold tracking-wide shadow-[0_0_15px_rgba(59,130,246,0.45)]
            hover:shadow-[0_0_25px_rgba(59,130,246,0.65)]
          '
        >
          Return to PokéVerse
        </a>
      </div>
    </div>
  );
};

export default NotFound;
