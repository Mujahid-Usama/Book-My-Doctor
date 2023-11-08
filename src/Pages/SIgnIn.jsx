import React,{ useState } from 'react'
import {signInWithEmailAndPassword,signOut,
  onAuthStateChanged} from 'firebase/auth'
import {message} from 'antd'
import { auth} from '../Utils/Constants/fireBase'



const SIgnIn = () => {
  const [loginemail,setLoginEmail]=useState('')
  const [loginpassword,setLoginPassword]=useState('')

  const [user,setUser]=useState({})

// onAuthStateChanged(auth,(currentUser)=>{
//   setUser(currentUser)
// })

//            

  const login = async() => {
    try {
      const user = await signInWithEmailAndPassword(auth,loginemail,loginpassword);
      setUser(user)
      message.success('Login successful!');
      // console.log(user.email, user.accessToken, user.id)
  } catch (error) {
    message.error('Invalid Email/Password');
    console.log(error)
  }
  
  }
  
  // const logOut= async()=>{
  //   await signOut(auth)
  
  // }

  return (
  <div>
    <h3>Login</h3>
    <input placeholder='Email.........'onChange={(e)=>{
        setLoginEmail(e.target.value)
    }}/>
    <input placeholder='password............'onChange={(e)=>{
        setLoginPassword(e.target.value)
    }}/>
    <br/>
    <button onClick={login}>login</button>
   
    <h4>User Login In:</h4>
    {/* {console.log('user', user)} */}
    {/* {console.log('user', user.user.email, user.user.accessToken, user.user.id)} */}
    <br/>
    <br/>

    {/* Email: {user.user.email} */}

    <br/>
    <br/>
    <br/>
    <br/>
    {/* Access Token {user.user.accessToken}  */}
    <br/>
    {/* {auth?.email} */}
  {/* <button onClick={logOut}>Sign Out</button> */}
  </div>
  
  )
}

export default SIgnIn