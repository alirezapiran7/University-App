import React, { useState } from 'react';

import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { register } from '../../redux/user/user-actions';

import './register.styles.scss';

const RegisterPage = ({ register, isAuthenticated }) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        ufersaId: '',
        password: '',
        confirmPassword: ''
    });

    const { name, email, ufersaId, password, confirmPassword } = formData;

    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = async(e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('As senhas não são iguais');
        } else {
            register({ name, email, ufersaId, password });
        }
    }

    if (isAuthenticated) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className='form-container'>
            <img src="./undraw_community_8nwl.svg" alt=""/>
            <h1>Bem Vindo</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <input 
                        type='text'
                        placeholder='Nome'
                        name='name'
                        value={name}
                        onChange={onChange}
                        required
                    />
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={email}
                        onChange={onChange}
                        required
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Número de Matrícula"
                        name="ufersaId"
                        value={ufersaId}
                        onChange={onChange}
                        minLength="9"
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        minLength="8"
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={onChange}
                        minLength="8"
                        required
                    />
                </div>
                <button>Registrar</button>
            </form>
        </div>
    )
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.user.isAuthenticated
});

export default connect(mapStateToProps, { register } )(RegisterPage);