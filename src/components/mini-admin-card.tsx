import { LogOut, PencilLine } from 'lucide-react'

import profilePic from '../assets/mike.jpg'
import { Button } from './ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'
import { Separator } from './ui/separator'

export function MiniAdminCard() {
  return (
    <Card className="flex flex-col items-center">
      <CardHeader className="flex flex-col items-center gap-3">
        <img
          src={profilePic}
          alt=""
          className="w-16 h-1w-16 rounded-lg outline outline-offset-2 outline-rose-600"
        />
        <div className="flex flex-col">
          <CardTitle className="text-lg">Mike Ehrmantraut</CardTitle>
          <CardDescription>waltuh@example.com</CardDescription>
        </div>
        <div className="bg-rose-600 h-7 w-20 text-sm flex justify-center items-center font-bold rounded-sm">
            ADMIN
        </div>
      </CardHeader>
      <Separator />
      <CardFooter className="flex flex-col gap-2 w-full py-3">
        <Button variant="secondary" className="w-full  text-rose-500">
          <LogOut />
          <span className="">Sair</span>
        </Button>
      </CardFooter>
    </Card>
  )
}
