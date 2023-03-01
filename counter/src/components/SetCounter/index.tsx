import React from 'react'
import style from '../SetCounter/style.module.css'

type SetCountPropsType = {
  setNumber:(count:any)=>void
  changeMaxCount: (event:React.ChangeEvent<HTMLInputElement>)=>void
  changeMinCount: (event:React.ChangeEvent<HTMLInputElement>)=>void
}


export default function SetCount(props:SetCountPropsType) {

  
  return (
    <div className={style.set_counter_wrapper}>
       <div className={style.value_window}>
       <div>Max value: <input type={'number'} onChange={props.changeMaxCount}/></div>
        <div>Start value: <input type={'number'} onChange={props.changeMinCount}/></div>
       </div>
       <div><button onClick={props.setNumber}>Set</button></div>
    </div>
  )
}
