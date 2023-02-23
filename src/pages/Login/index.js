import React, { useState} from 'react';
import axios from 'axios';

import Logo from "assets/logo.svg";

import './index.scss';
import { useHistory } from 'react-router-dom';

const formFields = [
    {type: 'email', name: 'email', placeholder: 'Enter work email'},
    {type: 'password', name: 'password', placeholder: 'Enter password'}
];

const serverURL = 'http://localhost:3001/api/v1';
const loginURL = 'users/login';

const Login = () => {
    const [values, setValues] = useState({[formFields[0].name]: '', [formFields[1].name]: ''});
    const [displayErrorMsg, setDisplayErrorMsg] = useState(false);
    const history = useHistory();

    const onChangeInput = (e) => {
       const updatedValues = {...values};
       updatedValues[e.target.name] = e.target.value;
       setValues(updatedValues);
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();

        axios.post(`${serverURL}/${loginURL}`, {
            email: values['email'],
            password: values['password']
          })
          .then(function (response) {
            console.log(response);
            setDisplayErrorMsg(false);
            history.push('/');
          })
          .catch(function (error) {
            console.log(error);
            setDisplayErrorMsg(true);
          });

    }

    return (
        <div className="login">
            <div className="login__container">
                <img src={Logo} className="header__logo" alt="logo" />
                <div className="header-wrapper">
                    <span className="title">Joonko's Jobs Manager</span>
                    <span className="subtitle">Enter your details</span>
                </div>
                <form className="auth-form" onSubmit={onSubmitForm}>
                    {formFields.map(({type, name, placeholder}) => (
                        <input
                            key={`form__${name}`}
                            type={type}
                            name={name}
                            placeholder={placeholder}
                            value={values[name]}
                            onChange={onChangeInput}
                        />
                    ))}
                    <button type="submit">Log in</button>
                </form>
                {displayErrorMsg && <span  className="error-msg">An error occurred, please check your credentials and try again</span>}
            </div>
        </div>
    )
}

export default Login;