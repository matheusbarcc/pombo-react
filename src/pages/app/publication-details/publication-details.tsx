import { Separator } from "@/components/ui/separator";
import { PublicationCard } from "../feed/publication-card";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

import mikeProfilePic from "../../../assets/mike.jpg"
import waltuhProfilePic from "../../../assets/waltuh.jpg"
import { Heart } from "lucide-react";

export function PublicationDetails() {
  return (
    <div className="flex flex-col h-screen p-7 gap-5">
      <PublicationCard />
      <h1 className="text-xl font-bold text-foreground">Curtidas</h1>
      <Separator />
      <Card className="items-center border-0 flex flex-row justify-between shadow-none bg-transparent">
        <div className="flex gap-3">
          <img src={mikeProfilePic} alt="" className="object-cover h-11 w-11 rounded-sm outline outline-2 outline-offset-2 outline-primary" />
          <div>
            <CardTitle className="text-md">Mike Ehrmantraut</CardTitle>
            <CardDescription className="text-xs">waltuh@example.com</CardDescription>
          </div>
        </div>
        <Heart fill="#1CA0F2" className="text-primary" />
      </Card>
      <Card className="items-center border-0 flex flex-row justify-between shadow-none bg-transparent">
        <div className="flex gap-3">
          <img src={waltuhProfilePic} alt="" className="object-cover h-11 w-11 rounded-sm outline outline-2 outline-offset-2 outline-primary" />
          <div>
            <CardTitle className="text-md">Walter White</CardTitle>
            <CardDescription className="text-xs">cook@example.com</CardDescription>
          </div>
        </div>
        <Heart fill="#1CA0F2" className="text-primary" />
      </Card>
    </div>
  )
}
