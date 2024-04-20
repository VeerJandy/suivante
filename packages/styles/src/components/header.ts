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

export const headerSlotsStyle = tv({
  slots: {
    wrapper: ['container', 'flex', 'gap-4', 'h-12'],
    burger: ['z-40', 'relative', 'md:hidden', 'flex', 'size-12', 'items-center', 'justify-center']
  }
})

export const headerContentStyle = tv({
  base: ['flex flex-1', 'items-center', 'h-12', 'gap-4'],
  variants: {
    justify: {
      center: 'justify-center',
      end: 'justify-end',
      start: 'justify-start'
    }
  },
  defaultVariants: {
    justify: 'start'
  }
})

export type HeaderContentVariants = VariantProps<typeof headerContentStyle>
