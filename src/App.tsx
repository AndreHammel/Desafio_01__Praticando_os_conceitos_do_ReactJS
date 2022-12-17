import { Header } from "./components/Header/Header";
import "./global.css";
import styles from "./App.module.css";
import { Form } from "./components/Form/Form";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Form />
      </div>
    </div>
  );
}
