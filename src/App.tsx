import { Route, Routes } from "react-router";
import Layout from "./components/layouts/Layout";
import HomePage from "./pages/home";
import PokemonDetails from "./pages/pokemon";
import MainLayout from "./components/layouts/MainLayout";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={"/"} element={<HomePage />} />
      </Route>
      <Route element={<MainLayout />}>
        <Route path='pokemon/:name' element={<PokemonDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
