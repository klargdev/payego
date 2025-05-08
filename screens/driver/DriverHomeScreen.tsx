import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { styled } from 'nativewind'
import { useAuth } from '../../context/AuthContext'
import { usePayment } from '../../context/PaymentContext'
import PaymentButton from '../../components/payments/PaymentButton'
import { SafeAreaView } from 'react-native-safe-area-context'

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledSafeArea = styled(SafeAreaView)

export default function DriverHomeScreen() {
  const { user } = useAuth()
  const { makePayment, loading } = usePayment()

  const handlePayment = async () => {
    try {
      // Example amount in kobo (₦1000)
      await makePayment(100000)
    } catch (error) {
      console.error('Payment failed:', error)
    }
  }

  return (
    <StyledSafeArea className="flex-1 bg-white">
      <ScrollView>
        <StyledView className="p-6">
          <StyledText className="text-2xl font-bold mb-6">
            Welcome, Driver
          </StyledText>
          
          {/* Quick Stats */}
          <StyledView className="bg-green-50 p-4 rounded-xl mb-6">
            <StyledText className="text-green-800 font-medium mb-2">
              Your Balance
            </StyledText>
            <StyledText className="text-3xl font-bold text-green-900">
              ₦5,000.00
            </StyledText>
          </StyledView>

          {/* Payment Section */}
          <StyledView className="bg-white border border-gray-200 rounded-xl p-4 mb-6">
            <StyledText className="text-lg font-semibold mb-4">
              Make Payment
            </StyledText>
            <PaymentButton
              onPress={handlePayment}
              amount={1000}
              disabled={loading}
            />
          </StyledView>

          {/* Recent Transactions */}
          <StyledText className="text-lg font-semibold mb-4">
            Recent Transactions
          </StyledText>
          <StyledView className="border border-gray-200 rounded-xl">
            {/* Placeholder for transaction list */}
            <StyledView className="p-4 border-b border-gray-200">
              <StyledText className="font-medium">Daily Payment</StyledText>
              <StyledText className="text-gray-600">Yesterday • ₦1,000</StyledText>
            </StyledView>
            <StyledView className="p-4">
              <StyledText className="font-medium">Daily Payment</StyledText>
              <StyledText className="text-gray-600">2 days ago • ₦1,000</StyledText>
            </StyledView>
          </StyledView>
        </StyledView>
      </ScrollView>
    </StyledSafeArea>
  )
}