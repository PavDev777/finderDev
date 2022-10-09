import { ThemeSwitcher } from 'components/ThemeSwitcher'
import styles from './Header.module.scss'

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>GitHub user finder</div>
    <ThemeSwitcher />
  </header>
)
