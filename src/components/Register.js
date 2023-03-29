import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import * as auth from '../utils/auth.js';

const Register = ({ onRegistered }) => {
  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  })
  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValue.password && formValue.email) {
      const { password, email } = formValue;
      auth.register(password, email)
        .then(() => {
          onRegistered(true);
        }) 
        .catch(() => {
          onRegistered(false);
        });
    } 
  } 

  return (
    <div className="register">
      <div className='auth'>
        <h2 className="auth__title">Регистрация</h2>
        <form onSubmit={handleSubmit} className="auth__form">
          <input id="email" name="email" type="email" value={formValue.email} className = "auth__input" placeholder='Email'
          onChange={handleChange} />
          <input id="password" name="password" type="password" value={formValue.password} className = "auth__input"
          placeholder='Пароль' onChange={handleChange} />
        <button type="submit" className="auth__button">Зарегистрироваться</button>
        </form>
        <div className="auth__signin">
          <p className="auth__text">Уже зарегистрированы?</p>
          <Link to="/sign-in" className="auth__link">Войти</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;