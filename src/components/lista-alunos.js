const ListaAlunos = ({alunos , updateAlunoAPI, deleteAlunoAPI}) => {
    return (
        <ul>
            {alunos.map((aluno, index) => (
                <li key = {aluno.index}>
                    {aluno.nome} - {aluno.curso}
                    <button onClick={() => updateAlunoAPI(aluno)}>Editar</button>
                    <button onClick={() => deleteAlunoAPI(aluno.id)}>Deletar</button>
                </li>
            ))}
        </ul>
    );
}

export default ListaAlunos;