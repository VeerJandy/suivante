import { getUniqueID } from '@suivante/react'
import type { Key, MouseEvent } from 'react'
import { useCallback, useState } from 'react'

export type RippleType = {
  key: Key
  x: number
  y: number
  size: number
}

export interface UseRipple {}

export const useRipple = (props?: UseRipple) => {
  const [ripples, setRipples] = useState<RippleType[]>([])

  const onClick = useCallback((event: MouseEvent<HTMLElement>) => {
    const trigger = event.currentTarget

    const size = Math.max(trigger.clientWidth, trigger.clientHeight)
    const rect = trigger.getBoundingClientRect()

    setRipples(prevRipples => [
      ...prevRipples,
      {
        key: getUniqueID(prevRipples.length.toString()),
        size,
        x: event.clientX - rect.x - size / 2,
        y: event.clientY - rect.y - size / 2
      }
    ])
  }, [])

  const onClear = useCallback((key: Key) => {
    setRipples(prevState => prevState.filter(ripple => ripple.key !== key))
  }, [])

  return { ripples, onClick, onClear, ...props }
}
