
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Layout from './components/Layout';
import Home from './components/Home';
import Spaces from './components/Spaces';
import Gastronomy from './components/Gastronomy';
import Comfort from './components/Comfort';
import Experience from './components/Experience';
import SubExperience from './components/SubExperience';
import NotFound from './pages/NotFound';


const App = () => {

  const location = useLocation();

  return (
    // Aquí creamos las Rutas para navegar por la aplicación
    // Usamos AnimatePresence para controlar las animaciones de salida (cada componente tiene su motion con su initial, exit, transition y animate)
    // Para ello, necesitamos si o si un key dinamico, el cual es location.pathname (puede ser cualquier otro, pero que cambie)
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Layout />}>
          <Route index element={
            <Home />
          }/>
          <Route path='espacios' element={
            <Spaces />
          }/>
          <Route path='gastronomia' element={
            <Gastronomy />
          }/>
          <Route path='bienestar' element={
            <Comfort />
          }/>
          <Route path='experiencia' element={
            <Experience />
          }/>
         
          <Route path='experiencia/:sub' element={  // Para no crear todas las subpaginas, creamos una unica ruta qque vaya a un componente el cual cambiara dependiendo de la url
            <SubExperience />
          }/>
          <Route path='*' element={
            <NotFound />
          } />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;
