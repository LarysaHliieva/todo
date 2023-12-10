import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import CreateTask from "./CreateTask";
import TaskList from "./TaskList";

export default function Main() {
  const [list, setList] = useState(() => {
    return JSON.parse(localStorage.getItem("savedList")) ?? [];
  });

  // Записуємо збережені дані з localStorage в початкове значення list
  // getItem - команда отримує дані з localStorage
  // JSON.parse - перетворює рядок на масив
  // вираз А ?? []  означає: якщо А існує - запишемо А,
  // якщо А не існує(null або undefined), то запишемо порожній масив[]

  // Зберігаємо list в localStorage
  // цей хук useEffect виконується кожного разу при зміні list
  // setItem - команда зберігання в localStorage
  // "savedList" - довільна назва - ключ, під яким зберігаємо дані
  // JSON.stringify - перетворює масив на рядок (необхідно для localStorage)
  useEffect(() => {
    console.log(list);
    localStorage.setItem("savedList", JSON.stringify(list));
  }, [list]);

  const addTask = (task) => {
    // console.log("таска прилетіла в мейн", task);
    //   setList((list) => [...list, task]);
    const newTask = {
      id: nanoid(),
      text: task,
      isComplete: false,
    };

    setList((list) => [...list, newTask]);
    // console.log(list);
  };

  const deleteTask = (id) => {
    const newList = list.filter((task) => task.id !== id);
    setList([...newList]);
  };

  const toggleTask = (id) => {
    // console.log(id);
    const newList = list.map((task) => {
      if (task.id === id) {
        return { ...task, isComplete: !task.isComplete };
      } else {
        return task;
      }
    });

    setList([...newList]);
  };

  return (
    <div className="main">
      <h3 className="title">Список задач</h3>
      <CreateTask addTask={addTask} />
      <TaskList list={list} deleteTask={deleteTask} toggleTask={toggleTask} />
      {/* {list} */}
    </div>
  );
}
