import component_deploy from "./pages/deploy"
import component_ from "./pages"

interface Path {
  title: string
  path: string
}

interface Paths {
  prev: Path | null
  next: Path | null
}

interface Route {
  path: string
  component: React.FC<Paths>
  breakingChanges?: boolean
}

const routes: Route[] = [
  {
    path: "/deploy",
    component: component_deploy,
  },
  {
    path: "",
    component: component_,
  },
]

export default routes
