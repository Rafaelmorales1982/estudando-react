import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Button />
      <Button />
      <Button />
      <Card titulo = "Título 1" descricao = "Descrição 1" />
      <Card titulo = "Título 2" descricao = "Descrição 2" />
      <Card titulo = "Título 3" descricao = "Descrição 3" />

  
    </>
  );
}

export default App;
