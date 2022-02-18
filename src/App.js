import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [userList, setUserList] = useState([])
  
  const addUserListHandler = (userName, userAge) => {
    setUserList((prevList) => {
      return [...prevList, {name: userName, age: userAge, id: Math.random().toString()}]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserListHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
