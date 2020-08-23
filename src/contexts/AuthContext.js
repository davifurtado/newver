import React, { createContext, useState } from 'react';
import axios from 'axios'

export const AuthContext = createContext();

// O sistema de login pode ser feito através do context para englobar a aplicação inteira sem precisar de redux. 
const AuthContextProvider = (props) => {
    const [user, setUser] = useState([]);
    const handleLogin = (email, password) => {
        const data = JSON.stringify({"email":`${email}`,"password":`${password}`});
        
        const config = {
          method: 'post',
          url: 'https://navedex-api.herokuapp.com/v1/users/login',
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };
        
        axios(config)
        .then((response) => {
          setUser([{ user: response.data.email, token: response.data.token, id: response.data.id }])
        })
        .catch((error) => {
          alert(error);
        });
    }
    const logout = () => {
        setUser([])
    }
    return (
        <AuthContext.Provider value={{ user, handleLogin, logout }}>
            { props.children }
        </AuthContext.Provider>
    );
}

export default AuthContextProvider
