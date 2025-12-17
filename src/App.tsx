import { useRouterContextState } from "./lib/use-router-state";
import { routeTree } from "./routeTree.gen";
import { createRouter, RouterProvider } from "@tanstack/react-router";


const router = createRouter({
  routeTree: routeTree,
  defaultPendingMs: 0,
  defaultPreload: "intent",
  context: {
    role: null,
    login: () => {},
    logout: () => {},
    isAdmin: false,
    isClient: false,
    isAuthenticated: false,
  }
});

//? “Oye TS, cuando alguien use TanStack Router en este proyecto, el router real es este typeof router”
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}


function App() {

  const routerContextState = useRouterContextState()
  return <RouterProvider router={router} context={routerContextState} />;
}

export default App
