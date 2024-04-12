import { ClassName } from '@suivante/react'
import type { SpinnerVariants } from '@suivante/styles'
import { spinnerStyle } from '@suivante/styles'
import { useMemo } from 'react'

export interface UseSpinner extends SpinnerVariants {
  className?: ClassName
}

export const useSpinner = (props: UseSpinner) => {
  const allClassName = useMemo(
    () => ({
      wrapper: spinnerStyle(props).wrapper(),
      circle: spinnerStyle(props).circle()
    }),
    [...Object.values(props)]
  )

  return {
    state: {
      className: allClassName
    }
  }
}
