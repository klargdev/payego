import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styled } from 'nativewind'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useAuth } from '../../context/AuthContext'

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledButton = styled(TouchableOpacity)
const StyledSafeArea = styled(SafeAreaView)

export default function RoleSelection() {
  const { user } = useAuth()
  const navigation = useNavigation()

  const handleRoleSelect = (role: 'driver' | 'owner') => {
    if (role === 'driver') {
      navigation.navigate('DriverHome')
    } else {
      navigation.navigate('OwnerHome')
    }
  }

  return (
    <StyledSafeArea className="flex-1 bg-white">
      <StyledView className="p-6 flex-1 justify-center">
        <StyledText className="text-3xl font-bold mb-8 text-center">
          Choose Your Role
        </StyledText>

        <StyledButton 
          className="bg-white border-2 border-green-500 rounded-xl p-6 mb-4"
          onPress={() => handleRoleSelect('driver')}
        >
          <StyledView className="items-center">
            <Ionicons name="car-outline" size={48} color="#22C55E" />
            <StyledText className="text-xl font-bold mt-4 text-green-600">
              I'm a Driver
            </StyledText>
            <StyledText className="text-gray-600 text-center mt-2">
              Make payments and manage your vehicle
            </StyledText>
          </StyledView>
        </StyledButton>

        <StyledButton 
          className="bg-white border-2 border-blue-500 rounded-xl p-6"
          onPress={() => handleRoleSelect('owner')}
        >
          <StyledView className="items-center">
            <Ionicons name="business-outline" size={48} color="#3B82F6" />
            <StyledText className="text-xl font-bold mt-4 text-blue-600">
              I'm an Owner
            </StyledText>
            <StyledText className="text-gray-600 text-center mt-2">
              Manage your fleet and track payments
            </StyledText>
          </StyledView>
        </StyledButton>
      </StyledView>
    </StyledSafeArea>
  )
}