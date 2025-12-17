import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(public)/categories/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(public)/categories/"!</div>
}
