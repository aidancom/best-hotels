import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Spaces from "./components/Spaces";
import Gastronomy from "./components/Gastronomy";
import Comfort from "./components/Comfort";
import Experience from "./components/Experience";
import SubExperience from "./components/SubExperience";
import NotFound from "./pages/NotFound";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation(); // ✅ Ahora sí: dentro de BrowserRouter

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="espacios" element={<Spaces />} />
          <Route path="gastronomia" element={<Gastronomy />} />
          <Route path="bienestar" element={<Comfort />} />
          <Route path="experiencia" element={<Experience />} />
          <Route path="experiencia/:sub" element={<SubExperience />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;
