import { appTheme } from '@/stores'

import { useAtom } from 'jotai'
import { useEffect } from 'react'

export const useDark = () => {
  const [theme, setTheme] = useAtom(appTheme)

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = document.documentElement

      if (theme === 'dark') {
        root.style.colorScheme = 'dark'
        root.classList.add('dark')
        root.classList.remove('light')
      } else {
        root.style.colorScheme = 'light'
        root.classList.add('light')
        root.classList.remove('dark')
      }
    }
  }, [theme])

  return { theme, toggleTheme }
}
