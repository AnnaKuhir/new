import React, { useState } from 'react';
import { userData } from './data/usersArr';
import UsersCard from './components/UsersCard';
// import logo from './logo.svg';
import './App.css';
import Modal from './components/Modal'
import Header from './components/Header'



function App() {
  const [userList, setUserList] = useState([...userData]);
  const [modal, setModal] = useState({
    isShow: false,
    id: null
  });

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

  const handleShowModal = (id) => {
    setModal({ isShow: true, id })
  }

  const handleCloseModal = (id) => {
    setModal({ isShow: false, id })
  }

  return (
    <>
      <Header handleFilterUserByName={handleFilterUserByName} 
              handleSortByAge={handleSortByAge}
               handleResetAll={handleResetAll} 
               />

      <main>
        {
          userList.map(user => {
            return <UsersCard 
                    user={user} 
                    key={`user${user._id}`} 
                    handleShowModal={handleShowModal} 
                    />
          })
        }
      </main>

      {modal.isShow && <Modal
                       user={userList.find(u => u._id === modal.id)}
                        handleCloseModal={handleCloseModal} 
                        />}
    </>

  );
}

export default App;
