import { Container } from 'components/Container'
import { Header } from 'components/Header'
import { UserBlock } from 'components/UserBlock/UserBlock'
import { FC } from 'react'
import { Search } from './components/Search'

export const App: FC = () => {
  return (
    <Container>
      <Header />
      <Search />
      <UserBlock />
    </Container>
  )
}
