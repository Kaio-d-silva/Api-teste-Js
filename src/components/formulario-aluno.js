import { Fragment } from "react"
import PropTypes from "prop-types";


const FormularioAlunos = ({submitForm, handleInput, aluno}) => {

    return (
        <Fragment>
            <form id="alunoForm" onSubmit={(event) => {
                event.preventDefault();
                submitForm(aluno);
            }}>
                <input type="hidden" id="Id" onChange={(event) => handleInput(event)} value={aluno?.id} />
                <input type="text" id="nome" placeholder="Nome" onChange={(event) => handleInput(event)} value={aluno?.nome} />
                <input type="text" id="curso" placeholder="Curso" onChange={(event) => handleInput(event)} value={aluno?.curso} />
                <button type='submit'>Salvar</button>
            </form>
        </Fragment>
    )
}


FormularioAlunos.propTypes = {
    submitForm : PropTypes.func.isRequired,
    handleInput : PropTypes.func.isRequired,
    aluno : PropTypes.object.isRequired,
}

export default FormularioAlunos;