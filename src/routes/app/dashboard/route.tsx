import { createFileRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/app/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <div className='container flex min-h-screen'>
        <div className='bg-amber-500'>
          <h3>Sidebar</h3>
          <nav className='flex flex-col gap-2'>
            <Link to='/app/dashboard' activeProps={{ className: "bg-amber-600" }} activeOptions={{ exact: true }} className='px-4 py-2 hover:bg-amber-600'>
              Dashboard
            </Link>
            <Link to='/app/dashboard/users' activeProps={{ className: "bg-amber-600" }} className='px-4 py-2 hover:bg-amber-600'>
              Users
            </Link>
            <Link to='/app/dashboard/settings' activeProps={{ className: "bg-amber-600" }} className='px-4 py-2 hover:bg-amber-600'>
              Settings
            </Link>
          </nav>

        </div>
        <div className='bg-amber-700'>
          outlet
          <Outlet />
        </div>
      </div>
    </>
  )
}
