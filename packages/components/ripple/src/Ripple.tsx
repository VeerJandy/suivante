import type { HTMLMotionProps } from 'framer-motion'
import { AnimatePresence, domAnimation, LazyMotion, motion } from 'framer-motion'
import type { CSSProperties, Key } from 'react'
import { memo } from 'react'

import type { RippleType, UseRipple } from './useRipple'

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)

export interface RippleProps extends UseRipple {
  ripples: RippleType[]
  color?: string
  motionProps?: HTMLMotionProps<'span'>
  style?: CSSProperties
  onClear: (key: Key) => void
}

const Ripple = (props: RippleProps) => {
  const { ripples = [], motionProps, color = 'currentColor', style, onClear } = props

  return (
    <>
      {ripples.map(ripple => {
        const duration = clamp(0.01 * ripple.size, 0.2, ripple.size > 100 ? 0.75 : 0.5)

        return (
          <AnimatePresence key={ripple.key} mode='popLayout'>
            <>
              <LazyMotion features={domAnimation}>
                <motion.span
                  animate={{ transform: 'scale(2)', opacity: 0 }}
                  exit={{ opacity: 0 }}
                  initial={{ transform: 'scale(0)', opacity: 0.35 }}
                  style={{
                    position: 'absolute',
                    backgroundColor: color,
                    borderRadius: '100%',
                    transformOrigin: 'center',
                    pointerEvents: 'none',
                    zIndex: 10,
                    top: ripple.y,
                    left: ripple.x,
                    width: `${ripple.size}px`,
                    height: `${ripple.size}px`,
                    ...style
                  }}
                  transition={{ duration }}
                  onAnimationComplete={() => {
                    onClear(ripple.key)
                  }}
                  {...motionProps}
                />
              </LazyMotion>
            </>
          </AnimatePresence>
        )
      })}
    </>
  )
}

export default memo(Ripple)
