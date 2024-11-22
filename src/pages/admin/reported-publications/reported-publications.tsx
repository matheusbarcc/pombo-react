import { Search } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { ComplaintCaptions } from '@/components/complaint-captions'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import waltuhProfilePic from '../../../assets/waltuh.jpg'

export function ReportedPublications() {
  return (
    <>
      <Helmet title="Admin" />
      <div className="flex flex-col h-screen p-7 gap-5">
        <h1 className="text-2xl font-bold text-foreground">
          Publicações Denunciadas
        </h1>
        <div>
          <Card>
            <CardHeader className="flex flex-row justify-between">
              <div className="flex gap-4">
                <img
                  src={waltuhProfilePic}
                  alt=""
                  className="object-cover h-11 w-11 rounded-sm outline outline-2 outline-offset-2 outline-primary"
                />
                <div>
                  <CardTitle className="text-md">Walter White</CardTitle>
                  <CardDescription className="text-xs">
                    cook@example.com
                  </CardDescription>
                </div>
              </div>
              <div className="flex gap-8">
                <ComplaintCaptions />
              </div>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <span>Im the danger</span>
              <Button variant="default">
                <Search />
                Analisar
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
