import { FormEvent, useEffect, useState } from 'react'
import { ReactComponent as SearchIcon } from '../../assets/icon-search.svg'
import { useDebounce } from 'usehooks-ts'

import styles from './search.module.scss'
import { Button } from '../Button'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { fetchUser } from 'redux/slice/userSlice'

// type FormFields = {
//   username: HTMLInputElement
// }

export const Search = () => {
  const dispatch = useAppDispatch()
  const isUser = useAppSelector(state => state.user.user)
  const [message, setMessage] = useState(false)
  const [input, setInput] = useState('')
  const debouncedValue = useDebounce<string>(input, 500)

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // const text = event.currentTarget.username.value

    if (input.trim()) {
      dispatch(fetchUser(input))
      // event.currentTarget.reset()
      setInput('')
    }
  }

  useEffect(() => {
    if (debouncedValue.trim()) {
      setMessage(false)
    } else {
      setMessage(true)
    }
    dispatch(fetchUser(debouncedValue))
  }, [debouncedValue])

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
          placeholder='Type username in github'
          value={input}
          onChange={event => setInput(event.target.value)}
        />
        {!isUser && <div className={styles.error}>No result</div>}
        <Button disabled={message}>Search</Button>
      </div>
    </form>
  )
}
