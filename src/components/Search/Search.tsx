import { FormEvent, useEffect, useState } from 'react'
import { ReactComponent as SearchIcon } from '../../assets/icon-search.svg'
import { useDebounce } from 'usehooks-ts'

import styles from './search.module.scss'
import { Button } from '../Button'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { fetchUser } from 'redux/slice/userSlice'
import { GithubError } from '../../types'

// type FormFields = {
//   username: HTMLInputElement
// }

export const Search = () => {
  const dispatch = useAppDispatch()
  const isUser = useAppSelector(state => state.userReducer.user) as GithubError
  const [clear, setClear] = useState(false)
  const [input, setInput] = useState('')
  const debouncedValue = useDebounce<string>(input, 500)

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setInput('')
  }

  useEffect(() => {
    if (input.trim()) {
      setClear(false)
    } else {
      setClear(true)
    }
    dispatch(fetchUser(debouncedValue))
  }, [debouncedValue, dispatch])

  return (
    <form onSubmit={onSubmitHandler} autoComplete='off'>
      <div className={styles.search}>
        <label htmlFor='search' className={styles.label}>
          <SearchIcon />
        </label>
        <input
          type='text'
          className={styles.textField}
          id='search'
          placeholder='Type github username...'
          value={input}
          onChange={event => setInput(event.target.value)}
        />
        {isUser?.message && (
          <div className={styles.error}>{isUser.message}</div>
        )}
        <Button disabled={clear}>Clear</Button>
      </div>
    </form>
  )
}
