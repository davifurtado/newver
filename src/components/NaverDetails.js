import React, { useContext } from 'react';
import { NaverContext } from '../contexts/NaverContext';
import moment from 'moment';

const NaverDetails = ({ naver }) => {
    const { deleteNaver } = useContext(NaverContext)
    return (
        <li>
            <div >Nome: { naver.name }</div>
            <div >Data Admissão: { moment(naver.admission_date,'YYYY-MM-DD').format('DD/MM/YYYY') }</div>
            <div >Cargo: { naver.job_role }</div>
            <div >Projeto: { naver.project }</div>
            <div >Aniversário: { moment(naver.birthdate,'YYYY-MM-DD').format('DD/MM/YYYY') }</div>
            <div style={{ cursor: 'pointer' }} onClick={() => deleteNaver(naver.id)}>X</div>
            <div style={{ cursor: 'pointer' }} onClick={() => deleteNaver(naver.id)}>Editar</div>
        </li>
    );
}

export default NaverDetails
