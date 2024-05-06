'use server'

import { headers } from 'next/headers'
import type { UrlObject } from 'url'

export interface UseLink {
  href: UrlObject | string
}

export const useLink = (props: UseLink) => {
  const { href } = props

  const pathname = headers().get('x-invoke-path') || ''

  const newHref = () => {
    const locale = pathname.slice(0, 3)

    if (typeof href === 'string') return href[0] === '/' ? `${locale}${href}` : `${locale}/${href}`

    return {
      ...href,
      pathname:
        href.pathname && href.pathname[0] === '/'
          ? `${locale}${href.pathname}`
          : `${locale}/${href.pathname}`
    }
  }

  return { state: { newHref: newHref() } }
}
