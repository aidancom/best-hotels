import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import { motion } from 'framer-motion';

const PointsOfInterest = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className='p-3 space-y-3'
      >
        <h1 className='text-2xl font-medium'>{t('puntos-de-interes')}</h1>
        <div className='space-y-3'>
          <img 
            src='../img/section_things_to_see.jpg' 
            alt='Cosas que ver' 
          />
          <div>
            <p className='font-medium'>{t('aeropuerto')}</p>
            <p>{t('desc_aeropuerto')}</p>
            <p className='font-medium'>{t('nucleo_urbano')}</p>
            <p>{t('desc_nucleo_urbano')}</p>
            <p className='font-medium'>{t('playa')}</p>
            <p>{t('desc_playa')}</p>
            <p className='font-medium'>{t('parada_bus')}</p>
            <p>{t('desc_parada_bus')}</p>
          </div>
        </div>
      </motion.main>
    </>
  );
};

export default PointsOfInterest;
