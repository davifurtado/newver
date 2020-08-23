import React, { useContext } from 'react';
import { NaverContext } from '../contexts/NaverContext';
import NaverDetails from './NaverDetails';

const NaversList = () => {
    const { navers } = useContext(NaverContext);
    return navers.length ? (
        <div>
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
            Nenhum Naver cadastrado
        </div>
    )
}

export default NaversList
