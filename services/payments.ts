import { Alert, Linking } from 'react-native'

interface PaymentConfig {
  amount: number
  reference: string
  metadata?: Record<string, any>
}

interface KowriResponse {
  success: boolean
  message: string
  data?: {
    paymentUrl: string
    reference: string
  }
}

const KOWRI_API_URL = 'https://api.kowri.com/v1'
const API_KEY = process.env.KOWRI_API_KEY || ''

export const initiatePayment = async ({ amount, reference, metadata }: PaymentConfig) => {
  try {
    const response = await fetch(`${KOWRI_API_URL}/payments/initialize`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        amount,
        reference,
        callbackUrl: 'payego://payment-callback',
        metadata
      })
    })

    const result: KowriResponse = await response.json()

    if (!result.success) {
      throw new Error(result.message)
    }

    if (result.data?.paymentUrl) {
      await Linking.openURL(result.data.paymentUrl)
    }

    return result.data
  } catch (error) {
    Alert.alert('Payment Error', 'Failed to initiate payment. Please try again.')
    throw error
  }
}

export const verifyPayment = async (reference: string) => {
  try {
    const response = await fetch(`${KOWRI_API_URL}/payments/verify/${reference}`, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`
      }
    })

    const result: KowriResponse = await response.json()
    return result.success
  } catch (error) {
    Alert.alert('Verification Error', 'Failed to verify payment status.')
    throw error
  }
}