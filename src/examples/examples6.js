//   console.log('routers', Object.entries(routers).map((item)=> console.log(item[1])) );
import { Route, Redirect } from "react-router-dom";

const Routers = ({
  component: Component,
  isAuthenticated,
  redirectTo,
  ...routeProps
}) => {
  useEffect(() => {
    document.title = "Name You App";
  }, []);

  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={redirectTo} />
        )
      }
    />
  );
};
