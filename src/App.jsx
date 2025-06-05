import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import Spaces from "./components/Spaces"
import Gastronomy from "./components/Gastronomy"
import Comfort from "./components/Comfort"
import Experience from "./components/Experience"
import Tours from "./pages/Tours"
import Activities from "./pages/Activities"
import PointsOfInterest from "./pages/PointsOfInterest"
import SubExperience from "./components/SubExperience"
import NotFound from "./pages/NotFound"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="espacios" element={<Spaces/>}/>
            <Route path="gastronomia" element={<Gastronomy/>}/>
            <Route path="bienestar" element={<Comfort/>}/>
            <Route path="experiencia" element={<Experience/>}/>
            <Route path="experiencia/:sub" element={<SubExperience />} />
            <Route path="*" element={<NotFound/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

