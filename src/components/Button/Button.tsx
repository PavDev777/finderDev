import { MouseEventHandler } from 'react'
import styles from './button.module.scss'

interface IButton {
  children: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const Button = ({ children, onClick }: IButton) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  )
}
