import { usePokeCardApi } from "../context/ContextApi";
import Cards from "../components/Cards";

const getIdFromUrl = (url: string) => {
  const parts = url.split("/").filter(Boolean);
  return parts[parts.length - 1];
};

const HomePage = () => {
  const { pokeCard, loading, error } = usePokeCardApi();
  const imgUrl = import.meta.env.VITE_API_POKECARDS_API_IMG;

  if (loading) return <p className='text-center text-white p-6'>Loading...</p>;
  if (error) return <p className='text-center text-red-400 p-6'>{error}</p>;

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4'>
      {pokeCard.map((item) => {
        const id = getIdFromUrl(item.url);

        return <Cards item={item} imgUrl={imgUrl} id={id} />;
      })}
    </div>
  );
};

export default HomePage;
