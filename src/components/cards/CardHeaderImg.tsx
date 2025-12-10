import Atropos from "atropos/react";
import type { PokeCardTypes } from "../../types";
import React from "react";

interface ParticleType {
  left: string;
  top: string;
  delay: string;
}

interface CardDetailProps {
  particles: ParticleType[];
  nebulaBg: string;
  pokemon: PokeCardTypes;
}

const CardHeaderImg = ({ particles, nebulaBg, pokemon }: CardDetailProps) => {
  return (
    <Atropos
      shadow
      highlight
      rotateXMax={10}
      rotateYMax={10}
      className='w-full'
    >
      <div
        className='
                  relative flex justify-center items-center py-10
                  border-b border-blue-500/20 overflow-hidden
                '
      >
        {/* ⭐ DYNAMIC GRADIENT NEBULA */}
        <div
          className={`
                    absolute inset-0 
                    bg-linear-to-r ${nebulaBg}
                    blur-3xl opacity-60
                    mix-blend-lighten pointer-events-none
                  `}
        />

        {/* Layer 1 nebula — untouched */}
        <div
          className="
                    absolute inset-0 
                    bg-[url('/nebula-cloud-1.png')]
                    bg-cover bg-center opacity-30
                    animate-[nebulaMove_18s_ease-in-out_infinite]
                    mix-blend-screen pointer-events-none
                  "
        />

        {/* Layer 2 nebula — untouched */}
        <div
          className="
                    absolute inset-0 
                    bg-[url('/nebula-cloud-2.png')]
                    bg-cover bg-center opacity-20
                    animate-[nebulaFloat_22s_ease-in-out_infinite]
                    mix-blend-screen pointer-events-none
                  "
        />

        {/* HOLO SHINE — unchanged */}
        <div
          className='
                    absolute inset-0 z-10 pointer-events-none
                    before:absolute before:inset-0
                    before:bg-linear-to-r before:from-transparent 
                    before:via-white/40 before:to-transparent
                    before:w-[120%] before:h-full
                    before:animate-[holo-shine_3s_ease-in-out]
                  '
        />

        {/* ⭐ FLOATING PARTICLES (same logic as your layout) */}
        <div className='absolute inset-0 z-10 pointer-events-none'>
          {particles.map((p, i) => (
            <span
              key={i}
              className='
                        absolute w-1 h-1 rounded-full bg-blue-300/50
                        animate-[floatParticle_3s_ease-in-out_infinite]
                      '
              style={{
                left: p.left,
                top: p.top,
                animationDelay: p.delay,
              }}
            />
          ))}
        </div>

        {/* POKÉMON IMAGE */}
        <img
          data-atropos-offset='8'
          src={pokemon?.sprites?.other?.["official-artwork"]?.front_default}
          className='w-44 relative z-20 drop-shadow-[0_8px_20px_rgba(0,0,0,0.55)]'
          alt={pokemon.name}
        />
      </div>
    </Atropos>
  );
};

export default React.memo(CardHeaderImg);
