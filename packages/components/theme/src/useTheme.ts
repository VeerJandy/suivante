'use client'

import { getCookies } from '@suivante/react'

import type { ThemeType } from './ThemeConst'
import { ThemeKey } from './ThemeConst'
import { useSetThemeServer } from './useThemeServer'

export const useTheme = () => {
  const theme = getCookies(ThemeKey)

  const setTheme = async (theme: ThemeType) => await useSetThemeServer(theme)

  return {
    theme,
    setTheme
  }
}
