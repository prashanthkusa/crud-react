import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddUsers = () => {
  let navigate = useNavigate();
  let [values, setValues] = useState({ username: "", email: "" });

  
  let change = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };


  let adduser = (e) => {
    e.preventDefault(); 
    axios.post("http://localhost:3000/users", values)
      .then((res) => {
        console.log("User added successfully", res);
        navigate('/'); 
      })
      .catch((err) => {
        console.error("Error adding user:", err);  
      });
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={adduser}>
        <input
          type="text"
          name="username"  
          placeholder="Enter username"
          value={values.username} 
          onChange={change}  
        />
        <br />
        <input
          type="email"
          name="email"  
          placeholder="Enter email"
          value={values.email}  
          onChange={change}  
        />
        <br />
        <button type="submit">Add</button>  
      </form>
    </div>
  );
};

export default AddUsers;
