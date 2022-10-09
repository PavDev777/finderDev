import React from 'react'
import { UserStat } from '../UserStat'
import { LocalGithubUser } from '../../types'
import { UserTitle } from '../UserTitle'
import { UserInfo } from '../UserInfo'
import styles from './userCard.module.scss'

interface IUserCard extends LocalGithubUser {}

export const UserCard = (props: IUserCard) => (
  <div className={styles.userCard}>
    <img src={props.avatar} alt={props.name} className={styles.avatar} />
    <UserTitle login={props.login} name={props.name} created={props.created} />
    <p className={styles.bio}>{props.bio || 'This profile has no bio'}</p>

    <UserStat
      repos={props.repos}
      followers={props.followers}
      following={props.following}
    />
    <UserInfo
      company={props.company}
      blog={props.blog}
      location={props.location}
      twitter={props.twitter}
    />
  </div>
)
