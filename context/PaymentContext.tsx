import React, { createContext, useContext, useState } from 'react'
import { initiatePayment, verifyPayment } from '../services/payments'

interface PaymentContextType {
  loading: boolean
  makePayment: (amount: number) => Promise<void>
  verifyTransaction: (reference: string) => Promise<boolean>
}

const PaymentContext = createContext<PaymentContextType | null>(null)

export function PaymentProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false)

  const makePayment = async (amount: number) => {
    setLoading(true)
    try {
      const reference = `PAY-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
      await initiatePayment({ 
        amount, 
        reference,
        metadata: {
          type: 'vehicle_payment'
        }
      })
    } finally {
      setLoading(false)
    }
  }

  const verifyTransaction = async (reference: string) => {
    setLoading(true)
    try {
      return await verifyPayment(reference)
    } finally {
      setLoading(false)
    }
  }

  return (
    <PaymentContext.Provider value={{ 
      loading, 
      makePayment, 
      verifyTransaction 
    }}>
      {children}
    </PaymentContext.Provider>
  )
}

export function usePayment() {
  const context = useContext(PaymentContext)
  if (!context) {
    throw new Error('usePayment must be used within a PaymentProvider')
  }
  return context
}