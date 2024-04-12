import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

const solid = {
  default: 'bg-neutral-800 text-white hover:bg-neutral-900',
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  success: 'bg-green-600 text-white hover:bg-green-700',
  warning: 'bg-amber-600 text-white hover:bg-amber-700',
  danger: 'bg-red-800 text-white hover:bg-red-900',
  white: 'bg-white text-slate-900 hover:bg-slate-100'
}

const bordered = {
  default: 'bg-transparent border-neutral-800',
  primary: 'bg-transparent border-blue-600 text-primary',
  success: 'bg-transparent border-green-600 text-success',
  warning: 'bg-transparent border-amber-600 text-warning',
  danger: 'bg-transparent border-red-800 text-danger',
  white: 'bg-transparent border-white'
}

const ghost = {
  default: 'border-neutral-800 text-white hover:!bg-neutral-800',
  primary: 'border-blue-600 text-white hover:!bg-blue-600',
  success: 'border-green-600 text-white hover:!bg-green-600',
  warning: 'border-amber-600 text-white hover:!bg-amber-600',
  danger: 'border-red-800 text-white hover:!bg-red-800',
  white: 'border-white hover:!bg-white'
}

export const buttonStyle = tv({
  base: [
    'tap-highlight-transparent',
    'relative',
    'inline-flex',
    'max-w-fit',
    'items-center',
    'outline-none',
    'box-border',
    'transition-colors',
    'active:scale-[0.97]',
    'transition-transform-colors-opacity',
    'select-none',
    'overflow-hidden'
  ],
  variants: {
    variant: {
      solid: '',
      bordered: 'border-2 bg-transparent',
      ghost: 'border-2 bg-transparent'
    },
    color: {
      default: '',
      primary: '',
      success: '',
      warning: '',
      danger: '',
      white: ''
    },
    size: {
      md: 'px-8 py-1 text-base',
      sm: 'px-6 py-1 text-sm'
    },
    rounded: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      full: 'rounded-full'
    },
    isDisabled: {
      true: 'pointer-events-none bg-opacity-80 text-opacity-50 backdrop-blur-xl'
    },
    isLoading: {
      true: 'pointer-events-none bg-opacity-80 text-opacity-50 backdrop-blur-xl'
    },
    blur: {
      true: 'bg-opacity-80 saturate-[180%] backdrop-blur-xl'
    }
  },
  defaultVariants: {
    variant: 'solid',
    color: 'default',
    size: 'md',
    rounded: 'lg',
    isDisabled: false,
    blur: false
  },
  compoundVariants: [
    // solid / color
    {
      variant: 'solid',
      color: 'default',
      class: solid.default
    },
    {
      variant: 'solid',
      color: 'primary',
      class: solid.primary
    },
    {
      variant: 'solid',
      color: 'success',
      class: solid.success
    },
    {
      variant: 'solid',
      color: 'warning',
      class: solid.warning
    },
    {
      variant: 'solid',
      color: 'danger',
      class: solid.danger
    },
    {
      variant: 'solid',
      color: 'white',
      class: solid.white
    },
    // bordered / color
    {
      variant: 'bordered',
      color: 'default',
      class: bordered.default
    },
    {
      variant: 'bordered',
      color: 'primary',
      class: bordered.primary
    },
    {
      variant: 'bordered',
      color: 'success',
      class: bordered.success
    },
    {
      variant: 'bordered',
      color: 'warning',
      class: bordered.warning
    },
    {
      variant: 'bordered',
      color: 'danger',
      class: bordered.danger
    },
    {
      variant: 'bordered',
      color: 'white',
      class: bordered.white
    },
    // ghost / color
    {
      variant: 'ghost',
      color: 'default',
      class: ghost.default
    },
    {
      variant: 'ghost',
      color: 'primary',
      class: ghost.primary
    },
    {
      variant: 'ghost',
      color: 'success',
      class: ghost.success
    },
    {
      variant: 'ghost',
      color: 'warning',
      class: ghost.warning
    },
    {
      variant: 'ghost',
      color: 'danger',
      class: ghost.danger
    },
    {
      variant: 'ghost',
      color: 'white',
      class: ghost.white
    }
  ]
})

export type ButtonVariants = VariantProps<typeof buttonStyle>
