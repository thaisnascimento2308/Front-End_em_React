
import { StatsCard } from "../StatsCard/StatsCard";
import styles from "./styles.module.scss";
// Define e exporta o componente funcional Header
export const Header:React.FC = () => { // Define o componente funcional Header
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>MyTodo</h1>

          <span>Bem-vinda, Thais Nascimento!</span>
        </div>
        <div>
          <StatsCard title="Total de Tarefas" value={5} />
          <StatsCard title="Tarefas Pendentes" value={4} />
          <StatsCard title="Tarefas Concluídas" value={1} />
        </div>
      </div>
    </header>
  )
};