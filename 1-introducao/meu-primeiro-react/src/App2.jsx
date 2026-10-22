// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

function App() {
  let n = 10;
  const pessoas = ["Daniel", "Maria", "João", "joana"];
  const contatos = [
    { nome: "Daniel", email: "daniel@server" },
    { nome: "Maria", email: "maria@server" },
    { nome: "João", email: "joao@server" },
  ];
  return (
    <>
      <h1>Teste h1 {n}</h1>
      <h2>Meu primeiro componente</h2>
      <div>
        {pessoas.map((pessoa) => (
          <>
            <p> {pessoa} </p>
          </>
        ))}
      </div>
      <br />
      <div>
        {contatos.map((contato) => (
          <>
            <p> {contato.nome}</p>
            <p>{contato.email}</p>
          </>
        ))}
      </div>
    </>
  );
}

export default App;
