import { Link } from "react-router";
import Atropos from "atropos/react";
import type { PokeListItem } from "../../types";
import React from "react";

interface CardProps {
  item: PokeListItem;
  imgUrl: string;
  id: string | number;
}


const Cards = ({ item, imgUrl, id }: CardProps) => {
  return (
    <Link to={`pokemon/${item.name}`} className='block w-full cursor-pointer'>
      <Atropos
        shadow={true}
        highlight={true}
        rotateXMax={8}
        rotateYMax={8}
        alwaysActive={true}
        className='w-full rounded-xl overflow-hidden'
      >
        <div
          className='
        group rounded-xl overflow-hidden relative
        bg-[#0d1224]
        border border-blue-400/20
        shadow-[0_0_15px_rgba(30,58,138,0.35)]
        hover:shadow-[0_0_28px_rgba(59,130,246,0.55)]
        hover:-translate-y-1
        transition-all duration-300
      '
        >
          {/* IMAGE */}
          <figure
            className='
          relative h-48 w-full flex flex-col items-center justify-center
          bg-linear-to-r from-[#11182d] via-[#1b2b4b] to-[#0d1224]
          border-b border-blue-400/20
        '
          >
            <img
              data-atropos-offset='5'
              src={`${imgUrl}/${id}.png`}
              className='max-h-28 object-contain drop-shadow-lg mb-1'
            />

            <p
              data-atropos-offset='3'
              className='text-blue-200 font-semibold capitalize text-lg'
            >
              {item.name}
            </p>

            <span
              data-atropos-offset='2'
              className='mt-1 text-xs px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-200 border border-blue-500/30'
            >
              #{id}
            </span>
          </figure>

          {/* BUTTON AREA */}
          <div className='p-4'>
            <button
              type='button'
              data-atropos-offset='4'
              className='
            w-full py-2 rounded-md
            bg-blue-600 hover:bg-blue-500
            shadow-[0_0_12px_rgba(59,130,246,0.45)]
            text-white text-sm font-semibold
            transition-all
            pointer-events-none   <!-- FIX para di ma-block ang Link! -->
          '
            >
              View Details
            </button>
          </div>
        </div>
      </Atropos>
    </Link>
  );
};

export default React.memo(Cards);
