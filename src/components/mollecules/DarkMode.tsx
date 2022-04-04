import { Moon } from '@/components/atoms/Moon'
import { Sun } from '@/components/atoms/Sun'

import { useDark } from '@/hooks/useDark'

import clsx from 'clsx'

export const DarkMode: React.FunctionComponent = () => {
  const { theme, toggleTheme } = useDark()
  return (
    <button
      className={clsx(
        'inline-flex p-2 rounded-lg transition',
        'bg-theme-2 dark:bg-theme-3 hover:bg-theme-2/80 dark:hover:bg-theme-3/50',
        theme === 'dark' ? 'text-yellow-500' : 'text-theme-4'
      )}
      onClick={toggleTheme}
    >
      {theme === 'dark' ? <Moon /> : <Sun />}
    </button>
  )
}
