import type { ClassName } from '@suivante/react'
import { setBodyLock } from '@suivante/react'
import type { ReactNode } from 'react'
import { useCallback } from 'react'

import { useHeaderContext } from './HeaderContext'

export interface UseHeaderNavigationItem {
  content?: ReactNode
  children?: ReactNode
  className?: ClassName
  isHideWhenOpen?: boolean
}

export const useHeaderNavigationItem = (props: UseHeaderNavigationItem) => {
  const {
    state: { isOpen, isMobile, content },
    functions: { setIsOpen, setContent }
  } = useHeaderContext()

  const onSetContent = useCallback(() => {
    if (!props.content) {
      setContent(null)
      setIsOpen(false)
      setBodyLock({
        isLockBody: false
      })
      return
    }

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

  return {
    state: { isOpen },
    functions: { onSetContent }
  }
}
