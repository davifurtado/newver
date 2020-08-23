import React, { useContext } from 'react';
import { NaverContext } from '../contexts/NaverContext';
import NaverDetails from './NaverDetails';
import NaverForm from './NaverForm';

const NaversList = () => {
    const { navers } = useContext(NaverContext);
    return navers.length ? (
        <div>
            <button>Cadastrar Naver</button>
            <div className="">
                <ul>
                    {
                        navers.map((naver) => {
                            return ( <NaverDetails naver={naver} key={naver.id} />)
                        })
                    }
                </ul>
            </div>
        </div>
    ) : (
        <div className="empty">
            <NaverForm />
            Nenhum Naver cadastrado
            <button>Cadastrar Naver</button>
        </div>
    )
}

export default NaversList
