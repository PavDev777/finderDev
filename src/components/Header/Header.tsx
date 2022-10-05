import { ThemeSwitcher } from 'components/ThemeSwitcher'
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>devfinder</div>
      <ThemeSwitcher />
    </header>
  )
}
