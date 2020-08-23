import React, { useContext } from 'react';
import { NaverContext } from '../contexts/NaverContext';

const NaverForm = ({ naver }) => {
    const { createNaver } = useContext(NaverContext)
    const handleOnSubmit = (e) => {
        e.preventDefault();
        createNaver({
            name: e.target.name.value,
            birthdate: e.target.birthdate.value,
            admission_date: e.target.admission_date.value,
            job_role: e.target.job_role.value,
            project: e.target.project.value,
            url: e.target.url.value
        })
    }
    return naver ? (
        <form>
            <div>
                <label>Nome:</label>
                <input value={naver.name} />
            </div>
            <div>
                <label>Data Admissão: </label>
                <input value={ naver.admission_date }/>
            </div>
            <div>
                <label>Cargo: </label>
                <input value={ naver.job_role } />
            </div>
            <div>
                <label>Projeto: </label>
                <input value={ naver.project } />
            </div>
            <div>
                <label>Aniversário: </label>
                <input value={ naver.birthdate }/>
            </div>
            <div>
                <label>URL: </label>
                <input name="url"/>
            </div>
            <div>
                <button type="submit">Gravar</button>
            </div>
        </form>
    ) : (
        <form onSubmit={handleOnSubmit}>
            <div>
                <label>Nome:</label>
                <input name="name"/>
            </div>
            <div>
                <label>Data Admissão: </label>
                <input name="admission_date"/>
            </div>
            <div>
                <label>Cargo: </label>
                <input name="job_role"/>
            </div>
            <div>
                <label>Projeto: </label>
                <input name="project"/>
            </div>
            <div>
                <label>Aniversário: </label>
                <input name="birthdate"/>
            </div>
            <div>
                <label>URL: </label>
                <input name="url"/>
            </div>
            <div>
                <button type="submit">Cadastrar</button>
            </div>
        </form>
    )
}

export default NaverForm
