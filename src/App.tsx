import { Container } from 'components/Container'
import { Header } from 'components/Header'
import { FC } from 'react'
import { Search } from './components/Search'
import { UserCard } from './components/UserCard'
import { defaultUser } from './mock/index'

export const App: FC = () => {
  return (
    <Container>
      <Header />
      <Search hasError onSubmit={() => {}} />
      <UserCard {...defaultUser} />
    </Container>
  )
}
