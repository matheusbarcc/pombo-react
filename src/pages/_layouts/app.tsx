import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div>
      App layout
      <Outlet />
    </div>
  )
}
