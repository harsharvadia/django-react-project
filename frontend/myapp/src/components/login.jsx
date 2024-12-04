// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import Cookies from 'js-cookie'; // Import js-cookie
// import './login.css'; 

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8000/api/login/', { username, password });
//       console.log(response.data);
//       // Save user data and token to cookie
//       Cookies.set('user', JSON.stringify(response.data), { expires: 7 }); // Cookie expires in 7 days
//       Cookies.set('username', response.data.username, { expires: 7, path: '/' });
//       navigate('/'); // Redirect to home page
    
//     } catch (error) {
//       setError('Invalid credentials');
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Username:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="Enter your username"
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter your password"
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//         {error && <p className="error-message">{error}</p>}
//         <p>
//           Not already registered? <Link to="/register">Register here</Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Cookies from 'js-cookie'; // Import js-cookie
import './login.css'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/login/', { username, password });
      console.log(response.data);

      // Save user data and token to cookie
      Cookies.set('user', JSON.stringify(response.data), { expires: 7 }); // Cookie expires in 7 days
      Cookies.set('username', response.data.username, { expires: 7, path: '/' });
      alert('Login successfull')
      navigate('/')
    
      setTimeout(() => {
        window.location.reload();  
      }, 200); 

    } catch (error) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit">Login</button>
        {error && <p className="error-message">{error}</p>}
        <p>
          Not already registered? <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
