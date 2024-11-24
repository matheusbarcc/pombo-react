import { api } from '@/lib/axios'

export interface CreateUserBody {
  name: string
  email: string
  cpf: string
  password: string
}

export async function createUser({
  name,
  email,
  cpf,
  password,
}: CreateUserBody) {
  await api.post('/auth/register', {
    name,
    email,
    cpf,
    password,
  })
}
