import component_deploy from "./pages/deploy"
import component_deploy_collection from "./pages/deploy-collection"
import component_deploy_subset from "./pages/deploy-subset"
import component_lend_add_collateral from "./pages/lend/add-collateral"
import component_lend_add_quote from "./pages/lend/add-quote"
import component_lend_move_quote from "./pages/lend/move-quote"
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
    path: "/deploy-collection",
    component: component_deploy_collection,
  },
  {
    path: "/deploy-subset",
    component: component_deploy_subset,
  },
  {
    path: "/lend/add-collateral",
    component: component_lend_add_collateral,
  },
  {
    path: "/lend/add-quote",
    component: component_lend_add_quote,
  },
  {
    path: "/lend/move-quote",
    component: component_lend_move_quote,
  },
  {
    path: "",
    component: component_,
  },
]

export default routes
