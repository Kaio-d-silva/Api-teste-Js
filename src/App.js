import './App.css';
import { Fragment, useState } from 'react';
import { fetchAlunos, createAluno, updateAluno, deleteAluno } from './service/http'
import ListaAlunos from './components/lista-alunos';
import FormularioAlunos from './components/formulario-aluno';

function App() {

  const [aluno, setAluno] = useState({ id: '', nome: '', curso: '' });
  const [alunos, setAlunos] = useState([]);

  async function loadAlunos() {
    const alunos = await fetchAlunos();
    console.log(alunos)
    setAlunos(alunos);
  }
  async function createAlunoAPI(aluno) {
    if (aluno.id !== undefined && aluno.id !== '') {
      await updateAluno(aluno)
    }
    aluno.id = alunos.length + 1;
    await createAluno(aluno);
    setAluno({ id: '', nome: '', curso: '' });
    loadAlunos();
  }
  async function updateAlunoAPI(aluno) {
    // await updateAluno(aluno);
    // setAluno({ id: '', nome: '', curso: '' });
    setAluno(aluno);
    loadAlunos();
  }
  async function deleteAlunoAPI(id) {
    await deleteAluno(id);
    loadAlunos();
  }


  // const handleInput = inputName => event => {
  //   console.log(inputName, event.target.value)
  //   setAluno({...aluno, [inputName]:event.target.value})
  // }

  const handleInput = event => {
    const inputName = event.target.id
    const inputValue = event.target.value
    setAluno({ ...aluno, [inputName]: inputValue });
  }

  return (
    <Fragment>
      <div className="container">
        <h1>Gerenciamento de Alunos</h1>
        <FormularioAlunos
          submitForm={createAlunoAPI}
          handleInput={handleInput}
          aluno={aluno}
        />
        <h2>Lista de Alunos</h2>
        <ListaAlunos
          alunos={alunos}
          updateAlunoAPI={updateAlunoAPI}
          deleteAlunoAPI={deleteAlunoAPI} />
      </div>
    </Fragment>
  );
}
export default App;
