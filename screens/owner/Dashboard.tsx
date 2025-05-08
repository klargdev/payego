import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { styled } from 'nativewind'
import { SafeAreaView } from 'react-native-safe-area-context'

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledButton = styled(TouchableOpacity)
const StyledSafeArea = styled(SafeAreaView)

const MOCK_VEHICLES = [
  { id: '1', plate: 'ABC123', driver: 'John Doe', lastPayment: '2025-05-07' },
  { id: '2', plate: 'XYZ789', driver: 'Jane Smith', lastPayment: '2025-05-08' },
]

export default function OwnerDashboard() {
  return (
    <StyledSafeArea className="flex-1 bg-white">
      <ScrollView>
        <StyledView className="p-6">
          <StyledText className="text-2xl font-bold mb-6">
            Owner Dashboard
          </StyledText>

          {/* Summary Cards */}
          <StyledView className="flex-row justify-between mb-6">
            <StyledView className="flex-1 bg-green-50 p-4 rounded-xl mr-2">
              <StyledText className="text-green-800 font-medium">
                Total Vehicles
              </StyledText>
              <StyledText className="text-2xl font-bold text-green-900">
                {MOCK_VEHICLES.length}
              </StyledText>
            </StyledView>
            
            <StyledView className="flex-1 bg-blue-50 p-4 rounded-xl ml-2">
              <StyledText className="text-blue-800 font-medium">
                Total Revenue
              </StyledText>
              <StyledText className="text-2xl font-bold text-blue-900">
                ₦10,000
              </StyledText>
            </StyledView>
          </StyledView>

          {/* Vehicles Section */}
          <StyledView className="mb-6">
            <StyledView className="flex-row justify-between items-center mb-4">
              <StyledText className="text-lg font-semibold">
                Your Vehicles
              </StyledText>
              <StyledButton className="bg-green-500 px-4 py-2 rounded-full">
                <StyledText className="text-white font-medium">
                  Add Vehicle
                </StyledText>
              </StyledButton>
            </StyledView>

            {/* Vehicle List */}
            {MOCK_VEHICLES.map(vehicle => (
              <StyledView 
                key={vehicle.id}
                className="bg-white border border-gray-200 rounded-xl p-4 mb-3"
              >
                <StyledView className="flex-row justify-between mb-2">
                  <StyledText className="font-semibold">
                    {vehicle.plate}
                  </StyledText>
                  <StyledText className="text-green-600 font-medium">
                    Active
                  </StyledText>
                </StyledView>
                
                <StyledText className="text-gray-600 mb-2">
                  Driver: {vehicle.driver}
                </StyledText>
                
                <StyledText className="text-gray-600">
                  Last Payment: {vehicle.lastPayment}
                </StyledText>
              </StyledView>
            ))}
          </StyledView>

          {/* Quick Actions */}
          <StyledView className="bg-gray-50 rounded-xl p-4">
            <StyledText className="font-semibold mb-3">
              Quick Actions
            </StyledText>
            <StyledView className="flex-row justify-between">
              <StyledButton className="bg-white border border-gray-200 rounded-xl p-3 flex-1 mr-2">
                <StyledText className="text-center font-medium">
                  View Reports
                </StyledText>
              </StyledButton>
              <StyledButton className="bg-white border border-gray-200 rounded-xl p-3 flex-1 ml-2">
                <StyledText className="text-center font-medium">
                  Support
                </StyledText>
              </StyledButton>
            </StyledView>
          </StyledView>
        </StyledView>
      </ScrollView>
    </StyledSafeArea>
  )
}