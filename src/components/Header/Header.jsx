import React from 'react';
import './header.css'
import { userData } from '../../data/usersArr';
import Input from '../Input'
import Select from '../Select'
import Button from '../Button'


const Header = props => {
  const {setUserList} = props;
  
  const handleFilterUserByName = (event) => {
    let el = event.target.value;
    const result = userData.filter(user => {
      return user.name.toLowerCase().includes(el.toLowerCase());
    });
    setUserList(result);
  }

  const handleSortByAge = (event) => {
    let newArray = [...userData]
    let result = newArray.sort((a, b) => {
      const el = event.target.value;

      if (a.age < b.age) return el === "asc" ? -1 : 1;

      if (a.age > b.age) return el === "asc" ? 1 : -1;

      if (a.age === b.age) return 0;

      return result;
    })
    // return result;
    setUserList(result);
  }


  const handleResetAll = () => {
    // debugger;
    let newArray = [...userData]

    let findByNameReset = document.getElementById('findUser');
    findByNameReset.value = null;

    let sortByAgeReset = document.getElementById('userSortAge');
    sortByAgeReset.value = "defaultAge";

    setUserList(newArray)
  }
  return (
  <header>
    <Input  handleFilterUserByName={handleFilterUserByName}/>
    <Select handleSortByAge={handleSortByAge}/>
    <Button handleResetAll={handleResetAll}/>
  </header>
  )
}

export default Header;