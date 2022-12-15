import { Header } from "./components/Header/Header";
import "./global.css";
import styles from "./App.module.css";
import plusCircle from "./assets/plusCircle.svg";

export function App() {
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
          <div className={styles.tasks}>CONTAINER TASKS</div>
        </div>
      </div>
    </div>
  );
}
