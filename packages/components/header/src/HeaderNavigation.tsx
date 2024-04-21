import { headerNavigationStyle, HeaderNavigationVariants } from '@suivante/styles'
import { ReactNode } from 'react'

interface HeaderNavigationProps extends HeaderNavigationVariants {
  children: ReactNode
}

const HeaderNavigation = (props: HeaderNavigationProps) => (
  <div className={headerNavigationStyle(props)}>{props.children}</div>
)

HeaderNavigation.displayName = 'SuivanteUI.HeaderNavigation'

export default HeaderNavigation
