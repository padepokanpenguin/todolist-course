import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = props => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('')
  
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    
    if (+enteredAge < 1) {
      return;
    }
    props.onAddUser(enteredUsername, enteredAge); 
    setEnteredUsername('');
    setEnteredAge('');
  }

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }

  return (
    <div>
      <ErrorModal title="An Error Title" message="Something went wrong" />
      <Card className={classes.Input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input onChange={usernameChangeHandler} id="username" type="text" value={enteredUsername} />
          <label htmlFor="age">Age</label>
          <input onChange={ageChangeHandler} id="age" type="number" value={enteredAge} />    
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
   )
}

export default AddUser;
