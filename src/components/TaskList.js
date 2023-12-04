import React from "react";

export default function TaskList(props) {
  // const list = [
  //   {
  //     id: 1,
  //     text: "Урок реату",
  //     isComplete: true,
  //   },
  //   {
  //     id: 2,
  //     text: "Купити собі щось смачненьке",
  //     isComplete: false,
  //   },
  // ];

  return (
    <ul className="list">
      {props.list.map((task) => (
        <li key={task.id} className="task">
          <p
            className={task.isComplete ? "complete" : "notcomplete"}
            onClick={() => props.toggleTask(task.id)}
          >
            🎄 {task.text}
          </p>
          <button
            className="btn"
            type="button"
            onClick={() => props.deleteTask(task.id)}
          >
            Видалити
          </button>
        </li>
      ))}
      {/* <li>
        <p>Прийти на урок реакту</p>
        <button>Видалити</button>
        <button>Змінити</button>
      </li> */}
    </ul>
  );
}
