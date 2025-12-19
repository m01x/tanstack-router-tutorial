import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/dashboard/settings')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/app/dashboard/settings"!</div>
}
