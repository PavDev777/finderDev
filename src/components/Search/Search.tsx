import { FormEvent } from 'react'
import { ReactComponent as SearchIcon } from '../../assets/icon-search.svg'

import styles from './search.module.scss'
import { Button } from '../Button'

interface ISearch {
  hasError: boolean
  onSubmit: (text: string) => void
}

type FormFields = {
  username: HTMLInputElement
}

export const Search = ({ hasError, onSubmit }: ISearch) => {
  const onSubmitHandler = (event: FormEvent<HTMLFormElement & FormFields>) => {
    event.preventDefault()
    const text = event.currentTarget.username.value

    if (text) {
      onSubmit(text)
      event.currentTarget.reset()
    }
  }

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
          name='username'
          placeholder='Type username in github'
        />
        {hasError && <div className={styles.error}>No result</div>}
        <Button>Search</Button>
      </div>
    </form>
  )
}
