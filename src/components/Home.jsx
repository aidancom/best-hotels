import Header from './Header'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBath, faBuilding, faMugSaucer, faRocket } from '@fortawesome/free-solid-svg-icons'

const Home = () => {

  const styledLi = "bg-white mt-3 rounded p-1 uppercase font-medium flex"
  const styledLink = "flex items-center gap-2 w-full"

  return (
    <div className='bg-[url(../public/background.jpg)] h-screen bg-cover bg-no-repeat p-5'>
      <Header/>
      <main className='flex justify-center'>
        <div className='w-full bg-[#ff984261] mt-2 p-3 rounded lg:w-2/5 md:w-3/4'>
        <h1 className='text-2xl text-white text-center font-medium'>
          Bienvenido al Portal del Huésped
        </h1>
        <div>
          <nav>
            <ul>
              <li className={styledLi}>
                <Link to="/espacios" className={styledLink}>
                  <FontAwesomeIcon icon={faBuilding} className="h-5 w-5" /> Espacios
                </Link>
              </li>
              <li className={styledLi}>
                <Link to="/gastronomia" className={styledLink}>
                  <FontAwesomeIcon icon={faMugSaucer} className="h-5 w-5" /> Gastronomía
                </Link>
              </li>
              <li className={styledLi}>
                <Link to="/bienestar" className={styledLink}>
                  <FontAwesomeIcon icon={faBath} className="h-5 w-5" /> Bienestar
                </Link>
              </li>
              <li className={styledLi}>
                <Link to="/experiencia" className={styledLink}>
                  <FontAwesomeIcon icon={faRocket} className="h-5 w-5" /> Experiencia
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        </div>
      </main>
    </div>
  )
}

export default Home
