import React from 'react';
import './main.css';
import UsersCard from '../../components/UsersCard';

const Main = props => {
  const {handleShowModal, userList} = props;
  

  return (
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
  )
}

export default Main;