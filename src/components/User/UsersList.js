import React from 'react';
import Card from '../UI/Card/Card';
import classes from './UsersList.module.css';

const UsersList = (props) => {
  if (props.users.length === 0) {
    return (
      <Card className={`${classes.users}`}>
        <p>No users.</p>
      </Card>
    );
  }

  return (
    <Card className={`${classes.users}`}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.username} {user.age} years old
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
