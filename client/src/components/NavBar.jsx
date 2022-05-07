import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "..";
import {
  BASKET_ROUTE,
  CREATE_EVENT_ROUTE,
  CREATE_PROJECT_ROUTE,
  EVENTS_ROUTE,
  INFO_ROUTE,
  LOGIN_ROUTE,
  PROJECTS_ROUTE,
  REGISTRATION_ROUTE,
} from "../utils/consts";
import NavItem from "./NavItem";

const NavBar = observer(() => {
  const { user } = useContext(Context);

  const navigation = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    navigation(INFO_ROUTE);
  };

  return (
    <header
      style={{
        height: "90px",
        width: "100vw",
        backgroundColor: "blueviolet",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
      }}
    >
      <NavItem name="Main" path={INFO_ROUTE} />
      <NavItem name="Projects" path={PROJECTS_ROUTE} />
      <NavItem name="Events" path={EVENTS_ROUTE} />
      {!user.isAuth ? (
        <NavItem name="Sign Up" path={REGISTRATION_ROUTE} />
      ) : null}
      {!user.isAuth ? (
        <NavItem name="Log In" onClick={navigation(LOGIN_ROUTE)} />
      ) : null}

      {user.isAuth ? <NavItem name="Busket" path={BASKET_ROUTE} /> : null}
      {user.isAuth ? (
        <NavItem name="Create Event" path={CREATE_EVENT_ROUTE} />
      ) : null}
      {user.isAuth ? (
        <NavItem name="Create Project" path={CREATE_PROJECT_ROUTE} />
      ) : null}
      {user.isAuth ? <NavItem name="Log out" onClick={logOut} /> : null}
    </header>
  );
});

export default NavBar;
