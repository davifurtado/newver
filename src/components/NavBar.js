import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { NaverContext } from '../contexts/NaverContext';

const NavBar = () => {
    const { user, logout } = useContext(AuthContext);
    const { navers } = useContext(NaverContext);
    return (
        <div className="navbar">
            <button onClick={logout} className="sair">Sair</button>
            <h1>Bem vindo(a), { user[0].user}</h1>
            <h2>{`Atualmente existem ${navers.length} Navers cadastrados!`}</h2>
        </div>
    );
}

export default NavBar
