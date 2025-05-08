import { Stack } from 'expo-router';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <SafeAreaView className="flex-1 bg-white">
        <View className="p-6">
          <Text className="text-2xl font-bold mb-6">
            Welcome to PayeGo
          </Text>
          
          <View className="bg-green-50 p-4 rounded-xl mb-6">
            <Text className="text-green-800 font-medium">
              Your Payment Platform
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
