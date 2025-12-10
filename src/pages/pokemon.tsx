import CardDetails from "../components/cards/CardDetail";
import SEO from "../components/SeoConfig";

const PokemonDetails = () => {
  return (
    <>
      <SEO
        title='Card | PokéVerse'
        description='PokéVerse'
        url='https://poke-verse-neon.vercel.app/pokemon'
      />
      <CardDetails />;
    </>
  );
};

export default PokemonDetails;
