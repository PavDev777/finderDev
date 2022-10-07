import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from 'redux/store'
import { GithubError, GithubUser, LocalGithubUser } from 'types'
import { defaultUser } from 'mock'
import { isGithubuser } from 'utils/typeguard'
import { extractLocalUser } from 'utils/extract-local-user'

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (username: string) => {
    if (username) {
      const response = await fetch(`https://api.github.com/users/${username}`)
      const user = (await response.json()) as GithubUser | GithubError
      if (isGithubuser(user)) {
        return extractLocalUser(user)
      } else {
        return null
      }
    } else {
      return null
    }
  }
)

interface IUserState {
  user: LocalGithubUser | null
  error: boolean
  loading: boolean
}

const initialState: IUserState = {
  user: null,
  error: false,
  loading: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUser.pending, state => {
      state.loading = true
      state.error = false
    })
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload
      state.error = false
      state.loading = false
    })
    builder.addCase(fetchUser.rejected, state => {
      state.error = true
      state.loading = true
    })
  }
})

export const {} = userSlice.actions

export const users = (state: RootState) => state.user.user

export default userSlice.reducer
