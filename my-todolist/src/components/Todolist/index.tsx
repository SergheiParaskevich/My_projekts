import React from "react";
import style from "../Todolist/style.module.css";
import { useState, ChangeEvent } from 'react'

type TodolistPropsType = {
  title: string;
  tasks: Array<TasksPropsType>;
  removeTask: (id: string) => void;
  sortTasks: (checkTask: string ) => void;
  addTask: (title: string)=>void
  changeStatus: (taskId: string, isDone:boolean)=>void
  checkTask: string
};

type TasksPropsType = {
  id:string;
  title: string;
  isDone: boolean;
};

export default function Todolist(props: TodolistPropsType) {

  const [newTaskTitle, setnewTaskTitle] = useState('');
  const [error, setError] = useState('')

  const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
          setError('')
         setnewTaskTitle(e.currentTarget.value)
         
  }

  const onClickButtonHandler = () => {
    if (newTaskTitle.trim() === "".trim()) {
      setError("Field is required");
    } else {
    }
    props.addTask(newTaskTitle);
    setnewTaskTitle("");
  };

  const allClickHandler = () => props.sortTasks('All')
  const activeClickHandler = () => props.sortTasks('Active')
  const completedClickHandler = () => props.sortTasks('Completed')
  
return (
    <div className={style.body}>
      <h3>{props.title}</h3>

      <div>
        <input 
          value={newTaskTitle} 
          onChange={onChangeHandler} 
          className={error ? 'error' : ''}
          />
         
        <button onClick={onClickButtonHandler}  >+</button>
         <p className="error-message">{error}</p>
      </div>
      <ul>
        {props.tasks.map((el) => {
           const onChangeCheckBoxHandler = (e:ChangeEvent<HTMLInputElement>) => {
            props.changeStatus(el.id, e.currentTarget.checked)
           }
           const removeTaskHandler = () => {props.removeTask(el.id)}
           
          return (
            <li className={el.isDone !== true ? 'is-done' : ''} key={el.id}>
              <input  type="checkbox" checked={el.isDone} onChange={onChangeCheckBoxHandler} />
              <span>{el.title}</span>
              <button onClick={removeTaskHandler}
              >x</button>
            </li>
          );
        })}
      </ul>
      <div>
        <button className={props.checkTask === 'All' ? 'active-filter' : ''} onClick={allClickHandler}>All</button>
        <button className={props.checkTask === 'Active' ? 'active-filter' : ''} onClick={activeClickHandler}>Active</button>
        <button className={props.checkTask === 'Completed' ? 'active-filter' : ''} onClick={completedClickHandler}>Comleted</button>
      </div>
    </div>
  );
}
