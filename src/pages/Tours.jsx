import Header from '../components/Header'
import { motion } from 'framer-motion'

const Tours = () => {
  return (
    <>
    <Header/>
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }} 
      className='p-3 space-y-5'
    >
      <div className='flex justify-center'>
        <img 
          src='../public/img/under_construction.png' 
          alt='En construccón' 
          className='w-full md:w-1/3' 
        />
      </div>
    </motion.main>
    </>
  )
}

export default Tours