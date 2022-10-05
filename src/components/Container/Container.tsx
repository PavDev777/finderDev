import React, { ReactNode, FC } from 'react'
import styles from './container.module.scss'

interface IContainer {
  children: ReactNode
}

export const Container: FC<IContainer> = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}
