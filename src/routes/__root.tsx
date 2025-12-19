
import { Outlet, createRootRoute, createRootRouteWithContext, useLocation } from '@tanstack/react-router'
import { NavLink } from './-components/nav-link'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

/**
 * !Compendio de seguridad 1:02:00 del tutorial
 */

export type UserRole = "admin" | "client" | null;
export type RouterContext = {
  role: UserRole;
  isAdmin: boolean;
  isClient: boolean;
  isAuthenticated: boolean;
  login: ( role : "admin" | "client" ) => void;
  logout: () => void;
}

/* export const Route = createRootRoute({
  component: RootComponent,
}) */

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
})

function RootComponent() {

  const { logout, isAuthenticated, isAdmin, isClient } = Route.useRouteContext();
  const navigate = Route.useNavigate();
  const location = useLocation();
  return (
    <div className='container mx-auto max-w-xl'>
      <div className='space-x-2'>
        <NavLink to="/">Main Page</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact-us">Contact Us</NavLink>
        <NavLink to="/categories">Category</NavLink>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/{-$locale}/blog"> Blog</NavLink>
        { isClient && <NavLink to ="/client">Account</NavLink>}
        { isAdmin && <NavLink to ="/admin">Admin</NavLink>}
        { isAuthenticated ? (
          <button className='button' onClick={()=>{
            logout();
            navigate({ to:'/login' , search: {redirect: location.href }})
          }}>Sign Out</button>
        ) : 
        <NavLink to="/login">Login</NavLink>}
        <NavLink to="/app/dashboard"> Dashboard</NavLink>
        <NavLink to="/app/projects"> Projects</NavLink>
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  )
}
