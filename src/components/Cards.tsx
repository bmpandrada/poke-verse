import { Link } from "react-router";
import Atropos from "atropos/react";
import type { PokeListItem } from "../types";

interface CardProps {
  item: PokeListItem;
  imgUrl: string;
  id: string | number;
}

const Cards = ({ item, imgUrl, id }: CardProps) => {
  return (
    <Link to={`pokemon/${item.name}`} className='block w-full'>
      <Atropos
        shadow={true}
        highlight={true}
        rotateXMax={8}
        rotateYMax={8}
        className='w-full rounded-xl pointer-events-auto'
      >
        <div
          className='
            group block rounded-xl overflow-hidden relative
            bg-[#0d1224]
            border border-blue-400/20
            shadow-[0_0_15px_rgba(30,58,138,0.35)]
            hover:shadow-[0_0_28px_rgba(59,130,246,0.55)]
            hover:-translate-y-1
            transition-all duration-300

            before:absolute before:inset-0 before:rounded-xl
            before:border-2 before:border-transparent
            hover:before:border-blue-400/60
            hover:before:shadow-[0_0_28px_8px_rgba(59,130,246,0.35)]
            before:transition-all before:duration-300
          '
        >
          {/* IMAGE AREA */}
          <figure
            className='
              relative h-48 w-full flex flex-col items-center justify-center
              bg-linear-to-br from-[#11182d] via-[#1b2b4b] to-[#0d1224]
              border-b border-blue-400/20
              overflow-hidden

              before:absolute before:inset-0 
              before:bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.2),transparent_70%)]
              before:pointer-events-none
            '
          >
            <img
              data-atropos-offset='5'
              src={`${imgUrl}/${id}.png`}
              className='
                max-h-28 object-contain
                drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)]
                mb-1
              '
            />

            <p
              data-atropos-offset='3'
              className='
                text-blue-200 font-semibold capitalize text-lg
                drop-shadow-[0_0_6px_rgba(0,0,0,0.8)]
              '
            >
              {item.name}
            </p>

            <span
              data-atropos-offset='2'
              className='
                mt-1 text-xs px-2 py-0.5 rounded-md
                bg-blue-500/20 text-blue-200 border border-blue-500/30
                backdrop-blur-sm
              '
            >
              #{id}
            </span>
          </figure>

          {/* BUTTON AREA */}
          <div className='p-4'>
            <button
              className='
                w-full py-2 rounded-md
                bg-blue-600 hover:bg-blue-500
                shadow-[0_0_12px_rgba(59,130,246,0.45)]
                text-white text-sm font-semibold
                transition-all
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

export default Cards;
