import { durationSmall, easeMedium } from '@suivante/react'
import { headerContentItemStyle, HeaderContentItemVariants } from '@suivante/styles'
import { m } from 'framer-motion'
import type { ForwardedRef, ReactNode } from 'react'
import { forwardRef } from 'react'

import { useHeaderContext } from './HeaderContext'

interface HeaderContentItemProps extends HeaderContentItemVariants {
  children: ReactNode
  index?: number
  onClick?: (args?: unknown) => unknown
}

const HeaderContentItem = forwardRef(
  (props: HeaderContentItemProps, ref: ForwardedRef<HTMLDivElement>) => {
    const {
      state: { isOpen },
      functions: { setContent, setIsOpen }
    } = useHeaderContext()

    const onClick = () => {
      setContent(null)
      setIsOpen()
      props.onClick?.()
    }

    return (
      <m.div
        ref={ref}
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{
          delay: isOpen ? 0.2 + (props.index ?? 0) * 0.02 : 0,
          duration: durationSmall,
          ease: easeMedium
        }}
        className={headerContentItemStyle(props)}
        onClick={onClick}
      >
        {props.children}
      </m.div>
    )
  }
)

HeaderContentItem.displayName = 'SuivanteUI.HeaderContentItem'

export default HeaderContentItem
