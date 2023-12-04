import React, { useState } from "react";

export default function CreateTask(props) {
  const [task, setTask] = useState("");

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (task.trim() === "") {
      alert("Поле не повинно бути порожнім");
      return;
    }

    // if (task.length > 10) {
    //   alert("Поле повинно бути не більше 10 символів");
    //   return;
    // }

    // if (task.trim().toLowerCase() === "реакт") {
    //   alert("Вау!!!");
    // }

    // if (task.trim().includes("путін")) {
    //   alert("Небезпечний контент!!!");
    //   return;
    // }

    // console.log(task);
    props.addTask(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Напишіть задачу"
        onChange={handleChange}
        value={task}
      />
      <button className="btn" type="submit">
        Додати
      </button>
    </form>
  );
}
