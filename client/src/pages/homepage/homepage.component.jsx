import React from 'react';
import './homepage.styles.scss';

const HomePage = () => {
    return (
        <div>
            <div className='wallpaper'>
                <div className='wallpaper-body'>
                    <h1>UniUfersa</h1>
                    <p>Seja bem vindo a mais nova plataforma da Ufersa, aqui é o local ideal para discussões, dúvidas, portfólio e muito mais.</p>
                    <p>Fique por dentro de tudo que está por dentro da nossa universidade.</p>
                    <div className="button_cont" align="center">
                        <a className="example_e" href="add-website-here" target="_blank" rel="nofollow noopener">
                            Saiba Mais
                        </a>
                    </div>
                </div>     
            </div>
            
            <div className='footer'>
                Here is the footer
            </div>
        </div>
    )
};

export default HomePage;