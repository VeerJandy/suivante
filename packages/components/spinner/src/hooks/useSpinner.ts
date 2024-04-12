import { ClassName } from '@suivante/react'
import { useMemo } from 'react'

import type { SpinnerVariants } from '../styles/spinnerStyle'
import { styleConfig } from '../styles/spinnerStyle'

export interface UseSpinner extends SpinnerVariants {
  className?: ClassName
}

export const useSpinner = (props: UseSpinner) => {
  const allClassName = useMemo(() => styleConfig(props), [...Object.values(props)])

  return {
    state: {
      className: allClassName
    }
  }
}
