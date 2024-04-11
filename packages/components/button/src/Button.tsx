import { memo } from 'react'

import type { UseButton } from './useButton'
import { useButton } from './useButton'

export interface ButtonProps extends UseButton {}

const Button = (props: ButtonProps) => {
  useButton(props)

  return <div>Button</div>
}

export default memo(Button)
