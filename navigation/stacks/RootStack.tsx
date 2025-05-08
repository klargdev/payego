import { createNativeStackNavigator } from '@react-navigation/native-stack'

export type RootStackParamList = {
  Auth: undefined
  DriverHome: undefined
  OwnerHome: undefined
  Payment: {
    amount: number
    reference: string
  }
  Profile: undefined
}

export const Stack = createNativeStackNavigator<RootStackParamList>()

export function RootStack() {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="DriverHome" component={DriverHomeScreen} />
      <Stack.Screen name="OwnerHome" component={OwnerHomeScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  )
}