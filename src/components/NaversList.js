import React, { useContext } from 'react';
import { NaverContext } from '../contexts/NaverContext';

const NaversList = () => {
    const { navers } = useContext(NaverContext);
    return navers.length ? (
        <div>
            <div className="">
                <ul>
                    teste
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
