import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Team from "./pages/Team";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "about", Component: About },
      { path: "team", Component: Team },
      { path: "projects", Component: Projects },
      { path: "blog", Component: Blog },
      { path: "contact", Component: Contact },
    ],
  },
]);
