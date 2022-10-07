import { MouseEventHandler } from 'react'
import styles from './button.module.scss'

interface IButton {
  children: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
}

export const Button = ({ children, onClick, disabled }: IButton) => {
  return (
    <button
      className={`${styles.button} ${disabled ? styles.disabled : ''}  `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
