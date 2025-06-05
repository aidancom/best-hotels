import { Link } from 'react-router-dom'
import Header from './Header'
import Tours from '../pages/Tours'
import Activities from '../pages/Activities'
import PointsOfInterest from '../pages/PointsOfInterest'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'


const Experience = () => {
  const { t } = useTranslation()
  return (
    <>
    <Header/>
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}   
      className='p-3 space-y-3'
    >
      <h1 className='text-2xl font-medium'>{t('experiencia')}</h1>
      <div className='space-y-3'>
        <img 
          src='../public/img/section_experience.jpg' 
          alt='Experiencias para nuestros clientes' />
        <ul className='pl-10 space-y-2 list-disc'>
          <li>
            <Link 
              to='/experiencia/excursiones' 
              element={<Tours/>}
            >
              <span className='text-[#2d7a58]'>{t('experiencia')}</span>
            </Link>
          </li>
          <li>
            <Link 
              to='/experiencia/actividades' 
              element={<Activities/>}
            >
              <span className='text-[#2d7a58]'>{t('excursiones')}</span>
            </Link>
          </li>
          <li>
            <Link 
              to='/experiencia/puntos-de-interes' 
              element={<PointsOfInterest/>}
            >
              <span className='text-[#2d7a58]'>{t('puntos-de-interes')}</span>
            </Link>
          </li>
        </ul>
      </div>
    </motion.main>
    </>
  )
}

export default Experience
