import { Outlet } from "react-router";
import { useState } from "react";
import React from "react";

const Layout = () => {
  const [particles] = useState(() =>
    [...Array(40)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
    })),
  );

  const [parallaxStars] = useState(() =>
    [...Array(25)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    })),
  );

  return (
    <div
      className='
        min-h-screen text-white relative overflow-hidden
        bg-linear-to-b from-[#0a0f16] via-[#0d1422] to-[#0f1724]
      '
    >
      {/* GALAXY BACKGROUND */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {/* 🌫 Nebula Layer 1 */}
        <div
          className="
            absolute inset-0 
            bg-[url('/nebula-cloud-1.svg')]
            bg-cover bg-center 
            opacity-35 mix-blend-screen saturate-150 blur-[1px]
            animate-[nebulaMove_18s_ease-in-out_infinite]
          "
        />

        {/* 🌫 Nebula Layer 2 */}
        <div
          className="
            absolute inset-0 
            bg-[url('/nebula-cloud-2.svg')]
            bg-cover bg-center 
            opacity-30 mix-blend-screen blur-[2px]
            animate-[nebulaFloat_22s_ease-in-out_infinite]
          "
        />

        {/* Twinkling stars */}
        <div className='absolute inset-0'>
          {particles.map((p, i) => (
            <span
              key={i}
              className='
                absolute w-0.5 h-0.5 rounded-full bg-blue-200/70
                animate-[twinkle_2s_ease-in-out_infinite]
              '
              style={{ left: p.left, top: p.top, animationDelay: p.delay }}
            />
          ))}
        </div>

        {/* Parallax stars */}
        <div className='absolute inset-0 opacity-30 animate-[parallaxFloat_12s_linear_infinite]'>
          {parallaxStars.map((s, i) => (
            <span
              key={i}
              className='absolute w-[3px] h-[3px] rounded-full bg-blue-300/50'
              style={{ left: s.left, top: s.top }}
            />
          ))}
        </div>
      </div>

      {/* MAIN CONTENT WITHOUT ANY CARD WRAPPER */}

      <main className='mt-10 px-4 sm:px-6 md:px-10 lg:px-14 pb-20'>
        <Outlet />
      </main>
    </div>
  );
};

export default React.memo(Layout);
