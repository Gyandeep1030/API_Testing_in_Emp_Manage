import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';


function ViewEmp() {
let [data , setdata] = useState([]);

async function empdata(){
  let {data} = await axios.get("http://localhost:1030/employees");
  setdata(data)

}
useEffect(() => {
  empdata()
},[])

  return (

    <center>
      <h1>Emp Details</h1>
      <table border="1px" cellPadding="10px" cellSpacing="0px">
        <thead>
          <th>Emp ID</th>
          <th>Name</th>
          <th>Gmail</th>
          <th>Dep</th>
          <th>Options</th>
        </thead>

        <tbody>
          {data.map((val , ind) => {

            let {id , name, email, dep} = val;

            return (
              <tr key={ind}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{dep}</td>
                <td><NavLink to={`/ViewSingle/${id}`} ><button>View More</button></NavLink></td>
              </tr>
            )

          })}

        </tbody>


      </table>
    
    
    </center>
  )
}

export default ViewEmp