import './App.css';
import { Fragment , useState } from 'react';
import { fetchAlunos, createAluno, updateAluno, deleteAluno } from './service/http'

function App() {
  
  const [aluno , setAluno] = useState({id: '',nome: '', curso: ''});
  const [alunos , setAlunos] = useState([]);

  async function loadAlunos() {
    const alunos = await fetchAlunos();
    setAlunos(alunos);
  }

  async function createAlunoApi(aluno) {
    await createAluno(aluno);
    setAluno({id: '', nome: '', curso: ''});
    loadAlunos();
    
  }
  async function updateAlunoAPI(aluno) {
    await updateAluno(aluno);
    setAluno({id: '', nome: '', curso: ''});
    loadAlunos();
    
  }
  async function deleteAlunoAPI(aluno) {
    await deleteAluno(aluno);
    loadAlunos();
    
  }
  return (
    <Fragment>
      <div className="container">
        <h1>Gerenciamento de Alunos</h1>

        <form id="alunoForm" onSubmit={(event) => {
          event.preventDefault();
          createAlunoApi(aluno);
        }}>
          <input type="hidden" id="alunoId" onChange={(value) =>
            setAluno({...aluno, id: value.target.value})
          } value={aluno.id} />
          <input type="text" id="nome" placeholder="Nome" onChange={(value) =>
            setAluno({...aluno, nome: value.target.value})
          } required value={aluno.nome}/>
          <input type="text" id="curso" placeholder="Curso" onChange={(value) =>
            setAluno({...aluno, curso: value.target.value})
          } required value={aluno.curso}/>
          <button onClick={() => createAlunoApi(aluno)}>Salvar</button>
        </form>
        <h2>Lista de Alunos</h2>
        <ul id="alunosList">
          {alunos.map(aluno => {
            <li key={aluno.id}>
              {aluno.nome} - {aluno.curso}
              <button onClick={() => updateAlunoAPI(aluno)}>Editar</button>
              <button onClick={() => deleteAlunoAPI(aluno)}>Deletar</button>
            </li>
          })}
        </ul>
      </div>
    </Fragment>
  );
}

export default App;
