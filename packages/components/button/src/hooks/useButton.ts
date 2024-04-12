import type { ClassName, ReactRef } from '@suivante/react'
import { useDOMRef } from '@suivante/react'
import type { RippleProps } from '@suivante/ripple'
import { useRipple } from '@suivante/ripple'
import classNames from 'classnames'
import type { MouseEvent } from 'react'
import { useCallback } from 'react'

import type { ButtonVariants } from '../styles/buttonStyle'
import { styleConfig } from '../styles/buttonStyle'

export interface UseButton extends ButtonVariants {
  ref?: ReactRef<HTMLButtonElement | null>
  type?: 'button' | 'submit' | 'reset'
  onClick?: (event?: MouseEvent) => void
  className?: ClassName
  isDisableRipple?: boolean
}

export const useButton = (props: UseButton) => {
  const { className, isDisableRipple, type, ref, isLoading, isDisabled, onClick } = props

  const allClassName = classNames(styleConfig(props), className)
  const domRef = useDOMRef(ref)

  const onClickHandler = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      if (isLoading || isDisabled) return
      onClick && onClick()
      domRef.current && onRippleClickHandler(event)
    },
    [isDisableRipple, isLoading, isDisabled, onClick]
  )

  const getButtonProps = useCallback(
    () => ({
      onClick: onClickHandler,
      type: type ?? 'submit',
      className: allClassName
    }),
    [onClickHandler, type, allClassName]
  )

  const { onClick: onRippleClickHandler, onClear: onClearRipple, ripples } = useRipple()
  const getRippleProps = useCallback<() => RippleProps>(
    () => ({ ripples, onClear: onClearRipple }),
    [ripples, onClearRipple]
  )

  return {
    state: {
      domRef,
      isDisabled: isDisabled,
      isLoading: isLoading
    },
    functions: {
      onClick: onClickHandler,
      getButtonProps,
      getRippleProps
    }
  }
}
