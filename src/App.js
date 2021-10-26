// Core
import { containerStyle } from "./theme/styles";
import { useEffect, lazy, Suspense } from "react";

// import { LogIn } from "./pages/LogIn/LogIn";
// import { SignUp } from "./pages/SignUp/SignUpPage";
import { Switch, Route, useHistory } from "react-router-dom";
import { Navigation } from "./component/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { singUpUser, singUpUserSuccess } from "./redux/auth/actions";
import { NewsPage } from "./pages/NewsPage/NewsPage";
import { routers } from "./utils/routes";
import { PrivetRouter } from "./utils/PrivetRouters";
import ClipLoader from "react-spinners/ClipLoader";

const DashboardAsync = lazy(() =>
  import(/* webpackChunkName: "Dashboard-Page" */ "./pages/Dashboard/Dashboard")
);
const LogInAsync = lazy(() =>
  import(/* webpackChunkName: "LogIn-Page" */ "./pages/LogIn/LogIn")
);
const SignUpAsync = lazy(() =>
  import(/* webpackChunkName: "SignUp-Page" */ "./pages/SignUp/SignUpPage")
);

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const history = useHistory();

  useEffect(() => {
    const ls = JSON.parse(localStorage.getItem("auth"));
    
    if (ls) {
      dispatch(singUpUser(ls));
      dispatch(singUpUserSuccess);
      history.push(routers.NEWS.path)
    }

    document.title = "MOVIE STAR";
  }, [dispatch]);

  return (
    <>
      <Navigation />

      <div style={containerStyle}>
        <Switch>
          <Suspense fallback={<ClipLoader color={"red"} size={150} />}>
            {!isAuthenticated && (
              <Route path={routers.SINGUP.path} component={SignUpAsync} />
            )}
            {!isAuthenticated && <Route path={routers.LOGIN.path} component={LogInAsync} />}

            <PrivetRouter
              isAuthenticated={isAuthenticated}
              path={routers.NEWS.path}
              component={NewsPage}
              redirectTo={routers.LOGIN.path}
            />
            <PrivetRouter
              isAuthenticated={isAuthenticated}
              path={routers.DASHBOARD.path}
              component={DashboardAsync}
              redirectTo={routers.LOGIN.path}
            />
          </Suspense>
        </Switch>
      </div>
    </>
  );
}

export default App;
