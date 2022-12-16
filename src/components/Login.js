import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login(props) {
    const host = `http://localhost:3001`
    const [credential, setCredential] = useState({ email: "", password: "" })
    let navigate = useNavigate();
    const {showAlert} = props

    const handleSubmit = async (e)=> {
        e.preventDefault()
        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email:credential.email,password:credential.password})
          });
          const json =await response.json()
          console.log(json)
          if (json.success) {
            localStorage.setItem('token',json.token)
            navigate("/")
            showAlert("Login Successfully","success")
          }
          else {
            showAlert("Invalid Authentication","danger")
          }
    }
    const handleChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
      }
      
  return (
    <div className='container my-2'>
        <form onSubmit={handleSubmit}>
      <div className="mb-3">
  <label htmlFor="email" className="form-label" >Email </label>
  <input type="email" className="form-control"  name="email" id='email' onChange={handleChange}/>
</div>
<div className="mb-3">
  <label htmlFor="password" className="form-label" >Password</label>
  <input type="password" className="form-control" name="password" id='password' onChange={handleChange} autoComplete="on"/>
</div>
    <button type='submit' className='btn btn-primary'>Submit</button>    
    </form>
    </div>
  )
}

export default Login
