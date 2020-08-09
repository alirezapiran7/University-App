import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getMessages } from '../../redux/message/message-actions';

import './messages.styles.scss';

const MessagesPage = ({ getMessages, messages }) => {

    useEffect(() => {
        getMessages();
    }, [getMessages]);

    return (
        <div className='messages'>
            <h4 className='mb-4'>Minhas Mensagens</h4>
            {
                messages.messages.map( (message, i) => (
                    <Link key={i} to={`/mensagens/${message.user}`}>
                        <p className='msg' key={message.user}>{message.msg}</p>
                    </Link>
                ))
            }
        </div>
    )
};

const mapStateToProps = (state) => ({
    messages: state.messages
});

export default connect(mapStateToProps, { getMessages })(MessagesPage);