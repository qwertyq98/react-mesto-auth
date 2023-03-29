import React from 'react'; 
import { useLocation, useNavigate } from 'react-router-dom';

function Header({loggedIn, userData}) {
  const location = useLocation();
  const navigate = useNavigate();

  function signOut(){
    localStorage.removeItem('jwt');
    navigate('/login');
  }

  return (
    <>
      <header className="header">
        <div className="header__logo" />
        { loggedIn ? 
          <>
            <div className='header__info'>
              <div className='header__email'>{userData.email}</div>
              <a className='header__buttom' href='/sign-in' onClick={signOut}>Выйти</a>
            </div>
          </> : 
          location.pathname === '/sign-up' ? 
            <div className='header__info'>
              <a className='header__buttom' href='/sign-in'>Войти</a>
            </div> :  
            <div className='header__info'>
              <a className='header__buttom' href='/sign-up'>Регистрация</a>
            </div> 
        } 
      </header>
    </>
    
  );
}

export default Header;
