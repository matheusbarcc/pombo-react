import { api } from '@/lib/axios'

import { CreateUserBody } from './create-user'

export async function updateUser({
  name,
  email,
  cpf,
  password,
}: CreateUserBody) {
  await api.put('/user', {
    name,
    email,
    cpf,
    password,
  })
}
