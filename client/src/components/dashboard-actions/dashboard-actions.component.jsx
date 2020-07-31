import React from 'react';
import { Link } from 'react-router-dom';

import './dashboard-actions.styles.scss';

const DashboardActions = () => {
    return (
        <div className='dashboard-actions'>
            <Link className='dashboard-item' to='editar-perfil'>
                <i className='fas fa-user-circle text-primary mr-2' /> Editar Perfil
            </Link>
            <Link className='dashboard-item' to='/adicionar-experiencia'>
                <i className='fab fa-black-tie text-primary mr-2' /> Adicionar Experiência
            </Link>
            <Link className='dashboard-item' to='/adicionar-educacao'>
                <i className='fas fa-graduation-cap text-primary mr-2' /> Adicionar Educação
            </Link>
        </div>
    )
};

export default DashboardActions;