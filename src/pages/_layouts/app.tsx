import { DialogTrigger } from '@radix-ui/react-dialog'
import { Bird, Home, SlidersHorizontal } from 'lucide-react'
import { Outlet, useNavigate } from 'react-router-dom'

import { MiniProfileCard } from '@/components/mini-profile-card'
import { NewPublicationDialog } from '@/components/new-publication-dialog'
import { PublicationFiltersDialog } from '@/components/publication-filters-dialog'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { Button } from '@/components/ui/button'
import { Dialog } from '@/components/ui/dialog'

export function AppLayout() {
  const navigate = useNavigate()

  return (
    <div className="grid min-h-screen grid-cols-[1fr_2fr_1fr] px-52 antialiased gap-4">
      <div className="flex flex-col border-r border-foreground/15 p-7 gap-6 scroll sticky top-0 h-screen">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <Bird className="h-8 w-8" />
            <span className="font-bold text-2xl">pombo</span>
          </div>
          <div className="flex gap-2">
            <ThemeToggle />
            <Button
              variant="outline"
              className="w-10 h-10"
              onClick={() => {
                navigate('/')
              }}
            >
              <Home />
            </Button>
          </div>
        </div>
        <MiniProfileCard />
        <Dialog>
          <DialogTrigger asChild>
            <Button className="font-semibold text-md h-12 flex gap-2">
              <Bird />
              Pruublicar
            </Button>
          </DialogTrigger>

          <NewPublicationDialog />
        </Dialog>
      </div>

      <div className="overflow-y-auto scrollbar-hide mb-7">
        <Outlet />
      </div>

      <div className="flex flex-col border-l border-foreground/15 p-7 gap-3 sticky top-0 h-screen">
        <div className="w-full">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary" className="w-full">
                <SlidersHorizontal />
                Filtros
              </Button>
            </DialogTrigger>

            <PublicationFiltersDialog />
          </Dialog>
        </div>
      </div>
    </div>
  )
}
