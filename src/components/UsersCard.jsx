import React from 'react';

const UsersCard = props => {
 const {user, handleShowModal} = props
  // console.log(handleShowModal)
  return (
    <div className="card">
      <img src={user.picture} alt="User photos"/>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Gender: {user.gender}</p>
      <p>Card balance: {user.balance}</p>
      <button onClick={() => handleShowModal(user._id)}>Show info</button>
    </div>
  );
}

export default UsersCard;