import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import UserForm from '../components/UserForm';
import NavBar from '../components/NavBar';
import NaverContextProvider from '../contexts/NaverContext';
import NaversList from '../components/NaversList';

const RootContainer = () => {
    const { user } = useContext(AuthContext);
    return user.length ? (
        <div
            style={{ 
                height: '100%',
                padding: '10px',
                backgroundColor: '#f5f6f7'
            }}
        >
            <NaverContextProvider>
                <NavBar />
                <NaversList />
            </NaverContextProvider>
        </div>
    ) : (
        <div
            style={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%'
            }}
        >
            <div
                style={{
                    width: '50%',
                    height: '50%',
                    border: '2px solid',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#f5f6f7'
                }}
            >
                <h1>Faça Login para prosseguir</h1>
                <UserForm />
            </div>
        </div>
    )
}

export default RootContainer
