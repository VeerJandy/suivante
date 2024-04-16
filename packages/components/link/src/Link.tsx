import NextLink from 'next/link'
import type { ReactNode } from 'react'
import { memo } from 'react'

import type { UseLink } from './useLink'
import { useLink } from './useLink'

interface LinkProps extends UseLink {
  children: ReactNode
}

const Link = (props: LinkProps) => {
  const {
    state: { newHref }
  } = useLink(props)

  return <NextLink href={newHref}>{props.children}</NextLink>
}

export default memo(Link)
