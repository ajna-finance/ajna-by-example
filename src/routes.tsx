import component_deploy from "./pages/deploy"
import component_deploy_collection from "./pages/deploy_collection"
import component_deploy_subset from "./pages/deploy_subset"
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
    path: "/deploycollection",
    component: component_deploy_collection,
  },
  {
    path: "/deploysubset",
    component: component_deploy_subset,
  },
  {
    path: "",
    component: component_,
  },
]

export default routes
