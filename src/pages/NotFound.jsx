import Header from "../components/Header"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"


const NotFound = () => {
  const {t} = useTranslation()
  return (
    <>
    <Header/>
    <motion.main className="p-3 space-y-5 text-center">
      <h1 className="text-5xl font-medium">{t('404')}</h1>
      <p>{t('404_informacion')}</p>
    </motion.main>
    </>
  )
}

export default NotFound