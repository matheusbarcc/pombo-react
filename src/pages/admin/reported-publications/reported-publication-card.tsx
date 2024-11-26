import { Search } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { ReportedPublication } from '@/api/get-reported-publications'
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

export interface ReportedPublicationCardProps {
  reportedPublication: ReportedPublication
}

export function ReportedPublicationCard({
  reportedPublication,
}: ReportedPublicationCardProps) {
  const navigate = useNavigate()

  const captions = {
    complaintAmount: reportedPublication.complaintAmount,
    pendingComplaintAmount: reportedPublication.pendingComplaintAmount,
    acceptedComplaintAmount: reportedPublication.acceptedComplaintAmount,
    rejectedComplaintAmount: reportedPublication.rejectedComplaintAmount,
  }

  return (
    <Card>
      <CardHeader className="flex flex-row justify-between">
        <div className="flex gap-4">
          <Avatar src={reportedPublication.userProfilePictureUrl} />
          <div>
            <CardTitle className="text-md">
              {reportedPublication.userName}
            </CardTitle>
            <CardDescription className="text-xs">
              {reportedPublication.userEmail}
            </CardDescription>
          </div>
        </div>
        <div className="flex gap-8">
          <ComplaintCaptions captions={captions} />
        </div>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <span>{reportedPublication.publicationContent}</span>
        <Button
          variant="default"
          onClick={() => {
            navigate(`/admin/details/${reportedPublication.publicationId}`)
          }}
        >
          <Search />
          Analisar
        </Button>
      </CardContent>
    </Card>
  )
}
