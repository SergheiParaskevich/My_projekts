import React from "react";
import style from '../Nav/style.module.css'

export default function Nav() {
  return (
    <nav className={style.nav_menu}>
      <div><a href="#">Profile</a></div>
      <div><a href="#">Messages</a></div>
      <div><a href="#">Messages</a></div>
      <div><a href="#">News</a></div>
      <div><a href="#">Music</a></div>
      <div><a href="#">Settings</a></div>
    </nav>
  );
}


