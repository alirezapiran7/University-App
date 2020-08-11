import React, { useState } from 'react';

import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { register } from '../../redux/user/user-actions';

import './register.styles.scss';

const RegisterPage = ({ register, isAuthenticated }) => {
    const [previewSource, setPreviewSource] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        ufersaId: '',
        password: '',
        confirmPassword: '',
        fileInputState: ''
    });

    const { name, email, ufersaId, password, confirmPassword, fileInputState } = formData;

    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = async(e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('As senhas não são iguais');
        } else {
            register({ name, email, ufersaId, password, previewSource });
        }
    }

    const handleFileInputChange = e => {
        const file = e.target.files[0];
        previewFile(file);
    }

        //get the file info and set previewSource to be seen as image
    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
        setPreviewSource(reader.result);
        }
    }

    if (isAuthenticated) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className='register'>
            <img src="./undraw_community_8nwl.svg" alt=""/>
            <h1>Bem Vindo</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <input
                        className='input-form'
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
                        className='input-form'
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={email}
                        onChange={onChange}
                        required
                    />
                </div>  
                <div className='form-group mt-3'>
                    <label>Escolha uma foto de perfil</label>
                    <input
                        className='form-control-file'
                        type='file'
                        name='fileInputState'
                        onChange={handleFileInputChange} 
                        value={fileInputState} 
                    />
                </div> 
                <div>
                    {previewSource && (
                        <img className='img-profile' src={previewSource} alt='chosen' />
                    )}
                </div>             
                <div>
                    <input
                        className='input-form'
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
                        className='input-form'
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
                        className='input-form'
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