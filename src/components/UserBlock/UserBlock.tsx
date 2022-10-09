import { Loader } from 'components/Loader/Loader'
import { UserCard } from 'components/UserCard'
import { FC } from 'react'
import { useAppSelector } from 'redux/hooks'
import { LocalGithubUser } from '../../types'

export const UserBlock: FC = () => {
  const user = useAppSelector(
    state => state.userReducer.user
  ) as LocalGithubUser
  const loading = useAppSelector(state => state.userReducer.loading)

  return <>{loading ? <Loader /> : user?.avatar && <UserCard {...user} />}</>
}
