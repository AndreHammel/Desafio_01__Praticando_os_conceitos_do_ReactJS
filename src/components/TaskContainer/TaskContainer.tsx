import styles from "./TaskContainer.module.css";

import { Task } from "../Task/Task";
import { ITask } from "../Form/Form";
import { HeaderTaskContainer } from "../HeaderTaskContainer/HeaderTaskContainer";
import { NoTasksInfo } from "../NoTasksInfo/NoTasksInfo";

interface TaskContainerProps {
  tasks: ITask[];
  onHandleCheck: (id: string) => void;
  onHandleDeleteTask: (id: string) => void;
}

export function TaskContainer({
  tasks,
  onHandleCheck: handleCheck,
  onHandleDeleteTask: handleDeleteTask,
}: TaskContainerProps) {
  const noTasks = tasks.length === 0;
  return (
    <div className={styles.taskContainer}>
      <HeaderTaskContainer tasks={tasks} />
      {noTasks ? (
        <NoTasksInfo />
      ) : (
        <div className={styles.tasks}>
          {tasks.map((task) => (
            <Task
              task={task}
              onHandleCheck={handleCheck}
              onHandleDeleteTask={handleDeleteTask}
            />
          ))}
        </div>
      )}
    </div>
  );
}

{
  /* <div className={styles.taskContainer}>
<HeaderTaskContainer tasks={tasks} />
<div className={styles.tasks}>
  {tasks.map((task) => (
    <Task
      task={task}
      onHandleCheck={handleCheck}
      onHandleDeleteTask={handleDeleteTask}
    />
  ))}
</div>
<div>SEM</div>
</div> */
}
