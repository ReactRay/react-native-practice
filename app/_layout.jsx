import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: '#ceb99fff',

      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: '400',
        letterSpacing: 4,
      },

    }}


  >
    <Stack.Screen name='index' options={{ title: 'Home' }} />
    <Stack.Screen name='notes' options={{ headerTitle: 'Notes' }} />
  </Stack>;
}
