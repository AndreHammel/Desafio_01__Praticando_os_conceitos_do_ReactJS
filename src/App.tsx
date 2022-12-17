import React, { FormEvent } from "react";
import { Header } from "./components/Header/Header";
import "./global.css";
import styles from "./App.module.css";
import plusCircle from "./assets/plusCircle.svg";
import { Trash } from "phosphor-react";
import { useState } from "react";
import { Checked } from "./assets/Checked";
import { Unchecked } from "./assets/Unchecked";
import { v4 as uuidV4 } from "uuid";

// let mockTasks = [
//   {
//     id: 1,
//     content:
//       "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
//     done: false,
//   },
//   {
//     id: 2,
//     content:
//       "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
//     done: false,
//   },
//   {
//     id: 3,
//     content:
//       "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
//     done: false,
//   },
// ];

interface ITask {
  id: string;
  content: string;
  done: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function handleDeleteTask(id: string) {
    const removedTask = tasks.filter((task) => task.id !== id);
    setTasks(removedTask);
  }

  function passLineThrough(done: boolean) {
    return done ? "withLineThrough" : "withoutLineThrough";
  }

  function handleCheck(id: string) {
    const changeStatusTask = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(changeStatusTask);
  }

  function finishedTasks() {
    const amountTotalTasks = tasks.length;
    const amountTasksFinished = tasks.reduce((acc, curr) => {
      if (curr.done) {
        return acc + 1;
      }
      return acc;
    }, 0);
    return `${amountTasksFinished} de ${amountTotalTasks}`;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const target = event.currentTarget;
    const newTask: ITask = {
      id: uuidV4(),
      content: target.taskInput.value,
      done: false,
    };
    setTasks((prev: ITask[]) => [...prev, newTask]);
  }

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <form action="" className={styles.form} onSubmit={handleSubmit}>
          <input placeholder="Adicione um nova tarefa" name="taskInput" />
          <button>
            <span>Criar</span>
            <img src={plusCircle} />
          </button>
        </form>
        <div className={styles.taskContainer}>
          <div className={styles.headerTaskContainer}>
            <div className={styles.infoTasks}>
              <span id="taskOnBoard">Tarefas criadas</span>
              <div>{tasks.length}</div>
            </div>
            <div className={styles.infoTasks}>
              <span id="finishedTask">Concluídas</span>
              <div>{finishedTasks()}</div>
            </div>
          </div>
          <div className={styles.tasks}>
            {tasks.map(({ id, content, done }) => (
              <div key={id} className={styles.task}>
                <button
                  onClick={() => handleCheck(id)}
                  className={`${styles.buttonChecked} ${
                    styles[!!done ? "checked" : ""]
                  }`}
                >
                  {done ? <Checked /> : <Unchecked />}
                </button>
                <span className={styles[passLineThrough(done)]}>{content}</span>
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
