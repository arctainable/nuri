import React from 'react';
import './Input.css';

function Input({ type, title, value, setInput, placeholder, message }) {
  function changeValue(event) {
    event.preventDefault();
    setInput(event.target.value.replace(" ", ""))
  }

  return (
    <div className="User-Input">
      <label className="User-Input-header">
        {title}
      </label>
      <input 
        className={message.length === 0 
          ? "User-Input-content" 
          : "User-Input-content-message"
        }
        type={type} 
        value={value}
        placeholder={placeholder} 
        onChange={(event) => changeValue(event)} 
        required 
      />
      <div className="User-Input-message">{message}</div>
    </div>
  )
}

export default Input;