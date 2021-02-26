import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from "./styles";
import { NavigationContainer } from '@react-navigation/native'; //Router (wrappen)
import { createStackNavigator } from '@react-navigation/stack'; //Switch
import HomeScreen from "./Home";

const Stack = createStackNavigator() //switch (routes in)

function Screen1( {navigation} ) {
   return <View style={styles.container}>
        <Text>NETFLIX</Text>
        <StatusBar style="auto" />
        <Button onPress={() => navigation.navigate('Home')} title={`Go to Homescreen`}>Home</Button>
    </View>
}

export default function App() {
    // console.log (styles)
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Start" component={Screen1} />
              <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}
