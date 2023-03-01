import React, { useState } from "react";
import style from "../DisplayCounter/style.module.css";

type FinalCountPropsType = {
  inputMax: any
  inputMin: any
  setInputMax: (inputMax:string)=>void
  setInputMin: (inputMin:string)=>void
  
}

export default function WindowCounter(props:FinalCountPropsType) {
  
  const onClickSetCounter = () =>  props.setInputMin(Number(props.inputMin) + '1')
  const resetCount = () => props.setInputMin('0')
 

  return (
    <div className={style.wrapper}>
      <div className={props.inputMax == 5 ? style.max_number : style.display_counter}>
       {props.inputMin}
        
      </div>
      <div className={style.btn_section}>
        <button
          disabled={props.inputMax === 5 ? true : false}
          onClick={onClickSetCounter}
        >
          +
        </button>
        <button onClick={resetCount}>reset</button>
      </div>
    </div>
  );
}
