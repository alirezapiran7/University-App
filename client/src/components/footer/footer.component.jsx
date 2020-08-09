import React from 'react';

import './footer.styles.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='row justify-content-around'>
                <div className='col-md-4'>
                    <h1>Uni<span>UFERSA</span></h1>
                    <p>Plataforma universitária, com foco em discussões e colaboração entre estudantes.</p>
                </div>
                <div className='col-md-4'>
                    <p className='mt-1'>Links úteis</p>
                    <a href="/">Contato</a>
                    <a href="/">Sobre</a>
                </div>
            </div>
            <div className='copyright'>
                <p>Todos os direitos reservados - 2020 <i class="far fa-copyright"></i></p>
            </div>
        </div>
    )
}

export default Footer;