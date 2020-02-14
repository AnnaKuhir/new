import React from 'react';
import './header.css'
import Input from '../Input'
import Select from '../Select'
import Button from '../Button'


const Header = props => {
  const {handleFilterUserByName, handleSortByAge, handleResetAll} = props;
  return (
  <header>
    <Input  handleFilterUserByName={handleFilterUserByName}/>
    <Select handleSortByAge={handleSortByAge}/>
    <Button handleResetAll={handleResetAll}/>
  </header>
  )
}

export default Header;