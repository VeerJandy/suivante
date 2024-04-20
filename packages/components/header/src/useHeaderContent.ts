import { ClassName, setBodyLock } from '@suivante/react'
import type { HeaderContentVariants } from '@suivante/styles'
import { headerContentStyle } from '@suivante/styles'
import classNames from 'classnames'
import { ReactNode, useCallback } from 'react'
import { useMemo } from 'react'

import { useHeaderContext } from './HeaderContext'

export interface UseHeaderContent extends HeaderContentVariants {
  children?: ReactNode
  className?: ClassName
  content?: ReactNode
  isHideWhenOpen?: boolean
}

export const useHeaderContent = (props: UseHeaderContent) => {
  const {
    state: { isOpen, isMobile, content },
    functions: { setIsOpen, setContent }
  } = useHeaderContext()

  const onSetContent = useCallback(() => {
    if (!props.content) return

    if (isMobile) {
      setContent(isOpen ? null : props.content)
      setIsOpen()
      setBodyLock({
        isLockBody: !isOpen
      })
      return
    }

    if (!isOpen) {
      setContent(props.content)
      setIsOpen()
    }
    if (content === props.content) {
      setContent(null)
      setIsOpen()
      return
    }

    setContent(props.content)
  }, [props.content, isOpen, content, isMobile])

  const headerContentProps = useMemo(
    () => ({
      className: classNames(headerContentStyle(props), props.className)
    }),
    []
  )

  return {
    state: { headerContentProps, isOpen },
    functions: { onSetContent }
  }
}
