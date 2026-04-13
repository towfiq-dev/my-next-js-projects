import React from 'react';

const UsersDetailPage = async({params}) => {
  const {usersId} = await params
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${usersId}`)
  const user = await res.json()
  return (
    <div>
      <h1>{user.name}</h1>
      <h1>{user.username}</h1>
    </div>
  );
};

export default UsersDetailPage;