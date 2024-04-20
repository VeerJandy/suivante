import { m } from 'framer-motion'
import { ForwardedRef, forwardRef } from 'react'

import { HeaderVariants } from './HeaderTransitions'
import type { UseHeaderContent } from './useHeaderContent'
import { useHeaderContent } from './useHeaderContent'

interface HeaderContentProps extends UseHeaderContent {}

const HeaderContent = forwardRef((props: HeaderContentProps, ref: ForwardedRef<HTMLDivElement>) => {
  const {
    state: { headerContentProps, isOpen },
    functions: { onSetContent }
  } = useHeaderContent(props)

  return (
    <m.div
      ref={ref}
      animate={props.isHideWhenOpen && isOpen ? 'enter' : 'exit'}
      style={{ pointerEvents: props.isHideWhenOpen && isOpen ? 'none' : 'auto' }}
      variants={HeaderVariants}
      onClick={onSetContent}
      {...headerContentProps}
    >
      {props.children}
    </m.div>
  )
})

HeaderContent.displayName = 'SuivanteUI.HeaderContent'

export default HeaderContent
