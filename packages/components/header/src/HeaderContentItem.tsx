import { m } from 'framer-motion'
import type { ForwardedRef, ReactNode } from 'react'
import { forwardRef } from 'react'

import type { UseHeaderContentItem } from './useHeaderContentItem'
import { useHeaderContentItem } from './useHeaderContentItem'

interface HeaderContentItemProps extends UseHeaderContentItem {
  children: ReactNode
}

const HeaderContentItem = forwardRef(
  (props: HeaderContentItemProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { children } = props

    const {
      state: { headerContentItemProps }
    } = useHeaderContentItem(props)

    return (
      <m.div ref={ref} {...headerContentItemProps}>
        {children}
      </m.div>
    )
  }
)

HeaderContentItem.displayName = 'SuivanteUI.HeaderContentItem'

export default HeaderContentItem
