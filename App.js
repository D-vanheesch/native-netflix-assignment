import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; //Router (wrappen)
import { createStackNavigator } from '@react-navigation/stack'; //Switch
import HomeIndex from "./screens/HomeIndex";
const Stack = createStackNavigator() //switch (routes in)

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeIndex} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}
