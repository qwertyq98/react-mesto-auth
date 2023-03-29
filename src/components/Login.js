import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import * as auth from '../utils/auth.js';

const Login = ({ handleLogin }) => {
  const [formValue, setFormValue] = useState({
    password: '',
    email: ''
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValue.email || !formValue.password){
      return;
    }
    auth.authorize(formValue.password, formValue.email)
      .then((data) => {
        if (data.token) {
          handleLogin(formValue.email);
          setFormValue({ password: '', email: '' });
          navigate('/', {replace: true});
        }
      })
  }

  return (
    <div className="login">
      <div className='auth'>
        <h2 className="auth__title">Вход</h2>
        <form onSubmit={handleSubmit} className="auth__form">
          <input required id="email" name="email" type="email" value={formValue.email} placeholder='Email'
          className = "auth__input" onChange={handleChange} />
          <input required id="password" name="password" type="password" value={formValue.password} placeholder='Пароль' 
          className = "auth__input" onChange={handleChange} />
          <button type="submit" className="auth__button">Войти</button>
        </form>
      </div>
    </div>
  )
}

export default Login;