import { headerSlotsStyle } from '@suivante/styles'
import { useEffect, useRef, useState } from 'react'

import { useHeaderContext } from './HeaderContext'
import HeaderNavigationItem from './HeaderNavigationItem'
import type { UseHeaderNavigationItem } from './useHeaderNavigationItem'

interface HeaderBurgerProps extends UseHeaderNavigationItem {}

const HeaderBurger = (props: HeaderBurgerProps) => {
  const {
    state: { isOpen }
  } = useHeaderContext()

  const [isFirstRender, setIsFirstRender] = useState(true)
  const bottomOpen = useRef<SVGAnimationElement>(null)
  const bottomClose = useRef<SVGAnimationElement>(null)
  const topOpen = useRef<SVGAnimationElement>(null)
  const topClose = useRef<SVGAnimationElement>(null)

  useEffect(() => {
    if (!isFirstRender) {
      if (isOpen) {
        topOpen.current?.beginElement()
        bottomOpen.current?.beginElement()
      } else {
        bottomClose.current?.beginElement()
        topClose.current?.beginElement()
      }
    } else {
      setIsFirstRender(() => false)
    }
  }, [isOpen])

  return (
    <HeaderNavigationItem {...props}>
      <div className={headerSlotsStyle(props).burger()}>
        <svg width='18' height='18' viewBox='0 0 18 18'>
          <polyline
            fill='none'
            stroke='currentColor'
            strokeWidth='1.2'
            strokeLinecap='round'
            strokeLinejoin='round'
            points='2 12, 16 12'
          >
            <animate
              ref={bottomOpen}
              attributeName='points'
              keyTimes='0;0.5;1'
              dur='0.24s'
              begin='indefinite'
              fill='freeze'
              calcMode='spline'
              keySplines='0.42, 0, 1, 1;0, 0, 0.58, 1'
              values=' 2 12, 16 12; 2 9, 16 9; 3.5 15, 15 3.5'
            />
            <animate
              ref={bottomClose}
              attributeName='points'
              keyTimes='0;0.5;1'
              dur='0.24s'
              begin='indefinite'
              fill='freeze'
              calcMode='spline'
              keySplines='0.42, 0, 1, 1;0, 0, 0.58, 1'
              values=' 3.5 15, 15 3.5; 2 9, 16 9; 2 12, 16 12'
            />
          </polyline>
          <polyline
            fill='none'
            stroke='currentColor'
            strokeWidth='1.2'
            strokeLinecap='round'
            strokeLinejoin='round'
            points='2 5, 16 5'
          >
            <animate
              ref={topOpen}
              attributeName='points'
              keyTimes='0;0.5;1'
              dur='0.24s'
              begin='indefinite'
              fill='freeze'
              calcMode='spline'
              keySplines='0.42, 0, 1, 1;0, 0, 0.58, 1'
              values=' 2 5, 16 5; 2 9, 16 9; 3.5 3.5, 15 15'
            />
            <animate
              ref={topClose}
              attributeName='points'
              keyTimes='0;0.5;1'
              dur='0.24s'
              begin='indefinite'
              fill='freeze'
              calcMode='spline'
              keySplines='0.42, 0, 1, 1;0, 0, 0.58, 1'
              values=' 3.5 3.5, 15 15; 2 9, 16 9; 2 5, 16 5'
            />
          </polyline>
        </svg>
      </div>
    </HeaderNavigationItem>
  )
}

HeaderBurger.displayName = 'SuivanteUI.HeaderBurger'

export default HeaderBurger
