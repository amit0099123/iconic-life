import routesConfig from "../routesConfig";
import { Link } from "react-router-dom";

function Sitemap() {
  const publicRoutes = routesConfig.filter(route => route.sitemap);

  return (
    <div>
      <h1>Website Sitemap</h1>
      <ul>
        {publicRoutes.map((route, index) => (
          <li key={index}>
            <Link to={route.path}>{route.path}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sitemap;