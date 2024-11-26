export interface Captions {
  complaintAmount: number
  pendingComplaintAmount: number
  acceptedComplaintAmount: number
  rejectedComplaintAmount: number
}
export interface ComplaintCaptionsProps {
  captions: Captions
}

export function ComplaintCaptions({ captions }: ComplaintCaptionsProps) {
  return (
    <>
      <div className="flex gap-2 items-center">
        <div className="bg-foreground w-3 h-3 p-0 m-0 rounded-full" />
        <span className="text-muted-foreground text-sm">
          {captions.complaintAmount}
        </span>
      </div>
      <div className="flex gap-2 items-center">
        <div className="bg-yellow-500 w-3 h-3 p-0 m-0 rounded-full" />
        <span className="text-muted-foreground text-sm">
          {captions.pendingComplaintAmount}
        </span>
      </div>
      <div className="flex gap-2 items-center">
        <div className="bg-rose-500 w-3 h-3 p-0 m-0 rounded-full" />
        <span className="text-muted-foreground text-sm">
          {captions.acceptedComplaintAmount}
        </span>
      </div>
      <div className="flex gap-2 items-center">
        <div className="bg-green-500 w-3 h-3 p-0 m-0 rounded-full" />
        <span className="text-muted-foreground text-sm">
          {captions.rejectedComplaintAmount}
        </span>
      </div>
    </>
  )
}
