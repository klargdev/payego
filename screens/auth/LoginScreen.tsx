import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styled } from 'nativewind'
import { useAuth } from '../../context/AuthContext'
import PhoneInput from '../../components/auth/PhoneInput'
import OTPInput from '../../components/auth/OTPInput'

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledButton = styled(TouchableOpacity)

export default function LoginScreen() {
  const [phone, setPhone] = useState('')
  const [otp, setOTP] = useState('')
  const [step, setStep] = useState<'phone' | 'otp'>('phone')
  const [error, setError] = useState('')
  
  const { login, sendOTP, loading } = useAuth()

  const handleSendOTP = async () => {
    if (phone.length !== 11) {
      setError('Please enter a valid phone number')
      return
    }
    
    try {
      await sendOTP(phone)
      setStep('otp')
      setError('')
    } catch (err) {
      setError('Failed to send OTP. Please try again.')
    }
  }

  const handleLogin = async () => {
    if (otp.length !== 6) {
      setError('Please enter a valid OTP')
      return
    }

    try {
      await login(phone, otp)
    } catch (err) {
      setError('Invalid OTP. Please try again.')
    }
  }

  return (
    <StyledView className="flex-1 bg-white p-6">
      <StyledText className="text-3xl font-bold mb-8">Welcome to PayeGo</StyledText>
      
      {step === 'phone' ? (
        <>
          <PhoneInput 
            value={phone}
            onChange={setPhone}
            error={error}
          />
          <StyledButton 
            className={`mt-4 p-4 rounded-lg ${loading ? 'bg-gray-400' : 'bg-green-500'}`}
            onPress={handleSendOTP}
            disabled={loading}
          >
            <StyledText className="text-white text-center font-semibold">
              {loading ? 'Sending...' : 'Send OTP'}
            </StyledText>
          </StyledButton>
        </>
      ) : (
        <>
          <OTPInput
            value={otp}
            onChange={setOTP}
            error={error}
          />
          <StyledButton 
            className={`mt-4 p-4 rounded-lg ${loading ? 'bg-gray-400' : 'bg-green-500'}`}
            onPress={handleLogin}
            disabled={loading}
          >
            <StyledText className="text-white text-center font-semibold">
              {loading ? 'Verifying...' : 'Verify OTP'}
            </StyledText>
          </StyledButton>
          <StyledButton 
            className="mt-4"
            onPress={() => {
              setStep('phone')
              setOTP('')
              setError('')
            }}
          >
            <StyledText className="text-green-500 text-center">
              Change Phone Number
            </StyledText>
          </StyledButton>
        </>
      )}
    </StyledView>
  )
}