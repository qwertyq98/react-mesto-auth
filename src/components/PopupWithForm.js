import React from 'react'; 

function PopupWithForm({type, name, title, isOpen, onClose, children, buttonText, onSubmit}) {
  return (
    <div className={`popup popup_type_${type} ${isOpen ? "popup_opened" : ''}`}>
      <div className="popup__container">
        <form className={`popup__form popup__form_name_${name}`} name={type} onSubmit={onSubmit}>
            <h2 className="popup__text">{title}</h2>
            {children}
            <button className="popup__button popup__button_save" type="submit">{buttonText || 'Сохранить'}</button>
        </form>
        <button className="popup__button popup__button_close" type="button" onClick={onClose} />
      </div>
    </div>
  );
}

export default PopupWithForm;