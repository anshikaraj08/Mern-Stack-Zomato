import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from '../components/ThemeToggle'
import '../styles/theme.css'
import '../styles/auth.css'

const UserRegister = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    agreeToTerms: false,
  })

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  return (
    <div className="auth-container">
      <ThemeToggle />
      <div className="auth-card">
        <div className="auth-header">
          <span className="auth-badge">User Registration</span>
          <h1 className="auth-title">Create your account</h1>
          <p className="auth-subtitle">Join to explore and enjoy delicious meals</p>
        </div>

        <div className="role-selector">
          <button className="role-btn active">Normal User</button>
          <Link to="/food-partner/register" style={{ flex: 1 }}>
            <button className="role-btn">Food Partner</button>
          </Link>
        </div>

        <form className="auth-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="John"
                className="form-input"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Doe"
                className="form-input"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create password"
              className="form-input"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="form-checkbox-group">
            <input
              type="checkbox"
              id="agreeToTerms"
              name="agreeToTerms"
              className="form-checkbox"
              checked={formData.agreeToTerms}
              onChange={handleChange}
            />
            <label htmlFor="agreeToTerms" className="checkbox-label">
              I agree to the Terms & Conditions
            </label>
          </div>

          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </form>

        <div className="auth-footer">
          <p className="auth-link-text">
            Already have an account?{' '}
            <Link to="/user/login" className="auth-link">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default UserRegister
