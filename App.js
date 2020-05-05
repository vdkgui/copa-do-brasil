import React from 'react'

import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


import Copa from './src/screens/Copa'
import HomeScreen from './src/screens/Home'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
          headerStyle:{
            backgroundColor: "#3b9c00",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }
      }>
        <Stack.Screen  name="Home" component={HomeScreen}  
        options={{title: "CAMPEONATOS"}}/>
        <Stack.Screen name="Copa do Brasil" component={Copa}
          options={{title: "COPA DO BRASIL"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
