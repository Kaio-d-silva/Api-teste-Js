const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); // Habilita CORS para todas as requisições
app.use(express.json());

let alunos = [];

// Endpoint para listar alunos
app.get('/alunos', (req, res) => {
    res.json(alunos);
});

// Endpoint para criar aluno
app.post('/alunos', (req, res) => {
    const aluno = req.body;
    alunos.push(aluno);
    res.status(201).json(aluno);
});

// Endpoint para editar aluno
app.put('/alunos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const alunoAtualizado = req.body;
    alunos = alunos.map(aluno => (aluno.id === id ? alunoAtualizado : aluno));
    res.json(alunoAtualizado);
});

// Endpoint para deletar aluno
app.delete('/alunos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    alunos = alunos.filter(aluno => aluno.id !== id);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});