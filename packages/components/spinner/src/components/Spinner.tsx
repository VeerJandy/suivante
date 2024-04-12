import classNames from 'classnames'
import { motion } from 'framer-motion'
import { memo } from 'react'

import type { UseSpinner } from '../hooks/useSpinner'
import { useSpinner } from '../hooks/useSpinner'

export interface SpinnerProps extends UseSpinner {}

const Spinner = (props: SpinnerProps) => {
  const {
    state: { className }
  } = useSpinner(props)

  return (
    <motion.div
      initial={{ width: 0, opacity: 0, marginRight: 0 }}
      animate={{ width: '', opacity: 1, marginRight: 8 }}
      exit={{ width: 0, opacity: 0, marginRight: 0 }}
      className={classNames(className.wrapper(), props.className)}
    >
      <i className={className.circle()} />
    </motion.div>
  )
}

export default memo(Spinner)
