import { Heart } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { Avatar } from '@/components/avatar'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'

import mikeProfilePic from '../../../assets/mike.jpg'
import waltuhProfilePic from '../../../assets/waltuh.jpg'
import { PublicationCard } from '../feed/publication-card'

export function PublicationDetails() {
  return (
    <>
      <Helmet title="Pruu" />
      <div className="flex flex-col h-screen p-7 gap-5">
        <PublicationCard />
        <h1 className="text-xl font-bold text-foreground">Curtidas</h1>
        <Card className="items-center border-0 border-t pt-5 px-2 rounded-none flex flex-row justify-between shadow-none bg-transparent">
          <div className="flex gap-3">
            <Avatar src={mikeProfilePic} size="small" />
            <div>
              <CardTitle className="text-md">Mike Ehrmantraut</CardTitle>
              <CardDescription className="text-xs">
                waltuh@example.com
              </CardDescription>
            </div>
          </div>
          <Heart fill="#1CA0F2" className="text-primary" />
        </Card>
        <Card className="items-center border-0 border-t pt-5 px-2 rounded-none flex flex-row justify-between shadow-none bg-transparent">
          <div className="flex gap-3">
            <Avatar src={waltuhProfilePic} size="small" />
            <div>
              <CardTitle className="text-md">Walter White</CardTitle>
              <CardDescription className="text-xs">
                cook@example.com
              </CardDescription>
            </div>
          </div>
          <Heart fill="#1CA0F2" className="text-primary" />
        </Card>
      </div>
    </>
  )
}
