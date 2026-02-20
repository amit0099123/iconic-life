import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import routesConfig from "./routesConfig";
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: routesConfig,
  },
]);
 
function App() {
  return <RouterProvider router={router} />;
}
 
export default App;