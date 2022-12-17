import clipboard from "../../assets/clipboard.svg";
import styles from "./NoTaskInfo.module.css";

export function NoTasksInfo() {
  return (
    <div className={styles.noTaskInfo}>
      <img src={clipboard} alt="" />
      <div>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
