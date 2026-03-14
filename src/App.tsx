import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useLenis } from "@/hooks/use-lenis";
import HomePage from "./pages/HomePage";
import CharactersPage from "./pages/CharactersPage";
import StoryArcsPage from "./pages/StoryArcsPage";
import DevilFruitsPage from "./pages/DevilFruitsPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";

const AppRoutes = () => {
  useLenis();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/characters" element={<CharactersPage />} />
      <Route path="/story-arcs" element={<StoryArcsPage />} />
      <Route path="/devil-fruits" element={<DevilFruitsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
