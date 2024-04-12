export const ThemeConst = {
  Light: 'light',
  Dark: 'dark'
} as const

export type ThemeType = (typeof ThemeConst)[keyof typeof ThemeConst]

export const ThemeKey = 'theme'
