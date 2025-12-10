import { usePokeCardApi } from "../context/ContextApi";
import Cards from "../components/cards/Cards";
import { useMemo, useState, useEffect, useRef } from "react";
import { useWindowVirtualizer } from "@tanstack/react-virtual";

const getIdFromUrl = (url: string) => {
  const parts = url.split("/").filter(Boolean);
  return parts[parts.length - 1];
};

const getColumnCount = () => {
  if (window.innerWidth >= 1024) return 4;
  if (window.innerWidth >= 768) return 3;
  if (window.innerWidth >= 640) return 2;
  return 1;
};

const HomePage = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);

  const { pokeCard, loading, error } = usePokeCardApi();
  const imgUrl = import.meta.env.VITE_API_POKECARDS_API_IMG;

  const [columnCount, setColumnCount] = useState(getColumnCount());
  const [rowHeight, setRowHeight] = useState(280);

  useEffect(() => {
    if (rowRef.current) {
      const h = rowRef.current.getBoundingClientRect().height;
      setRowHeight(h);
    }
  }, [columnCount]);

  useEffect(() => {
    const update = () => setColumnCount(getColumnCount());
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const memoizedList = useMemo(
    () =>
      pokeCard.map((item) => ({
        item,
        id: getIdFromUrl(item.url),
        imgUrl,
      })),
    [pokeCard, imgUrl],
  );

  const rowCount = Math.ceil(memoizedList.length / columnCount);

  const virtualizer = useWindowVirtualizer({
    count: rowCount,
    estimateSize: () => rowHeight,
    overscan: 4,
  });

  if (loading) return <p className='text-center text-white p-6'>Loading...</p>;
  if (error) return <p className='text-center text-red-400 p-6'>{error}</p>;

  return (
    <div ref={parentRef} className='relative'>
      <div
        style={{
          height: virtualizer.getTotalSize(),
          width: "100%",
          position: "relative",
        }}
      >
        {virtualizer.getVirtualItems().map((virtualRow) => {
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
        })}
      </div>
    </div>
  );
};

export default HomePage;
