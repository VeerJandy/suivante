import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export const spinnerStyle = tv({
  slots: {
    wrapper: 'relative flex size-5',
    circle: [
      'w-full',
      'h-full',
      'rounded-full',
      'animate-spin',
      'border-2',
      'border-solid',
      'border-t-transparent',
      'border-l-transparent',
      'border-r-transparent',
      'border-2'
    ]
  },
  variants: {
    color: {
      white: {
        circle: 'border-b-white'
      },
      black: {
        circle: 'border-b-black'
      }
    }
  },
  defaultVariants: {
    color: 'white'
  }
})

export type SpinnerVariants = VariantProps<typeof spinnerStyle>
