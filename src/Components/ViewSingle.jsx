import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

export const ViewSingle = () => {
    let {id} = useParams();
    console.log(id)

    let[data , setdata] = useState({
        id : "",
        name : "",
        email : "",
        age : "",
        dep : ""
    })

    let getdata = async () => {
        let { data } = await axios.get(`http://localhost:1030/employees/${id}`)
        setdata(data)
    }
    useEffect(() => {
        getdata();
    },[])

  return (
    <center>
        <h1>Hello {data.name}</h1>
        <p>Your EmpID is {data.id}. <br /> Your mail is {data.email} and you work in department {data.dep}</p>

    </center>
  )
}
