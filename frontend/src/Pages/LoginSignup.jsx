import { useState } from 'react';
import './LoginSign.css'; 

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });
  const [errors, setErrors] = useState({});

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
    setErrors({});
  };

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!validateEmail(formData.email)) {
      newErrors.email = '**Please enter a valid email address**';
    }
    if (!validatePassword(formData.password)) {
      newErrors.password = '**Password must be at least 8 characters long, one uppercase letter, one lowercase letter, and one number**';
    }
    if (!isLogin && !formData.username) {
      newErrors.username = 'Username is required.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const login = async () => {
    console.log("logined executed", formData);

    let responseData;

    await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData = data);

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/home");
    } else {
      alert("PLEASE LOGIN WITH CORRECT EMAIL OR PASSWORD!!");
    }
  };

  const signup = async () => {
    console.log("sign executed", formData);

    if (!validateForm()) {
      return;
    }

    let responseData;

    await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData = data);

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/home");
    } else {
      alert(responseData.errors);
    }
  };

  return (
    <div className={`auth-container ${isLogin ? 'login' : 'signup'}`}>
      <div className="backgroundLogin"></div>
      <div className="auth-form-container">
        <div className="auth-info">
          <h2>{isLogin ? 'Welcome Back!' : 'Create an Account'}</h2>
          <p>{isLogin ? 'Login to your account' : 'Sign up to get started'}</p>
        </div>
        <div className="auth-form">
          <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
          
          {!isLogin &&
            <label>
              User Name:
              <input type="text" name="username" value={formData.username} onChange={changeHandler} />
              {errors.username && <p className="error">{errors.username}</p>}
            </label>
          }

          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={changeHandler} />
            {errors.email && <p className="error">{errors.email}</p>}
          </label>

          <label>
            Password:
            <input type="password" name="password" value={formData.password} onChange={changeHandler} />
            {errors.password && <p className="error">{errors.password}</p>}
          </label>

          <button onClick={() => { isLogin ? login() : signup() }}>{isLogin ? 'Login' : 'Sign Up'}</button>

          <p onClick={toggleForm} className="toggle-form">
            {isLogin ? 'Don\'t have an account? Sign Up' : 'Already have an account? Login'}
          </p>

        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
