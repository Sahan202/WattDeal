import React, { useState } from 'react';


const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-title">Join WattDeal</h2>
        <p className="form-subtitle">Create your account and start your journey</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <div className="input-group">
              <i className="fas fa-user input-icon"></i>
              <input 
                type="text" 
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter Name" 
                className="form-input"
              />
            </div>
          </div>
          
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <div className="input-group">
              <i className="fas fa-envelope input-icon"></i>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email" 
                className="form-input"
              />
            </div>
          </div>
          
          <div className="form-group">
            <label className="form-label">Password</label>
            <div className="input-group">
              <i className="fas fa-lock input-icon"></i>
              <input 
                type="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="****" 
                className="form-input"
              />
            </div>
          </div>
          
          <div className="form-group">
            <label className="form-label">Confirm Password</label>
            <div className="input-group">
              <i className="fas fa-lock input-icon"></i>
              <input 
                type="password" 
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="****" 
                className="form-input"
              />
            </div>
          </div>
          
          <button type="submit" className="submit-button">
            Sign Up <i className="fas fa-arrow-right button-icon"></i>
          </button>
        </form>
        
        <p className="signin-text">
          Already have an account? <a href="/login" className="signin-link">login</a>
        </p>
      </div>
    </div>
  );
};

//styles combined directly in the file
const styles = `
/* Main container styles */
.form-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #e6f0ff, #bdd7ff);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 1rem;
}

/* Card styles */
.form-card {
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 28rem;
  padding: 2rem;
}

/* Heading styles */
.form-title {
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.5rem;
  color: #2d3748;
}

.form-subtitle {
  text-align: center;
  color: #718096;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

/* Form group styles */
.form-group {
  margin-bottom: 1rem;
}

.form-group:last-of-type {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  color: #4a5568;
  margin-bottom: 0.25rem;
  font-size: 0.95rem;
}

.input-group {
  display: flex;
  align-items: center;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  padding: 0.5rem;
  transition: border-color 0.15s ease-in-out;
}

.input-group:focus-within {
  border-color: #4299e1;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.15);
}

.input-icon {
  color: #a0aec0;
  margin-right: 0.5rem;
  width: 1rem;
  text-align: center;
}

.form-input {
  width: 100%;
  border: none;
  outline: none;
  font-size: 0.95rem;
  color: #2d3748;
}

.form-input::placeholder {
  color: #a0aec0;
}

/* Button styles */
.submit-button {
  width: 100%;
  background-color: #3182ce;
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.submit-button:hover {
  background-color: #2c5282;
}

.button-icon {
  margin-left: 0.5rem;
}

/* Sign in link styles */
.signin-text {
  text-align: center;
  color: #718096;
  margin-top: 1rem;
  font-size: 0.95rem;
}

.signin-link {
  color: #3182ce;
  text-decoration: none;
  font-weight: 600;
}

.signin-link:hover {
  text-decoration: underline;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .form-card {
    padding: 1.5rem;
  }
}
`;

const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);

export default SignupForm;