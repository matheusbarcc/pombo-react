import { Outlet } from 'react-router-dom'

import { PublicationCard } from '@/components/publication-card'

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2 antialiased">
      <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
        <div className="flex items-center justify-center h-full gap-3 text-lg text-foreground">
          <PublicationCard />
        </div>
        <footer className="text-sm">
          Todos direitos reservados &copy; pombo - {new Date().getFullYear()}
        </footer>
      </div>
      <div className="relative flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
