import './App.css';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <div className="container">
        <h1>Gerenciamento de Alunos</h1>

         <form id="alunoForm">
            <input type="hidden" id="alunoId"/>
            <input type="text" id="nome" placeholder="Nome" required/>
            <input type="text" id="curso" placeholder="Curso" required/>
            <button type="submit">Salvar</button>
         </form>
    
        <h2>Lista de Alunos</h2>
        <ul id="alunosList"></ul>
      </div>
    </Fragment>
  );
}

export default App;
