import React from 'react'

import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


import Copa from './src/screens/Copa'
import Home from './src/screens/Home'
import BR from './src/screens/Br'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
          headerStyle:{
            backgroundColor: "#3b9c00",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }
      }>
        <Stack.Screen  name="Home" component={Home}  
        options={{title: "CAMPEONATOS"}}/>
        <Stack.Screen  name="Campeonato Brasileiro" component={BR}  
        options={{title: "CAMPEONATO BRASILEIRO"}}/>
        <Stack.Screen name="Copa do Brasil" component={Copa}
          options={{title: "COPA DO BRASIL"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
