import { useQuery } from '@tanstack/react-query'
import { LogOut } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { getAuthenticatedUser } from '@/api/get-authenticated-user'

import { Avatar } from './avatar'
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
  const navigate = useNavigate()

  const { data: authenticatedUser } = useQuery({
    queryKey: ['authenticatedUser'],
    queryFn: getAuthenticatedUser,
  })

  return (
    <Card className="flex flex-col items-center">
      <CardHeader className="flex flex-col items-center gap-3">
        <Avatar src={authenticatedUser?.profilePicture} size="large" />
        <div className="flex flex-col items-center">
          <CardTitle className="text-lg">{authenticatedUser?.name}</CardTitle>
          <CardDescription>{authenticatedUser?.email}</CardDescription>
        </div>
        <div className="bg-primary h-7 w-20 text-sm flex justify-center items-center font-bold rounded-sm text-white">
          ADMIN
        </div>
      </CardHeader>
      <Separator />
      <CardFooter className="flex flex-col gap-2 w-full py-3">
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
