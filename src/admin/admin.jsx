import React, { useState } from 'react';
import axios from 'axios';
import './admin.css';
import { useNavigate,Link } from 'react-router-dom';

export default function Admin() {
  
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send data to the backend
      const response = await axios.post('http://localhost:5000/api/login', formData);
      
      if (response.data.success) {
        // Navigate to the home page on success
        navigate('/home');
      } else {
        setErrorMessage(response.data.message || 'Login failed');
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'An error occurred. Please try again.');
    }
  };

  return (
    <div className="login">
      {/* Right side admin login */}
      <div className="rightside">
        <h1>Admin Login</h1>

        <form onSubmit={handleSubmit}>
          <p>Username:</p>
          <input
            className="inputs"
            type="text"
            name="username"
            placeholder="Enter username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <p>Password:</p>
          <input
            className="inputs"
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <br />
          {/* Selection process */}
          <p>Select </p>
          <select
            className="dropdown"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Coordinator">Coordinator</option>
            <option value="Student">Student</option>
          </select>
          <br />
        <Link to='/home'><button className="loginbt1" type="submit">
            Login
          </button></Link>
        </form>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <br />
      </div>

    </div>
  );
}
