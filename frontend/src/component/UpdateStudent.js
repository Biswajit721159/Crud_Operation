import React, { useEffect,useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'

export default function UpdateStudent() {
  const Roll=useParams().Roll

  const [name,setname]=useState("");
  const [roll,setroll]=useState("");
  const [dept,setdept]=useState("")
  const [College_name,setCollege_name]=useState("")
  const history=useNavigate();

  
  useEffect(()=>{
    fetch(`http://crud-operation-gamma.vercel.app/${Roll}`).then(response=>response.json()).then((res)=>{
      if(res!=undefined)
      {
        setname(res[0].name)
        setroll(res[0].Roll)
        setdept(res[0].Dept)
        setCollege_name(res[0].College_name)
      }
    })
  },[])
  
  function submit()
  {
    fetch('http://crud-operation-gamma.vercel.app/',{
      method:'PUT',
      headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
      },
      body:JSON.stringify({
         name:name,
         Roll:roll,
         Dept:dept,
         College_name:College_name
      })
    }).then(response=>response.json()).then((res)=>{
      history('/')
    })
  }

  
  return (
    <div className="container mt-3">
    <div className="col-md-4 mt-4"><h3>Update Form</h3></div>
      <div className="col-md-4 mt-4">
        <input
          type="text"
          className="form-control"
          placeholder="Full name"
          value={name}
          onChange={(e)=>setname(e.target.value)}
          required
        />
       
      </div>
      <div className="col-md-4 mt-3 ">
        <input
          type="number"
          className="form-control"
          placeholder="Roll Number"
          disabled
          value={roll}
          onChange={(e)=>setroll(e.target.value)}
          required
        />
      </div>
      <div className="col-md-4 mt-4">
        <input
          type="text"
          className="form-control"
          placeholder="Dept name"
          value={dept}
          onChange={(e)=>setdept(e.target.value)}
          required
        />
      </div>
      <div className="col-md-4 mt-4">
        <input
          type="text"
          className="form-control"
          placeholder="College name"
          value={College_name}
          onChange={(e)=>setCollege_name(e.target.value)}
          required
        />
       
      </div>
      <div className="col-md-4 mt-3">
        <button className='btn btn-primary' onClick={submit}>Submit</button>
      </div>
    </div>
  )
}
