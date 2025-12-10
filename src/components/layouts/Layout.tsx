import Hero from "../header/hero";
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
      {/* ==================== GALAXY BACKGROUND ==================== */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {/* Deep space base */}
        <div className='absolute inset-0 bg-linear-to-b from-[#05070d] via-[#0a0f16] to-[#0f1a2e]' />

        {/* 🌌 LEFT NEBULA (soft glow, masked to remove lines) */}
        <div
          className="
            absolute inset-0 
            bg-[url('/nebula-cloud-1.svg')]
            bg-no-repeat
            bg-[length:1100px]
            bg-[left_-250px_top_45%]
            opacity-25 saturate-150 blur-[3px]
            mix-blend-lighten
            animate-[nebulaFloat_22s_ease-in-out_infinite]
            mask-[radial-gradient(circle,black_60%,transparent_100%)]
          "
        />

        {/* 🌌 RIGHT NEBULA (premium cosmic beam, softened) */}
        <div
          className="
            absolute inset-0 
            bg-[url('/nebula-cloud-2.svg')]
            bg-no-repeat
            bg-[length:1250px]
            bg-[right_-300px_top_40%]
            opacity-25 saturate-200 blur-[4px]
            mix-blend-screen
            animate-[nebulaMove_18s_ease-in-out_infinite]
            mask-[radial-gradient(circle,black_60%,transparent_100%)]
          "
        />

        {/* CENTER cosmic haze */}
        <div
          className='
            absolute inset-0 
            bg-[radial-gradient(circle_at_center,rgba(80,120,255,0.15),transparent_70%)]
            opacity-40 blur-[2px]
            mix-blend-screen
          '
        />

        {/* PARALLAX highlight */}
        <div
          className="
            absolute inset-0
            bg-[url('/nebula-cloud-1.svg')]
            bg-no-repeat
            bg-[length:900px]
            bg-[right_10%_top_35%]
            opacity-15 blur-[4px]
            mix-blend-lighten
            animate-[parallaxNebula_25s_linear_infinite]
            mask-[radial-gradient(circle,black_60%,transparent_100%)]
          "
        />

        {/* Nebula fog glows */}
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.15),transparent_60%)] opacity-50' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(147,197,253,0.12),transparent_70%)] opacity-40' />

        {/* Twinkling stars */}
        <div className='absolute inset-0'>
          {particles.map((p, i) => (
            <span
              key={i}
              className='
                absolute w-0.5 h-0.5 rounded-full
                bg-blue-200/70 animate-[twinkle_2s_ease-in-out_infinite]
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

      {/* ==================== HERO ==================== */}
      <div className='pt-24 pb-12 relative z-10'>
        <Hero />
      </div>

      {/* ==================== MAIN CONTENT ==================== */}
      <section
        className='
          max-w-5xl w-full mx-auto
          px-6 sm:px-8 py-10 mb-20
          relative z-10
        '
      >
        <Outlet />
      </section>
    </div>
  );
};

export default React.memo(Layout);
