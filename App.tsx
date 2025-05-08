// Suppress warnings from internal dependencies
import { LogBox } from 'react-native'
LogBox.ignoreLogs([
  '"shadow*" style props are deprecated',
  'props.pointerEvents is deprecated'
])

import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { AuthProvider } from './context/AuthContext'
import { PaymentProvider } from './context/PaymentContext'
import { RootStack } from './navigation/stacks/RootStack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AuthProvider>
          <PaymentProvider>
            <StatusBar style="auto" />
            <RootStack />
          </PaymentProvider>
        </AuthProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}