import { durationMedium, easeMedium } from '@suivante/react'
import { Variants } from 'framer-motion'

export const HeaderVariants: Variants = {
  enter: {
    opacity: 0,
    transition: {
      duration: durationMedium,
      easings: easeMedium
    }
  },
  exit: {
    opacity: 1,
    transition: {
      duration: durationMedium,
      easings: easeMedium
    }
  }
}
