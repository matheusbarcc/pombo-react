import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import profilePic from "../../../assets/mike.jpg"
import { Separator } from "@/components/ui/separator"
import { PublicationCard } from "../feed/publication-card"

export function Profile() {
  return (
    <div className="flex flex-col h-screen p-7 gap-5">
      <Card className="border-0">
        <CardHeader className="flex flex-row gap-5">
          <img src={profilePic} alt="" className="h-20 w-20 rounded-lg outline outline-offset-2 outline-primary" />
          <div className="flex flex-col gap-1">
            <CardTitle>Mike Ehrmantraut</CardTitle>
            <CardDescription>waltuh@example.com</CardDescription>
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
