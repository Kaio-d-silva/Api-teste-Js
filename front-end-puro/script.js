document.addEventListener('DOMContentLoaded', () => {
    const alunoForm = document.getElementById('alunoForm');
    const alunosList = document.getElementById('alunosList');

    const fetchAlunos = async () => {
        const response = await fetch('http://localhost:9000/alunos');
        const alunos = await response.json();
        alunosList.innerHTML = '';
        alunos.forEach(aluno => {
            const li = document.createElement('li');
            li.textContent = `${aluno.nome} - ${aluno.curso}`;
            const editButton = document.createElement('button');
            
            editButton.textContent = 'Editar';
            editButton.onclick = () => editAluno(aluno);
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Deletar';
            deleteButton.onclick = () => deleteAluno(aluno.id);
            li.appendChild(editButton);
            li.appendChild(deleteButton);
            alunosList.appendChild(li);
        });
    };

    const createAluno = async (aluno) => {
        await fetch('http://localhost:9000/alunos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(aluno)
        });
        fetchAlunos();
    };

    const updateAluno = async (aluno) => {
        await fetch(`http://localhost:9000/alunos/${aluno.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(aluno)
        });
        fetchAlunos();
    };

    const deleteAluno = async (id) => {
        await fetch(`http://localhost:9000/alunos/${id}`, {
            method: 'DELETE'
        });
        fetchAlunos();
    };

    const editAluno = (aluno) => {
        document.getElementById('alunoId').value = aluno.id;
        document.getElementById('nome').value = aluno.nome;
        document.getElementById('curso').value = aluno.curso;
    };

    alunoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const id = document.getElementById('alunoId').value;
        const nome = document.getElementById('nome').value;
        const curso = document.getElementById('curso').value;
        const aluno = { id: parseInt(id) || Date.now(), nome, curso };
        if (id) {
            updateAluno(aluno);
        } else {
            createAluno(aluno);
        }
        alunoForm.reset();
    });

    fetchAlunos();
    });