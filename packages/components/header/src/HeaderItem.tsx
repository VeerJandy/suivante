import type { HeaderItemVariants } from '@suivante/styles'
import { headerItemStyle } from '@suivante/styles'
import type { ReactNode } from 'react'

interface HeaderItemProps extends HeaderItemVariants {
  children: ReactNode
}

const HeaderItem = (props: HeaderItemProps) => (
  <div className={headerItemStyle(props)}>{props.children}</div>
)

export default HeaderItem
