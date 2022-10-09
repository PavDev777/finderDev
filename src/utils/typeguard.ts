import { GithubError, GithubUser } from 'types'

export const isGithubuser = (user: any): user is GithubUser => 'id' in user
