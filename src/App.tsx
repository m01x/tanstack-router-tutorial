import { routeTree } from "./routeTree.gen";
import { createRouter, RouterProvider } from "@tanstack/react-router";


const router = createRouter({
  routeTree: routeTree,
  defaultPendingMs: 0,
  defaultPreload: "intent"
});

//? “Oye TS, cuando alguien use TanStack Router en este proyecto, el router real es este typeof router”
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}


function App() {

  return <RouterProvider router={router} />;
}

export default App
