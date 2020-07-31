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
            <div className='first-body'>
                <div>
                    <h1>Discussões</h1>
                    <i className="far fa-comments fa-5x"></i>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, reiciendis, doloremque eaque quis omnis consequuntur commodi iusto quasi itaque ipsum, consectetur distinctio! Facere culpa aliquid mollitia expedita quibusdam porro reiciendis.</p>
                </div>
                <div>
                    <h1>Perguntas</h1>
                    <i className="far fa-question-circle fa-5x"></i>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita repellendus ex fugit, molestias excepturi a tempora cupiditate dolorem rerum recusandae sunt maiores voluptates cumque distinctio nihil in ut impedit quia.</p>
                </div>
                <div>
                    <h1>Informações</h1>
                    <i className="far fa-address-card fa-5x"></i>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolores odit ratione laborum placeat officiis! Dolores deserunt, et tenetur minima, omnis harum explicabo nisi perferendis, quis perspiciatis nam ipsam ut.</p>
                </div>
                <div>
                    <h1>Comunidade</h1>
                    <i className="fas fa-users fa-5x"></i>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam sequi assumenda ea. Fugiat ipsam aut in veniam? Sint omnis, sequi reprehenderit quod assumenda officia perspiciatis voluptatum, sapiente labore id voluptatem?</p>
                </div>
            </div>
            
            <div className='third-body'>
                <div className='big-card'>
                    <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam fugiat perspiciatis consequuntur.</p>
                    <span>02/03/2020</span>
                    <div className='icons'>
                        <span>
                            <i className="far fa-thumbs-up"></i><span> 8</span>
                        </span>
                        <span>
                            <i className="far fa-comments"></i><span> 5</span>
                        </span>
                    </div>
                </div>
                <div className='cards'>
                    <div className='card'>
                        <img className='image-card' src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=60" alt=""/>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam fugiat perspiciatis consequuntur.</p>
                        <span>02/03/2020</span>
                        <div className='icons'>
                            <span>
                                <i className="far fa-thumbs-up"></i><span> 8</span>
                            </span>
                            <span>
                                <i className="far fa-comments"></i><span> 5</span>
                            </span>
                        </div>
                    </div>
                    <div className='card'>
                        <img className='image-card' src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=60" alt=""/>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam fugiat perspiciatis consequuntur.</p>
                        <span>02/03/2020</span>
                        <div className='icons'>
                            <span>
                                <i className="far fa-thumbs-up"></i><span> 8</span>
                            </span>
                            <span>
                                <i className="far fa-comments"></i><span> 5</span>
                            </span>
                            </div>
                    </div>
                    <div className='card'>
                        <img className='image-card' src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=60" alt=""/>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam fugiat perspiciatis consequuntur.</p>
                        <span>02/03/2020</span>
                        <div className='icons'>
                            <span>
                                <i className="far fa-thumbs-up"></i><span> 8</span>
                            </span>
                            <span>
                                <i className="far fa-comments"></i><span> 5</span>
                            </span>
                        </div>
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