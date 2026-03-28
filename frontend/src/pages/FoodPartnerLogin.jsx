import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from '../components/ThemeToggle'
import '../styles/theme.css'
import '../styles/auth.css'

const FoodPartnerLogin = () => {
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
          <span className="auth-badge">Food Partner Login</span>
          <h1 className="auth-title">Partner Portal</h1>
          <p className="auth-subtitle">Login to manage your restaurant</p>
        </div>

        <div className="role-selector">
          <Link to="/user/login" style={{ flex: 1 }}>
            <button className="role-btn">Normal User</button>
          </Link>
          <button className="role-btn active">Food Partner</button>
        </div>

        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="business@example.com"
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
            <Link to="/food-partner/register" className="auth-link">
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

export default FoodPartnerLogin
