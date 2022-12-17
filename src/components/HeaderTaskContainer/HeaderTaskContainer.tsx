import styles from "./HeaderTaskContainer.module.css";
import { ITask } from "../Form/Form";

interface HeaderTaskContainerProps {
  tasks: ITask[];
}

export function HeaderTaskContainer({ tasks }: HeaderTaskContainerProps) {
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

  return (
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
  );
}
