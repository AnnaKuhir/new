import React, { useState } from 'react';
import { userData } from './data/usersArr';
import './App.css';
import Modal from './components/Modal'
import Header from './components/Header'
import Main from './components/Main'
import ModalSize from './components/ModalSize/ModalSize.jsx';





function App() {
  const [userList, setUserList] = useState([...userData]);
  const [modal, setModal] = useState({
    isShow: false,
    id: null
  });

  const handleShowModal = (id) => {
    setModal({ isShow: true, id })
  }

  const handleCloseModal = (id) => {
    setModal({ isShow: false, id })
  }

  return (
    <>
      <ModalSize/>
      <Header setUserList={setUserList}/>
      <Main userList={userList}
            handleShowModal={handleShowModal}
            />
      {modal.isShow && <Modal
                       user={userList.find(u => u._id === modal.id)}
                        handleCloseModal={handleCloseModal} 
                        />}

    </>
  );
}

export default App;
