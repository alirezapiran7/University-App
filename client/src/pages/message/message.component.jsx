import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getMessage, sendMessage } from '../../redux/message/message-actions';

import Message from '../../components/message/message.component';

import './message.styles.scss';

const MessagePage = ({ getMessage, messages: { message }, match, sendMessage }) => {
    useEffect(() => {
        getMessage(match.params.id);
    }, [getMessage, match.params.id, message]);

    const [messageForm, setMessageForm] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        sendMessage(messageForm, match.params.id);
        setMessageForm('');
      }
    
    if(message.message && message.message.length > 0)
    return (
        <div className='message-page'>
            {
                message.message.map( (message) => (
                    <Message message={message} />
                ))
            }
            <form className='form' onSubmit={handleSubmit}>
                <textarea 
                    className='mt-3'
                    rows='5'
                    cols='80'
                    placeholder="Digite uma mensagem..."
                    name="messageForm"
                    value={messageForm}
                    onChange={ e => setMessageForm(e.target.value)} 
                    required
                />
                <div>
                    <button className='button-send'>Enviar</button>
                </div>
            </form>
        </div>
    )
    else
        return(<div>loading</div>)
}

const mapStateToProps = (state) => ({
    messages: state.messages
});

export default connect(mapStateToProps, { getMessage, sendMessage })(MessagePage);