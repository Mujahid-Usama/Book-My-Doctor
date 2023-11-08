import React,{ useState } from 'react'
import {createUserWithEmailAndPassword,} from 'firebase/auth'
import { auth} from '../Utils/Constants/fireBase'
import {message} from 'antd'

const SignUp = () => {

const [registeremail,setRegisterEmail]=useState('')
const [registerpassword,setRegisterPassword]=useState('')

  
const register= async()=>{
  console.log("Registeration click")
    try {
          await createUserWithEmailAndPassword(auth,registeremail,registerpassword);
          message.success('Registration successful!');
          // console.log('user', user)
    } catch (error) {
      message.error('Registration Fail');
        console.log(error.message)
    }

  
  // const info = () => {
  //   messageApi.info('Hello, Ant Design!');
  // };
  
}
  return (
    <div className='App5'>
        <h3>Register User</h3>
    <input placeholder='Email.........'onChange={(e)=>{
        setRegisterEmail(e.target.value)
    }}/>
    <input placeholder='password............'onChange={(e)=>{
        setRegisterPassword(e.target.value)
    }}/>
   <br/>


    {/* <label for="gender">Choose Gender:</label>

<select id="gender">
  <option value="male">Male</option>
  <option value="female">Female</option>
  
  
</select>
<label for="birthday">Birthday:</label>
  <input type="date" id="birthday" name="birthday"/> */}
  <br/>
  <button onClick={register}>Create a Account</button>


    </div>
  )
}

export default SignUp