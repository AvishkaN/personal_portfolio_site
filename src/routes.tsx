import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import Layout from "@/components/Layout";
import ScrollToTop from "@/components/ScrollToTop";
import HomePage from "@/pages/HomePage";
import ProjectsPage from "@/pages/ProjectsPage";
import ProjectDetailPage from "@/pages/ProjectDetailPage";
import BlogsPage from "@/pages/BlogsPage";
import ContactPage from "@/pages/ContactPage";
import AwardsPage from "@/pages/AwardsPage";
import NotFound from "@/pages/NotFound";
import { projects } from "@/data/projects";

const queryClient = new QueryClient();

const Providers = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ScrollToTop />
      <Outlet />
    </TooltipProvider>
  </QueryClientProvider>
);

export const routes = [
  {
    path: "/",
    Component: Providers,
    children: [
      {
        path: "/",
        Component: Layout,
        children: [
          { path: "", Component: HomePage },
          { path: "projects", Component: ProjectsPage },
          {
            path: "projects/:slug",
            Component: ProjectDetailPage,
          },
          { path: "blogs", Component: BlogsPage },
          { path: "awards", Component: AwardsPage },
          { path: "contact", Component: ContactPage },
        ],
      },
      { path: "*", Component: NotFound },
    ],
  },
];

// Routes to pre-render at build time (static + all dynamic project pages)
export const includedRoutes = [
  "/",
  "/projects",
  "/awards",
  "/contact",
  ...projects.map((p) => `/projects/${p.slug}`),
];
