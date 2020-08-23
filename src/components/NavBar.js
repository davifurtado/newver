import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const NavBar = () => {
    const { user, logout } = useContext(AuthContext);
    return (
        <div className="navbar">
            <button onClick={logout} className="sair">Sair</button>
            <h1>Bem vindo(a), { user[0].user}</h1>
            <h2>Navers</h2>
        </div>
    );
}

export default NavBar
