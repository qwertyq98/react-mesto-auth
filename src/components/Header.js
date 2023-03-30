import React from 'react'; 
import { useLocation, Link } from 'react-router-dom';

function Header({loggedIn, userData, signOut}) {
  const location = useLocation();

  return (
    <header className="header">
        <div className="header__logo" />
        { loggedIn ? 
          <>
            <div className='header__info'>
              <div className='header__email'>{userData.email}</div>
              <Link className='header__buttom' to={'/sign-in'} onClick={signOut}>Выйти</Link>
            </div>
          </> : 
          location.pathname === '/sign-up' ? 
            <div className='header__info'>
              <Link className='header__buttom' to={'/sign-in'}>Войти</Link>
            </div> :  
            <div className='header__info'>
              <Link className='header__buttom' to={'/sign-up'}>Регистрация</Link>
            </div> 
        } 
      </header>
  );
}

export default Header;
