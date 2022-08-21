import { useFonts, Lusitana_400Regular, Lusitana_700Bold } from '@expo-google-fonts/lusitana'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as SplashScreen from 'expo-splash-screen'
import { RootStackParams } from './navigation'
import Home from './pages/Home'
import Bio from './pages/Bio'

const Stack = createNativeStackNavigator<RootStackParams>()

const App = () => {
  const [fontsLoaded] = useFonts({ Lusitana_400Regular, Lusitana_700Bold })

  SplashScreen.preventAutoHideAsync()

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer onReady={() => SplashScreen.hideAsync()}>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ title: 'Pensadores pró liberdade' }} />

        <Stack.Screen
          name='Bio'
          component={Bio}
          options={({ route }) => ({ title: route.params.thinker.name })} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App