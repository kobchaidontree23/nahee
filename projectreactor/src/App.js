import React from 'react';
import './App.css';
import Navbar from './navbar';
import axios from 'axios';
import { useState } from 'react'


function App() {
  const [firstname, setFname] = useState("");
  const [lastname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");



  const [employeeList, setEmployeeList] = useState([]);
  const getEmployees = () => {
    axios.get('http://localhost:3001/employees').then((response) => {
      setEmployeeList(response.data);
    });


  }
  const addEmployee = () => {
    axios.post('http://localhost:3001/create',{
      firstname:firstname ,
      lastname:lastname ,
      email:email ,
      position:position

    }).then(() => {
      setEmployeeList([
      ...employeeList,
      {
        firstname:firstname,
        lastname:firstname,
        email:email,
        position:position
      }
      ])
    })
  }
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <h1>Hello </h1>
        <form  style={{ width: "300px" }}>
          
          <div class="form-group">
            <label for="">firstname</label>
            <input type="text" className="form-control" name="firstname" onChange={(event) => {
              setFname(event.target.value)
            }} />
          </div>
          <div class="form-group" >
            <label for="">lastname</label>
            <input type="text" className="form-control" name="lastname" onChange={(event) => {
              setLname(event.target.value)
            }}/>
          </div>
          <div class="form-group">
            <label for="">email</label>
            <input type="email" className="form-control" name="email" onChange={(event) => {
              setEmail(event.target.value)
            }}/>
          </div>
          <div class="form-group">
            <label for="">positon</label>
            <input type="text" className="form-control" name="position" onChange={(event) => {
              setPosition(event.target.value)
            }}/>
          </div>

          
          <button className="btn btn-success" onClick={addEmployee}>confirm</button>
        </form>
        <hr />
        <div className="employees">
          <button className="btn btn-primary" onClick={getEmployees}>Show info</button>
          
          <hr />
          {employeeList.map((val, key) => {
            return (
              <div className="info card" style={{ width: "400px" }}>
                <div className="info-body text-left" style={{ color: "black" }}>
                  <p className="info-text">firstname: {val.firstname}</p>
                  <p className="info-text">lastname: {val.lastname}</p>
                  <p className="info-text">email: {val.email}</p>
                  <p className="info-text">position: {val.position}</p>
                </div>
              </div>
            )

          })}
        </div>
      </div>
    </div>
  );
}

export default App;
