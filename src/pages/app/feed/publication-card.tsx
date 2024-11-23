import { Heart, Megaphone } from 'lucide-react'

import { Avatar } from '@/components/avatar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import profilePic from '../../../assets/mike.jpg'

export function PublicationCard() {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row justify-between">
        <div className="flex flex-row gap-4">
          <Avatar src={profilePic} size="small" />
          <div>
            <CardTitle className="text-md">pombo</CardTitle>
            <CardDescription className="text-xs text-muted-foreground">
              pombo@pombo.com
            </CardDescription>
          </div>
        </div>
        <span className="text-xs text-muted-foreground">
          há menos de um minuto
        </span>
      </CardHeader>
      <CardContent>Aqui suas ideias ganham asas. - GPT, Chat</CardContent>
      <CardFooter className="flex gap-6">
        <Button
          variant="ghost"
          className="h-2 hover:bg-transparent flex items-center gap-2 px-0"
        >
          <Heart className="h-5 w-5 text-primary" />
          <span className="text-muted-foreground text-sm">500k</span>
        </Button>
        <Button
          variant="ghost"
          className="h-2 hover:bg-transparent flex items-center gap-2 px-0"
        >
          <Megaphone className="h-5 w-5 text-muted-foreground" />
          <span className="text-muted-foreground text-sm">0</span>
        </Button>
      </CardFooter>
    </Card>
  )
}
