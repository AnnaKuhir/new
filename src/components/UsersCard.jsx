import React from 'react';

const UsersCard = (props) => {
  return (
    <div className="card">
      <img src={props.user.picture} alt="User photos"/>
      <h2>{props.user.name}</h2>
      <p>Age: {props.user.age}</p>
      <p>Gender: {props.user.gender}</p>
      <p>Card balance: {props.user.balance}</p>
    </div>
  );
}

export default UsersCard;