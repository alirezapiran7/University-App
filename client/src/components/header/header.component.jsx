import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../redux/user/user-actions';
import { clearProfile } from '../../redux/profile/profile-actions';

import './header.styles.scss';

const Header = ({ auth: { isAuthenticated, loading }, logout, clearProfile }) => {

    const authLinks = (
        <div className='navbar-nav'>
            <Link className='nav-link link' to='/dashboard'>
                Dashboard
            </Link>
            <Link className='nav-link link' to='/mensagens'>
                Mensagens
            </Link>
            <Link className='nav-link link' to='/postagens'>
                Postagens
            </Link>
            <a  className='nav-link link' onClick={() => {logout(); clearProfile();}} href='#!'>
                <i className='fas fa-sign-out-alt' />{' '}
                <span className='hide-sm'>Sair</span>
            </a>
        </div> 
    );

    
    const guestLinks = (
            <div className='navbar-nav'>
                <Link className='nav-link link' to='/logar'>
                    Logar
                </Link>
                <Link className='nav-link link' to='/registrar'>
                    Registrar
                </Link>
            </div>
    )

    return (
        <div>
            <div className='navbar navbar-expand-lg nv'>

                <Link className='nav-link link' to='/'>
                    Início
                </Link>
                <Link className='nav-link link' to='/estudantes'>
                    Estudantes
                </Link>
                {!loading && (
                    <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
                )}
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    auth: state.user
  });

export default connect(mapStateToProps, { logout, clearProfile })(Header);