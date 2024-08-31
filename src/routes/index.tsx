import {
  createRouter,
  RouterProvider,
  Route,
  RootRoute,
  Outlet,
} from "@tanstack/react-router";
import Home from "../components/Home";
import DynamicPage from "../components/DynamicPage";

// Define the root route
const rootRoute = new RootRoute({
  component: () => <Outlet />,
});

// Define the home route
const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

// Define the dynamic route with a URL parameter
const dynamicRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/$type",
  component: DynamicPage,
});

// Create the router with the defined routes
const router = createRouter({
  routeTree: rootRoute.addChildren([homeRoute, dynamicRoute]),
});

export function AppRouter() {
  return <RouterProvider router={router} />;
}
