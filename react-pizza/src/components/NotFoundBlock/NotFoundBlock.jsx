import React from "react";
import style from "../NotFoundBlock/style.module.scss";

export default function NotFoundBlock() {
  return (
    <div className={style.wrapper}>
      <h1 className={style.root}>
        <span>🤔</span>
        <br />
        Not Found
        <p>Sorry, this page is not available.</p>
      </h1>
    </div>
  );
}
