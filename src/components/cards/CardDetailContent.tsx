import { useNavigate } from "react-router";
import type { PokeCardTypes } from "../../types";
import React from "react";

interface CardDetailContent {
  pokemon: PokeCardTypes;
  typeColors: Record<string, string>;
}

const CardDetailContent = ({ pokemon, typeColors }: CardDetailContent) => {
  const navigate = useNavigate();
  return (
    <div className='p-6 text-white space-y-6'>
      <h1 className='text-4xl text-center capitalize text-blue-200 font-bold'>
        {pokemon?.name}
      </h1>

      <div className='text-center'>
        <h3 className='font-bold text-blue-200 mb-1'>Types</h3>
        <div className='flex justify-center gap-2'>
          {pokemon?.types?.map((t, i) => (
            <span
              key={i}
              className={`px-3 py-1 rounded-full text-sm capitalize text-white font-semibold ${
                typeColors[t.type.name]
              }`}
            >
              {t.type.name}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className='font-bold text-blue-200 mb-1'>Abilities</h3>
        <ul className='list-disc list-inside text-blue-100'>
          {pokemon?.abilities?.map((a, i) => (
            <li key={i} className='capitalize'>
              {a.ability.name}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className='font-bold text-blue-200 mb-2'>Stats</h3>
        <div className='space-y-3'>
          {pokemon?.stats?.map((s, i) => (
            <div key={i}>
              <div className='flex justify-between text-sm'>
                <span className='capitalize text-blue-200'>{s.stat.name}</span>
                <span className='text-blue-300'>{s.base_stat}</span>
              </div>

              <div className='w-full h-2 bg-blue-900/40 rounded-full'>
                <div
                  className='h-full bg-blue-500 rounded-full'
                  style={{
                    width: `${Math.min((s.base_stat / 150) * 100, 100)}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-between pt-4'>
        <button
          onClick={() => navigate(-1)}
          className='px-4 py-2 border border-blue-400/50 rounded-md text-blue-300 hover:bg-blue-500/20'
        >
          ← Back
        </button>

        <button className='px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.45)] text-white'>
          Catch Pokémon
        </button>
      </div>
    </div>
  );
};

export default React.memo(CardDetailContent);
