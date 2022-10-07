import { Container } from 'components/Container'
import { Header } from 'components/Header'
import { Loader } from 'components/Loader/Loader'
import { UserBlock } from 'components/UserBlock/UserBlock'
import { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { fetchUser } from 'redux/slice/userSlice'
import { GithubError, GithubUser, LocalGithubUser } from 'types'
import { extractLocalUser } from 'utils/extract-local-user'
import { isGithubuser } from 'utils/typeguard'
import { Search } from './components/Search'
import { UserCard } from './components/UserCard'
import { defaultUser } from './mock/index'

export const App: FC = () => {
  return (
    <Container>
      <Header />
      <Search />
      <UserBlock />
    </Container>
  )
}
