import React from 'react'
import { LocalGithubUser } from '../../types'

import styled from './userTitle.module.scss'

interface IUserTitle
  extends Pick<LocalGithubUser, 'login' | 'created' | 'name'> {}

const localDate = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric'
})

export const UserTitle = ({ login, created, name }: IUserTitle) => {
  const userJoinedDate = localDate.format(new Date(created))

  return (
    <div className={styled.userTitle}>
      <div className={styled.userNameJoin}>
        <h2>{name}</h2>
        <span>{userJoinedDate}</span>
      </div>
      <h3>{login}</h3>
    </div>
  )
}
