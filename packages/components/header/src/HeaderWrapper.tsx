'use client'

import { useMobile } from '@suivante/react'

import HeaderDesktop from './desktop/HeaderDesktop'
import type { HeaderProps } from './Header'
import HeaderMobile from './mobile/HeaderMobile'

interface HeaderWrapperProps extends HeaderProps {
  isMobileServer: boolean
}

const HeaderWrapper = (props: HeaderWrapperProps) => {
  const isMobile = useMobile()

  if (isMobile === null)
    return props.isMobileServer ? (
      <HeaderMobile {...props}>{props.children}</HeaderMobile>
    ) : (
      <HeaderDesktop {...props}>{props.children}</HeaderDesktop>
    )

  return isMobile ? (
    <HeaderMobile {...props}>{props.children}</HeaderMobile>
  ) : (
    <HeaderDesktop {...props}>{props.children}</HeaderDesktop>
  )
}

export default HeaderWrapper
