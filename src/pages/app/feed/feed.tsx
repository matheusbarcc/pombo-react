import { PublicationCard } from './publication-card'

export function Feed() {
  return (
    <div className="flex flex-col h-screen p-7 gap-5">
      {Array.from({ length: 15 }).map((_, i) => {
        return <PublicationCard key={i} />
      })}
    </div>
  )
}
