import type { MutableRefObject, Ref, RefObject } from 'react'

export type ReactRef<T> = RefObject<T> | MutableRefObject<T> | Ref<T>

export type ClassName = string | string[]

export type AnyObject<T = any> = { [key: string]: T }
