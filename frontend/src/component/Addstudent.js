import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

export default function Addstudent() {

  const [name,setname]=useState("");
  const [roll,setroll]=useState("");
  const [dept,setdept]=useState("")
  const [College_name,setCollege_name]=useState("")
  const history=useNavigate();

  function submit()
  {
    // console.log(name)
    // console.log(roll)
    // console.log(dept)
    // console.log(College_name)
    fetch('https://crud-operation-gamma.vercel.app/',{
        method:'POST',
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
    }).then(responce=>responce.json()).then((res)=>{
      history('/')
    })
  }

  return (
    <div className="container mt-3">
      <div className="col-md-4 mt-4"><h3>Register Form</h3></div>
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
