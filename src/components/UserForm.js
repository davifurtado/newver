import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const UserForm = () => {
    const { handleLogin } = useContext(AuthContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleOnSubmit = (e) => {
        e.preventDefault();
        handleLogin(email, password);
        setEmail('');
        setPassword('');
    }
    return (
        <form className="user-form" onSubmit={handleOnSubmit}>
            <input
                placeholder="Email..."
                //className=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                maxLength={48}
            />
            <input
                type="password"
                placeholder="Senha..."
                //className=""
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                maxLength={48}
                minLength={6}
            />
            <div>
                <button type="submit" style={{ backgroundColor: '#555555', color: 'white' }}>Fazer Login</button>
            </div>
            <label style={{ fontSize: '12px' }}>(para fins de testes utilize: "newver@teste.com" com a senha "testes")</label>
        </form>
    );
}

export default UserForm
