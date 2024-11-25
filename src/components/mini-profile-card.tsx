import { useQuery } from '@tanstack/react-query'
import { LogOut, PencilLine } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { getAuthenticatedUser } from '@/api/get-authenticated-user'

import { Avatar } from './avatar'
import { EditProfileDialog } from './edit-profile-dialog'
import { Button } from './ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'
import { Dialog, DialogTrigger } from './ui/dialog'
import { Separator } from './ui/separator'

export function MiniProfileCard() {
  const navigate = useNavigate()

  const { data: authenticatedUser } = useQuery({
    queryKey: ['authenticatedUser'],
    queryFn: getAuthenticatedUser,
  })

  return (
    <Card className="flex flex-col items-center">
      <CardHeader
        className="flex flex-col items-center gap-3 hover:cursor-pointer"
        onClick={() => navigate(`/profile/${authenticatedUser?.userId}`)}
      >
        <Avatar
          src={
            authenticatedUser?.profilePicture ??
            'https://conteudo.imguol.com.br/c/esporte/10/2022/09/23/richarlison-comemora-gol-pela-selecao-brasileira-em-amistoso-contra-gana-1663969438957_v2_4x3.jpg'
          }
          size="large"
        />
        <div className="flex flex-col justify-center items-center">
          <CardTitle className="text-lg">{authenticatedUser?.name}</CardTitle>
          <CardDescription>{authenticatedUser?.email}</CardDescription>
        </div>
      </CardHeader>
      <Separator />
      <CardFooter className="flex flex-col gap-2 w-full py-3">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">
              <PencilLine />
              <span>Editar Perfil</span>
            </Button>
          </DialogTrigger>

          <EditProfileDialog />
        </Dialog>
        <Button
          variant="secondary"
          className="w-full  text-rose-500"
          onClick={() => {
            localStorage.removeItem('pombo-auth-token')
            navigate('/sign-in')
          }}
        >
          <LogOut />
          <span className="">Sair</span>
        </Button>
      </CardFooter>
    </Card>
  )
}
