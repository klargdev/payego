// Example: components/payments/PaymentButton.tsx
import { TouchableOpacity, Text } from 'react-native'
import { tailwind } from 'nativewind'

interface PaymentButtonProps {
  onPress: () => void
  amount?: number
  disabled?: boolean
}

const StyledButton = (props: any) => {
  const tailwind = (className: string) => tailwind(className)
  return <TouchableOpacity {...props} style={tailwind(props.className)} />
}

const StyledText = (props: any) => {
  const tailwind = useTailwind()
  return <Text {...props} style={tailwind(props.className)} />
}

export default function PaymentButton({ onPress, amount, disabled }: PaymentButtonProps) {
  return (
    <StyledButton 
      className={`px-6 py-3 rounded-full ${disabled ? 'bg-gray-400' : 'bg-green-500'}`}
      onPress={onPress}
      disabled={disabled}
    >
      <StyledText className="text-white font-bold text-center">
        {amount ? `Pay ₦${amount.toLocaleString()}` : 'Make Payment'}
      </StyledText>
    </StyledButton>
  )
}