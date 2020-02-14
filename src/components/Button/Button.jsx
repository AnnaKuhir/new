import React from 'react';
import './button.css'

const Button = props => {
  const {handleResetAll} = props;

  return (
    <div className="button-reset">
    <button id="reset-all" type="button" onClick={handleResetAll}>Сбросить фильтры</button>
  </div>
  )
}

export default Button;