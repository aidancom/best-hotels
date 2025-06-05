import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useLocation, useNavigate } from "react-router-dom"


const Header = () => {

  const location = useLocation()
  const navigate = useNavigate()

  return (
    <>
    {location?.pathname === '/' ? (
      <header className="flex items-start justify-center">
      <img className="w-2/4 lg:w-1/5" src="/public/logo_best_hotels.png" alt="Logo Best Hotels" />
      <select className="border border-black bg-white" name="languages" id="languages">
        <option selected={true} value="es">ES</option>
        <option value="en">EN</option>
      </select>
    </header>
    ) : (
      <header className="flex items-center justify-between bg-black p-1">
       <button className="cursor-pointer" onClick={() => navigate(-1)}><FontAwesomeIcon icon={faChevronLeft} className="text-white text-2xl"/></button>
       <Link to="/"><img className="w-10" src="/public/icon_best_hotels.png" alt="Logo Best Hotels" /></Link>
      </header>
    )}
    </>
  )
}

export default Header
