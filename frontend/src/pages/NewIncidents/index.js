import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'
import './styles.css'

import logoImg from '../../assets/logo.svg'

function NewIncident() {
    const [title, setTitle] = useState('')
    const [descripition, setDescripition] = useState('')
    const [value, setValue] = useState('')

    const history = useHistory()

    const ongId = localStorage.getItem('ongId')

    async function handleNewIncident(e) {
        e.preventDefault()

        const data = {
            title,
            descripition,
            value,
        }
        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            })
            history.push('/profile')
        } catch (err) {
            alert('Erro ao cadastrar caso, tente novamente')
        }
    }

    return (
        <div className="new-incidents-container">
            <div className="content">
                <section>
                   <img src={logoImg} alt=""/>

                   <h1>Cadastro novo caso</h1>
                   <p>Descreva o caso detalhadamente para encontrar um herói para resolver isoo.</p>

                   <Link className="back-link" to="/profile">
                       <FiArrowLeft size={16} color="E02041" />
                       Voltar para Home
                   </Link>
                </section>
            
                <form onSubmit={handleNewIncident}>
                   <input 
                        placeholder="Título do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                   />
                   <textarea 
                        placeholder="Descrição"
                        value={descripition}
                        onChange={e => setDescripition(e.target.value)}
                    />
                   <input 
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                   />

                   <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

export default NewIncident