import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from '../components/ThemeToggle'
import '../styles/theme.css'
import '../styles/auth.css'

const FoodPartnerRegister = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phoneNumber: '',
    password: '',
    businessAddress: '',
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
          <span className="auth-badge">Food Partner Registration</span>
          <h1 className="auth-title">Join as Partner</h1>
          <p className="auth-subtitle">Grow your restaurant business with us</p>
        </div>

        <div className="role-selector">
          <Link to="/user/register" style={{ flex: 1 }}>
            <button className="role-btn">Normal User</button>
          </Link>
          <button className="role-btn active">Food Partner</button>
        </div>

        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="businessName" className="form-label">Business Name</label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              placeholder="Tasty Bites"
              className="form-input"
              value={formData.businessName}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contactName" className="form-label">Contact Name</label>
              <input
                type="text"
                id="contactName"
                name="contactName"
                placeholder="Jane Doe"
                className="form-input"
                value={formData.contactName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber" className="form-label">Phone</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="+1 555 123 4567"
                className="form-input"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
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
              placeholder="Create password"
              className="form-input"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="businessAddress" className="form-label">Address</label>
            <textarea
              id="businessAddress"
              name="businessAddress"
              placeholder="123 Market Street"
              className="form-textarea"
              value={formData.businessAddress}
              onChange={handleChange}
            />
            <span className="helper-text">Full address helps customers find you faster.</span>
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
            Create Partner Account
          </button>
        </form>

        <div className="auth-footer">
          <p className="auth-link-text">
            Already a partner?{' '}
            <Link to="/food-partner/login" className="auth-link">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default FoodPartnerRegister
