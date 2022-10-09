import React, { ReactNode, FC } from 'react'
import styles from './container.module.scss'

interface IContainer {
  children: ReactNode
}

export const Container: FC<IContainer> = ({ children }) => (
  <div className={styles.container}>{children}</div>
)
