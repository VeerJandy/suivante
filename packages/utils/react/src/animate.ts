export const durationSmall = 0.24
export const durationMedium = 0.422

export const easeMedium = [0.4, 0, 0.6, 1]

export const transition = {
  duration: durationMedium,
  ease: easeMedium
}

interface AnimateVariant {
  variants: {
    hidden: Record<string, string | number | object>
    visible: Record<string, string | number | object>
  }
  initial: string
  animate: string
  exit: string
}

export type AnimateVariantKeys = 'opacity' | 'yAndOpacity' | 'height'

type Variants = Record<AnimateVariantKeys, AnimateVariant>

export const variantsNames = {
  initial: 'hidden',
  animate: 'visible',
  exit: 'hidden'
}

export const variants: Variants = {
  opacity: {
    ...variantsNames,
    variants: {
      hidden: { opacity: 0, transition },
      visible: { opacity: 1, transition }
    }
  },
  yAndOpacity: {
    ...variantsNames,
    variants: {
      hidden: { opacity: 0, y: -8, transition },
      visible: { opacity: 1, y: 0, transition }
    }
  },
  height: {
    ...variantsNames,
    variants: {
      hidden: { height: 0, transition },
      visible: { height: 'auto', transition }
    }
  }
}

export const getVariantWithCustomTransition = (
  key: AnimateVariantKeys,
  { hidden, visible }: Record<'hidden' | 'visible', object>
) => {
  const variant = JSON.parse(JSON.stringify(variants[key]))

  variant.variants.hidden = {
    ...variant.variants.hidden,
    transition: { ...variant.variants.hidden.transition, ...hidden }
  }
  variant.variants.visible = {
    ...variant.variants.visible,
    transition: { ...variant.variants.visible.transition, ...visible }
  }

  return variant
}
