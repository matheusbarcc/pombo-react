import { api } from '@/lib/axios'

export interface SignInBody {
  email: string
  password: string
}

export interface SignInResponse {
  token: string
}

export async function signIn({ email, password }: SignInBody) {
  const encodedCredentials = btoa(`${email}:${password}`)

  const response = await api.post(
    '/auth/authenticate',
    {},
    {
      headers: {
        Authorization: `Basic ${encodedCredentials}`,
      },
    },
  )

  return response.data
}
