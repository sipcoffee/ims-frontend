import React from 'react'

type UserInterface = {
    username: string,
    password: string    
}


export default function Login() {
    
  return (
    <div>Login
        <button onClick={(e)=>console.log(e)}>onclik</button>
    </div>
  )
}
