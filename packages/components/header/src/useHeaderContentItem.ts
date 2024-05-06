import { getVariantWithCustomTransition } from '@suivante/react'
import { headerSlotStyle } from '@suivante/styles'
import { useMemo } from 'react'

export interface UseHeaderContentItem {
  index: number
  onClick?: (args?: unknown) => unknown
}

export const useHeaderContentItem = (props: UseHeaderContentItem) => {
  const { onClick, index } = props

  const headerContentItemProps = useMemo(
    () => ({
      ...getVariantWithCustomTransition('yAndOpacity', {
        hidden: {
          delay: 0
        },
        visible: {
          delay: 0.2 + (index ?? 0) * 0.02
        }
      }),
      className: headerSlotStyle().contentItem(),
      onClick
    }),
    []
  )

  return {
    state: { headerContentItemProps }
  }
}
