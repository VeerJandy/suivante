import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion'
import { memo } from 'react'

import { HeaderProvider } from './HeaderContext'
import type { UseHeader } from './useHeader'
import { useHeader } from './useHeader'

export interface HeaderProps extends UseHeader {}

const Header = (props: HeaderProps) => {
  const { children } = props
  const context = useHeader(props)

  return (
    <HeaderProvider value={context}>
      <LazyMotion features={domAnimation} strict>
        <m.header {...context.state.headerProps}>
          <div {...context.state.headerWrapperProps}>{children}</div>
          <m.div {...context.state.headerContentProps}>
            <AnimatePresence mode='wait'>{context.state.content}</AnimatePresence>
          </m.div>
        </m.header>
      </LazyMotion>
    </HeaderProvider>
  )
}

Header.displayName = 'SuivanteUI.Header'

export default memo(Header)
