import { m } from 'framer-motion'
import type { ForwardedRef } from 'react'
import { forwardRef } from 'react'

import { HeaderVariants } from './HeaderTransitions'
import type { UseHeaderNavigationItem } from './useHeaderNavigationItem'
import { useHeaderNavigationItem } from './useHeaderNavigationItem'

interface HeaderNavigationItemProps extends UseHeaderNavigationItem {}

const HeaderNavigationItem = forwardRef(
  (props: HeaderNavigationItemProps, ref: ForwardedRef<HTMLDivElement>) => {
    const {
      state: { isOpen },
      functions: { onSetContent }
    } = useHeaderNavigationItem(props)

    return (
      <m.div
        ref={ref}
        role='button'
        animate={props.isHideWhenOpen && isOpen ? 'enter' : 'exit'}
        style={{ pointerEvents: props.isHideWhenOpen && isOpen ? 'none' : 'auto' }}
        variants={HeaderVariants}
        onClick={onSetContent}
        onMouseEnter={onSetContent}
      >
        {props.children}
      </m.div>
    )
  }
)

HeaderNavigationItem.displayName = 'SuivanteUI.HeaderNavigationItem'

export default HeaderNavigationItem
