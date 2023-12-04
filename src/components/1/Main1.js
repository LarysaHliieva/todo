import React, { useState } from "react";
import { nanoid } from "nanoid";
import CreateTask from "./CreateTask1";

export default function Main() {
  const [list, setList] = useState([]);

  const addTask = (task) => {
    // console.log("таска прилетіла в мейн", task);
    // setList((list) => [...list, task]);

    const newTask = {
      id: nanoid(),
      text: task,
      isComplete: false,
    };

    setList((list) => [...list, newTask]);
    // console.log(list);
  };

  return (
    <div className="main">
      <h3 className="title">Список задач</h3>
      <CreateTask addTask={addTask} />
      {/* {list} */}
    </div>
  );
}
