'use client'

import { isBrowser } from './functions'

interface SetBodyLock {
  isLockBody?: boolean
  isLockHeader?: boolean
}

const PADDING = '0.375rem'

const isBodyScrollHeightMoreWindow = () => {
  const { body } = document
  const match = matchMedia('(max-width: 768px)')
  if (match.matches) return false
  return body.scrollHeight > window.innerHeight
}

const bodyLock = (isLockBody?: boolean) => {
  const { body } = document
  const isAddPaddingToBody = isBodyScrollHeightMoreWindow()

  if (isLockBody) {
    body.style.overflow = 'hidden'
    body.style.touchAction = 'none'
    body.style.overscrollBehavior = 'none'

    if (isAddPaddingToBody) body.style.paddingRight = PADDING
    return
  }
  if (isLockBody === false) {
    body.style.overflow = ''
    body.style.touchAction = ''
    body.style.overscrollBehavior = ''

    if (isAddPaddingToBody) body.style.paddingRight = ''
    return
  }
}
const headerLock = (isLockHeader?: boolean) => {
  const header = document.querySelector('header')
  if (!header || !isBodyScrollHeightMoreWindow()) return

  if (isLockHeader) {
    header.style.paddingRight = PADDING
    return
  }
  if (isLockHeader === false) {
    header.style.paddingRight = ''
    return
  }
}

export const setBodyLock = ({ isLockBody, isLockHeader }: SetBodyLock) => {
  if (!isBrowser) return

  bodyLock(isLockBody)
  headerLock(isLockHeader)
}
