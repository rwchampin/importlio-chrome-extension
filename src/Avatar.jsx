import React from 'react'

export default function Avatar({
    user
}) {

    debugger
  return (
    <div className='flex items-center'>
      <img
        src={user.avatar}
        alt={`${user.first_name} ${user.last_name}'s Avatar'`}
        className='w-12 h-12 rounded-full mx-auto'
      />
      <div>
        <p className='text-black text-lg leading-none uppercase font-bold'>{user.first_name} {user.last_name}</p>
        <p className='text-gray-500 text-xs'>{user.email}</p>
      </div>
    </div>
  )
}
