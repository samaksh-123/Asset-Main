// import React, { useState } from 'react';
// import axios from 'axios';
// import './AuthForm.css'; // ✅ import the CSS

// const Login = () => {
//   const [form, setForm] = useState({ email: '', password: '' });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/login', form);
//       localStorage.setItem('token', response.data.token);
//       localStorage.setItem('user', JSON.stringify(response.data.user));
//       alert('Login successful');
//       window.location.href = '/dashboard';
//     } catch (error) {
//       alert(error.response?.data?.msg || 'Invalid email or password');
//     }
//   };

//   return (
//     <div className="auth-container">
//       <form className="auth-form" onSubmit={handleSubmit}>
//         <h2>Login</h2>
//         <label>Email</label>
//         <input
//           type="email"
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//           required
//           placeholder="Enter your email"
//         />

//         <label>Password</label>
//         <input
//           type="password"
//           name="password"
//           value={form.password}
//           onChange={handleChange}
//           required
//           placeholder="Enter your password"
//         />

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from 'react';
// import axios from 'axios';
// import './AuthForm.css'; // Updated CSS with animation and bg image
//  // ✅ Background logo

// const Login = () => {
//   const [form, setForm] = useState({ email: '', password: '' });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/login', form);
//       localStorage.setItem('token', response.data.token);
//       localStorage.setItem('user', JSON.stringify(response.data.user));
//       alert('Login successful');
//       window.location.href = '/dashboard';
//     } catch (error) {
//       alert(error.response?.data?.msg || 'Invalid email or password');
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="background-overlay"></div>

//       <form className="auth-form" onSubmit={handleSubmit}>
//         <h2>Login</h2>

//         <label>Email</label>
//         <input
//           type="email"
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//           required
//           placeholder="Enter your email"
//         />

//         <label>Password</label>
//         <input
//           type="password"
//           name="password"
//           value={form.password}
//           onChange={handleChange}
//           required
//           placeholder="Enter your password"
//         />

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;



// import React, { useState } from 'react';
// import axios from 'axios';
// import './AuthForm.css'; // ✅ import CSS

// const Login = () => {
//   const [form, setForm] = useState({ email: '', password: '' });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/login', form);
//       localStorage.setItem('token', response.data.token);
//       localStorage.setItem('user', JSON.stringify(response.data.user));
//       alert('Login successful');
//       window.location.href = '/dashboard';
//     } catch (error) {
//       alert(error.response?.data?.msg || 'Invalid email or password');
//     }
//   };

//   return (
//     <div className="auth-container">
//       {/* Background Image Layer */}
//       <div className="bg-image" />

//       {/* Login Form */}
//       <form className="auth-form" onSubmit={handleSubmit}>
//         <h2>Login</h2>
//         <label>Email</label>
//         <input
//           type="email"
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//           required
//           placeholder="Enter your email"
//         />

//         <label>Password</label>
//         <input
//           type="password"
//           name="password"
//           value={form.password}
//           onChange={handleChange}
//           required
//           placeholder="Enter your password"
//         />

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from 'react';
// import axios from 'axios';
// import './AuthForm.css'; // CSS includes animated bg

// const Login = () => {
//   const [form, setForm] = useState({ email: '', password: '' });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
<<<<<<< HEAD
//       const response = await axios.post('http://localhost:5000/api/auth/login', form);
=======
//       const response = await axios.post('https://asset-main-backend.onrender.com/api/auth/login', form);
>>>>>>> 70591ac18cedfc5e8f5fda49db3584e73ea288d0
//       localStorage.setItem('token', response.data.token);
//       localStorage.setItem('user', JSON.stringify(response.data.user));
//       alert('Login successful');
//       window.location.href = '/dashboard';
//     } catch (error) {
//       alert(error.response?.data?.msg || 'Invalid email or password');
//     }
//   };

//   return (
//     <div className="auth-container">
//       {/* ✅ Animated Background Layer */}
//       <div className="bg-image" />

//       {/* ✅ Glassmorphism Form */}
//       <form className="auth-form" onSubmit={handleSubmit}>
//         <h2>Login</h2>

//         <label htmlFor="email">Email</label>
//         <input
//           id="email"
//           type="email"
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//           required
//           placeholder="Enter your email"
//         />

//         <label htmlFor="password">Password</label>
//         <input
//           id="password"
//           type="password"
//           name="password"
//           value={form.password}
//           onChange={handleChange}
//           required
//           placeholder="Enter your password"
//         />

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;


<<<<<<< HEAD
=======
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './AuthForm.css'; // CSS includes animated bg

// const Login = () => {
//   const [form, setForm] = useState({ email: '', password: '' });
//   const navigate = useNavigate(); // ✅ React router hook for navigation

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // ✅ Change this to your deployed backend URL
//       const response = await axios.post('https://asset-main-backend.onrender.com/api/auth/login', form);

//       localStorage.setItem('token', response.data.token);
//       localStorage.setItem('user', JSON.stringify(response.data.user));
//       alert('Login successful');

//       navigate('/dashboard'); // ✅ Use React Router navigation
//     } catch (error) {
//       alert(error.response?.data?.msg || 'Invalid email or password');
//     }
//   };

//   return (
//     <div className="auth-container">
//       {/* ✅ Animated Background Layer */}
//       <div className="bg-image" />

//       {/* ✅ Glassmorphism Form */}
//       <form className="auth-form" onSubmit={handleSubmit}>
//         <h2>Login</h2>

//         <label htmlFor="email">Email</label>
//         <input
//           id="email"
//           type="email"
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//           required
//           placeholder="Enter your email"
//         />

//         <label htmlFor="password">Password</label>
//         <input
//           id="password"
//           type="password"
//           name="password"
//           value={form.password}
//           onChange={handleChange}
//           required
//           placeholder="Enter your password"
//         />

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;



>>>>>>> 70591ac18cedfc5e8f5fda49db3584e73ea288d0
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AuthForm.css'; // Make sure this CSS file exists

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // ✅ Backend API call
<<<<<<< HEAD
      const response = await axios.post('https://asset-main-backend.onrender.com/api/auth/login', form);
=======
      const response = await axios.post('https://asset-main-2.onrender.com/api/auth/login', form);
>>>>>>> 70591ac18cedfc5e8f5fda49db3584e73ea288d0

      // ✅ Save login info in local storage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      alert('Login successful');

      // ✅ Navigate to dashboard using React Router
      navigate('/dashboard');
    } catch (error) {
      alert(error.response?.data?.msg || 'Invalid email or password');
    }
  };

  return (
    <div className="auth-container">
      {/* ✅ Animated Background Layer */}
      <div className="bg-image" />

      {/* ✅ Glassmorphism Form */}
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="Enter your email"
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
          placeholder="Enter your password"
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
