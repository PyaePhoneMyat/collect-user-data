import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModalBox from '../UI/ErrorModalBox';
import classes from './AddUser.module.css';
import { useState } from 'react';
const AddUser = (props) => {
  const [enterUserName, setEnterUserName] = useState('');
  const [enterAge, setEnterAge] = useState('');
  const [error, setError] = useState('');

  const userChangeHandler = (e) => {
    setEnterUserName(e.target.value);
  };

  const userAgeChangeHandler = (e) => {
    setEnterAge(e.target.value);
  };

  const addUserHandler = (e) => {
    e.preventDefault();

    if (enterUserName.trim().length === 0 || enterAge.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please Enter A Valid name and real age!',
      });
      return;
    }

    if (+enterAge < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Please Enter Real Age!',
      });
      return;
    }
    props.onAddUser(enterUserName, enterAge);
    setEnterUserName('');
    setEnterAge('');
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModalBox
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <form action='' onSubmit={addUserHandler}>
        <Card className={classes.input}>
          <label htmlFor='username'>User Name</label>
          <input
            type='text'
            value={enterUserName}
            id='username'
            onChange={userChangeHandler}
          />
          <label htmlFor='age'>Age(Year)</label>
          <input
            type='number'
            value={enterAge}
            id='age'
            onChange={userAgeChangeHandler}
          />
          <Button type='submit'>Submit</Button>
        </Card>
      </form>
    </>
  );
};
export default AddUser;
