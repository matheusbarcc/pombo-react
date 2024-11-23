import { Search } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'

import { Avatar } from '@/components/avatar'
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
  const navigate = useNavigate()

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
                <Avatar src={waltuhProfilePic} size="small" />
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
              <Button
                variant="default"
                onClick={() => {
                  navigate('/admin/details')
                }}
              >
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
