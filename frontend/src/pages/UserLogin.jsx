import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from '../components/ThemeToggle'
import '../styles/theme.css'
import '../styles/auth.css'

const UserLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
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
          <span className="auth-badge">User Login</span>
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">Sign in to your account to continue</p>
        </div>

        <div className="role-selector">
          <button className="role-btn active">Normal User</button>
          <Link to="/food-partner/login" style={{ flex: 1 }}>
            <button className="role-btn">Food Partner</button>
          </Link>
        </div>

        <form className="auth-form">
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
              placeholder="Enter password"
              className="form-input"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="form-checkbox-group">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              className="form-checkbox"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <label htmlFor="rememberMe" className="checkbox-label">
              Remember me
            </label>
          </div>

          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </form>

        <div className="auth-footer">
          <p className="auth-link-text">
            Don't have an account?{' '}
            <Link to="/user/register" className="auth-link">
              Register here
            </Link>
          </p>
          <p className="auth-link-text">
            <Link to="#" className="auth-link">
              Forgot your password?
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default UserLogin
