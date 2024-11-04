// App.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from './redux/store';

function App() {
     const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [username, setUsername] = useState('');

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const updateUser = (e) => {
    e.preventDefault()
    dispatch(setUser({ name: username }));
  };

  return (
    <div>
      <h1>User: {user ? user.name : 'No User'}</h1>
      <form onSubmit={updateUser}>
      <input  required
        type="text" 
        value={username} 
        onChange={handleInputChange} 
        placeholder="Enter username"
      />
      <button type='submit' >Update User</button></form>
    </div>
  );
};
export default App;
