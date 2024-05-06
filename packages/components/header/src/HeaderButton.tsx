import { m } from 'framer-motion'
import type { ReactNode } from 'react'

import type { UseHeaderButton } from './useHeaderButton'
import { useHeaderButton } from './useHeaderButton'

export interface HeaderButtonProps extends UseHeaderButton {
  children: ReactNode
}

const HeaderButton = (props: HeaderButtonProps) => {
  const { children } = props

  const {
    state: { headerButtonProps }
  } = useHeaderButton(props)

  return <m.div {...headerButtonProps}>{children}</m.div>
}

HeaderButton.displayName = 'SuivanteUI.HeaderButton'

export default HeaderButton
