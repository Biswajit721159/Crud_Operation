import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

export default function Home() {
  
  const history=useNavigate();
  const [data,setdata]=useState([])
  useEffect(()=>{
    loadproduct()
  },[])


  function loadproduct()
  {
    fetch('http://localhost:5000/').then(response=>response.json()).then((res)=>{
      setdata(res)
      console.log(res)
    })
  }


  function DeleteUser(Roll)
  {
     fetch('http://localhost:5000/',{
        method:'Delete',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
          Roll:Roll
        })
     }).then(responce=>responce.json()).then((res)=>{
      console.log(res)
      loadproduct();
     })
  }
  return (
    <div className='container'>
      <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">Index</th>
              <th scope="col">Name</th>
              <th scope="col">Dept</th>
              <th scope="col">Roll</th>
              <th scope="col">College Name</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              data
              ?
              data.map((item,ind)=>(
                <tr key={ind}>
                  <th scope="row">{ind+1}</th>
                  <td>{item.name}</td>
                  <td>{item.Dept}</td>
                  <td>{item.Roll}</td>
                  <td>{item.College_name}</td>
                  <td><Link to={`/updatestudent/${item.Roll}`}><button className='btn btn-primary'>Update</button></Link></td>
                  <td><button className='btn btn-danger' onClick={()=>DeleteUser(item.Roll)}>Delete</button></td>
                </tr>
              ))
              :"user not found"
            }
          </tbody>
        </table>
    </div>
  )
}
