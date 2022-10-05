import { FC } from 'react'

interface IApp {
  children: React.ReactNode
}

export const App: FC<IApp> = ({ children }) => {
  return <div>React Application</div>
}
