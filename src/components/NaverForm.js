import React, { useContext, useState } from 'react';
import { NaverContext } from '../contexts/NaverContext';

const NaverForm = ({ naver }) => {
    const { createNaver, updateNaver } = useContext(NaverContext)
    const [imageLoadError, setImageLoadError] = useState(true)
    const handleOnSubmitCreate = (e) => {
        e.preventDefault();
        createNaver({
            name: e.target.name.value,
            birthdate:`${e.target.birthdate.value.replaceAll('-','/')} 00:00:00`,
            admission_date: `${e.target.admission_date.value.replaceAll('-','/')} 00:00:00`,
            job_role: e.target.job_role.value,
            project: e.target.project.value,
            url: e.target.url.value
        })
    }
    const handleOnSubmitEdit = (e) => {
        e.preventDefault();
        updateNaver({
            name: e.target.name.value,
            birthdate:`${e.target.birthdate.value.replaceAll('-','/')} 00:00:00`,
            admission_date: `${e.target.admission_date.value.replaceAll('-','/')} 00:00:00`,
            job_role: e.target.job_role.value,
            project: e.target.project.value,
            url: e.target.url.value,
            id: naver.id
        })
    }
    return naver ? (
        <div style={{ display: 'flex' }}>
            <div style={{ flex: 3 }}>
                <img
                    src={naver.url}
                    alt="naver"
                    onError={e => { 
                        if(imageLoadError) { 
                            setImageLoadError(false)
                            e.target.src = 'https://images.pexels.com/photos/3697676/pexels-photo-3697676.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
                        }
                    }}
                    width="100%"
                    height="100%"
                />
                </div>
        <form onSubmit={handleOnSubmitEdit} style={{ flex: 2, overFlow: 'auto' }}>
            <div>
                <label>Nome:</label>
                <input required name="name" minLength={3} maxLength={48} defaultValue={naver.name} />
            </div>
            <div>
                <label>Data Admissão: </label>
                <input required  type="date" name="admission_date" defaultValue={naver.admission_date.substring(0,10)} />
            </div>
            <div>
                <label>Cargo: </label>
                <input required minLength={3} maxLength={48} name="job_role" defaultValue={ naver.job_role } />
            </div>
            <div>
                <label>Projeto: </label>
                <input required name="project" maxLength={48} defaultValue={ naver.project } />
            </div>
            <div>
                <label>Aniversário: </label>
                <input required type="date" name="birthdate" defaultValue={ naver.birthdate.substring(0,10) } onChange={(e) => console.log(e.target.value)}/>
            </div>
            <div>
                <label >URL: </label>
                <input required minLength={5} name="url" defaultValue={naver.url}/>
            </div>
            <div>
                <button type="submit" style={{ backgroundColor: '#555555', color: 'white' }}>Gravar</button>
            </div>
        </form>
        </div>
    ) : (
        <form onSubmit={handleOnSubmitCreate} style={{ overFlow: 'auto' }}>
            <div>
                <label>Nome:</label>
                <input required minLength={3} name="name"/>
            </div>
            <div>
                <label>Data Admissão: </label>
                <input type="date" name="admission_date" placeholder="yyyy-mm-dd"/>
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
                <input type="date" name="birthdate" placeholder="yyyy-mm-dd" onChange={(e) => console.log(e.target.value)}/>
            </div>
            <div>
                <label>URL: </label>
                <input required minLength={5} name="url"/>
            </div>
            <div>
                <button type="submit" style={{ backgroundColor: '#555555', color: 'white' }}>Cadastrar</button>
            </div>
        </form>
    )
}

export default NaverForm
