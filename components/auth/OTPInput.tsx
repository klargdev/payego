import React, { useRef, useState } from 'react'
import { View, TextInput, Text } from 'react-native'
import { styled } from 'nativewind'

const StyledView = styled(View)
const StyledInput = styled(TextInput)
const StyledText = styled(Text)

interface OTPInputProps {
  value: string
  onChange: (value: string) => void
  error?: string
}

export default function OTPInput({ value, onChange, error }: OTPInputProps) {
  const inputRefs = useRef<TextInput[]>([])
  const [focusedIndex, setFocusedIndex] = useState<number>(0)
  
  const handleChange = (text: string, index: number) => {
    const cleaned = text.replace(/[^0-9]/g, '')
    const newValue = value.split('')
    newValue[index] = cleaned
    onChange(newValue.join(''))
    
    if (cleaned && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !value[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  return (
    <StyledView className="w-full">
      <StyledView className="flex-row justify-between mb-2">
        {[...Array(6)].map((_, index) => (
          <StyledInput
            key={index}
            ref={ref => {
              if (ref) inputRefs.current[index] = ref
            }}
            className={`w-12 h-12 border text-center text-lg rounded-lg ${
              focusedIndex === index ? 'border-green-500' : 'border-gray-300'
            }`}
            maxLength={1}
            keyboardType="numeric"
            value={value[index] || ''}
            onChangeText={text => handleChange(text, index)}
            onKeyPress={e => handleKeyPress(e, index)}
            onFocus={() => setFocusedIndex(index)}
            onBlur={() => setFocusedIndex(-1)}
          />
        ))}
      </StyledView>
      {error && (
        <StyledText className="text-red-500 text-sm">{error}</StyledText>
      )}
    </StyledView>
  )
}