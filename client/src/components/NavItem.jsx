import React from "react";
import { Link } from "react-router-dom";

const NavItem = (props) => {
  return (
    <Link
      style={{
        color: "white",
        textDecoration: "none",
      }}
      to={props.path}
      onClick={props.onClick}
    >
      {props.name}
    </Link>
  );
};

export default NavItem;
