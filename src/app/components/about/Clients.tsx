'use client'

import { motion } from 'framer-motion';
import { basePath } from '@/utils/constants';
import { 
  fadeInUp,
  fadeIn, 
  staggerContainer, 
} from '@/utils/animations';
import { useTranslation } from 'react-i18next';

export default function Clients() {
  const { t, ready } = useTranslation();

  if (!ready) return <p>Loading...</p>;

  return (
    <>
      <motion.section 
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.2 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          {t('common.clients')}
        </motion.h2>
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center bg-white p-8 rounded-lg shadow-lg"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.img 
            src={`${basePath}/clients/Caudalie.webp`} 
            alt="Caudalie" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/Capgemini.webp`} 
            alt="Capgemini" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/Boucheron.webp`} 
            alt="Boucheron" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/Buygues-Construction.webp`} 
            alt="Buygues Construction" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/BTBusiness-Solution.webp`} 
            alt="Buygues Telecom Business Solution" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/Buygues-Energy-Services.webp`} 
            alt="Buygues Energy & Services" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/Editions-Lito.webp`} 
            alt="Editions Lito" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/Sqli.webp`} 
            alt="SQLI" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/Edcon.webp`} 
            alt="Edcon" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/Boardmans.webp`} 
            alt="Boardmans - Edcon" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/Edgars.webp`} 
            alt="Edgars - Edcon" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/RedSquare.webp`} 
            alt="Red Square - Edcon" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/Jet.webp`} 
            alt="Jet - Edcon" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/CNA.webp`} 
            alt="CNA - Edcon" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/Mathon.webp`} 
            alt="Mathon" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/Sodebo.webp`} 
            alt="Sodebo" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/SIA-Home-Fashion.webp`} 
            alt="SIA Home Fashion" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/Fostplus.webp`} 
            alt="Fostplus" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/McCover.webp`} 
            alt="McCover" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/Ineo.webp`} 
            alt="Ineo" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/Visaudio.webp`} 
            alt="Visaudio" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/Saint-Gobain.webp`} 
            alt="Saint Gobain" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/Socodei.webp`} 
            alt="Socodei" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          {/* <motion.img 
            src={`${basePath}/clients/Cedeo.webp`} 
            alt="Cedeo" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/Siblu.webp`} 
            alt="Siblu" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          /> */}
          <motion.img 
            src={`${basePath}/clients/Victor-Rolf.webp`} 
            alt="Victor & Rolf" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/Casanet.webp`} 
            alt="Casanet" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/Astalift.webp`} 
            alt="Astalift - Fujifilm" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/Diac.webp`} 
            alt="Diac" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/RCI-Banque.webp`} 
            alt="RCI Banque" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/Sogeprom.webp`} 
            alt="Sogeprom" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/Credit-Agricole.webp`} 
            alt="Credit Agricole" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          
        </motion.div>
      </motion.section>
    </>
  )
}
