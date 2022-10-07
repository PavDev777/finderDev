import React, { ReactNode } from 'react'
import styles from './infoitem.module.scss'

export interface IInfoItem {
  icon: ReactNode
  text?: string | null
  isLink?: boolean
}

export const InfoItem = ({ icon, text, isLink }: IInfoItem) => {
  const texCurrent = text || 'Not Available'
  let currentLink = ''

  if (isLink) {
    currentLink = text && text.startsWith('http') ? text : `https://${text}`
  }

  return (
    <div className={`${styles.infoItem}${text ? '' : ` ${styles.empty}`}`}>
      {icon}
      <div>
        {isLink && text ? (
          <a
            href={currentLink}
            target='_blank'
            rel='noreferrer'
            className={styles.infoItemLink}
          >
            {texCurrent}
          </a>
        ) : (
          texCurrent
        )}
      </div>
    </div>
  )
}
