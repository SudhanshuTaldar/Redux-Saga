import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../redux/actions/users';
import Card from '../components/CardComponent';
import '../App.css'

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    return (
      <>
      <button onClick={()=>dispatch(getUsers())}>Click Me </button>
        {users.length > 0 && users.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </>
    )
  }

export default Users;