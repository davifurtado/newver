import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';

export const NaverContext = createContext();

const NaverContextProvider = (props) => {
    const { user } = useContext(AuthContext);
    const [navers, setNavers] = useState([]);

    const getNavers = useCallback(() => {
        const getNavers = {
            method: 'get',
            url: 'https://navedex-api.herokuapp.com/v1/navers',
            headers: { 
                'Authorization': `Bearer ${user[0].token}`
            }
        };
        axios(getNavers)
            .then((response) => {
                console.log(response);
                setNavers(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }, [user]);

    useEffect(() => {
        getNavers()
    }, [getNavers])
    return (
        <NaverContext.Provider value={{ navers, getNavers }}>
            { props.children }
        </NaverContext.Provider>
    );
}

export default NaverContextProvider
