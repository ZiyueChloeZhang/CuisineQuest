import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OpeningScreen from './screens/Opening/OpeningScreen';
import HomeScreen from './screens/Home/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="OpenningScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="OpenningScreen" component={OpeningScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;