import styles from "./Task.module.css";
import { Checked } from "../../assets/Checked";
import { Unchecked } from "../../assets/Unchecked";
import { Trash } from "phosphor-react";
import { ITask } from "../Form/Form";

interface TaskProps {
  task: ITask;
  onHandleCheck: (id: string) => void;
  onHandleDeleteTask: (id: string) => void;
}

export function Task({ task, onHandleCheck, onHandleDeleteTask }: TaskProps) {
  function handleCheck(id: string) {
    onHandleCheck(id);
  }

  function handleDeleteTask(id: string) {
    onHandleDeleteTask(id);
  }

  function passLineThrough(done: boolean) {
    return done ? "withLineThrough" : "withoutLineThrough";
  }
  const { id, content, done } = task;
  return (
    <div key={id} className={styles.task}>
      <button
        onClick={() => handleCheck(id)}
        className={`${styles.buttonChecked} ${styles[done ? "checked" : ""]}`}
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
  );
}
