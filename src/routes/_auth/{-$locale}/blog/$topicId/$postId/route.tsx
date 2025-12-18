import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/{-$locale}/blog/$topicId/$postId')(
  {
    component: RouteComponent,
  },
)

function RouteComponent() {
  return <div>Hello "/_auth/-$locale/blog/$topicId/$postId"!</div>
}
