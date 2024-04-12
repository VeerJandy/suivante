'use client'

import { memo } from 'react'

import type { UseButton } from './useButton'
import { useButton } from './useButton'

export interface ButtonProps extends UseButton {}

const Button = (props: ButtonProps) => {
  useButton(props)
  console.log('Button')

  const onClick = () => {
    console.log('click')
  }

  return <div onClick={onClick}>Button</div>
}

export default memo(Button)
