import { memo } from 'react'

import type { UseSpinner } from './useSpinner'
import { useSpinner } from './useSpinner'

export interface SpinnerProps extends UseSpinner {}

const Spinner = (props: SpinnerProps) => {
  useSpinner(props)
  console.log('Spinner')

  return <div>Spinner</div>
}

export default memo(Spinner)
