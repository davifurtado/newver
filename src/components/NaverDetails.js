import React, { useContext, useState } from 'react';
import { NaverContext } from '../contexts/NaverContext';
import moment from 'moment';
import Modal from 'react-bootstrap/Modal';
import NaverForm from './NaverForm';

const NaverDetails = ({ naver }) => {
    const [showModal, setShowModal] = useState(false);
    const [imageLoadError, setImageLoadError] = useState(true)
    const { deleteNaver } = useContext(NaverContext)
    return (
        <div style={{ minWidth: '30%' }}>
            <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Cadastro</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NaverForm naver={naver} />
                </Modal.Body>
            </Modal>
            <div 
                style={{ 
                    display: 'flex',
                    border: '2px solid',
                    height: '30vh',
                    marginRight: '5px'
                }}
            >
                <div style={{ flex: 3 }}>
                    <img
                        src={naver.url}
                        alt="naver"
                        // onError={(e)=>{e.target.onerror = null; e.target.src="https://images.pexelsz.com/photos/825949/pexels-photo-825949.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}}
                        onError={e => { 
                            if(imageLoadError) { 
                                setImageLoadError(false)
                                e.target.src = 'https://images.pexels.com/photos/825949/pexels-photo-825949.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
                            }
                        }}
                        width="100%"
                        height="100%"
                    />
                </div>
                <div style={{ flex: 2 }}>
                    <div >Nome: { naver.name }</div>
                    <div >Data Admissão: { moment(naver.admission_date,'YYYY-MM-DD').format('DD/MM/YYYY') }</div>
                    <div >Cargo: { naver.job_role }</div>
                    <div >Projeto: { naver.project }</div>
                    <div >Aniversário: { moment(naver.birthdate,'YYYY-MM-DD').format('DD/MM/YYYY') }</div>
                    <div style={{ cursor: 'pointer' }} onClick={() => deleteNaver(naver.id)}>X</div>
                    <div style={{ cursor: 'pointer' }} onClick={() => setShowModal(true)}>Editar</div>
                </div>
            </div>
        </div>
    );
}

export default NaverDetails
