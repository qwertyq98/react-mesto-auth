import React from 'react'; 

function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_type_open ${card ? "popup_opened" : ''}`}>
      <div className="popup__card-container">
        <div className="popup__card">
          <img className="popup__image" src={card?.link} alt={card?.name} />
          <p className="popup__title">{card?.name}</p>
        </div>
      <button className="popup__button popup__button_close" type="button" onClick={onClose}></button>
      </div>
    </div>
  );
}

export default ImagePopup;