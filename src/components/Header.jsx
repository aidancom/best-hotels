import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import i18n from '../i18n'


const Header = () => {

  const location = useLocation()
  const navigate = useNavigate()

  return (
    <>
    {location?.pathname === '/' ? (
      <motion.header       
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}  
      className='flex items-start justify-center'
    >
      <img 
        className='w-2/4 lg:w-1/5' 
        src='/public/img/logo_best_hotels.png' 
        alt='Logo Best Hotels' 
      />
      <select 
        className='border border-black bg-white' 
        name='languages' 
        id='languages'
        onChange={e => i18n.changeLanguage(e.target.value)}
      >
        <option selected={true} value='es'>ES</option>
        <option value='en'>EN</option>
      </select>
      </motion.header>
    ) : (
      <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}  
        className='flex items-center justify-between bg-black p-1'
      >
        <button 
          className='cursor-pointer' 
          onClick={() => navigate(-1)} // Necesario para volver a la página anterior
        >
          <FontAwesomeIcon icon={faChevronLeft} className='text-white text-2xl'/>
        </button>
        <Link to='/'>
          <img 
            className='w-10' 
            src='/public/img/icon_best_hotels.png' 
            alt='Logo Best Hotels' 
          />
        </Link>
      </motion.header>
    )}
    </>
  )
}

export default Header
