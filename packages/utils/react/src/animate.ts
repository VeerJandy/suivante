interface AnimateVariant {
  variants: Record<string, object>
  initial: string
  animate: string
  exit: string
}

export type AnimateVariantKeys = 'opacity' | 'xAndOpacity' | 'yAndOpacity' | 'height'

type Variants = Record<AnimateVariantKeys, AnimateVariant>

export const variants: Variants = {
  opacity: {
    variants: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    initial: 'hidden',
    animate: 'visible',
    exit: 'hidden'
  },
  xAndOpacity: {
    variants: {
      hidden: { opacity: 0, x: 25 },
      visible: { opacity: 1, x: 0 }
    },
    initial: 'hidden',
    animate: 'visible',
    exit: 'hidden'
  },
  yAndOpacity: {
    variants: {
      hidden: { opacity: 0, y: 25 },
      visible: { opacity: 1, y: 0 }
    },
    initial: 'hidden',
    animate: 'visible',
    exit: 'hidden'
  },
  height: {
    variants: {
      hidden: { height: 0 },
      visible: { height: 'auto' }
    },
    initial: 'hidden',
    animate: 'visible',
    exit: 'hidden'
  }
}

export const durationSmall = 0.24
export const durationMedium = 0.422

export const easeMedium = [0.4, 0, 0.6, 1]
