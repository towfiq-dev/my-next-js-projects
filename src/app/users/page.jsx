import Link from 'next/link';
import React from 'react';

const UsersPage = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()
  return (
    <div>
      
      <div className='grid grid-cols-3 justify-between gap-5 max-w-300 mx-auto'>
        {
          users.map((user, index)=>{return(
            <div key={index} className='bg-green-400 p-5'>
              <h1>{user.name}</h1>
              <h1>{user.username}</h1>
              <h1>{user.email}</h1>
              <Link href={`/users/${user.id}`}>
              <button className='btn'>
                show Details
              </button>
              </Link>
            </div>
          )})
        }
      </div>
    </div>
  );
};

export default UsersPage;