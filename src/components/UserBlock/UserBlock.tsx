import { Loader } from 'components/Loader/Loader'
import { UserCard } from 'components/UserCard'
import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { fetchUser } from 'redux/slice/userSlice'

export const UserBlock: FC = () => {
  const user = useAppSelector(state => state.user.user)
  const loading = useAppSelector(state => state.user.loading)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchUser('pavdev777'))
  }, [dispatch])

  return <>{loading ? <Loader /> : user && <UserCard {...user} />}</>
}
