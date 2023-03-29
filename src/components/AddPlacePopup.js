import React from "react";
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const placeNameRef = React.useRef('');
  const placeLinkRef = React.useRef('');


  function handleSubmit(e) {
    e.preventDefault();
  
    onAddPlace({
      name: placeNameRef.current.value,
      link: placeLinkRef.current.value
    });
  } 

  React.useEffect(() => {
    if(isOpen) {
      placeNameRef.current.value = '';
      placeLinkRef.current.value = '';
    }
  }, [isOpen])

  return (
    <PopupWithForm
      name='card'
      type='add'
      title='Новое место'
      isOpen={isOpen}
      onClose={onClose}
      buttonText='Создать'
      onSubmit={handleSubmit}
      >
        <input 
          name="name" 
          type="text" 
          id="name-input" 
          minLength="2" 
          maxLength="30" 
          className="popup__input popup__input_type_name"
          placeholder='Название' 
          required 
          ref={placeNameRef}
        />
        <span className="popup__error name-input-error"></span>
        <input 
          name="link" 
          type="url" 
          id="link-input" 
          className="popup__input popup__input_type_url" 
          placeholder='Ссылка на картинку' 
          required 
          ref={placeLinkRef}
        />
        <span className="popup__error link-input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;