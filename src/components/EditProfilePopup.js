import React from "react";
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    if(isOpen) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [currentUser, isOpen]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name='profile'
      type='edit'
      title='Редактировать профиль'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={isLoading? 'Сохранение...' : 'Сохранить'}
      >
        <input 
          name="userName" 
          type="text" 
          id="userName-input" 
          minLength="2" 
          maxLength="40" 
          className="popup__input popup__input_type_name"
          placeholder='Введите имя' 
          required 
          value={name}
          onChange={handleNameChange}
        />
        <span className="popup__error userName-input-error"></span>
        <input 
          name="userAbout" 
          type="text" 
          id="userAbout-input" 
          minLength="2" 
          maxLength="200" 
          className="popup__input popup__input_type_info"
          placeholder='Введите профессию' 
          required 
          value={description}
          onChange={handleDescriptionChange}
        />
        <span className="popup__error userAbout-input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;