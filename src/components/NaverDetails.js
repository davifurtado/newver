import React, { useContext } from 'react';

const NaverDetails = ({ naver }) => {
    return (
        <li>
            <div >Nome: { naver.name }</div>
            <div >Data Admissão: { naver.admission_date }</div>
            <div >Cargo: { naver.job_role }</div>
            <div >Projeto: { naver.project }</div>
            <div >Aniversário: { naver.birthdate } KM</div>
        </li>
    );
}

export default NaverDetails