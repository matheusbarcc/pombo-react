import { Helmet } from 'react-helmet-async'

import { PublicationCard } from './publication-card'

export function Feed() {
  return (
    <>
      <Helmet title="Feed" />
      <div className="flex flex-col h-screen p-7 gap-5">
        {Array.from({ length: 15 }).map((_, i) => {
          return <PublicationCard key={i} />
        })}
      </div>
    </>
  )
}
