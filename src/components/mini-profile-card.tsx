import { LogOut, PencilLine } from 'lucide-react'

import profilePic from '../assets/mike.jpg'
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
  return (
    <Card className="flex flex-col items-center">
      <CardHeader className="flex flex-col items-center gap-3">
        <Avatar src={profilePic} size="large" />
        <div className="flex flex-col">
          <CardTitle className="text-lg">Mike Ehrmantraut</CardTitle>
          <CardDescription>waltuh@example.com</CardDescription>
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
        <Button variant="secondary" className="w-full  text-rose-500">
          <LogOut />
          <span className="">Sair</span>
        </Button>
      </CardFooter>
    </Card>
  )
}
