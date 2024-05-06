import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

const headerHeight = 'h-12'

export const headerStyle = tv({
  base: [
    'fixed',
    'top-0',
    'w-full',
    headerHeight,
    'z-40',
    'backdrop-saturate-[180%]',
    'backdrop-blur-xl',
    'transition-colors',
    'duration-[422ms]',
    'overflow-hidden'
  ],
  variants: {
    variant: {
      byTheme:
        'bg-white/80 text-gray-950 data-[open=true]:bg-white dark:bg-black/80 dark:text-white dark:data-[open=true]:bg-zinc-900',
      light: 'bg-white/80 text-gray-950 data-[open=true]:bg-white',
      dark: 'bg-black/80 text-white data-[open=true]:bg-zinc-900'
    }
  },
  defaultVariants: {
    variant: 'byTheme'
  }
})

export type HeaderVariants = VariantProps<typeof headerStyle>

export const headerSlotStyle = tv({
  slots: {
    wrapper: `flex md:container`,
    button: `${headerHeight} flex min-w-12 cursor-pointer items-center justify-center`,
    content: 'container py-4',
    contentItem: 'cursor-pointer px-12 py-3 text-3xl font-semibold md:py-1 md:text-xl'
  }
})

export const headerItemStyle = tv({
  base: ['flex', 'flex-1', 'gap-0', 'md:gap-4'],
  variants: {
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end'
    }
  },
  defaultVariants: {
    justify: 'start'
  }
})

export type HeaderItemVariants = VariantProps<typeof headerItemStyle>
