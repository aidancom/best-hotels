import { Link } from "react-router-dom"
import Header from "./Header"
import Tours from "../pages/Tours"
import Activities from "../pages/Activities"
import PointsOfInterest from "../pages/PointsOfInterest"


const Experience = () => {
  return (
    <>
    <Header/>
    <main className="p-3 space-y-3">
      <h1 className="text-2xl font-medium">Experiencia</h1>
      <div className="space-y-3">
        <img src="../public/section_experience.jpg" alt="Experiencias para nuestros clientes" />
        <ul className="pl-10 space-y-2 list-disc">
          <li>
            <Link to="/experiencia/excursiones" element={<Tours/>}><span className="text-[#2d7a58]">Excursiones</span></Link>
          </li>
          <li>
            <Link to="/experiencia/actividades" element={<Activities/>}><span className="text-[#2d7a58]">Actividades</span></Link>
          </li>
          <li>
            <Link to="/experiencia/puntos-de-interes" element={<PointsOfInterest/>}><span className="text-[#2d7a58]">Puntos de interés</span></Link>
          </li>
        </ul>
      </div>
    </main>
    </>
  )
}

export default Experience
