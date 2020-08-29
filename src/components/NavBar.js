import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { NaverContext } from '../contexts/NaverContext';

const NavBar = () => {
    const { user, logout } = useContext(AuthContext);
    const { navers } = useContext(NaverContext);
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <div>
                <button onClick={logout} style={{ backgroundColor: '#555555', color: 'white' }} >Sair</button>
            </div>
            <h1>Bem vindo(a), { user[0].user}</h1>
            <h2>{`Atualmente existem ${navers.length} Navers cadastrados!`}</h2>
        </div>
    );
}

export default NavBar
