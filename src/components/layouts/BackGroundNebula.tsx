import React, { useState } from "react";

type Particle = {
  left: string;
  top: string;
  delay: string;
};

type Star = {
  left: string;
  top: string;
};

const BackGroundNebula = () => {
  const [particles] = useState<Particle[]>(() =>
    [...Array(40)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
    })),
  );

  const [parallaxStars] = useState<Star[]>(() =>
    [...Array(25)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    })),
  );

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 overflow-hidden pointer-events-none'>
      {/* Deep space base */}
      <div className='absolute inset-0 bg-linear-to-b from-[#05070d] via-[#0a0f16] to-[#0f1a2e]' />

      {/* LEFT NEBULA */}
      <div
        className="
        absolute inset-0 
        bg-[url('/nebula-cloud-1.svg')]
        bg-no-repeat bg-size-[1000px]
        bg-position-[left_-250px_top_45%]
        opacity-25 saturate-150 blur-[3px]
        mix-blend-lighten
        animate-[nebulaFloat_22s_ease-in-out_infinite]
      "
      />

      {/* RIGHT NEBULA */}
      <div
        className="
        absolute inset-0 
        bg-[url('/nebula-cloud-2.svg')]
        bg-no-repeat bg-size-[1250px]
        bg-position-[right_-400px_top_30%]
        opacity-25 saturate-200 blur-[100px]
        mix-blend-screen
        animate-[nebulaMove_18s_ease-in-out_infinite]
      "
      />

      {/* Haze */}
      <div
        className='
        absolute inset-0 
        bg-[radial-gradient(circle_at_center,rgba(80,120,255,0.15),transparent_70%)]
        opacity-40 blur-[2px]
      '
      />

      {/* Stars */}
      <div className='absolute inset-0'>
        {particles.map((p, i) => (
          <span
            key={i}
            className='absolute w-0.5 h-0.5 rounded-full bg-blue-200/70 animate-[twinkle_2s_ease-in-out_infinite]'
            style={{ left: p.left, top: p.top, animationDelay: p.delay }}
          />
        ))}
      </div>

      {/* Parallax Stars */}
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
  );
};

export default React.memo(BackGroundNebula);
