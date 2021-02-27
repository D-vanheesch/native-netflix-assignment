import 'react-native-gesture-handler'
import * as React from 'react';
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native'; //Router (wrappen)
import { createStackNavigator } from '@react-navigation/stack'; //Switch
import HomeIndex from "./screens/HomeIndex";
import MovieShow from "./screens/MovieShow";
import StartPage from "./screens/StartPage";


const Stack = createStackNavigator() //switch (routes in)


export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="StartPage" component={StartPage} />
              <Stack.Screen name="HomeIndex" component={HomeIndex} />
              <Stack.Screen name="MovieShow" component={MovieShow} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}
