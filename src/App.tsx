import React from "react";
import { Header } from "./components/Header/Header";
import "./global.css";
import styles from "./App.module.css";
import plusCircle from "./assets/plusCircle.svg";
import { Trash } from "phosphor-react";
import { useState } from "react";
import { Checked } from "./assets/Checked";
import { Unchecked } from "./assets/Unchecked";

let mockTasks = [
  {
    id: 1,
    content:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    status: false,
  },
  {
    id: 2,
    content:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    status: false,
  },
  {
    id: 3,
    content:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    status: false,
  },
];

export function App() {
  const [tasks, setTasks] = useState(mockTasks);

  function handleDeleteTask(id: number) {
    const removedTask = tasks.filter((task) => task.id !== id);
    setTasks(removedTask);
  }

  function passLineThrough(status: boolean) {
    return status ? "withLineThrough" : "withoutLineThrough";
  }

  function handleCheck(id: number) {
    const changeStatusTask = tasks.map((task) =>
      task.id === id ? { ...task, status: !task.status } : task
    );
    setTasks(changeStatusTask);
  }

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <form action="" className={styles.form}>
          <input placeholder="Adicione um nova tarefa" />
          <button>
            <span>Criar</span>
            <img src={plusCircle} />
          </button>
        </form>
        <div className={styles.taskContainer}>
          <div className={styles.headerTaskContainer}>
            <div className={styles.infoTasks}>
              <span id="taskOnBoard">Tarefas criadas</span>
              <div>0</div>
            </div>
            <div className={styles.infoTasks}>
              <span id="finishedTask">Concluídas</span>
              <div>0</div>
            </div>
          </div>
          <div className={styles.tasks}>
            {tasks.map(({ id, content, status }) => (
              <div key={id} className={styles.task}>
                <button
                  onClick={() => handleCheck(id)}
                  className={`${styles.buttonChecked} ${
                    styles[!!status ? "checked" : ""]
                  }`}
                >
                  {status ? <Checked /> : <Unchecked />}
                </button>
                <span className={styles[passLineThrough(status)]}>
                  {content}
                </span>
                <button
                  onClick={() => handleDeleteTask(id)}
                  className={styles.buttonDelete}
                >
                  <Trash size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
