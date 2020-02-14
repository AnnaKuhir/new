import React from 'react';
import './input.css'

const Input = props => {
  const {handleFilterUserByName} = props;
  return (
    <div className="findName">
    <label htmlFor="findUser">Find user by name</label>
    <input type="text" id="findUser" placeholder="Enter user name" onChange={handleFilterUserByName} />
  </div>
  )
}

export default Input;