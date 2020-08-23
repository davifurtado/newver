import React, { useContext, useState } from 'react';
import { NaverContext } from '../contexts/NaverContext';
import NaverDetails from './NaverDetails';
import NaverForm from './NaverForm';
import Modal from 'react-bootstrap/Modal';

const NaversList = () => {
    const { navers } = useContext(NaverContext);
    const [showModal, setShowModal] = useState(false);

    console.log('showModal', showModal);
            
    return navers.length ? (
        <div>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Cadastro</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NaverForm />
                </Modal.Body>
            </Modal>
            <button onClick={() => setShowModal(true)}>Cadastrar Naver</button>
            <div className="">
                <ul>
                    {
                        navers.map((naver) => {
                            return ( <NaverDetails naver={naver} key={naver.id} />)
                        })
                    }
                </ul>
            </div>
        </div>
    ) : (
        <div className="empty">
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Cadastro</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NaverForm />
                </Modal.Body>
            </Modal>
            Nenhum Naver cadastrado
            <button onClick={() => setShowModal(true)}>Cadastrar Naver</button>
        </div>
    )
}

export default NaversList
