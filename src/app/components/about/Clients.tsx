'use client'

import { motion } from 'framer-motion'
import { 
  fadeInUp,
  fadeIn, 
  staggerContainer, 
} from '@/utils/animations'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Clients() {
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
          Clients
        </motion.h2>
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center bg-white p-8 rounded-lg shadow-lg"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.img 
            src={`${basePath}/clients/Caudalie.png`} 
            alt="Caudalie" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/Capgemini.png`} 
            alt="Capgemini" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/Boucheron.svg`} 
            alt="Boucheron" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/Buygues-Construction.png`} 
            alt="Buygues Construction" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/BTBusiness-Solution.png`} 
            alt="Buygues Telecom Business Solution" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/Buygues-Energy-Services.png`} 
            alt="Buygues Energy & Services" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/Editions-Lito.png`} 
            alt="Editions Lito" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/Sqli.png`} 
            alt="SQLI" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/Edcon.png`} 
            alt="Edcon" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/Boardmans.avif`} 
            alt="Boardmans - Edcon" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/Edgars.avif`} 
            alt="Edgars - Edcon" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/RedSquare.gif`} 
            alt="Red Square - Edcon" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/Jet.png`} 
            alt="Jet - Edcon" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/CNA.jpg`} 
            alt="CNA - Edcon" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/Mathon.png`} 
            alt="Mathon" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/Sodebo.jpeg`} 
            alt="Sodebo" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/SIA-Home-Fashion.png`} 
            alt="SIA Home Fashion" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/Fostplus.png`} 
            alt="Fostplus" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/McCover.svg`} 
            alt="McCover" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/Ineo.png`} 
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
            src={`${basePath}/clients/Cedeo.png`} 
            alt="Cedeo" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/Siblu.png`} 
            alt="Siblu" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/Victor-Rolf.png`} 
            alt="Victor & Rolf" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/Casanet.jpg`} 
            alt="Casanet" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/Astalift.png`} 
            alt="Astalift - Fujifilm" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/Diac.png`} 
            alt="Diac" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/RCI-Banque.png`} 
            alt="RCI Banque" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/Sogeprom.png`} 
            alt="Sogeprom" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          <motion.img 
            src={`${basePath}/clients/Credit-Agricole.png`} 
            alt="Credit Agricole" 
            className="object-contain mx-auto"
            variants={fadeInUp}
          />
          
        </motion.div>
      </motion.section>
    </>
  )
}
