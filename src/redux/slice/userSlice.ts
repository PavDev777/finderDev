import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from 'redux/store'
import { GithubError, GithubUser, LocalGithubUser } from 'types'
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
        return user
      }
    } else {
      return null
    }
  }
)

interface IUserState {
  user: LocalGithubUser | GithubError | null
  loading: boolean
}

const initialState: IUserState = {
  user: null,
  loading: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUser.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(fetchUser.fulfilled, (state, { payload }) => {
      state.user = payload
      state.loading = false
    })
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = true
    })
  }
})

export const users = (state: RootState) => state.userReducer.user

export default userSlice.reducer
