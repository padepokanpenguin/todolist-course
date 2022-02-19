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
    <React.Fragment>
      <AddUser onAddUser={addUserListHandler} />
      <UserList users={userList} />
    </React.Fragment>
  );
}

export default App;
