import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router";
import type { PokeCardTypes } from "../../types";
import { typeColors, typeNebula } from "./typeThemes";
import CardHeaderImg from "./CardHeaderImg";
import CardDetailContent from "./CardDetailContent";

const CardDetails = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState<PokeCardTypes>();
  const [err, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const url = import.meta.env.VITE_POKEMON_API;

  // ⭐ PARTICLES para same as layout
  const particles = useMemo(() => {
    return [...Array(14)].map(() => ({
      left: `${Math.random() * 90 + 5}%`,
      top: `${Math.random() * 90 + 5}%`,
      delay: `${Math.random() * 2}s`,
    }));
  }, []);

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
  if (!pokemon) return null;

  const primaryType = pokemon.types[0]?.type.name ?? "normal";
  const nebulaBg = typeNebula[primaryType] ?? typeNebula.normal;

  return (
    <div className='flex justify-center mt-10 animate-fadeIn'>
      <div
        className='
          w-[420px] rounded-2xl overflow-hidden
          bg-[#0d1224]/80 backdrop-blur-xl
          shadow-[0_0_30px_rgba(59,130,246,0.25)]
          border border-blue-500/20
        '
      >
        <CardHeaderImg
          particles={particles}
          nebulaBg={nebulaBg}
          pokemon={pokemon}
        />

        <CardDetailContent pokemon={pokemon} typeColors={typeColors} />
      </div>
    </div>
  );
};

export default React.memo(CardDetails);
