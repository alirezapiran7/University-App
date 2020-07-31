import React from 'react';

import './message.styles.scss';

const Message = ({ message }) => {
    console.log(message);
    return (
        <div className='message'>
            {message}
        </div>
    )
}

export default Message;