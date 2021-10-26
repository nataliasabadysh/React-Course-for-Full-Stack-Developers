import { NavLink, useHistory } from "react-router-dom";
import styles from "./styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";

import { routers } from "../../utils/routes";
import { NavStyled, UserStyles, UserNameStyles } from "./styles";
import Switch from "@mui/material/Switch";
import { logOutUserAsync } from "../../redux/auth/actions";
import { changeTheme } from "../../redux/theme/action";

const label = { inputProps: { "aria-label": "Switch demo" } };

export const Navigation = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userName = useSelector((state) => state.auth.user.name);

  const dispatch = useDispatch();
  const history = useHistory()

  const onLogOut = () => {
    localStorage.removeItem("auth");
    dispatch(logOutUserAsync());
    history.push(routers.LOGIN.path)
  };

  const userJSX = isAuthenticated && (
    <UserStyles>
      <UserNameStyles>
        <span role="img" aria-label="face emoji">
          🤓
        </span>
        {userName}
      </UserNameStyles>
      <Button variant="text" onClick={onLogOut}>
        Log Out
      </Button>
    </UserStyles>
  );

  const themeJSX = isAuthenticated && (
    <div>
      Theme
      <Switch
        onChange={(event) => dispatch(changeTheme(event.target.checked))}
        {...label}
      />
    </div>
  );

  return (
    <NavStyled>
      <div>
        {isAuthenticated ? (
          <>
            <NavLink
              exact
              to={routers.NEWS.path}
              className={styles.linkStyle}
              activeStyle={{ color: "red" }}
            >
              News
            </NavLink>

            <NavLink
              to={routers.DASHBOARD.path}
              className={styles.linkStyle}
              activeStyle={{ color: "red" }}
            >
              Dashboard
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              to={routers.LOGIN.path}
              className={styles.linkStyle}
              activeStyle={{ color: "red" }}
            >
              Log in
            </NavLink>
            <NavLink
              to={routers.SINGUP.path}
              className={styles.linkStyle}
              activeStyle={{ color: "red" }}
            >
              Sing Up
            </NavLink>
          </>
        )}
      </div>
      <div>{themeJSX}</div>

      {userJSX}
    </NavStyled>
  );
};
