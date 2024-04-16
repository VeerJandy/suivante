import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export const headerStyle = tv({
  base: [
    'fixed',
    'top-0',
    'w-full',
    'h-12',
    'z-40',
    'backdrop-saturate-[180%]',
    'backdrop-blur-xl',
    'transition-colors'
  ],
  variants: {
    variant: {
      byTheme: 'bg-white/80 text-gray-950 dark:bg-black/80 dark:text-white',
      light: 'bg-white/80 text-gray-950',
      dark: 'bg-black/80 text-white'
    }
  },
  defaultVariants: {
    variant: 'byTheme'
  }
})

export type HeaderVariants = VariantProps<typeof headerStyle>

export const headerContentStyle = tv({
  slots: {
    wrapper: [
      'container',
      'grid',
      'gap-4',
      'items-center',
      'h-12',
      'grid-cols-2',
      'md:grid-cols-3'
    ],
    left: 'flex h-full items-center justify-start',
    center: 'flex h-full items-center justify-center',
    right: 'flex h-full items-center justify-end'
  }
})
