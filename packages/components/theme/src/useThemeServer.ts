'use server'

import { cookies } from 'next/headers'

import type { ThemeType } from './ThemeConst'
import { ThemeKey } from './ThemeConst'

interface GetThemeServer {
  defaultTheme: ThemeType
}

export const useGetThemeServer = ({ defaultTheme }: GetThemeServer) =>
  cookies()?.get(ThemeKey)?.value ?? defaultTheme

export const useSetThemeServer = async (theme: ThemeType) => {
  cookies().set(ThemeKey, theme, { path: '/' })
  return null
}
