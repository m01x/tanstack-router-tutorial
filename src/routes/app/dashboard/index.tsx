import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/app/dashboard/"!ee
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sequi nihil assumenda minima? Iure, ipsa laborum, quas animi omnis libero iusto aliquam molestiae maxime deserunt dignissimos quibusdam sunt hic ea sapiente autem natus dolor aperiam eligendi illo! Quidem laudantium necessitatibus suscipit quam reprehenderit recusandae iure harum rem, pariatur quaerat illum!
  </div>
}
