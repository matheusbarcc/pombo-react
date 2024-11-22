import { Heart, Megaphone } from 'lucide-react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import profilePic from '../../../assets/mike.jpg'

export function Feed() {
  return (
    <div className="flex flex-col h-screen p-7 gap-5">
      {Array.from({ length: 15 }).map((_, i) => {
        return (
          <Card key={i} className="w-full">
            <CardHeader className="flex flex-row justify-between">
              <div className="flex flex-row items-center gap-4">
                <img
                  src={profilePic}
                  alt=""
                  className="h-8 w-8 rounded-sm
                  outline
                  outline-2
                  outline-offset-2
                  outline-primary"
                />
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
            <CardFooter className="gap-6">
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground text-sm">500k</span>
              </div>
              <div className="flex items-center gap-2">
                <Megaphone className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground text-sm">0</span>
              </div>
            </CardFooter>
          </Card>
        )
      })}
    </div>
  )
}
