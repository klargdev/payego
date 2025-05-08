import React from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import { styled } from 'nativewind'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { useAuth } from '../../context/AuthContext'
import AppHeader from '../../components/shared/AppHeader'

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledButton = styled(TouchableOpacity)
const StyledSafeArea = styled(SafeAreaView)

export default function ProfileScreen() {
  const { user, logout } = useAuth()

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: logout,
        },
      ]
    )
  }

  return (
    <StyledSafeArea className="flex-1 bg-white">
      <AppHeader title="Profile" showBack showProfile={false} />
      
      <StyledView className="p-6">
        {/* Profile Info */}
        <StyledView className="items-center mb-8">
          <StyledView className="w-24 h-24 bg-gray-100 rounded-full items-center justify-center mb-4">
            <Ionicons name="person" size={40} color="#374151" />
          </StyledView>
          <StyledText className="text-xl font-bold mb-1">
            {user?.phone}
          </StyledText>
          <StyledText className="text-gray-600 capitalize">
            {user?.role}
          </StyledText>
        </StyledView>

        {/* Settings */}
        <StyledView className="bg-gray-50 rounded-xl mb-6">
          <StyledButton className="flex-row items-center p-4 border-b border-gray-200">
            <Ionicons name="notifications-outline" size={24} color="#374151" />
            <StyledText className="ml-3 flex-1">Notifications</StyledText>
            <Ionicons name="chevron-forward" size={24} color="#374151" />
          </StyledButton>

          <StyledButton className="flex-row items-center p-4 border-b border-gray-200">
            <Ionicons name="shield-outline" size={24} color="#374151" />
            <StyledText className="ml-3 flex-1">Privacy</StyledText>
            <Ionicons name="chevron-forward" size={24} color="#374151" />
          </StyledButton>

          <StyledButton className="flex-row items-center p-4">
            <Ionicons name="help-circle-outline" size={24} color="#374151" />
            <StyledText className="ml-3 flex-1">Help & Support</StyledText>
            <Ionicons name="chevron-forward" size={24} color="#374151" />
          </StyledButton>
        </StyledView>

        {/* Logout Button */}
        <StyledButton 
          className="bg-red-50 p-4 rounded-xl flex-row items-center justify-center"
          onPress={handleLogout}
        >
          <Ionicons name="log-out-outline" size={24} color="#DC2626" />
          <StyledText className="ml-2 text-red-600 font-medium">
            Logout
          </StyledText>
        </StyledButton>
      </StyledView>
    </StyledSafeArea>
  )
}