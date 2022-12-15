import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Signup() {
    const host = `http://localhost:3001`
    const [credential, setCredential] = useState({ name:"", email: "", password: "" })
    let navigate = useNavigate();

    const handleSubmit = async (e)=> {
        e.preventDefault()
        const {name,email,password} = credential
        const response = await fetch(`${host}/api/auth/createuser`, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({name ,email,password})
          });
          const json =await response.json()
          console.log(json)
          if (json.success) {
            localStorage.setItem('token',json.token)
            navigate("/")
          }
          else {
            alert("Invalid Credential")
          }
    }
    const handleChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
      }
      
  return (
    <div className='container my-2'>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
  <label htmlFor="name" className="form-label" >Name</label>
  <input type="name" className="form-control"  placeholder="name" name="name" id='name' onChange={handleChange}/>
</div>
      <div className="mb-3">
  <label htmlFor="email" className="form-label" >Email </label>
  <input type="email" className="form-control"  placeholder="email" name="email" id='email' onChange={handleChange}/>
</div>
<div className="mb-3">
  <label htmlFor="password" className="form-label" >Password</label>
  <input type="password" className="form-control" name="password" id='password' onChange={handleChange} autoComplete="on"/>
</div>
<div className="mb-3">
  <label htmlFor="cpassword" className="form-label" >Confirm Password</label>
  <input type="password" className="form-control" name="cpassword" id='cpassword' onChange={handleChange} autoComplete="on"/>
</div>
    <button type='submit' className='btn btn-primary'>Submit</button>    
    </form>
    </div>
  )
}

export default Signup
