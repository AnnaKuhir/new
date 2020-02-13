import React, { useState } from 'react';
import { userData } from './data/usersArr';
import UsersCard from './components/UsersCard';
// import logo from './logo.svg';
import './App.css';


function App() {
  const [userList, setUserList] = useState([...userData]);
  const handleFilterUserByName = (event) => {
    let el = event.target.value;
    const result = userData.filter(user => {
      return user.name.toLowerCase().includes(el.toLowerCase()); 
    });
    setUserList(result);
  }

  const handleSortByAge = (event) => {
    let result = [...userData].sort((a, b) => {
      
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
    sortByAgeReset.value = null;
    
    setUserList(newArray)
  }


  return (
    <>
      <header>
        <div className="findName">
          <label htmlFor="findUser">Find user by name</label>
          <input type="text" id="findUser" placeholder="Enter user name" onChange={handleFilterUserByName} />
        </div>

        <div className="chooseAge">
        <label htmlFor="userSortAge">Sort users by age</label>
          <select id="userSortAge" onChange={handleSortByAge}>
            <option>Выберите</option>
            <option value="dsc">От старшего к младшему</option>
            <option value="asc">От младшего к старшему</option>
         </select>
        </div>

        <div className="button-reset">
          <button id="reset-all" type="button" onClick={handleResetAll}>Сбросить фильтры</button>
        </div>
      </header>


      <main>
        {
          userList.map(user => {
            return <UsersCard user={user} key={`user${user._id}`} />
          })
        }
      </main>
    </>

  );
}

export default App;
