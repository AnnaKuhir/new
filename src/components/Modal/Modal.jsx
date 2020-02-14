import React from 'react';
import './modal.css'

const Modal = props =>{
  const {handleCloseModal} = props
  // console.log(props.user)
  return (
    <div className = "modal">
      <button className="modal_close" onClick={handleCloseModal}>X</button>
      <div className="fullInfo">
      {Object.entries(props.user).map(info => {
        return <p>{`${info[0]} : ${info[1]}`}</p>
      })}
      </div>
    </div>
  )
}

export default Modal;

