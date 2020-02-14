import React from 'react';
import './select.css'

const Select = props => {
  const {handleSortByAge} = props;
  return (
    <div className="chooseAge">
    <label htmlFor="userSortAge">Sort users by age</label>
      <select id="userSortAge" onChange={handleSortByAge}>
        <option value="defaultAge">Выберите</option>
        <option value="dsc">От старшего к младшему</option>
        <option value="asc">От младшего к старшему</option>
     </select>
    </div>
  )
  

}

export default Select;