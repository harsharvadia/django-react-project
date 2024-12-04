// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//   const [first_name, setFirstName] = useState('');
//   const [last_name, setLastname] = useState('');
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   // const [gender, setGender] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate =useNavigate()

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       setError('Passwords do not match!');
//       return;
//     }
//     try {
//       const response = await axios.post('http://localhost:8000/api/register/', {
//         username,
//         email,
//         password,
//         first_name,
//         last_name,
      
//       });
//       console.log(response.data);
//       alert('Now you can login with your credential')
//       navigate('/login')
//     } catch (error) {
//       setError('Registration failed');
//     }
//   };

//   return (
//     <div
//       style={{
//         maxWidth: '400px',
//         margin: '50px auto',
//         padding: '20px',
        
//         borderRadius: '10px',
//         boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
//         backgroundColor: '#1b1b1b ',
//       }}
//     >
//       <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottom: '15px' }}>
//           <label style={{ display: 'block', marginBottom: '5px',color:'whitesmoke' }}>Firstname:</label>
//           <input
//             type="text"
//             value={first_name}
//             onChange={(e) => setFirstName(e.target.value)}
//             required
//             style={{
//               width: '100%',
//               padding: '10px',
//               border: '1px solid #ccc',
//               borderRadius: '5px',
//             }}
//           />
//         </div>
//         <div style={{ marginBottom: '15px' }}>
//           <label style={{ display: 'block', marginBottom: '5px',color:'whitesmoke' }}>Lastname:</label>
//           <input
//             type="text"
//             value={last_name}
//             onChange={(e) => setLastname(e.target.value)}
//             required
//             style={{
//               width: '100%',
//               padding: '10px',
//               border: '1px solid #ccc',
//               borderRadius: '5px',
//             }}
//           />
//         </div>
//         <div style={{ marginBottom: '15px' }}>
//           <label style={{ display: 'block', marginBottom: '5px',color:'whitesmoke' }}>Username:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//             style={{
//               width: '100%',
//               padding: '10px',
//               border: '1px solid #ccc',
//               borderRadius: '5px',
//             }}
//           />
//         </div>
//         <div style={{ marginBottom: '15px' }}>
//           <label style={{ display: 'block', marginBottom: '5px',color:'whitesmoke' }}>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             style={{
//               width: '100%',
//               padding: '10px',
//               border: '1px solid #ccc',
//               borderRadius: '5px',
//             }}
//           />
//         </div>
//         {/* <div style={{ marginBottom: '15px' }}>
//           <label style={{ display: 'block', marginBottom: '5px',color:'whitesmoke' }}>Gender:</label>
//           <input
//             type="text"
//             value={gender}
//             onChange={(e) => setGender(e.target.value)}
//             required
//             style={{
//               width: '100%',
//               padding: '10px',
//               border: '1px solid #ccc',
//               borderRadius: '5px',
//             }}
//           />
//         </div> */}
//         <div style={{ marginBottom: '15px' }}>
//           <label style={{ display: 'block', marginBottom: '5px',color:'whitesmoke' }}>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             style={{
//               width: '100%',
//               padding: '10px',
//               border: '1px solid #ccc',
//               borderRadius: '5px',
//             }}
//           />
//         </div>
//         <div style={{ marginBottom: '15px' }}>
//           <label style={{ display: 'block', marginBottom: '5px',color:'whitesmoke' }}>Confirm Password:</label>
//           <input
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//             style={{
//               width: '100%',
//               padding: '10px',
//               border: '1px solid #ccc',
//               borderRadius: '5px',
//             }}
//           />
//         </div>
//         <button
//           type="submit"
//           style={{
//             width: '100%',
//             padding: '10px',
//             backgroundColor: '#4CAF50',
//             color: 'white',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer',
//             fontSize: '16px',
//           }}
//         >
//           Register
//         </button>
//         {error && (
//           <p style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>{error}</p>
//         )}
//         <p style={{ textAlign: 'center', marginTop: '15px',color:'whitesmoke' }}>
//           Already registered? <Link to="/login">Login here</Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Register;
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Regex patterns for validation
  const namePattern = /^[A-Za-z]+$/; // Only letters
  const usernamePattern = /^[a-zA-Z0-9]{3,}$/; // Minimum 3 characters, alphanumeric
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; // Minimum 6 characters, at least one letter and one number

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    // Validate fields using regex
    if (!namePattern.test(first_name)) {
      setError('First name must contain only letters.');
      return;
    }
    if (!namePattern.test(last_name)) {
      setError('Last name must contain only letters.');
      return;
    }
    if (!usernamePattern.test(username)) {
      setError('Username must be at least 3 characters long and alphanumeric.');
      return;
    }
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!passwordPattern.test(password)) {
      setError('Password must be at least 6 characters long, contain at least one letter and one number.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/register/', {
        username,
        email,
        password,
        first_name,
        last_name,
      });
      console.log(response.data);
      alert('Now you can login with your credentials');
      navigate('/login');
    } catch (error) {
      setError('Registration failed');
    }
  };

  return (
    <div
      style={{
        maxWidth: '400px',
        margin: '50px auto',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#1b1b1b ',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Register</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: 'whitesmoke' }}>Firstname:</label>
          <input
            type="text"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
            required
            placeholder="Enter your first name"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: 'whitesmoke' }}>Lastname:</label>
          <input
            type="text"
            value={last_name}
            onChange={(e) => setLastname(e.target.value)}
            required
            placeholder="Enter your last name"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: 'whitesmoke' }}>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="3+ characters (alphanumeric)"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: 'whitesmoke' }}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="example@example.com"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: 'whitesmoke' }}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="6+ characters, letters and numbers"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: 'whitesmoke' }}>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="Confirm your password"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Register
        </button>
        {error && (
          <p style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>{error}</p>
        )}
        <p style={{ textAlign: 'center', marginTop: '15px', color: 'whitesmoke' }}>
          Already registered? <Link to="/login">Login here</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
