import { useEffect, useState } from 'react'
import { ReactComponent as MoonIcon } from 'assets/icon-moon.svg'
import { ReactComponent as SunIcon } from 'assets/icon-sun.svg'

import styles from './ThemeSwitcher.module.scss'

export const ThemeSwitcher = () => {
  const storageTheme: boolean = JSON.parse(
    String(localStorage.getItem('theme'))
  )

  const [isDark, setIsDark] = useState(storageTheme)
  const themeText = isDark ? 'Light' : 'Dark'
  const ThemeIcon = isDark ? SunIcon : MoonIcon

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light')
    localStorage.setItem('theme', JSON.stringify(isDark))
  }, [isDark])

  return (
    <div className={styles.themeSwitcher} onClick={() => setIsDark(!isDark)}>
      <span>{themeText}</span>
      <ThemeIcon className={styles.icon} />
    </div>
  )
}
