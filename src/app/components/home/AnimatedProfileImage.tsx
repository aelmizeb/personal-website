'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';
import { scaleIn } from '@/utils/animations';
import { basePath } from '@/utils/constants';

export default function AnimatedProfileImage() {
  return (
    <motion.div 
      className="flex justify-center items-center mb-4"
      {...scaleIn}
      transition={{ delay: 0.2 }}
    >
      <Image
        src={`${basePath}/profile.webp`}
        alt="Abdellatif EL MIZEB"
        width={100}
        height={100}
        priority
        className="rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary"
      />
    </motion.div>
  )
}
