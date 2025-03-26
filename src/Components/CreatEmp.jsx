import axios from 'axios'
import React, { useState } from 'react'

function CreatEmp() {
  let [formData , SetformData] = useState({
    "name": "",
    "age": "",
    "email": "",
    "dep": ""
  })
  
  const handleChange = (e) => {
    console.log(e.target.value)
    SetformData({...formData, [e.target.placeholder]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)

    axios.post("http://localhost:1030/employees" , formData)

    SetformData({"name": "","age": "","email": "","dep": ""})
  }
  

  return (
    <center>
      <h1>ADD NEW EMP </h1>
      <form onSubmit={handleSubmit}>
        <p><input type="Text" placeholder='name' value={formData.name} onChange={handleChange} required/></p>
        <p><input type="Mail" placeholder='email' value={formData.email} onChange={handleChange} required/></p>
        <p><input type="number"  placeholder='age' value={formData.age}  onChange={handleChange} required/></p>
        <p><input type="Text" placeholder='dep' value={formData.dep} onChange={handleChange} required/></p>
        <p>
          <button type='Submit'>Submit</button>
          <button type='Reset'>Reset</button>
        </p>
        
      </form>
    </center>
  )
}

export default CreatEmp