import { usePokeCardApi } from "../context/ContextApi";
import Cards from "../components/cards/Cards";
import { useMemo } from "react";

const getIdFromUrl = (url: string) => {
  const parts = url.split("/").filter(Boolean);
  return parts[parts.length - 1];
};

const HomePage = () => {
  const { pokeCard, loading, error } = usePokeCardApi();
  const imgUrl = import.meta.env.VITE_API_POKECARDS_API_IMG;

  const memoizedList = useMemo(
    () =>
      pokeCard.map((item) => ({
        item,
        id: getIdFromUrl(item.url),
        imgUrl,
      })),
    [pokeCard, imgUrl],
  );

  if (loading) return <p className='text-center text-white p-6'>Loading...</p>;
  if (error) return <p className='text-center text-red-400 p-6'>{error}</p>;

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4'>
      {memoizedList.map(({ item, imgUrl, id }) => {
        return <Cards key={item.name} item={item} imgUrl={imgUrl} id={id} />;
      })}
    </div>
  );
};

export default HomePage;
