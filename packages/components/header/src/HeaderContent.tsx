import { m } from 'framer-motion'
import type { ForwardedRef, ReactNode } from 'react'
import { forwardRef } from 'react'

import { useHeaderContent } from './useHeaderContent'

interface HeaderContentProps {
  children: ReactNode
}

const HeaderContent = forwardRef(
  ({ children }: HeaderContentProps, ref: ForwardedRef<HTMLDivElement>) => {
    const {
      state: { headerContentProps }
    } = useHeaderContent()

    return (
      <m.div ref={ref} {...headerContentProps}>
        {children}
      </m.div>
    )
  }
)

HeaderContent.displayName = 'SuivanteUI.HeaderContent'

export default HeaderContent
