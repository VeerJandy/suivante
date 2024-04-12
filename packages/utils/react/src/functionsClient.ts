'use client'

import { Ref, RefObject, useImperativeHandle, useRef } from 'react'

import type { AnyObject } from './models'

export function useDOMRef<T extends HTMLElement = HTMLElement>(
  ref?: RefObject<T | null> | Ref<T | null>
) {
  const domRef = useRef<T>(null)

  useImperativeHandle(ref, () => domRef.current)

  return domRef
}

export function getCookies(): AnyObject<string>
export function getCookies(name: string): string
export function getCookies(name?: string) {
  if (typeof window === 'undefined' || !document || !document.cookie) return ''

  const cookie = document.cookie
  if (!cookie) return ''

  const cookies = cookie.split(';')
  const cookiesObj: AnyObject<string> = cookies.reduce((acc: AnyObject<string>, c) => {
    const [key, value] = c.split('=')
    acc[key.trim()] = value
    return acc
  }, {})

  return name ? cookiesObj[name] : cookiesObj
}
