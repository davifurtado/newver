import React, { useContext } from 'react';
import { NaverContext } from '../contexts/NaverContext'

const NaverDetails = ({ naver }) => {
    const { deleteNaver } = useContext(NaverContext)
    return (
        <li>
            <div >Nome: { naver.name }</div>
            <div >Data Admissão: { naver.admission_date }</div>
            <div >Cargo: { naver.job_role }</div>
            <div >Projeto: { naver.project }</div>
            <div >Aniversário: { naver.birthdate }</div>
            <div style={{ cursor: 'pointer' }} onClick={() => deleteNaver(naver.id)}>X</div>
            <div style={{ cursor: 'pointer' }} onClick={() => deleteNaver(naver.id)}>Editar</div>
        </li>
    );
}

export default NaverDetails
