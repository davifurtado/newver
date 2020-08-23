import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';

// O código foi convertido para componentes do primeReact

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
                maxLength={9}
            />
            <input
                type="password"
                placeholder="Senha..."
                //className=""
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                maxLength={9}
                minLength={6}
            />
            <div>
                <button type="submit" label="Fazer Login"/>
            </div>
        </form>
    );
}

export default UserForm
