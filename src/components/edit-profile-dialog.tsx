import { useMutation, useQuery } from '@tanstack/react-query'
import { Check } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { getAuthenticatedUser } from '@/api/get-authenticated-user'
import { updateUser } from '@/api/update-user'

import { Button } from './ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'

const updateForm = z.object({
  name: z.string(),
  email: z.string().email(),
  cpf: z.string(),
  password: z.string(),
})

type UpdateForm = z.infer<typeof updateForm>

export function EditProfileDialog() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<UpdateForm>()

  const { data: authenticatedUser } = useQuery({
    queryKey: ['authenticatedUser'],
    queryFn: getAuthenticatedUser,
  })

  const { mutateAsync: editUser } = useMutation({
    mutationFn: updateUser,
  })

  async function handleEditUser(data: UpdateForm) {
    try {
      await editUser({
        name: data.name,
        email: 'a@a.com',
        cpf: '700.110.540-69',
        password: '123',
      })

      window.location.reload()
    } catch {
      toast.error('Credenciais inválidas.')
    }
  }

  return (
    <DialogContent className="max-w-lg mx-auto">
      <DialogHeader>
        <DialogTitle>Editar perfil</DialogTitle>
        <DialogDescription>
          Aqui você pode editar o seu perfil
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(handleEditUser)} className="space-y-4">
        <div className="space-y-3">
          <div className="space-y-1">
            <Label>Nome</Label>
            <Input
              id="name"
              type="text"
              defaultValue={authenticatedUser?.name}
              {...register('name')}
            />
          </div>
        </div>
        <Button
          disabled={isSubmitting}
          className="w-full bg-primary items-center"
          type="submit"
        >
          <Check />
          Atualizar informações
        </Button>
      </form>
    </DialogContent>
  )
}
