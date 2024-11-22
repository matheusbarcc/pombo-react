import { Helmet } from 'react-helmet-async'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import profilePic from '../../../assets/mike.jpg'
import pubPic from '../../../assets/pombo.png'

export function ComplaintDetails() {
  return (
    <>
      <Helmet title="Denuncias" />
      <div className="flex flex-col h-screen p-7 gap-5">
        <Card className="w-full">
          <CardHeader className="flex flex-row justify-between">
            <div className="flex flex-row items-center gap-4">
              <img
                src={profilePic}
                alt=""
                className="h-10 w-10 rounded-sm
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
          <CardContent className="flex flex-col gap-3">
            <div>Aqui suas ideias ganham asas. - GPT, Chat</div>
            <img src={pubPic} alt="" className="rounded-md" />
          </CardContent>
        </Card>
      </div>
    </>
  )
}
