
import "./styles.css";
// Define e exporta o componente funcional Header
export const Header:React.FC = () => { // Define o componente funcional Header
  return (
    <header className="header">
      <div>
        <h1>MyTodo</h1>

        <span>Bem-vinda, Thais.</span>
      </div>

      <div>{/*Cards*/}</div>
    </header>
  )
};