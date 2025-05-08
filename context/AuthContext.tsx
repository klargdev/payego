import React, { createContext, useContext, useState } from 'react'
import { Alert } from 'react-native'

interface User {
  id: string
  phone: string
  role: 'driver' | 'owner'
}

interface AuthContextType {
  user: User | null
  loading: boolean
  sendOTP: (phone: string) => Promise<void>
  login: (phone: string, otp: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)

  const sendOTP = async (phone: string) => {
    setLoading(true)
    try {
      // TODO: Implement Infobip OTP sending
      // For now, we'll simulate it
      console.log('Sending OTP to:', phone)
      await new Promise(resolve => setTimeout(resolve, 1000))
    } catch (error) {
      Alert.alert('Error', 'Failed to send OTP')
      throw error
    } finally {
      setLoading(false)
    }
  }

  const login = async (phone: string, otp: string) => {
    setLoading(true)
    try {
      // TODO: Implement actual OTP verification
      // For now, we'll simulate successful login
      console.log('Verifying OTP:', otp, 'for phone:', phone)
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setUser({
        id: '123',
        phone,
        role: 'driver' // Default to driver for now
      })
    } catch (error) {
      Alert.alert('Error', 'Invalid OTP')
      throw error
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      sendOTP,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}