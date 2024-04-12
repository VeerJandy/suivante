import { Ripple } from '@suivante/ripple'
import { Spinner } from '@suivante/spinner'
import { AnimatePresence } from 'framer-motion'
import type { ReactNode } from 'react'
import React from 'react'
import { memo } from 'react'

import type { UseButton } from './useButton'
import { useButton } from './useButton'

export interface ButtonProps extends UseButton {
  children?: ReactNode
}

const Button = (props: ButtonProps) => {
  const {
    state: { domRef },
    functions: { getButtonProps, getRippleProps }
  } = useButton(props)

  return (
    <button ref={domRef} {...getButtonProps()}>
      <AnimatePresence mode='wait'>{props.isLoading && <Spinner />}</AnimatePresence>
      {props.children}
      {!props.isDisableRipple && <Ripple {...getRippleProps()} />}
    </button>
  )
}

export default memo(Button)
