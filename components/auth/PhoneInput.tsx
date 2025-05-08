import React from 'react'
import { View, TextInput, Text } from 'react-native'
import { styled } from 'nativewind'

const StyledInput = styled(TextInput)
const StyledText = styled(Text)
const StyledView = styled(View)

interface PhoneInputProps {
  value: string
  onChange: (value: string) => void
  error?: string
}

export default function PhoneInput({ value, onChange, error }: PhoneInputProps) {
  const handleChange = (text: string) => {
    // Only allow numbers
    const cleaned = text.replace(/[^0-9]/g, '')
    onChange(cleaned)
  }

  return (
    <StyledView className="w-full">
      <StyledView className="flex-row items-center border border-gray-300 rounded-lg p-3 mb-2">
        <StyledText className="text-gray-600 mr-2">+234</StyledText>
        <StyledInput
          className="flex-1 text-base"
          value={value}
          onChangeText={handleChange}
          placeholder="Enter phone number"
          keyboardType="numeric"
          maxLength={11}
        />
      </StyledView>
      {error && (
        <StyledText className="text-red-500 text-sm">{error}</StyledText>
      )}
    </StyledView>
  )
}