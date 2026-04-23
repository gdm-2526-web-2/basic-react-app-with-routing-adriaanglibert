import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@picocss/pico/css/pico.min.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import NavLayout from "./layouts/NavLayout";
import Welcome from "./pages/Welcome";
import CenteredLayout from "./layouts/CenteredLayout";
import Articles from "./pages/Articles";
import { getData } from "./helpers";
import SidebarLayout from "./layouts/SidebarLayout";
import Detail from "./pages/Detail";

const router = createBrowserRouter([
  {
    element: <NavLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        element: <SidebarLayout />,
        children: [
          {
            path: "/articles",
            loader: async () => getData("/src/data/articles.json"),
            element: <Articles />,
          },
          {
            path: "/articles/:slug",
            loader: async ({ params }) =>
              getData("/src/data/articles.json", params.slug),
            element: <Detail />,
          },
        ],
      },
    ],
  },
  {
    element: <CenteredLayout />,
    children: [
      {
        path: "/welcome",
        element: <Welcome />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
