import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import App from "../App";
import { Home, About, Service, Contact, Posts, ErrorPage , PostItem} from "@pages";



const index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/model-3" element={<About />} />
          <Route path="/model-x" element={<Service />} />
          <Route path="/model-y" element={<Contact />} />
          <Route path="/solar-roof" element={<Posts />} />
         
          <Route path="solar-panels" element={<ErrorPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default index;
