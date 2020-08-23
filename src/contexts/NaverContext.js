import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';

export const NaverContext = createContext();

const NaverContextProvider = (props) => {
    const { user } = useContext(AuthContext);
    const [navers, setNavers] = useState([]);

    // const token = `Bearer ${user[0].token}`
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
                
                setNavers(response.data)
            })
            .catch((error) => {
                
            });
    }, [user]);

    const createNaver = (naver) => {
        const data = JSON.stringify({
            "name": naver.name,
            "birthdate": naver.birthdate,
            "admission_date": naver.admission_date,
            "job_role": naver.job_role,
            "project": naver.project,
            "url": naver.url
        });
        const create = {
            method: 'post',
            url: 'https://navedex-api.herokuapp.com/v1/navers',
            headers: { 
                'Authorization': `Bearer ${user[0].token}`,
                'Content-Type': 'application/json'
            },
            data : data
        };
        axios(create)
            .then((response) => {
                getNavers();
                alert('Sucesso!')
            })
            .catch((error) => {
                alert(error)
            });
    }

    const deleteNaver = (id) => {
        const config = {
          method: 'delete',
          url: `https://navedex-api.herokuapp.com/v1/navers/${id}`,
          headers: { 
            'Authorization': `Bearer ${user[0].token}`,
          }
        };
        
        axios(config)
            .then((response) => {
                getNavers();
                
            })
            .catch((error) => {
                
            });
    }

    const updateNaver = (naver) => {
        const data = JSON.stringify({
            "name": naver.name,
            "birthdate": naver.birthdate,
            "admission_date": naver.admission_date,
            "job_role": naver.jobRole,
            "project": naver.project,
            "url": naver.url
        });

        const config = {
        method: 'put',
        url: `https://navedex-api.herokuapp.com/v1/navers/${naver.id}`,
        headers: { 
            'Authorization': `Bearer ${user[0].token}`,
            'Content-Type': 'application/json'
        },
        data : data
        };

        axios(config)
            .then((response) => {
                getNavers();
                
            })
            .catch((error) => {
                
            });

    }

    useEffect(() => {
        getNavers()
    }, [getNavers])

    return (
        <NaverContext.Provider value={{ navers, getNavers, createNaver, deleteNaver, updateNaver }}>
            { props.children }
        </NaverContext.Provider>
    );
}

export default NaverContextProvider
