import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

import profilePic from '../../../assets/mike.jpg'
import { PublicationCard } from '../feed/publication-card'

export function Profile() {
  return (
    <div className="flex flex-col h-screen p-7 gap-5">
      <Card className="border-0 shadow-none">
        <CardHeader className="flex flex-row justify-between">
          <div className="flex flex-row gap-5">
            <img
              src={profilePic}
              alt=""
              className="h-20 w-20 rounded-lg outline outline-offset-2 outline-primary"
            />
            <div className="flex flex-col gap-1">
              <CardTitle>Mike Ehrmantraut</CardTitle>
              <CardDescription>waltuh@example.com</CardDescription>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="text-muted-foreground text-xs font-bold ">
              Membro desde
            </span>
            <span className="text-foreground text-xs">22 de nov. de 2024</span>
          </div>
        </CardHeader>
      </Card>
      <Separator />
      {Array.from({ length: 15 }).map((_, i) => {
        return <PublicationCard key={i} />
      })}
    </div>
  )
}
