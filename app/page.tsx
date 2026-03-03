'use client'

import { useState } from 'react'
import { Eye, EyeOff, Check, Apple, Chrome, Maximize2 } from 'lucide-react'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', { ...formData, agreedToTerms })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-teal-800 to-orange-600 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-slate-900 via-teal-700 to-red-700" />
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl w-full">
          {/* Left side - Content */}
          <div className="text-white order-2 lg:order-1">
            <div className="mb-8">
              <div className="flex items-center gap-2 text-teal-300 text-sm font-semibold mb-8">
                <div className="w-6 h-6 rounded-full bg-teal-400 flex items-center justify-center text-xs">
                  ⊕
                </div>
                aps
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-2 leading-tight">
              Expert level Cybersecurity
              <br />
              in <span className="text-teal-400">hours</span> not weeks.
            </h1>
            
            <div className="mt-12">
              <h3 className="text-white font-semibold mb-6">What's included</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-200">Effortlessly spider and map targets to uncover hidden security flaws</span>
                </li>
                <li className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-200">Deliver high-quality, validated findings in hours, not weeks.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-200">Generate professional, enterprise-grade security reports automatically.</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-12">
              <div className="flex items-center gap-2 text-yellow-300">
                <span className="text-lg">★</span>
                <span className="font-semibold">Rated 4.5/5.0</span>
                <span className="text-gray-300 text-sm">(100k+ reviews)</span>
              </div>
              <p className="text-gray-300 text-sm mt-2">Trustpilot</p>
            </div>
          </div>

          {/* Right side - Sign up card */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md mx-auto">
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Sign up</h2>
              <p className="text-center text-gray-600 text-13 mb-8">
                Already have an account?{' '}
                <a href="#" className="text-teal-500 hover:text-teal-600">
                  Log in
                </a>
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name*"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-gray-400 text-gray-600 text-14"
                />
                
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name*"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-gray-400 text-gray-600 text-14"
                />
                
                <input
                  type="email"
                  name="email"
                  placeholder="Email address*"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-gray-400 text-gray-600 text-14"
                />
                
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Password (8+ characters)*"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-gray-400 text-gray-600 text-14 pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 text-teal-500 focus:ring-teal-500 mt-0.5 flex-shrink-0"
                  />
                  <label htmlFor="terms" className="text-12 text-gray-700 leading-relaxed">
                    I agree to Aps's{' '}
                    <a href="#" className="text-teal-500 hover:text-teal-600">
                      Terms & Conditions
                    </a>{' '}
                    and acknowledge the{' '}
                    <a href="#" className="text-teal-500 hover:text-teal-600">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-full transition-colors mt-6 text-15"
                >
                  Create account
                </button>
              </form>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">or</span>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-black hover:bg-gray-900 text-white font-semibold py-3 rounded-full flex items-center justify-center gap-2 transition-colors">
                  <Apple className="w-5 h-5" />
                </button>
                <button className="flex-1 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 font-semibold py-3 rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#EA4335" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#4A90E2" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#FBBC05" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </button>
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full flex items-center justify-center gap-2 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
