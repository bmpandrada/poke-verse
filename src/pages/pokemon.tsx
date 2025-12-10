import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Atropos from "atropos/react";
import type { PokeCardTypes } from "../types";

const typeColors: Record<string, string> = {
  fire: "bg-red-500",
  water: "bg-blue-500",
  grass: "bg-green-500",
  electric: "bg-yellow-400",
  bug: "bg-lime-600",
  normal: "bg-gray-400",
  poison: "bg-purple-500",
  fairy: "bg-pink-400",
  psychic: "bg-fuchsia-500",
  fighting: "bg-orange-700",
  ground: "bg-amber-600",
  rock: "bg-stone-500",
  steel: "bg-slate-400",
  ice: "bg-cyan-300",
  dragon: "bg-indigo-600",
  ghost: "bg-violet-700",
  dark: "bg-zinc-700",
  flying: "bg-sky-300",
};

const PokemonDetails = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState<PokeCardTypes>();
  const [err, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const navigate = useNavigate();
  const url = import.meta.env.VITE_POKEMON_API;

  useEffect(() => {
    const fetchData = async () => {
      if (!name) return;
      try {
        const res = await axios.get(`${url}/${name}`);
        setPokemon(res.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "unknown error");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [name, url]);

  if (loading)
    return <p className='text-center text-white p-6'>Loading Pokémon...</p>;
  if (err) return <p className='text-center text-red-400 p-6'>{err}</p>;

  return (
    <div className='flex justify-center mt-10 animate-fadeIn'>
      <div
        className='
          w-[420px] rounded-2xl overflow-hidden
          bg-[#0d1224]/80 backdrop-blur-xl
          shadow-[0_0_30px_rgba(59,130,246,0.25)]
          border border-blue-500/20
          transition-all duration-300
        '
      >
        {/* IMAGE HEADER WITH ATROPOS */}
        {/* IMAGE HEADER WITH ATROPOS + HOLO SHINE */}
        <Atropos
          shadow={true}
          highlight={true}
          rotateXMax={10}
          rotateYMax={10}
          className='w-full'
        >
          <div
            className='
    relative flex justify-center items-center py-10
    before:bg-linear-to-r from-[#11182d] via-[#1b2b4b] to-[#0d1224]
    border-b border-blue-500/20
    overflow-hidden

    before:absolute before:inset-0 
    before:bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.25),transparent_70%)]
    before:pointer-events-none
  '
          >
            {/* 🌫 NEBULA CLOUD LAYER 1 */}
            <div
              className='
      absolute inset-0 
      bg-[url("/nebula-cloud-1.png")]
      bg-cover bg-center opacity-30
      animate-[nebulaMove_18s_ease-in-out_infinite]
      mix-blend-screen
      pointer-events-none
    '
            />
            {/* 🌫 NEBULA CLOUD LAYER 2 */}
            <div
              className='
      absolute inset-0 
      bg-[url("/nebula-cloud-2.png")]
      bg-cover bg-center opacity-20
      animate-[nebulaFloat_22s_ease-in-out_infinite]
      mix-blend-screen
      pointer-events-none
    '
            />
            {/* (your holo shine stays here) */}

            {/* HOLOGRAPHIC SHINE SWEEP */}
            <div
              className="
        absolute inset-0 z-10 pointer-events-none
        before:content-[''] before:absolute before:inset-0
        before:bg-linear-to-r before:from-transparent 
        before:via-white/40 before:to-transparent
        before:w-[120%] before:h-full
        before:animate-[holo-shine_3s_ease-in-out]
        before:opacity-30
      "
            ></div>
            {/* HOLO PARTICLES */}
            <div className='absolute inset-0 pointer-events-none z-10'>
              {[...Array(14)].map((_, i) => (
                <span
                  key={i}
                  className='
        absolute w-1 h-1 rounded-full bg-blue-300/50
        animate-[floatParticle_3s_ease-in-out_infinite]
      '
                  style={{
                    left: `${Math.random() * 90 + 5}%`,
                    top: `${Math.random() * 90 + 5}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    opacity: 0.7,
                  }}
                ></span>
              ))}
            </div>
            {/* IMAGE */}
            <img
              data-atropos-offset='8'
              src={pokemon?.sprites?.other?.["official-artwork"]?.front_default}
              alt={pokemon?.name}
              className='
        w-44 object-contain relative z-20
        drop-shadow-[0_8px_20px_rgba(0,0,0,0.55)]
      '
            />
            {/* NAME */}
            <p
              data-atropos-offset='3'
              className='
        absolute bottom-4 text-blue-200 font-semibold capitalize text-xl
        drop-shadow-[0_0_6px_rgba(0,0,0,0.8)]
        z-20
      '
            >
              {pokemon?.name}
            </p>
          </div>
        </Atropos>

        {/* CONTENT */}
        <div className='p-6 text-white space-y-6'>
          {/* NAME */}
          <h1 className='text-4xl font-bold text-center capitalize text-blue-200 drop-shadow-sm'>
            {pokemon?.name}
          </h1>

          {/* TYPES */}
          <div className='text-center'>
            <h3 className='font-bold text-blue-300 mb-1 tracking-wide'>
              Types
            </h3>
            <div className='flex justify-center gap-2'>
              {pokemon?.types?.map((t, i) => {
                const color = typeColors[t.type.name] || "bg-gray-500";
                return (
                  <span
                    key={i}
                    className={`px-3 py-1 text-white text-sm font-semibold rounded-full capitalize ${color}`}
                  >
                    {t.type.name}
                  </span>
                );
              })}
            </div>
          </div>

          {/* ABILITIES */}
          <div>
            <h3 className='font-bold text-blue-300 mb-1'>Abilities</h3>
            <ul className='list-disc list-inside text-blue-100'>
              {pokemon?.abilities?.map((a, i) => (
                <li key={i} className='capitalize'>
                  {a.ability.name}
                </li>
              ))}
            </ul>
          </div>

          {/* STATS */}
          <div>
            <h3 className='font-bold text-blue-300 mb-2'>Stats</h3>
            <div className='space-y-3'>
              {pokemon?.stats?.map((s, i) => (
                <div key={i}>
                  <div className='flex justify-between text-sm'>
                    <span className='capitalize text-blue-200'>
                      {s.stat.name}
                    </span>
                    <span className='text-blue-300'>{s.base_stat}</span>
                  </div>

                  <div className='w-full h-2 bg-blue-900/40 rounded-full overflow-hidden'>
                    <div
                      className='h-full bg-blue-500 rounded-full transition-all'
                      style={{
                        width:
                          Math.min((s.base_stat / 150) * 100, 100).toString() +
                          "%",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BUTTONS */}
          <div className='flex justify-between pt-4'>
            <button
              className='
                px-4 py-2 rounded-md border border-blue-400/50
                text-blue-300 hover:bg-blue-500/20
                transition duration-200
              '
              onClick={() => navigate(-1)}
            >
              ← Back
            </button>

            <button
              className='
                px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500
                shadow-[0_0_12px_rgba(59,130,246,0.45)]
                text-white font-medium transition
              '
            >
              Catch Pokémon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
