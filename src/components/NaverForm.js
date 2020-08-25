import React, { useContext } from 'react';
import { NaverContext } from '../contexts/NaverContext';

const NaverForm = ({ naver }) => {
    const { createNaver } = useContext(NaverContext)
    const handleOnSubmit = (e) => {
        e.preventDefault();
        createNaver({
            name: e.target.name.value,
            birthdate: `${e.target.birthdate.value.replace('-','/')} 00:00:00`,
            admission_date: `${e.target.admission_date.value.replace('-','/')} 00:00:00`,
            job_role: e.target.job_role.value,
            project: e.target.project.value,
            url: e.target.url.value
        })
    }
    return naver ? (
        <form>
            <div>
                <label>Nome:</label>
                <input required minLength={3} value={naver.name} />
            </div>
            <div>
                <label>Data Admissão: </label>
                <input required  value={ naver.admission_date }/>
            </div>
            <div>
                <label>Cargo: </label>
                <input required minLength={3} value={ naver.job_role } />
            </div>
            <div>
                <label>Projeto: </label>
                <input required  value={ naver.project } />
            </div>
            <div>
                <label>Aniversário: </label>
                <input required  value={ naver.birthdate }/>
            </div>
            <div>
                <label >URL: </label>
                <input required minLength={5} name="url"/>
            </div>
            <div>
                <button type="submit">Gravar</button>
            </div>
        </form>
    ) : (
        <form onSubmit={handleOnSubmit}>
            <div>
                <label>Nome:</label>
                <input required minLength={3} name="name"/>
            </div>
            <div>
                <label>Data Admissão: </label>
                <input type="date" name="admission_date"/>
            </div>
            <div>
                <label>Cargo: </label>
                <input required minLength={3} name="job_role"/>
            </div>
            <div>
                <label>Projeto: </label>
                <input required name="project"/>
            </div>
            <div>
                <label>Aniversário: </label>
                <input type="date" name="birthdate"/>
            </div>
            <div>
                <label>URL: </label>
                <input required minLength={5} name="url"/>
            </div>
            <div>
                <button type="submit">Cadastrar</button>
            </div>
        </form>
    )
}

export default NaverForm
