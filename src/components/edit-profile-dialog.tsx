import { useQuery } from '@tanstack/react-query'

import { getAuthenticatedUser } from '@/api/get-authenticated-user'

import { Button } from './ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'

export function EditProfileDialog() {
  const { data: authenticatedUser } = useQuery({
    queryKey: ['authenticatedUser'],
    queryFn: getAuthenticatedUser,
  })

  return (
    <DialogContent className="max-w-lg mx-auto">
      <DialogHeader>
        <DialogTitle>Editar perfil</DialogTitle>
        <DialogDescription>
          Aqui você pode editar o seu perfil
        </DialogDescription>
      </DialogHeader>

      <form className="space-y-4">
        <div className="space-y-3">
          <div className="space-y-1">
            <Label>Nome</Label>
            <Input id="name" type="text" value={authenticatedUser?.name} />
          </div>
          <div className="space-y-1">
            <Label>E-mail</Label>
            <Input id="email" type="email" value={authenticatedUser?.email} />
          </div>
          <div className="space-y-1">
            <Label>Foto de perfil</Label>
            <Input
              id="foto-perfil"
              type="file"
              className="hover:cursor-pointer"
            />
          </div>
        </div>
        <Button className="w-full bg-primary" type="submit">
          Atualizar informações
        </Button>
      </form>
    </DialogContent>
  )
}
