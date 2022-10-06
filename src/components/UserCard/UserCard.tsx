import React from 'react'
import { UserStat } from '../UserStat'
import styles from './userCard.module.scss'
import { LocalGithubUser } from '../../types'

interface IUserCard extends LocalGithubUser {}

export const UserCard = (props: IUserCard) => {
  const { repos, following, followers } = props

  return (
    <div className={styles.userCard}>
      <UserStat repos={repos} followers={followers} following={following} />
    </div>
  )
}
