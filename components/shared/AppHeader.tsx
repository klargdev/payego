import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styled } from 'nativewind'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { useAuth } from '../../context/AuthContext'

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledButton = styled(TouchableOpacity)

interface AppHeaderProps {
  title: string
  showBack?: boolean
  showProfile?: boolean
}

export default function AppHeader({ title, showBack, showProfile = true }: AppHeaderProps) {
  const navigation = useNavigation()
  const { user } = useAuth()

  return (
    <StyledView className="flex-row items-center justify-between p-4 bg-white border-b border-gray-200">
      <StyledView className="flex-row items-center">
        {showBack && (
          <StyledButton 
            className="mr-3" 
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={24} color="#374151" />
          </StyledButton>
        )}
        <StyledText className="text-lg font-semibold text-gray-900">
          {title}
        </StyledText>
      </StyledView>

      {showProfile && (
        <StyledButton 
          className="rounded-full bg-gray-100 w-10 h-10 items-center justify-center"
          onPress={() => navigation.navigate('Profile')}
        >
          <Ionicons 
            name="person-outline" 
            size={20} 
            color="#374151"
          />
        </StyledButton>
      )}
    </StyledView>
  )
}