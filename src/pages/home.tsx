import { usePokeCardApi } from "../context/ContextApi";
import Cards from "../components/cards/Cards";
import { useMemo, useState, useRef, useEffect, useCallback } from "react";
import { useWindowVirtualizer } from "@tanstack/react-virtual";
import SEO from "../components/SeoConfig";
import Pagination from "../components/Pagination";
import { generatePageNumbers } from "../utils/generatePageNumber";
import { useVirtualSettings } from "../context/PokeVirtualApi";
import type { VirtualItem } from "@tanstack/react-virtual";

const getIdFromUrl = (url: string) => {
  const parts = url.split("/").filter(Boolean);
  return parts[parts.length - 1];
};

const HomePage = () => {
  const { pokeCard, loading, error } = usePokeCardApi();
  const imgUrl = import.meta.env.VITE_API_POKECARDS_API_IMG;

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 50;

  const totalPage = Math.ceil(pokeCard.length / perPage);

  const lastIndex = currentPage * perPage;
  const firstIndex = lastIndex - perPage;

  const currentPerPage = pokeCard.slice(firstIndex, lastIndex);
  const pageList = generatePageNumbers(totalPage, currentPage);

  // Virtual para sa context
  const { columnCount, rowHeight } = useVirtualSettings();

  // apply Memoized para iwas rerender
  const memoizedList = useMemo(
    () =>
      currentPerPage.map((item) => ({
        item,
        id: getIdFromUrl(item.url),
        imgUrl,
      })),
    [currentPerPage, imgUrl],
  );

  const parentRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);

  const rowCount = Math.ceil(memoizedList.length / columnCount);

  // Virtualizer
  const virtualizer = useWindowVirtualizer({
    count: rowCount,
    estimateSize: () => rowHeight,
    overscan: 4,
  });

  // ⭐ RENDER FUNCTION
  const renderRow = useCallback(
    (virtualRow: VirtualItem) => {
      const rowIndex = virtualRow.index;

      return (
        <div
          key={virtualRow.key}
          ref={rowIndex === 0 ? rowRef : undefined}
          className='grid gap-6 p-4'
          style={{
            gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
            position: "absolute",
            top: 0,
            left: 0,
            transform: `translateY(${virtualRow.start}px)`,
            height: virtualRow.size,
            width: "100%",
          }}
        >
          {Array.from({ length: columnCount }, (_, col) => {
            const itemIndex = rowIndex * columnCount + col;
            const data = memoizedList[itemIndex];
            if (!data) return null;

            return (
              <Cards
                key={data.item.name}
                item={data.item}
                imgUrl={data.imgUrl}
                id={data.id}
              />
            );
          })}
        </div>
      );
    },
    [columnCount, memoizedList],
  );

  useEffect(() => {
    virtualizer.scrollToIndex(0, { align: "start", behavior: "smooth" });
  }, [currentPage, virtualizer]);

  useEffect(() => {
    virtualizer.measure();
  }, [columnCount, virtualizer]);

  if (loading) return <p className='text-center text-white p-6'>Loading...</p>;
  if (error) return <p className='text-center text-red-400 p-6'>{error}</p>;

  return (
    <>
      <SEO
        title='Welcome to PokéVerse'
        description='PokéVerse - Explore Pokémon'
        url='https://poke-verse-neon.vercel.app/'
      />

      <div ref={parentRef} className='relative'>
        <div
          style={{
            height: virtualizer.getTotalSize(),
            width: "100%",
            position: "relative",
          }}
        >
          {virtualizer.getVirtualItems().map(renderRow)}
        </div>

        <Pagination
          pageList={pageList}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
};

export default HomePage;
