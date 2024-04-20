import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion'
import { memo } from 'react'

import { HeaderProvider } from './HeaderContext'
import type { UseHeader } from './useHeader'
import { useHeader } from './useHeader'

export interface HeaderProps extends UseHeader {}

const Header = (props: HeaderProps) => {
  const context = useHeader(props)

  return (
    <HeaderProvider value={context}>
      <LazyMotion features={domAnimation}>
        <m.header {...context.state.headerProps}>
          <div {...context.state.headerWrapperProps}>{props.children}</div>
          <AnimatePresence mode='popLayout'>
            {context.state.isOpen && context.state.content}
          </AnimatePresence>
        </m.header>
      </LazyMotion>
    </HeaderProvider>
  )
}

Header.displayName = 'SuivanteUI.Header'

export default memo(Header)
