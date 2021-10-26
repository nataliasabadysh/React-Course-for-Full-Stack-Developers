import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  ...restProps
}) => (
  <Route
    {...restProps}
    render={(props) =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
          }}
        />
      )
    }
  />
);

/*
  <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <ProtectedRoute
            path="/account"
            component={AccountPage}
            redirectTo="/login"
          />
          <ProtectedRoute
            path="/dashboard"
            component={Dashboard}
            redirectTo="/login"
          />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
          <Redirect to="/" />
    </Switch>


    // import HomeView from './views/HomeView/HomeView';
// import RegisterView from './views/RegisterView/RegisterView';
// import LoginView from './views/LoginView/LoginView';
// import TasksView from './views/TasksView/TasksView';

export const route = {
  HOME: {
    path: '/',
    exact: true,
    component: <></>,
  },
  SIGNUP: {
    path: '/signup',
    component: <></>,
  },
  LOGIN: {
    path: '/login',
    component: <></>,
  },
  DASHBOARD: {
    path: '/dashboard',
    component: <></>,
  },
};

// <Route
// exact={routes.HOME.exact}
// path={routes.HOME.path}
// component={routes.HOME.component}
// />
// <Route
// path={routes.REGISTER.path}
// component={routes.REGISTER.component}
// />
// <Route
// path={routes.LOGIN.path}
// component={routes.LOGIN.component}
// />
// <PrivateRoute
// path={routes.TASKS.path}
// component={routes.TASKS.component}
// />


*/
