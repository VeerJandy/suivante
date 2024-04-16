'use server'

import { headers } from 'next/headers'
import { userAgent } from 'next/server'

export const getUniqueID = (prefix: string) => `${prefix}-${Math.floor(Math.random() * 1000000)}`

/** Hook return isMobile. Work only server side */
export const getIsMobileServer = (): boolean => {
  const { device } = userAgent({ headers: headers() })
  return device.type === 'mobile'
}
