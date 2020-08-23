import React, { createContext/*, useState, useEffect*/ } from 'react';
import axios from 'axios'

export const AuthContext = createContext();

// O sistema de login pode ser feito através do context para englobar a aplicação inteira sem precisar de redux. 
const AuthContextProvider = (props) => {
    let user = []
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
          console.log(JSON.stringify(response.data));
          // setUser([{ user, password, id: 1 }])
        })
        .catch((error) => {
          console.log(error);
        });
    }
    /*const logout = () => {
        setUser([])
    }*/
    return (
        <AuthContext.Provider value={{ user, handleLogin }}>
            { props.children }
        </AuthContext.Provider>
    );
}

export default AuthContextProvider
