import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
  let navigate = useNavigate();
  let [values, setValues] = useState({ username: "", email: "" });
  let { id } = useParams(); // Destructuring id from useParams

  // Fetch user data on component mount
  useEffect(() => {
    axios.get("http://localhost:3000/users/" + id)
      .then((res) => setValues(res.data))
      .catch((err) => console.error("Error fetching user:", err));
  }, [id]); // Adding id as a dependency to avoid re-fetching unnecessarily

  // Handle input changes
  let change = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // Update the user when the form is submitted
  let handleSubmit = () => {
    axios.put(`http://localhost:3000/users/${id}`, values)
      .then(() => {
        console.log('User updated successfully');
        navigate('/'); // Redirect to home page after update
      })
      .catch((err) => console.error('Error updating user:', err));
  };

  return (
    <div>
      <h2>Edit User</h2>
      <input
        type="text"
        placeholder="Enter username"
        name="username" // Added name attribute
        value={values.username}
        onChange={change}
      />
      <br />
      <input
        type="email"
        placeholder="Enter email"
        name="email" // Added name attribute
        value={values.email}
        onChange={change}
      />
      <br />
      <button onClick={handleSubmit}>Change</button> {/* Added onClick to trigger update */}
    </div>
  );
};

export default Update;
