import React from "react";
import { useState } from "react";
import { v1 } from "uuid";
import "./App.css";
import Todolist from "./components/Todolist";

export type FilterValuesType = "All" | "Completed" | "Active";

function App() {
  const title2 = "What to learn";

  let [tasks, setTask] = useState([
    { id: v1(), title: "HTML&CSS", isDone: true },
    { id: v1(), title: "JS", isDone: true },
    { id: v1(), title: "React", isDone: false },
    { id: v1(), title: "Redux", isDone: false },
  ]);
  const [checkTask, setcheckTask] = useState("All");

  const removeTask = (id: string) => {
    setTask(tasks.filter((t) => t.id !== id));
  };
  const sortTasks = (checkTask: string) => {
    setcheckTask(checkTask)
  };

  const addTask = (title:string) => {
    let newTask = { id: v1(), title: title, isDone: true };
    const newTasks = [newTask, ...tasks];
    setTask(newTasks);
  };

  const changeStatus = (taskId: string, isDone:boolean) => {
   let task =  tasks.find(t => t.id === taskId)
   if(task){
    task.isDone = isDone
   }
   
   setTask([...tasks])
  
  }

  let sortBtnState = tasks;

  

  if (checkTask === "Active") {
    sortBtnState = tasks.filter((t) => t.isDone === false);
    
  }
  if (checkTask === "Completed") {
    sortBtnState = tasks.filter((t) => t.isDone === true);
   
  }
  return (
    <div className="App">
      <Todolist
        title={title2}
        tasks={sortBtnState}
        removeTask={removeTask}
        sortTasks={sortTasks}
        addTask={addTask}
        changeStatus={changeStatus}
        checkTask={checkTask}
      />
    </div>
  );
}

export default App;
