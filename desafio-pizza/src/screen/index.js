import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import api from '../services/api';
import './styles.css';

function EnvioMensagem() {
    const [formMsg, setFormMsg] = useState({ numero: '', mensagem: '' });

    function onChange(evt) {
        const value = evt.target.value;
        const key = evt.target.name;

        setFormMsg(old => ({
            ...old,
            [key]: value
        }));
    }

    async function handleMsg(evt) {
        evt.preventDefault();

        try {
            const response = await api.post('/envioMensagem', {
                id: formMsg.numero,
                message: formMsg.mensagem
            });

        } catch (error) {
            return
        }
    }

    return (
        <div className='screen'>
            <img src='imgSalt.jpg' alt='imgSalt' id='imgSalt' />
            <form className='boxMensagem' onSubmit={handleMsg}>
                <div className='divForm'>
                    <label className='labelPadrao'>Numero</label>
                    <input id='numero' placeHolder='55 11 8888-8888' label="teste" className='input_numero' type='text' name='numero' value={formMsg.numero} onChange={onChange} />
                </div>

                <div className='divForm'>
                    <label className='labelPadrao'>Envie uma mensagem</label>
                    <input id='mensagem' placeHolder='Mensagem da pizza' className='input_mensagem' type='text' name='mensagem' value={formMsg.mensagem} onChange={onChange} />
                </div>
                <button className='btnForm' type='submit' onClick={handleMsg}>Enviar Mensagem</button>
            </form>
        </div>

    );

}
export default EnvioMensagem;