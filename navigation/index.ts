// navigation/index.ts
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export type RootStackParamList = {
  Auth: undefined
  DriverHome: undefined
  OwnerHome: undefined
  // ... other routes
}

export const Stack = createNativeStackNavigator<RootStackParamList>()