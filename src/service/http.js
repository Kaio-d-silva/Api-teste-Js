export  const fetchAlunos = async () => {
    const response = await fetch('http://localhost:9000/alunos');
    return await response.json();
};

export  const createAluno = async (aluno) => {
    await fetch('http://localhost:9000/alunos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(aluno)
    });
    fetchAlunos();
};

export  const updateAluno = async (aluno) => {
    await fetch(`http://localhost:9000/alunos/${aluno.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(aluno)
    });
    fetchAlunos();
};

export  const deleteAluno = async (id) => {
    await fetch(`http://localhost:9000/alunos/${id}`, {
        method: 'DELETE'
    });
    fetchAlunos();
};

 