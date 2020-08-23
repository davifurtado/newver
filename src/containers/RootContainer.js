import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import UserForm from '../components/UserForm';

const RootContainer = () => {
    const { user } = useContext(AuthContext);
    return user.length ? (
        <div>
            Você está logado !
        </div>
    ) : (
        <div className="root-container">
            <h1>Faça Login para prosseguir</h1>
            <UserForm />
        </div>
    )
}

export default RootContainer
