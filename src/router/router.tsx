import { Home, About, Service, Contact, Posts, ErrorPage , Blog, } from "@pages";

const router = [
  {
    path: "/",
    element: <Home />,
    content:"Model S",
  },
  {
    path: "/about",
    element: <About />,
    content:"Model 3 ",
  },
  {
    path: "/service",
    element: <Service />,
    content:"Model X"
  },
  {
    path: "/contact",
    element: <Contact />,
    content:"Model Y"
  },
  {
    path: "/posts",
    element: <Posts />,
    content:"Solar Roof"
  },
  
  {
    path: "/blog",
    element: <Blog/>,
    content:"Solar Panels"
  },
  {
    path: "*",
    element: <ErrorPage />
  }
];

export default router;
