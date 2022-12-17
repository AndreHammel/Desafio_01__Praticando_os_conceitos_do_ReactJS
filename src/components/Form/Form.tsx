import styles from "./Form.module.css";
import plusCircle from "../../assets/plusCircle.svg";
import { FormEvent, InvalidEvent, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { TaskContainer } from "../TaskContainer/TaskContainer";

export interface ITask {
  id: string;
  content: string;
  done: boolean;
}

export function Form() {
  const [tasks, setTasks] = useState<ITask[]>([]);

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

  function handleCheck(id: string) {
    const changeStatusTask = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(changeStatusTask);
  }

  function handleDeleteTask(id: string) {
    const removedTask = tasks.filter((task) => task.id !== id);
    setTasks(removedTask);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  return (
    <>
      <form action="" className={styles.form} onSubmit={handleSubmit}>
        <input
          placeholder="Adicione um nova tarefa"
          name="taskInput"
          onInvalid={handleNewTaskInvalid}
          required
        />
        <button>
          <span>Criar</span>
          <img src={plusCircle} />
        </button>
      </form>
      <TaskContainer
        tasks={tasks}
        onHandleCheck={handleCheck}
        onHandleDeleteTask={handleDeleteTask}
      />
    </>
  );
}
