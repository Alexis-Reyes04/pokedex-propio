import { Navigate, Route, Routes } from "react-router";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import PokemonList from "./pages/PokemonList";
import PokemonDetail from "./pages/PokemonDetail";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/pokemon" element={<PokemonList />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
