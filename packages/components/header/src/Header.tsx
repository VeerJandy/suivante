'use server'

import { getIsMobileServer } from '@suivante/react'
import type { ReactNode } from 'react'
import { memo } from 'react'

import HeaderWrapper from './HeaderWrapper'

export interface HeaderProps {
  children: ReactNode
}

const Header = (props: HeaderProps) => {
  const isMobile = getIsMobileServer()

  return (
    <HeaderWrapper isMobileServer={isMobile} {...props}>
      {props.children}
    </HeaderWrapper>
  )
}

export default memo(Header)
