import React from "react";
import style from "../Nav/style.module.css";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className={style.nav_menu}>
      <div>
        <NavLink
          className={({ isActive }) => {
            return isActive ? style.active : "";
          }}
          to={"/profile"}
        >
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink
          className={({ isActive }) => (isActive ? style.active : "")}
          to={"/messages"}
        >
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink
          className={({ isActive }) => (isActive ? style.active : "")}
          to={"/news"}
        >
          News
        </NavLink>
      </div>
      <div>
        <NavLink
          className={({ isActive }) => (isActive ? style.active : "")}
          to={"/music"}
        >
          Music
        </NavLink>
      </div>
      <div>
        <NavLink
          className={({ isActive }) => (isActive ? style.active : "")}
          to={"/settings"}
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
}
