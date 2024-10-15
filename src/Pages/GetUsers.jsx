import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "../Style.css";

const GetUsers = () => {
  let [state, setState] = useState([]);
  let [thead, setThead] = useState([]);
  let navigate = useNavigate();

 
  useEffect(() => {
    axios.get("http://localhost:3000/users")
      .then(res => {
        console.log(res.data);
        if (res.data.length > 0) {
          setThead(Object.keys(res.data[0]).splice(0, 4));
        }
        setState(res.data);
      })
      .catch(err => console.error("Error fetching data:", err));
  }, []);

 
  function deletes(id) {
    axios.delete(`http://localhost:3000/users/${id}`)
      .then(() => {
      
        setState(state.filter(user => user.id !== id));
        console.log("User deleted successfully");
      })
      .catch(err => console.error("Error deleting user:", err));
  }

  return (
    <>
      <h1>C R U D</h1>
      <button onClick={() => navigate("/add")}>Add +</button>
      
      <table border={1}>
        <thead>
          <tr>
            {
              thead.map((header, i) => (
                <th key={i}>{header}</th>
              ))
            }
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {
            state.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
               
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link to={`/edit/${user.id}`}><button id="edit">Edit</button></Link>
                  &nbsp;&nbsp;
                  <button onClick={() => deletes(user.id)} id="delete">Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
};

export default GetUsers;
