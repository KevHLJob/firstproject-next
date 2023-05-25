"use client" //uso de cliente
import React from 'react'
import { useRouter } from 'next/navigation';

function Users({ users }) {

  const router = useRouter() // nos importa la función useRouter

  return (

    <ul className='list-group'>
      {
        //mapeamos los usuarios con su ID, First_name, Last_name, Email y la imagen del
        //array users

        users.map((users) => (
          <li key={users.id}
            className='list-group-item d-flex justify-content-between align-items-center
        list-group-item-action'
            onClick={() => {
              router.push(`/users/${users.id}`) // evento para que al precionar un usuario
              //envíe por medio del push el usuario con el Id solicitado.
            }}
          >
            <div>
              <h5>{users.id} {users.first_name} {users.last_name}</h5>
              <p>{users.email}</p>
            </div>
            <img className='rounded-circle' src={users.avatar} alt={users.email} />
          </li>
        ))
      }
    </ul>
  )
}

export default Users