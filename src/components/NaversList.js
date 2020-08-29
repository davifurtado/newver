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
            <button onClick={() => setShowModal(true)} style={{ backgroundColor: '#555555', color: 'white' }}>Cadastrar Naver</button>
            <div>
                <div 
                    style={{ 
                        display: 'flex',
                        overflow: 'auto',
                        width: '100%',
                        padding: '10px'
                    }}
                >
                    {
                        navers.map((naver) => {
                            return ( <NaverDetails naver={naver} key={naver.id} />)
                        })
                    }
                </div>
            </div>
        </div>
    ) : (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Cadastro</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NaverForm />
                </Modal.Body>
            </Modal>
            Nenhum Naver cadastrado
            <div>
                <button onClick={() => setShowModal(true)} style={{ backgroundColor: '#555555', color: 'white' }}>Cadastrar Naver</button>
            </div>
        </div>
    )
}

export default NaversList
