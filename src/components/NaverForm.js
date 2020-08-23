import React from 'react';
import Modal from 'react-bootstrap/Modal'

const NaverForm = ({ naver }) => {
    const fields = () => {
        return naver ? (
            <form>
                <div>
                    <label>Nome:</label>
                    <input value={naver.name} />
                </div>
                <div>
                    <label>Data Admissão: </label>
                    <input value={ naver.admission_date }/>
                </div>
                <div>
                    <label>Cargo: </label>
                    <input value={ naver.job_role } />
                </div>
                <div>
                    <label>Projeto: </label>
                    <input value={ naver.project } />
                </div>
                <div>
                    <label>Aniversário: </label>
                    <input value={ naver.birthdate }/>
                </div>
            </form>
        ) : (
            <form>
                <div>
                    <label>Nome:</label>
                    <input/>
                </div>
                <div>
                    <label>Data Admissão: </label>
                    <input/>
                </div>
                <div>
                    <label>Cargo: </label>
                    <input/>
                </div>
                <div>
                    <label>Projeto: </label>
                    <input/>
                </div>
                <div>
                    <label>Aniversário: </label>
                    <input/>
                </div>
            </form>
        )
    }
    return (
        <Modal show={true} >
            <Modal.Header closeButton>
                <Modal.Title>Cadastro</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {fields()}
            </Modal.Body>
        </Modal>
    )
}

export default NaverForm
