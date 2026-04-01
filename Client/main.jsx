import { startRouter } from "https://esm.sh/lightweight-router";
import hydrateInteractiveComponents from "../lib/hydration.jsx";
import Home from "./home/home.jsx";
const interactiveComponents = [Home];
globalThis.isBrowser = typeof document !== "undefined";
startRouter({
  onRouteChange: currentPath => hydrateInteractiveComponents(document.querySelector(`route[path="${currentPath}"]`), interactiveComponents),
});

//CLIENT HYDRATION
hydrateInteractiveComponents(document, interactiveComponents);

//This file is optional, it's used to setup an SPA like client navigation and hydrate eventual interactive components
